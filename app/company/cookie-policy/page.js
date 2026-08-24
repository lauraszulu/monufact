export const metadata = {
  title: "Cookie Policy - Monufact",
  description: "How Monufact uses cookies and similar technologies on this website, and how to control them.",
  openGraph: {
    title: "Cookie Policy - Monufact",
    description: "How Monufact uses cookies and similar technologies on this website, and how to control them.",
    url: "/company/cookie-policy",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy - Monufact",
    description: "How Monufact uses cookies and similar technologies on this website, and how to control them.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      {/* Cookie policy hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Company</span>
            <h1>Cookie Policy</h1>
            <p className="service-intro">How we use cookies on this site, and how to control them.</p>
          </div>
        </section>

        {/* Legal content */}
        <section className="section">
          <div className="container legal-content">
            <p className="legal-updated">Effective date: August 24, 2026</p>

            <h3>1. What Cookies Are</h3>
            <p>Cookies are small text files placed on your device when you visit a website. They let a site remember information about your visit, like your preferences, and help site owners understand how visitors use their site.</p>

            <h3>2. Cookies We Use</h3>
            <p>This site uses cookies and similar technologies for two purposes:</p>
            <ul>
              <li><strong>Analytics</strong> — Google Analytics and Microsoft Clarity, which help us understand how visitors navigate the site (pages viewed, time on site, general traffic patterns) so we can improve it.</li>
              <li><strong>Tag management</strong> — Google Tag Manager, which we use to manage the analytics tools above. It doesn't collect data on its own.</li>
            </ul>
            <p>We don't use cookies for advertising or to sell your information to third parties.</p>

            <h3>3. Your Choices</h3>
            <p>When you first visit this site, a banner lets you accept or reject non-essential cookies. You can change your mind at any time by clearing your browser's cookies for this site, which will show the banner again on your next visit. Most browsers also let you block cookies entirely or be notified before one is set — see your browser's settings for details. Blocking cookies may affect how some parts of this site work.</p>

            <h3>4. Third-Party Cookies</h3>
            <p>The analytics tools listed above are operated by Google and Microsoft, and are subject to their own privacy policies:</p>
            <ul>
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a></li>
              <li><a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener">Microsoft Privacy Statement</a></li>
            </ul>

            <h3>5. Contact Us</h3>
            <p>Questions about this Cookie Policy can be directed to <a href="mailto:info@monufact.com">info@monufact.com</a> or +1 226 977 2064. See also our <a href="/company/privacy-policy">Privacy Policy</a> for how we handle information more broadly.</p>
          </div>
        </section>
    </>
  );
}
