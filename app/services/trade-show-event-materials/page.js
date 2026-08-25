export const metadata = {
  title: "Trade Show & Event Materials Design - Monufact",
  description: "Custom-designed vehicle wraps, booth graphics, signage, and print materials built for industrial trade shows and events.",
  openGraph: {
    title: "Trade Show & Event Materials Design - Monufact",
    description: "Custom-designed vehicle wraps, booth graphics, signage, and print materials built for industrial trade shows and events.",
    url: "/services/trade-show-event-materials",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Show & Event Materials Design - Monufact",
    description: "Custom-designed vehicle wraps, booth graphics, signage, and print materials built for industrial trade shows and events.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Trade Show & Event Materials\", \"description\": \"Custom-designed vehicle wraps, booth graphics, signage, and print materials built for industrial trade shows and events.\", \"provider\": {\"@type\": \"ProfessionalService\", \"name\": \"Monufact\", \"url\": \"https://monufact.com\"}, \"areaServed\": \"CA\", \"url\": \"https://monufact.com/services/trade-show-event-materials\"}" }} />
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Services</span>
            <h1>Trade Show & Event Materials</h1>
            <p className="service-intro">A booth either starts conversations or gets walked past. We design trade show materials built to do the former.</p>
          </div>
        </section>

        {/* Image banner */}
        <section className="image-banner">
          <img loading="lazy" className="parallax-img" src="/images/services/monufact-tradeshow-displays.webp" alt="Trade Show & Event Materials"/>
          <span className="eyebrow overlay-label">/ Trade Show & Events</span>
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
              <p>Most exhibitors spend the budget on the booth and forget the follow-up. We build materials for the whole event, not just the floor.</p>
            </div>
            <div className="intro-text">
              <p>Attention at a trade show lasts seconds. Every graphic and handout we design earns the next one.</p>
            </div>
          </div>
        </section>

        {/* Dedicated to */}
        <section className="industry-innovation dedicated-to">
          <div className="container industry-innovation-intro">
            <h2>Dedicated to the First Ten Seconds</h2>
            <p>A booth has about ten seconds to earn a second look. We design trade show materials engineered for that window, then built to hold up through a three-day show floor.</p>
          </div>
          <img loading="lazy" src="/images/services/monufact-ecofoot-tradeshow.webp" alt="Trade show and event materials"/>
        </section>

        {/* Spec columns */}
        <section className="spec-columns section">
          <div className="container grid-3 divided">
            <div>
              <h3>Booth Graphics</h3>
              <p>Large-format graphics designed to be read from twenty feet away and still hold up under show-floor lighting.</p>
            </div>
            <div>
              <svg className="spec-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M8 20 L32 8 L56 20 L32 32 Z"/>
                <path d="M8 20 L8 44 L32 56 L32 32"/>
                <path d="M56 20 L56 44 L32 56"/>
              </svg>
              <h3>Structure & Layout</h3>
              <p>Booth layouts planned around walk-up traffic flow and conversation points, not just visual impact.</p>
              <p>Designed to work with your existing hardware, or we'll advise on upgrades where the structure is holding you back.</p>
            </div>
            <div>
              <h3>Leave-Behinds</h3>
              <p>Handout materials and digital follow-ups built to keep the conversation going after the show floor empties out.</p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="approach section">
          <div className="container approach-grid">
            <div className="approach-intro">
              <h2>Our Approach<br/>to Trade Show & Events</h2>
              <div className="approach-tabs">
                <button className="approach-tab is-active" type="button">Booth & Exhibit Design</button>
                <button className="approach-tab" type="button">Signage & Event Graphics</button>
                <button className="approach-tab" type="button">Pre-Show & Digital Promotion</button>
                <button className="approach-tab" type="button">On-Site Sales Materials</button>
              </div>
            </div>
            <div className="approach-panels">
              <div className="approach-panel is-active">
                <p>A booth has three seconds to earn a second look. We design for that window, not for the wall behind it.</p>
                <ul>
                  <li>Booth Layout & Concept Design</li>
                  <li>Modular Display Systems</li>
                  <li>Brand-to-Booth Adaptation</li>
                  <li>Vendor-Ready Specification Files</li>
                  <li>Reusable Exhibit Systems</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Consistent graphics make a booth findable from across the floor. We design the whole footprint as one system.</p>
                <ul>
                  <li>Backdrop & Banner Stand Graphics</li>
                  <li>Wayfinding & Directional Signage</li>
                  <li>Portable Counter & Kiosk Design</li>
                  <li>Brand-Consistent Messaging</li>
                  <li>Production-Ready Design Files</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>The best conversations are booked before the show opens. We build the outreach that fills your schedule in advance.</p>
                <ul>
                  <li>Pre-Show Email Campaigns</li>
                  <li>Event Landing Pages</li>
                  <li>Meeting & Demo Scheduling</li>
                  <li>Social & Digital Promotion</li>
                  <li>Attendee List Targeting</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>A handout only works if someone keeps it. We design leave-behinds built to survive the trip home.</p>
                <ul>
                  <li>Capabilities Sheets & One-Pagers</li>
                  <li>Booth Staff Talking Points</li>
                  <li>Lead Capture Materials</li>
                  <li>Post-Show Follow-Up Templates</li>
                  <li>Print-Ready File Preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="gallery section">
          <div className="container">
            <span className="eyebrow">/ Gallery</span>
            <h2>Trade Show & Event Work</h2>
            <div className="gallery-grid">
              <div className="gallery-item gallery-item-tall"><img loading="lazy" src="/images/services/trade-show-event-materials.webp" alt="Trade show booth"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/0458e783-9481-4d64-9c44-5b07896eef9b.webp" alt="Event signage"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/print-marketing-sales-collateral.webp" alt="Booth graphics"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/monufact-performnace-03.webp" alt="Conference display"/></div>
              <div className="gallery-item gallery-item-tall"><img loading="lazy" src="/images/services/performance-marketing.webp" alt="Event banners"/></div>
              <div className="gallery-item"><img loading="lazy" src="/images/services/pachon-business-cards.webp" alt="Trade show floor"/></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section faq-dark section">
          <div className="container faq-split">
            <div className="faq-intro">
              <span className="eyebrow">/ FAQ</span>
              <h2>Trade Show Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What do you design for trade shows?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Booth graphics, signage, banner stands, handout materials, and digital assets for pre-show promotion. Everything a booth needs to start conversations instead of getting walked past.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How far in advance should we start?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Six to eight weeks before the show is ideal, to allow for design, print production, and shipping. Tighter timelines are possible but limit how much we can iterate.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Do you handle production and shipping logistics?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>We manage production through our print partners and coordinate shipping to the venue or your team, so materials arrive on time and booth-ready.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Can you work with our existing booth structure?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Yes. We design graphics to fit your current booth dimensions and hardware, or advise on updates if the structure itself is limiting what you can show.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/services/pachon-brandguide.webp')"}}>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Make Your Next Booth Worth the Trip.</h2>
              <p>If your last trade show generated more foot traffic than follow-up, let's fix that before the next one. Talk to our events team.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
