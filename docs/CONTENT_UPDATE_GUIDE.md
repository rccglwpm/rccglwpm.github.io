# Content update guide

The website is deliberately designed so routine content changes do not require a CMS or a framework build process.

## 1. Central configuration

Open `assets/js/site-data.js`. It contains:

- Church contact details and time zone
- Social, YouTube, directions and EvaeXtra check-in links
- Recurring service schedule
- Ministries
- Gallery slides
- Sermon/message links
- Events
- Giving URL
- Optional form endpoint

## 2. Service times and countdown

Each service includes:

```js
{
  weekday: 0,
  day: 'Sunday',
  start: '10:00',
  time: '10:00 AM',
  title: 'Sunday Worship',
  // ...
}
```

`weekday` uses JavaScript numbering: Sunday `0`, Monday `1`, Tuesday `2`, Wednesday `3`, Thursday `4`, Friday `5`, Saturday `6`.

`start` must use 24-hour `HH:MM` format because the intelligent countdown reads it. `time` is the friendly version displayed to visitors.

The calculation is fixed to `Europe/London`, so a visitor abroad still sees the correct Middlesbrough service time and BST/GMT changes are handled automatically.

## 3. EvaeXtra attendance link

Set this once under `links`:

```js
checkin: 'https://evaextra.com/checkin'
```

The same configured URL is reused across the site. The HTML also contains direct fallback `href` values so the attendance link still works if JavaScript fails.

## 4. Gallery

Add, remove or reorder entries in `siteData.gallery`:

```js
{
  image: 'assets/images/web/example.webp',
  alt: 'Meaningful description of the photograph',
  eyebrow: 'Community',
  title: 'A short gallery headline',
  text: 'One concise supporting sentence.'
}
```

The slideshow advances every six seconds when motion is allowed. It pauses on hover/focus, offers pause/play controls, supports arrow keys and pointer swipes, and honours `prefers-reduced-motion`.

## 5. Photographs

The source photographs are retained under `assets/images/`. The optimised copies used by the website are in `assets/images/web/`.

Recommended display assets:

- Hero: approximately 1800 px on the longest edge
- Gallery / ministry: approximately 1400–1800 px on the longest edge
- WebP format for photographic content
- Keep quality high enough for faces and textural detail without shipping multi-megabyte originals

Always use church-owned or properly authorised images. Be particularly careful about consent and safeguarding considerations for images of children and young people.

## 6. Events

The site intentionally shows a social-media follow-up when `events` is empty, rather than inventing dates.

Add an approved event like this:

```js
{
  month: 'SEP',
  day: '13',
  title: 'Event title',
  text: 'Short approved description.',
  type: 'Church-wide'
}
```

## 7. Contact form

`links.formEndpoint` is empty by default. In that state, the form opens the visitor's email client and the website does not store the submission.

If the church adopts a hosted form provider, set the approved endpoint and update `privacy.html` before publishing the change. Never commit API secrets or private keys to a public GitHub repository.

## 8. Giving

Set `links.giving` only after an approved public payment/giving URL is available. Do not place bank credentials, API secrets or private payment keys in this repository.

## 9. Privacy and cookies

At present the site deliberately avoids analytics, advertising trackers and persistent browser storage. The gallery and countdown need no cookies. Third-party services are linked rather than embedded.

Reassess privacy/cookie requirements before adding Google Analytics, Meta Pixel, embedded YouTube/Maps, advertising tags, hosted chat widgets, donation widgets or similar technologies.

## 10. Deploying to GitHub Pages

1. Keep the project at the repository root.
2. Push to `main`.
3. In **Settings → Pages**, choose **GitHub Actions** under Build and deployment.
4. `.github/workflows/deploy-pages.yml` uploads and deploys the static site.
5. `CNAME` currently contains `rccglwpm.org.uk`; ensure DNS matches the GitHub Pages custom-domain configuration.
6. Test both the GitHub Pages URL and custom domain after deployment.
