// Relays website form submissions to info@monufact.com via Namecheap
// Private Email's SMTP server. Runs as a Vercel serverless function —
// this is the only place the mailbox password ever exists, held as a
// Vercel environment variable, never in the site's public code.
const nodemailer = require('nodemailer');

// Only these origins may call this endpoint.
const ALLOWED_ORIGINS = [
  'https://monufact.com',
  'https://www.monufact.com',
];

// One entry per site form. `formName` is sent by the page so one function
// can serve all three forms with a distinct email subject/label each.
const FORMS = {
  contact: {
    subject: 'New contact form submission',
    fields: ['first_name', 'last_name', 'email', 'phone', 'company_name', 'company_address', 'message'],
  },
  become_a_customer: {
    subject: 'New "Become a Customer" submission',
    fields: ['first_name', 'last_name', 'email', 'phone', 'company_name', 'services', 'budget', 'timeline', 'goals'],
  },
  refer_a_client: {
    subject: 'New client referral submission',
    fields: ['referrer_name', 'referrer_email', 'referrer_phone', 'relationship', 'referred_company', 'referred_contact_name', 'referred_contact_info', 'notes'],
  },
};

function setCors(req, res) {
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = async (req, res) => {
  setCors(req, res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const body = req.body || {};
  const formKey = body.form;
  const form = FORMS[formKey];

  if (!form) {
    res.status(400).json({ error: 'Unknown or missing form identifier' });
    return;
  }

  // Honeypot: a hidden field real visitors never fill in. If it has a
  // value, silently pretend success so bots don't learn to avoid it.
  if (body._hp) {
    res.status(200).json({ ok: true });
    return;
  }

  const lines = form.fields
    .filter((f) => body[f])
    .map((f) => `${f.replace(/_/g, ' ')}: ${String(body[f]).slice(0, 2000)}`);

  if (!lines.length) {
    res.status(400).json({ error: 'Empty submission' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Monufact Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: body.email || body.referrer_email || undefined,
      subject: form.subject,
      text: lines.join('\n'),
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact relay error:', err);
    res.status(502).json({ error: 'Could not send email' });
  }
};
