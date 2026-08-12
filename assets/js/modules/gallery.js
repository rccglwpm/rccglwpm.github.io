import { siteData } from '../site-data.js';

const escapeHTML = (value = '') => String(value).replace(/[&<>'"]/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
}[char]));

export function initGallery() {
  const root = document.querySelector('[data-gallery]');
  if (!root || !siteData.gallery?.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const slides = siteData.gallery;
  let activeIndex = 0;
  let timer = null;
  let pointerStartX = null;

  root.innerHTML = `
    <div class="gallery-frame">
      <div class="gallery-slides" data-gallery-slides>
        ${slides.map((slide, index) => `
          <figure class="gallery-slide ${index === 0 ? 'is-active' : ''}" data-gallery-slide="${index}" aria-hidden="${index === 0 ? 'false' : 'true'}">
            <img src="${escapeHTML(slide.image)}" alt="${escapeHTML(slide.alt)}" ${index === 0 ? 'loading="eager"' : 'loading="lazy"'} decoding="async" />
            <div class="gallery-shade"></div>
            <figcaption>
              <span>${escapeHTML(slide.eyebrow)}</span>
              <strong>${escapeHTML(slide.title)}</strong>
              <p>${escapeHTML(slide.text)}</p>
            </figcaption>
          </figure>`).join('')}
      </div>
      <div class="gallery-controls">
        <button type="button" class="gallery-arrow" data-gallery-prev aria-label="Previous gallery photo">←</button>
        <button type="button" class="gallery-toggle" data-gallery-toggle aria-label="Pause slideshow" aria-pressed="false">Ⅱ</button>
        <button type="button" class="gallery-arrow" data-gallery-next aria-label="Next gallery photo">→</button>
      </div>
      <div class="gallery-dots" role="tablist" aria-label="Gallery photos">
        ${slides.map((_, index) => `<button type="button" class="gallery-dot ${index === 0 ? 'is-active' : ''}" data-gallery-dot="${index}" role="tab" aria-selected="${index === 0 ? 'true' : 'false'}" aria-label="Show gallery photo ${index + 1}"></button>`).join('')}
      </div>
      <div class="gallery-progress" aria-hidden="true"><i data-gallery-progress></i></div>
      <span class="gallery-counter" aria-hidden="true"><b data-gallery-current>01</b> / ${String(slides.length).padStart(2, '0')}</span>
    </div>`;

  const slideElements = [...root.querySelectorAll('[data-gallery-slide]')];
  const dotElements = [...root.querySelectorAll('[data-gallery-dot]')];
  const progress = root.querySelector('[data-gallery-progress]');
  const current = root.querySelector('[data-gallery-current]');
  const toggle = root.querySelector('[data-gallery-toggle]');
  let paused = reduceMotion;

  const render = index => {
    activeIndex = (index + slides.length) % slides.length;
    slideElements.forEach((slide, i) => {
      const active = i === activeIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', active ? 'false' : 'true');
    });
    dotElements.forEach((dot, i) => {
      const active = i === activeIndex;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    if (current) current.textContent = String(activeIndex + 1).padStart(2, '0');
    restart();
  };

  const stop = () => {
    if (timer) window.clearTimeout(timer);
    timer = null;
    if (progress) progress.classList.remove('is-running');
  };

  const restart = () => {
    stop();
    if (paused || reduceMotion || document.hidden) return;
    if (progress) {
      void progress.offsetWidth;
      progress.classList.add('is-running');
    }
    timer = window.setTimeout(() => render(activeIndex + 1), 6000);
  };

  const setPaused = value => {
    paused = value;
    if (toggle) {
      toggle.setAttribute('aria-pressed', paused ? 'true' : 'false');
      toggle.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
      toggle.textContent = paused ? '▶' : 'Ⅱ';
    }
    restart();
  };

  root.querySelector('[data-gallery-prev]')?.addEventListener('click', () => render(activeIndex - 1));
  root.querySelector('[data-gallery-next]')?.addEventListener('click', () => render(activeIndex + 1));
  toggle?.addEventListener('click', () => setPaused(!paused));
  dotElements.forEach(dot => dot.addEventListener('click', () => render(Number(dot.dataset.galleryDot))));

  root.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') render(activeIndex - 1);
    if (event.key === 'ArrowRight') render(activeIndex + 1);
  });

  root.addEventListener('pointerdown', event => { pointerStartX = event.clientX; });
  root.addEventListener('pointerup', event => {
    if (pointerStartX === null) return;
    const delta = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(delta) < 45) return;
    render(activeIndex + (delta < 0 ? 1 : -1));
  });

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', restart);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', restart);
  document.addEventListener('visibilitychange', restart);

  setPaused(paused);
}
