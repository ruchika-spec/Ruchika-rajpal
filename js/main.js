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

// ===== DESTINATION DATA =====
const DESTINATIONS = {
  Bali: {
    flag: '🇮🇩', tagline: 'Temples, rice terraces & world-class beaches',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400&q=80',
    visa: 'Visa on Arrival (Free)', bestTime: 'Apr – Oct', currency: 'IDR (Rupiah)', flight: '~4.5 hrs from Bangalore',
    why: [
      { icon: '🛕', title: 'Sacred Temples', desc: 'Tanah Lot, Uluwatu and Besakih — Bali\'s temples are breathtakingly beautiful at sunset.' },
      { icon: '🌿', title: 'Rice Terraces', desc: 'Ubud\'s UNESCO-listed Tegallalang terraces offer stunning views and photo ops.' },
      { icon: '🏄', title: 'Beach & Nightlife', desc: 'Seminyak and Kuta beaches offer world-class surfing and vibrant sunset bars.' },
    ]
  },
  Maldives: {
    flag: '🇲🇻', tagline: 'Overwater villas, crystal lagoons & powder-white beaches',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1400&q=80',
    visa: 'Visa on Arrival (Free)', bestTime: 'Nov – Apr', currency: 'MVR / USD accepted', flight: '~3 hrs from Bangalore',
    why: [
      { icon: '🏝️', title: 'Overwater Villas', desc: 'Wake up to turquoise water right below your villa — the quintessential Maldives experience.' },
      { icon: '🤿', title: 'World-Class Diving', desc: 'Among the world\'s top snorkeling and diving destinations with pristine coral reefs.' },
      { icon: '🌅', title: 'Ultimate Romance', desc: 'Ranked the world\'s best honeymoon destination year after year — and for good reason.' },
    ]
  },
  Dubai: {
    flag: '🇦🇪', tagline: 'Futuristic skyline, desert adventures & luxury shopping',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=80',
    visa: 'Visa Required (Easy process, 3–4 days)', bestTime: 'Oct – Apr', currency: 'AED (Dirham)', flight: '~3 hrs from Bangalore',
    why: [
      { icon: '🏙️', title: 'Iconic Skyline', desc: 'Burj Khalifa, Palm Jumeirah, Frame — Dubai\'s architecture is unlike anything else on earth.' },
      { icon: '🐪', title: 'Desert Safari', desc: 'Dune bashing, camel rides, and a BBQ dinner under the stars — a must-do experience.' },
      { icon: '🛍️', title: 'World\'s Best Shopping', desc: 'From luxury malls to the historic Gold Souk — shoppers paradise for all budgets.' },
    ]
  },
  Singapore: {
    flag: '🇸🇬', tagline: 'Futuristic gardens, amazing food & family fun',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1400&q=80',
    visa: 'Visa Required (5-7 days)', bestTime: 'Feb – Apr', currency: 'SGD', flight: '~4 hrs from Bangalore',
    why: [
      { icon: '🌿', title: 'Gardens by the Bay', desc: 'The Supertrees and Cloud Forest are spectacular — especially after dark with the light show.' },
      { icon: '🎡', title: 'Sentosa Island', desc: 'Universal Studios, beaches, S.E.A. Aquarium — perfect for families and thrill-seekers.' },
      { icon: '🍜', title: 'Food Capital of Asia', desc: 'Hawker centres offer world-class food from every cuisine for just a few dollars.' },
    ]
  },
  Thailand: {
    flag: '🇹🇭', tagline: 'Temples, islands, street food & unbeatable value',
    heroImage: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1400&q=80',
    visa: 'Visa on Arrival (Free)', bestTime: 'Nov – Mar', currency: 'THB (Baht)', flight: '~3.5 hrs from Bangalore',
    why: [
      { icon: '⛩️', title: 'Ancient Temples', desc: 'Bangkok\'s Grand Palace and Chiang Mai\'s Doi Suthep are among Asia\'s most stunning.' },
      { icon: '🏝️', title: 'Island Paradise', desc: 'Phi Phi, Koh Samui and Krabi offer some of the world\'s most photogenic beaches.' },
      { icon: '🥢', title: 'Street Food Heaven', desc: 'Pad Thai for ₹50, fresh mango sticky rice, and the world\'s best street food scene.' },
    ]
  },
  Vietnam: {
    flag: '🇻🇳', tagline: 'Ha Long Bay, ancient towns & vibrant street food culture',
    heroImage: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1400&q=80',
    visa: 'E-Visa (USD 25)', bestTime: 'Feb – Apr, Aug – Oct', currency: 'VND (Dong)', flight: '~4.5 hrs from Bangalore',
    why: [
      { icon: '⛵', title: 'Ha Long Bay', desc: 'A UNESCO World Heritage Site — 1,600 limestone islands rising from emerald waters.' },
      { icon: '🏮', title: 'Hoi An Ancient Town', desc: 'One of the world\'s best-preserved trading ports, magical at night with lantern lights.' },
      { icon: '🏍️', title: 'Adventure & Culture', desc: 'From mountain treks to motorbike tours, Vietnam rewards curious travellers.' },
    ]
  },
  Mauritius: {
    flag: '🇲🇺', tagline: 'Volcanic mountains, white beaches & barefoot luxury',
    heroImage: 'https://images.unsplash.com/photo-1562601579-599dec564e06?w=1400&q=80',
    visa: 'Visa on Arrival (Free)', bestTime: 'May – Dec', currency: 'MUR (Rupee)', flight: '~6.5 hrs from Bangalore',
    why: [
      { icon: '🌊', title: 'Pristine Lagoons', desc: 'Le Morne and Belle Mare have some of the clearest, calmest waters in the Indian Ocean.' },
      { icon: '🌈', title: '7 Coloured Earths', desc: 'Chamarel\'s volcanic dunes create a natural rainbow — unlike anything in the world.' },
      { icon: '⛵', title: 'Catamaran Cruises', desc: 'Snorkeling, dolphin watching, and rum punches on the Indian Ocean — pure bliss.' },
    ]
  },
  Malaysia: {
    flag: '🇲🇾', tagline: 'Twin towers, Langkawi beaches & incredible diversity',
    heroImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1400&q=80',
    visa: 'Visa on Arrival (Free)', bestTime: 'Mar – Oct', currency: 'MYR (Ringgit)', flight: '~4 hrs from Bangalore',
    why: [
      { icon: '🏙️', title: 'Kuala Lumpur', desc: 'The Petronas Twin Towers and KLCC Park define one of Asia\'s most vibrant capitals.' },
      { icon: '🏝️', title: 'Langkawi Island', desc: 'Duty-free shopping, mangrove kayaking, and some of Southeast Asia\'s best beaches.' },
      { icon: '🍽️', title: 'Incredible Food', desc: 'Indian, Chinese, Malay and fusion cuisines collide to create Asia\'s most diverse food scene.' },
    ]
  },
  'Hong Kong': {
    flag: '🇭🇰', tagline: 'Neon skyline, hiking trails & the thrill of Asia\'s New York',
    heroImage: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=1400&q=80',
    visa: 'Visa on Arrival (Free, 14 days)', bestTime: 'Oct – Dec', currency: 'HKD', flight: '~5 hrs from Bangalore',
    why: [
      { icon: '🚡', title: 'Victoria Peak', desc: 'The Peak Tram and night skyline view are iconic bucket-list experiences.' },
      { icon: '🎢', title: 'Hong Kong Disneyland', desc: 'Perfectly sized Disney park — great for families and first-timers alike.' },
      { icon: '🌄', title: 'Nature + City', desc: 'Hike Dragon\'s Back in the morning and have dim sum in Central by afternoon.' },
    ]
  },
  Europe: {
    flag: '🌍', tagline: 'Paris, Swiss Alps, Rome — the grand tour of a lifetime',
    heroImage: 'https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=1400&q=80',
    visa: 'Schengen Visa (10–15 days)', bestTime: 'Apr – Jun, Sep – Oct', currency: 'EUR', flight: '~9 hrs from Bangalore',
    why: [
      { icon: '🗼', title: 'Paris & The Eiffel', desc: 'The City of Light, the Louvre, croissants at dawn — Paris never disappoints.' },
      { icon: '🏔️', title: 'Swiss Alps & Interlaken', desc: 'Paragliding, chocolate, and train journeys through some of Europe\'s most dramatic scenery.' },
      { icon: '🏛️', title: 'Rome & Vatican', desc: 'The Colosseum, Vatican City and the best gelato you\'ve ever tasted.' },
    ]
  },
};

