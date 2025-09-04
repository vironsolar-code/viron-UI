import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// Google Sheets configuration
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = 'Sheet1'; // Default sheet name in Google Sheets

// Service account credentials from environment variables
const getCredentials = () => {
  // Ensure private key is properly formatted for Vercel
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;
  if (privateKey) {
    // Handle different possible formats of the private key in environment variables
    privateKey = privateKey.replace(/\\n/g, '\n');
    // Ensure proper line breaks for PEM format
    if (!privateKey.includes('\n')) {
      privateKey = privateKey.replace(/-----BEGIN PRIVATE KEY-----/, '-----BEGIN PRIVATE KEY-----\n');
      privateKey = privateKey.replace(/-----END PRIVATE KEY-----/, '\n-----END PRIVATE KEY-----');
      // Add line breaks every 64 characters in the key body
      const keyStart = '-----BEGIN PRIVATE KEY-----\n';
      const keyEnd = '\n-----END PRIVATE KEY-----';
      const keyBody = privateKey.replace(/-----BEGIN PRIVATE KEY-----\n?/, '').replace(/\n?-----END PRIVATE KEY-----/, '');
      const formattedKeyBody = keyBody.match(/.{1,64}/g)?.join('\n') || keyBody;
      privateKey = keyStart + formattedKeyBody + keyEnd;
    }
  }

  return {
    type: 'service_account',
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: privateKey,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL,
  };
};

export async function POST(request: NextRequest) {
  try {
    // Check if environment variables are loaded
    if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      console.error('Missing environment variables:');
      console.error('GOOGLE_SHEET_ID:', process.env.GOOGLE_SHEET_ID ? 'SET' : 'NOT SET');
      console.error('GOOGLE_CLIENT_EMAIL:', process.env.GOOGLE_CLIENT_EMAIL ? 'SET' : 'NOT SET');
      console.error('GOOGLE_PRIVATE_KEY:', process.env.GOOGLE_PRIVATE_KEY ? 'SET' : 'NOT SET');

      return NextResponse.json(
        { error: 'Server configuration error. Environment variables not loaded.' },
        { status: 500 }
      );
    }

    const formData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'phone', 'zipCode', 'monthlyBill'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Authenticate with Google Sheets API
    const credentials = getCredentials();
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Check if headers exist, create them if they don't
    const headersExist = await checkHeadersExist();
    if (!headersExist) {
      console.log('Headers not found, creating them...');
      const headersCreated = await createSheetHeaders();
      if (!headersCreated) {
        return NextResponse.json(
          { error: 'Failed to create sheet headers. Please try again.' },
          { status: 500 }
        );
      }
    }

    // Prepare the data to append
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    // Format monthly bill range for better readability
    const formatBillRange = (range: string) => {
      const ranges: { [key: string]: string } = {
        'less-1500': 'Less than ₹1500',
        '1500-2500': '₹1500 - ₹2500',
        '2500-4000': '₹2500 - ₹4000',
        '4000-8000': '₹4000 - ₹8000',
        'more-8000': 'More than ₹8000'
      };
      return ranges[range] || range || '';
    };

    const rowData = [
      timestamp,
      formData.name,
      formData.email || '',
      formData.phone,
      formData.zipCode,
      formData.propertyType || '',
      formatBillRange(formData.monthlyBill) || '',
      formData.additionalInfo || ''
    ];

    // Append data to Google Sheet (starting from row 2 to preserve headers)
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:A`, // Append to the next available row
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json(
      { message: 'Quote request submitted successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);

    // Log more details for debugging
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }

    // Handle specific Google API errors
    if (error instanceof Error) {
      if (error.message.includes('SPREADSHEET_ID')) {
        return NextResponse.json(
          { error: 'Google Sheets configuration error. Please check your SPREADSHEET_ID.' },
          { status: 500 }
        );
      }
      if (error.message.includes('access_token') || error.message.includes('insufficient_scope')) {
        return NextResponse.json(
          { error: 'Authentication error. Please ensure the Google Sheet is shared with the service account email.' },
          { status: 500 }
        );
      }
      if (error.message.includes('permission') || error.message.includes('forbidden')) {
        return NextResponse.json(
          { error: 'Permission denied. Please share the Google Sheet with: viron-solar-get-quote@testing-470818.iam.gserviceaccount.com' },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        error: 'Failed to submit quote request. Most likely the Google Sheet is not shared with the service account. Please share your Google Sheet with: viron-solar-get-quote@testing-470818.iam.gserviceaccount.com'
      },
      { status: 500 }
    );
  }
}

// Function to create headers if they don't exist
async function createSheetHeaders() {
  try {
    const credentials = getCredentials();
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const headers = [
      'Timestamp (IST)',
      'Full Name',
      'Email Address',
      'Phone Number',
      'PIN Code',
      'Property Type',
      'Monthly Electricity Bill Range',
      'Additional Requirements'
    ];

    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID!,
      range: `${SHEET_NAME}!A1:H1`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [headers],
      },
    });

    console.log('Sheet headers created successfully');
    return true;
  } catch (error) {
    console.error('Error creating sheet headers:', error);
    return false;
  }
}

// Function to check if headers exist
async function checkHeadersExist() {
  try {
    const credentials = getCredentials();
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID!,
      range: `${SHEET_NAME}!A1:H1`,
    });

    const values = response.data.values;
    if (!values || values.length === 0 || !values[0] || values[0].length === 0) {
      return false; // No headers exist
    }

    // Check if the first cell has content (indicating headers exist)
    return values[0][0] && values[0][0].trim() !== '';
  } catch (error) {
    console.log('Headers check failed, will create new headers');
    return false;
  }
}
