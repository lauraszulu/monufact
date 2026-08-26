export const metadata = {
  title: "News - Monufact",
  description: "News, press releases, and product innovation from Monufact.",
  openGraph: {
    title: "News - Monufact",
    description: "News, press releases, and product innovation from Monufact.",
    url: "/news",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News - Monufact",
    description: "News, press releases, and product innovation from Monufact.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      {/* News hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ News</span>
            <h1>News</h1>
            <p className="service-intro">The latest updates, press releases, and product innovation from Monufact.</p>
            <div className="news-filters">
              <a href="/news" className="news-filter is-active">All</a>
              <a href="/news/category-product-innovation" className="news-filter">Product Innovation</a>
              <a href="/news/category-press-release" className="news-filter">Press Release</a>
              <a href="/news/category-news" className="news-filter">News</a>
            </div>
          </div>
        </section>

        {/* News list */}
        <section className="section">
          <div className="container news-list">
            <article className="news-list-item">
              <a href="/news/trade-show-lead-generation-tips" className="news-list-media">
                <img loading="lazy" src="/images/services/monufact-tradeshow-displays.webp" alt="Trade show booth conversation"/>
              </a>
              <div>
                <div className="news-list-tags">
                  <span className="tag">News</span>
                </div>
                <a href="/news/trade-show-lead-generation-tips" className="news-list-title">
                  <h3>What Actually Gets You Leads at Trade Shows (It's Not the Pitch)</h3>
                </a>
                <p>Real trade show lead generation tips from the show floor: the one question that opens conversations, and the small booth fixes that made the biggest difference.</p>
                <a href="/news/trade-show-lead-generation-tips" className="news-list-readmore">Read more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </article>
            <article className="news-list-item">
              <a href="/news/manufacturing-matters-2026" className="news-list-media">
                <img loading="lazy" src="/images/services/monufact-about-hero.webp" alt="Manufacturing Matters 2026"/>
              </a>
              <div>
                <div className="news-list-tags">
                  <span className="tag">News</span>
                </div>
                <a href="/news/manufacturing-matters-2026" className="news-list-title">
                  <h3>Manufacturing Matters 2026: What London, Ontario Manufacturers Need to Know</h3>
                </a>
                <p>A free half-day conference for manufacturers, hosted by LEDC and the London Region Manufacturing Council on October 1, 2026 — here's what's on the agenda.</p>
                <a href="/news/manufacturing-matters-2026" className="news-list-readmore">Read more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </article>
            <article className="news-list-item">
              <a href="/news/trade-show-success" className="news-list-media">
                <img loading="lazy" src="/images/services/monufact-tradeshow-displays.webp" alt="Trade Show Success for Canadian Manufacturers"/>
              </a>
              <div>
                <div className="news-list-tags">
                  <span className="tag">Product Innovation</span>
                </div>
                <a href="/news/trade-show-success" className="news-list-title">
                  <h3>Trade Show Success for Canadian Manufacturers: How to Turn Events Into Real Business</h3>
                </a>
                <p>For many Canadian manufacturers, trade shows are still one of the most powerful ways to generate leads, build relationships, and grow market share. But showing up isn't enough.</p>
                <a href="/news/trade-show-success" className="news-list-readmore">Read more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </article>
            <article className="news-list-item">
              <a href="/news/sustainability-marketing-advantage" className="news-list-media">
                <img loading="lazy" src="/images/blog/marketing-sustainability.webp" alt="Why Sustainability Is Becoming a Marketing Advantage in Manufacturing"/>
              </a>
              <div>
                <div className="news-list-tags">
                  <span className="tag">Press Release</span>
                </div>
                <a href="/news/sustainability-marketing-advantage" className="news-list-title">
                  <h3>Why Sustainability Is Becoming a Marketing Advantage in Manufacturing</h3>
                </a>
                <p>Sustainability used to be something that lived behind the scenes. Today, it has moved to the forefront of decision-making for manufacturers and the clients they serve.</p>
                <a href="/news/sustainability-marketing-advantage" className="news-list-readmore">Read more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </article>
            <article className="news-list-item">
              <a href="/news/on-grid-solar-energy" className="news-list-media">
                <img loading="lazy" src="/images/blog/on-grid-solar.webp" alt="On-Grid System: The New Face of Solar Energy"/>
              </a>
              <div>
                <div className="news-list-tags">
                  <span className="tag">News</span>
                </div>
                <a href="/news/on-grid-solar-energy" className="news-list-title">
                  <h3>On-Grid System: The New Face of Solar Energy</h3>
                </a>
                <p>How on-grid solar systems and other sustainability investments are helping manufacturers reduce costs while meeting rising environmental expectations.</p>
                <a href="/news/on-grid-solar-energy" className="news-list-readmore">Read more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </article>
          </div>
        </section>
    </>
  );
}
