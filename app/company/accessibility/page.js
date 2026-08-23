export const metadata = {
  title: "Accessibility - Monufact",
  description: "Monufact's commitment to accessibility for our website and services.",
};

export default function Page() {
  return (
    <>
      {/* Accessibility hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Company</span>
            <h1>Accessibility</h1>
            <p className="service-intro">Our commitment to an accessible website and workplace for everyone.</p>
          </div>
        </section>

        {/* Legal content */}
        <section className="section">
          <div className="container legal-content">
            <p className="legal-updated">Effective date: July 29, 2026</p>

            <h3>1. Our Commitment</h3>
            <p>Monufact is committed to providing an accessible experience for all visitors to our website and to treating people with disabilities in a way that allows them to maintain their dignity and independence. We believe in integration and equal opportunity, and we work to meet the accessibility needs of persons with disabilities in a timely manner.</p>

            <h3>2. Accessibility for Ontarians with Disabilities Act (AODA)</h3>
            <p>As a business operating in Ontario, Monufact is committed to complying with the requirements of the Accessibility for Ontarians with Disabilities Act (AODA) and its associated standards, including the Integrated Accessibility Standards Regulation.</p>

            <h3>3. Website Accessibility</h3>
            <p>We strive to ensure our website is accessible to the widest possible audience, including people with disabilities, and we work toward conforming to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. This is an ongoing effort, and we continue to review and improve our website as new tools and techniques become available.</p>

            <h3>4. Feedback</h3>
            <p>We welcome feedback on the accessibility of our website and services. If you encounter a barrier or have suggestions on how we can improve accessibility, we want to hear from you.</p>

            <h3>5. Contact Us</h3>
            <p>You can reach us by email at <a href="mailto:info@monufact.com">info@monufact.com</a> or by phone at +1 226 977 2064. We will respond to accessibility feedback in a timely manner.</p>
          </div>
        </section>
    </>
  );
}
