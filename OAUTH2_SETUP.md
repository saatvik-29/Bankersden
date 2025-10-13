# Gmail OAuth2 Setup Guide

This guide will help you set up OAuth2 authentication for Gmail, which is more secure and reliable than app passwords.

## 🔐 Why OAuth2?

- **More Secure**: No passwords stored, uses tokens
- **More Reliable**: Less likely to be blocked by Gmail
- **Professional**: Same method used by GMass and other professional tools
- **Future-Proof**: Google's preferred authentication method

## 📋 Step-by-Step OAuth2 Setup

### Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **"Create Project"** or select existing project
3. Enter project name: "BankersDen Email"
4. Click **"Create"**

### Step 2: Enable Gmail API

1. In your project, go to **"APIs & Services"** → **"Library"**
2. Search for **"Gmail API"**
3. Click on **"Gmail API"** and click **"Enable"**

### Step 3: Create OAuth2 Credentials

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"+ CREATE CREDENTIALS"** → **"OAuth client ID"**
3. If prompted, configure OAuth consent screen:
   - Choose **"External"** (unless you have Google Workspace)
   - Fill in required fields:
     - App name: "BankersDen"
     - User support email: your email
     - Developer contact: your email
   - Click **"Save and Continue"**
   - Skip scopes for now, click **"Save and Continue"**
   - Add your email as test user, click **"Save and Continue"**

4. Create OAuth client ID:
   - Application type: **"Web application"**
   - Name: "BankersDen Email Client"
   - Authorized redirect URIs: `https://developers.google.com/oauthplayground`
   - Click **"Create"**

5. **Copy and save**:
   - Client ID
   - Client Secret

### Step 4: Get Refresh Token

1. Go to [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/)
2. Click the **gear icon** (⚙️) in top right
3. Check **"Use your own OAuth credentials"**
4. Enter your **Client ID** and **Client Secret**
5. In the left panel, find **"Gmail API v1"**
6. Select: `https://mail.google.com/`
7. Click **"Authorize APIs"**
8. Sign in with your Gmail account (`saatvikcool345@gmail.com`)
9. Click **"Allow"**
10. Click **"Exchange authorization code for tokens"**
11. **Copy the Refresh Token**

### Step 5: Update Environment Variables

Update your `backend/.env` file:

```env
SMTP_USER=saatvikcool345@gmail.com
ADMIN_EMAIL=saatvikcool345@gmail.com
PORT=5000

# OAuth2 Configuration
GMAIL_CLIENT_ID=your_actual_client_id_here
GMAIL_CLIENT_SECRET=your_actual_client_secret_here
GMAIL_REFRESH_TOKEN=your_actual_refresh_token_here

# Fallback: App Password (keep as backup)
SMTP_PASS=mssz nzbd qvks stez
```

### Step 6: Test OAuth2 Setup

```bash
cd backend
node test-oauth2.js
```

## 🔄 Automatic Fallback

Our system is designed with automatic fallback:

1. **First**: Try OAuth2 authentication
2. **Fallback**: Use app password if OAuth2 fails
3. **Always works**: You'll never lose email functionality

## 🚀 Benefits of This Setup

### Security
- **No passwords in code**: Uses secure tokens
- **Automatic token refresh**: Never expires
- **Revokable access**: Can be disabled from Google Console

### Reliability
- **Less blocking**: Gmail trusts OAuth2 more than passwords
- **Professional grade**: Same as enterprise email tools
- **Future-proof**: Won't break with Gmail policy changes

### Flexibility
- **Multiple environments**: Easy to set up dev/staging/prod
- **Team access**: Multiple developers can have their own tokens
- **Monitoring**: Better logging and error handling

## 🛠 Troubleshooting

### Common Issues:

1. **"Invalid client" error**:
   - Check Client ID and Secret are correct
   - Ensure redirect URI is exactly: `https://developers.google.com/oauthplayground`

2. **"Invalid scope" error**:
   - Make sure you selected `https://mail.google.com/` scope
   - Re-authorize if needed

3. **"Refresh token expired"**:
   - Generate new refresh token from OAuth Playground
   - Update .env file

4. **"Access blocked"**:
   - Check OAuth consent screen is configured
   - Add your email as test user
   - Verify Gmail API is enabled

### Testing Commands:

```bash
# Test OAuth2 connection
cd backend && node test-oauth2.js

# Test full email sending
cd backend && node test-email-oauth2.js

# Check current configuration
cd backend && node check-config.js
```

## 📊 Comparison: OAuth2 vs App Password

| Feature | OAuth2 | App Password |
|---------|--------|--------------|
| Security | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Reliability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Setup Complexity | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Future-Proof | ⭐⭐⭐⭐⭐ | ⭐⭐ |
| Professional Use | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

Your email system will now use the same secure authentication method as professional email services like GMass! 🎉