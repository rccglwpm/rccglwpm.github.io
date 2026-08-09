# RCCG Living Water Middlesbrough — Modern GitHub Pages Website

A lightweight, responsive, accessible and GitHub-ready church website starter designed for **RCCG Living Water Middlesbrough, UK**.

## What is included

- Modern responsive homepage and navigation
- New visitor pathway / plan-a-visit section
- About, mission and values presentation
- Recurring service schedule
- Ministry directory rendered from one central data file
- Community care / outreach presentation
- Resident pastor section
- Sermon / YouTube section
- Event cards
- Giving section with safe placeholder rather than fabricated banking information
- Contact form with mail fallback and optional hosted-form endpoint
- Newsletter integration placeholder
- Directions link
- Social media links
- Privacy, safeguarding and accessibility starter pages
- SEO metadata, web manifest, sitemap and robots file
- GitHub Pages deployment workflow
- Local vector image placeholders — no stock-image licence dependency
- Public-source documentation and content update guide

## Design principles

The design uses a water-inspired visual language, deep navy, teal/aqua and warm gold accents. It is intentionally contemporary without feeling corporate, with a strong emphasis on welcome, community, worship and easy next steps.

## Quick start

No framework or package installation is required.

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Update church content

Start with:

- `assets/js/site-data.js`
- `docs/CONTENT_UPDATE_GUIDE.md`
- `docs/PUBLIC_INFORMATION_SOURCES.md`

## Important launch checklist

- Confirm 109B Marton Road is the correct current worship venue and separately confirm the registered/correspondence address.
- Replace all placeholder illustrations with authorised church photographs where desired.
- Obtain and add the official approved RCCG / parish logo rather than assuming logo usage rights.
- Replace the pastor placeholder portrait and placeholder welcome text.
- Confirm Sunday, Wednesday and Friday times before launch.
- Add approved event information.
- Add an approved online giving URL if required.
- Replace the safeguarding placeholder with the church's current approved policy and safeguarding contacts.
- Review the privacy notice against actual form, newsletter, analytics, livestream and payment services.
- Configure a real domain in `robots.txt`, `sitemap.xml` and optionally `CNAME`.
- Test keyboard navigation, mobile layouts and contact links after content changes.

## Public data provenance

The project uses current public church/social/Charity Commission information where it could be reasonably verified and uses explicit placeholders elsewhere. See `docs/PUBLIC_INFORMATION_SOURCES.md`.

## Technology

Plain HTML5, CSS3 and native ES modules. There is no build step, no JavaScript framework and no runtime dependency, keeping GitHub Pages deployment fast and inexpensive.

## Licence

Code in this starter is provided under the No Licence. Church names, logos, photographs, sermons and other ministry content remain subject to their respective ownership and permissions. All right reserved.
