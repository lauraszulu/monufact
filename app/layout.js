import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Monufact - Digital Solutions for the Steel Industry',
  description:
    'Monufact is a digital marketing agency based in London, Ontario, helping steel manufacturers and industrial companies modernize how they market, sell, and communicate.',
  icons: {
    icon: '/images/monufact-favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N6TH7X6K');`}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-K063VKZPNC" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K063VKZPNC');`}
        </Script>

        {/* Google reCAPTCHA v3 — invisible, score-based. Loaded with
            render=<site key> so grecaptcha.execute() is available to the
            3 site forms (Contact, Become a Customer, Refer a Client). */}
        <Script
          src="https://www.google.com/recaptcha/api.js?render=6Le6bpUtAAAAAA82pA0bTFhQerL3qJGivcREa1_8"
          strategy="afterInteractive"
        />

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "v4z0qyybwo");`}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6TH7X6K"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Header />
        {children}
        <Footer />

        {/* Site-wide, non-form interactivity (mobile nav, accordions, scroll
            effects, Edit Mode, etc.) — see public/js/main.js. Plain <script>,
            not next/script, so it runs at the same point in the document as
            it always has, right before </body>. */}
        <script src="/js/main.js" />
      </body>
    </html>
  );
}
