export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="/" className="logo"><img src="/images/monufact-logo-white.svg" alt="Monufact" className="logo-img" /></a>
          <p>London, Ontario, Canada</p>
          <p><a href="mailto:info@monufact.com">info@monufact.com</a></p>
          <p>+1 226 977 2064</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/monufact.marketing/" aria-label="Instagram" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.265.058-1.644.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072c-4.358.2-6.78 2.618-6.98 6.98C.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li><a href="/services/brand-strategy-positioning">Brand Strategy &amp; Positioning</a></li>
            <li><a href="/services/performance-marketing">Performance Marketing</a></li>
            <li><a href="/services/digital-sales-assets">Digital Sales Assets</a></li>
            <li><a href="/services/print-marketing-sales-collateral">Print Marketing &amp; Sales Collateral</a></li>
            <li><a href="/services/trade-show-event-materials">Trade Show &amp; Event Materials</a></li>
            <li><a href="/services/content-technical-communication">Content &amp; Technical Communication</a></li>
            <li><a href="/services/digital-marketing">Digital Marketing</a></li>
            <li><a href="/services/website-design-development">Website Design &amp; Development</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="/company/about">About</a></li>
            <li><a href="/company/contact">Contact</a></li>
            <li><a href="/company/become-a-customer">Become a Customer</a></li>
            <li><a href="/company/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Media</h5>
          <ul>
            <li><a href="/news">News</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>© 2026 Monufact. All rights reserved.</p>
        <div className="footer-badge">
          <svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50,60 Q65,43 50,26 Q35,43 50,60 Z M50,60 Q45.7,39.9 25.4,42.8 Q29.7,62.9 50,60 Z M50,60 Q70.3,62.9 74.6,42.8 Q54.3,39.9 50,60 Z M47,61 L50,90 L53,61 Z" /></svg>
          <span>Canadian Business, Building Canadians.</span>
        </div>
        <div className="footer-legal">
          <a href="/company/terms-conditions">Terms &amp; Conditions</a>
          <a href="/company/privacy-policy">Privacy Policy</a>
          <a href="/company/cookie-policy">Cookie Policy</a>
          <a href="/company/accessibility">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
