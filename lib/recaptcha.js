// Server-side reCAPTCHA verification, shared by the site's Server Actions.
// The site key (public) lives in the form components; the secret key stays
// server-only, read from a Vercel environment variable.
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
  return !!data.success;
}
