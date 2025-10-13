# Gmail SMTP Setup Guide

This project uses Gmail SMTP for sending emails. Follow these simple steps to set up email functionality.

## Step-by-Step Setup Process

### Step 1: Enable 2-Factor Authentication on Gmail
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google", click **2-Step Verification**
4. Follow the setup process to enable 2FA (required for app passwords)

### Step 2: Generate App Password
1. After enabling 2FA, go back to **Security** settings
2. Under "Signing in to Google", click **App passwords**
3. Select **Mail** from the "Select app" dropdown
4. Select **Other (Custom name)** from the "Select device" dropdown
5. Enter a name like "BankersDen Email" 
6. Click **Generate**
7. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

### Step 3: Update Environment Variables
Open your `server/.env` file and update:

```env
SMTP_USER=your_gmail_address@gmail.com
SMTP_PASS=your_16_character_app_password
ADMIN_EMAIL=your_gmail_address@gmail.com
PORT=3001
```

**Example:**
```env
SMTP_USER=saatvikflip@gmail.com
SMTP_PASS=abcd efgh ijkl mnop
ADMIN_EMAIL=saatvikflip@gmail.com
PORT=3001
```

### Step 4: Test the Setup
1. Start your server:
   ```bash
   npm run server
   ```

2. Test with a contact form submission or loan application
3. Check your Gmail inbox for admin notifications
4. Check the recipient's email for confirmation messages

## How to Change Password Later

### If you need to change the Gmail password:

1. **Go to Google Account Security:**
   - Visit [myaccount.google.com](https://myaccount.google.com/)
   - Click **Security** → **App passwords**

2. **Revoke old password:**
   - Find your existing app password (e.g., "BankersDen Email")
   - Click the trash/delete icon next to it

3. **Generate new password:**
   - Click **Select app** → **Mail**
   - Click **Select device** → **Other (Custom name)**
   - Enter name: "BankersDen Email New"
   - Click **Generate**
   - Copy the new 16-character password

4. **Update your .env file:**
   ```env
   SMTP_PASS=new_16_character_password_here
   ```

5. **Restart your server:**
   ```bash
   npm run server
   ```

## Troubleshooting

### Common Issues:

1. **"Invalid login" error:**
   - Make sure 2FA is enabled on your Gmail account
   - Use the app password, not your regular Gmail password
   - Remove spaces from the app password

2. **"Less secure app access" error:**
   - This shouldn't happen with app passwords
   - Make sure you're using the app password, not regular password

3. **Emails not sending:**
   - Check your internet connection
   - Verify the app password is correct
   - Make sure the Gmail account is active

### Testing Commands:

You can test the email functionality by making API calls:

```bash
# Test contact form
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "category": "General Inquiry",
    "message": "This is a test message"
  }'
```

## Security Notes

- **Never share your app password**
- **Don't commit the .env file to version control**
- **Regenerate app passwords periodically**
- **Use different app passwords for different applications**

Your email system is now set up with Gmail SMTP and professional templates!