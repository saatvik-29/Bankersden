import OAuth2EmailService from './oauth2-email.js';

const testOAuth2 = async () => {
  console.log('🔐 Testing OAuth2 Email Service\n');

  const emailService = new OAuth2EmailService();

  // Test connection
  console.log('Testing connection...');
  const connectionTest = await emailService.testConnection();
  
  if (connectionTest.success) {
    console.log(`✅ Connection successful using: ${connectionTest.method}`);
  } else {
    console.log('❌ Connection failed:', connectionTest.error);
    return;
  }

  // Test sending email
  console.log('\nSending test email...');
  try {
    const info = await emailService.sendEmail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'OAuth2 Test Email - BankersDen',
      html: `
        <h2>🎉 OAuth2 Email Test Successful!</h2>
        <p>Your Gmail OAuth2 configuration is working perfectly.</p>
        <p><strong>Authentication Method:</strong> ${connectionTest.method}</p>
        <p><strong>Sent at:</strong> ${new Date().toISOString()}</p>
        <p><strong>From:</strong> ${process.env.SMTP_USER}</p>
        <p><strong>To:</strong> ${process.env.ADMIN_EMAIL}</p>
        
        <hr>
        <p><em>This email was sent using the same secure OAuth2 method used by professional email services like GMass.</em></p>
      `
    });

    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('\n🎉 OAuth2 setup is working perfectly!');
    
  } catch (error) {
    console.log('❌ Failed to send test email:', error.message);
  }
};

testOAuth2().catch(console.error);