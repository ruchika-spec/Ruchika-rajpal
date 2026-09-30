// ===== HOLIDAYS BY VISMORA — Main JS =====

const WHATSAPP_NUMBER = '919310313652';
const PHONE_NUMBER    = '+91 93103 13652';

// ===== PACKAGE DATA =====
const packages = [
  {
    id: 1,
    destination: 'Vietnam',
    country: 'Vietnam',
    region: 'Southeast Asia',
    duration: 7, nights: 6,
    price: 45000,
    badge: 'Bestseller',
    hot: true,
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    highlights: ['Halong Bay Cruise', 'Hoi An Ancient Town', 'Ho Chi Minh City Tour'],
  },
  {
    id: 2,
    destination: 'Bali',
    country: 'Bali',
    region: 'Southeast Asia',
    duration: 6, nights: 5,
    price: 55000,
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    highlights: ['Ubud Rice Terraces', 'Seminyak Beach', 'Sacred Monkey Forest'],
  },
  {
    id: 3,
    destination: 'Thailand',
    country: 'Thailand',
    region: 'Southeast Asia',
    duration: 7, nights: 6,
    price: 40000,
    badge: 'Bestseller',
    hot: true,
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80',
    highlights: ['Bangkok Grand Palace', 'Phi Phi Islands', 'Chiang Mai Night Bazaar'],
  },
  {
    id: 4,
    destination: 'Singapore',
    country: 'Singapore',
    region: 'Southeast Asia',
    duration: 5, nights: 4,
    price: 65000,
    badge: 'City Escape',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80',
    highlights: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island'],
  },
  {
    id: 5,
    destination: 'Dubai',
    country: 'Dubai',
    region: 'Middle East',
    duration: 6, nights: 5,
    price: 70000,
    badge: 'Luxury Pick',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
    highlights: ['Burj Khalifa Sky View', 'Desert Safari & BBQ', 'Dubai Creek & Souk'],
  },
  {
    id: 6,
    destination: 'Maldives',
    country: 'Maldives',
    region: 'Indian Ocean',
    duration: 5, nights: 4,
    price: 120000,
    badge: 'Premium',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80',
    highlights: ['Overwater Villa Stay', 'Snorkeling & Diving', 'Sunset Cruise'],
  },
  {
    id: 7,
    destination: 'Mauritius',
    country: 'Mauritius',
    region: 'Indian Ocean',
    duration: 7, nights: 6,
    price: 95000,
    badge: 'Romantic',
    image: 'https://images.unsplash.com/photo-1562601579-599dec564e06?w=600&q=80',
    highlights: ['Le Morne Brabant Beach', 'Chamarel 7 Coloured Earths', 'Catamaran Cruise'],
  },
  {
    id: 8,
    destination: 'Malaysia',
    country: 'Malaysia',
    region: 'Southeast Asia',
    duration: 6, nights: 5,
    price: 45000,
    badge: 'Great Value',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
    highlights: ['Petronas Twin Towers', 'Langkawi Island', 'Penang Heritage Walk'],
  },
  {
    id: 9,
    destination: 'Hong Kong',
    country: 'Hong Kong',
    region: 'East Asia',
    duration: 5, nights: 4,
    price: 60000,
    badge: 'City + Nature',
    image: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80',
    highlights: ['Victoria Peak Tram', 'Disneyland Hong Kong', 'Temple Street Night Market'],
  },
  {
    id: 10,
    destination: 'Europe',
    country: 'Europe',
    region: 'Europe',
    duration: 12, nights: 11,
    price: 180000,
    badge: 'Grand Tour',
    hot: true,
    image: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=600&q=80',
    highlights: ['Paris — Eiffel Tower', 'Swiss Alps & Interlaken', 'Rome & Vatican City'],
  },
];

