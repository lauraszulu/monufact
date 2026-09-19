export const metadata = {
  title: "New Service: Business Cards, Vehicle Wraps & Trade Show Banners - Monufact",
  description: "Monufact now designs and prints business cards, vehicle wraps, and trade show display banners fully in-house. Here's what that means for manufacturers who need branded print materials fast.",
  openGraph: {
    title: "New Service: Business Cards, Vehicle Wraps & Trade Show Banners - Monufact",
    description: "Monufact now designs and prints business cards, vehicle wraps, and trade show display banners fully in-house. Here's what that means for manufacturers who need branded print materials fast.",
    url: "/news/new-print-production-services",
    siteName: "Monufact",
    images: ["/images/services/pachon-business-cards.webp"],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Service: Business Cards, Vehicle Wraps & Trade Show Banners - Monufact",
    description: "Monufact now designs and prints business cards, vehicle wraps, and trade show display banners fully in-house. Here's what that means for manufacturers who need branded print materials fast.",
    images: ["/images/services/pachon-business-cards.webp"],
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'New In-House Print Services: Business Cards, Vehicle Wraps, and Trade Show Banners',
        description: "Monufact now designs and prints business cards, vehicle wraps, and trade show display banners fully in-house. Here's what that means for manufacturers who need branded print materials fast.",
        image: 'https://monufact.com/images/services/pachon-business-cards.webp',
        author: { '@type': 'Organization', name: 'Monufact', url: 'https://monufact.com' },
        publisher: {
          '@type': 'Organization',
          name: 'Monufact',
          logo: { '@type': 'ImageObject', url: 'https://monufact.com/images/monufact-logo.svg' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://monufact.com/news/new-print-production-services' },
      }) }} />
      {/* Article hero */}
        <section className="service-hero article-hero">
          <div className="container">
            <p className="article-meta">September 19, 2026 · Product Innovation · By Laura</p>
            <h1>New In-House Print Services: Business Cards, Vehicle Wraps, and Trade Show Banners</h1>
          </div>
        </section>

        <div className="container">
          <img loading="lazy" className="article-hero-image" src="/images/services/pachon-business-cards.webp" alt="Business card design and printing for a Monufact client"/>
        </div>

        {/* Article body */}
        <section className="section">
          <div className="container article-body">
            <p>We've expanded what we produce in-house. Business cards, vehicle wraps, and trade show display banners are now designed and printed fully in-house, from the first concept to the finished piece. If you've worked with us on a website or a catalog before, this is the same team handling the materials that get handed across a table, driven around town, and set up at your next show.</p>

            <h3>Why We Brought This In-House</h3>
            <p>We were already designing print collateral for manufacturers: spec sheets, catalogs, trade show handouts, brand guides. The gap was everything that has to be produced physically and shows up in the real world, not just as a file. Handling business cards, vehicle wraps, and banners ourselves means one team is responsible for the design and the finished product, so nothing gets lost in a handoff between a designer and a separate print vendor.</p>

            <h3>Business Cards</h3>
            <p>Standard size is 3.5" x 2", and we offer both standard and specialty stock. Standard options include 14PT gloss or matte, 16PT UV gloss, a 14PT writeable stock for cards that need room for a handwritten note, and 18PT silk laminate for a more premium feel. On the specialty side, we can produce raised metallic foil, waterproof and tear-resistant durable stock, die cut cards in rounded, oval, or leaf shapes, and a soft-touch suede finish. Pricing depends on stock, finish, and quantity, so reach out with what you're considering and we'll put together a quote.</p>

            <h3>Vehicle Wraps</h3>
            <p>We produce full and partial vehicle wraps, from a single work truck to a full fleet. Full wraps use a UV-resistant laminate that holds up to weather and daily driving, and for fleets, we keep the same wrap design consistent across every vehicle so they all read as the same company. If a full wrap isn't the right fit, we also do logo panels and door decals for lighter coverage. We design to your vehicle's exact dimensions and coordinate professional installation, not just a print file handed off at the end.</p>

            <h3>Trade Show Display Banners</h3>
            <p>This one pairs directly with the booth and event work we already do. We produce durable, weather-resistant vinyl banners for storefronts, booths, and events, retractable stand-mounted banners, and branded step-and-repeat backdrops for photo ops. Every banner is sized to the actual space it's going into rather than a standard template, so tell us your dimensions and we'll build to fit.</p>

            <h3>What This Means If You're Already Working With Us</h3>
            <p>If we've already built your brand identity or your print collateral, we can now take business cards, wraps, and banners through the same process, using the same files and brand standards, without bringing in a separate print shop. If you haven't worked with us yet, this is a good entry point: a business card reorder or a banner for an upcoming show is a small, low-risk way to see how we handle production.</p>

            <p>For the full breakdown of stock options, finishes, and what we produce in each category, see our <a href="/services/print-marketing-sales-collateral">Print Marketing &amp; Sales Collateral</a> page. If you're specifically prepping for an event, our <a href="/services/trade-show-event-materials">Trade Show &amp; Event Materials</a> page covers the rest of what goes into a booth.</p>

            <p className="article-tags">Tags: <a href="/news/category-product-innovation">Product Innovation</a></p>
          </div>
        </section>

        {/* Related news */}
        <section className="section related-news">
          <div className="container">
            <h2>Related News</h2>
            <div className="grid-3 news-grid divided">
              <article className="news-card">
                <div className="news-card-media">
                  <a href="/news/trade-show-success">
                    <img loading="lazy" src="/images/services/monufact-ecofoot-tradeshow.webp" alt="Trade Show Success for Canadian Manufacturers"/>
                  </a>
                  <a href="/news/trade-show-success" className="news-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </a>
                </div>
                <a href="/news/category-product-innovation" className="tag">Product Innovation</a>
                <a href="/news/trade-show-success"><h4>Trade Show Success for Canadian Manufacturers</h4></a>
              </article>
              <article className="news-card">
                <div className="news-card-media">
                  <a href="/news/trade-show-lead-generation-tips">
                    <img loading="lazy" src="/images/services/monufact-tradeshow-displays.webp" alt="Trade show booth conversation"/>
                  </a>
                  <a href="/news/trade-show-lead-generation-tips" className="news-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </a>
                </div>
                <a href="/news/category-news" className="tag">News</a>
                <a href="/news/trade-show-lead-generation-tips"><h4>What Actually Gets You Leads at Trade Shows</h4></a>
              </article>
            </div>
          </div>
        </section>
    </>
  );
}
