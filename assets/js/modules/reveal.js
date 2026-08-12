export function initReveal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = [...document.querySelectorAll('[data-reveal]')];

  document.querySelectorAll('section').forEach(section => {
    [...section.querySelectorAll('[data-reveal]')].forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 70}ms`);
    });
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  items.forEach(item => observer.observe(item));
}
