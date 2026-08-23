# monufact

The monufact.com marketing site — a Next.js (App Router) app, deployed on Vercel.

## Development

```
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/` — pages (file-based routing) and Server Actions (`actions.js` files).
- `components/` — shared React components (`Header`, `Footer`, and the three
  form components: `ContactForm`, `StartForm`, `ReferralForm`).
- `public/` — static assets (images, videos) and `js/main.js`, the site's
  non-form interactivity (mobile nav, accordions, scroll effects, the local
  "Edit Mode" content editor, etc.), loaded as a plain script tag.
- `app/globals.css` — the site's styles.

Internal navigation uses plain `<a>` tags rather than `next/link`, so every
page load is a full page load, exactly like the site's previous static-HTML
behavior — `public/js/main.js` depends on that (it wires up behavior via
`querySelectorAll` once per page load rather than through React).

## Forms

The contact, "Become a Customer", and referral forms submit through Next.js
Server Actions (see the `actions.js` file next to each form's `page.js`).
They validate the submission and currently just `console.log` it — real
email sending (e.g. via `nodemailer`, already a dependency) still needs to
be wired in.

## Deployment

Deploys to Vercel with zero extra config — connect the repo and push.
`next.config.js` also 301-redirects the site's old `/*.html` GitHub Pages
URLs to their new clean routes, so old links and search results keep
working.
