# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for your Viron UI quote form.

## Prerequisites

1. **Google Cloud Console Account**: You need a Google Cloud Console account
2. **Google Sheets API Enabled**: You've already enabled the Google Sheets API in your Google Cloud Console

## Step 1: Create a Google Cloud Project

If you haven't already:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Make sure the Google Sheets API is enabled

## Step 2: Create a Service Account

1. In Google Cloud Console, go to **IAM & Admin** > **Service Accounts**
2. Click **+ CREATE SERVICE ACCOUNT**
3. Enter a name (e.g., "viron-quote-service")
4. Add a description (optional)
5. Click **CREATE AND CONTINUE**
6. Skip the role assignment for now (we'll handle permissions later)
7. Click **DONE**

## Step 3: Generate Service Account Key

1. Find your newly created service account in the list
2. Click on the service account email
3. Go to the **Keys** tab
4. Click **ADD KEY** > **Create new key**
5. Select **JSON** format
6. Click **CREATE**

This will download a JSON file with your service account credentials.

## Step 4: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Viron Quote Requests"
4. Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

Example URL: `https://docs.google.com/spreadsheets/d/1ABC123...XYZ/edit`
Spreadsheet ID: `1ABC123...XYZ`

## Step 5: Share the Google Sheet with Your Service Account

1. Open your Google Sheet
2. Click **Share** button
3. Paste your service account email (from the JSON file) in the share dialog
4. Give it **Editor** permissions
5. Click **Share**

## Step 6: Set Up Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Google Sheets API Configuration
GOOGLE_PROJECT_ID=your-project-id-here
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_CONTENT_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_PRIVATE_KEY_ID=your-private-key-id-here
GOOGLE_CLIENT_ID=your-client-id-here
GOOGLE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/your-service-account%40your-project.iam.gserviceaccount.com
GOOGLE_SHEET_ID=your-google-sheet-id-here
```

### How to get these values:

1. **GOOGLE_PROJECT_ID**: From your Google Cloud Console project
2. **GOOGLE_CLIENT_EMAIL**: The `client_email` field from your JSON key file
3. **GOOGLE_PRIVATE_KEY**: The `private_key` field from your JSON key file (keep the quotes and \n)
4. **GOOGLE_PRIVATE_KEY_ID**: The `private_key_id` field from your JSON key file
5. **GOOGLE_CLIENT_ID**: The `client_id` field from your JSON key file
6. **GOOGLE_CLIENT_X509_CERT_URL**: The `client_x509_cert_url` field from your JSON key file
7. **GOOGLE_SHEET_ID**: The ID from your Google Sheet URL

## Step 7: Set Up Sheet Headers (Optional)

The API will automatically create headers in your Google Sheet. The headers will be:
- Timestamp
- First Name
- Last Name
- Email
- Phone
- Address
- Street
- City
- State
- ZIP Code
- Property Type
- Roof Type
- Monthly Bill (₹)
- System Size
- Additional Info

## Step 8: Test the Integration

1. Start your Next.js development server: `npm run dev`
2. Go to `/quote` page
3. Fill out and submit the form
4. Check your Google Sheet - you should see the new row with the form data

## Troubleshooting

### Common Issues:

1. **"Invalid credentials" error**:
   - Double-check your service account key JSON file
   - Make sure you've shared the Google Sheet with your service account email
   - Verify the environment variables are correctly set

2. **"Spreadsheet not found" error**:
   - Verify your GOOGLE_SHEET_ID is correct
   - Make sure the service account has access to the spreadsheet

3. **"Google Sheets API has not been used" error**:
   - Make sure you've enabled the Google Sheets API in Google Cloud Console

### Security Notes:

- Never commit your `.env.local` file to version control
- The service account key gives access to your Google Sheets - keep it secure
- Consider rotating the service account key periodically

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Check the Next.js server logs for API errors
3. Verify all environment variables are set correctly
4. Ensure the Google Sheet is shared with the correct service account email
