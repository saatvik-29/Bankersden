// SMTP Configuration - Dynamic function to ensure env vars are loaded
export const getSmtpConfig = () => ({
  user: process.env.SMTP_USER || "your-email@gmail.com",
  pass: process.env.SMTP_PASS || "your-app-password",
  adminEmail: process.env.ADMIN_EMAIL || "saatvikcool345@gmail.com",
  smtpPort: 587, // SMTP port for Gmail
});

// Legacy export for compatibility
export const smtpConfig = getSmtpConfig();
