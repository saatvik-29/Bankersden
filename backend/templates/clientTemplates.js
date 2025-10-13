// Professional email templates for clients

export const clientTemplates = {
  loanApplicationConfirmation: (data) => ({
    subject: `Loan Application Received - ${data.applicationNumber}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Loan Application Confirmation</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 28px; font-weight: 300; }
          .content { padding: 40px 30px; }
          .highlight-box { background-color: #f8f9ff; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 4px; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
          .info-item { background-color: #f9f9f9; padding: 15px; border-radius: 6px; }
          .info-label { font-weight: 600; color: #555; font-size: 14px; margin-bottom: 5px; }
          .info-value { color: #333; font-size: 16px; }
          .status-badge { display: inline-block; background-color: #28a745; color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500; }
          .footer { background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef; }
          .contact-info { margin: 20px 0; }
          .contact-info a { color: #667eea; text-decoration: none; }
          .social-links { margin-top: 20px; }
          .social-links a { display: inline-block; margin: 0 10px; color: #667eea; }
          @media (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; }
            .content { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>BankersDen</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Your Trusted Financial Partner</p>
          </div>
          
          <div class="content">
            <h2 style="color: #333; margin-bottom: 10px;">Thank you for your loan application!</h2>
            <p>Dear <strong>${data.full_name}</strong>,</p>
            
            <div class="highlight-box">
              <p style="margin: 0; font-size: 16px;">
                <span class="status-badge">Application Received</span>
              </p>
              <p style="margin: 15px 0 0 0; font-size: 18px; font-weight: 600; color: #333;">
                Application #${data.applicationNumber}
              </p>
            </div>
            
            <p>We have successfully received your <strong>${data.loan_type}</strong> application. Here are the details we have on file:</p>
            
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Loan Amount</div>
                <div class="info-value">₹${data.loan_amount?.toLocaleString('en-IN')}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Application Date</div>
                <div class="info-value">${new Date().toLocaleDateString('en-IN')}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Contact Email</div>
                <div class="info-value">${data.email}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Contact Phone</div>
                <div class="info-value">${data.phone}</div>
              </div>
            </div>
            
            <h3 style="color: #333; margin-top: 30px;">What happens next?</h3>
            <ul style="padding-left: 20px; line-height: 1.8;">
              <li><strong>Document Verification:</strong> Our team will review your application within 24-48 hours</li>
              <li><strong>Credit Assessment:</strong> We'll conduct a comprehensive credit evaluation</li>
              <li><strong>Approval Process:</strong> You'll receive an update on your application status</li>
              <li><strong>Disbursement:</strong> Upon approval, funds will be processed quickly</li>
            </ul>
            
            <div class="highlight-box">
              <p style="margin: 0; font-weight: 600; color: #333;">Need to update your application?</p>
              <p style="margin: 10px 0 0 0;">Please reply to this email with your application number and the details you'd like to modify.</p>
            </div>
          </div>
          
          <div class="footer">
            <div class="contact-info">
              <p style="margin: 0; font-weight: 600; color: #333;">Contact Us</p>
              <p style="margin: 5px 0;">Email: <a href="mailto:support@bankersden.com">support@bankersden.com</a></p>
              <p style="margin: 5px 0;">Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
              <p style="margin: 5px 0;">Website: <a href="https://bankersden.com">www.bankersden.com</a></p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                This is an automated message. Please do not reply directly to this email.
              </p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #999;">
                © 2024 BankersDen. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  contactFormConfirmation: (data) => ({
    subject: 'Thank you for contacting BankersDen',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Confirmation</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
          .header h1 { margin: 0; font-size: 28px; font-weight: 300; }
          .content { padding: 40px 30px; }
          .highlight-box { background-color: #f8f9ff; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 4px; }
          .footer { background-color: #f8f9fa; padding: 30px; text-align: center; border-top: 1px solid #e9ecef; }
          .contact-info a { color: #667eea; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>BankersDen</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Your Trusted Financial Partner</p>
          </div>
          
          <div class="content">
            <h2 style="color: #333; margin-bottom: 10px;">Thank you for reaching out!</h2>
            <p>Dear <strong>${data.full_name}</strong>,</p>
            
            <p>We have received your inquiry regarding <strong>${data.category}</strong> and appreciate you taking the time to contact us.</p>
            
            <div class="highlight-box">
              <p style="margin: 0; font-weight: 600; color: #333;">Your Message:</p>
              <p style="margin: 10px 0 0 0; font-style: italic;">"${data.message}"</p>
            </div>
            
            <p>Our team will review your inquiry and respond within <strong>24 hours</strong>. We're committed to providing you with the best financial solutions tailored to your needs.</p>
            
            <p>In the meantime, feel free to explore our website for more information about our services, or contact us directly if you have any urgent questions.</p>
          </div>
          
          <div class="footer">
            <div class="contact-info">
              <p style="margin: 0; font-weight: 600; color: #333;">Contact Us</p>
              <p style="margin: 5px 0;">Email: <a href="mailto:support@bankersden.com">support@bankersden.com</a></p>
              <p style="margin: 5px 0;">Phone: <a href="tel:+911234567890">+91 12345 67890</a></p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; font-size: 14px; color: #666;">
                This is an automated confirmation. We'll be in touch soon!
              </p>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #999;">
                © 2024 BankersDen. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `
  })
};