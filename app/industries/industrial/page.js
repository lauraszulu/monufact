export const metadata = {
  title: "Manufacturing & Industrial Production Marketing - Monufact",
  description: "Digital marketing built for manufacturers: brand strategy, sales enablement, and content that speaks to engineers, buyers, and distributors.",
  openGraph: {
    title: "Manufacturing & Industrial Production Marketing - Monufact",
    description: "Digital marketing built for manufacturers: brand strategy, sales enablement, and content that speaks to engineers, buyers, and distributors.",
    url: "/industries/industrial",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing & Industrial Production Marketing - Monufact",
    description: "Digital marketing built for manufacturers: brand strategy, sales enablement, and content that speaks to engineers, buyers, and distributors.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      {/* Service hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ Industries</span>
            <h1>Manufacturing & Industrial Production</h1>
            <p className="service-intro">Brand, content, and digital presence for manufacturers competing on more than price.</p>
          </div>
        </section>

        {/* Industry intro */}
        <section className="section">
          <div className="container">
            <div className="industry-intro">
              <p>Manufacturers compete on more than price and lead time today. Buyers research online long before they ever call a sales rep. We build the brand, content, and digital presence that help industrial producers get found, get understood, and get chosen.</p>
              <img loading="lazy" src="/images/industries/industrial-1.webp?v=2" alt="Manufacturing facility"/>
            </div>
          </div>
        </section>

        {/* Industry sector */}
        <section className="section industry-sector">
          <div className="container grid-3 divided">
            <div className="industry-sector-text">
              <div className="industry-sector-text-inner">
              <h2>Marketing Built for Production Floors</h2>
              <p>From plant capability to product specification, we translate what manufacturers do best into marketing that resonates with engineers, procurement teams, and distributors alike. Every asset we build is grounded in how your buyers actually evaluate a supplier.</p>
            </div>
            </div>
            <div className="industry-sector-col industry-sector-col-1">
              <img loading="lazy" src="/images/industries/industrial-2.webp" alt="Worker inspecting metal sheets"/>
            </div>
            <div className="industry-sector-col industry-sector-col-2">
              <img loading="lazy" src="/images/industries/industrial-3.webp" alt="Worker inspecting materials in a factory"/>
            </div>
          </div>
        </section>

        {/* Industry innovation */}
        <section className="industry-innovation">
          <div className="container industry-innovation-intro">
            <h2>Built Around Your Production Reality</h2>
            <p>We work closely with manufacturing teams to understand capacity, capability, and competitive position before a single asset gets built. That means marketing that reflects what your plant can actually deliver and communicates it with the credibility technical buyers expect.</p>
          </div>
          <img loading="lazy" src="/images/industries/industrial-1.webp?v=2" alt="Industrial production facility"/>
        </section>

        {/* Industry details */}
        <section className="section">
          <div className="container">
            <div className="industry-details divided">
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 21V9"/></svg>
                <h4>Brand & Positioning</h4>
                <p>Define how your plant is positioned against competitors, and give sales teams a clear story to tell.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5M12 12v10"/></svg>
                <h4>Sales Enablement</h4>
                <p>Capabilities decks, spec sheets, and sales tools built to support every stage of a technical sales cycle.</p>
              </div>
              <div>
                <svg className="industry-detail-icon" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9h20"/></svg>
                <h4>Digital Presence</h4>
                <p>A website and content strategy that turns research-stage buyers into qualified inbound leads.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section faq-dark section">
          <div className="container faq-split">
            <div className="faq-intro">
              <span className="eyebrow">/ FAQ</span>
              <h2>Manufacturing Marketing Questions, Answered.</h2>
            </div>
            <div className="accordion faq-accordion">
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">How is marketing for a manufacturer different from marketing a typical business?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Buyers are usually evaluating a supplier's capability and reliability, not just a product, so marketing has to prove production capacity, quality systems, and track record, not just describe what you make. Procurement and engineering both need to trust what they're reading before they'll pick up the phone.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">Our sales team already has a deck. Why do we need a marketing strategy too?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>A sales deck works once someone's already talking to your team. Marketing's job is getting the right buyers to that conversation in the first place, mostly through a website and content that shows up when a procurement team is researching suppliers, before your sales team even knows they exist.</p>
                </div>
              </div>
              <div className="accordion-item">
                <button className="accordion-trigger" type="button">What's the biggest gap you typically see on manufacturer websites?
                  <span className="plus"></span>
                </button>
                <div className="accordion-panel">
                  <p>Outdated or missing capability information. Buyers can't tell what your plant can actually produce, at what volume, or to what tolerance, so they move on to a competitor whose site answers that in the first thirty seconds.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Split CTA */}
        <section className="split-cta">
          <div className="split-cta-left" style={{backgroundImage: "url('/images/industries/industrial-2.webp')"}}>
            <div className="split-icon">⬡</div>
            <div className="split-caption">
              <h4>Built to Support</h4>
              <p>For all types of equipment.</p>
            </div>
          </div>
          <div className="split-cta-right">
            <span className="eyebrow">/ Get to know us</span>
            <div>
              <h2>Your Capability Shouldn't Be Your Best-Kept Secret.</h2>
              <p>If procurement teams can't find proof of what your plant can actually do, let's fix that. Talk to our team about manufacturing marketing.</p>
            </div>
            <a href="/company/contact" className="btn btn-dark">Contact us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
        </section>
    </>
  );
}
