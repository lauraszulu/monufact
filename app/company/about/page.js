export const metadata = {
  title: "About Monufact - Digital Marketing for Manufacturers",
  description: "Monufact is a digital marketing agency in London, Ontario, helping steel manufacturers and industrial companies modernize how they market, sell, and communicate.",
  openGraph: {
    title: "About Monufact - Digital Marketing for Manufacturers",
    description: "Monufact is a digital marketing agency in London, Ontario, helping steel manufacturers and industrial companies modernize how they market, sell, and communicate.",
    url: "/company/about",
    siteName: "Monufact",
    images: ["/images/about/monufact-about-hero.jpg"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Monufact - Digital Marketing for Manufacturers",
    description: "Monufact is a digital marketing agency in London, Ontario, helping steel manufacturers and industrial companies modernize how they market, sell, and communicate.",
    images: ["/images/about/monufact-about-hero.jpg"],
  },
};

export default function Page() {
  return (
    <>
      {/* About hero */}
        <section className="service-hero">
          <div className="container hero-find-more-row">
            <div>
              <span className="eyebrow">/ About</span>
              <h1>Shaping the Future of Steel</h1>
            </div>
          </div>
        </section>

        {/* Logo banner */}
        <div className="about-banner">
          <img loading="lazy" src="/images/monufact-logo-white.svg" alt="Monufact"/>
        </div>

        {/* Vision */}
        <section className="intro-split section" id="story">
          <div className="container vision-grid divided">
            <div>
              <h2>Turning Vision Into Measurable Momentum</h2>
            </div>
            <div className="intro-text">
              <p>At Monufact, we build modern marketing systems designed for sustainable growth. As a full-service marketing partner, we combine strategy, creative, performance media, and data intelligence to deliver measurable impact across every stage of the customer journey.</p>
              <p>In a landscape where attention is fragmented and competition is relentless, we help brands move with clarity and precision. Our integrated approach aligns brand positioning, digital execution, and performance optimization into one cohesive growth framework, ensuring every touchpoint works harder and smarter.</p>
              <p>We believe marketing should be accountable, scalable, and built for long-term value. Through strategic planning, advanced analytics, and conversion-driven execution, we turn complex challenges into streamlined growth opportunities.</p>
            </div>
            <div className="intro-text">
              <p>But our work extends beyond campaigns. We are committed to building meaningful partnerships, elevating the brands we serve, and creating marketing ecosystems that evolve alongside the businesses behind them.</p>
              <p>The future belongs to brands that adapt, measure, and lead with intention. At Monufact, we help them do exactly that.</p>
            </div>
          </div>
        </section>

        {/* Image banner with stat overlay */}
        <section className="image-banner">
          <img loading="lazy" src="/images/services/monufact-about-hero.jpg" alt="Monufact"/>
          <div className="stat-overlay-card">
            <span className="eyebrow">/ Experience. Transparency. Results.</span>
            <span className="stat-number">20+</span>
            <p>years combined marketing experience</p>
          </div>
        </section>

        {/* Icon stats */}
        <section className="section">
          <div className="container icon-stats divided">
            <div></div>
            <div className="icon-stat">
              <svg className="icon-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 16l9-11 9 11M3 16l9 5 9-5M3 16v0"/></svg>
              <span className="stat-number">15+</span>
              <p>Worked with brands across multiple industries</p>
            </div>
            <div className="icon-stat">
              <svg className="icon-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="7" y="3" width="10" height="18" rx="2"/><path d="M7 8h10M7 13h10"/></svg>
              <span className="stat-number">200+</span>
              <p>Websites built for our clients</p>
            </div>
          </div>
        </section>

        {/* Core values */}
        <section className="dark-section section core-values">
          <div className="container">
            <span className="eyebrow">/ Core Values</span>
            <h2>Core Values</h2>
            <p className="service-intro">Not framed-poster values. This is how we actually work, and what you can hold us to.</p>
            <div className="service-features">
              <div>
                <span className="value-icon">◆</span>
                <h4>We Say What We Mean</h4>
                <p>No jargon dressed up to sound smart. If a strategy can't be explained in plain language, it isn't ready to ship.</p>
              </div>
              <div>
                <span className="value-icon">↑</span>
                <h4>We Don't Coast</h4>
                <p>Every project gets the attention project one did. If something stops working, we're the ones who bring it up first.</p>
              </div>
              <div>
                <span className="value-icon">◎</span>
                <h4>You Get a Real Person</h4>
                <p>A direct line to whoever's doing the work, not a ticket number. Questions get answered the same day.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Meet the founder */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">/ Meet the Founder</span>
            <h2>The Person Behind Monufact</h2>
          </div>
          <div className="container quote-photo">
            <img loading="lazy" src="/images/about/monufact-laura.jpg" alt="Laura Zuluaga, Founder of Monufact"/>
            <div className="founder-bio">
              <blockquote className="quote-block">
                “I craft brands and websites for companies that are ready to grow, but need the right design support to get there.”
                <cite>Laura Zuluaga — Founder, Monufact</cite>
              </blockquote>
              <p>That's the idea behind Monufact. I work closely with manufacturing and industrial teams who are scaling quickly, or operating without in-house creative capacity, and integrate directly into how they already work, from brand systems to website design to the ongoing marketing assets that keep momentum going.</p>
              <p>My approach combines strategy and execution. Every design decision is made to support a bigger objective, whether that's clarity, conversion, or consistency, not just to look good on its own.</p>
            </div>
          </div>
        </section>
    </>
  );
}
