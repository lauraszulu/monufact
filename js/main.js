// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-open');
    if (!mainNav.classList.contains('is-open')) {
      mainNav.querySelectorAll('.nav-item.is-open').forEach((item) => item.classList.remove('is-open'));
    }
  });
}

// Mobile nav dropdowns (Company / Industries / Services collapse into an accordion)
const mobileNavQuery = window.matchMedia('(max-width: 900px)');
document.querySelectorAll('.nav-item').forEach((item) => {
  const trigger = item.querySelector(':scope > a');
  if (!trigger) return;
  trigger.addEventListener('click', (e) => {
    if (!mobileNavQuery.matches) return;
    e.preventDefault();
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.nav-item').forEach((el) => el.classList.remove('is-open'));
    if (!isOpen) item.classList.add('is-open');
  });
});

// Cookie banner
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieReject = document.getElementById('cookieReject');
const cookieCustomize = document.getElementById('cookieCustomize');

function hideCookieBanner() {
  if (cookieBanner) cookieBanner.classList.add('is-hidden');
}

if (localStorage.getItem('monufact_cookie_choice')) {
  hideCookieBanner();
}

[cookieAccept, cookieReject, cookieCustomize].forEach((btn) => {
  if (!btn) return;
  btn.addEventListener('click', () => {
    localStorage.setItem('monufact_cookie_choice', 'set');
    hideCookieBanner();
  });
});

// Accordion
document.querySelectorAll('.accordion-item').forEach((item) => {
  const trigger = item.querySelector('.accordion-trigger');
  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    item.parentElement.querySelectorAll('.accordion-item').forEach((el) => el.classList.remove('is-open'));
    if (!isOpen) item.classList.add('is-open');
  });
});

// 404 search (placeholder submission)
const errorSearchForm = document.getElementById('errorSearchForm');
if (errorSearchForm) {
  errorSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'index.html';
  });
}

// Newsletter form (placeholder submission)
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input[type="email"]');
    input.value = '';
    input.placeholder = 'Thanks for subscribing!';
  });
}

// Contact form (placeholder submission)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.reset();
    document.getElementById('contactFormNote').textContent = "Thanks, we'll be in touch shortly.";
  });
}

// Get started form (placeholder submission)
const startForm = document.getElementById('startForm');
if (startForm) {
  startForm.addEventListener('submit', (e) => {
    e.preventDefault();
    startForm.reset();
    document.getElementById('startFormNote').textContent = "Thanks, we'll review your project details and be in touch shortly.";
  });
}

// Referral form (placeholder submission)
const referralForm = document.getElementById('referralForm');
if (referralForm) {
  referralForm.addEventListener('submit', (e) => {
    e.preventDefault();
    referralForm.reset();
    document.getElementById('referralFormNote').textContent = "Thanks for the referral, we'll reach out to them shortly and keep you posted.";
  });
}

// Rotate images tied to scroll position within their own section (rotates as user scrolls up/down)
document.querySelectorAll('.rotate-img').forEach((rotateImg) => {
  const rotateSection = rotateImg.closest('section');
  if (!rotateSection) return;
  let rotateTicking = false;

  function updateRotate() {
    const rect = rotateSection.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
    const clamped = Math.max(-1, Math.min(1, progress));
    rotateImg.style.transform = `rotate(${clamped * -22}deg)`;
    rotateTicking = false;
  }

  function onRotateScroll() {
    if (!rotateTicking) {
      window.requestAnimationFrame(updateRotate);
      rotateTicking = true;
    }
  }

  window.addEventListener('scroll', onRotateScroll, { passive: true });
  updateRotate();
});

// Industry sector images glide past each other in opposite directions on scroll
document.querySelectorAll('.industry-sector').forEach((sector) => {
  const img1 = sector.querySelector('.industry-sector-col-1 img');
  const img2 = sector.querySelector('.industry-sector-col-2 img');
  if (!img1 || !img2) return;
  let glideTicking = false;

  function updateGlide() {
    const rect = sector.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
    const clamped = Math.max(-1, Math.min(1, progress));
    const offset = clamped * 70;
    img1.style.transform = `translateY(${offset}px)`;
    img2.style.transform = `translateY(${-offset}px)`;
    glideTicking = false;
  }

  function onGlideScroll() {
    if (!glideTicking) {
      window.requestAnimationFrame(updateGlide);
      glideTicking = true;
    }
  }

  window.addEventListener('scroll', onGlideScroll, { passive: true });
  updateGlide();
});

