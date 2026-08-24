export const metadata = {
  title: "Privacy Policy - Monufact",
  description: "Monufact's Privacy Policy explains how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy - Monufact",
    description: "Monufact's Privacy Policy explains how we collect, use, and protect your information.",
    url: "/company/privacy-policy",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Monufact",
    description: "Monufact's Privacy Policy explains how we collect, use, and protect your information.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      {/* Privacy Policy hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Company</span>
            <h1>Privacy Policy</h1>
            <p className="service-intro">How we collect, use, and protect the information you share with us.</p>
          </div>
        </section>

        {/* Legal content */}
        <section className="section">
          <div className="container legal-content">
            <p className="legal-updated">Effective date: July 29, 2026</p>

            <h3>1. Introduction</h3>
            <p>Monufact ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you visit monufact.com or interact with our services.</p>

            <h3>2. Information We Collect</h3>
            <p>We collect information in the following ways:</p>
            <ul>
              <li>Information you provide directly, such as your name, email address, phone number, company name, and any details you include when you fill out a contact form, request a quote, or subscribe to our newsletter.</li>
              <li>Information collected automatically, such as your IP address, browser type, device information, and pages visited, gathered through cookies and similar tracking technologies.</li>
            </ul>

            <h3>3. How We Use Your Information</h3>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to inquiries and provide the services you request</li>
              <li>Send newsletters, updates, and marketing communications, where you've opted in</li>
              <li>Improve our website, services, and marketing efforts</li>
              <li>Understand how visitors use our site through analytics</li>
            </ul>

            <h3>4. Cookies & Analytics</h3>
            <p>We use cookies and tools such as Google Analytics to understand how visitors interact with our website. You can disable cookies through your browser settings, though some features of our site may not function properly without them.</p>

            <h3>5. Sharing of Information</h3>
            <p>We do not sell your personal information. We may share information with trusted third-party service providers who help us operate our business, such as email marketing platforms or hosting providers, and only to the extent necessary for them to perform their services.</p>

            <h3>6. Data Security</h3>
            <p>We take reasonable technical and organizational measures to protect the information we collect. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>

            <h3>7. Your Rights & Choices</h3>
            <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us. You can unsubscribe from marketing emails using the link provided in any email we send.</p>

            <h3>8. Children's Privacy</h3>
            <p>Our website and services are not directed at individuals under the age of 13, and we do not knowingly collect personal information from children.</p>

            <h3>9. Changes to This Policy</h3>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

            <h3>10. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@monufact.com">info@monufact.com</a> or +1 226 977 2064.</p>
          </div>
        </section>
    </>
  );
}
