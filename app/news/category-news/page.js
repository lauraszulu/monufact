export const metadata = {
  title: "News - Monufact Newsroom",
  description: "The latest company news and industry updates from Monufact, covering sustainability, technology, and manufacturing trends.",
  openGraph: {
    title: "News - Monufact Newsroom",
    description: "The latest company news and industry updates from Monufact, covering sustainability, technology, and manufacturing trends.",
    url: "/news/category-news",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News - Monufact Newsroom",
    description: "The latest company news and industry updates from Monufact, covering sustainability, technology, and manufacturing trends.",
    images: ["/images/services/monufact-about-hero.webp"],
  },
};

export default function Page() {
  return (
    <>
      {/* Category hero */}
        <section className="service-hero">
          <div className="container">
            <span className="eyebrow">/ News</span>
            <h1>News</h1>
            <p className="service-intro">The latest updates, press releases, and product innovation from Monufact.</p>
            <div className="news-filters">
              <a href="/news" className="news-filter">All</a>
              <a href="/news/category-product-innovation" className="news-filter">Product Innovation</a>
              <a href="/news/category-press-release" className="news-filter">Press Release</a>
              <a href="/news/category-news" className="news-filter is-active">News</a>
            </div>
          </div>
        </section>

        {/* News list */}
        <section className="section">
          <div className="container news-list">
            <article className="news-list-item">
              <a href="/news/manufacturing-matters-2026" className="news-list-media">
                <img loading="lazy" src="/images/industries/shared-factory-floor.webp" alt="Manufacturing Matters 2026"/>
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