// ===== FORMAT CURRENCY =====
function formatINR(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

// ===== BUILD PACKAGE CARD HTML (with detail link + discount) =====
function buildPackageCard(pkg) {
  const isAdminPkg = pkg.sellPrice !== undefined;
  const price = isAdminPkg ? pkg.sellPrice : pkg.price;
  const origPrice = isAdminPkg ? pkg.origPrice : 0;
  const destination = isAdminPkg ? pkg.destination : pkg.destination;
  const dur = isAdminPkg ? `${pkg.days}D / ${pkg.nights}N` : `${pkg.duration}D / ${pkg.nights}N`;
  const days = isAdminPkg ? pkg.days : pkg.duration;
  const image = isAdminPkg ? (pkg.cardImg || pkg.heroImg || pkg.image) : pkg.image;
  const badge = isAdminPkg ? pkg.badge : pkg.badge;
  const hot = isAdminPkg ? pkg.hot : pkg.hot;
  const highlights = isAdminPkg
    ? (pkg.highlights || []).slice(0,3).map(h => `<li class="pkg-highlight-item">${h}</li>`).join('')
    : pkg.highlights.map(h => `<li class="pkg-highlight-item">${h}</li>`).join('');
  const region = isAdminPkg ? destination : pkg.region;
  const pkgId = pkg.id || pkg.id;

  const badgeClass = hot ? 'pkg-badge pkg-badge-hot' : 'pkg-badge';
  const waMsg = encodeURIComponent(`Hi! I'm interested in the ${destination} package (${dur}). Please share more details.`);
  const disc = origPrice && price && origPrice > price ? Math.round((1-price/origPrice)*100) : 0;
  const rating = pkg.rating || 0;
  const bookedCount = pkg.bookedCount || 0;
  const ratingStars = rating ? '★'.repeat(Math.floor(rating)) + (rating % 1 >= 0.5 ? '½' : '') : '';
  const ratingHTML = rating ? `
    <div class="pkg-rating-row">
      <span class="pkg-stars">${ratingStars}</span>
      <span class="pkg-rating-val">${rating.toFixed(1)}</span>
      ${bookedCount ? `<span class="pkg-booked-badge">🔥 ${bookedCount.toLocaleString('en-IN')} booked</span>` : ''}
    </div>` : (bookedCount ? `<div class="pkg-rating-row"><span class="pkg-booked-badge">🔥 ${bookedCount.toLocaleString('en-IN')} booked</span></div>` : '');

  return `
    <div class="pkg-card" data-country="${destination}" data-price="${price}" data-days="${days}">
      <a href="package.html?id=${pkgId}" class="pkg-card-img-link">
        <div class="pkg-card-img">
          <img src="${image || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80'}" alt="${destination}" loading="lazy">
          ${badge ? `<span class="${badgeClass}">${badge}</span>` : ''}
          <span class="pkg-duration-badge">🕐 ${dur}</span>
        </div>
      </a>
      <div class="pkg-card-body">
        <div class="pkg-destination"><a href="package.html?id=${pkgId}" style="color:inherit;text-decoration:none">${destination}</a></div>
        <div class="pkg-country">📍 ${region}</div>
        ${ratingHTML}
        <ul class="pkg-highlights">${highlights}</ul>
        <div class="pkg-footer">
          <div class="pkg-price">
            ${origPrice && disc > 0 ? `<span class="pkg-price-original">₹${origPrice.toLocaleString('en-IN')}</span>` : ''}
            <span class="from">Starting from</span>
            <span class="amount">${formatINR(price)}</span>
            <span class="per">per person${disc > 0 ? ` <span class="pkg-discount-badge">${disc}% off</span>` : ''}</span>
          </div>
          <div class="pkg-actions">
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp" title="WhatsApp">💬</a>
            <a href="package.html?id=${pkgId}" class="btn btn-sm btn-primary">View Details</a>
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
  const email = document.getElementById('enq-email')?.value.trim() || '';
  const dest = document.getElementById('enq-destination')?.value || 'General';
  const travelDate = document.getElementById('enq-travel-date')?.value || '';
  const travellers = document.getElementById('enq-travellers')?.value || '';
  const budget = document.getElementById('enq-budget')?.value || '';
  const message = document.getElementById('enq-message')?.value.trim() || '';

  if (!name || !phone) {
    showToast('Please fill in your name and phone number.', 'error');
    return;
  }

  // Save lead to localStorage → auto-appears in admin dashboard
  try {
    const enquiries = JSON.parse(localStorage.getItem('hbv_enquiries') || '[]');
    enquiries.unshift({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2),
      name, phone, email,
      destination: dest,
      travelDate, travellers, budget, message,
      status: 'new',
      notes: '',
      source: 'website',
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('hbv_enquiries', JSON.stringify(enquiries));
  } catch(err) { /* localStorage unavailable — continue without saving */ }

  const msg = encodeURIComponent(
    `Hi Holidays by Vismora! 🌍\n\nI'd like to enquire about a holiday package.\n\nName: ${name}\nPhone: ${phone}${dest !== 'General' ? '\nDestination: '+dest : ''}${travelDate ? '\nTravel Date: '+travelDate : ''}${travellers ? '\nTravellers: '+travellers : ''}${budget ? '\nBudget: '+budget : ''}${message ? '\n\nMessage: '+message : ''}\n\nPlease share more details!`
  );

  btn.textContent = 'Sending…';
  btn.disabled = true;

  setTimeout(() => {
    showToast('✅ Enquiry received! We\'ll contact you within 2 hours.', 'success');
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

// ===== DESTINATION PAGE =====
function initDestinationPage() {
  const params = new URLSearchParams(window.location.search);
  const destName = params.get('dest') || 'Bali';
  const data = DESTINATIONS[destName];
  if (!data) { document.title = 'Destination Not Found'; return; }

  document.title = `${destName} Holiday Packages — Holidays by Vismora`;
  document.getElementById('page-title').textContent = `${destName} Packages — Holidays by Vismora`;
  document.getElementById('page-desc').setAttribute('content', `Holiday packages to ${destName}. ${data.tagline}`);
  document.getElementById('dest-hero-img').src = data.heroImage;
  document.getElementById('dest-hero-img').alt = destName;
  document.getElementById('dest-hero-title').textContent = `${data.flag} ${destName}`;
  document.getElementById('dest-hero-tagline').textContent = data.tagline;
  document.getElementById('dest-breadcrumb').textContent = destName;
  document.getElementById('dest-why-name').textContent = destName;
  document.getElementById('dest-cta-name').textContent = destName;
  document.getElementById('dest-pkg-title').textContent = `All ${destName} Packages`;

  // Info bar
  document.getElementById('dest-info-inner').innerHTML = [
    { icon: '✈️', label: 'Visa for Indians', val: data.visa },
    { icon: '☀️', label: 'Best Time to Visit', val: data.bestTime },
    { icon: '💱', label: 'Local Currency', val: data.currency },
    { icon: '🛫', label: 'Flight Duration', val: data.flight },
  ].map(item => `
    <div class="dest-info-item">
      <div class="dest-info-icon">${item.icon}</div>
      <div>
        <div class="dest-info-label">${item.label}</div>
        <div class="dest-info-val">${item.val}</div>
      </div>
    </div>`).join('');

  // Why visit cards
  document.getElementById('why-dest-grid').innerHTML = data.why.map(w => `
    <div class="why-dest-card">
      <div class="why-dest-icon">${w.icon}</div>
      <div class="why-dest-title">${w.title}</div>
      <div class="why-dest-desc">${w.desc}</div>
    </div>`).join('');

  // Quick facts
  document.getElementById('quick-facts').innerHTML = [
    { icon: '🎒', label: 'Trip Type', val: 'Family, Couple, Group' },
    { icon: '⭐', label: 'Avg Rating', val: '4.9 / 5 from our travellers' },
    { icon: '📋', label: 'Includes', val: 'Stay, Transfers, Sightseeing' },
    { icon: '🛡️', label: 'Support', val: '24/7 during your trip' },
  ].map(f => `
    <div class="qf-item">
      <div class="qf-icon">${f.icon}</div>
      <div class="qf-text">
        <div class="qf-label">${f.label}</div>
        <div class="qf-val">${f.val}</div>
      </div>
    </div>`).join('');

  // Packages for this destination — try admin CMS packages first, fall back to built-in
  const allPkgs = getAllPackages();
  const destPkgs = allPkgs.filter(p => {
    const d = p.destination || p.country || '';
    return d.toLowerCase() === destName.toLowerCase();
  });
  document.getElementById('dest-pkg-count').textContent = destPkgs.length;
  if (destPkgs.length) {
    renderPackages(destPkgs, 'packages-grid');
  } else {
    document.getElementById('packages-grid').innerHTML = `
      <div class="no-results">
        <div class="icon">🌍</div>
        <h3>Packages coming soon</h3>
        <p>We're putting together amazing ${destName} packages. <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" style="color:var(--brand-mid)">WhatsApp us</a> for a custom quote.</p>
      </div>`;
  }
}

// ===== PACKAGE DETAIL PAGE =====
function initPackageDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const pkgId = params.get('id');
  const allPkgs = getAllPackages();
  const pkg = pkgId ? allPkgs.find(p => String(p.id) === pkgId) : allPkgs[0];
  if (!pkg) {
    document.getElementById('pkg-title').textContent = 'Package not found';
    return;
  }

  const isAdminPkg = pkg.sellPrice !== undefined;
  const price = isAdminPkg ? pkg.sellPrice : pkg.price;
  const origPrice = isAdminPkg ? pkg.origPrice : 0;
  const destination = pkg.destination || pkg.country;
  const dur = isAdminPkg ? `${pkg.days}D / ${pkg.nights}N` : `${pkg.duration}D / ${pkg.nights}N`;
  const disc = origPrice && price && origPrice > price ? Math.round((1-price/origPrice)*100) : 0;
  const saves = origPrice && price ? origPrice - price : 0;
  const image = isAdminPkg ? (pkg.heroImg || pkg.cardImg) : pkg.image;

  document.title = `${pkg.name || destination} — Holidays by Vismora`;
  document.getElementById('page-title').textContent = `${pkg.name || destination} — Holidays by Vismora`;
  document.getElementById('pkg-bc-dest').textContent = destination;
  document.getElementById('pkg-bc-name').textContent = pkg.name || destination;

  // Gallery
  const allImgs = [];
  if (image) allImgs.push(image);
  if (pkg.gallery) allImgs.push(...pkg.gallery);
  if (allImgs.length === 0) allImgs.push('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80');

  const mainImg = document.getElementById('gallery-main');
  mainImg.src = allImgs[0];
  mainImg.alt = pkg.name || destination;

  const thumbsEl = document.getElementById('gallery-thumbs');
  if (allImgs.length > 1) {
    thumbsEl.innerHTML = allImgs.map((src, i) => `
      <img src="${src}" class="pkg-gallery-thumb${i===0?' active':''}" alt="Photo ${i+1}" loading="lazy">`).join('');
    thumbsEl.querySelectorAll('.pkg-gallery-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        mainImg.src = thumb.src;
        thumbsEl.querySelectorAll('.pkg-gallery-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }

  // Header
  const badges = [];
  if (pkg.badge) badges.push(`<span class="pkg-badge">${pkg.badge}</span>`);
  if (pkg.hot) badges.push(`<span class="pkg-badge pkg-badge-hot">🔥 Hot Deal</span>`);
  if (disc > 0) badges.push(`<span class="pkg-discount-badge">${disc}% off</span>`);
  document.getElementById('pkg-badges').innerHTML = badges.join('');
  document.getElementById('pkg-title').textContent = pkg.name || `${destination} Package (${dur})`;
  document.getElementById('pkg-dest-line').innerHTML = `📍 ${destination} &nbsp;·&nbsp; 🕐 ${dur}`;

  // Rating & social proof below title
  const ratingEl = document.getElementById('pkg-detail-meta');
  if (ratingEl) {
    const ratingStars = pkg.rating ? '★'.repeat(Math.floor(pkg.rating)) + (pkg.rating % 1 >= 0.5 ? '★' : '') : '';
    let metaHTML = '';
    if (pkg.rating) {
      metaHTML += `<div class="pkg-rating-big">
        <span class="pkg-stars-big">${'★'.repeat(Math.floor(pkg.rating))}${'☆'.repeat(5-Math.floor(pkg.rating))}</span>
        <span class="pkg-rating-big-val">${Number(pkg.rating).toFixed(1)} / 5</span>
        <span style="font-size:13px;color:var(--text-mid)">Excellent</span>
      </div>`;
    }
    if (pkg.bookedCount) {
      metaHTML += `<div class="pkg-booked-big">🔥 ${pkg.bookedCount.toLocaleString('en-IN')} people have booked this package</div>`;
    }
    ratingEl.innerHTML = metaHTML;
    ratingEl.style.display = metaHTML ? 'flex' : 'none';
  }

  // Tabs wiring
  document.getElementById('pkg-tabs').addEventListener('click', e => {
    const tab = e.target.closest('.pkg-tab');
    if (!tab) return;
    document.querySelectorAll('.pkg-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.pkg-tab-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
  });

  // Overview
  const about = pkg.about || pkg.tagline || `${destination} is a stunning destination with incredible experiences waiting for you. Our package is carefully crafted to give you the best of ${destination} — stays, transfers, sightseeing and personal support included.`;
  document.getElementById('pkg-about-text').textContent = about;

  const hl = pkg.highlights || [];
  document.getElementById('pkg-highlights').innerHTML = hl.length
    ? hl.map(h => `<div class="hl-item"><span class="hl-icon">✦</span>${h}</div>`).join('')
    : '';

  // Itinerary
  const iti = pkg.itinerary || [];
  document.getElementById('pkg-itinerary').innerHTML = iti.length
    ? iti.map(d => `
        <div class="iti-item">
          <div class="iti-left"><span class="iti-day-num">Day ${d.day}</span><div class="iti-line"></div></div>
          <div class="iti-right">
            <div class="iti-title">${d.title || 'Day ' + d.day}</div>
            <div class="iti-desc">${d.desc || 'Detailed itinerary coming soon.'}</div>
          </div>
        </div>`).join('')
    : '<p style="color:var(--text-mid);font-size:14px">Detailed day-by-day itinerary will be shared upon enquiry.</p>';

  // Inclusions / Exclusions
  const inc = pkg.inclusions || ['Return airfare', 'Hotel accommodation', 'Daily breakfast', 'Airport transfers', 'Sightseeing as per itinerary'];
  const exc = pkg.exclusions || ['Visa fees', 'Travel insurance', 'Personal expenses & tips', 'Meals not mentioned'];
  document.getElementById('pkg-inclusions').innerHTML = inc.map(i => `<div class="inc-item"><span class="inc-icon">✅</span>${i.replace(/^✅\s*/,'')}</div>`).join('');
  document.getElementById('pkg-exclusions').innerHTML = exc.map(i => `<div class="exc-item"><span class="exc-icon">❌</span>${i.replace(/^❌\s*/,'')}</div>`).join('');

  // Terms
  const terms = pkg.terms || `• Package prices are per person on twin sharing basis.\n• Prices are valid subject to availability at time of booking.\n• Visa fees, if applicable, are not included unless stated.\n• Cancellation policy: 30+ days = 10% charge, 15–30 days = 25%, 0–15 days = 50%.\n• Travel insurance is strongly recommended.\n• Vismora reserves the right to amend the itinerary due to operational requirements.`;
  document.getElementById('pkg-terms').textContent = terms;

  // Sidebar pricing
  document.getElementById('pc-dest').textContent = destination;
  document.getElementById('pc-name').textContent = pkg.name || destination + ' Package';
  document.getElementById('pc-dur').textContent = `🕐 ${dur}`;
  if (origPrice && disc > 0) {
    document.getElementById('pc-original').innerHTML = `<span style="text-decoration:line-through">₹${origPrice.toLocaleString('en-IN')}</span>`;
  }
  document.getElementById('pc-price').textContent = formatINR(price);
  document.getElementById('pc-per').textContent = 'per person';
  const pBadge = document.getElementById('pc-badge');
  if (disc > 0) {
    pBadge.textContent = `You save ₹${saves.toLocaleString('en-IN')} (${disc}% off)`;
    pBadge.classList.remove('no-disc');
  } else {
    pBadge.classList.add('no-disc');
  }

  // Sidebar social proof (rating + booked)
  const sideProof = document.getElementById('sidebar-social-proof');
  if (sideProof) {
    let proofHTML = '';
    if (pkg.rating) {
      const stars = '★'.repeat(Math.floor(pkg.rating)) + '☆'.repeat(5-Math.floor(pkg.rating));
      proofHTML += `<div style="display:flex;align-items:center;gap:6px;margin-bottom:8px">
        <span style="color:#F59E0B;font-size:15px">${stars}</span>
        <span style="font-size:13px;font-weight:700;color:var(--text-dark)">${Number(pkg.rating).toFixed(1)}</span>
        <span style="font-size:12px;color:var(--text-mid)">/ 5 rating</span>
      </div>`;
    }
    if (pkg.bookedCount) {
      proofHTML += `<div style="display:flex;align-items:center;gap:6px;background:#FEF3C7;padding:7px 12px;border-radius:100px;font-size:12px;font-weight:700;color:#92400E">
        🔥 ${pkg.bookedCount.toLocaleString('en-IN')} travellers booked this
      </div>`;
    }
    if (proofHTML) { sideProof.innerHTML = proofHTML; sideProof.style.display = 'block'; }
  }

  // Sidebar highlights
  document.getElementById('sidebar-highlights').innerHTML = (pkg.highlights || ['Stays included', 'Transfers included', 'Sightseeing included']).slice(0,4).map(h => `<div>✦ ${h.replace(/^✅\s*/,'')}</div>`).join('');

  // WhatsApp CTA links: add package name to message
  const waMsg = encodeURIComponent(`Hi Holidays by Vismora! 🌍\n\nI'm interested in the ${pkg.name || destination} package (${dur}). Could you please share more details and availability?\n\nThank you!`);
  document.querySelectorAll('.pricing-ctas a[href*="wa.me"]').forEach(a => {
    a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;
  });

  // More packages (same destination, excluding current)
  const more = allPkgs.filter(p => {
    const d = p.destination || p.country || '';
    return d.toLowerCase() === destination.toLowerCase() && String(p.id) !== String(pkg.id);
  }).slice(0,3);
  document.getElementById('more-title').textContent = `More ${destination} Packages`;
  if (more.length) {
    renderPackages(more, 'more-packages');
  } else {
    const morePkgs = allPkgs.filter(p => String(p.id) !== String(pkg.id)).slice(0,3);
    renderPackages(morePkgs, 'more-packages');
    document.getElementById('more-title').textContent = 'Other Popular Packages';
  }
}

// ===== GET ALL PACKAGES (admin CMS cache + built-in fallback) =====
function getAllPackages() {
  try {
    const adminPkgs = JSON.parse(localStorage.getItem('hbv_packages') || '[]');
    const active = adminPkgs.filter(p => p.status === 'active');
    if (active.length > 0) return active;
  } catch(e) {}
  return packages;
}

// Fetch fresh packages from Supabase, update localStorage, re-render affected grids
async function refreshFromSupabase() {
  const SB_URL = 'https://iqpilmnrdclgdosrhwso.supabase.co';
  const SB_KEY = 'sb_publishable_C828WqfS3rzikcRyu68ybg_SazRcXLA';
  try {
    const res = await fetch(
      `${SB_URL}/rest/v1/packages?status=eq.active&order=created_at.desc`,
      { headers: { 'apikey': SB_KEY, 'Authorization': `Bearer ${SB_KEY}`, 'Accept': 'application/json' } }
    );
    if (!res.ok) return;
    const rows = await res.json();
    const pkgs = rows.map(r => ({
      id: r.id, name: r.name, destination: r.destination,
      country: r.destination, region: r.destination,
      days: r.days, duration: r.days, nights: r.nights,
      price: r.sell_price, origPrice: r.orig_price, sellPrice: r.sell_price,
      priceType: r.price_type,
      image: r.card_img || r.hero_img,
      heroImg: r.hero_img, cardImg: r.card_img,
      gallery: r.gallery || [], badge: r.badge, hot: r.hot, status: r.status,
      highlights: r.highlights || [], inclusions: r.inclusions || [],
      exclusions: r.exclusions || [], itinerary: r.itinerary || [],
      about: r.about, tagline: r.tagline, terms: r.terms,
      rating: r.rating, bookedCount: r.booked_count,
      createdAt: r.created_at,
    }));
    if (!pkgs.length) return;
    localStorage.setItem('hbv_packages', JSON.stringify(pkgs));
    // Re-render grids if they exist on this page
    const homeGrid = document.querySelector('#packages-grid[data-page="home"]');
    if (homeGrid) renderPackages(pkgs.slice(0, 6), 'packages-grid');
    const pkgsGrid = document.querySelector('#packages-grid[data-page="packages"]');
    if (pkgsGrid) applyFilters();
  } catch(e) { /* silent fail — site works from cache */ }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();

  // Hardcoded WhatsApp fill (backup for any remaining wa-link)
  document.querySelectorAll('.wa-link').forEach(el => {
    if (!el.href || el.href === '#' || el.href.endsWith('#')) {
      el.href = `https://wa.me/${WHATSAPP_NUMBER}`;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    }
  });
  document.querySelectorAll('.call-link').forEach(el => {
    el.href = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;
  });
  document.querySelectorAll('.phone-display').forEach(el => {
    el.textContent = PHONE_NUMBER;
  });

  // Detect page and run appropriate init
  const path = window.location.pathname;
  const isDestPage = path.includes('destination.html');
  const isPkgDetail = path.includes('package.html');

  if (isDestPage) {
    initDestinationPage();
    return;
  }

  if (isPkgDetail) {
    initPackageDetailPage();
    wireEnquireButtons();
    return;
  }

  // Homepage featured packages
  const featured = document.getElementById('packages-grid');
  if (featured) {
    const page = featured.dataset.page;
    if (page === 'home') {
      renderPackages(getAllPackages().slice(0, 6), 'packages-grid');
    } else if (page === 'packages') {
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

  // Refresh packages from Supabase in background — keeps site live even across browsers
  refreshFromSupabase();
});
