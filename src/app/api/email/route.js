import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, contactNumber, organization, url, purpose } = body;

    // SMTP Transporter Configuration (Gmail Example)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER_EMAIL, // Your Gmail
        pass: process.env.PASSWORD // App password (not regular Gmail password)
      },
    });

    // Email Options
    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: email, // Recipient
      subject: 'New Contact Submission',
      html: `
        <p>Hello ${firstName} ${lastName},</p>
        <p>Thank you for reaching out! Here are the details you submitted:</p>
        <ul>
          <li><b>Email:</b> ${email}</li>
          <li><b>Contact Number:</b> ${contactNumber}</li>
          <li><b>Organization:</b> ${organization}</li>
          <li><b>URL:</b> ${url}</li>
          <li><b>Purpose:</b> ${purpose}</li>
        </ul>
        <p>We will get back to you shortly!</p>
      `,
    };

    // Send Email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
