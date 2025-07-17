const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many contact form submissions, please try again later.'
  }
});

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration
const createTransporter = () => {
  // For production, use a service like SendGrid, Mailgun, or AWS SES
  if (process.env.EMAIL_SERVICE === 'sendgrid') {
    return nodemailer.createTransporter({
      service: 'SendGrid',
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
      }
    });
  } else if (process.env.EMAIL_SERVICE === 'mailgun') {
    return nodemailer.createTransporter({
      service: 'Mailgun',
      auth: {
        user: process.env.MAILGUN_USERNAME,
        pass: process.env.MAILGUN_PASSWORD
      }
    });
  } else if (process.env.EMAIL_SERVICE === 'aws-ses') {
    return nodemailer.createTransporter({
      SES: {
        aws: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: process.env.AWS_REGION
        }
      }
    });
  } else {
    // Fallback to SMTP (for development or custom SMTP servers)
    return nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }
};

// Email templates
const getAdminEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Consultation Request - Afro Alpha Limited</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; padding: 20px; text-align: center; }
        .content { background: #f8f9fa; padding: 30px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1e40af; }
        .value { margin-top: 5px; padding: 10px; background: white; border-left: 4px solid #3b82f6; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        .urgent { background: #fee2e2; border-left-color: #ef4444; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🛡️ New Consultation Request</h1>
          <p>Afro Alpha Limited - Security Services</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">👤 Client Information</div>
            <div class="value">
              <strong>Name:</strong> ${formData.name}<br>
              <strong>Company:</strong> ${formData.company}<br>
              <strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a><br>
              <strong>Phone:</strong> <a href="tel:${formData.phone}">${formData.phone}</a>
            </div>
          </div>

          <div class="field">
            <div class="label">🔧 Service Interest</div>
            <div class="value ${formData.service.includes('Emergency') || formData.service.includes('Fraud') ? 'urgent' : ''}">
              ${formData.service}
            </div>
          </div>

          <div class="field">
            <div class="label">💬 Message</div>
            <div class="value">
              ${formData.message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div class="field">
            <div class="label">📅 Submission Details</div>
            <div class="value">
              <strong>Date:</strong> ${new Date().toLocaleDateString()}<br>
              <strong>Time:</strong> ${new Date().toLocaleTimeString()}<br>
              <strong>Timezone:</strong> ${Intl.DateTimeFormat().resolvedOptions().timeZone}<br>
              <strong>Confidentiality:</strong> ✅ Agreed
            </div>
          </div>
        </div>

        <div class="footer">
          <p>This is an automated message from the Afro Alpha Limited website contact form.</p>
          <p>Please respond to the client within 24 hours as per company policy.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

const getClientConfirmationTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Consultation Request Received - Afro Alpha Limited</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; padding: 20px; text-align: center; }
        .content { background: #f8f9fa; padding: 30px; }
        .highlight { background: #dbeafe; padding: 15px; border-left: 4px solid #3b82f6; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        .contact-info { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🛡️ Thank You for Your Inquiry</h1>
          <p>Afro Alpha Limited - Security Services</p>
        </div>
        
        <div class="content">
          <p>Dear ${formData.name},</p>
          
          <p>Thank you for contacting Afro Alpha Limited regarding our <strong>${formData.service}</strong> services. We have received your consultation request and our team is reviewing your requirements.</p>

          <div class="highlight">
            <h3>📋 Your Request Summary:</h3>
            <p><strong>Service Interest:</strong> ${formData.service}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</p>
          </div>

          <h3>🕐 What Happens Next:</h3>
          <ul>
            <li><strong>Within 24 hours:</strong> Our team will review your request and contact you for an initial consultation</li>
            <li><strong>Initial Assessment:</strong> We'll discuss your specific security challenges and requirements</li>
            <li><strong>Customized Proposal:</strong> You'll receive a tailored solution proposal with transparent pricing</li>
            <li><strong>Implementation:</strong> Upon approval, we'll begin implementing your security solution</li>
          </ul>

          <div class="contact-info">
            <h3>📞 Contact Information:</h3>
            <p><strong>Phone:</strong> +234 (0) 123 456 7890 (Available 24/7 for emergencies)</p>
            <p><strong>Email:</strong> info@afroalphasecurityltd.com</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
          </div>

          <div class="highlight">
            <h3>🔒 Confidentiality Assurance:</h3>
            <p>All communications are treated with strict confidentiality. Our team maintains the highest standards of discretion and professional ethics.</p>
          </div>

          <p>We appreciate your trust in Afro Alpha Limited and look forward to protecting your business interests across Africa.</p>

          <p>Best regards,<br>
          <strong>The Afro Alpha Limited Team</strong><br>
          Security & Investigation Services</p>
        </div>

        <div class="footer">
          <p>Afro Alpha Limited - Protecting Your Brand and Business Across Africa</p>
          <p>This is an automated confirmation. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage('Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  body('company')
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage('Company name must be between 2 and 200 characters'),
  
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('phone')
    .trim()
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please provide a valid phone number'),
  
  body('service')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Please select a service'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Message must be between 10 and 2000 characters'),
  
  body('confidentiality')
    .isBoolean()
    .custom(value => value === true)
    .withMessage('You must agree to confidentiality terms')
];

// Contact form endpoint
app.post('/api/contact', contactLimiter, contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const formData = req.body;
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    // Email to admin and info addresses
    const adminMailOptions = {
      from: process.env.FROM_EMAIL || 'noreply@afroalphasecurityltd.com',
      to: ['admin@afroalphasecurityltd.com', 'info@afroalphasecurityltd.com'],
      subject: `🚨 New Consultation Request - ${formData.service}`,
      html: getAdminEmailTemplate(formData),
      priority: formData.service.includes('Emergency') || formData.service.includes('Fraud') ? 'high' : 'normal'
    };

    // Confirmation email to client
    const clientMailOptions = {
      from: process.env.FROM_EMAIL || 'noreply@afroalphasecurityltd.com',
      to: formData.email,
      subject: 'Consultation Request Received - Afro Alpha Limited',
      html: getClientConfirmationTemplate(formData)
    };

    // Send emails
    const [adminResult, clientResult] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    console.log('Admin email sent:', adminResult.messageId);
    console.log('Client confirmation sent:', clientResult.messageId);

    res.status(200).json({
      success: true,
      message: 'Your consultation request has been submitted successfully. You will receive a confirmation email shortly.',
      data: {
        submissionId: `AAL-${Date.now()}`,
        estimatedResponse: '24 hours'
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    res.status(500).json({
      success: false,
      message: 'We apologize, but there was an error processing your request. Please try again or contact us directly.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Afro Alpha Limited API'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong! Please try again later.'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Afro Alpha Limited API server running on port ${PORT}`);
  console.log(`📧 Email service: ${process.env.EMAIL_SERVICE || 'SMTP'}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;