// Hero image banner parallax (service pages)
document.querySelectorAll('.parallax-img').forEach((img) => {
  const banner = img.closest('.image-banner');
  if (!banner) return;
  let parallaxTicking = false;

  function updateParallax() {
    const rect = banner.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
    const clamped = Math.max(-1, Math.min(1, progress));
    img.style.transform = `translateY(${clamped * 40}px)`;
    parallaxTicking = false;
  }

  function onParallaxScroll() {
    if (!parallaxTicking) {
      window.requestAnimationFrame(updateParallax);
      parallaxTicking = true;
    }
  }

  window.addEventListener('scroll', onParallaxScroll, { passive: true });
  updateParallax();
});

// Stat counter animation (runs once on page load)
document.querySelectorAll('.stat-number').forEach((el) => {
  const match = el.textContent.trim().match(/^(\d+)(.*)$/);
  if (!match) return;
  const target = parseInt(match[1], 10);
  const suffix = match[2];
  const duration = 1200;
  const startTime = performance.now();

  function tickStat(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (progress < 1) {
      requestAnimationFrame(tickStat);
    }
  }
  requestAnimationFrame(tickStat);
});

// Scroll-reveal for section titles
const revealTargets = document.querySelectorAll('h2');
if (revealTargets.length && 'IntersectionObserver' in window) {
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealTargets.forEach((el) => revealObserver.observe(el));
}

// Newsroom carousel dots (mobile) — track which card is in view
document.querySelectorAll('.news-grid').forEach((grid) => {
  const cards = Array.from(grid.querySelectorAll('.news-card'));
  if (!cards.length) return;

  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'news-dots';
  const dots = cards.map((card, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'news-dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', 'Go to story ' + (i + 1));
    dot.addEventListener('click', () => {
      card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    });
    dotsWrap.appendChild(dot);
    return dot;
  });
  grid.insertAdjacentElement('afterend', dotsWrap);

  if ('IntersectionObserver' in window) {
    const dotsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = cards.indexOf(entry.target);
          dots.forEach((d) => d.classList.remove('is-active'));
          dots[idx].classList.add('is-active');
        }
      });
    }, { root: grid, threshold: 0.6 });

    cards.forEach((card) => dotsObserver.observe(card));
  }
});

// Approach tabs (service pages) — button list on desktop, dropdown on mobile
document.querySelectorAll('.approach').forEach((section) => {
  const tabsContainer = section.querySelector('.approach-tabs');
  const tabs = section.querySelectorAll('.approach-tab');
  const panels = section.querySelectorAll('.approach-panel');
  if (!tabsContainer || !tabs.length) return;

  const select = document.createElement('select');
  select.className = 'approach-tab-select';
  select.setAttribute('aria-label', 'Select a topic');
  tabs.forEach((tab, i) => {
    const option = document.createElement('option');
    option.value = String(i);
    option.textContent = tab.textContent.trim();
    if (tab.classList.contains('is-active')) option.selected = true;
    select.appendChild(option);
  });
  tabsContainer.insertAdjacentElement('afterend', select);

  function activate(index) {
    tabs.forEach((t) => t.classList.remove('is-active'));
    panels.forEach((p) => p.classList.remove('is-active'));
    tabs[index].classList.add('is-active');
    panels[index].classList.add('is-active');
    select.selectedIndex = index;
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activate(i));
  });

  select.addEventListener('change', () => activate(Number(select.value)));
});

