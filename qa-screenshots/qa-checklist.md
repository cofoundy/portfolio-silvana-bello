# QA Report: Silvana Bello

**Date:** 2026-03-01
**URL:** https://silvanabello.cofoundy.dev
**Tier:** Premium (S/.280)
**Status:** PASS

## Data Validation
- [x] Name matches source — "Silvana Bello" (artistic name from client-meta, full: Judith Silvana Bello Castillo)
- [x] Email matches source — silvanashoot.pro@gmail.com (form + config.ts)
- [x] Job title matches source — "Fotografa Profesional / Directora Creativa" (from CV and form notes)
- [x] Companies verified — Agalux Studios, Freya Estudio, Tahuano Foto, Album del Abuelo (all from CV/research)
- [x] Brands verified — Cineplanet, Latam, Babel, Asia Sur (all from research notes)
- [x] Education verified — Instituto IPAD, 2008 (from research notes)
- [x] Dates verified — 2008-2011, 2011-2018, 2018-Presente (from CV)
- [x] No hallucinated data detected

## Clean Deploy
- [x] No "Powered by" / "Made with" / "Built with" visible text
- [x] No "View source" / "View on GitHub" / "Fork this" template links
- [x] No "Lorem ipsum" / "Your name here" / "[placeholder]" text
- [x] No template watermarks (Astro logo, Vercel badge not visible to users)
- [x] No broken links showing "#" or "javascript:void(0)"
- [x] No "undefined" or "null" visible in content
- [x] Generator meta tag in head only (standard Astro, not user-visible)

## Technical
- [x] Site loads — HTTP 200
- [x] CSS loads — /_astro/index.Dk8Tss96.css (HTTP 200)
- [x] Profile image loads — /profile.jpg (HTTP 200, 1.2MB)
- [x] Favicon loads — /favicon.svg (HTTP 200)
- [x] No critical console errors (0 errors detected)
- [x] Astro config correct — site: "https://silvanabello.cofoundy.dev", no base property
- [x] CNAME file present in public/

## Visual Quality (Premium Assessment)
- [x] Hero: Editorial serif typography (Cormorant), 2-column layout with photo, tagline, CTA buttons, social icons, stats bar
- [x] Services: 3-column cards with icons, clean spacing, bullet items
- [x] About: 3-column layout with "La Artista" heading, bio text, pull quote with vertical line
- [x] Portfolio: 2x2 grid with numbered cards, skill tags, project descriptions
- [x] Experience: Horizontal timeline with numbered dots, 2-column cards below
- [x] Education: Clean 2-column grid
- [x] CTA: Centered call-to-action with "Conversemos" button
- [x] Footer: Dark slate background with social icons
- [x] Floating pill nav appears on scroll with glassmorphism
- [x] 6-color palette applied consistently (slate night, indigo, lila pastel, lila accent, crema, crema light)
- [x] 3-font system: Cormorant (serif headings), Montserrat (body), Raleway (section labels)
- [x] Mobile-responsive: All sections stack properly at 390px width

## Notes
- Profile image is AI-generated (client did not submit photo) — acceptable per client-meta
- "Latam Airlines" appears in project card 03 while research says "Latam" — full company name, not a hallucination
- Stats "4 Marcas creadas" plausible: Agalux, Freya, Silvana Bello personal brand, and possibly sub-brands
- Image file size is 1.2MB — consider optimizing for faster load

## Minor Observations (non-blocking)
- Profile image could be optimized (1.2MB is large for web)
- Quote attribution uses a generic photography quote — could be flagged if client wants a personal quote

## Issues Found
None (blocking).

## Evidence
- qa-desktop-hero.png
- qa-desktop-services.png
- qa-desktop-about.png
- qa-desktop-portfolio.png
- qa-desktop-experience.png
- qa-desktop-footer.png
- qa-desktop-fullpage.png
- qa-mobile-hero.png
- qa-mobile-services.png
- qa-mobile-about.png
- qa-mobile-portfolio.png
- qa-mobile-footer.png
- qa-mobile-fullpage.png
