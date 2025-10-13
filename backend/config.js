// SMTP Configuration - Dynamic function to ensure env vars are loaded
export const getSmtpConfig = () => ({
  user: process.env.SMTP_USER || "your-email@gmail.com",
  pass: process.env.SMTP_PASS || "your-app-password",
  adminEmail: process.env.ADMIN_EMAIL || "saatvikcool345@gmail.com",
  port: process.env.PORT || 5000,
});

// Legacy export for compatibility
export const smtpConfig = getSmtpConfig();
