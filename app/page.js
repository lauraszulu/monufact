export const metadata = {
  title: "Monufact - Digital Solutions for the Steel Industry",
  description: "Monufact is a digital marketing agency based in London, Ontario, helping steel manufacturers and industrial companies modernize how they market, sell, and communicate.",
  openGraph: {
    title: "Monufact - Digital Solutions for the Steel Industry",
    description: "Monufact is a digital marketing agency based in London, Ontario, helping steel manufacturers and industrial companies modernize how they market, sell, and communicate.",
    url: "/",
    siteName: "Monufact",
    images: ["/images/about/monufact-about-hero.jpg"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monufact - Digital Solutions for the Steel Industry",
    description: "Monufact is a digital marketing agency based in London, Ontario, helping steel manufacturers and industrial companies modernize how they market, sell, and communicate.",
    images: ["/images/about/monufact-about-hero.jpg"],
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-eyebrow">
              <span className="eyebrow">/ Industrial & Manufacturing Marketing</span>
            </div>
            <div className="hero-title">
              <h1>Marketing Built for Manufacturers & Industrial Suppliers.</h1>
            </div>
          </div>
          <div className="hero-media" id="heroMedia">
            <video id="heroImage" autoPlay muted loop playsInline>
              <source src="/videos/monufact-hero-02.mp4" type="video/mp4"/>
            </video>
            <div className="hero-video" id="heroVideo">
              <iframe id="heroVideoFrame" src="" title="Hero video" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="hero-upload" id="heroUpload">
              <video id="heroUploadVideo" muted loop playsInline autoPlay></video>
              <img loading="lazy" id="heroUploadGif" alt="Hero upload"/>
            </div>
            <div className="hero-media-actions">
              <button type="button" className="hero-video-btn" id="heroVideoBtn">Add YouTube Video</button>
              <button type="button" className="hero-video-btn" id="heroUploadBtn">Upload GIF/Video</button>
              <input type="file" id="heroUploadInput" accept=".gif,image/gif,video/mp4,video/webm,video/ogg" hidden/>
            </div>
            <div className="hero-cta-group">
              <a href="#" className="hero-cta btn btn-dark">Learn more
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
              <div className="hero-cta-accent"></div>
            </div>
          </div>
        </section>

        <div className="hero-video-modal" id="heroVideoModal" hidden>
          <div className="hero-video-modal-backdrop" id="heroVideoModalBackdrop"></div>
          <div className="hero-video-modal-box" role="dialog" aria-modal="true" aria-labelledby="heroVideoModalTitle">
            <h4 id="heroVideoModalTitle">Add YouTube Video</h4>
            <p>Paste a YouTube video link below.</p>
            <input type="text" id="heroVideoInput" placeholder="https://www.youtube.com/watch?v=..."/>
            <p className="hero-video-modal-error" id="heroVideoModalError" hidden>Couldn't find a valid YouTube video in that link. Please check it and try again.</p>
            <div className="hero-video-modal-actions">
              <button type="button" className="hero-video-modal-cancel" id="heroVideoModalCancel">Cancel</button>
              <button type="button" className="btn btn-dark" id="heroVideoModalSave">Add Video</button>
            </div>
          </div>
        </div>

        {/* Cookie banner */}
        <div className="cookie-banner" id="cookieBanner">
          <h4>We value your privacy</h4>
          <p>We use cookies to improve your experience, analyze site traffic, and personalize content. You can customize your preferences or accept all.</p>
          <div className="cookie-links">
            <a className="link-btn" id="cookieCustomize" href="/company/cookie-policy">Customize</a>
            <button className="link-btn" id="cookieReject">Reject All</button>
          </div>
          <button className="btn btn-accept" id="cookieAccept">Accept All</button>
        </div>

        {/* Stats */}
        <section className="stats section">
          <div className="container grid-3 divided">
            <div className="stat-text">
              <p>We help industrial and manufacturing companies turn complex products into marketing that procurement teams and engineers actually trust.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <p>Of our work is built exclusively for manufacturers and industrial suppliers — never a generic playbook.</p>
            </div>
            <div className="stat-item">
              <span className="stat-number">90%</span>
              <p>Of what we build is made to hold up under an engineer's or procurement lead's scrutiny, not just to look good.</p>
            </div>
          </div>
        </section>

        {/* Feature cards (hidden until service pages are ready to link publicly)
        <section className="feature-cards section">
          <div className="container grid-3">
            <div className="feature-col">
              <span className="eyebrow">/ Capabilities</span>
              <div className="card card-image" style={{backgroundImage: "url('https://picsum.photos/seed/monufact-feature-a/600/700')"}}>
                <div className="card-glow"></div>
                <div className="card-overlay">
                  <p>Supporting the businesses that build our world</p>
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>
            <div className="feature-col">
              <span className="eyebrow">/ Approach</span>
              <div className="card card-image" style={{backgroundImage: "url('https://picsum.photos/seed/monufact-steel/600/700')"}}>
                <div className="card-glow"></div>
                <div className="card-overlay">
                  <p>Built around your business goals</p>
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>
            <div className="feature-col">
              <span className="eyebrow">/ Who We Are</span>
              <div className="card card-image" style={{backgroundImage: "url('https://picsum.photos/seed/monufact-feature-c/600/700')"}}>
                <div className="card-glow"></div>
                <div className="card-overlay">
                  <p>Marketing built for the companies that build everything else</p>
                  <span className="arrow">→</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Intro split */}
        <section className="intro-split section">
          <div className="container grid-3">
            <div>
              <h2>Marketing for How Industrial Companies Actually Buy</h2>
            </div>
            <div></div>
            <div className="intro-text">
              <p>Industrial and manufacturing companies sell into long procurement cycles, technical buyers, and highly specific product requirements. Generic marketing doesn't hold up in that environment — ours is built for it.</p>
              <p>From brand strategy to digital sales assets to trade show materials, we build marketing that speaks the language of engineers, procurement teams, and specifiers, and gets your products chosen.</p>
            </div>
          </div>
        </section>

        {/* Image banner */}
        <section className="image-banner">
          <video autoPlay muted loop playsInline aria-label="Monufact company intro">
            <source src="/videos/monufact-intro.mp4" type="video/mp4"/>
          </video>
          <span className="eyebrow overlay-label">/ Who We Are</span>
          <a href="#contact" className="btn btn-dark overlay-cta">Contact us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </section>

        {/* Industries */}
        <section className="industries section" id="industries">
          <div className="container">
            <span className="eyebrow">/ Industries</span>
            <h2>Industries We Serve</h2>
            <p className="industries-subhead">We build marketing for manufacturers and industrial companies across steel fabrication, construction, architecture and engineering, building products, industrial supply, energy and infrastructure, and industrial automation.</p>
            <div className="grid-3 industries-grid">
              <ul>
                <li>Manufacturing & Industrial Production</li>
                <li>Steel & Metal Fabrication</li>
                <li>Construction & Contracting</li>
              </ul>
              <ul>
                <li>Architecture & Engineering</li>
                <li>Building Products & Materials</li>
                <li>Industrial Supply & Distribution</li>
              </ul>
              <ul>
                <li>Energy & Infrastructure</li>
                <li>Automation & Industrial Technology</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Client logos */}
        <section className="client-logos section">
          <div className="container client-logos-row">
            <h3>Trusted By</h3>
            <div className="logo-carousel">
              <div className="logo-carousel-track">
                <img loading="lazy" className="logo-item-img" src="/images/clients/kao.svg" alt="Kao"/>
                <img loading="lazy" className="logo-item-img" src="/images/clients/pachon.svg" alt="Pachon"/>
                <img loading="lazy" className="logo-item-img" src="/images/clients/carter-ai.svg" alt="Carter AI"/>
                <img loading="lazy" className="logo-item-img" src="/images/clients/mgb.svg" alt="MGB"/>
                <img loading="lazy" className="logo-item-img" src="/images/clients/Crossman-Group-Primary-Field-Poppy-Accent.png" alt="Crossman Group"/>
              </div>
              <div className="logo-carousel-track" aria-hidden="true">
                <img loading="lazy" className="logo-item-img" src="/images/clients/kao.svg" alt=""/>
                <img loading="lazy" className="logo-item-img" src="/images/clients/pachon.svg" alt=""/>
                <img loading="lazy" className="logo-item-img" src="/images/clients/carter-ai.svg" alt=""/>
                <img loading="lazy" className="logo-item-img" src="/images/clients/mgb.svg" alt=""/>
                <img loading="lazy" className="logo-item-img" src="/images/clients/Crossman-Group-Primary-Field-Poppy-Accent.png" alt=""/>
              </div>
            </div>
          </div>
        </section>

        {/* Dark accordion */}
        <section className="dark-section section">
          <div className="container dark-section-grid">
            <div className="dark-content">
              <span className="eyebrow">/ Industrial Innovation</span>
              <h2>Modernizing How Industry Buys, Sells & Communicates</h2>
              <div className="accordion">
                <div className="accordion-item is-open">
                  <button className="accordion-trigger">Product Marketing <span className="plus"></span></button>
                  <div className="accordion-panel"><p>Building clear, buyer-focused product narratives that support procurement, specification, and competitive differentiation.</p></div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger">Technical Content Enablement <span className="plus"></span></button>
                  <div className="accordion-panel"><p>Transforming complex data, certifications, and engineering details into accessible digital content for buyers, specifiers, and distributors.</p></div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger">Digital Sales Support <span className="plus"></span></button>
                  <div className="accordion-panel"><p>Equipping sales teams with the tools, assets, and platforms they need to sell more effectively in modern industrial markets.</p></div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-trigger">Customer Experience Design <span className="plus"></span></button>
                  <div className="accordion-panel"><p>Improving digital touchpoints across the entire customer lifecycle, from research and quoting to onboarding, support, and retention.</p></div>
                </div>
              </div>
            </div>
            <div className="dark-media">
              <img loading="lazy" src="/images/industrial-innovation.svg" alt="Industrial innovation visual" className="rotate-img"/>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="solutions section" id="solutions">
          <div className="container">
            <div className="solutions-header">
              <span className="eyebrow">/ Services</span>
              <h2>Sustainable solutions for a stronger tomorrow.</h2>
            </div>
            <div className="solutions-grid divided">
              <div className="solutions-col">
                <a className="solution-item" href="/services/brand-strategy-positioning">
                  <div className="solution-media">
                    <img loading="lazy" src="/images/services/pachon-brandguide.jpg" alt="Brand Strategy & Positioning"/>
                    <span className="solution-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                  </div>
                  <h3>Brand Strategy & Positioning</h3>
                  <p>Most manufacturers don't struggle with capability. They struggle with proving it to buyers who've never set foot in the plant. We build the positioning that closes that gap.</p>
                </a>
                <a className="solution-item" href="/services/print-marketing-sales-collateral">
                  <div className="solution-media">
                    <img loading="lazy" src="/images/services/print-marketing-sales-collateral.jpg" alt="Print Marketing & Sales Collateral"/>
                    <span className="solution-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                  </div>
                  <h3>Print Marketing & Sales Collateral</h3>
                  <p>A spec sheet either gets read or gets tossed. We design print collateral built to survive the field, and close the deal once it gets there.</p>
                </a>
                <a className="solution-item" href="/services/digital-marketing">
                  <div className="solution-media">
                    <img loading="lazy" src="/images/services/monufact-performnace-01.jpg" alt="Digital Marketing"/>
                    <span className="solution-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                  </div>
                  <h3>Digital Marketing</h3>
                  <p>Impressions don't fill a pipeline. Qualified leads do. We build SEO, paid media, and automation around the buyers already searching for what you make.</p>
                </a>
              </div>
              <div className="solutions-col solutions-col-lead">
                <a className="solution-item" href="/services/performance-marketing">
                  <div className="solution-media">
                    <img loading="lazy" src="/images/services/performance-marketing.jpg" alt="Performance Marketing"/>
                    <span className="solution-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                  </div>
                  <h3>Performance Marketing</h3>
                  <p>Most industrial budget gets spent finding an audience that was never going to buy. We start with the buyers already looking for you.</p>
                </a>
                <a className="solution-item" href="/services/trade-show-event-materials">
                  <div className="solution-media">
                    <img loading="lazy" src="/images/services/trade-show-event-materials.jpg" alt="Trade Show & Event Materials"/>
                    <span className="solution-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                  </div>
                  <h3>Trade Show & Event Materials</h3>
                  <p>A booth either starts conversations or gets walked past. We design trade show materials built to do the former.</p>
                </a>
              </div>
              <div className="solutions-col">
                <a className="solution-item" href="/services/digital-sales-assets">
                  <div className="solution-media">
                    <img loading="lazy" src="/images/services/digital-sales-assets.jpg" alt="Digital Sales Assets"/>
                    <span className="solution-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                  </div>
                  <h3>Digital Sales Assets</h3>
                  <p>Most sales decks get built once and used for years after they stop working. We build assets that keep pace with what you actually sell.</p>
                </a>
                <a className="solution-item" href="/services/content-technical-communication">
                  <div className="solution-media">
                    <img loading="lazy" src="/images/services/content-technical-communications.jpg" alt="Content & Technical Communication"/>
                    <span className="solution-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                  </div>
                  <h3>Content & Technical Communication</h3>
                  <p>Complexity doesn't close deals. Clarity does. We turn technical specifications into content engineers actually trust.</p>
                </a>
                <a className="solution-item" href="/services/website-design-development">
                  <div className="solution-media">
                    <img loading="lazy" src="/images/services/website-design-development.jpg" alt="Website Design & Development"/>
                    <span className="solution-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
                  </div>
                  <h3>Website Design & Development</h3>
                  <p>A website either builds credibility or costs it. We design and build sites technical buyers trust enough to fill out the form.</p>
                </a>
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
          <div className="split-cta-right" id="contact">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>The Digital Partner for Industrial Business.</h2>
              <p>Monufact is a digital marketing agency based in London, Ontario, specializing in supporting manufacturers and industrial companies as they adapt to a digital-first market.</p>
            </div>
            <a href="/company/about" className="btn btn-dark">Learn more about us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>

        {/* Newsroom */}
        <section className="newsroom section">
          <div className="container">
            <h2>Newsroom</h2>
            <div className="grid-3 news-grid divided">
              <article className="news-card">
                <div className="news-card-media">
                  <a href="/news/trade-show-success">
                    <img loading="lazy" src="/images/blog/trade-show-success.jpg" alt="Trade Show Success for Canadian Manufacturers"/>
                  </a>
                  <a href="/news/trade-show-success" className="news-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </a>
                </div>
                <a href="/news/category-product-innovation" className="tag">Product Innovation</a>
                <a href="/news/trade-show-success"><h4>Trade Show Success for Canadian Manufacturers: How to Turn Events Into Real Business</h4></a>
                <p>For many Canadian manufacturers, trade shows are still one of the most powerful ways to generate leads, build relationships, and grow market share. But showing up isn't enough.</p>
              </article>
              <article className="news-card">
                <div className="news-card-media">
                  <a href="/news/sustainability-marketing-advantage">
                    <img loading="lazy" src="/images/blog/marketing-sustainability.jpg" alt="Why Sustainability Is Becoming a Marketing Advantage in Manufacturing"/>
                  </a>
                  <a href="/news/sustainability-marketing-advantage" className="news-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </a>
                </div>
                <a href="/news/category-press-release" className="tag">Press Release</a>
                <a href="/news/sustainability-marketing-advantage"><h4>Why Sustainability Is Becoming a Marketing Advantage in Manufacturing</h4></a>
                <p>Sustainability used to be something that lived behind the scenes. Today, it has moved to the forefront of decision-making for manufacturers and the clients they serve.</p>
              </article>
              <article className="news-card">
                <div className="news-card-media">
                  <a href="/news/on-grid-solar-energy">
                    <img loading="lazy" src="/images/blog/on-grid-solar.jpg" alt="On-Grid System: The New Face of Solar Energy"/>
                  </a>
                  <a href="/news/on-grid-solar-energy" className="news-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </a>
                </div>
                <span className="tag">News</span>
                <h4>On-Grid System: The New Face of Solar Energy</h4>
                <p>How on-grid solar systems and other sustainability investments are helping manufacturers reduce costs while meeting rising environmental expectations.</p>
              </article>
            </div>
          </div>
        </section>
    </>
  );
}
