export const metadata = {
  title: "Print Marketing & Sales Collateral - Monufact",
  description: "High-quality printed catalogs, one-pagers, and technical sheets that support reps, distributors, and engineering decision-makers.",
  openGraph: {
    title: "Print Marketing & Sales Collateral - Monufact",
    description: "High-quality printed catalogs, one-pagers, and technical sheets that support reps, distributors, and engineering decision-makers.",
    url: "/services/print-marketing-sales-collateral",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Print Marketing & Sales Collateral - Monufact",
    description: "High-quality printed catalogs, one-pagers, and technical sheets that support reps, distributors, and engineering decision-makers.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Print Marketing & Sales Collateral\", \"description\": \"High-quality printed catalogs, one-pagers, and technical sheets that support reps, distributors, and engineering decision-makers.\", \"provider\": {\"@type\": \"ProfessionalService\", \"name\": \"Monufact\", \"url\": \"https://monufact.com\"}, \"areaServed\": [\"CA\", \"US\"], \"url\": \"https://monufact.com/services/print-marketing-sales-collateral\"}" }} />
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
          <img loading="lazy" className="parallax-img" src="/images/services/print-marketing-sales-collateral.webp" alt="Print Marketing & Sales Collateral"/>
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
          <img loading="lazy" src="/images/services/pachon-business-cards.webp" alt="Print marketing and sales collateral"/>
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
              <p>We handle press checks, proofing, and delivery timelines in-house, so the finished piece matches the file and nothing gets lost between design and delivery.</p>
            </div>
          </div>
        </section>

        {/* Business Cards & Branded Stationery */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">/ Branded Print</span>
            <h2>What We Can Print for You</h2>
            <p className="service-intro">Business cards, banners, and vehicle wraps all carry your brand somewhere your website can't: a handshake, a booth, a truck door. We handle full production in-house for all three, so what you approve on screen is exactly what shows up printed.</p>
          </div>
          <div className="container approach print-finishes-approach">
            <div className="approach-tabs print-finishes-tabs">
              <button className="approach-tab is-active" type="button">Business Cards</button>
              <button className="approach-tab" type="button">Banners</button>
              <button className="approach-tab" type="button">Vehicle Wraps</button>
            </div>
            <div className="approach-panels print-finishes-panels">
              <div className="approach-panel is-active">
                <p className="print-finishes-category">Standard Options</p>
                <div className="print-finishes-grid divided">
                  <div>
                    <h4>14PT Gloss or Matte, Double-Sided</h4>
                    <p>Our economical, standard option. Available in a gloss or matte finish, printed double-sided.</p>
                  </div>
                  <div>
                    <h4>16PT UV Gloss, Double-Sided</h4>
                    <p>A thicker stock with a high-gloss UV coating, a good option for a card that needs to feel more substantial.</p>
                  </div>
                  <div>
                    <h4>14PT Writeable</h4>
                    <p>Combines a semi-gloss coated side with an uncoated, writable side, so a contact can jot a note directly on the card.</p>
                  </div>
                  <div>
                    <h4>18PT Silk/Laminate, Double-Sided</h4>
                    <p>A silky lamination finish that adds durability along with a premium feel.</p>
                  </div>
                </div>
                <p className="print-finishes-category">Custom & Specialty Options</p>
                <div className="print-finishes-grid divided">
                  <div>
                    <h4>Metallic Foil (Raised), 18PT</h4>
                    <p>Silver or gold foil printing, raised off the card, for a standout, tactile finish.</p>
                  </div>
                  <div>
                    <h4>Durable Cards, 16PT</h4>
                    <p>100% recyclable, tear-resistant, non-toxic, and fully waterproof stock, built to survive a job site or a jacket pocket.</p>
                  </div>
                  <div>
                    <h4>Die Cut Cards</h4>
                    <p>Available in 14PT and 16PT stock, cut into a rounded-corner, oval, or leaf shape instead of a standard rectangle.</p>
                  </div>
                  <div>
                    <h4>Soft Touch (Suede)</h4>
                    <p>A soft, matte, velvet-like surface at 19PT (16PT stock plus 3PT lamination), with lamination that protects against scratches and smudges.</p>
                  </div>
                </div>
                <p className="print-finishes-note">Pricing depends on stock, finish, and quantity. <a href="/company/contact">Contact us</a> with the option and quantity you're considering and we'll put together a quote.</p>
              </div>
              <div className="approach-panel">
                <div className="print-finishes-grid divided">
                  <div>
                    <h4>Vinyl Banners</h4>
                    <p>Durable, weather-resistant vinyl for storefronts, trade show booths, and events, finished with grommets or hemming for however it needs to hang.</p>
                  </div>
                  <div>
                    <h4>Retractable & Step-and-Repeat</h4>
                    <p>Stand-mounted banners for booths and check-in tables, plus branded step-and-repeat backdrops for events and photo ops.</p>
                  </div>
                  <div>
                    <h4>Indoor & Outdoor Signage</h4>
                    <p>Rigid and flexible signage built for the environment it's going into, from a lobby wall to a job site fence.</p>
                  </div>
                  <div>
                    <h4>Custom Sizing</h4>
                    <p>Banners scaled to the space, not a template. Tell us where it's going up and we'll size it to fit.</p>
                  </div>
                </div>
                <p className="print-finishes-note">Pricing depends on size, material, and finishing. <a href="/company/contact">Contact us</a> with your dimensions and we'll put together a quote.</p>
              </div>
              <div className="approach-panel">
                <div className="print-finishes-grid divided">
                  <div>
                    <h4>Full Vehicle Wraps</h4>
                    <p>Complete coverage that turns a company vehicle into a moving billboard, with a UV-resistant laminate that holds up to weather and daily driving.</p>
                  </div>
                  <div>
                    <h4>Partial Wraps & Decals</h4>
                    <p>Logo panels, door decals, and partial coverage for fleets that want brand visibility without a full wrap.</p>
                  </div>
                  <div>
                    <h4>Fleet Consistency</h4>
                    <p>The same wrap design applied consistently across a multi-vehicle fleet, so every truck reads as the same company.</p>
                  </div>
                  <div>
                    <h4>Design & Install</h4>
                    <p>We design to your vehicle's exact dimensions and coordinate professional installation, not just a print file.</p>
                  </div>
                </div>
                <p className="print-finishes-note">Pricing depends on vehicle size and coverage. <a href="/company/contact">Contact us</a> with your fleet details and we'll put together a quote.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section dark-section">
          <div className="container">
            <div className="solutions-header">
              <span className="eyebrow">/ Our Approach</span>
              <h2>Our Approach to Print Marketing</h2>
            </div>
            <div className="solutions-grid approach-solutions-grid divided">
              <div className="solutions-col">
                <div className="solution-item approach-static-item">
                  <h3>Collateral Strategy</h3>
                  <p>The wrong format wastes a print budget. We start by deciding what actually needs to be printed.</p>
                  <ul>
                    <li>Audience & Use-Case Mapping</li>
                    <li>Format Recommendations</li>
                    <li>Distribution Planning</li>
                    <li>Budget Planning</li>
                    <li>Brand Consistency Review</li>
                  </ul>
                </div>
                <div className="solution-item approach-static-item">
                  <h3>Design & Layout</h3>
                  <p>A layout either guides the eye or fights it. We design for the fastest path to the information.</p>
                  <ul>
                    <li>Catalog Design</li>
                    <li>One-Pager Layouts</li>
                    <li>Technical Sheet Design</li>
                    <li>Color Swatch & Material Spec Sheets</li>
                    <li>Business Cards, Banners & Vehicle Wraps</li>
                    <li>Print-Ready Files</li>
                    <li>Brand Template Systems</li>
                  </ul>
                </div>
              </div>
              <div className="solutions-col">
                <div className="solution-item approach-static-item">
                  <h3>Copywriting & Content</h3>
                  <p>Technical buyers skim for the spec, not the story. We write for how they actually read.</p>
                  <ul>
                    <li>Product Copywriting</li>
                    <li>Technical Spec Writing</li>
                    <li>Headlines & Messaging</li>
                    <li>Proofing & Review</li>
                    <li>Multi-Language Support</li>
                  </ul>
                </div>
                <div className="solution-item approach-static-item">
                  <h3>Print Production & Delivery</h3>
                  <p>Good design falls apart with the wrong stock. We manage production so it doesn't.</p>
                  <ul>
                    <li>In-House Print Production</li>
                    <li>Proofing & Quality Control</li>
                    <li>Stock & Finish Selection</li>
                    <li>Fulfillment & Shipping</li>
                    <li>Reorder Management</li>
                  </ul>
                </div>
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
              <div className="gallery-item gallery-item-tall"><img loading="lazy" src="/images/services/monufact-chat.webp" alt="Printed product spec catalog"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/monufact-crossman-03.webp" alt="Client project book spread"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/monufact-carterai.webp" alt="Client brand book cover"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/digital-sales-assets.webp" alt="One-pager layout"/></div>
              <div className="gallery-item gallery-item-tall"><img loading="lazy" src="/images/services/pachon-brandguide.webp" alt="Client brand guide cover"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/pachon-business-cards.webp" alt="Business card design"/></div>
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
                  <p>Spec sheets, catalogs, brochures, one-pagers, trade show handouts, color swatch spec sheets for products with material or finish options, and business cards or other branded stationery. Anything a salesperson or distributor needs to hand a buyer that has to survive the field.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Do you handle printing and production, or just design?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Both. We handle full production in-house for business cards, banners, and vehicle wraps. For catalogs and larger collateral sets, we manage production with trusted print partners, so either way you get a finished, ready-to-distribute piece, not just a file.</p>
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
          <div className="split-cta-left" style={{backgroundImage: "url('/images/services/monufact-crossman-03.webp')"}}>
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
