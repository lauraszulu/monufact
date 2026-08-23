export const metadata = {
  title: "Digital Sales Assets for Manufacturers - Monufact",
  description: "Capabilities decks, digital brochures, and sales materials that help manufacturers communicate value with clarity and precision.",
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Services</span>
            <h1>Digital Sales Assets</h1>
            <p className="service-intro">A spec sheet either closes a deal or gets deleted. We build sales assets your reps are proud to send and your buyers actually read.</p>
          </div>
        </section>

        {/* Image banner */}
        <section className="image-banner">
          <img loading="lazy" className="parallax-img" src="/images/services/digital-sales-assets.jpg" alt="Digital Sales Assets"/>
          <span className="eyebrow overlay-label">/ Digital Sales Assets</span>
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
              <p>Most sales collateral gets built once and used for years after it stops working. We build assets that keep pace with your product line, not your last rebrand.</p>
            </div>
            <div className="intro-text">
              <p>Clarity closes deals faster than polish. Every asset we build leads with the specification a buyer needs, not the story a marketer wants to tell.</p>
            </div>
          </div>
        </section>

        {/* Dedicated to */}
        <section className="industry-innovation dedicated-to">
          <div className="container industry-innovation-intro">
            <h2>Dedicated to Selling, Not Just Looking Good</h2>
            <p>A sales deck that doesn't move a deal forward is just decoration. We build digital sales assets around the questions your buyers actually ask before they sign.</p>
          </div>
          <img loading="lazy" src="/images/services/digital-sales-assets.jpg" alt="Digital sales assets"/>
        </section>

        {/* Spec columns */}
        <section className="spec-columns section">
          <div className="container grid-3 divided">
            <div>
              <h3>Sales Decks</h3>
              <p>Modular decks your team can adapt by product line or buyer type without waiting on a designer for every version.</p>
            </div>
            <div>
              <svg className="spec-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M8 20 L32 8 L56 20 L32 32 Z"/>
                <path d="M8 20 L8 44 L32 56 L32 32"/>
                <path d="M56 20 L56 44 L32 56"/>
              </svg>
              <h3>Interactive Specs</h3>
              <p>Configurable spec sheets and product tools that let a buyer explore options without a call.</p>
              <p>Built to integrate with your CRM, so your team knows exactly when and what a prospect engaged with.</p>
            </div>
            <div>
              <h3>Case Studies</h3>
              <p>Proof-driven one-pagers built around outcomes, not just project descriptions.</p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="approach section">
          <div className="container approach-grid">
            <div className="approach-intro">
              <h2>Our Approach<br/>to Digital Sales Assets</h2>
              <div className="approach-tabs">
                <button className="approach-tab is-active" type="button">Sales Enablement Audit</button>
                <button className="approach-tab" type="button">Content Strategy & Planning</button>
                <button className="approach-tab" type="button">Design & Production</button>
                <button className="approach-tab" type="button">Rollout & Sales Training</button>
              </div>
            </div>
            <div className="approach-panels">
              <div className="approach-panel is-active">
                <p>Most gaps in a sales process are invisible until someone asks the reps. We start there.</p>
                <ul>
                  <li>Asset Inventory Review</li>
                  <li>Sales Team Interviews</li>
                  <li>Buyer Journey Mapping</li>
                  <li>Competitive Asset Analysis</li>
                  <li>Gap Assessment</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>The right asset at the right stage moves a deal forward. The wrong one stalls it.</p>
                <ul>
                  <li>Asset Roadmap</li>
                  <li>Messaging Alignment</li>
                  <li>Format Prioritization</li>
                  <li>Approval Workflow</li>
                  <li>Content Calendar</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Polished doesn't mean padded. Every asset earns its length.</p>
                <ul>
                  <li>Capabilities Decks</li>
                  <li>Digital Brochures</li>
                  <li>One-Pagers & Spec Sheets</li>
                  <li>Proposal Templates</li>
                  <li>Case Study Design</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>An asset nobody uses isn't an asset. We make sure the team adopts it.</p>
                <ul>
                  <li>Asset Library Setup</li>
                  <li>Sales Team Training</li>
                  <li>Usage Guidelines</li>
                  <li>CRM Integration</li>
                  <li>Ongoing Updates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section faq-dark section">
          <div className="container faq-split">
            <div className="faq-intro">
              <span className="eyebrow">/ FAQ</span>
              <h2>Digital Sales Assets Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What counts as a "digital sales asset"?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Sales decks, interactive spec sheets, product configurators, case study one-pagers, and anything else your sales team sends a prospect between the first call and the signed order.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Can these integrate with our CRM or sales enablement tools?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Yes, we build assets to work with common CRMs and sales platforms so your team can track engagement and know when a prospect actually opened what was sent.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How often should these be updated?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>At minimum whenever your product line, pricing, or positioning changes. We recommend a review every six to twelve months even without major changes, since decks built once tend to keep circulating long after they stop working.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Do you build these from scratch or from existing materials?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Either. We can rebuild from your current decks and specs, or start fresh if what exists is outdated or inconsistent with your current brand.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/services/monufact-performnace-01.jpg')"}}>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Give Your Sales Team Assets That Actually Close.</h2>
              <p>If your reps are still sending outdated decks and spec sheets, let's fix that. Talk to our digital sales assets team.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
