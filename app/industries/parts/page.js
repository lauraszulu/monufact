export const metadata = {
  title: "Industrial Supply & Distribution Marketing - Monufact",
  description: "Digital marketing for industrial suppliers and distributors, built to support sales teams and reach buyers across every channel.",
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Industries</span>
            <h1>Industrial Supply & Distribution</h1>
            <p className="service-intro">Marketing and digital tools for industrial suppliers and distributors who compete on reliability.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Industrial suppliers and distributors compete on availability, reliability, and how easy they are to do business with. We build the marketing and digital tools that make that easier to prove and easier to find.</p>
              <img loading="lazy" src="https://picsum.photos/seed/monufact-supply-intro/700/500" alt="Industrial supply warehouse"/>
            </div>
          </div>
        </section>

        {/* Industry sector */}
        <section className="section industry-sector">
          <div className="container grid-3 divided">
            <div className="industry-sector-text">
              <div className="industry-sector-text-inner">
              <h2>Marketing for Suppliers & Distributors</h2>
              <p>From catalog content to digital ordering tools, we help industrial suppliers and distributors make it easier for buyers to find the right part, understand availability, and reorder with confidence.</p>
            </div>
            </div>
            <div className="industry-sector-col industry-sector-col-1">
              <img loading="lazy" src="https://picsum.photos/seed/monufact-supply-sector-1/500/500" alt="Industrial parts inventory"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="https://picsum.photos/seed/monufact-supply-sector-2/500/500" alt="Distribution warehouse shelving"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>Built for High-Volume, High-Trust Buying</h2>
            <p>We understand that industrial buyers are creatures of habit. Once they find a supplier they trust, they stay. Our marketing is built to earn that first order and support the relationship that keeps them coming back.</p>
          </div>
          <img loading="lazy" src="https://picsum.photos/seed/monufact-supply-innovation/1600/700" alt="Industrial supply distribution center"/>
        </section>

        {/* Industry details */}
        <section className="section">
          <div className="container">
            <div className="industry-details divided">
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>
                <h4>Catalog & Product Content</h4>
                <p>Clear, searchable product content that helps buyers find and specify the right part quickly.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
                <h4>Sales & Account Tools</h4>
                <p>Sales materials and account resources that support repeat ordering and long-term relationships.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9h20"/></svg>
                <h4>Digital Ordering Presence</h4>
                <p>A digital experience that makes finding, comparing, and reordering parts fast and frictionless.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('https://picsum.photos/seed/monufact-parts-cta/900/900')"}}>
            <div className="split-icon">⬡</div>
            <div className="split-caption">
              <h4>Built to Support</h4>
              <p>For all types of equipment.</p>
            </div>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Availability Doesn't Matter if Buyers Can't Find It.</h2>
              <p>If reordering isn't as easy as it should be, let's fix that. Talk to our team about distribution marketing.</p>
            </div>
            <a href="/#contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
