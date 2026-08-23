export const metadata = {
  title: "Energy & Infrastructure Marketing - Monufact",
  description: "Marketing and communications for energy and infrastructure companies, built to support complex sales cycles and technical audiences.",
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Industries</span>
            <h1>Energy & Infrastructure</h1>
            <p className="service-intro">Marketing for energy and infrastructure projects where technical clarity and credibility matter most.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Energy and infrastructure projects move on long timelines and bigger budgets, which means trust, credibility, and technical clarity matter more than ever. We build marketing that holds up under that kind of scrutiny.</p>
              <img loading="lazy" src="/images/industries/energy-1.jpg" alt="Energy infrastructure facility"/>
            </div>
          </div>
        </section>

        {/* Industry sector */}
        <section className="section industry-sector">
          <div className="container grid-3 divided">
            <div className="industry-sector-text">
              <div className="industry-sector-text-inner">
              <h2>Marketing for Energy & Infrastructure</h2>
              <p>From technical capability statements to project case studies, we help energy and infrastructure companies communicate scale, safety, and expertise to the engineers, developers, and municipalities that make the buying decisions.</p>
            </div>
            </div>
            <div className="industry-sector-col industry-sector-col-1">
              <img loading="lazy" src="/images/industries/shared-factory-floor.jpg" alt="Energy infrastructure project"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="/images/industries/shared-quality-testing.jpg" alt="Power infrastructure equipment"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>Marketing for the Long Sales Cycle</h2>
            <p>Energy and infrastructure projects are won over months, not days. We build marketing systems that stay in front of decision-makers through every stage of a long, technical, multi-stakeholder sales process.</p>
          </div>
          <img loading="lazy" src="https://picsum.photos/seed/monufact-energy-innovation/1600/700" alt="Energy infrastructure development"/>
        </section>

        {/* Industry details */}
        <section className="section">
          <div className="container">
            <div className="industry-details divided">
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>
                <h4>Technical Case Studies</h4>
                <p>Project documentation that demonstrates scale, safety, and technical capability to key stakeholders.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
                <h4>Proposal & RFP Support</h4>
                <p>Capability statements and proposal materials built for municipal and institutional procurement.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9h20"/></svg>
                <h4>Long-Cycle Nurture</h4>
                <p>Content and outreach that keeps your company visible through months-long decision processes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('https://picsum.photos/seed/monufact-energy-cta/900/900')"}}>
            <div className="split-icon">⬡</div>
            <div className="split-caption">
              <h4>Built to Support</h4>
              <p>For all types of equipment.</p>
            </div>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Scale and Safety Only Matter if Buyers Can See Them.</h2>
              <p>If your track record isn't reaching the developers and municipalities deciding your next contract, let's fix that. Talk to our team about energy marketing.</p>
            </div>
            <a href="/#contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
