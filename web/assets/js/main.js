/* IMEN KIAN — interactions */

const U = (host, id, w = 800) =>
  `https://${host}.com/${id}?fm=jpg&q=75&w=${w}&auto=format&fit=crop`;
const IMG = (id, w) => U(id.startsWith('premium') ? 'plus.unsplash' : 'images.unsplash', id, w);

/* ---------- DATA ---------- */
const services = [
  ['پارتیشن شیشه‌ای', 'جداسازی شفاف فضاها با فریم دقیق', 'photo-1765371514743-45bd8e6c0a28'],
  ['پارتیشن اداری', 'راهکار شیشه‌ای فضاهای کاری', 'photo-1765371513492-264506c3ad09'],
  ['پارتیشن فریم‌لس', 'حداقل دید، حداکثر شفافیت', 'photo-1765371514743-45bd8e6c0a28'],
  ['پارتیشن فریم‌دار', 'ساختار مقاوم با فریم آلومینیومی', 'photo-1765371513492-264506c3ad09'],
  ['شیشه سکوریت', 'شیشه ایمن و مقاوم حرارتی', 'photo-1479293581560-aee98bb24f7f'],
  ['شیشه لمینت', 'ایمنی چندلایه در برابر شکست', 'photo-1488972685288-c3fd157d7c7a'],
  ['شیشه رنگی', 'تنوع رنگی برای طراحی خاص', 'photo-1525367922492-f15fe7b709cb'],
  ['شیشه دکوراتیو', 'طرح‌های تزئینی و معماری', 'premium_photo-1661915661139-5b6a4e4a6fcc'],
  ['درب شیشه‌ای', 'ورودی شفاف و مدرن', 'photo-1497366216548-37526070297c'],
  ['درب اتوماتیک', 'بازشوی خودکار و بی‌صدا', 'photo-1479839672679-a46483c0e7c8'],
  ['درب اتوماتیک شیشه‌ای', 'تلفیق شیشه و اتوماسیون', 'premium_photo-1680553491336-644d5955ea50'],
  ['نرده شیشه‌ای', 'ایمنی شفاف برای ارتفاع', 'photo-1691425700573-5e2e6e4f6157'],
  ['شیشه بالکن', 'محافظ شفاف بالکن', 'photo-1691425700573-5e2e6e4f6157'],
  ['بالکن شیشه‌ای', 'بستن بالکن با شیشه بدون دید', 'premium_photo-1680553492268-516537c44d91'],
  ['کابین دوش', 'حمام شیشه‌ای آب‌بند و مدرن', 'premium_photo-1676651424070-7da3b38d9aea'],
  ['جان‌پناه شیشه‌ای', 'محافظ ایمن و نامرئی', 'photo-1525367922492-f15fe7b709cb'],
  ['سازه‌های شیشه‌ای', 'ساختارهای معماری شیشه‌ای', 'premium_photo-1661915661139-5b6a4e4a6fcc'],
  ['پروژه‌های سفارشی', 'طراحی اختصاصی پروژه شما', 'photo-1554793000-245d3a3c2a51'],
];

const projects = [
  ['پروژه پارتیشن شیشه‌ای اداری', 'OFFICE PARTITION', 'تهران', 'اجرای پارتیشن فریم‌لس برای فضای اداری ۴۰۰ متری.', 'photo-1765371513492-264506c3ad09'],
  ['پروژه بالکن شیشه‌ای', 'GLASS BALCONY', 'اصفهان', 'بستن بالکن طبقات با شیشه لمینت و جان‌پناه.', 'photo-1691425700573-5e2e6e4f6157'],
  ['پروژه کابین دوش', 'SHOWER CABIN', 'شیراز', 'طراحی و نصب کابین دوش آب‌بند لوکس.', 'photo-1774876549411-52e4eaff626e'],
  ['پروژه درب اتوماتیک', 'AUTOMATIC DOOR', 'تهران', 'نصب درب اتوماتیک شیشه‌ای ورودی برج تجاری.', 'photo-1479839672679-a46483c0e7c8'],
];

const gallery = [
  ['partition', 'photo-1765371514743-45bd8e6c0a28', 700],
  ['office', 'photo-1765371513492-264506c3ad09', 900],
  ['autodoor', 'photo-1479839672679-a46483c0e7c8', 700],
  ['glassdoor', 'photo-1497366216548-37526070297c', 800],
  ['balcony', 'photo-1691425700573-5e2e6e4f6157', 900],
  ['railing', 'photo-1525367922492-f15fe7b709cb', 700],
  ['shower', 'premium_photo-1676651424070-7da3b38d9aea', 800],
  ['colored', 'photo-1479293581560-aee98bb24f7f', 700],
  ['decor', 'premium_photo-1661915661139-5b6a4e4a6fcc', 900],
  ['partition', 'photo-1765371514743-45bd8e6c0a28', 600],
  ['shower', 'photo-1774876549411-52e4eaff626e', 800],
  ['balcony', 'premium_photo-1680553492268-516537c44d91', 700],
];

/* ---------- RENDER SERVICES ---------- */
const sg = document.getElementById('servicesGrid');
sg.innerHTML = services.map(([t, d, id]) => `
  <article class="service-card">
    <img src="${IMG(id, 600)}" alt="${t}" loading="lazy" />
    <div class="service-body">
      <h3>${t}</h3>
      <p>${d}</p>
      <span class="service-link">مشاهده خدمت ←</span>
    </div>
  </article>`).join('');

