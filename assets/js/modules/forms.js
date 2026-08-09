import { siteData } from '../site-data.js';

function showToast(message) {
  const toast = document.querySelector('[data-toast]');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  window.setTimeout(() => toast.classList.remove('visible'), 4200);
}

export function initForms() {
  const form = document.querySelector('[data-contact-form]');
  if (form) {
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());

      if (siteData.links.formEndpoint) {
        try {
          const response = await fetch(siteData.links.formEndpoint, {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: data
          });
          if (!response.ok) throw new Error('Form submission failed');
          form.reset();
          showToast('Thank you. Your message has been sent.');
        } catch {
          showToast('The online form is unavailable. Please email the church directly.');
        }
        return;
      }

      const subject = encodeURIComponent(`[Website] ${payload.topic || 'Enquiry'} from ${payload.firstName || ''} ${payload.lastName || ''}`.trim());
      const body = encodeURIComponent(`Name: ${payload.firstName || ''} ${payload.lastName || ''}\nEmail: ${payload.email || ''}\nTopic: ${payload.topic || ''}\n\n${payload.message || ''}`);
      window.location.href = `mailto:${siteData.church.email}?subject=${subject}&body=${body}`;
      showToast('Opening your email app to send the message.');
    });
  }

  const newsletter = document.querySelector('[data-newsletter-form]');
  if (newsletter) {
    newsletter.addEventListener('submit', event => {
      event.preventDefault();
      showToast('Newsletter integration placeholder: connect your preferred mailing platform before launch.');
    });
  }
}
