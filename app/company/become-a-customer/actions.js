'use server';

import { sendNotificationEmail } from '../../../lib/mailer';

const REQUIRED_FIELDS = ['first_name', 'last_name', 'email', 'company_name', 'budget', 'timeline'];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitStartForm(prevState, formData) {
  if (formData.get('_hp')) {
    return { ok: true, message: "Thanks, we'll review your project details and be in touch shortly." };
  }

  const fields = Object.fromEntries(REQUIRED_FIELDS.map((key) => [key, (formData.get(key) || '').toString().trim()]));
  fields.phone = (formData.get('phone') || '').toString().trim();
  fields.goals = (formData.get('goals') || '').toString().trim();
  fields.services = formData.getAll('services').join(', ');

  const missing = REQUIRED_FIELDS.filter((key) => !fields[key]);
  if (missing.length) {
    return { ok: false, error: 'Please fill in all required fields before submitting.' };
  }
  if (!EMAIL_PATTERN.test(fields.email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  try {
    const lines = Object.entries(fields)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`);
    await sendNotificationEmail('New "Become a Customer" submission', lines, fields.email);
  } catch (err) {
    console.error('become a customer email error:', err);
    return { ok: false, error: "Something went wrong sending that — please email info@monufact.com directly." };
  }

  return { ok: true, message: "Thanks, we'll review your project details and be in touch shortly." };
}
