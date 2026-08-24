import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: "Contact Monufact - Digital Marketing Agency in Ontario",
  description: "Get in touch with Monufact's team in London, Ontario. Reach out by phone, email, or our contact form to start the conversation about your marketing needs.",
  openGraph: {
    title: "Contact Monufact - Digital Marketing Agency in Ontario",
    description: "Get in touch with Monufact's team in London, Ontario. Reach out by phone, email, or our contact form to start the conversation about your marketing needs.",
    url: "/company/contact",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Monufact - Digital Marketing Agency in Ontario",
    description: "Get in touch with Monufact's team in London, Ontario. Reach out by phone, email, or our contact form to start the conversation about your marketing needs.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      {/* Contact hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Company</span>
            <h1>Ready to Meet Your Steel Partner?</h1>
            <p className="service-intro">We want to hear from you.</p>
          </div>
        </section>

        {/* Contact form + info */}
        <section className="section">
          <div className="container contact-grid">
            <div>
              <h3>Send us a message</h3>
              <ContactForm />
            </div>
            <div className="contact-info">
              <div className="contact-info-item">
                <h4>Address</h4>
                <p>London, Ontario, Canada</p>
              </div>
              <div className="contact-info-item">
                <h4>Email</h4>
                <p><a href="mailto:info@monufact.com">info@monufact.com</a></p>
              </div>
              <div className="contact-info-item">
                <h4>Phone</h4>
                <p><a href="tel:+12269772064">+1 226 977 2064</a></p>
              </div>
              <div className="social-icons">          <a href="https://www.instagram.com/monufact.marketing/" aria-label="Instagram" target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.265.058-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072c-4.358.2-6.78 2.618-6.98 6.98C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