// Inline editor — click-to-edit text, click-to-replace images, saved per page in the browser
(function () {
  const STORAGE_KEY = 'monufact_edits_' + location.pathname;
  const TEXT_SELECTOR = 'h1, h2, h3, h4, h5, p, li, blockquote, span.eyebrow, figcaption';
  const EXCLUDE_ANCESTORS = 'nav, .btn, button, .accordion-trigger, .approach-tab, .mega-menu-links, .header-actions, .social-icons, .site-footer';

  function loadEdits() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      return { text: {}, img: {}, bg: {}, hiddenGallery: {}, addedGallery: {}, ...parsed };
    } catch (e) {
      return { text: {}, img: {}, bg: {}, hiddenGallery: {}, addedGallery: {} };
    }
  }

  // Returns true on success, false if the browser's storage is full. Every
  // save goes through here so a full quota fails loud (an alert) instead of
  // silently — otherwise uploads and text edits look like they worked, then
  // quietly revert on the next page load.
  function saveEdits(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (err) {
      alert("This change couldn't be saved because your browser's storage is full. Remove an uploaded image, GIF, or video (on this page or others) to free up space, then try again.");
      return false;
    }
  }

  const edits = loadEdits();
  let editMode = false;

  // Edits are keyed by which section an element lives in (plus its order
  // within that section), not by raw position in the document. That way
  // dragging a whole section (e.g. client logos) to a new spot on the page
  // doesn't shift every ID after it and misapply old saved edits to the
  // wrong elements.
  const SECTION_SELECTOR = 'section, header, footer, .cookie-banner, .hero-video-modal';
  const sectionKeyMap = new WeakMap();
  const sectionKeyCounts = {};
  function sectionKeyFor(el) {
    const ancestor = el.closest(SECTION_SELECTOR);
    if (!ancestor) return 'root:0';
    if (sectionKeyMap.has(ancestor)) return sectionKeyMap.get(ancestor);
    let base = ancestor.id;
    if (!base) {
      const toks = (ancestor.className || '').trim().split(/\s+/).filter((c) => c && c !== 'section');
      base = toks[0] || ancestor.tagName.toLowerCase();
    }
    const n = sectionKeyCounts[base] || 0;
    sectionKeyCounts[base] = n + 1;
    const key = base + ':' + n;
    sectionKeyMap.set(ancestor, key);
    return key;
  }

  const textEls = Array.from(document.querySelectorAll(TEXT_SELECTOR)).filter(
    (el) => !el.closest(EXCLUDE_ANCESTORS)
  );
  const textLocalCounts = {};
  textEls.forEach((el) => {
    const sKey = sectionKeyFor(el);
    const li = textLocalCounts[sKey] || 0;
    textLocalCounts[sKey] = li + 1;
    const id = 't:' + sKey + ':' + li;
    el.setAttribute('data-editable-text', id);
    if (edits.text[id] !== undefined) {
      el.innerHTML = edits.text[id];
    }
  });

  // Re-create any gallery images added in a previous session, before the
  // img/gallery-item scans below so they're picked up like any other image.
  const galleryGridEls = Array.from(document.querySelectorAll('.gallery-grid'));
  galleryGridEls.forEach((grid, gi) => {
    const gridId = 'gr' + gi;
    grid.setAttribute('data-gallery-grid', gridId);
    (edits.addedGallery[gridId] || []).forEach((dataUrl) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      const img = document.createElement('img');
      img.src = dataUrl;
      img.alt = 'Gallery image';
      item.appendChild(img);
      grid.appendChild(item);
    });
  });

  const imgEls = Array.from(document.querySelectorAll('img'));
  const imgLocalCounts = {};
  imgEls.forEach((el) => {
    const sKey = sectionKeyFor(el);
    const li = imgLocalCounts[sKey] || 0;
    imgLocalCounts[sKey] = li + 1;
    const id = 'i:' + sKey + ':' + li;
    el.setAttribute('data-editable-img', id);
    if (edits.img[id]) {
      el.src = edits.img[id];
    }
  });

  const bgEls = Array.from(document.querySelectorAll('[style*="background-image"]'));
  const bgLocalCounts = {};
  bgEls.forEach((el) => {
    const sKey = sectionKeyFor(el);
    const li = bgLocalCounts[sKey] || 0;
    bgLocalCounts[sKey] = li + 1;
    const id = 'b:' + sKey + ':' + li;
    el.setAttribute('data-editable-bg', id);
    if (edits.bg[id]) {
      el.style.backgroundImage = "url('" + edits.bg[id] + "')";
    }
  });

  const galleryMobileQuery = window.matchMedia('(max-width: 900px)');
  function updateGalleryLayout(grid) {
    const visibleCount = grid.querySelectorAll('.gallery-item:not(.is-removed)').length;
    const maxCols = galleryMobileQuery.matches ? 2 : 3;
    const cols = Math.max(1, Math.min(maxCols, visibleCount));
    grid.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';
  }
  galleryMobileQuery.addEventListener('change', () => {
    document.querySelectorAll('.gallery-grid').forEach(updateGalleryLayout);
  });

  function attachGalleryRemove(el, id) {
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'gallery-item-remove';
    removeBtn.setAttribute('aria-label', 'Remove image');
    removeBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    removeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      el.classList.add('is-removed');
      const current = loadEdits();
      current.hiddenGallery[id] = true;
      saveEdits(current);
      const grid = el.closest('.gallery-grid');
      if (grid) updateGalleryLayout(grid);
    });
    el.appendChild(removeBtn);
  }

  const galleryItemEls = Array.from(document.querySelectorAll('.gallery-item'));
  galleryItemEls.forEach((el, i) => {
    const id = 'g' + i;
    el.setAttribute('data-gallery-item', id);
    if (edits.hiddenGallery[id]) {
      el.classList.add('is-removed');
    }
    attachGalleryRemove(el, id);
  });

  galleryGridEls.forEach((grid) => {
    const addTile = document.createElement('button');
    addTile.type = 'button';
    addTile.className = 'gallery-item-add';
    addTile.setAttribute('data-gallery-add', grid.getAttribute('data-gallery-grid'));
    addTile.setAttribute('aria-label', 'Add image');
    addTile.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg><span>Add Image</span>';
    grid.appendChild(addTile);
  });

  document.querySelectorAll('.gallery-grid').forEach(updateGalleryLayout);

  const toggle = document.createElement('div');
  toggle.className = 'editor-toggle';
  toggle.innerHTML =
    '<button class="editor-switch" type="button">' +
      '<span class="editor-dot"></span><span class="editor-label">Edit Mode</span>' +
    '</button>' +
    '<button class="editor-reset" type="button">Reset page</button>';
  document.body.appendChild(toggle);

  const switchBtn = toggle.querySelector('.editor-switch');
  const resetBtn = toggle.querySelector('.editor-reset');
  const label = toggle.querySelector('.editor-label');

  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'image/*';
  fileInput.style.display = 'none';
  document.body.appendChild(fileInput);
  let pendingTarget = null;

  function setEditMode(on) {
    editMode = on;
    document.body.classList.toggle('editor-active', on);
    toggle.classList.toggle('is-active', on);
    label.textContent = on ? 'Editing…' : 'Edit Mode';
    textEls.forEach((el) => el.setAttribute('contenteditable', on ? 'true' : 'false'));
  }

  // Edit Mode is password-gated so random visitors can't casually poke at
  // it. This is a client-side deterrent, not real security (the password
  // lives in this file, viewable in page source) — appropriate here since
  // Edit Mode changes only ever save to the editing browser's own storage,
  // never to the live site other visitors see.
  const EDITOR_PASSWORD = 'monufact2026';
  const EDITOR_AUTH_KEY = 'monufact_editor_authorized';

  switchBtn.addEventListener('click', () => {
    if (editMode) {
      setEditMode(false);
      return;
    }
    if (localStorage.getItem(EDITOR_AUTH_KEY) === 'true') {
      setEditMode(true);
      return;
    }
    const entered = window.prompt('Enter the password to edit this site:');
    if (entered === null) return;
    if (entered === EDITOR_PASSWORD) {
      localStorage.setItem(EDITOR_AUTH_KEY, 'true');
      setEditMode(true);
    } else {
      alert('Incorrect password.');
    }
  });

  resetBtn.addEventListener('click', () => {
    if (confirm('Reset all edits on this page?')) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  });

  textEls.forEach((el) => {
    el.addEventListener('blur', () => {
      if (!editMode) return;
      const id = el.getAttribute('data-editable-text');
      const current = loadEdits();
      current.text[id] = el.innerHTML;
      saveEdits(current);
    });
  });

  document.addEventListener('click', (e) => {
    if (!editMode) return;
    const imgTarget = e.target.closest('[data-editable-img]');
    const bgTarget = e.target.closest('[data-editable-bg]');
    const addTarget = e.target.closest('[data-gallery-add]');
    if (imgTarget) {
      e.preventDefault();
      e.stopPropagation();
      pendingTarget = { type: 'img', el: imgTarget };
      fileInput.click();
      return;
    }
    if (bgTarget) {
      e.preventDefault();
      e.stopPropagation();
      pendingTarget = { type: 'bg', el: bgTarget };
      fileInput.click();
      return;
    }
    if (addTarget) {
      e.preventDefault();
      e.stopPropagation();
      pendingTarget = { type: 'gallery-add', gridId: addTarget.getAttribute('data-gallery-add') };
      fileInput.click();
    }
  }, true);

  document.addEventListener('click', (e) => {
    if (!editMode) return;
    const blocked = e.target.closest('a, button[type="submit"]');
    if (blocked && !blocked.closest('.editor-toggle')) {
      e.preventDefault();
    }
  }, true);

  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file || !pendingTarget) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      const current = loadEdits();
      let newGalleryItem = null;
      let newGalleryGrid = null;
      let prevSrc = null;
      let prevBg = null;

      if (pendingTarget.type === 'img') {
        const id = pendingTarget.el.getAttribute('data-editable-img');
        prevSrc = pendingTarget.el.src;
        pendingTarget.el.src = dataUrl;
        current.img[id] = dataUrl;
      } else if (pendingTarget.type === 'bg') {
        const id = pendingTarget.el.getAttribute('data-editable-bg');
        prevBg = pendingTarget.el.style.backgroundImage;
        pendingTarget.el.style.backgroundImage = "url('" + dataUrl + "')";
        current.bg[id] = dataUrl;
      } else if (pendingTarget.type === 'gallery-add') {
        const gridId = pendingTarget.gridId;
        const grid = document.querySelector('[data-gallery-grid="' + gridId + '"]');
        if (grid) {
          const item = document.createElement('div');
          item.className = 'gallery-item';
          const newId = 'g' + document.querySelectorAll('.gallery-item').length;
          item.setAttribute('data-gallery-item', newId);
          const img = document.createElement('img');
          img.src = dataUrl;
          img.alt = 'Gallery image';
          item.appendChild(img);
          attachGalleryRemove(item, newId);
          const addTile = grid.querySelector('.gallery-item-add');
          if (addTile) {
            grid.insertBefore(item, addTile);
          } else {
            grid.appendChild(item);
          }
          if (!current.addedGallery[gridId]) current.addedGallery[gridId] = [];
          current.addedGallery[gridId].push(dataUrl);
          updateGalleryLayout(grid);
          newGalleryItem = item;
          newGalleryGrid = grid;
        }
      }

      const saved = saveEdits(current);
      if (!saved) {
        // Roll back the visual change so it doesn't look like it worked
        // when it didn't actually persist.
        if (pendingTarget.type === 'img' && prevSrc !== null) {
          pendingTarget.el.src = prevSrc;
        } else if (pendingTarget.type === 'bg') {
          pendingTarget.el.style.backgroundImage = prevBg;
        } else if (newGalleryItem) {
          newGalleryItem.remove();
          updateGalleryLayout(newGalleryGrid);
        }
      }
      pendingTarget = null;
    };
    reader.readAsDataURL(file);
    fileInput.value = '';
  });
})();

