// Professional email templates for admin notifications

export const adminTemplates = {
  newLoanApplication: (data, applicationNumber) => ({
    subject: `🔔 New Loan Application - ${data.loan_type} - ${applicationNumber}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Loan Application</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 700px; margin: 0 auto; background-color: #ffffff; }
          .header { background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); color: white; padding: 25px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
          .alert-badge { background-color: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px; display: inline-block; margin-top: 10px; }
          .content { padding: 30px; }
          .app-header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #dc3545; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
          .info-item { background-color: #f9f9f9; padding: 15px; border-radius: 6px; border: 1px solid #e9ecef; }
          .info-label { font-weight: 600; color: #555; font-size: 13px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px; }
          .info-value { color: #333; font-size: 15px; font-weight: 500; }
          .section { margin: 25px 0; }
          .section h3 { color: #dc3545; margin-bottom: 15px; font-size: 18px; border-bottom: 2px solid #f8f9fa; padding-bottom: 8px; }
          .priority-high { background-color: #fff5f5; border-left: 4px solid #dc3545; }
          .priority-medium { background-color: #fff8e1; border-left: 4px solid #ffc107; }
          .action-buttons { text-align: center; margin: 30px 0; }
          .btn { display: inline-block; padding: 12px 24px; margin: 0 10px; text-decoration: none; border-radius: 6px; font-weight: 600; }
          .btn-primary { background-color: #007bff; color: white; }
          .btn-success { background-color: #28a745; color: white; }
          .footer { background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef; font-size: 14px; color: #666; }
          @media (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; }
            .content { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏦 BankersDen Admin Portal</h1>
            <div class="alert-badge">New Application Alert</div>
          </div>
          
          <div class="content">
            <div class="app-header">
              <h2 style="margin: 0 0 10px 0; color: #dc3545;">New Loan Application Received</h2>
              <p style="margin: 0; font-size: 16px;"><strong>Application #${applicationNumber}</strong></p>
              <p style="margin: 5px 0 0 0; color: #666;">Received: ${new Date().toLocaleString('en-IN')}</p>
            </div>
            
            <div class="section">
              <h3>📋 Application Overview</h3>
              <div class="info-grid">
                <div class="info-item priority-high">
                  <div class="info-label">Loan Type</div>
                  <div class="info-value">${data.loan_type}</div>
                </div>
                <div class="info-item priority-high">
                  <div class="info-label">Loan Amount</div>
                  <div class="info-value">₹${data.loan_amount?.toLocaleString('en-IN')}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Monthly Income</div>
                  <div class="info-value">₹${data.monthly_income?.toLocaleString('en-IN')}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Employment Type</div>
                  <div class="info-value">${data.employment_type}</div>
                </div>
              </div>
            </div>
            
            <div class="section">
              <h3>👤 Personal Information</h3>
              <div class="info-grid">
                <div class="info-item">
                  <div class="info-label">Full Name</div>
                  <div class="info-value">${data.full_name}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Email</div>
                  <div class="info-value">${data.email}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">Phone</div>
                  <div class="info-value">${data.phone}</div>
                </div>
                <div class="info-item">
                  <div class="info-label">PAN Number</div>
                  <div class="info-value">${data.pan_number}</div>
                </div>
              </div>
              
              <div class="info-item" style="margin-top: 15px;">
                <div class="info-label">Address</div>
                <div class="info-value">${data.address}, ${data.city}, ${data.state} - ${data.pincode}</div>
              </div>
            </div>
            
            ${data.property_value || data.car_make || data.business_type || data.education_institution || data.gold_weight ? `
            <div class="section">
              <h3>🔍 Additional Details</h3>
              <div class="info-grid">
                ${data.property_value ? `
                <div class="info-item">
                  <div class="info-label">Property Value</div>
                  <div class="info-value">₹${data.property_value?.toLocaleString('en-IN')}</div>
                </div>` : ''}
                ${data.down_payment ? `
                <div class="info-item">
                  <div class="info-label">Down Payment</div>
                  <div class="info-value">₹${data.down_payment?.toLocaleString('en-IN')}</div>
                </div>` : ''}
                ${data.car_make ? `
                <div class="info-item">
                  <div class="info-label">Vehicle</div>
                  <div class="info-value">${data.car_make} ${data.car_model} (${data.car_year})</div>
                </div>` : ''}
                ${data.business_type ? `
                <div class="info-item">
                  <div class="info-label">Business</div>
                  <div class="info-value">${data.business_type} (${data.business_vintage} years)</div>
                </div>` : ''}
                ${data.education_institution ? `
                <div class="info-item">
                  <div class="info-label">Education</div>
                  <div class="info-value">${data.course_name} at ${data.education_institution}</div>
                </div>` : ''}
                ${data.gold_weight ? `
                <div class="info-item">
                  <div class="info-label">Gold Details</div>
                  <div class="info-value">${data.gold_weight}g (${data.gold_purity})</div>
                </div>` : ''}
                ${data.property_type ? `
                <div class="info-item">
                  <div class="info-label">Property Type</div>
                  <div class="info-value">${data.property_type}</div>
                </div>` : ''}
              </div>
            </div>` : ''}
            
            <div class="action-buttons">
              <a href="mailto:${data.email}" class="btn btn-primary">📧 Contact Applicant</a>
              <a href="tel:${data.phone}" class="btn btn-success">📞 Call Now</a>
            </div>
            
            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 6px; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; font-weight: 600; color: #856404;">⚡ Action Required</p>
              <p style="margin: 5px 0 0 0; color: #856404;">Please review this application and respond to the customer within 24-48 hours.</p>
            </div>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">BankersDen Admin Portal - Application Management System</p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">This email contains confidential customer information.</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  newContactForm: (data) => ({
    subject: `💬 New Contact Form - ${data.category}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
          .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
          .header { background: linear-gradient(135deg, #17a2b8 0%, #138496 100%); color: white; padding: 25px; text-align: center; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
          .content { padding: 30px; }
          .contact-header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #17a2b8; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
          .info-item { background-color: #f9f9f9; padding: 15px; border-radius: 6px; border: 1px solid #e9ecef; }
          .info-label { font-weight: 600; color: #555; font-size: 13px; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 0.5px; }
          .info-value { color: #333; font-size: 15px; font-weight: 500; }
          .message-box { background-color: #f8f9ff; border: 1px solid #e3e6ff; border-radius: 8px; padding: 20px; margin: 20px 0; }
          .action-buttons { text-align: center; margin: 30px 0; }
          .btn { display: inline-block; padding: 12px 24px; margin: 0 10px; text-decoration: none; border-radius: 6px; font-weight: 600; }
          .btn-primary { background-color: #007bff; color: white; }
          .btn-success { background-color: #28a745; color: white; }
          .footer { background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef; font-size: 14px; color: #666; }
          @media (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; }
            .content { padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>💬 BankersDen Contact Form</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">New Customer Inquiry</p>
          </div>
          
          <div class="content">
            <div class="contact-header">
              <h2 style="margin: 0 0 10px 0; color: #17a2b8;">New Contact Form Submission</h2>
              <p style="margin: 0; color: #666;">Received: ${new Date().toLocaleString('en-IN')}</p>
            </div>
            
            <div class="info-grid">
              <div class="info-item">
                <div class="info-label">Full Name</div>
                <div class="info-value">${data.full_name}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Email</div>
                <div class="info-value">${data.email}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Phone</div>
                <div class="info-value">${data.phone}</div>
              </div>
              <div class="info-item">
                <div class="info-label">Category</div>
                <div class="info-value">${data.category}</div>
              </div>
            </div>
            
            <div class="message-box">
              <h3 style="margin: 0 0 15px 0; color: #333;">Customer Message:</h3>
              <p style="margin: 0; font-style: italic; line-height: 1.6;">"${data.message}"</p>
            </div>
            
            <div class="action-buttons">
              <a href="mailto:${data.email}?subject=Re: Your inquiry about ${data.category}" class="btn btn-primary">📧 Reply to Customer</a>
              <a href="tel:${data.phone}" class="btn btn-success">📞 Call Customer</a>
            </div>
            
            <div style="background-color: #d1ecf1; border: 1px solid #bee5eb; border-radius: 6px; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; font-weight: 600; color: #0c5460;">📋 Follow-up Required</p>
              <p style="margin: 5px 0 0 0; color: #0c5460;">Please respond to this customer inquiry within 24 hours to maintain our service standards.</p>
            </div>
          </div>
          
          <div class="footer">
            <p style="margin: 0;">BankersDen Customer Service Portal</p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">This email contains customer contact information.</p>
          </div>
        </div>
      </body>
      </html>
    `
  })
};