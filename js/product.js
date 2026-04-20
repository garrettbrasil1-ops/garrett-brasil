/* ============================================================
   GARRETT BRASIL — product.js
   JavaScript for individual product pages (produtos/*.html)
   ============================================================ */

(function () {
  'use strict';

  /* ---- Gallery ---- */
  const mainImg   = document.getElementById('galleryMain');
  const thumbs    = document.querySelectorAll('.prod-gallery__thumb');
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lightboxImg');
  const lbClose   = document.getElementById('lightboxClose');
  const lbPrev    = document.getElementById('lightboxPrev');
  const lbNext    = document.getElementById('lightboxNext');

  let currentIndex = 0;
  const images = Array.from(thumbs).map(t => t.querySelector('img').src);

  function setActive(idx) {
    currentIndex = idx;
    if (mainImg && images[idx]) {
      mainImg.src = images[idx];
      mainImg.alt = thumbs[idx]?.querySelector('img')?.alt || '';
    }
    thumbs.forEach((t, i) => t.classList.toggle('active', i === idx));
  }

  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => setActive(idx));
  });

  // Lightbox open
  if (mainImg) {
    mainImg.parentElement.addEventListener('click', () => {
      if (!lightbox || !lbImg) return;
      lbImg.src = images[currentIndex];
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (lbClose) lbClose.addEventListener('click', closeLightbox);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  if (lbPrev) {
    lbPrev.addEventListener('click', () => {
      const idx = (currentIndex - 1 + images.length) % images.length;
      setActive(idx);
      if (lbImg) lbImg.src = images[idx];
    });
  }

  if (lbNext) {
    lbNext.addEventListener('click', () => {
      const idx = (currentIndex + 1) % images.length;
      setActive(idx);
      if (lbImg) lbImg.src = images[idx];
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lbPrev?.click();
    if (e.key === 'ArrowRight') lbNext?.click();
  });

  // Init first thumb active
  if (thumbs.length > 0) setActive(0);

  /* ---- Tabs ---- */
  const tabBtns   = document.querySelectorAll('.prod-tab-btn');
  const tabPanels = document.querySelectorAll('.prod-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.toggle('active', b === btn));
      tabPanels.forEach(p => p.classList.toggle('active', p.id === 'tab-' + target));
    });
  });

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  }

  /* ---- Header scroll effect ---- */
  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ---- Mobile menu ---- */
  const hamburger     = document.getElementById('hamburger');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const mobileMenu    = document.getElementById('mobileMenu');
  const mobileDropToggle = document.getElementById('mobileDropToggle');
  const mobileDropMenu   = document.getElementById('mobileDropMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      if (hamburgerIcon) {
        hamburgerIcon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
    });
  }

  if (mobileDropToggle && mobileDropMenu) {
    mobileDropToggle.addEventListener('click', () => {
      mobileDropMenu.classList.toggle('open');
    });
  }

  /* ---- Search toggle ---- */
  const searchToggle = document.getElementById('searchToggle');
  const searchBar    = document.getElementById('searchBar');

  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
      searchBar.classList.toggle('open');
      if (searchBar.classList.contains('open')) {
        document.getElementById('searchInput')?.focus();
      }
    });
  }

})();
