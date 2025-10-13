import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

class OAuth2EmailService {
  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground' // Redirect URL
    );

    if (process.env.GMAIL_REFRESH_TOKEN) {
      this.oauth2Client.setCredentials({
        refresh_token: process.env.GMAIL_REFRESH_TOKEN
      });
    }
  }

  async createTransporter() {
    try {
      // Get access token
      const { token } = await this.oauth2Client.getAccessToken();

      // Create transporter with OAuth2
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.SMTP_USER,
          clientId: process.env.GMAIL_CLIENT_ID,
          clientSecret: process.env.GMAIL_CLIENT_SECRET,
          refreshToken: process.env.GMAIL_REFRESH_TOKEN,
          accessToken: token,
        },
      });

      return transporter;
    } catch (error) {
      console.log('OAuth2 failed, falling back to app password');
      
      // Fallback to app password method
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
    }
  }

  async sendEmail(mailOptions) {
    const transporter = await this.createTransporter();
    return await transporter.sendMail(mailOptions);
  }

  async testConnection() {
    try {
      const transporter = await this.createTransporter();
      await transporter.verify();
      return { success: true, method: 'OAuth2' };
    } catch (error) {
      console.log('OAuth2 test failed:', error.message);
      
      // Test fallback
      try {
        const fallbackTransporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
          }
        });
        
        await fallbackTransporter.verify();
        return { success: true, method: 'App Password (Fallback)' };
      } catch (fallbackError) {
        return { success: false, error: fallbackError.message };
      }
    }
  }
}

export default OAuth2EmailService;