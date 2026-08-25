export const metadata = {
  title: "Automotive Industry Marketing - Monufact",
  description: "Digital marketing and communications services for automotive manufacturers and suppliers.",
  openGraph: {
    title: "Automotive Industry Marketing - Monufact",
    description: "Digital marketing and communications services for automotive manufacturers and suppliers.",
    url: "/industries/automotive",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive Industry Marketing - Monufact",
    description: "Digital marketing and communications services for automotive manufacturers and suppliers.",
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
            <h1>Automotive Supplier Marketing</h1>
            <p className="service-intro">Marketing built to the same standards automotive suppliers are held to.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Automotive suppliers operate inside some of the most demanding quality and delivery standards in manufacturing. We build marketing that reflects that discipline and helps you win the OEM and Tier 1 relationships that matter.</p>
              <img loading="lazy" src="/images/industries/automotive-1.webp" alt="Automotive manufacturing line"/>
            </div>
          </div>
        </section>

        {/* Industry sector */}
        <section className="section industry-sector">
          <div className="container grid-3 divided">
            <div className="industry-sector-text">
              <div className="industry-sector-text-inner">
              <h2>Marketing for Automotive Suppliers</h2>
              <p>From capability statements to quality certifications, we help automotive suppliers present the credentials and track record that OEMs and Tier 1 partners require before they'll open a sourcing conversation.</p>
            </div>
            </div>
            <div className="industry-sector-col industry-sector-col-1">
              <img loading="lazy" src="/images/industries/shared-factory-floor.webp" alt="Automotive parts production"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="/images/industries/shared-quality-testing.webp" alt="Automotive quality testing"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>Built for Automotive-Grade Standards</h2>
            <p>We understand the certifications, quality systems, and sourcing processes that define the automotive supply chain, and we build marketing that speaks that language fluently, from first contact through RFQ.</p>
          </div>
          <img loading="lazy" src="/images/industries/automotive-1.webp" alt="Automotive manufacturing facility"/>
        </section>

        {/* Industry details */}
        <section className="section">
          <div className="container">
            <div className="industry-details divided">
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>
                <h4>Capability Statements</h4>
                <p>Documentation that demonstrates quality systems, certifications, and production capacity clearly.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
                <h4>RFQ & Sourcing Support</h4>
                <p>Sales materials built to support OEM and Tier 1 sourcing and qualification processes.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9h20"/></svg>
                <h4>Digital Presence</h4>
                <p>A website and content strategy built to get you found by automotive sourcing teams.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section faq-dark section">
          <div className="container faq-split">
            <div className="faq-intro">
              <span className="eyebrow">/ FAQ</span>
              <h2>Automotive Marketing Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Why do automotive suppliers need different marketing than other manufacturers?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>OEM and Tier 1 sourcing teams work from a defined qualification process, certifications, quality history, and capacity data, before a sales conversation even starts. Marketing that skips straight to a pitch without surfacing that information gets filtered out before anyone reads it.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What should an automotive supplier's website actually include?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>At minimum, current certifications, a clear capacity and capability overview, and a way for a sourcing contact to request a capability statement or RFQ packet directly. Proof a buyer can verify matters more than photos of the shop floor.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How long does it typically take to see results from automotive supplier marketing?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Automotive sourcing cycles are long by design, often months between first contact and an awarded RFQ, so early results usually look like visibility and credibility with sourcing teams rather than immediate leads. We set that expectation before any work starts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/industries/shared-factory-floor.webp')"}}>
            <div className="split-icon">⬡</div>
            <div className="split-caption">
              <h4>Built to Support</h4>
              <p>For all types of equipment.</p>
            </div>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>OEMs Don't Take Meetings on Reputation Alone.</h2>
              <p>If your certifications and track record aren't opening sourcing conversations, let's fix that. Talk to our team about automotive marketing.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
