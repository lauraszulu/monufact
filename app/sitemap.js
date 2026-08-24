const BASE_URL = 'https://monufact.com';

// Static list matching the site's actual routes. Kept as a plain array
// rather than walking the filesystem at build time — simpler, and this
// site's routes don't change often enough to justify the extra
// complexity of auto-discovery.
const ROUTES = [
  '',
  '/company/about',
  '/company/accessibility',
  '/company/become-a-customer',
  '/company/contact',
  '/company/cookie-policy',
  '/company/faq',
  '/company/investors',
  '/company/people',
  '/company/privacy-policy',
  '/company/refer-a-client',
  '/company/terms-conditions',
  '/industries/appliances',
  '/industries/architecture-firms',
  '/industries/automotive',
  '/industries/construction',
  '/industries/electrical',
  '/industries/energy',
  '/industries/industrial',
  '/industries/mining',
  '/industries/packaging',
  '/industries/parts',
  '/industries/sustainable-steel',
  '/news',
  '/news/category-news',
  '/news/category-press-release',
  '/news/category-product-innovation',
  '/news/on-grid-solar-energy',
  '/news/sustainability-marketing-advantage',
  '/news/trade-show-success',
  '/services/brand-strategy-positioning',
  '/services/content-technical-communication',
  '/services/digital-marketing',
  '/services/digital-sales-assets',
  '/services/performance-marketing',
  '/services/print-marketing-sales-collateral',
  '/services/trade-show-event-materials',
  '/services/website-design-development',
];

export default function sitemap() {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.split('/').length > 2 ? 0.6 : 0.8,
  }));
}
