export const metadata = {
  title: "Brand Strategy & Positioning for Manufacturers - Monufact",
  description: "Build a clear, credible brand identity that resonates with engineers, buyers, and distributors in competitive industrial markets.",
  openGraph: {
    title: "Brand Strategy & Positioning for Manufacturers - Monufact",
    description: "Build a clear, credible brand identity that resonates with engineers, buyers, and distributors in competitive industrial markets.",
    url: "/services/brand-strategy-positioning",
    siteName: "Monufact",
    images: ["/images/about/monufact-about-hero.jpg"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Strategy & Positioning for Manufacturers - Monufact",
    description: "Build a clear, credible brand identity that resonates with engineers, buyers, and distributors in competitive industrial markets.",
    images: ["/images/about/monufact-about-hero.jpg"],
  },
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Services</span>
            <h1>Brand Strategy & Positioning</h1>
            <p className="service-intro">Most manufacturers don't struggle with capability. They struggle with proving it to buyers who've never set foot in the plant. We build the brand strategy that closes that gap.</p>
          </div>
        </section>

        {/* Image banner */}
        <section className="image-banner">
          <img loading="lazy" className="parallax-img" src="/images/services/0458e783-9481-4d64-9c44-5b07896eef9b.jpg" alt="Brand Strategy & Positioning"/>
          <span className="eyebrow overlay-label">/ Brand Strategy</span>
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
              <p>A brand isn't a logo. It's the reason an engineer trusts your spec sheet before your team ever picks up the phone. We build positioning that earns that trust in advance.</p>
            </div>
            <div className="intro-text">
              <p>Clarity moves faster than noise. Once your position in the market is defined, every asset that follows (your website, your trade show booth, your sales deck) does its job without explanation.</p>
            </div>
          </div>
        </section>

        {/* Dedicated to */}
        <section className="industry-innovation dedicated-to">
          <div className="container industry-innovation-intro">
            <h2>Dedicated to Getting You Chosen</h2>
            <p>Positioning work only matters if it changes what happens in the room when a buyer is deciding between you and a competitor. We build brand strategy around that moment, not a mood board.</p>
          </div>
          <img loading="lazy" src="/images/services/pachon-brandguide.jpg" alt="Brand strategy and positioning"/>
        </section>

        {/* Spec columns */}
        <section className="spec-columns section">
          <div className="container grid-3 divided">
            <div>
              <h3>Competitive Positioning</h3>
              <p>We map where you sit against direct competitors and adjacent players, then define the ground you can credibly own. This becomes the foundation every other message points back to.</p>
            </div>
            <div>
              <svg className="spec-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M8 20 L32 8 L56 20 L32 32 Z"/>
                <path d="M8 20 L8 44 L32 56 L32 32"/>
                <path d="M56 20 L56 44 L32 56"/>
              </svg>
              <h3>Messaging Framework</h3>
              <p>Core messaging pillars, proof points, and language your team can use consistently across sales calls, RFQs, and marketing, so the story doesn't change depending on who's telling it.</p>
              <p>Tested against how technical buyers actually evaluate suppliers, not generic brand language.</p>
            </div>
            <div>
              <h3>Visual Identity</h3>
              <p>Logo, color, typography, and usage guidelines built to hold up on a spec sheet, a trade show booth, and a homepage alike.</p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="approach section">
          <div className="container approach-grid">
            <div className="approach-intro">
              <h2>Our Approach<br/>to Brand Strategy</h2>
              <div className="approach-tabs">
                <button className="approach-tab is-active" type="button">Market & Competitive Analysis</button>
                <button className="approach-tab" type="button">Strategic Definition</button>
                <button className="approach-tab" type="button">Verbal & Messaging Systems</button>
                <button className="approach-tab" type="button">Visual Identity Systems</button>
              </div>
            </div>
            <div className="approach-panels">
              <div className="approach-panel is-active">
                <p>Most positioning gets built on assumption. We start with the market as it actually is.</p>
                <ul>
                  <li>Competitor Positioning Audit</li>
                  <li>Market & Industry Trends</li>
                  <li>Customer & Buyer Insights</li>
                  <li>SWOT Analysis</li>
                  <li>Opportunity Mapping</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Direction first, decisions second. Every choice that follows gets easier once this is defined.</p>
                <ul>
                  <li>Brand Purpose & Vision</li>
                  <li>Positioning Statement</li>
                  <li>Target Audience Definition</li>
                  <li>Value Proposition</li>
                  <li>Brand Architecture</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>One voice, used everywhere. Consistency is what makes a brand recognizable, not repetition.</p>
                <ul>
                  <li>Brand Voice & Tone</li>
                  <li>Core Messaging Pillars</li>
                  <li>Tagline & Naming</li>
                  <li>Elevator Pitch</li>
                  <li>Messaging Guidelines</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Strategy sets direction. Design makes it visible. The system carries the brand once the thinking is done.</p>
                <ul>
                  <li>Logo & Marks</li>
                  <li>Typography & Color Systems</li>
                  <li>Visual Language & Graphic Assets</li>
                  <li>Photography & Rendering Direction</li>
                  <li>Brand Standards & Usage Guidelines</li>
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
              <h2>Brand Strategy Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What does a Brand Strategy & Positioning engagement actually include?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Competitive and market analysis, messaging and positioning strategy, and often a visual identity refresh, built specifically around how technical buyers evaluate manufacturers, not generic brand exercises.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How is this different from a logo redesign?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>A logo is one output, not the strategy. We start with how your buyers make decisions and where you're currently losing them, then build messaging and visuals that support that. A new logo may or may not be part of the outcome.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How long does brand positioning work take?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Most engagements run four to eight weeks, depending on how many stakeholders are involved in sign-off and whether we're starting from scratch or refining an existing brand.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Do we need this before starting a new website or marketing campaign?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Not always, but it helps. Without clear positioning, a new website or campaign has nothing consistent to say. Many clients start here so every other service inherits the same message.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/services/pachon-brandguide.jpg')"}}>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Your Brand Should Work as Hard as Your Product.</h2>
              <p>If your positioning isn't closing the gap between what you build and what buyers understand, let's fix that. Talk to our brand strategy team.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
