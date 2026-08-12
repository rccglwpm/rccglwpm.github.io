import { renderDynamicContent, applyLinks } from './modules/render.js';
import { initNavigation } from './modules/navigation.js';
import { initReveal } from './modules/reveal.js';
import { initForms } from './modules/forms.js';
import { initialiseDates } from './modules/date.js';
import { initServiceExperience } from './modules/services.js';
import { initGallery } from './modules/gallery.js';

renderDynamicContent();
applyLinks();
initNavigation();
initForms();
initialiseDates();
initServiceExperience();
initGallery();
initReveal();
