/* ============================================================
   GARRETT BRASIL — script.js
   Main JavaScript for all pages
   ============================================================ */

'use strict';

// ============================================================
// PRODUCT DATABASE (for search)
// ============================================================
const PRODUCTS = [
  {
    name: 'Detector de Metal ACE 200i',
    price: 'R$ 1.095',
    category: 'sport',
    url: 'sport.html#ace200i',
    img: '../6 Images and Videos_Security/ACE 200i/1-200i-gallery-2000x1000.jpg',
    keywords: ['ace 200i','ace','iniciante','hobby','terrestre','detector','metal','sport','200']
  },
  {
    name: 'Detector de Metal ACE 300i',
    price: 'R$ 1.621',
    category: 'sport',
    url: 'sport.html#ace300i',
    img: '../6 Images and Videos_Security/ACE 300i/01-ace-300i-gallery2000x1000-2.jpg',
    keywords: ['ace 300i','ace','detector','hobby','terrestre','sport','300']
  },
  {
    name: 'Detector de Metal ACE 400i',
    price: 'R$ 1.870',
    category: 'sport',
    url: 'sport.html#ace400i',
    img: '../6 Images and Videos_Security/ACE 400i/1-ace400i-2000x1000.jpg',
    keywords: ['ace 400i','ace','detector','hobby','intermediário','sport','400']
  },
  {
    name: 'Detector de Metal ACE Apex',
    price: 'R$ 2.580',
    category: 'sport',
    url: 'sport.html#aceapex',
    img: '../6 Images and Videos_Security/ACE Apex/1142320-Apex-right-angle-blk-bckgrnd.jpg',
    keywords: ['ace apex','apex','multi-flex','multifrequência','frequência múltipla','avançado','sport','z-lynk','wireless']
  },
  {
    name: 'Detector de Metal AT Pro',
    price: 'R$ 7.800',
    category: 'sport',
    url: 'sport.html#atpro',
    img: '../6 Images and Videos_Security/AT PRO/1-AT-Pro-2000x1000.jpg',
    keywords: ['at pro','at','submersível','aquático','waterproof','sport','pro']
  },
  {
    name: 'Detector de Metal AT Gold',
    price: 'R$ 4.323',
    category: 'sport',
    url: 'sport.html#atgold',
    img: '../6 Images and Videos_Security/AT GOLD/1-at-gold-gallery-2000x1000.jpg',
    keywords: ['at gold','at','ouro','gold','18khz','garimpo','submersível','sport','gold']
  },
  {
    name: 'Detector de Metal AT Max',
    price: 'R$ 3.413',
    category: 'sport',
    url: 'sport.html#atmax',
    img: '../6 Images and Videos_Security/AT MAX INTERNATIONAL/1-AT-Max-Intl-2000x1000.jpg',
    keywords: ['at max','at','wireless','z-lynk','submersível','sport','max','internacional']
  },
  {
    name: 'Super Detector de Ouro AXIOM',
    price: 'R$ 21.187',
    category: 'sport',
    url: 'sport.html#axiom',
    img: '../6 Images and Videos_Security/AXIOM/01-1142720-gallery-2000x1000.jpg',
    keywords: ['axiom','ouro','garimpo','pulso de indução','profissional','pepita','pi','gold']
  },
  {
    name: 'Detector de Metal Goldmaster 24K',
    price: 'R$ 6.906',
    category: 'sport',
    url: 'sport.html#goldmaster',
    img: '../6 Images and Videos_Security/Goldmaster 24k/1142650-goldmaster24k-leftangle-1500x629-.jpg',
    keywords: ['goldmaster','24k','ouro','garimpo','pepita','alta frequência','gold','24']
  },
  {
    name: 'Detector Portátil Super Scanner V',
    price: 'R$ 2.105',
    category: 'seguranca',
    url: 'seguranca.html#superscanner',
    img: '../6 Images and Videos_Security/Super Scanner V/01-superScannerV-black2000x1000.jpg',
    keywords: ['super scanner','scanner','manual','handheld','segurança','portátil','nij','ecac','stac','hand held']
  },
  {
    name: 'Detector Portátil SuperWand',
    price: 'R$ 2.283',
    category: 'seguranca',
    url: 'seguranca.html#superwand',
    img: '../6 Images and Videos_Security/Super Wand/1-superWand-gallery-2000x1000.jpg',
    keywords: ['superwand','wand','vareta','manual','handheld','segurança','portátil','hand held']
  },
  {
    name: 'Detector Portátil THD',
    price: 'Sob Consulta',
    category: 'seguranca',
    url: 'seguranca.html#thd',
    img: '../6 Images and Videos_Security/Super Scanner V/02-superScannerV-black2000x1000.jpg',
    keywords: ['thd','compacto','portátil','segurança','ip66','lanterna','agente','tático']
  },
  {
    name: 'Pórtico Detector PD 6500i',
    price: 'Sob Consulta',
    category: 'seguranca',
    url: 'seguranca.html#pd6500i',
    img: '../6 Images and Videos_Security/PD 6500i/1-pd6500i-Gallery-2000x1000.jpg',
    keywords: ['pd 6500i','pd6500i','portal','pórtico','walk-through','33 zonas','tsa','dhs','ecac','aeroporto','walk through']
  },
  {
    name: 'Pórtico Detector Multi Zone',
    price: 'Sob Consulta',
    category: 'seguranca',
    url: 'seguranca.html#multizone',
    img: '../6 Images and Videos_Security/Multi Zone/1-MultiZone-gallery-2000x1000.jpg',
    keywords: ['multi zone','multizone','portal','pórtico','walk-through','20 zonas','escola','evento','walk through']
  },
  {
    name: 'Pórtico Detector Paragon',
    price: 'Sob Consulta',
    category: 'seguranca',
    url: 'seguranca.html#paragon',
    img: '../6 Images and Videos_Security/Paragon/paragon-front-angle-756x1500.jpg',
    keywords: ['paragon','portal','pórtico','walk-through','66 zonas','ambiscan','ip65','nfc','walk through']
  },
  {
    name: 'Pinpointer Pro-Pointer AT',
    price: 'R$ 1.411',
    category: 'acessorios',
    url: 'acessorios.html#pinpointers',
    img: '../6 Images and Videos_Security/PRO-POINTER AT/1140900 Pro-Pointer AT diver 1500x1125.jpg',
    keywords: ['pro-pointer','pinpointer','localizador','ponteiro','submersível','acessório','pro pointer']
  },
  {
    name: 'Pinpointer Pro-Pointer AT Z-LYNK',
    price: 'R$ 1.650',
    category: 'acessorios',
    url: 'acessorios.html#pinpointers',
    img: '../6 Images and Videos_Security/PRO-POINTER AT Z-LYNK/1142200 Pro-Pointer AT Z-Lynk 1500x336.jpg',
    keywords: ['pro-pointer','z-lynk','z-link','pinpointer','wireless','sem fio','acessório','pro pointer']
  },
  {
    name: 'Pinpointer Pro-Pointer II',
    price: 'R$ 1.681',
    category: 'acessorios',
    url: 'acessorios.html#pinpointers',
    img: '../6 Images and Videos_Security/PRO-POINTER II/1166050 Pro-Pointer 2 4124x795.jpg',
    keywords: ['pro-pointer ii','pro-pointer 2','pinpointer','localizador','acessório','pro pointer 2']
  },
  {
    name: 'Bobina 11×14 DD ACE Apex',
    price: 'R$ 2.098',
    category: 'acessorios',
    url: 'acessorios.html#bobinas',
    img: '../6 Images and Videos_Security/ACE Apex/1142320-Apex-multi-frequency-left-angle-.jpg',
    keywords: ['bobina','coil','ace apex','11x14','dd','acessório','raider']
  },
  {
    name: 'Bobina 8,5×11 DD Série AT',
    price: 'R$ 1.569',
    category: 'acessorios',
    url: 'acessorios.html#bobinas',
    img: '../6 Images and Videos_Security/AT PRO/1-AT-Pro-2000x1000.jpg',
    keywords: ['bobina','coil','at','8.5x11','8,5x11','dd','acessório','série at']
  },
  {
    name: 'Bobina 5×8 DD Série AT',
    price: 'R$ 1.473',
    category: 'acessorios',
    url: 'acessorios.html#bobinas',
    img: '../6 Images and Videos_Security/AT PRO/1-AT-Pro-2000x1000.jpg',
    keywords: ['bobina','coil','at','5x8','dd','acessório','série at']
  },
  {
    name: 'Bobina 8,5×11 DD Série ACE',
    price: 'R$ 1.184',
    category: 'acessorios',
    url: 'acessorios.html#bobinas',
    img: '../6 Images and Videos_Security/ACE Apex/8.5x11 DD Multi-Flex Raider Coil.png',
    keywords: ['bobina','coil','ace','8.5x11','8,5x11','dd','acessório','série ace']
  },
  {
    name: 'Bobina 9×12 CC Série ACE',
    price: 'R$ 1.184',
    category: 'acessorios',
    url: 'acessorios.html#bobinas',
    img: '../6 Images and Videos_Security/ACE 400i/1-ace400i-2000x1000.jpg',
    keywords: ['bobina','coil','ace','9x12','cc','concêntrica','acessório','série ace']
  },
  {
    name: 'Bobina 11×13 DD Para ATX',
    price: 'R$ 2.366',
    category: 'acessorios',
    url: 'acessorios.html#bobinas',
    img: '../6 Images and Videos_Security/AXIOM/01-1142720-gallery-2000x1000.jpg',
    keywords: ['bobina','coil','atx','11x13','dd','acessório','garimpo']
  },
  {
    name: 'Bobina 11×13 Mono Fechada ATX',
    price: 'R$ 2.507',
    category: 'acessorios',
    url: 'acessorios.html#bobinas',
    img: '../6 Images and Videos_Security/AT GOLD/1-at-gold-gallery-2000x1000.jpg',
    keywords: ['bobina','coil','atx','11x13','mono','monoloop','acessório','garimpo']
  },
  {
    name: 'Bobina 8" Mono Para ATX',
    price: 'R$ 5.819',
    category: 'acessorios',
    url: 'acessorios.html#bobinas',
    img: '../6 Images and Videos_Security/AXIOM/01-1142720-gallery-2000x1000.jpg',
    keywords: ['bobina','coil','atx','8 mono','monoloop','acessório','garimpo']
  },
  {
    name: 'Bobina 10×12 DD ATX',
    price: 'R$ 5.828',
    category: 'acessorios',
    url: 'acessorios.html#bobinas',
    img: '../6 Images and Videos_Security/AT MAX INTERNATIONAL/1-AT-Max-Intl-2000x1000.jpg',
    keywords: ['bobina','coil','atx','10x12','dd','acessório','garimpo']
  },
  {
    name: 'Protetor de Bobina 6,5×9',
    price: 'R$ 186',
    category: 'acessorios',
    url: 'acessorios.html#bobinas',
    img: '../6 Images and Videos_Security/ACE Apex/1613100 6x11-coil-cover-blk-bckgrnd.jpg',
    keywords: ['protetor','protetor de bobina','coil cover','6.5x9','6,5x9','acessório','capa']
  },
  {
    name: 'Bateia 15" Super Sluice',
    price: 'R$ 208',
    category: 'acessorios',
    url: 'acessorios.html#garimpo',
    img: '../6 Images and Videos_Security/AT GOLD/1-at-gold-gallery-2000x1000.jpg',
    keywords: ['bateia','sluice','garimpo','ouro','15 polegadas','pan','concentrador']
  },
  {
    name: 'Peneira para Garimpo 14" Garrett Sifter',
    price: 'R$ 125',
    category: 'acessorios',
    url: 'acessorios.html#garimpo',
    img: '../6 Images and Videos_Security/Goldmaster 24k/1142650-goldmaster24k-leftangle-1500x629-.jpg',
    keywords: ['peneira','sifter','garimpo','classificador','14 polegadas','classificação']
  }
];

