# PrepPath static frontend

PrepPath is an original, responsive frontend demonstration for a competitive-exam learning platform. It takes inspiration from common Indian EdTech patterns while using its own branding, copy and CSS illustrations. It is not affiliated with Testbook.

## Run it

Open `index.html` directly in a modern browser. No server, package manager or build step is required. Google Fonts and GSAP/ScrollTrigger are loaded from CDNs when an internet connection is available; local font and animation fallbacks keep the pages usable without them.

## Pages

- `index.html` — homepage and interactive learning sections
- `exams.html` — exam categories, search and category filters
- `test-series.html` — searchable, filterable test series
- `courses.html` — course listings and sample live classes
- `study-material.html` — study resources and category filters
- `current-affairs.html` — current-affairs articles and archives
- `login.html` — frontend-only mobile/OTP sign-in demonstration

## Project structure

```text
css/
  style.css
  responsive.css
  animations.css
js/
  theme.js
  data.js
  navigation.js
  interactions.js
  animations.js
  main.js
```

The site uses only HTML, CSS and vanilla JavaScript, with optional GSAP and ScrollTrigger CDN scripts. The color theme follows the device preference until the user picks a mode; that choice is saved for future visits. Illustrations are CSS-built and icons use text glyphs, so no local image assets or proprietary artwork are required. Search, filters, navigation menus, FAQ accordions, testimonial controls, announcement dismissal and the demo OTP flow run entirely in the browser. Authentication, payments and class joining are not connected to a backend.
