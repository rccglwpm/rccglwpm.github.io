# Content update guide

The website is intentionally easy to maintain without a CMS.

## The main file to edit

Open `assets/js/site-data.js`. This contains:

- Church contact details
- Social links
- Service schedule
- Ministries
- Message/sermon cards
- Event cards
- Form and newsletter integration placeholders
- Giving URL placeholder

## Replace image placeholders

The placeholder SVG files are under `assets/images/`. You can replace them with JPG, PNG, WebP or AVIF files. Then update the corresponding path in `index.html` or `assets/js/site-data.js`.

Recommended sizes:

- Hero: 1920 × 1200 or larger, landscape
- Pastor: 1000 × 1250 portrait
- Ministry cards: 1200 × 750 landscape
- Sermon thumbnail: 1280 × 720
- Open Graph sharing image: 1200 × 630, preferably PNG/JPG

Use church-owned or appropriately licensed images and add meaningful `alt` text.

## Adding a real event

In `assets/js/site-data.js`, replace an object in `events`:

```js
{
  month: 'SEP',
  day: '13',
  title: 'Example event title',
  text: 'Short event description.',
  type: 'Church-wide'
}
```

## Connect the contact form

Set `links.formEndpoint` to a Formspree, Getform or other church-approved endpoint. Until then, the form safely opens the visitor's email application addressed to `rccglwpm@gmail.com`.

If a form provider is introduced, update the Privacy Notice.

## Giving

Set `links.giving` only after the church has approved the payment page. Never place raw secret keys in this repository. Public payment URLs are fine; private API secrets are not.

## Deploying to GitHub Pages

1. Create a GitHub repository.
2. Upload all project files to the repository root.
3. Push to the `main` branch.
4. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
5. The included `.github/workflows/deploy-pages.yml` workflow publishes the site.
6. If using a custom domain, copy `CNAME.example` to `CNAME`, replace the text with the real domain, and configure the domain DNS.
7. Replace `YOUR-DOMAIN.example` in `robots.txt` and `sitemap.xml`.