// Gallery lightbox — click to expand images in gallery sections
// Reads the current gallery images at click time (not a frozen snapshot) so
// images added or removed later via Edit Mode are picked up automatically.
if (document.querySelector('.gallery-item img')) {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Close">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
    '</button>' +
    '<button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous image">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>' +
    '</button>' +
    '<button class="lightbox-nav lightbox-next" type="button" aria-label="Next image">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>' +
    '</button>' +
    '<img src="" alt="">';
  document.body.appendChild(overlay);

  const lightboxImg = overlay.querySelector('img');
  const lightboxClose = overlay.querySelector('.lightbox-close');
  const lightboxPrev = overlay.querySelector('.lightbox-prev');
  const lightboxNext = overlay.querySelector('.lightbox-next');
  let currentImages = [];
  let currentIndex = 0;

  function getGalleryImgs() {
    return Array.from(document.querySelectorAll('.gallery-item:not(.is-removed) img'));
  }

  function showImage(index) {
    if (!currentImages.length) return;
    currentIndex = (index + currentImages.length) % currentImages.length;
    const img = currentImages[currentIndex];
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
  }

  function openLightbox(clickedImg) {
    currentImages = getGalleryImgs();
    const index = currentImages.indexOf(clickedImg);
    showImage(index >= 0 ? index : 0);
    overlay.classList.add('is-active');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    overlay.classList.remove('is-active');
    document.body.classList.remove('lightbox-open');
  }

  document.addEventListener('click', (e) => {
    const img = e.target.closest('.gallery-item img');
    if (img) openLightbox(img);
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => showImage(currentIndex - 1));
  lightboxNext.addEventListener('click', () => showImage(currentIndex + 1));
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('is-active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}

// Hero YouTube video (homepage) — hidden until a link is added in Edit Mode
(function () {
  const heroMedia = document.getElementById('heroMedia');
  const heroVideoFrame = document.getElementById('heroVideoFrame');
  const heroVideoBtn = document.getElementById('heroVideoBtn');
  const modal = document.getElementById('heroVideoModal');
  const modalBackdrop = document.getElementById('heroVideoModalBackdrop');
  const modalInput = document.getElementById('heroVideoInput');
  const modalError = document.getElementById('heroVideoModalError');
  const modalSave = document.getElementById('heroVideoModalSave');
  const modalCancel = document.getElementById('heroVideoModalCancel');
  const heroUploadBtn = document.getElementById('heroUploadBtn');
  const heroUploadInput = document.getElementById('heroUploadInput');
  const heroUpload = document.getElementById('heroUpload');
  const heroUploadVideo = document.getElementById('heroUploadVideo');
  const heroUploadGif = document.getElementById('heroUploadGif');
  if (!heroMedia || !heroVideoFrame || !heroVideoBtn || !modal) return;

  const STORAGE_KEY = 'monufact_hero_video';
  const UPLOAD_KEY = 'monufact_hero_upload';
  const MAX_UPLOAD_MB = 8;

  function getYouTubeId(input) {
    const url = (input || '').trim();
    const patterns = [
      /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/,
      /youtu\.be\/([\w-]{11})/,
      /^([\w-]{11})$/
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  }

  function showVideo(id) {
    hideUpload();
    heroVideoFrame.src = 'https://www.youtube-nocookie.com/embed/' + id;
    heroMedia.classList.add('has-video');
    heroVideoBtn.textContent = 'Remove Video';
  }

  function hideVideo() {
    heroVideoFrame.src = '';
    heroMedia.classList.remove('has-video');
    heroVideoBtn.textContent = 'Add YouTube Video';
  }

  function showUpload(dataUrl, isVideo) {
    hideVideo();
    localStorage.removeItem(STORAGE_KEY);
    heroMedia.classList.add('has-upload');
    if (heroUpload) heroUpload.classList.toggle('show-video', isVideo);
    if (heroUpload) heroUpload.classList.toggle('show-gif', !isVideo);
    if (isVideo) {
      if (heroUploadVideo) heroUploadVideo.src = dataUrl;
      if (heroUploadGif) heroUploadGif.src = '';
    } else {
      if (heroUploadGif) heroUploadGif.src = dataUrl;
      if (heroUploadVideo) heroUploadVideo.src = '';
    }
    if (heroUploadBtn) heroUploadBtn.textContent = 'Remove Upload';
  }

  function hideUpload() {
    heroMedia.classList.remove('has-upload');
    if (heroUpload) heroUpload.classList.remove('show-video', 'show-gif');
    if (heroUploadVideo) heroUploadVideo.src = '';
    if (heroUploadGif) heroUploadGif.src = '';
    if (heroUploadBtn) heroUploadBtn.textContent = 'Upload GIF/Video';
  }

  function openModal() {
    modalInput.value = '';
    modalError.hidden = true;
    modal.hidden = false;
    modalInput.focus();
  }

  function closeModal() {
    modal.hidden = true;
  }

  function attemptSave() {
    const id = getYouTubeId(modalInput.value);
    if (!id) {
      modalError.hidden = false;
      return;
    }
    localStorage.setItem(STORAGE_KEY, id);
    showVideo(id);
    closeModal();
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) showVideo(saved);

  let savedUpload = null;
  try { savedUpload = JSON.parse(localStorage.getItem(UPLOAD_KEY)); } catch (e) { savedUpload = null; }
  if (savedUpload && savedUpload.data) showUpload(savedUpload.data, !!savedUpload.isVideo);

  heroVideoBtn.addEventListener('click', () => {
    if (heroMedia.classList.contains('has-video')) {
      localStorage.removeItem(STORAGE_KEY);
      hideVideo();
      return;
    }
    openModal();
  });

  if (modalSave) modalSave.addEventListener('click', attemptSave);
  if (modalCancel) modalCancel.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  if (modalInput) {
    modalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') attemptSave();
      if (e.key === 'Escape') closeModal();
    });
  }

  if (heroUploadBtn && heroUploadInput) {
    heroUploadBtn.addEventListener('click', () => {
      if (heroMedia.classList.contains('has-upload')) {
        localStorage.removeItem(UPLOAD_KEY);
        hideUpload();
        return;
      }
      heroUploadInput.click();
    });

    heroUploadInput.addEventListener('change', () => {
      const file = heroUploadInput.files && heroUploadInput.files[0];
      heroUploadInput.value = '';
      if (!file) return;

      const isGif = file.type === 'image/gif';
      const isVideo = file.type.indexOf('video/') === 0;
      if (!isGif && !isVideo) {
        alert('Please choose a GIF or video file (MP4 or WebM).');
        return;
      }

      const maxBytes = MAX_UPLOAD_MB * 1024 * 1024;
      if (file.size > maxBytes) {
        alert('That file is ' + (file.size / (1024 * 1024)).toFixed(1) + 'MB. Please choose a file under ' + MAX_UPLOAD_MB + 'MB so it can be saved.');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result;
        try {
          localStorage.setItem(UPLOAD_KEY, JSON.stringify({ data: dataUrl, isVideo }));
        } catch (err) {
          alert('This file is too large to save in the browser. Please choose a smaller GIF or video (under ' + MAX_UPLOAD_MB + 'MB).');
          return;
        }
        showUpload(dataUrl, isVideo);
      };
      reader.readAsDataURL(file);
    });
  }
})();

// Image-banner video upload (service pages) — click-to-replace the banner
// video, saved per page in the browser via IndexedDB rather than
// localStorage: a single video can easily blow past localStorage's
// ~5-10MB per-origin quota (and base64 bloats it another ~33%), while
// IndexedDB stores the Blob directly and has a much larger ceiling.
// Same caveat as the hero upload above — this only shows the video back
// to the browser that uploaded it, not to other visitors. Only visible
// in Edit Mode, matching the hero's video/upload buttons.
(function () {
  if (!window.indexedDB) return;

  const DB_NAME = 'monufact_media';
  const STORE_NAME = 'videos';
  const MAX_MB = 60;

  function withStore(mode, fn) {
    return new Promise((resolve, reject) => {
      const openReq = indexedDB.open(DB_NAME, 1);
      openReq.onupgradeneeded = () => {
        if (!openReq.result.objectStoreNames.contains(STORE_NAME)) {
          openReq.result.createObjectStore(STORE_NAME);
        }
      };
      openReq.onerror = () => reject(openReq.error);
      openReq.onsuccess = () => {
        const tx = openReq.result.transaction(STORE_NAME, mode);
        fn(tx.objectStore(STORE_NAME), tx, resolve, reject);
      };
    });
  }

  function idbGet(key) {
    return withStore('readonly', (store, tx, resolve, reject) => {
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  }

  function idbSet(key, value) {
    return withStore('readwrite', (store, tx, resolve, reject) => {
      store.put(value, key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  function idbDelete(key) {
    return withStore('readwrite', (store, tx, resolve, reject) => {
      store.delete(key);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
  }

  document.querySelectorAll('[data-banner-video]').forEach((video, i) => {
    const banner = video.closest('.image-banner');
    const btn = banner && banner.querySelector('[data-banner-video-upload-btn]');
    const input = banner && banner.querySelector('[data-banner-video-upload-input]');
    if (!banner || !btn || !input) return;

    const key = 'banner-video:' + location.pathname + ':' + i;
    let objectUrl = null;

    function applyBlob(blob) {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
      objectUrl = URL.createObjectURL(blob);
      const source = video.querySelector('source');
      if (source) source.src = objectUrl;
      else video.src = objectUrl;
      video.load();
      video.play().catch(() => {});
      btn.textContent = 'Remove Uploaded Video';
    }

    idbGet(key).then((blob) => { if (blob) applyBlob(blob); }).catch(() => {});

    btn.addEventListener('click', () => {
      if (btn.textContent === 'Remove Uploaded Video') {
        idbDelete(key)
          .catch(() => {})
          .then(() => location.reload());
        return;
      }
      input.click();
    });

    input.addEventListener('change', () => {
      const file = input.files && input.files[0];
      input.value = '';
      if (!file) return;
      if (file.type.indexOf('video/') !== 0) {
        alert('Please choose a video file (MP4 or WebM).');
        return;
      }
      if (file.size > MAX_MB * 1024 * 1024) {
        alert('That file is ' + (file.size / (1024 * 1024)).toFixed(1) + 'MB. Please choose a file under ' + MAX_MB + 'MB.');
        return;
      }
      idbSet(key, file)
        .then(() => applyBlob(file))
        .catch(() => alert("This couldn't be saved in the browser's storage. Try a smaller file or free up space."));
    });
  });
})();
