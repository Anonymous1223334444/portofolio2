import nodemailer from 'nodemailer';

// console.log('API Route - EMAIL_USER:', process.env.EMAIL_USER);
// console.log('API Route - EMAIL_PASS:', process.env.EMAIL_PASS);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter using SMTP
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      // Send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `New contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="background-color: #4CAF50; color: white; padding: 10px; text-align: center;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; vertical-align: top;"><strong>Message:</strong></td>
                <td style="padding: 10px;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
            <footer style="text-align: center; color: #777; font-size: 12px; margin-top: 20px;">
              This email was sent from your portfolio website.
            </footer>
          </div>
        `,
      });

      console.log("Message sent: %s", info.messageId);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error while sending email:', error);
      res.status(500).json({ message: 'Error sending email', error: error.toString() });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}