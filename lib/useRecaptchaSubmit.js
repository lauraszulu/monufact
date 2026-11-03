'use client';

import { useEffect, useRef } from 'react';
import { RECAPTCHA_SITE_KEY } from '@/lib/recaptchaSiteKey';

// reCAPTCHA v3 has no checkbox to wait on — a token has to come from
// grecaptcha.execute(). Rather than intercept the form's submit event to
// fetch one on demand (which fought with React 19's native action={...}
// handling), this fetches a token as soon as the page loads and keeps it
// fresh with a periodic refresh — tokens are valid for 2 minutes, so
// refreshing well inside that window means a valid one is already sitting
// in the hidden field by the time anyone actually submits.
const REFRESH_MS = 100 * 1000;

export function useRecaptchaSubmit() {
  const tokenInputRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    function fetchToken() {
      // Enterprise keys load under grecaptcha.enterprise, not grecaptcha
      // directly — calling the classic namespace on an Enterprise key is
      // what caused every execute() call to fail silently before.
      if (typeof window === 'undefined' || !window.grecaptcha || !window.grecaptcha.enterprise) return;
      window.grecaptcha.enterprise.ready(() => {
        window.grecaptcha.enterprise.execute(RECAPTCHA_SITE_KEY, { action: 'submit' }).then((token) => {
          if (!cancelled && tokenInputRef.current) tokenInputRef.current.value = token;
        });
      });
    }

    // A short delay before the first call avoids a startup race: even
    // after grecaptcha.enterprise exists on window, calling execute()
    // immediately (e.g. from a useEffect that fires right on mount) can
    // hit Enterprise's own internal init before it's actually settled —
    // manual calls a moment later always succeed, so this just waits
    // out that window once, up front.
    // The reCAPTCHA script is loaded here, only on pages that have a form,
    // instead of sitewide. The first token is fetched once it has loaded.
    let initialTimeout;
    const scriptId = 'recaptcha-enterprise-script';
    const onLoaded = () => {
      initialTimeout = setTimeout(fetchToken, 1000);
    };
    if (window.grecaptcha && window.grecaptcha.enterprise) {
      onLoaded();
    } else {
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://www.google.com/recaptcha/enterprise.js?render=' + RECAPTCHA_SITE_KEY;
        script.async = true;
        document.head.appendChild(script);
      }
      script.addEventListener('load', onLoaded, { once: true });
    }
    const intervalId = setInterval(fetchToken, REFRESH_MS);
    return () => {
      cancelled = true;
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, []);

  return { tokenInputRef };
}
