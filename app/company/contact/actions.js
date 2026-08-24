'use server';

import { sendNotificationEmail } from '../../../lib/mailer';
import { verifyRecaptcha } from '../../../lib/recaptcha';

const REQUIRED_FIELDS = ['first_name', 'last_name', 'email', 'phone', 'company_name', 'company_address', 'message'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactForm(prevState, formData) {
  // Honeypot: a hidden field real visitors never fill in. If it has a
  // value, silently pretend success so bots don't learn to avoid it.
  if (formData.get('_hp')) {
    return { ok: true, message: "Thanks, we'll be in touch shortly." };
  }

  const fields = Object.fromEntries(REQUIRED_FIELDS.map((key) => [key, (formData.get(key) || '').toString().trim()]));

  const missing = REQUIRED_FIELDS.filter((key) => !fields[key]);
  if (missing.length) {
    return { ok: false, error: 'Please fill in all fields before submitting.' };
  }
  if (!EMAIL_PATTERN.test(fields.email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  const recaptcha = await verifyRecaptcha(formData.get('g-recaptcha-response'));
  if (!recaptcha.ok) {
    // TEMPORARY: surfacing the real reason while debugging the Enterprise
    // integration — replace with a plain visitor-facing message once
    // this is confirmed working.
    return { ok: false, error: 'DEBUG reCAPTCHA rejected: ' + recaptcha.reason };
  }

  try {
    const lines = REQUIRED_FIELDS.map((key) => `${key.replace(/_/g, ' ')}: ${fields[key]}`);
    await sendNotificationEmail('New contact form submission', lines, fields.email);
  } catch (err) {
    console.error('contact form email error:', err);
    return { ok: false, error: "Something went wrong sending that — please email info@monufact.com directly." };
  }

  return { ok: true, message: "Thanks, we'll be in touch shortly." };
}
