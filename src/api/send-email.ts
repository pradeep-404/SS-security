import nodemailer from 'nodemailer';

// Configure your Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || 'your-email@gmail.com',
    pass: process.env.GMAIL_PASSWORD || 'your-app-password' // Use App Password, not regular password
  }
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { company, name, phone, email, requirement, message, recipientEmail } = req.body;

  try {
    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER || 'your-email@gmail.com',
      to: recipientEmail,
      subject: `New Security Service Inquiry - ${company}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Company/Society:</strong> ${company}</p>
        <p><strong>Contact Person:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Required:</strong> ${requirement}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Please contact the client to provide a quote.</p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
