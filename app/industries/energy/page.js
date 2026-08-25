export const metadata = {
  title: "Energy & Infrastructure Marketing - Monufact",
  description: "Marketing and communications for energy and infrastructure companies, built to support complex sales cycles and technical audiences.",
  openGraph: {
    title: "Energy & Infrastructure Marketing - Monufact",
    description: "Marketing and communications for energy and infrastructure companies, built to support complex sales cycles and technical audiences.",
    url: "/industries/energy",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy & Infrastructure Marketing - Monufact",
    description: "Marketing and communications for energy and infrastructure companies, built to support complex sales cycles and technical audiences.",
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
            <h1>Energy & Infrastructure</h1>
            <p className="service-intro">Marketing for energy and infrastructure projects where technical clarity and credibility matter most.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Energy and infrastructure projects move on long timelines and bigger budgets, which means trust, credibility, and technical clarity matter more than ever. We build marketing that holds up under that kind of scrutiny.</p>
              <img loading="lazy" src="/images/industries/energy-1.webp?v=2" alt="Energy infrastructure facility"/>
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
              <img loading="lazy" src="/images/industries/energy-2.webp" alt="Energy infrastructure project"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="/images/industries/energy-3.webp" alt="Wind turbines and solar panels"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>Marketing for the Long Sales Cycle</h2>
            <p>Energy and infrastructure projects are won over months, not days. We build marketing systems that stay in front of decision-makers through every stage of a long, technical, multi-stakeholder sales process.</p>
          </div>
          <img loading="lazy" src="/images/industries/energy-1.webp?v=2" alt="Energy infrastructure development"/>
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

        {/* FAQ */}
        <section className="faq-section faq-dark section">
          <div className="container faq-split">
            <div className="faq-intro">
              <span className="eyebrow">/ FAQ</span>
              <h2>Energy & Infrastructure Marketing Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Why does energy and infrastructure marketing take longer to show results?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>These projects are typically won over months through a formal RFP or procurement process involving multiple stakeholders, engineers, developers, and often a municipal or institutional buyer. Marketing here is about staying credible and visible through that entire cycle, not generating a fast lead.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What do municipalities and institutional buyers actually look for in a supplier?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Proof of scale, safety record, and successful past projects of comparable size, usually documented clearly enough to support a formal evaluation or RFP response. Vague claims about experience don't hold up in a procurement review the way a specific, well-documented project case study does.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Is content marketing worth it for a business that mostly wins work through RFPs?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Yes, an RFP is usually the final stage of a decision that started earlier, when a developer or municipality was researching who to even invite to bid. Being visible and credible before the RFP is issued is often what gets you on the shortlist in the first place.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/industries/energy-1.webp?v=2')"}}>
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
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
