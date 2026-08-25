export const metadata = {
  title: "Architecture & Engineering Marketing - Monufact",
  description: "Marketing support for architecture and engineering firms, translating technical expertise into content that wins clients and projects.",
  openGraph: {
    title: "Architecture & Engineering Marketing - Monufact",
    description: "Marketing support for architecture and engineering firms, translating technical expertise into content that wins clients and projects.",
    url: "/industries/architecture-firms",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architecture & Engineering Marketing - Monufact",
    description: "Marketing support for architecture and engineering firms, translating technical expertise into content that wins clients and projects.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Industries</span>
            <h1>Architecture & Engineering</h1>
            <p className="service-intro">Digital presence and marketing for architecture and engineering firms that win work on reputation.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Architecture and engineering firms win work through reputation and portfolio as much as pitch decks. We build the digital presence that lets your best projects do the talking, and makes it easy for the right clients to find you.</p>
              <img loading="lazy" src="/images/industries/architecture-1.webp" alt="Architectural floor plan blueprints"/>
            </div>
          </div>
        </section>

        {/* Industry sector */}
        <section className="section industry-sector">
          <div className="container grid-3 divided">
            <div className="industry-sector-text">
              <div className="industry-sector-text-inner">
              <h2>Marketing for Architecture & Engineering Firms</h2>
              <p>From project showcases to technical credentials, we help firms present their design and engineering expertise in a way that resonates with developers, contractors, and institutional clients. Every asset reflects the precision your work demands.</p>
            </div>
            </div>
            <div className="industry-sector-col industry-sector-col-1">
              <img loading="lazy" src="/images/industries/architecture-3.webp" alt="Modern glass office building exterior"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="/images/industries/architecture-2.webp" alt="Architect reviewing a layout plan"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>Design-Led Marketing for Design-Led Firms</h2>
            <p>We take time to understand your firm's portfolio, specialties, and target project types before building anything, so your marketing carries the same attention to detail as the work it represents.</p>
          </div>
          <img loading="lazy" src="/images/industries/architecture-1.webp" alt="Detailed architectural blueprints on a desk"/>
        </section>

        {/* Industry details */}
        <section className="section">
          <div className="container">
            <div className="industry-details divided">
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>
                <h4>Portfolio Presentation</h4>
                <p>Project galleries and case studies that showcase design work with clarity and polish.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
                <h4>Proposal & RFP Support</h4>
                <p>Credential packages and proposal materials built to support institutional and commercial bids.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9h20"/></svg>
                <h4>Digital Presence</h4>
                <p>A website and content strategy built to attract the clients and projects you want most.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section faq-dark section">
          <div className="container faq-split">
            <div className="faq-intro">
              <span className="eyebrow">/ FAQ</span>
              <h2>Architecture & Engineering Marketing Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How is marketing an architecture or engineering firm different from marketing a product-based business?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>The "product" is largely the firm's judgment and past work, so marketing is almost entirely about presenting a portfolio and credentials in a way that builds confidence before the first meeting. There's rarely a spec sheet to lean on; reputation and past projects carry the weight instead.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Do we need to update our portfolio constantly, or just once in a while?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>More often than most firms do. A portfolio that stops at a project from several years ago quietly signals the firm hasn't taken on comparable new work recently, even if that's not true. Keeping it current is one of the simplest, highest-impact habits a firm can build.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What matters most for winning institutional or commercial RFPs?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Clearly documented credentials and comparable past project experience, presented in a format that's easy for a review committee to evaluate quickly. RFP reviewers are often reading dozens of submissions, so clarity and completeness tend to matter as much as the quality of the work itself.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/industries/architecture-1.webp')"}}>
            <div className="split-icon">⬡</div>
            <div className="split-caption">
              <h4>Built to Support</h4>
              <p>For all types of equipment.</p>
            </div>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Great Design Deserves a Presentation That Matches It.</h2>
              <p>If your project showcases aren't landing with the developers and clients who matter, let's fix that. Talk to our team about A&E marketing.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
