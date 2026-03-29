# Livluv Consulting - Mediakit Website

## Overview
A bilingual (English + Hebrew) static website for **Livluv Consulting** (ליבלוב ייעוץ ארגוני), a business/strategy consulting agency. Hosted on GitHub Pages.

- **Live URL:** https://ofirtessler.github.io/mediakit-website/
- **Repo:** https://github.com/OfirTessler/mediakit-website
- **Branch:** `main` (deployed from root)
- **Stack:** Plain HTML / CSS / JS — no frameworks, no build tools

---

## Folder Structure

```
/
├── index.html          # Homepage
├── services.html       # Services page (4 detailed service sections)
├── about.html          # About page (story, team, timeline)
├── contact.html        # Contact page (form, FAQ, info cards)
├── css/
│   └── style.css       # Single stylesheet for the entire site
├── js/
│   └── main.js         # Language toggle, mobile menu, animations
└── images/
    ├── profile.jpg             # Livluv's profile photo (used in index + about)
    ├── team-livluv.jpg         # Livluv team card photo (about page)
    ├── team-esref.jpg          # Esref Tek team card photo
    ├── team-shrek.jpg          # Shrek team card photo
    ├── team-trump.jpg          # Trump team card photo
    ├── logo.jpg                # Logo image (not currently in use on site)
    └── (source originals with spaces in filenames — not tracked in git)
```

---

## What Each File Does

### `index.html` (Homepage)
- **Navbar** — text logo "Livluv Consulting", nav links, language toggle (EN/HE)
- **Hero** — full-height dark gradient section with headline, subtitle, CTA button
- **CTA Banner** — teal gradient call-to-action strip
- **Services Grid** — 4 cards (Business Strategy, Operational Excellence, Digital Transformation, Financial Advisory)
- **Stats Bar** — dark navy bar with 4 animated stats (gold numbers)
- **About Section** — profile photo + text description with "Learn More" button
- **Social Proof** — client testimonials section
- **Contact Form** — name, email, message fields
- **Footer** — brand name, links, social icons, copyright

### `services.html` (Services Page)
- **Page Hero** — dark gradient header with title
- **4 Service Detail Sections** — alternating white/light-teal backgrounds, each with:
  - Icon badge, title, description
  - Key Benefits list (checkmarks)
  - 4-step Process (numbered gold circles)
  - Visual placeholder sidebar
- **CTA Banner** — bottom call-to-action

### `about.html` (About Page)
- **Page Hero** — dark gradient header
- **Our Story** — profile photo + company narrative text
- **Mission & Vision** — 2 cards side by side
- **Values** — 4 value cards (Integrity, Impact, Partnership, Innovation) with gold numbering
- **Team** — 4 member cards with circular photos:
  1. **Livluv** — Founder & CEO
  2. **Esref Tek** — Head of Operations
  3. **Shrek** — Digital Strategy Lead
  4. **Trump** — Financial Advisor
- **Timeline** — milestones from 2000 to 2025 (gold dots/year badges)
- **CTA Banner**

### `contact.html` (Contact Page)
- **Page Hero**
- **3 Info Cards** — phone, email, location
- **Contact Form** — with service dropdown, alongside sidebar (hours, social links, fast response note)
- **Map Placeholder**
- **FAQ Accordion** — 5 expandable questions
- **CTA Banner**

### `css/style.css`
- All styles in one file, organized by section with comment headers
- CSS custom properties (variables) at the top for theming
- RTL support via `[dir="rtl"]` selectors
- Responsive breakpoints at 768px and 1024px
- Scroll animations via `.animate-in` class

### `js/main.js`
- **Language toggle** — swaps `data-en`/`data-he` attribute values, flips `dir` attribute on `<html>`, saves preference to `localStorage`
- **Mobile hamburger menu** — toggles `.open` class on navbar
- **Active nav link** — highlights current section on scroll
- **Contact form handler** — demo mode (checks for Formspree placeholder `YOUR_FORM_ID`)
- **FAQ accordion** — click to expand/collapse with `max-height` transitions
- **Scroll animations** — `IntersectionObserver` adds `.visible` class on elements entering viewport

---

## Design Choices

### Color Palette (from Livnat Tessler logo)
| Variable             | Value     | Usage                                         |
|----------------------|-----------|-----------------------------------------------|
| `--color-primary`    | `#2B3A4E` | Dark navy — headings, navbar text, dark sections |
| `--color-accent`     | `#6BBAB2` | Teal — icons, links, outline buttons, CTA gradients |
| `--color-accent-hover` | `#59A89F` | Darker teal — hover states                  |
| `--color-gold`       | `#C9A84C` | Gold — buttons, nav underlines, service card bars, section title underlines, process numbers, value numbers, team roles, timeline dots/years, form focus, footer hovers |
| `--color-light-bg`   | `#EFF8F6` | Soft teal tint — alternating section backgrounds |
| `--color-dark`       | `#1E2D3D` | Very dark navy — footer background            |
| `--color-text`       | `#2B3A4E` | Body text color                                |
| `--color-text-light` | `#5A6A7A` | Muted text — subtitles, descriptions           |
| `--color-border`     | `#D5E0DA` | Soft border color                              |

### Fonts
- **English:** Inter (Google Fonts)
- **Hebrew:** Heebo (Google Fonts)

### Icons
- Font Awesome 6 (CDN)

### Layout Patterns
- Max-width container for content centering
- CSS Grid for card layouts (4-column on desktop, stacks on mobile)
- `border-radius: 12px` (`--radius`) on cards and images
- Subtle box shadows (`--shadow-sm/md/lg`) for depth
- Gold underline on section titles (`border-bottom: 3px solid var(--color-gold)`)

### Gradients
- Hero / Page Hero: `linear-gradient(135deg, #2B3A4E 0%, #1E2D3D 60%, #253847 100%)`
- CTA Banner: `linear-gradient(135deg, #6BBAB2 0%, #4A9E96 100%)`

---

## Bilingual / RTL Support

- Every text element has `data-en="..."` and `data-he="..."` attributes
- JS toggles between them and sets `<html dir="rtl">` for Hebrew
- CSS uses `[dir="rtl"]` selectors to flip paddings, text alignment, flex direction
- Language preference persists via `localStorage`

---

## User Preferences

- Non-technical user — does not know how to code
- Prefers being told what's happening step by step
- Hard refresh reminders needed after each deploy (browser caching)
- Brand name: **Livluv Consulting** (EN) / **ליבלוב ייעוץ ארגוני** (HE)
- Images with spaces in filenames must be copied to clean names (e.g., `team-livluv.jpg`) because the simple Node preview server doesn't handle spaces
- Contact form uses Formspree placeholder (`YOUR_FORM_ID`) — not connected yet
- Logo image exists (`logo.jpg`) but is currently **not displayed** on the site (text logo used instead)
- Profile photo source: `Livluv updated profile.jpeg` (latest version)

---

## Hosting & Deployment

- GitHub Pages from `main` branch, root folder
- Push to `main` = auto-deploy (takes ~1 min)
- `gh` CLI is **not installed** — use `git` commands directly
- Preview server: inline Node.js http server (configured in `.claude/launch.json`) because `npx serve` fails due to spaces in the Windows path (`C:\Program Files\nodejs\npx`)

---

## Git Notes

- Image source files with spaces (e.g., `Livluv My Photo.jpeg`, `With Esref Tek.jpeg`) are **untracked** — only the clean-named copies are committed
- CRLF warnings appear on Windows but are harmless
