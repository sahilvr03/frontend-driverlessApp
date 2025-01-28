import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Replace with your actual Resend API key

export async function POST(request) {
  try {
    const body = await request.json(); // Parse the request body
    const { firstName, lastName, email, contactNumber, organization, url, purpose } = body;

    // Sending the email using Resend
    const response = await resend.emails.send({
      from: email, // Replace with a verified sender email address
      to: ['ewe111.vijay@gmail.com'], // Recipient's email
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
    });

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!', response }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email', details: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
