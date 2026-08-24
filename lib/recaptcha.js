// Server-side reCAPTCHA v3 verification, shared by the site's Server
// Actions. The site key (public) lives in the form components; the secret
// key stays server-only, read from a Vercel environment variable.
//
// v3 is score-based (0.0 = definitely a bot, 1.0 = definitely human)
// rather than a checkbox challenge — 0.5 is Google's own suggested
// default threshold.
const SCORE_THRESHOLD = 0.5;

export async function verifyRecaptcha(token) {
  if (!token) return false;

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    }),
  });

  const data = await res.json();
  if (!data.success) return false;
  // v3-only field; if it's missing (shouldn't happen for a v3 key) don't
  // fail a legitimate submission over it.
  if (typeof data.score === 'number' && data.score < SCORE_THRESHOLD) return false;
  return true;
}
