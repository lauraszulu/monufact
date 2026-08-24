export const metadata = {
  title: "Steel & Metal Fabrication Marketing - Monufact",
  description: "Marketing and sales content for steel and metal fabrication companies, built to communicate technical capability and win industrial buyers.",
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Industries</span>
            <h1>Steel & Metal Fabrication</h1>
            <p className="service-intro">Marketing for steel and metal fabricators who earn trust through proven capability.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Steel and metal fabrication is a relationship-driven, technically demanding business, and buyers expect suppliers to prove capability before they'll trust them with a project. We build the marketing that makes that trust easier to earn.</p>
              <img loading="lazy" src="/images/industries/sustainable-steel-1.jpg" alt="Steel fabrication shop"/>
            </div>
          </div>
        </section>

        {/* Industry sector */}
        <section className="section industry-sector">
          <div className="container grid-3 divided">
            <div className="industry-sector-text">
              <div className="industry-sector-text-inner">
              <h2>Marketing for Fabricators & Steel Suppliers</h2>
              <p>From custom fabrication to structural steel supply, we help shops communicate capability, tolerances, and turnaround in a way that speaks to engineers and project managers, not just marketers. Every asset is built to support a technical sales conversation.</p>
            </div>
            </div>
            <div className="industry-sector-col industry-sector-col-1">
              <img loading="lazy" src="/images/industries/shared-factory-floor.jpg" alt="Steel fabrication equipment"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="/images/industries/shared-quality-testing.jpg" alt="Metal fabrication welding"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>Precision Work Deserves Precise Marketing</h2>
            <p>We take the time to understand your shop's capabilities, certifications, and specialties before building a single piece of content, so every asset accurately represents what you can deliver and helps you win the projects you actually want.</p>
          </div>
          <img loading="lazy" src="/images/industries/sustainable-steel-1.jpg" alt="Steel fabrication facility"/>
        </section>

        {/* Industry details */}
        <section className="section">
          <div className="container">
            <div className="industry-details divided">
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>
                <h4>Capability Showcases</h4>
                <p>Content and imagery that demonstrate shop capacity, certifications, and finished project quality.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
                <h4>Project Sales Support</h4>
                <p>Spec sheets, proposal templates, and capability decks built for bid and quote conversations.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9h20"/></svg>
                <h4>Local & Regional Reach</h4>
                <p>Digital marketing that puts your shop in front of the contractors and engineers sourcing nearby.</p>
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
              <h2>Tolerances Win Bids. So Does Knowing How to Prove Them.</h2>
              <p>If your capabilities are getting lost before the RFQ stage, let's change that. Talk to our team about fabrication marketing.</p>
            </div>
            <a href="/#contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
