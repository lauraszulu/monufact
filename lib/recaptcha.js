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

// Returns { ok, reason } instead of a plain boolean so the reason is
// visible to whoever's debugging a failed verification without needing
// server log access.
export async function verifyRecaptcha(token) {
  if (!token) return { ok: false, reason: 'no token' };

  const projectId = process.env.RECAPTCHA_PROJECT_ID;
  const apiKey = process.env.RECAPTCHA_API_KEY;
  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`;

  let res, text;
  try {
    res = await fetch(url, {
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
    text = await res.text();
  } catch (err) {
    return { ok: false, reason: 'fetch failed: ' + String(err) };
  }

  if (!res.ok) {
    return { ok: false, reason: `assessment request failed (${res.status}): ${text.slice(0, 300)}` };
  }

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    return { ok: false, reason: 'could not parse response: ' + text.slice(0, 300) };
  }

  if (!data.tokenProperties || !data.tokenProperties.valid) {
    return { ok: false, reason: 'invalid token: ' + (data.tokenProperties?.invalidReason || JSON.stringify(data)) };
  }
  if (typeof data.riskAnalysis?.score === 'number' && data.riskAnalysis.score < SCORE_THRESHOLD) {
    return { ok: false, reason: 'score too low: ' + data.riskAnalysis.score };
  }
  return { ok: true, reason: null };
}
