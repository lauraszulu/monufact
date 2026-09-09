export const metadata = {
  title: "About Monufact - Digital Marketing for Manufacturers",
  description: "Monufact is a digital marketing agency in London, Ontario, helping steel manufacturers and industrial companies modernize how they market, sell, and communicate.",
  openGraph: {
    title: "About Monufact - Digital Marketing for Manufacturers",
    description: "Monufact is a digital marketing agency in London, Ontario, helping steel manufacturers and industrial companies modernize how they market, sell, and communicate.",
    url: "/company/about",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Monufact - Digital Marketing for Manufacturers",
    description: "Monufact is a digital marketing agency in London, Ontario, helping steel manufacturers and industrial companies modernize how they market, sell, and communicate.",
    images: ["/images/services/monufact-about-hero.webp"],
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
              <h1>Marketing Built by Someone Who's Sat on Your Side of the Table</h1>
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
              <p>Most agencies treat a manufacturer's website the same way they'd treat a coffee shop's: same templates, same stock photography, same 30-second attention span assumptions. That doesn't work when your buyer is an engineer doing due diligence, or a procurement lead comparing three vendors against a spec sheet.</p>
              <p>After years on the agency side working with brands that had nothing to do with how industrial buyers actually think and decide, I started Monufact to close that gap. It's a shop built specifically around manufacturers and industrial suppliers, not a generalist agency that happens to take one on.</p>
            </div>
            <div className="intro-text">
              <p>That also means no account managers relaying your notes to a junior team you'll never talk to. You work directly with the person doing the strategy and the design. Engagements are shaped around what your business actually needs, not a rigid retainer package built for agency convenience.</p>
            </div>
          </div>
        </section>

        {/* Image banner with stat overlay */}
        <section className="image-banner">
          <img loading="lazy" src="/images/services/monufact-about-hero.webp" alt="Monufact"/>
          <div className="container image-banner-overlay-container">
            <div className="stat-overlay-card">
              <span className="eyebrow">/ Experience. Transparency. Results.</span>
              <span className="stat-number">20+</span>
              <p>years combined marketing experience</p>
            </div>
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
            <img loading="lazy" src="/images/about/monufact-laura.webp" alt="Laura Zuluaga, Founder of Monufact"/>
            <div className="founder-bio">
              <blockquote className="quote-block">
                “I spent years watching manufacturers get marketing built for someone else's business, then wonder why it didn't convert. Monufact exists to build it for yours instead.”
                <cite>Laura Zuluaga, Founder, Monufact</cite>
              </blockquote>
              <p>Before Monufact, I worked agency-side building marketing for brands across industries. It's the kind of experience that teaches you fast which playbooks are universal and which ones fall apart the moment a buyer needs a spec sheet before a phone call. I'm also a Professor of design and web at Fanshawe College, which keeps me hands-on with the craft, not just managing it.</p>
              <p>Manufacturers kept getting the universal playbook anyway. Monufact is the fix: senior-level work, direct access, no bloat.</p>
            </div>
          </div>
        </section>
    </>
  );
}
