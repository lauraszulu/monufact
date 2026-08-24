// Server-side reCAPTCHA Enterprise verification, shared by the site's
// Server Actions. This site key was created via Google Cloud Console, so
// verification goes through the reCAPTCHA Enterprise Assessment API —
// not the classic siteverify endpoint, which doesn't recognize
// Enterprise keys.
//
// Requires two Vercel environment variables:
//   RECAPTCHA_API_KEY    — a Google Cloud API key with the reCAPTCHA
//                           Enterprise API enabled
//   RECAPTCHA_PROJECT_ID — the GCP project ID (monufact-1772422196996)
import { RECAPTCHA_SITE_KEY } from '@/lib/recaptchaSiteKey';

const SCORE_THRESHOLD = 0.5;

export async function verifyRecaptcha(token) {
  if (!token) return false;

  const projectId = process.env.RECAPTCHA_PROJECT_ID;
  const apiKey = process.env.RECAPTCHA_API_KEY;
  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event: {
        token,
        expectedAction: 'submit',
        siteKey: RECAPTCHA_SITE_KEY,
      },
    }),
  });

  if (!res.ok) {
    console.error('reCAPTCHA Enterprise assessment request failed:', res.status, await res.text());
    return false;
  }

  const data = await res.json();
  if (!data.tokenProperties || !data.tokenProperties.valid) {
    console.error('reCAPTCHA Enterprise: invalid token —', data.tokenProperties && data.tokenProperties.invalidReason);
    return false;
  }
  if (typeof data.riskAnalysis?.score === 'number' && data.riskAnalysis.score < SCORE_THRESHOLD) {
    return false;
  }
  return true;
}
