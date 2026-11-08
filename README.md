# ZEXUNA — Technology Without Limits

Official website, digital brand platform, and Google Knowledge Panel foundation for **ZEXUNA**, an Indian technology company founded and led by **Maddisetti Hema Harsha (Founder & CEO)**.

Engineered with React 19, TypeScript, Tailwind CSS v4, and Vite for performance, accessibility (WCAG AA), and deep semantic search engine discoverability.

---

## 🏢 Official Company Information

- **Company / Brand**: ZEXUNA
- **Tagline**: *Technology Without Limits.*
- **Founder & CEO**: Maddisetti Hema Harsha
- **Country / Base**: India (serving businesses worldwide)
- **Industry**: Technology
- **Core Technology Services**:
  1. Website Development
  2. Web Application Development
  3. Software Development
  4. Digital Solutions
  5. Technology Services
- **Official Email**: official.zexuna@gmail.com
- **Official Instagram**: [@zexuna_official](https://www.instagram.com/zexuna_official/)
- **Canonical Domain**: `https://zexuna.com/`

---

## 🔍 Google Knowledge Panel & SEO Implementation

### 1. Semantic Schema.org Structured Data (JSON-LD)
The platform embeds full Schema.org knowledge graph graphs (`@graph`) in `index.html` and updates them dynamically per view via `SEOHead`:
- **`Organization`**: Declares legal name, alternate names (`ZEXUNA Official`, `ZEXUNA Technology`, `ZEXUNA India`), canonical URL, logo image object, official email, slogan, address (India/IN), areaServed (India, Worldwide), founder relationship (`@id: #founder`), and `knowsAbout` topics.
- **`Person` (Founder Profile)**: Identifies **Maddisetti Hema Harsha**, Founder & CEO, linked via `worksFor: #organization`, nationality (India), official email, and official Instagram profile.
- **`WebSite`**: Declares canonical search authority and publisher identity.
- **`BreadcrumbList`**: Structured breadcrumb paths across subviews (`Home > Our Founder`, `Home > Company Updates`, etc.).
- **`FAQPage`**: Formats verified answers to high-intent Google search queries for Rich Snippet eligibility.

### 2. Natural Optimization for Target Search Queries
The platform is structured to answer organic search intent without keyword stuffing:
- `ZEXUNA` & `ZEXUNA Official`
- `ZEXUNA Technology` & `ZEXUNA India`
- `ZEXUNA Founder` & `Maddisetti Hema Harsha ZEXUNA`
- `ZEXUNA Web Development` & `ZEXUNA Software Services`

### 3. Dedicated Company Identity Pages
1. **About ZEXUNA (`#/about`)**: Corporate identity, mission, engineering values, and interactive Knowledge Graph entity inspector.
2. **Our Founder (`#/founder`)**: Official, verified biography of Maddisetti Hema Harsha (Founder & CEO), technical architecture background, operating principles, and direct contact. *No fabricated awards or rankings; completely authentic.*
3. **Our Services (`#/services`)**: Deep breakdown of the 5 core services with architectural specifications and deliverables.
4. **Our Projects (`#/projects`)**: Interactive showcase clearly categorizing completed builds and demonstration concepts with technical blueprints.
5. **Company Updates (`#/updates`)**: Public announcements, engineering logs, and verified company milestones.
6. **Contact ZEXUNA (`#/contact`)**: Direct client inquiry channel with validation, 24h response SLA, and mailto fallback to `official.zexuna@gmail.com`.

### 4. Technical SEO Assets
- **`robots.txt`** (`/public/robots.txt`): Fully permissive crawl directives with canonical XML sitemap location.
- **`sitemap.xml`** (`/public/sitemap.xml`): Valid XML sitemap covering all canonical views with `lastmod`, `changefreq`, and `priority`.
- **OpenGraph & Twitter Cards**: High-fidelity social preview cards with logo, branded titles, and meta descriptions.
- **Canonical URL Tagging**: Strict `rel="canonical"` tag management.
- **WCAG AA Accessibility**: High-contrast typography, semantic landmarks (`<header>`, `<main>`, `<article>`, `<nav>`, `<footer>`), keyboard navigation, visible focus rings, and `prefers-reduced-motion` compliance.

---

## 📋 Google Integration & Verification Guide

### Step 1: Google Search Console Setup
1. Open [Google Search Console](https://search.google.com/search-console).
2. Add property `https://zexuna.com/` (URL prefix or Domain property).
3. Verify ownership via HTML file upload to `public/`, DNS TXT record on your domain registrar, or HTML meta tag in `index.html`.

### Step 2: XML Sitemap Submission
1. In Search Console, navigate to **Sitemaps** in the left sidebar.
2. Submit `sitemap.xml`.
3. Confirm status returns **Success** and all URLs are discovered.

### Step 3: Structured Data & Rich Results Validation
- **Google Rich Results Test**: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
  - Test URL `https://zexuna.com/` to verify Organization and FAQPage schemas.
- **Schema.org Validator**: [https://validator.schema.org/](https://validator.schema.org/)
  - Verify zero syntax errors on `@graph` nodes.

### Step 4: URL Inspection & Indexing Request
1. Enter `https://zexuna.com/` into the Search Console URL Inspection bar.
2. Click **Request Indexing**.

> **Important Knowledge Panel Note**: Google independently determines when to generate a Knowledge Panel based on entity authority, public citations, consistent digital profiles, and structured data. No service can guarantee an automated Knowledge Panel. ZEXUNA provides the full technical and semantic foundation to maximize entity understanding by Google crawlers.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/) with `@tailwindcss/vite`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Motion](https://motion.dev/) + Native IntersectionObserver
- **Testing**: Node.js Native Test Runner (`node:test`, `node:assert`) + `tsx`

---

## 💻 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

### Running Tests

```bash
npm test
```

### Production Build

```bash
npm run build
```

---

## 🌐 Deployment Instructions

- **Cloudflare Pages / Vercel / Netlify**: Build command `npm run build`, output directory `dist`.
- **Single Page Application Rewrites**: Ensure your hosting provider routes requests to `index.html` (e.g. Cloudflare Pages SPA rules or `_redirects` file).

---

## 📧 Contact & Leadership

- **Founder & CEO**: Maddisetti Hema Harsha
- **Official Business Email**: official.zexuna@gmail.com
- **Instagram**: [@zexuna_official](https://www.instagram.com/zexuna_official/)
- **Location**: India
- **Tagline**: *Technology Without Limits.*

---

© ZEXUNA. All rights reserved.
