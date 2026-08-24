export const metadata = {
  title: "Website Design & Development for Manufacturers - Monufact",
  description: "Modern, fast, conversion-focused websites built for industrial manufacturers, from UX strategy and design through development and ongoing support.",
  openGraph: {
    title: "Website Design & Development for Manufacturers - Monufact",
    description: "Modern, fast, conversion-focused websites built for industrial manufacturers, from UX strategy and design through development and ongoing support.",
    url: "/services/website-design-development",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design & Development for Manufacturers - Monufact",
    description: "Modern, fast, conversion-focused websites built for industrial manufacturers, from UX strategy and design through development and ongoing support.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Website Design & Development\", \"description\": \"Modern, fast, conversion-focused websites built for industrial manufacturers, from UX strategy and design through development and ongoing support.\", \"provider\": {\"@type\": \"ProfessionalService\", \"name\": \"Monufact\", \"url\": \"https://monufact.com\"}, \"areaServed\": \"CA\", \"url\": \"https://monufact.com/services/website-design-development\"}" }} />
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Services</span>
            <h1>Website Design & Development</h1>
            <p className="service-intro">A website either builds credibility or costs it. We design and build sites technical buyers trust enough to fill out the form.</p>
          </div>
        </section>

        {/* Image banner */}
        <section className="image-banner">
          <video className="parallax-img" autoPlay muted loop playsInline data-banner-video>
            <source src="/videos/monufact-hero-02.mp4" type="video/mp4"/>
          </video>
          <span className="eyebrow overlay-label">/ Website Design</span>
          <div className="overlay-cta-group">
            <a href="/company/contact" className="btn btn-dark overlay-cta">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <div className="overlay-cta-accent"></div>
          </div>
          <div className="hero-media-actions">
            <button type="button" className="hero-video-btn" data-banner-video-upload-btn>Upload Video</button>
            <input type="file" data-banner-video-upload-input accept="video/mp4,video/webm,video/ogg" hidden/>
          </div>
        </section>

        {/* Vision */}
        <section className="intro-split section">
          <div className="container vision-grid divided">
            <div>
              <h2>Turning Vision Into Measurable Momentum</h2>
            </div>
            <div className="intro-text">
              <p>Most industrial websites are built for the company, not the buyer trying to evaluate it. We build for the second visitor, not the first impression.</p>
            </div>
            <div className="intro-text">
              <p>Speed and clarity close more than polish. Every site we build is judged on how fast a buyer finds what they came for.</p>
            </div>
          </div>
        </section>

        {/* Dedicated to */}
        <section className="industry-innovation dedicated-to">
          <div className="container industry-innovation-intro">
            <h2>Dedicated to the First Impression</h2>
            <p>Most B2B buyers judge credibility from your website before they ever pick up the phone. We design and build sites engineered to earn that trust in the first few seconds.</p>
          </div>
          <img loading="lazy" src="/images/services/website-design-development.webp" alt="Website design and development"/>
        </section>

        {/* Spec columns */}
        <section className="spec-columns section">
          <div className="container grid-3 divided">
            <div>
              <h3>UX Architecture</h3>
              <p>Site maps and user flows built around how technical buyers actually research a supplier, not a generic template structure.</p>
            </div>
            <div>
              <svg className="spec-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M8 20 L32 8 L56 20 L32 32 Z"/>
                <path d="M8 20 L8 44 L32 56 L32 32"/>
                <path d="M56 20 L56 44 L32 56"/>
              </svg>
              <h3>Development</h3>
              <p>Built on a platform your team can actually update, with clean code and integrations that don't break with every plugin update.</p>
              <p>Tested across devices and browsers before launch, not after buyers start finding the bugs.</p>
            </div>
            <div>
              <h3>Ongoing Support</h3>
              <p>Hosting, monitoring, and updates available after launch, so the site keeps working as well on day 300 as it did on day one.</p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="approach section">
          <div className="container approach-grid">
            <div className="approach-intro">
              <h2>Our Approach<br/>to Website Design & Development</h2>
              <div className="approach-tabs">
                <button className="approach-tab is-active" type="button">UX Strategy & Site Architecture</button>
                <button className="approach-tab" type="button">Visual & Interface Design</button>
                <button className="approach-tab" type="button">Development & Integration</button>
                <button className="approach-tab" type="button">Launch & Ongoing Support</button>
              </div>
            </div>
            <div className="approach-panels">
              <div className="approach-panel is-active">
                <p>A confusing site loses buyers before they read a word. We map the path before we design a single page.</p>
                <ul>
                  <li>User Journey Mapping</li>
                  <li>Information Architecture</li>
                  <li>Competitor & Industry Benchmarking</li>
                  <li>Conversion Path Planning</li>
                  <li>Technical Requirements Audit</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>A generic template undersells a real operation. We design a site that looks like the company you actually are.</p>
                <ul>
                  <li>Wireframing & Prototyping</li>
                  <li>Custom UI Design</li>
                  <li>Responsive Layout Systems</li>
                  <li>Design System Documentation</li>
                  <li>Stakeholder Review Cycles</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>A slow site loses buyers before it loads. We build for speed as a feature, not an afterthought.</p>
                <ul>
                  <li>Front-End & Back-End Development</li>
                  <li>CMS Implementation</li>
                  <li>CRM & Form Integrations</li>
                  <li>Performance & Speed Optimization</li>
                  <li>Cross-Browser & Device Testing</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>A launch is a starting point, not a finish line. We keep improving the site after it goes live.</p>
                <ul>
                  <li>QA & Pre-Launch Testing</li>
                  <li>SEO & Analytics Setup</li>
                  <li>Staff Training & Handoff</li>
                  <li>Hosting & Maintenance Plans</li>
                  <li>Post-Launch Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="gallery section">
          <div className="container">
            <span className="eyebrow">/ Gallery</span>
            <h2>Website Design Work</h2>
            <div className="gallery-grid">
              <div className="gallery-item gallery-item-tall"><img loading="lazy" src="/images/services/monufact-metalcor.webp" alt="Website homepage design"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/monufact-performance.webp" alt="Mobile responsive layout"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/monufact-performnace-03.webp" alt="Product page design"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/monufact-performnace-01.webp" alt="Navigation and UX wireframe"/></div>
              <div className="gallery-item gallery-item-tall"><img loading="lazy" src="/images/services/website-design-development.webp" alt="Website design system"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/monufact-metalcor.webp" alt="Dashboard interface design"/></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section faq-dark section">
          <div className="container faq-split">
            <div className="faq-intro">
              <span className="eyebrow">/ FAQ</span>
              <h2>Website Design Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What platform do you build websites on?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>We select the platform based on your needs, most commonly WordPress or a modern headless CMS, prioritizing something your team can actually update after launch.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How long does a typical website project take?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Most industrial website rebuilds take eight to twelve weeks from kickoff to launch, depending on page count, content readiness, and how many stakeholders are involved in review.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Do you handle hosting and maintenance after launch?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>We can, through an ongoing support plan covering hosting, updates, and monitoring, or hand off a fully documented site to your internal team if you'd rather manage it in-house.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Can you redesign our site without losing our SEO rankings?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Yes. Every rebuild includes a redirect map, technical SEO audit, and pre-launch checklist specifically to protect existing rankings through the transition.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/services/monufact-carterai.webp')"}}>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Your Website Is Costing You Buyers Right Now.</h2>
              <p>If your site is slow, dated, or hard to navigate, let's rebuild it around the buyer, not the org chart. Talk to our web team.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
