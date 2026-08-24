export const metadata = {
  title: "Appliances Industry Marketing - Monufact",
  description: "Digital marketing and communications services for appliance manufacturers and industrial companies.",
  openGraph: {
    title: "Appliances Industry Marketing - Monufact",
    description: "Digital marketing and communications services for appliance manufacturers and industrial companies.",
    url: "/industries/appliances",
    siteName: "Monufact",
    images: ["/images/about/monufact-about-hero.jpg"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appliances Industry Marketing - Monufact",
    description: "Digital marketing and communications services for appliance manufacturers and industrial companies.",
    images: ["/images/about/monufact-about-hero.jpg"],
  },
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Industries</span>
            <h1>Appliances</h1>
            <p className="service-intro">Marketing for appliance manufacturers selling to retail buyers and trade partners alike.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Appliance manufacturers sell to both retail buyers and trade partners at once, two audiences with very different expectations. We build marketing that speaks to both without compromising either.</p>
              <img loading="lazy" src="/images/industries/appliances-1.jpg" alt="Appliance manufacturing line"/>
            </div>
          </div>
        </section>

        {/* Industry sector */}
        <section className="section industry-sector">
          <div className="container grid-3 divided">
            <div className="industry-sector-text">
              <div className="industry-sector-text-inner">
              <h2>Marketing for Appliance Manufacturers</h2>
              <p>From retail-ready product content to trade and distributor materials, we help appliance manufacturers present products consistently across every channel, while keeping technical specifications accurate for the buyers who need them.</p>
            </div>
            </div>
            <div className="industry-sector-col industry-sector-col-1">
              <img loading="lazy" src="/images/industries/shared-factory-floor.jpg" alt="Appliance assembly line"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="/images/industries/shared-quality-testing.jpg" alt="Appliance product detail"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>One Product, Two Audiences</h2>
            <p>We build marketing systems that flex between retail-facing and trade-facing content, so the same product story works whether it's reaching a showroom floor or a distributor's order desk.</p>
          </div>
          <img loading="lazy" src="/images/industries/appliances-1.jpg" alt="Appliance manufacturing facility"/>
        </section>

        {/* Industry details */}
        <section className="section">
          <div className="container">
            <div className="industry-details divided">
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>
                <h4>Product Content</h4>
                <p>Retail-ready product photography, copy, and spec sheets that stay consistent across channels.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
                <h4>Trade & Distributor Support</h4>
                <p>Sales materials built to support distributor and retail partner relationships.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9h20"/></svg>
                <h4>Digital Presence</h4>
                <p>A digital experience built to support both end-consumer research and trade buyer evaluation.</p>
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
              <h2>Retail-Ready Shouldn't Mean Spec-Light.</h2>
              <p>If your product content is losing technical buyers to keep up with retail, let's fix that. Talk to our team about appliance marketing.</p>
            </div>
            <a href="/#contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
