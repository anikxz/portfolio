/* ============================================================
   AI Engineer Portfolio - Main JavaScript
   Vanilla JS only — no jQuery or heavy frameworks
   ============================================================ */

/* ── Mobile Navigation Toggle ─────────────────────────────── */
(function initNav() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // Close menu when a link is clicked
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Highlight active page in nav
  const current = location.pathname.split('/').pop() || 'index.html';
  menu.querySelectorAll('a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });
})();

/* ── Smooth Scroll for anchor links ───────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ── Expand/Collapse toggle (projects, abstracts) ─────────── */
// Delegated — works for dynamically rendered content too
document.addEventListener('click', function (e) {
  // Generic expand toggle
  if (e.target.matches('.expand-toggle')) {
    const content = e.target.nextElementSibling;
    if (!content) return;
    const open = content.classList.toggle('open');
    e.target.textContent = open
      ? e.target.dataset.less || '▲ Show less'
      : e.target.dataset.more || '▼ Show more';
  }

  // Abstract toggle
  if (e.target.matches('[data-abstract-toggle]')) {
    const id = e.target.dataset.abstractToggle;
    const el = document.getElementById(id);
    if (!el) return;
    const open = el.classList.toggle('open');
    e.target.textContent = open ? 'Abstract ▲' : 'Abstract ▼';
  }

  // BibTeX toggle
  if (e.target.matches('[data-bibtex-toggle]')) {
    const id = e.target.dataset.bibtexToggle;
    const el = document.getElementById(id);
    if (!el) return;
    const open = el.classList.toggle('open');
    e.target.textContent = open ? 'BibTeX ▲' : 'BibTeX';
  }
});

/* ── Copy BibTeX to clipboard ─────────────────────────────── */
document.addEventListener('click', function (e) {
  if (!e.target.matches('.bibtex-copy')) return;
  const pre = e.target.closest('pre');
  if (!pre) return;
  const text = pre.innerText.replace(/^Copy$/m, '').trim();
  navigator.clipboard.writeText(text).then(() => {
    const orig = e.target.textContent;
    e.target.textContent = 'Copied!';
    setTimeout(() => { e.target.textContent = orig; }, 1800);
  });
});

/* ── Project / Blog Filter ─────────────────────────────────── */
(function initFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const items  = document.querySelectorAll('[data-category]');

      items.forEach(item => {
        const cats = item.dataset.category.split(' ');
        const show = filter === 'all' || cats.includes(filter);
        item.style.display = show ? '' : 'none';
      });
    });
  });
})();

/* ── Contact Form (client-side only) ──────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    // TODO: Replace with actual form submission (Formspree, EmailJS, etc.)
    setTimeout(() => {
      btn.textContent = 'Message Sent!';
      form.reset();
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'Send Message';
      }, 3000);
    }, 1000);
  });
})();

/* ── Dark Mode Toggle (optional) ─────────────────────────── */
(function initDarkMode() {
  const btn = document.getElementById('darkModeToggle');
  if (!btn) return;

  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.body.classList.add('dark');

  btn.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    btn.textContent = dark ? '☀️' : '🌙';
  });
})();
