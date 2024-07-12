import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const fromEmail = process.env.FROM_EMAIL;
const emailPassword = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: fromEmail,
    pass: emailPassword,
  },
});

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);

  const mailOptions = {
    from: fromEmail,
    to: [fromEmail, email],
    subject: subject,
    html: `
      <div>
        <h1>${subject}</h1>
        <p>Thank you for contacting us!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      </div>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ info });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
