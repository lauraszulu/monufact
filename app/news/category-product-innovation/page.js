export const metadata = {
  title: "Product Innovation - Monufact Newsroom",
  description: "Insights on product innovation, trade shows, and go-to-market strategy for manufacturers, from the Monufact newsroom.",
  openGraph: {
    title: "Product Innovation - Monufact Newsroom",
    description: "Insights on product innovation, trade shows, and go-to-market strategy for manufacturers, from the Monufact newsroom.",
    url: "/news/category-product-innovation",
    siteName: "Monufact",
    images: ["/images/services/monufact-about-hero.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Innovation - Monufact Newsroom",
    description: "Insights on product innovation, trade shows, and go-to-market strategy for manufacturers, from the Monufact newsroom.",
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
            <h1>Product Innovation</h1>
            <p className="service-intro">The latest updates, press releases, and product innovation from Monufact.</p>
            <div className="news-filters">
              <a href="/news" className="news-filter">All</a>
              <a href="/news/category-product-innovation" className="news-filter is-active">Product Innovation</a>
              <a href="/news/category-press-release" className="news-filter">Press Release</a>
              <a href="/news/category-news" className="news-filter">News</a>
            </div>
          </div>
        </section>

        {/* News list */}
        <section className="section">
          <div className="container news-list">
            <article className="news-list-item">
              <a href="/news/new-print-production-services" className="news-list-media">
                <img loading="lazy" src="/images/services/pachon-business-cards.webp" alt="Business card design and printing for a Monufact client"/>
              </a>
              <div>
                <div className="news-list-tags">
                  <span className="tag">Product Innovation</span>
                </div>
                <a href="/news/new-print-production-services" className="news-list-title">
                  <h3>New In-House Print Services: Business Cards, Vehicle Wraps, and Trade Show Banners</h3>
                </a>
                <p>Business cards, vehicle wraps, and trade show display banners are now designed and printed fully in-house, from concept to finished piece.</p>
                <a href="/news/new-print-production-services" className="news-list-readmore">Read more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>
            </article>
            <article className="news-list-item">
              <a href="/news/trade-show-success" className="news-list-media">
                <img loading="lazy" src="/images/services/monufact-ecofoot-tradeshow.webp" alt="Trade Show Success for Canadian Manufacturers"/>
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
          </div>
        </section>
    </>
  );
}
