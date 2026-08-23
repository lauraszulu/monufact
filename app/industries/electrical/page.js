export const metadata = {
  title: "Automation & Industrial Technology Marketing - Monufact",
  description: "Marketing for automation and industrial technology companies, turning complex products into content that buyers and engineers understand.",
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Industries</span>
            <h1>Automation & Industrial Technology</h1>
            <p className="service-intro">Marketing that makes complex automation and industrial technology easy to trust.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Automation and industrial technology are complex to explain and expensive to get wrong. Buyers need to understand exactly what a system does before they'll trust it on their floor. We make that clarity part of the marketing.</p>
              <img loading="lazy" src="/images/industries/electrical-1.jpg" alt="Industrial automation equipment"/>
            </div>
          </div>
        </section>

        {/* Industry sector */}
        <section className="section industry-sector">
          <div className="container grid-3 divided">
            <div className="industry-sector-text">
              <div className="industry-sector-text-inner">
              <h2>Marketing for Automation & Industrial Technology</h2>
              <p>From system demos to technical documentation, we help automation and industrial technology companies explain complex products clearly, so plant managers and engineers can evaluate and buy with confidence.</p>
            </div>
            </div>
            <div className="industry-sector-col industry-sector-col-1">
              <img loading="lazy" src="/images/industries/shared-factory-floor.jpg" alt="Automated production line"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="/images/industries/shared-quality-testing.jpg" alt="Industrial control systems"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>Making Complex Systems Easy to Understand</h2>
            <p>We work with your engineering team to translate technical specifications into content that a plant manager, not just another engineer, can understand and act on, without losing the accuracy that technical buyers demand.</p>
          </div>
          <img loading="lazy" src="https://picsum.photos/seed/monufact-automation-innovation/1600/700" alt="Industrial automation technology"/>
        </section>

        {/* Industry details */}
        <section className="section">
          <div className="container">
            <div className="industry-details divided">
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>
                <h4>Technical Content</h4>
                <p>Documentation and explainer content that make complex automation systems easy to evaluate.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
                <h4>Demo & Sales Support</h4>
                <p>Sales materials and demo content built to support a technical, multi-stakeholder buying process.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9h20"/></svg>
                <h4>Digital Presence</h4>
                <p>A website and content strategy that attracts engineers and decision-makers researching solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('https://picsum.photos/seed/monufact-electrical-cta/900/900')"}}>
            <div className="split-icon">⬡</div>
            <div className="split-caption">
              <h4>Built to Support</h4>
              <p>For all types of equipment.</p>
            </div>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Complex Products Need Marketing That Doesn't Oversimplify.</h2>
              <p>If your systems are getting reduced to a bullet point buyers don't trust, let's fix that. Talk to our team about industrial technology marketing.</p>
            </div>
            <a href="/#contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
