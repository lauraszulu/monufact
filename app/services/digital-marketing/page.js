export const metadata = {
  title: "Digital Marketing for Manufacturers - Monufact",
  description: "Full-funnel digital marketing for manufacturers: SEO, paid media, email, and marketing automation built to generate qualified industrial leads.",
  openGraph: {
    title: "Digital Marketing for Manufacturers - Monufact",
    description: "Full-funnel digital marketing for manufacturers: SEO, paid media, email, and marketing automation built to generate qualified industrial leads.",
    url: "/services/digital-marketing",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing for Manufacturers - Monufact",
    description: "Full-funnel digital marketing for manufacturers: SEO, paid media, email, and marketing automation built to generate qualified industrial leads.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Digital Marketing\", \"description\": \"Full-funnel digital marketing for manufacturers: SEO, paid media, email, and marketing automation built to generate qualified industrial leads.\", \"provider\": {\"@type\": \"ProfessionalService\", \"name\": \"Monufact\", \"url\": \"https://monufact.com\"}, \"areaServed\": \"CA\", \"url\": \"https://monufact.com/services/digital-marketing\"}" }} />
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Services</span>
            <h1>Digital Marketing</h1>
            <p className="service-intro">Traffic without intent is just noise. We build digital marketing around the buyers already searching for what you make.</p>
          </div>
        </section>

        {/* Image banner */}
        <section className="image-banner">
          <img loading="lazy" className="parallax-img" src="/images/services/monufact-performnace-01.webp" alt="Digital Marketing"/>
          <span className="eyebrow overlay-label">/ Digital Marketing</span>
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
              <p>Most manufacturers are invisible to the search that would find them. We close the gap between what you make and what buyers can actually find.</p>
            </div>
            <div className="intro-text">
              <p>Channels compound when they're connected. SEO earns the visit, automation earns the follow-up, and together they earn the deal.</p>
            </div>
          </div>
        </section>

        {/* Dedicated to */}
        <section className="industry-innovation dedicated-to">
          <div className="container industry-innovation-intro">
            <h2>Dedicated to Compounding Results</h2>
            <p>SEO, email, and automation don't pay off in week one. We build digital marketing systems designed to keep generating qualified leads long after a campaign budget runs out.</p>
          </div>
          <img loading="lazy" src="/images/services/monufact-metalcor.webp" alt="Digital marketing"/>
        </section>

        {/* Spec columns */}
        <section className="spec-columns section">
          <div className="container grid-3 divided">
            <div>
              <h3>Technical SEO</h3>
              <p>Site structure, page speed, and indexing fixed at the foundation, so content has something to rank on before we ever publish a word.</p>
            </div>
            <div>
              <svg className="spec-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M8 20 L32 8 L56 20 L32 32 Z"/>
                <path d="M8 20 L8 44 L32 56 L32 32"/>
                <path d="M56 20 L56 44 L32 56"/>
              </svg>
              <h3>Content & Automation</h3>
              <p>Email sequences and nurture flows built around your actual sales cycle, not a generic drip campaign template.</p>
              <p>Timed to how long industrial buyers actually take to decide, not how fast a typical B2C funnel assumes they will.</p>
            </div>
            <div>
              <h3>Analytics & Reporting</h3>
              <p>Dashboards tied to leads and pipeline, not just traffic, so you can see what's actually working.</p>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="approach section">
          <div className="container approach-grid">
            <div className="approach-intro">
              <h2>Our Approach<br/>to Digital Marketing</h2>
              <div className="approach-tabs">
                <button className="approach-tab is-active" type="button">SEO & Organic Visibility</button>
                <button className="approach-tab" type="button">Paid Media & Search</button>
                <button className="approach-tab" type="button">Email & Marketing Automation</button>
                <button className="approach-tab" type="button">Analytics & Reporting</button>
              </div>
            </div>
            <div className="approach-panels">
              <div className="approach-panel is-active">
                <p>If a buyer can't find you searching, your competitor gets found instead. We close that gap first.</p>
                <ul>
                  <li>Technical SEO Audits</li>
                  <li>Keyword & Search Intent Research</li>
                  <li>On-Page Optimization</li>
                  <li>Local & Industrial Directory Listings</li>
                  <li>Content Gap Analysis</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Budget spent on the wrong audience is budget wasted. We put it in front of buyers already looking.</p>
                <ul>
                  <li>Search & Display Advertising</li>
                  <li>Retargeting Campaigns</li>
                  <li>Budget Planning & Bid Strategy</li>
                  <li>Landing Page Testing</li>
                  <li>Channel Performance Reporting</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>Industrial sales cycles are long. We build the follow-up that keeps you top of mind for all of it.</p>
                <ul>
                  <li>Lifecycle Email Campaigns</li>
                  <li>Marketing Automation Workflows</li>
                  <li>Lead Scoring & Segmentation</li>
                  <li>CRM Integration</li>
                  <li>Nurture Sequence Design</li>
                </ul>
              </div>
              <div className="approach-panel">
                <p>A campaign without reporting is a guess with a budget. We turn the data into decisions your team can act on.</p>
                <ul>
                  <li>Multi-Channel Attribution</li>
                  <li>Custom Dashboards</li>
                  <li>Monthly Performance Reviews</li>
                  <li>Conversion Tracking Setup</li>
                  <li>ROI Analysis</li>
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
              <h2>Digital Marketing Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What channels does Digital Marketing cover?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>SEO, email marketing, marketing automation, and analytics, working alongside paid media to build a pipeline that keeps performing between campaigns, not just during them.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How is this different from Performance Marketing?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Performance Marketing is paid campaign execution and optimization. Digital Marketing is the broader system around it, organic search, nurture, and reporting. Many clients run both together.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Do you handle our website's SEO too?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Yes, technical and on-page SEO are part of this service. If you also need a full website rebuild, that falls under Website Design & Development and we coordinate the two.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How do you report on results?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Monthly reporting covering traffic, lead volume, and channel performance, with plain-language context on what changed and why, not just a dashboard export.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/services/monufact-performance.webp')"}}>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Get Found by the Buyers Already Searching.</h2>
              <p>If your website isn't showing up where your buyers are looking, let's fix that. Talk to our digital marketing team.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
