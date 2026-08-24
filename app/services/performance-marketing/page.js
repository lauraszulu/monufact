export const metadata = {
  title: "Performance Marketing for Industrial Companies - Monufact",
  description: "Targeted digital campaigns that drive industrial demand, expand distributor pipelines, and generate qualified B2B leads.",
  openGraph: {
    title: "Performance Marketing for Industrial Companies - Monufact",
    description: "Targeted digital campaigns that drive industrial demand, expand distributor pipelines, and generate qualified B2B leads.",
    url: "/services/performance-marketing",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing for Industrial Companies - Monufact",
    description: "Targeted digital campaigns that drive industrial demand, expand distributor pipelines, and generate qualified B2B leads.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Performance Marketing\", \"description\": \"Targeted digital campaigns that drive industrial demand, expand distributor pipelines, and generate qualified B2B leads.\", \"provider\": {\"@type\": \"ProfessionalService\", \"name\": \"Monufact\", \"url\": \"https://monufact.com\"}, \"areaServed\": \"CA\", \"url\": \"https://monufact.com/services/performance-marketing\"}" }} />
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Services</span>
            <h1>Performance Marketing</h1>
            <p className="service-intro">Impressions don't fill a pipeline. Qualified leads do. We build performance campaigns measured by what reaches your sales team, not what shows up in a dashboard.</p>
          </div>
        </section>

        {/* Image banner */}
        <section className="image-banner">
          <img loading="lazy" className="parallax-img" src="/images/services/performance-marketing.webp" alt="Performance Marketing"/>
          <span className="eyebrow overlay-label">/ Performance Marketing</span>
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
              <p>Most industrial marketing spends budget finding an audience that was never going to buy. We start with the buyers already searching for what you make.</p>
            </div>
            <div className="intro-text">
              <p>Data moves faster than instinct. Every campaign we run reports back in numbers your team can act on, not impressions your team can't use.</p>
            </div>
          </div>
        </section>

        {/* Dedicated to */}
        <section className="industry-innovation dedicated-to">
          <div className="container industry-innovation-intro">
            <h2>Dedicated to Qualified Pipeline</h2>
            <p>Impressions are easy to buy and hard to turn into revenue. We build performance campaigns around the buyers who are already searching for what you manufacture, not just the ones easiest to reach.</p>
          </div>
          <img loading="lazy" src="/images/services/monufact-performance.webp" alt="Performance marketing"/>
        </section>

        {/* Spec columns */}
        <section className="spec-columns section">
          <div className="container grid-3 divided">
            <div>
              <h3>Audience Targeting</h3>
              <p>Campaigns built around job titles, industries, and search intent specific to industrial buyers, not broad demographic guesses.</p>
            </div>
            <div>
              <svg className="spec-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M8 20 L32 8 L56 20 L32 32 Z"/>
                <path d="M8 20 L8 44 L32 56 L32 32"/>
                <path d="M56 20 L56 44 L32 56"/>
              </svg>
              <h3>Campaign Structure</h3>
              <p>Google and LinkedIn campaigns structured by product line and buyer stage, so spend goes toward the offers most likely to convert.</p>
              <p>Continuously tested and refined against cost per qualified lead, not just cost per click.</p>
            </div>
            <div>
              <h3>Conversion Tracking</h3>
              <p>Full-funnel tracking from click to closed deal, so budget decisions are based on revenue, not vanity metrics.</p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="approach section">
          <div className="container approach-grid">
            <div className="approach-intro">
              <h2>Our Approach<br/>to Performance Marketing</h2>
              <div className="approach-tabs">
                <button className="approach-tab is-active" type="button">Audience & Channel Strategy</button>
                <button className="approach-tab" type="button">Campaign Planning & Setup</button>
                <button className="approach-tab" type="button">Creative & Ad Development</button>
                <button className="approach-tab" type="button">Analytics & Optimization</button>
              </div>
            </div>
            <div className="approach-panels">
              <div className="approach-panel is-active">
                <p>Most budget is wasted before a single ad runs. We fix that first.</p>
                <ul>
                  <li>Audience Segmentation</li>
                  <li>Channel Selection</li>
                  <li>Platform Strategy</li>
                  <li>Budget Allocation</li>
                  <li>Competitive Benchmarking</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Structure decides performance. We build for measurement from day one, not as an afterthought.</p>
                <ul>
                  <li>Campaign Architecture</li>
                  <li>Targeting & Bidding Strategy</li>
                  <li>Landing Page Alignment</li>
                  <li>Tracking & Attribution Setup</li>
                  <li>Testing Roadmap</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Generic ads get scrolled past. Technical buyers respond to creative that speaks their language.</p>
                <ul>
                  <li>Ad Copywriting</li>
                  <li>Visual & Video Creative</li>
                  <li>A/B Testing Variants</li>
                  <li>Industry-Specific Messaging</li>
                  <li>Creative Refresh Cycles</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Data moves faster than guesswork. We adjust weekly, not quarterly.</p>
                <ul>
                  <li>Performance Dashboards</li>
                  <li>Conversion Rate Optimization</li>
                  <li>Lead Quality Analysis</li>
                  <li>Monthly Reporting</li>
                  <li>Budget Reallocation</li>
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
              <h2>Performance Marketing Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Which platforms do you run paid campaigns on?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Primarily Google and LinkedIn, since that's where industrial buyers actually search and research, with Meta added when it fits a specific audience or budget.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What's a realistic budget to start?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>It depends on your market and sales cycle, but most industrial campaigns need a meaningful monthly ad spend to generate statistically useful data. We'll recommend a starting number during discovery based on your goals.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How soon will we see results?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Initial data within the first few weeks, but industrial buying cycles are long. Expect 60 to 90 days before you can properly judge campaign performance against pipeline, not just clicks.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Do you handle landing pages for campaigns too?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Yes, dedicated landing pages are typically part of the engagement, since sending paid traffic to a generic page is one of the most common ways budget gets wasted.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/services/monufact-performnace-03.webp')"}}>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Stop Paying for Traffic That Was Never Going to Buy.</h2>
              <p>If your campaigns are generating clicks but not qualified leads, let's rebuild the targeting. Talk to our performance marketing team.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