/* ---------- RENDER PROJECTS ---------- */
document.getElementById('projectsTrack').innerHTML = projects.map(([t, type, city, desc, id]) => `
  <article class="project-card">
    <img src="${IMG(id, 700)}" alt="${t}" loading="lazy" />
    <div class="project-info">
      <p class="pc-type">${type}</p>
      <h3>${t}</h3>
      <p class="pc-city">${city}</p>
      <p class="pc-desc">${desc}</p>
      <span class="pc-link">مشاهده پروژه ←</span>
    </div>
  </article>`).join('');

/* ---------- RENDER GALLERY ---------- */
const gg = document.getElementById('galleryGrid');
gg.innerHTML = gallery.map(([cat, id, h]) => `
  <div class="gallery-item" data-cat="${cat}">
    <img src="${IMG(id, 700)}" alt="پروژه" loading="lazy" style="height:${h * 0.45}px" data-full="${IMG(id, 1400)}" />
  </div>`).join('');

/* ---------- GALLERY FILTER ---------- */
document.getElementById('galleryFilters').addEventListener('click', (e) => {
  const b = e.target.closest('.filter');
  if (!b) return;
  document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
  b.classList.add('active');
  const f = b.dataset.filter;
  document.querySelectorAll('.gallery-item').forEach(it => {
    it.classList.toggle('hide', !(f === 'all' || it.dataset.cat === f));
  });
});

/* ---------- LIGHTBOX ---------- */
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
document.getElementById('lbClose').addEventListener('click', () => lb.classList.remove('open'));
lb.addEventListener('click', (e) => { if (e.target === lb) lb.classList.remove('open'); });
gg.addEventListener('click', (e) => {
  const img = e.target.closest('.gallery-item img');
  if (!img) return;
  lbImg.src = img.dataset.full;
  lb.classList.add('open');
});

/* ---------- HEADER SCROLL ---------- */
const header = document.getElementById('siteHeader');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- SEARCH TOGGLE ---------- */
const sBox = document.getElementById('searchBox');
document.getElementById('searchToggle').addEventListener('click', (e) => {
  e.stopPropagation();
  sBox.classList.toggle('open');
  if (sBox.classList.contains('open')) sBox.querySelector('input').focus();
});
document.addEventListener('click', (e) => { if (!sBox.contains(e.target)) sBox.classList.remove('open'); });

/* ---------- MOBILE MENU ---------- */
const ham = document.getElementById('hamburger');
const mMenu = document.getElementById('mobileMenu');
ham.addEventListener('click', () => {
  const open = mMenu.classList.toggle('open');
  ham.classList.toggle('active', open);
  ham.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
mMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mMenu.classList.remove('open'); ham.classList.remove('active');
  document.body.style.overflow = '';
}));

/* ---------- HERO CAROUSEL ---------- */
const slides = document.querySelectorAll('.hero-slide');
const inds = document.querySelectorAll('.hero-indicator .ind');
let cur = 0;
const go = (i) => {
  slides[cur].classList.remove('active');
  inds[cur].classList.remove('active');
  cur = (i + slides.length) % slides.length;
  slides[cur].classList.add('active');
  inds[cur].classList.add('active');
};
inds.forEach((ind, i) => ind.addEventListener('click', () => go(i)));
let heroTimer = setInterval(() => go(cur + 1), 6000);
document.querySelector('.hero').addEventListener('mouseenter', () => clearInterval(heroTimer));
document.querySelector('.hero').addEventListener('mouseleave', () => { heroTimer = setInterval(() => go(cur + 1), 6000); });

/* ---------- BEFORE / AFTER SLIDER ---------- */
const ba = document.getElementById('baSlider');
const baBefore = document.getElementById('baBefore');
const baHandle = document.getElementById('baHandle');
let dragging = false;
const setBA = (x) => {
  const r = ba.getBoundingClientRect();
  let p = (x - r.left) / r.width;
  p = Math.max(0, Math.min(1, p));
  // RTL: before is on the right side; clip from left
  const pct = p * 100;
  baBefore.style.clipPath = `inset(0 0 0 ${pct}%)`;
  baHandle.style.left = `${pct}%`;
};
const onDown = (e) => { dragging = true; onMove(e); };
const onMove = (e) => {
  if (!dragging) return;
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  setBA(x);
};
const onUp = () => { dragging = false; };
ba.addEventListener('mousedown', onDown);
window.addEventListener('mousemove', onMove);
window.addEventListener('mouseup', onUp);
ba.addEventListener('touchstart', onDown, { passive: true });
window.addEventListener('touchmove', onMove, { passive: true });
window.addEventListener('touchend', onUp);
setBA(ba.getBoundingClientRect().width * 0.5);

/* ---------- CONTACT FORM ---------- */
const form = document.getElementById('contactForm');
document.querySelectorAll('.field input, .field select, .field textarea').forEach(el => {
  const field = el.closest('.field');
  const sync = () => field.classList.toggle('filled', !!el.value);
  el.addEventListener('input', sync); el.addEventListener('change', sync);
});
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formNote').hidden = false;
  form.reset();
  document.querySelectorAll('.field').forEach(f => f.classList.remove('filled'));
});
