// Shared email sender for the site's Server Actions. Uses Namecheap
// Private Email's SMTP server via nodemailer, reading credentials from
// Vercel environment variables — the same ones already configured for
// the site (SMTP_HOST, SMTP_USER, SMTP_PASS, optionally SMTP_PORT).
import nodemailer from 'nodemailer';

export async function sendNotificationEmail(subject, lines, replyTo) {
  // Port 465 uses implicit TLS from the start of the connection; port 587
  // (and anything else) uses STARTTLS instead — using the wrong mode for
  // a given port can surface as a misleading "invalid login" rejection
  // even when the credentials themselves are correct.
  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Monufact Website" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    replyTo: replyTo || undefined,
    subject,
    text: lines.join('\n'),
  });
}
