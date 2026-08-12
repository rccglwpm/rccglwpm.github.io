# August 2026 enhancement notes

## Review findings addressed

The uploaded project already had a strong visual direction and a useful lightweight architecture. The enhancement pass concentrated on preserving that design while improving visitor actions, authenticity, performance, accessibility and deployability.

Changes include:

- Added an intelligent recurring service countdown using Middlesbrough (`Europe/London`) time.
- Added contextual countdown states for the next gathering, starting soon and scheduled service time.
- Added EvaeXtra attendance/check-in actions throughout the main visitor journey.
- Added an accessible six-image gallery using the church's real photographs.
- Added richer motion, hover and reveal effects with reduced-motion fallbacks.
- Created optimised WebP versions of the supplied photographs while retaining originals.
- Replaced public-facing placeholder language where real content is available.
- Removed fabricated event examples from the live data and added an honest empty state.
- Replaced the non-functional newsletter form with real connection actions.
- Clarified the giving area so it does not imply an unconfigured payment service.
- Improved contact-form privacy messaging.
- Added the requested “Powered by evaextra.com” footer attribution.
- Added direct `href` fallbacks for important external actions so core links still work if JavaScript fails.
- Updated privacy and accessibility pages to match the implemented website.
- Kept safeguarding visibly marked as a launch item because a safeguarding lead/policy must not be invented.
- Added a real GitHub Pages deployment workflow that was described in the earlier README but absent from the uploaded project.

## Files most likely to be edited later

- `assets/js/site-data.js` — content and links
- `assets/js/modules/services.js` — countdown logic
- `assets/js/modules/gallery.js` — gallery behaviour
- `assets/css/home.css` — homepage component styling
- `index.html` — page structure
- `privacy.html` — update whenever data collection or third-party technology changes
- `safeguarding.html` — replace launch notice with approved policy and contacts
