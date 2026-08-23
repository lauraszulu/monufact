'use server';

import { sendNotificationEmail } from '../../../lib/mailer';

const REQUIRED_FIELDS = [
  'referrer_name',
  'referrer_email',
  'relationship',
  'referred_company',
  'referred_contact_name',
  'referred_contact_info',
];
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitReferralForm(prevState, formData) {
  if (formData.get('_hp')) {
    return { ok: true, message: "Thanks for the referral, we'll reach out to them shortly and keep you posted." };
  }

  const fields = Object.fromEntries(REQUIRED_FIELDS.map((key) => [key, (formData.get(key) || '').toString().trim()]));
  fields.referrer_phone = (formData.get('referrer_phone') || '').toString().trim();
  fields.notes = (formData.get('notes') || '').toString().trim();

  const missing = REQUIRED_FIELDS.filter((key) => !fields[key]);
  if (missing.length) {
    return { ok: false, error: 'Please fill in all required fields before submitting.' };
  }
  if (!EMAIL_PATTERN.test(fields.referrer_email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }
  if (!formData.get('agree_terms')) {
    return { ok: false, error: 'Please agree to the Terms & Conditions to submit a referral.' };
  }

  try {
    const lines = Object.entries(fields)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key.replace(/_/g, ' ')}: ${value}`);
    await sendNotificationEmail('New client referral submission', lines, fields.referrer_email);
  } catch (err) {
    console.error('referral email error:', err);
    return { ok: false, error: "Something went wrong sending that — please email info@monufact.com directly." };
  }

  return { ok: true, message: "Thanks for the referral, we'll reach out to them shortly and keep you posted." };
}
