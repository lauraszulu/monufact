export const metadata = {
  title: "Print Marketing & Sales Collateral - Monufact",
  description: "High-quality printed catalogs, one-pagers, and technical sheets that support reps, distributors, and engineering decision-makers.",
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Services</span>
            <h1>Print Marketing & Sales Collateral</h1>
            <p className="service-intro">A catalog either survives the field or gets left in the truck. We design print collateral built for reps who live outside the office.</p>
          </div>
        </section>

        {/* Image banner */}
        <section className="image-banner">
          <img loading="lazy" className="parallax-img" src="/images/services/print-marketing-sales-collateral.jpg" alt="Print Marketing & Sales Collateral"/>
          <span className="eyebrow overlay-label">/ Print & Sales Collateral</span>
          <div className="overlay-cta-group">
            <a href="/company/contact" className="btn btn-dark overlay-cta">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <div className="overlay-cta-accent"></div>
          </div>
        </section>

        {/* Vision */}
        <section className="intro-split section">
          <div className="container vision-grid divided">
            <div>
              <h2>Turning Vision Into Measurable Momentum</h2>
            </div>
            <div className="intro-text">
              <p>Digital moves fast, but industrial buyers still trust what they can hold. We build print materials that carry the same weight as your product.</p>
            </div>
            <div className="intro-text">
              <p>Consistency compounds. Every catalog, sheet, and one-pager we design reinforces the same brand your buyers already recognize.</p>
            </div>
          </div>
        </section>

        {/* Dedicated to */}
        <section className="industry-innovation dedicated-to">
          <div className="container industry-innovation-intro">
            <h2>Dedicated to Materials That Hold Up</h2>
            <p>A spec sheet has to survive a plant floor, a windshield, and a filing cabinet just as well as a first read. We design and produce print collateral built for that kind of use, not just a nice PDF.</p>
          </div>
          <img loading="lazy" src="/images/services/pachon-business-cards.jpg" alt="Print marketing and sales collateral"/>
        </section>

        {/* Spec columns */}
        <section className="spec-columns section">
          <div className="container grid-3 divided">
            <div>
              <h3>Material Selection</h3>
              <p>Stock weight, finish, and format chosen for how a piece will actually be used, whether it's mailed, handed across a booth table, or left in a truck cab for six months.</p>
            </div>
            <div>
              <svg className="spec-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M8 20 L32 8 L56 20 L32 32 Z"/>
                <path d="M8 20 L8 44 L32 56 L32 32"/>
                <path d="M56 20 L56 44 L32 56"/>
              </svg>
              <h3>Layout & Design</h3>
              <p>Structured layouts built around how buyers actually scan a spec sheet: capability up front, proof in the middle, contact information impossible to miss.</p>
              <p>Every piece designed to work standalone, without a salesperson in the room to explain it.</p>
            </div>
            <div>
              <h3>Production Management</h3>
              <p>We manage press checks, proofing, and delivery timelines with our print partners, so the finished piece matches the file.</p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="approach section">
          <div className="container approach-grid">
            <div className="approach-intro">
              <h2>Our Approach<br/>to Print Marketing</h2>
              <div className="approach-tabs">
                <button className="approach-tab is-active" type="button">Collateral Strategy</button>
                <button className="approach-tab" type="button">Copywriting & Content</button>
                <button className="approach-tab" type="button">Design & Layout</button>
                <button className="approach-tab" type="button">Print Production & Delivery</button>
              </div>
            </div>
            <div className="approach-panels">
              <div className="approach-panel is-active">
                <p>The wrong format wastes a print budget. We start by deciding what actually needs to be printed.</p>
                <ul>
                  <li>Audience & Use-Case Mapping</li>
                  <li>Format Recommendations</li>
                  <li>Distribution Planning</li>
                  <li>Budget Planning</li>
                  <li>Brand Consistency Review</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Technical buyers skim for the spec, not the story. We write for how they actually read.</p>
                <ul>
                  <li>Product Copywriting</li>
                  <li>Technical Spec Writing</li>
                  <li>Headlines & Messaging</li>
                  <li>Proofing & Review</li>
                  <li>Multi-Language Support</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>A layout either guides the eye or fights it. We design for the fastest path to the information.</p>
                <ul>
                  <li>Catalog Design</li>
                  <li>One-Pager Layouts</li>
                  <li>Technical Sheet Design</li>
                  <li>Print-Ready Files</li>
                  <li>Brand Template Systems</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Good design falls apart with the wrong stock. We manage production so it doesn't.</p>
                <ul>
                  <li>Print Vendor Coordination</li>
                  <li>Proofing & Quality Control</li>
                  <li>Stock & Finish Selection</li>
                  <li>Fulfillment & Shipping</li>
                  <li>Reorder Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="gallery section">
          <div className="container">
            <span className="eyebrow">/ Gallery</span>
            <h2>Print Marketing Work</h2>
            <div className="gallery-grid">
              <div className="gallery-item gallery-item-tall"><img loading="lazy" src="/images/services/monufact-chat.jpg" alt="Printed product spec catalog"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/monufact-crossman-03.jpg" alt="Client project book spread"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/monufact-carterai.png" alt="Client brand book cover"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/digital-sales-assets.jpg" alt="One-pager layout"/></div>
              <div className="gallery-item gallery-item-tall"><img loading="lazy" src="/images/services/pachon-brandguide.jpg" alt="Client brand guide cover"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/pachon-business-cards.jpg" alt="Brochure design"/></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section faq-dark section">
          <div className="container faq-split">
            <div className="faq-intro">
              <span className="eyebrow">/ FAQ</span>
              <h2>Print Marketing Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What kinds of print materials do you produce?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Spec sheets, catalogs, brochures, one-pagers, and trade show handouts. Anything a salesperson or distributor needs to hand a buyer that has to survive the field.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Do you handle printing and production, or just design?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Both. We design the piece and manage production with our print partners, so you get finished, ready-to-distribute materials, not just a file.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Can you work from our existing brand guidelines?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Yes. If you already have brand standards, we design within them. If they're inconsistent or outdated, we'll flag that and can fold in a lighter positioning pass first.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How fast can you turn around a spec sheet or brochure?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>A single spec sheet typically takes one to two weeks from content to final file. Larger catalogs or multi-piece collateral sets take longer, we'll give you a specific timeline once we know the scope.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/services/monufact-crossman-03.jpg')"}}>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Put Something in Their Hands That Doesn't Get Tossed.</h2>
              <p>If your printed materials aren't surviving the field, let's redesign them. Talk to our print marketing team.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
