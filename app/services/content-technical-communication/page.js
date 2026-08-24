export const metadata = {
  title: "Content & Technical Communication - Monufact",
  description: "Clear technical documentation, case studies, and content that turns complex products into content buyers can actually use.",
  openGraph: {
    title: "Content & Technical Communication - Monufact",
    description: "Clear technical documentation, case studies, and content that turns complex products into content buyers can actually use.",
    url: "/services/content-technical-communication",
    siteName: "Monufact",
    images: ["/images/about/monufact-about-hero.jpg"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content & Technical Communication - Monufact",
    description: "Clear technical documentation, case studies, and content that turns complex products into content buyers can actually use.",
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
            <h1>Content & Technical Communication</h1>
            <p className="service-intro">Complexity doesn't close deals. Clarity does. We turn technical specifications into content engineers actually trust.</p>
          </div>
        </section>

        {/* Image banner */}
        <section className="image-banner">
          <img loading="lazy" className="parallax-img" src="/images/services/monufact-carterai.png" alt="Content & Technical Communication"/>
          <span className="eyebrow overlay-label">/ Content & Technical Communication</span>
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
              <p>Most technical content gets written for compliance, not comprehension. We write for the buyer trying to make a decision.</p>
            </div>
            <div className="intro-text">
              <p>Accuracy builds trust faster than adjectives. Every piece we write is reviewed for both: is it clear, and is it correct.</p>
            </div>
          </div>
        </section>

        {/* Dedicated to */}
        <section className="industry-innovation dedicated-to">
          <div className="container industry-innovation-intro">
            <h2>Dedicated to Getting It Right</h2>
            <p>Technical buyers can tell within a paragraph whether a writer understands the product. We build content with your engineering and product teams, so accuracy is never the trade-off for clarity.</p>
          </div>
          <img loading="lazy" src="/images/services/content-technical-communications.jpg" alt="Content and technical communication"/>
        </section>

        {/* Spec columns */}
        <section className="spec-columns section">
          <div className="container grid-3 divided">
            <div>
              <h3>Technical Writing</h3>
              <p>Product descriptions and spec content written from real documentation, reviewed by people who understand the product.</p>
            </div>
            <div>
              <svg className="spec-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M8 20 L32 8 L56 20 L32 32 Z"/>
                <path d="M8 20 L8 44 L32 56 L32 32"/>
                <path d="M56 20 L56 44 L32 56"/>
              </svg>
              <h3>Documentation</h3>
              <p>White papers and technical guides that translate engineering detail into content buyers and specifiers can actually use.</p>
              <p>Every piece reviewed by your subject matter experts before it publishes, so accuracy is never assumed.</p>
            </div>
            <div>
              <h3>Editorial Review</h3>
              <p>A structured review process that checks accuracy and compliance without slowing your publishing schedule to a crawl.</p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="approach section">
          <div className="container approach-grid">
            <div className="approach-intro">
              <h2>Our Approach<br/>to Technical Communication</h2>
              <div className="approach-tabs">
                <button className="approach-tab is-active" type="button">Content Audit & Strategy</button>
                <button className="approach-tab" type="button">Technical Documentation</button>
                <button className="approach-tab" type="button">Case Studies & Applications</button>
                <button className="approach-tab" type="button">Editing & Technical Review</button>
              </div>
            </div>
            <div className="approach-panels">
              <div className="approach-panel is-active">
                <p>Most gaps in technical content are invisible until a buyer asks the question you haven't answered. We find those gaps first.</p>
                <ul>
                  <li>Content Inventory</li>
                  <li>Audience & Use-Case Mapping</li>
                  <li>Gap Analysis</li>
                  <li>Content Roadmap</li>
                  <li>Style Guide Development</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>A spec sheet a buyer can't parse is a spec sheet they'll ignore. We write for clarity first, compliance second.</p>
                <ul>
                  <li>Spec Sheets & Data Sheets</li>
                  <li>Product Documentation</li>
                  <li>Installation & Application Guides</li>
                  <li>Certification Summaries</li>
                  <li>Glossaries & FAQs</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Claims get skimmed. Proof gets read. We turn your results into evidence a buyer can act on.</p>
                <ul>
                  <li>Case Study Development</li>
                  <li>Application Stories</li>
                  <li>Customer Interviews</li>
                  <li>Results & Data Visualization</li>
                  <li>Approval Workflows</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>One wrong number undoes a hundred right ones. We review for accuracy as closely as we write for clarity.</p>
                <ul>
                  <li>Technical Accuracy Review</li>
                  <li>Editing & Proofreading</li>
                  <li>Terminology Consistency</li>
                  <li>Compliance Review</li>
                  <li>Version Control</li>
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
              <h2>Technical Content Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What kind of technical content do you write?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Product descriptions, spec sheets, white papers, technical blog content, and documentation that turns engineering detail into content buyers and specifiers actually trust.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Do your writers have manufacturing or engineering backgrounds?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Our writers specialize in industrial and technical content and work directly with your engineering or product teams to verify accuracy, rather than guessing at specifications.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How do you handle highly technical or regulated content?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>We build in a technical review step with your subject matter experts before anything publishes, so accuracy and compliance requirements are checked by people who actually know the product.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Can you turn our existing engineering docs into customer-facing content?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Yes, that's one of our most common starting points: taking internal specs, data sheets, or manuals and rewriting them for the buyers and distributors who need to understand them.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/services/monufact-chat.jpg')"}}>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Turn Complexity Into Content Buyers Trust.</h2>
              <p>If your technical documentation is confusing the people it's meant to convince, let's rewrite it. Talk to our content team.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
