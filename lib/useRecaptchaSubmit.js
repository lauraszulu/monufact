'use client';

import { useRef } from 'react';
import { RECAPTCHA_SITE_KEY } from '@/lib/recaptchaSiteKey';

// reCAPTCHA v3 has no checkbox to wait on — a token has to be fetched via
// grecaptcha.execute() right before submitting. Since these forms submit
// through a Server Action (form action={...}, not a plain onSubmit), this
// intercepts the first submit to fetch the token and re-submit, then lets
// the second submit (now carrying the token) go through untouched.
export function useRecaptchaSubmit(formRef) {
  const tokenInputRef = useRef(null);
  const readyToSubmit = useRef(false);

  function handleSubmit(e) {
    if (readyToSubmit.current) {
      readyToSubmit.current = false;
      return;
    }
    e.preventDefault();
    if (typeof window === 'undefined' || !window.grecaptcha) {
      // reCAPTCHA script hasn't loaded — let the submission through rather
      // than trap the visitor with no way to submit.
      readyToSubmit.current = true;
      formRef.current?.requestSubmit();
      return;
    }
    window.grecaptcha.ready(() => {
      window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' }).then((token) => {
        if (tokenInputRef.current) tokenInputRef.current.value = token;
        readyToSubmit.current = true;
        formRef.current?.requestSubmit();
      });
    });
  }

  return { tokenInputRef, handleSubmit };
}
