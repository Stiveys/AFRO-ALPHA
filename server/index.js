const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const { MailerSend, EmailParams, Sender, Recipient } = require('mailersend');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize MailerSend
const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY,
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
});
app.use(limiter);

// Contact form rate limiting
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact form submissions per hour
  message: 'Too many contact form submissions, please try again later.',
});

// Validation middleware
const validateContactForm = [
  body('name').trim().isLength({ min: 2, max: 100 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('phone').optional().trim().isLength({ max: 20 }).escape(),
  body('company').optional().trim().isLength({ max: 100 }).escape(),
  body('service').trim().isLength({ min: 1, max: 100 }).escape(),
  body('message').trim().isLength({ min: 10, max: 1000 }).escape(),
];

// Contact form endpoint
app.post('/api/contact', contactLimiter, validateContactForm, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array(),
      });
    }

    const { name, email, phone, company, service, message } = req.body;

    // Create email content
    const emailSubject = `New Consultation Request - ${service}`;
    const emailContent = `
      <h2>New Consultation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><em>This message was sent from the Afro Alpha Security website contact form.</em></p>
    `;

    // Send email to admin and info addresses
    const sentFrom = new Sender(process.env.FROM_EMAIL, "Afro Alpha Security");
    
    const recipients = [
      new Recipient(process.env.ADMIN_EMAIL, "Admin"),
      new Recipient(process.env.INFO_EMAIL, "Info")
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(new Recipient(email, name))
      .setSubject(emailSubject)
      .setHtml(emailContent)
      .setText(message);

    await mailerSend.email.send(emailParams);

    console.log('Email sent successfully to:', process.env.ADMIN_EMAIL, process.env.INFO_EMAIL);

    res.status(200).json({
      success: true,
      message: 'Your consultation request has been sent successfully. We will contact you soon.',
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`MailerSend configured with API key: ${process.env.MAILERSEND_API_KEY ? 'Yes' : 'No'}`);
});