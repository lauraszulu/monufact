/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Legacy GitHub Pages URLs (this site was a static multi-page site
      // before the Next.js migration) -> new clean Next.js routes. Keeps
      // old bookmarks/search results working instead of 404ing.
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/news.html', destination: '/news', permanent: true },
      { source: '/company/about.html', destination: '/company/about', permanent: true },
      { source: '/company/accessibility.html', destination: '/company/accessibility', permanent: true },
      { source: '/company/become-a-customer.html', destination: '/company/become-a-customer', permanent: true },
      { source: '/company/contact.html', destination: '/company/contact', permanent: true },
      { source: '/company/faq.html', destination: '/company/faq', permanent: true },
      { source: '/company/investors.html', destination: '/company/investors', permanent: true },
      { source: '/company/people.html', destination: '/company/people', permanent: true },
      { source: '/company/privacy-policy.html', destination: '/company/privacy-policy', permanent: true },
      { source: '/company/refer-a-client.html', destination: '/company/refer-a-client', permanent: true },
      { source: '/company/terms-conditions.html', destination: '/company/terms-conditions', permanent: true },
      { source: '/services/brand-strategy-positioning.html', destination: '/services/brand-strategy-positioning', permanent: true },
      { source: '/services/content-technical-communication.html', destination: '/services/content-technical-communication', permanent: true },
      { source: '/services/digital-marketing.html', destination: '/services/digital-marketing', permanent: true },
      { source: '/services/digital-sales-assets.html', destination: '/services/digital-sales-assets', permanent: true },
      { source: '/services/performance-marketing.html', destination: '/services/performance-marketing', permanent: true },
      { source: '/services/print-marketing-sales-collateral.html', destination: '/services/print-marketing-sales-collateral', permanent: true },
      { source: '/services/trade-show-event-materials.html', destination: '/services/trade-show-event-materials', permanent: true },
      { source: '/services/website-design-development.html', destination: '/services/website-design-development', permanent: true },
      { source: '/industries/appliances.html', destination: '/industries/appliances', permanent: true },
      { source: '/industries/architecture-firms.html', destination: '/industries/architecture-firms', permanent: true },
      { source: '/industries/automotive.html', destination: '/industries/automotive', permanent: true },
      { source: '/industries/construction.html', destination: '/industries/construction', permanent: true },
      { source: '/industries/electrical.html', destination: '/industries/electrical', permanent: true },
      { source: '/industries/energy.html', destination: '/industries/energy', permanent: true },
      { source: '/industries/industrial.html', destination: '/industries/industrial', permanent: true },
      { source: '/industries/mining.html', destination: '/industries/mining', permanent: true },
      { source: '/industries/packaging.html', destination: '/industries/packaging', permanent: true },
      { source: '/industries/parts.html', destination: '/industries/parts', permanent: true },
      { source: '/industries/sustainable-steel.html', destination: '/industries/sustainable-steel', permanent: true },
      { source: '/news/category-news.html', destination: '/news/category-news', permanent: true },
      { source: '/news/category-press-release.html', destination: '/news/category-press-release', permanent: true },
      { source: '/news/category-product-innovation.html', destination: '/news/category-product-innovation', permanent: true },
      { source: '/news/on-grid-solar-energy.html', destination: '/news/on-grid-solar-energy', permanent: true },
      { source: '/news/sustainability-marketing-advantage.html', destination: '/news/sustainability-marketing-advantage', permanent: true },
      { source: '/news/trade-show-success.html', destination: '/news/trade-show-success', permanent: true },
    ];
  },
};

module.exports = nextConfig;
