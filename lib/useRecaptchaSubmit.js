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
      if (typeof window === 'undefined' || !window.grecaptcha) return;
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' }).then((token) => {
          if (!cancelled && tokenInputRef.current) tokenInputRef.current.value = token;
        });
      });
    }

    fetchToken();
    const intervalId = setInterval(fetchToken, REFRESH_MS);
    return () => {
      cancelled = true;
      clearInterval(intervalId);
    };
  }, []);

  return { tokenInputRef };
}
