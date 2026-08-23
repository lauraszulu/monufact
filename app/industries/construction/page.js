export const metadata = {
  title: "Construction & Contracting Marketing - Monufact",
  description: "Digital marketing for construction and contracting companies, from brand positioning to sales materials that support every bid and project.",
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Industries</span>
            <h1>Construction & Contracting</h1>
            <p className="service-intro">Marketing that helps contractors and builders win on trust, timelines, and proof of work.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Construction and contracting decisions are won on trust, timelines, and proof of past work. We help contractors and builders tell that story clearly, so the right clients and partners find you before the bid even goes out.</p>
              <img loading="lazy" src="/images/industries/construction-1.jpg" alt="Construction site"/>
            </div>
          </div>
        </section>

        {/* Industry sector */}
        <section className="section industry-sector">
          <div className="container grid-3 divided">
            <div className="industry-sector-text">
              <div className="industry-sector-text-inner">
              <h2>Marketing for Builders & Contractors</h2>
              <p>From project portfolios to proposal materials, we help construction and contracting companies present their work with the credibility that wins bids. Every asset is built to support both the relationship and the paperwork behind every project.</p>
            </div>
            </div>
            <div className="industry-sector-col industry-sector-col-1">
              <img loading="lazy" src="/images/industries/shared-factory-floor.jpg" alt="Construction crew at work"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="/images/industries/shared-quality-testing.jpg" alt="Building under construction"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>Marketing That Understands the Job Site</h2>
            <p>We work with contractors to understand project types, service areas, and past work before building anything, so your marketing reflects real capability and helps you compete for the projects that fit your business best.</p>
          </div>
          <img loading="lazy" src="https://picsum.photos/seed/monufact-construction-innovation/1600/700" alt="Construction project underway"/>
        </section>

        {/* Industry details */}
        <section className="section">
          <div className="container">
            <div className="industry-details divided">
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>
                <h4>Project Portfolios</h4>
                <p>Case studies and project galleries that showcase completed work and build client confidence.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
                <h4>Bid & Proposal Support</h4>
                <p>Proposal templates and capability statements built to support every RFP and bid submission.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9h20"/></svg>
                <h4>Local Market Visibility</h4>
                <p>Digital marketing that puts your company in front of property owners and developers nearby.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('https://picsum.photos/seed/monufact-construction-cta/900/900')"}}>
            <div className="split-icon">⬡</div>
            <div className="split-caption">
              <h4>Built to Support</h4>
              <p>For all types of equipment.</p>
            </div>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>The Best Portfolio Doesn't Win the Bid on Its Own.</h2>
              <p>If your project history isn't translating into shortlist decisions, let's fix that. Talk to our team about contractor marketing.</p>
            </div>
            <a href="/#contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
