# 🧠 AI Researcher Portfolio

A world-class academic portfolio website built for AI researchers and PhD students. Features a dark scholarly aesthetic with animated accents, and comes with a built-in admin dashboard for easy content management.

## ✨ Features

- **About Page** — Profile photo, bio, research interests, stats, news feed
- **Publications** — Organized by year with venue badges, author highlighting, and links (PDF/Code/arXiv/Video)
- **Projects** — Grid showcase with tech tags
- **Blog** — Markdown-based posts with image support and categories/tags
- **CV** — Education, experience, awards, skills, talks, service
- **Teaching** — Courses and mentoring
- **Contact** — All social links (GitHub, LinkedIn, Google Scholar, X/Twitter, Email, ORCID)
- **Admin Dashboard** — Generate content without touching code (`/admin/`)
- **Responsive Design** — Works beautifully on mobile, tablet, and desktop
- **Dark Theme** — Scholarly dark aesthetic with electric teal accents

## 🚀 Quick Start (Deploy to GitHub Pages)

### 1. Create Your Repository

- Go to GitHub → New Repository
- Name it `yourusername.github.io`
- Make it public

### 2. Upload These Files

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io
cd YOUR_USERNAME.github.io
# Copy all portfolio files into this directory
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

### 3. Enable GitHub Pages

- Go to Repository → Settings → Pages
- Source: Deploy from branch → `main` → `/ (root)`
- Save

### 4. Customize Your Info

1. **Profile Picture**: Rename your `picture.JPG` to `profile.jpg` and put it in `assets/img/`
2. **_config.yml**: Update your name, email, and social media usernames
3. **index.html**: Update your bio, university, advisor, research interests, news, and stats
4. **_pages/publications.html**: Add your real publications
5. **_pages/cv.html**: Fill in your real CV data
6. **_pages/contact.html**: Update your contact details

### 5. Push Changes

```bash
git add .
git commit -m "Personalize portfolio"
git push
```

Your site will be live at `https://yourusername.github.io`!

## 📝 How to Update Content

### Using the Admin Dashboard

1. Open `admin/index.html` in your browser (or visit `yoursite.com/admin/`)
2. Select the content type (Blog, Publication, News, etc.)
3. Fill in the form
4. Click **Generate**
5. Click **Copy**
6. Paste into the appropriate file
7. Push to GitHub

### Adding a Blog Post

1. Create a file in `_posts/` named `YYYY-MM-DD-your-title.md`
2. Add front matter and content:

```markdown
---
layout: post
title: "Your Post Title"
date: 2026-02-24
description: "Brief description"
categories: [deep-learning, tutorial]
tags: [transformers, LLMs]
image: /assets/img/blog/your-banner.jpg
---

Your markdown content here...

![Image description](/assets/img/blog/your-image.jpg)
```

3. Place blog images in `assets/img/blog/`

### Adding a Publication

Add the HTML block to `_pages/publications.html` under the correct year:

```html
<div class="pub-item">
  <div class="pub-venue">NeurIPS 2025 — Spotlight</div>
  <div class="pub-title">Your Paper Title</div>
  <div class="pub-authors"><span class="self">Your Name</span>, Co-author</div>
  <div class="pub-links">
    <a href="#" class="pub-link"><i class="fas fa-file-pdf"></i> PDF</a>
    <a href="#" class="pub-link"><i class="fas fa-code"></i> Code</a>
  </div>
</div>
```

### Adding News

Add inside the `<div class="stagger">` block in `index.html`:

```html
<div class="news-item">
  <div class="news-date">Feb 2026</div>
  <div class="news-content">
    🎉 Your news content here with <strong>HTML formatting</strong>!
  </div>
</div>
```

## 📁 File Structure

```
portfolio/
├── _config.yml              ← Site settings & social links
├── index.html               ← Home page (About, News, Featured Pubs)
├── _layouts/
│   ├── default.html         ← Base layout
│   ├── page.html            ← Standard page layout
│   └── post.html            ← Blog post layout
├── _includes/
│   ├── header.html          ← Navigation bar
│   └── footer.html          ← Footer with social links
├── _pages/
│   ├── publications.html    ← Full publications list
│   ├── projects.html        ← Project showcase
│   ├── blog.html            ← Blog index
│   ├── cv.html              ← Curriculum Vitae
│   ├── teaching.html        ← Teaching experience
│   └── contact.html         ← Contact info & social links
├── _posts/                  ← Blog posts (Markdown)
├── _bibliography/
│   └── papers.bib           ← BibTeX entries
├── assets/
│   ├── css/main.css         ← Stylesheet
│   ├── js/main.js           ← JavaScript (animations, nav)
│   └── img/
│       ├── profile.jpg      ← Your profile photo
│       └── blog/            ← Blog post images
├── admin/
│   └── index.html           ← Admin dashboard
├── Gemfile                  ← Jekyll dependencies
└── README.md
```

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/main.css`:
```css
:root {
  --accent: #00d4aa;       /* Main accent (teal) */
  --highlight: #6366f1;    /* Secondary (indigo) */
  --bg-primary: #0a0e17;   /* Background */
}
```

### Fonts
The site uses:
- **Playfair Display** — Headings (elegant serif)
- **Source Sans 3** — Body text (clean sans-serif)
- **JetBrains Mono** — Code blocks

Change in the `<link>` tag in `_layouts/default.html` and CSS variables.

## 📋 Social Links Checklist

Update these in `_config.yml`:
- [ ] `email`
- [ ] `github_username`
- [ ] `linkedin_username`
- [ ] `twitter_username`
- [ ] `scholar_userid`
- [ ] `orcid_id`

## License

MIT — Feel free to use and customize!
