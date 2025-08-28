// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // or use SMTP config
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "VahallaKettaSavannahs@outlook.com", // your receiving address
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully." });
  } catch (err) {
    console.error("Email failed:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
}
