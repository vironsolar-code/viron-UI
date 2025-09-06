import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

// Google Sheets configuration
const SPREADSHEET_ID = '1SF51eS24cctTDOOYoG3W6b4OKh9dJwSc89Z4jAppBYE';
const SHEET_NAME = 'Sheet1'; // Default sheet name in Google Sheets

// Service account credentials - hardcoded for testing
const getCredentials = () => {
  const privateKey = `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDGlioLJe8I22R6\n/c3xiZnIBGv9RzTAOCmjMSqnCO/f6m9Y8pqRWJBS9wfKkBbW4zt/vruOsO/hS09a\nHfEyWrgbdg89lre8QQwxhrk8vvmkiBzATgh5hFQOH8nPy/zauq2DM9Rsu/Wwqjim\nhlJ1BpHml5UKuC5mMIuplAVczqRAcmbDgq7/MCYAvz9vNXTtaFFqI3N3uy5Bfhnp\njkDXZzUB1Yqw3TGqYhJUw8dA/Nm1+TPgPN+rYqIVYFAe3DXM1vm+hUByPaiTBk7D\nS8nBhwks2YLI2EPyOZqRmTzC99DLJ5OafqHRMtSsqegyPlzgwz6mbX0TOgkzV86m\n7QDqUb2FAgMBAAECggEARO/zB2yzNplmn7WErQEN89vpGwMBgmrctWyHeHXHQ61v\n2upZEvSyIULlHwH3E8DNMlLlbCrrEwQgN1HmnYrVl57buo8cGEtibrzsh/Rp2B5y\nEKXmFj0EKuUJG0wealXcjwvKhbaYGyx0PwapEDvoISrkz9RRMyNOEF+0ntuTNFWF\n1KolC/CufV5kUF7q+fiXgiucpsmuXYYIYDzrHp3UoxWTM24FVK79HWCoR/4y/DZy\n556drWeOdlkuHBC6y4SUki8WnBDslFW+PzP4PNBOBdlh+6HqXn7zZMAziEmhyAnh\neBILW2h/yWrSa1Xfk4Ta0J8auXFDHUfr0ATB0IVAjwKBgQDnFhI+7wcZKy7vp8IH\nPvftGZyHpXcbI4qlmDXtXkU7NOgXrEjNP18nFeRYrsEHOgy5BUs0WCTOzxUCiMIO\npo5fHsd15lQ8PCxm2zJDLNd/rADaxkrQZ8s7H7Dn4b2HEh5yPXRC2JKiZPORKM8s\nh7MLR3tJOf0kJkTsZ6VQan7r6wKBgQDb/xwxixSA/NM0qFocrnjWSzbpizmi4duw\nshRXDoQOKyGOcK+AkcivEwkdcdOis4o7pjErXItw318eg62RYECUeLXVFqBqU+kh\nLUWi3FumzZbkl9/WJEtSkd/03jLsJSRpdABHPu7ZZFZf+DWGwz+PBdPEKU+RTzoQ\nXcGzwmjQTwKBgAOIeNrxeKBP4rXTUMofklbTr2r7gqitkG8btqdca56OHoZOIgbR\nUzkbwpQAh/7+SjeB9zZjqpxm2iFhyeXDciXOKKqKzPrmyJ8B9vDD/L98975gjcBF\n9ft/bor9DpLEGicQ/XgQK53EAV1UzGYX5QrlGuNxuYcV9rPOmd5y4mHlAoGBANUB\nFm0pujqBkIVlk4o9q6XgwVQyhyWcBTf51BPObDHDtQPTOzoC7QoGJkcqFL1tlKPY\nb7cKLcClpdVHrWAaj6yxi2y8MamBgTGsQcZEEUFZwYWnPwR5s6xIrUzLbwaRl8W6\nmSJiXqSBr9fP3ROULA/wlm9RiEarLQ73mDrSOuWlAoGBAIKzDtRx2AwHoJiEAotg\nFqb3YVY69gVD37rOzWQ3vZWGfAew9kdJ5Jw/GS69MEJasyPKEUyaG+gU0P8jUMM4\nDU0x4GnvjxTnNYJyTLBmdGxPvTRP65V4g2o4dJDOkEmsx81CO2lIgX8x7g5Y62fP\n3IiTU1M1qPsFkA9h2wL5i/pS\n-----END PRIVATE KEY-----\n`;

  return {
    type: 'service_account',
    project_id: 'second-form-470618-e6',
    private_key_id: '4f9d98643c0f90776c42a7444900257771354996',
    private_key: privateKey,
    client_email: 'viron-solar@second-form-470618-e6.iam.gserviceaccount.com',
    client_id: '114078082170109021921',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/viron-solar%40second-form-470618-e6.iam.gserviceaccount.com',
  };
};

export async function POST(request: NextRequest) {
  try {
    // Using hardcoded credentials for testing

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
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });

      // Handle OpenSSL/private key errors
      if (error.message.includes('DECODER routines') || error.message.includes('unsupported')) {
        return NextResponse.json(
          { error: 'Authentication configuration error. Please check your Google service account private key format.' },
          { status: 500 }
        );
      }

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

      // Handle credential validation errors
      if (error.message.includes('Invalid private key format')) {
        return NextResponse.json(
          { error: 'Invalid private key format. Please ensure your GOOGLE_PRIVATE_KEY environment variable contains a valid PEM-formatted private key.' },
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