// ===== FORMAT CURRENCY =====
function formatINR(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// ===== BUILD PACKAGE CARD HTML =====
function buildPackageCard(pkg) {
  const badgeClass = pkg.hot ? 'pkg-badge pkg-badge-hot' : 'pkg-badge';
  const highlights = pkg.highlights.map(h => `<li class="pkg-highlight-item">${h}</li>`).join('');
  const waMsg = encodeURIComponent(`Hi! I'm interested in the ${pkg.destination} package (${pkg.duration}D/${pkg.nights}N). Please share more details.`);

  return `
    <div class="pkg-card" data-country="${pkg.country}" data-price="${pkg.price}" data-days="${pkg.duration}">
      <div class="pkg-card-img">
        <img src="${pkg.image}" alt="${pkg.destination}" loading="lazy">
        <span class="${badgeClass}">${pkg.badge}</span>
        <span class="pkg-duration-badge">🕐 ${pkg.duration}D / ${pkg.nights}N</span>
      </div>
      <div class="pkg-card-body">
        <div class="pkg-destination">${pkg.destination}</div>
        <div class="pkg-country">📍 ${pkg.region}</div>
        <ul class="pkg-highlights">${highlights}</ul>
        <div class="pkg-footer">
          <div class="pkg-price">
            <span class="from">Starting from</span>
            <span class="amount">${formatINR(pkg.price)}</span>
            <span class="per">per person</span>
          </div>
          <div class="pkg-actions">
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}" target="_blank" class="btn btn-sm btn-whatsapp" title="WhatsApp">💬</a>
            <button class="btn btn-sm btn-primary enquire-btn" data-dest="${pkg.destination}">Enquire</button>
          </div>
        </div>
      </div>
    </div>`;
}

// ===== RENDER PACKAGES =====
function renderPackages(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  if (list.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <div class="icon">🔍</div>
        <h3>No packages found</h3>
        <p>Try adjusting your filters or <a href="#enquiry" style="color:var(--brand-mid)">reach out to us</a> for a custom package.</p>
      </div>`;
    return;
  }
  container.innerHTML = list.map(buildPackageCard).join('');
  wireEnquireButtons(container);
}

// ===== FILTER PACKAGES =====
function applyFilters() {
  const country  = (document.getElementById('filter-country')?.value   || '').toLowerCase();
  const budget   = document.getElementById('filter-budget')?.value   || '';
  const days     = document.getElementById('filter-days')?.value     || '';

  const countEl = document.getElementById('pkg-count');

  const filtered = packages.filter(p => {
    const matchCountry = !country || p.country.toLowerCase() === country;
    const matchBudget = !budget || (() => {
      if (budget === 'u50')   return p.price < 50000;
      if (budget === '50-1l') return p.price >= 50000 && p.price < 100000;
      if (budget === '1l-1.5l') return p.price >= 100000 && p.price < 150000;
      if (budget === 'a1.5l') return p.price >= 150000;
      return true;
    })();
    const matchDays = !days || (() => {
      if (days === 'u5')    return p.duration < 5;
      if (days === '5-7')   return p.duration >= 5 && p.duration <= 7;
      if (days === '7-10')  return p.duration > 7 && p.duration <= 10;
      if (days === 'a10')   return p.duration > 10;
      return true;
    })();
    return matchCountry && matchBudget && matchDays;
  });

  if (countEl) countEl.textContent = filtered.length;
  renderPackages(filtered, 'packages-grid');
}

// ===== HERO SEARCH (homepage) =====
function heroSearch() {
  const dest = document.getElementById('hero-dest')?.value || '';
  const days = document.getElementById('hero-days')?.value || '';
  const budget = document.getElementById('hero-budget')?.value || '';
  let url = 'packages.html?';
  if (dest)   url += `country=${encodeURIComponent(dest)}&`;
  if (days)   url += `days=${encodeURIComponent(days)}&`;
  if (budget) url += `budget=${encodeURIComponent(budget)}&`;
  window.location.href = url;
}

// ===== READ URL PARAMS (packages page) =====
function readUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const country = params.get('country');
  const days    = params.get('days');
  const budget  = params.get('budget');
  if (country) { const el = document.getElementById('filter-country'); if (el) el.value = country; }
  if (days)    { const el = document.getElementById('filter-days');    if (el) el.value = days;    }
  if (budget)  { const el = document.getElementById('filter-budget');  if (el) el.value = budget;  }
}

// ===== ENQUIRY FORM =====
function wireEnquireButtons(scope) {
  const container = scope || document;
  container.querySelectorAll('.enquire-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dest = btn.dataset.dest || '';
      const section = document.getElementById('enquiry');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const destSelect = document.getElementById('enq-destination');
          if (destSelect && dest) {
            for (let i = 0; i < destSelect.options.length; i++) {
              if (destSelect.options[i].value === dest) {
                destSelect.selectedIndex = i;
                break;
              }
            }
          }
        }, 600);
      }
    });
  });
}

function handleEnquirySubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('[type=submit]');
  const name = document.getElementById('enq-name')?.value.trim();
  const phone = document.getElementById('enq-phone')?.value.trim();
  const dest = document.getElementById('enq-destination')?.value || 'General';

  if (!name || !phone) {
    showToast('Please fill in your name and phone number.', 'error');
    return;
  }

  const msg = encodeURIComponent(
    `Hi Holidays by Vismora! 🌍\n\nI'd like to enquire about a holiday package.\n\nName: ${name}\nPhone: ${phone}\nDestination: ${dest}\n\nPlease share more details!`
  );

  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    showToast('✅ Enquiry received! We'll contact you within 2 hours.', 'success');
    e.target.reset();
    btn.textContent = 'Send Enquiry';
    btn.disabled = false;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  }, 800);
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const existing = document.querySelector('.hbv-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'hbv-toast';
  toast.style.cssText = `
    position:fixed; bottom:32px; left:50%; transform:translateX(-50%);
    background:${type === 'success' ? '#22C55E' : '#EF4444'};
    color:#fff; padding:14px 28px; border-radius:100px;
    font-size:14px; font-weight:600; z-index:9999;
    box-shadow:0 8px 24px rgba(0,0,0,0.15);
    animation: slideUp 0.3s ease;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// ===== NAVBAR SCROLL =====
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();

  // Floating WA phone fill
  document.querySelectorAll('.wa-link').forEach(el => {
    el.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });
  document.querySelectorAll('.call-link').forEach(el => {
    el.href = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;
  });
  document.querySelectorAll('.phone-display').forEach(el => {
    el.textContent = PHONE_NUMBER;
  });

  // Homepage featured packages
  const featured = document.getElementById('packages-grid');
  if (featured) {
    const page = featured.dataset.page;
    if (page === 'home') {
      renderPackages(packages.slice(0, 6), 'packages-grid');
    } else {
      readUrlParams();
      applyFilters();
      document.querySelectorAll('.filter-field select').forEach(sel => {
        sel.addEventListener('change', applyFilters);
      });
    }
  }

  // Hero search
  const searchBtn = document.getElementById('hero-search-btn');
  if (searchBtn) searchBtn.addEventListener('click', heroSearch);

  // Enquiry form
  const form = document.getElementById('enquiry-form');
  if (form) form.addEventListener('submit', handleEnquirySubmit);

  wireEnquireButtons();
});
