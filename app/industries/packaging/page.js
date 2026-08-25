export const metadata = {
  title: "Building Products & Materials Marketing - Monufact",
  description: "Marketing for building products and materials manufacturers, built to reach specifiers, distributors, and buyers across the supply chain.",
  openGraph: {
    title: "Building Products & Materials Marketing - Monufact",
    description: "Marketing for building products and materials manufacturers, built to reach specifiers, distributors, and buyers across the supply chain.",
    url: "/industries/packaging",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Products & Materials Marketing - Monufact",
    description: "Marketing for building products and materials manufacturers, built to reach specifiers, distributors, and buyers across the supply chain.",
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
            <h1>Building Products & Materials</h1>
            <p className="service-intro">Marketing for building products and materials manufacturers selling through a chain of specifiers and distributors.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Building products and materials manufacturers sell into a chain of specifiers, distributors, and installers, each with different information needs. We build marketing that speaks clearly to every link in that chain.</p>
              <img loading="lazy" src="/images/industries/packaging-1.webp?v=2" alt="Building materials warehouse"/>
            </div>
          </div>
        </section>

        {/* Industry sector */}
        <section className="section industry-sector">
          <div className="container grid-3 divided">
            <div className="industry-sector-text">
              <div className="industry-sector-text-inner">
              <h2>Marketing for Materials & Building Products</h2>
              <p>From product specification sheets to distributor-facing sales tools, we help manufacturers communicate performance, compliance, and application details clearly, so specifiers and buyers can make confident decisions faster.</p>
            </div>
            </div>
            <div className="industry-sector-col industry-sector-col-1">
              <img loading="lazy" src="/images/industries/packaging-2.webp" alt="Lumber stored in a warehouse"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="/images/industries/packaging-3.webp" alt="Construction materials stacked"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>Built for the Specification Chain</h2>
            <p>We map your product's path from plant to project (architects, distributors, contractors) and build marketing for each stage, so your materials get specified early and stay specified through to the build.</p>
          </div>
          <img loading="lazy" src="/images/industries/packaging-1.webp?v=2" alt="Building materials manufacturing"/>
        </section>

        {/* Industry details */}
        <section className="section">
          <div className="container">
            <div className="industry-details divided">
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>
                <h4>Spec Sheets & Documentation</h4>
                <p>Clear, accurate product documentation built to support specification and procurement decisions.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
                <h4>Distributor Sales Tools</h4>
                <p>Sales materials that help distributor partners sell your products with confidence and accuracy.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9h20"/></svg>
                <h4>Specifier Outreach</h4>
                <p>Digital marketing that puts your products in front of architects and specifiers early in the process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section faq-dark section">
          <div className="container faq-split">
            <div className="faq-intro">
              <span className="eyebrow">/ FAQ</span>
              <h2>Building Products Marketing Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What does "the specification chain" actually mean for a building products manufacturer?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Your product usually has to be chosen multiple times before it's ever installed: first specified by an architect or engineer, then approved by a contractor, then purchased by a distributor or builder. Losing any one of those buyers means the product doesn't make it into the building.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How early should we be marketing to architects and specifiers?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Earlier than most manufacturers assume. Once a project's specifications are finalized, switching a specified product is rare, so the real opportunity is being visible and well-documented while a design is still being developed, not after.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What kind of content actually helps get a product specified?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Accurate, complete technical documentation, compliance data, application details, CAD or BIM files where applicable, tends to matter more than marketing language. Specifiers are choosing based on whether they can defend the choice technically, not on branding alone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/industries/packaging-1.webp?v=2')"}}>
            <div className="split-icon">⬡</div>
            <div className="split-caption">
              <h4>Built to Support</h4>
              <p>For all types of equipment.</p>
            </div>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Specifiers Choose What They Understand First.</h2>
              <p>If your product data isn't reaching the people who write the spec, let's fix that. Talk to our team about materials marketing.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
