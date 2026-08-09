import { siteData } from '../site-data.js';

const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

export function renderDynamicContent() {
  const schedule = document.querySelector('[data-schedule-grid]');
  if (schedule) {
    schedule.innerHTML = siteData.services.map(item => `
      <article class="schedule-card ${item.featured ? 'featured' : ''}" data-reveal>
        <div class="schedule-day"><span>${escapeHTML(item.day)}</span><strong>${escapeHTML(item.time)}</strong></div>
        <div><span class="pill">${escapeHTML(item.tag)}</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.description)}</p></div>
        <a href="#visit" aria-label="Plan a visit for ${escapeHTML(item.title)}">→</a>
      </article>`).join('');
  }

  const ministries = document.querySelector('[data-ministry-grid]');
  if (ministries) {
    ministries.innerHTML = siteData.ministries.map(item => `
      <article class="ministry-card" data-reveal>
        <div class="ministry-image"><img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)} ministry placeholder" loading="lazy" /><span>${escapeHTML(item.icon)}</span></div>
        <div class="ministry-copy"><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p><a href="#contact">Connect <span>→</span></a></div>
      </article>`).join('');
  }

  const messages = document.querySelector('[data-message-list]');
  if (messages) {
    messages.innerHTML = siteData.messages.map(item => `
      <a class="message-row" href="${escapeHTML(item.url)}" target="_blank" rel="noopener" data-reveal>
        <span class="message-number">▶</span><span><small>${escapeHTML(item.label)}</small><strong>${escapeHTML(item.title)}</strong><em>${escapeHTML(item.meta)}</em></span><b>↗</b>
      </a>`).join('');
  }

  const events = document.querySelector('[data-events-grid]');
  if (events) {
    events.innerHTML = siteData.events.map(item => `
      <article class="event-card" data-reveal>
        <div class="event-date"><span>${escapeHTML(item.month)}</span><strong>${escapeHTML(item.day)}</strong></div>
        <div><span class="pill">${escapeHTML(item.type)}</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p><a href="#contact">Event details →</a></div>
      </article>`).join('');
  }
}

export function applyLinks() {
  const linkMap = [
    ['[data-facebook-link]', siteData.links.facebook],
    ['[data-instagram-link]', siteData.links.instagram],
    ['[data-youtube-link]', siteData.links.youtube],
    ['[data-live-link]', siteData.links.youtube],
    ['[data-directions-link]', siteData.links.directions]
  ];
  linkMap.forEach(([selector, value]) => document.querySelectorAll(selector).forEach(el => { el.href = value; }));

  document.querySelectorAll('[data-give-link]').forEach(el => {
    el.href = siteData.links.giving || '#contact';
    if (siteData.links.giving) { el.target = '_blank'; el.rel = 'noopener'; }
  });
}