// ============================================================
// DOM READY
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  // ----------------------------------------------------------
  // 1. HEADER SCROLL EFFECT
  // ----------------------------------------------------------
  const header = document.getElementById('header');

  if (header) {
    const onScroll = () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run immediately in case page loads scrolled
  }

  // ----------------------------------------------------------
  // 2. SEARCH TOGGLE
  // ----------------------------------------------------------
  const searchToggle = document.getElementById('searchToggle');
  const searchBar    = document.getElementById('searchBar');
  const searchInput  = document.getElementById('searchInput');

  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
      const isOpen = searchBar.classList.toggle('open');
      if (isOpen && searchInput) {
        searchInput.focus();
      }
    });
  }

  // ----------------------------------------------------------
  // 3. MOBILE MENU (hamburger)
  // ----------------------------------------------------------
  const hamburger      = document.getElementById('hamburger');
  const hamburgerIcon  = document.getElementById('hamburgerIcon');
  const mobileMenu     = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      if (hamburgerIcon) {
        hamburgerIcon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      }
      // Close search bar when menu opens
      if (isOpen && searchBar) {
        searchBar.classList.remove('open');
      }
    });
  }

  // Mobile dropdown toggle
  const mobileDropToggle = document.getElementById('mobileDropToggle');
  const mobileDropMenu   = document.getElementById('mobileDropMenu');

  if (mobileDropToggle && mobileDropMenu) {
    mobileDropToggle.addEventListener('click', () => {
      mobileDropMenu.classList.toggle('open');
      const chevron = mobileDropToggle.querySelector('.fa-chevron-down');
      if (chevron) {
        chevron.style.transform = mobileDropMenu.classList.contains('open')
          ? 'rotate(180deg)'
          : 'rotate(0deg)';
        chevron.style.transition = '0.25s ease';
      }
    });
  }

  // ----------------------------------------------------------
  // 4. SEARCH FUNCTIONALITY
  // ----------------------------------------------------------
  const searchResults = document.getElementById('searchResults');

  function normalizeStr(str) {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function searchProducts(query) {
    if (!query || query.trim().length < 2) return [];

    const q = normalizeStr(query.trim());
    const tokens = q.split(/\s+/).filter(t => t.length > 0);

    return PRODUCTS.filter(product => {
      const haystack = [
        product.name,
        product.price,
        product.category,
        ...product.keywords
      ].map(normalizeStr).join(' ');

      return tokens.every(token => haystack.includes(token));
    }).slice(0, 8); // max 8 results
  }

  function renderSearchResults(results) {
    if (!searchResults) return;

    if (!results || results.length === 0) {
      searchResults.classList.remove('has-results');
      searchResults.innerHTML = '';
      return;
    }

    searchResults.classList.add('has-results');
    searchResults.innerHTML = results.map(product => `
      <div class="search-result-item" data-url="${product.url}">
        <img src="${product.img}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'" />
        <div class="search-result-item__info">
          <div class="search-result-item__name">${product.name}</div>
          <div class="search-result-item__price">${product.price}</div>
        </div>
        <i class="fa-solid fa-arrow-right" style="color:var(--clr-muted);font-size:0.8rem;flex-shrink:0"></i>
      </div>
    `).join('');

    // Click handlers
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        if (url) window.location.href = url;
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const results = searchProducts(searchInput.value);
      renderSearchResults(results);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const results = searchProducts(searchInput.value);
        if (results.length > 0) {
          window.location.href = results[0].url;
        }
      }
    });
  }

  // ----------------------------------------------------------
  // 5. CLOSE SEARCH on Escape or outside click
  // ----------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (searchBar) searchBar.classList.remove('open');
      if (mobileMenu) {
        mobileMenu.classList.remove('open');
        if (hamburgerIcon) hamburgerIcon.className = 'fa-solid fa-bars';
      }
    }
  });

  document.addEventListener('click', (e) => {
    // Close search if clicking outside search bar
    if (searchBar && searchBar.classList.contains('open')) {
      if (!searchBar.contains(e.target) && e.target !== searchToggle) {
        searchBar.classList.remove('open');
      }
    }

    // Close mobile menu if clicking outside nav/menu
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      const navEl = document.querySelector('.nav');
      if (navEl && !navEl.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        if (hamburgerIcon) hamburgerIcon.className = 'fa-solid fa-bars';
      }
    }
  });

  // ----------------------------------------------------------
  // 6. PRODUCTS TAB FILTER (index.html)
  // ----------------------------------------------------------
  const prodTabs  = document.querySelectorAll('.prod-tab');
  const prodCards = document.querySelectorAll('.prod-card[data-category]');

  if (prodTabs.length > 0) {
    prodTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active tab
        prodTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-tab') || tab.getAttribute('data-filter') || 'all';

        // Show/hide cards
        prodCards.forEach(card => {
          const cat = card.getAttribute('data-category') || '';
          if (filter === 'all' || cat === filter) {
            card.classList.remove('prod-card--hidden');
            card.style.display = '';
          } else {
            card.classList.add('prod-card--hidden');
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ----------------------------------------------------------
  // 7. SCROLL REVEAL (IntersectionObserver)
  // ----------------------------------------------------------
  const revealSelectors = [
    '.cat-card',
    '.prod-card',
    '.feat-item',
    '.benefit-item',
    '.testi-card',
    '.stats__item',
    '.reveal'
  ].join(',');

  const revealElements = document.querySelectorAll(revealSelectors);

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally stop observing after reveal
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      el.classList.add('reveal'); // ensure class is present
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all if IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // ----------------------------------------------------------
  // 8. CONTACT FORM SUBMISSION FEEDBACK
  // ----------------------------------------------------------
  const contactForm = document.getElementById('contatoForm') || document.getElementById('contactForm');

  if (contactForm) {
    const feedbackEl = contactForm.querySelector('.form__feedback');

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
      }

      // Simulate form submission — replace with actual fetch/form action
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        if (feedbackEl) {
          feedbackEl.className = 'form__feedback form__feedback--success';
          feedbackEl.style.display = 'block';
          feedbackEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> Mensagem enviada! Entraremos em contato em breve.';

          // Auto-hide after 6 seconds
          setTimeout(() => {
            feedbackEl.style.display = 'none';
          }, 6000);
        }

        contactForm.reset();
      }, 1200);
    });
  }

  // ----------------------------------------------------------
  // 9. ACTIVE NAV LINK detection (for internal pages)
  // ----------------------------------------------------------
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks    = document.querySelectorAll('.nav__link:not(.nav__link--dropdown)');

  navLinks.forEach(link => {
    const href = (link.getAttribute('href') || '').split('#')[0].split('/').pop();
    if (href && href === currentPath) {
      link.classList.add('active');
    }
  });

  // ----------------------------------------------------------
  // 10. SMOOTH SCROLL for anchor links
  // ----------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
        const extraOffset = 56 + 20; // quick-filters bar height + margin
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - extraOffset;

        window.scrollTo({ top, behavior: 'smooth' });

        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('open')) {
          mobileMenu.classList.remove('open');
          if (hamburgerIcon) hamburgerIcon.className = 'fa-solid fa-bars';
        }
      }
    });
  });

  // ----------------------------------------------------------
  // 11. HERO SCROLL indicator (index.html)
  // ----------------------------------------------------------
  const heroScroll = document.querySelector('.hero__scroll');
  if (heroScroll) {
    heroScroll.addEventListener('click', () => {
      const stats = document.querySelector('.stats') || document.querySelector('.categories');
      if (stats) {
        stats.scrollIntoView({ behavior: 'smooth' });
      }
    });
    heroScroll.style.cursor = 'pointer';
  }

  // ----------------------------------------------------------
  // 12. QUICK FILTER ACTIVE STATE (page.css pages)
  // ----------------------------------------------------------
  const qfBtns = document.querySelectorAll('.qf-btn');
  if (qfBtns.length > 0) {
    // Highlight based on scroll position / hash
    const updateQfActive = () => {
      const hash = window.location.hash;
      qfBtns.forEach(btn => {
        const href = btn.getAttribute('href');
        if (href && href === hash) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    };

    window.addEventListener('hashchange', updateQfActive);
    updateQfActive();

    // Also update on click
    qfBtns.forEach(btn => {
      if (btn.getAttribute('href') && btn.getAttribute('href').startsWith('#')) {
        btn.addEventListener('click', () => {
          setTimeout(updateQfActive, 100);
        });
      }
    });
  }

  // ----------------------------------------------------------
  // 13. CLICKABLE PRODUCT CARDS + IMAGES
  // Clicking the image or anywhere on the card (outside buttons/links)
  // navigates to the individual product page.
  // Works automatically on sport.html, seguranca.html, acessorios.html.
  // ----------------------------------------------------------
  document.querySelectorAll('.prod-card').forEach(card => {
    // Find "Ver Página" link or data-prod-url to get the product URL
    const pageLink =
      card.querySelector('a[href*="produtos/"]') ||
      card.querySelector('[data-prod-url]');

    if (!pageLink) return;

    const href = pageLink.getAttribute('href') || pageLink.getAttribute('data-prod-url');
    if (!href) return;

    // Make the image div visually and functionally clickable
    const imgDiv = card.querySelector('.prod-card__img');
    if (imgDiv) {
      imgDiv.style.cursor = 'pointer';
      imgDiv.addEventListener('click', () => {
        window.location.href = href;
      });
    }

    // Make the entire card clickable — except actual links/buttons
    card.addEventListener('click', e => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      window.location.href = href;
    });

    // Pointer cursor on card body for visual feedback
    const cardBody = card.querySelector('.prod-card__body');
    if (cardBody) cardBody.style.cursor = 'pointer';
  });

}); // end DOMContentLoaded
