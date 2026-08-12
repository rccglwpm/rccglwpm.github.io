# RCCG Living Water Middlesbrough — Modern GitHub Pages Website

A lightweight, responsive and accessible church website for **RCCG Living Water Middlesbrough, UK**, designed to deploy directly to GitHub Pages without a JavaScript framework or build step.

## What is included

- Modern responsive homepage and mobile navigation
- Real church photography with optimised WebP delivery copies
- Intelligent next-service countdown using the `Europe/London` time zone, including BST/GMT changes
- Recurring Sunday, Wednesday and Friday service schedule
- EvaeXtra attendance/check-in links throughout the visitor journey
- Accessible auto-advancing photo gallery with pause, arrows, dots, keyboard and swipe controls
- Reduced-motion support
- New visitor / plan-a-visit pathway
- Ministry directory rendered from one central data file
- Resident pastor, community, sermon and giving sections
- Honest event empty state rather than fabricated event information
- Contact form with email fallback and optional hosted-form endpoint
- Social media, YouTube and directions links
- Privacy & cookies, safeguarding and accessibility pages
- SEO metadata, canonical URL, JSON-LD, web manifest, sitemap and robots file
- GitHub Pages deployment workflow
- Persistent “Powered by evaextra.com” footer attribution

## Quick start

No package installation is required.

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

Do not test the site by double-clicking `index.html` and opening it as `file://...`; native ES modules are designed to be served over HTTP.

## Main content configuration

Start with:

- `assets/js/site-data.js`
- `docs/CONTENT_UPDATE_GUIDE.md`
- `docs/ENHANCEMENTS.md`

The central data file controls church contact details, services, ministries, gallery content, messages, external links and event data.

## Image strategy

The original photographs remain in `assets/images/`. Optimised website copies are stored in `assets/images/web/` and are used by the homepage. This keeps the original source files available while substantially reducing page weight.

When replacing a photograph, create an appropriately sized WebP version and update the relevant path in `index.html` or `assets/js/site-data.js`. Use meaningful alternative text and only publish photographs the church is authorised to use.

## Attendance / EvaeXtra

The attendance URL is configured once in `assets/js/site-data.js`:

```js
checkin: 'https://evaextra.com/checkin'
```

Links are placed in the main navigation, hero, service countdown, quick actions, visit section, connection area, footer and floating check-in control.

## Service countdown

Recurring service definitions live in `assets/js/site-data.js` and include a numeric weekday plus 24-hour `start` time. The countdown logic is in `assets/js/modules/services.js` and calculates dates in `Europe/London` rather than relying on the visitor's local time zone.

If a service time changes, update both `start` and the visitor-facing `time` value in the data file.

## Gallery

Gallery slides are configured in the `gallery` array in `assets/js/site-data.js`. Each item requires an image, alternative text, short eyebrow, title and supporting text.

The gallery automatically pauses for visitors who request reduced motion. It can also be controlled with pause/play, arrow keys, previous/next buttons, dots and touch/pointer swipes.

## Privacy and cookies

The current implementation does not add analytics, advertising cookies, tracking pixels or persistent browser storage. The countdown and gallery do not need cookies. External media and attendance services are linked rather than embedded. If analytics, tracking, embedded media, hosted forms or other third-party technologies are introduced, review `privacy.html` and the site's consent requirements before deployment.

## Important launch checklist

- Confirm all service times and venue details remain current.
- Confirm the church is authorised to publish every photograph used on the site, especially images containing children or young people.
- Replace or approve the current logo asset as appropriate.
- Add only approved and current event information.
- Add an approved giving URL if online giving is required.
- **Replace the safeguarding launch notice with the church's approved safeguarding policy and dedicated contacts.**
- Confirm final data-controller wording, retention arrangements and any processors in the privacy notice.
- Test navigation, keyboard use, reduced-motion behaviour, gallery, countdown and attendance links after content changes.
- Review the site after adding any analytics, livestream embeds, donation providers or hosted forms.

## GitHub Pages deployment

The repository includes `.github/workflows/deploy-pages.yml`.

1. Push the project to the `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push a change or manually run the **Deploy to GitHub Pages** workflow.
5. The existing `CNAME` is configured for `rccglwpm.org.uk`; ensure the domain's DNS records are correctly pointed at GitHub Pages before relying on the custom domain.

## Technology

Plain HTML5, CSS3 and native ES modules. There is no runtime dependency and no frontend framework, keeping the site straightforward to maintain and suitable for GitHub Pages.

## Licence and content rights

Code in this project is not automatically licensed for redistribution. Church names, logos, photographs, sermons and other ministry content remain subject to their respective ownership and permissions.
