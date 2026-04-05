# [FILL: Your Name] — AI Engineer Portfolio

A clean, professional academic portfolio website for PhD applications and research scientist positions.

## Setup

1. **Fill in your details** — search for `[FILL:` across all HTML files and replace every placeholder.
2. **Add your photo** — place `photo.jpg` in `assets/images/` and uncomment the `<img>` tag in `index.html`.
3. **Add your CV PDF** — place it in `assets/documents/` and update the filename in `cv.html` and `index.html`.
4. **Deploy to GitHub Pages** — push to a repo named `yourusername.github.io`.

## File Structure

```
portfolio/
├── index.html          Home / About
├── projects.html       Research & Projects
├── publications.html   Papers & Preprints
├── blog.html           Medium Blog Posts
├── cv.html             Curriculum Vitae
├── contact.html        Contact Form
├── css/style.css       All styles
├── js/main.js          All interactivity
├── assets/
│   ├── images/         Photos, thumbnails
│   └── documents/      CV PDF
└── README.md
```

## Customization Checklist

- [ ] Replace all `[FILL: ...]` placeholders in every `.html` file
- [ ] Add professional photo to `assets/images/photo.jpg`
- [ ] Add CV PDF to `assets/documents/`
- [ ] Update social links (GitHub, LinkedIn, Google Scholar, Medium)
- [ ] Add real project cards, publications, and blog posts
- [ ] Set up contact form backend (Formspree / EmailJS / Netlify Forms)
- [ ] Test on mobile and desktop
- [ ] Deploy to GitHub Pages

## Contact Form

The form in `contact.html` is client-side only by default.
To make it functional, integrate one of:
- [Formspree](https://formspree.io) — add `action` URL and `method="POST"` to the form
- [EmailJS](https://www.emailjs.com) — configure in `js/main.js`
- Netlify Forms — add `netlify` attribute if hosting on Netlify
