export const metadata = {
  title: "Mining Industry Marketing - Monufact",
  description: "Digital marketing and communications services for mining and heavy industrial companies.",
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Industries</span>
            <h1>Mining</h1>
            <p className="service-intro">Marketing for mining and heavy industrial companies operating under strict safety and procurement standards.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Mining and heavy industrial companies operate in a world of long procurement cycles, strict safety standards, and specialized equipment. We build marketing that reflects that reality and speaks to the buyers who live in it.</p>
              <img loading="lazy" src="/images/industries/mining-1.jpg" alt="Mining industrial site"/>
            </div>
          </div>
        </section>

        {/* Industry sector */}
        <section className="section industry-sector">
          <div className="container grid-3 divided">
            <div className="industry-sector-text">
              <div className="industry-sector-text-inner">
              <h2>Marketing for Mining & Heavy Industry</h2>
              <p>From equipment specifications to safety and compliance documentation, we help mining and heavy industrial suppliers communicate durability, reliability, and performance to procurement teams and site operators.</p>
            </div>
            </div>
            <div className="industry-sector-col industry-sector-col-1">
              <img loading="lazy" src="/images/industries/shared-factory-floor.jpg" alt="Mining equipment operation"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="/images/industries/shared-quality-testing.jpg" alt="Heavy industrial site"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>Built for Demanding Environments</h2>
            <p>We understand that mining and heavy industrial buyers evaluate suppliers on durability, safety record, and total cost of ownership. Our marketing is built to communicate exactly that, clearly and credibly.</p>
          </div>
          <img loading="lazy" src="/images/industries/mining-1.jpg" alt="Mining operations facility"/>
        </section>

        {/* Industry details */}
        <section className="section">
          <div className="container">
            <div className="industry-details divided">
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>
                <h4>Equipment Documentation</h4>
                <p>Technical content that communicates durability, performance, and specifications clearly.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
                <h4>Procurement Support</h4>
                <p>Capability statements and proposal materials built for long, compliance-driven procurement cycles.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9h20"/></svg>
                <h4>Digital Presence</h4>
                <p>A website and content strategy built to reach procurement teams researching suppliers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/industries/shared-factory-floor.jpg')"}}>
            <div className="split-icon">⬡</div>
            <div className="split-caption">
              <h4>Built to Support</h4>
              <p>For all types of equipment.</p>
            </div>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Durability Claims Only Convince With Proof Behind Them.</h2>
              <p>If procurement teams can't verify your performance data, let's fix that. Talk to our team about heavy industry marketing.</p>
            </div>
            <a href="/#contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
