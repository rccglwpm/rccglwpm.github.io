import { siteData } from '../site-data.js';

const TIME_ZONE = siteData.church.timeZone || 'Europe/London';
const DAY_MS = 86_400_000;

function partsFor(date, options = {}) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    ...options
  }).formatToParts(date);
}

function part(parts, type) {
  return parts.find(item => item.type === type)?.value || '';
}

function londonDateParts(date) {
  const parts = partsFor(date, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  });
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(part(parts, 'weekday'));
  return {
    year: Number(part(parts, 'year')),
    month: Number(part(parts, 'month')),
    day: Number(part(parts, 'day')),
    weekday,
    hour: Number(part(parts, 'hour')),
    minute: Number(part(parts, 'minute')),
    second: Number(part(parts, 'second'))
  };
}

function timeZoneOffsetMs(date) {
  const p = partsFor(date, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  });
  const asUTC = Date.UTC(
    Number(part(p, 'year')),
    Number(part(p, 'month')) - 1,
    Number(part(p, 'day')),
    Number(part(p, 'hour')),
    Number(part(p, 'minute')),
    Number(part(p, 'second'))
  );
  return asUTC - date.getTime();
}

function zonedLocalToUtc(year, month, day, hour, minute) {
  const localAsUTC = Date.UTC(year, month - 1, day, hour, minute, 0);
  let candidate = new Date(localAsUTC);
  for (let i = 0; i < 3; i += 1) {
    candidate = new Date(localAsUTC - timeZoneOffsetMs(candidate));
  }
  return candidate;
}

function addCalendarDays({ year, month, day }, numberOfDays) {
  const d = new Date(Date.UTC(year, month - 1, day + numberOfDays, 12, 0, 0));
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate()
  };
}

function serviceStartFor(service, referenceDate, weekOffset = 0) {
  const current = londonDateParts(referenceDate);
  const delta = ((service.weekday - current.weekday + 7) % 7) + weekOffset * 7;
  const localDate = addCalendarDays(current, delta);
  const [hour, minute] = service.start.split(':').map(Number);
  return zonedLocalToUtc(localDate.year, localDate.month, localDate.day, hour, minute);
}

function getOccurrences(now = new Date()) {
  const occurrences = siteData.services.map(service => {
    let start = serviceStartFor(service, now);
    const windowMinutes = Number(service.displayWindowMinutes || 120);
    let end = new Date(start.getTime() + windowMinutes * 60_000);

    if (end.getTime() <= now.getTime()) {
      // Recalculate through the time zone conversion to remain correct around BST/GMT changes.
      start = serviceStartFor(service, new Date(now.getTime() + 7 * DAY_MS));
      end = new Date(start.getTime() + windowMinutes * 60_000);
    }

    return { service, start, end };
  });

  return occurrences.sort((a, b) => a.start - b.start);
}

export function getNextServiceOccurrence(now = new Date()) {
  return getOccurrences(now)[0] || null;
}

function formatServiceDate(date) {
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: TIME_ZONE,
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }).format(date);
}

function formatShortDate(date) {
  const p = partsFor(date, { weekday: 'short', day: '2-digit', month: 'short' });
  return {
    weekday: part(p, 'weekday').toUpperCase(),
    day: part(p, 'day'),
    month: part(p, 'month').toUpperCase()
  };
}

function countdownParts(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function write(selector, value) {
  document.querySelectorAll(selector).forEach(element => {
    element.textContent = value;
  });
}

function updateCountdownDigits(prefix, values) {
  Object.entries(values).forEach(([key, value]) => {
    const formatted = key === 'days' ? String(value) : String(value).padStart(2, '0');
    document.querySelectorAll(`[data-${prefix}-${key}]`).forEach(element => {
      if (element.textContent !== formatted) {
        element.textContent = formatted;
        element.classList.remove('digit-change');
        void element.offsetWidth;
        element.classList.add('digit-change');
      }
    });
  });
}

function updateUpcoming(occurrences) {
  const container = document.querySelector('[data-upcoming-mini]');
  if (!container) return;
  const nextTwo = occurrences.slice(1, 3);
  container.innerHTML = nextTwo.map(({ service, start }) => `
    <span>
      <small>${formatServiceDate(start)}</small>
      <b>${service.title} · ${service.time}</b>
    </span>
  `).join('');
}

function updateServiceExperience() {
  const now = new Date();
  const occurrences = getOccurrences(now);
  const current = occurrences[0];
  if (!current) return;

  const { service, start, end } = current;
  const shortDate = formatShortDate(start);
  const isUnderway = start <= now && now < end;
  const millisecondsUntil = start.getTime() - now.getTime();
  const startingSoon = millisecondsUntil > 0 && millisecondsUntil <= 60 * 60_000;
  const countdown = countdownParts(millisecondsUntil);

  write('[data-next-service-title]', service.title);
  write('[data-next-service-time]', service.time);
  write('[data-next-service-date-long]', formatServiceDate(start));
  write('[data-next-service-day]', shortDate.weekday);
  write('[data-next-service-date]', shortDate.day);
  write('[data-next-service-month]', shortDate.month);

  const sunday = siteData.services.find(item => item.weekday === 0);
  if (sunday) write('[data-sunday-time]', sunday.time);

  let status = 'Next gathering';
  let heading = `Next: ${service.title}`;
  let supporting = `${formatServiceDate(start)} at ${service.time}`;

  if (isUnderway) {
    status = 'Attendance window';
    heading = `${service.title} · today`;
    supporting = `If you are attending this gathering, you can mark your attendance securely through EvaeXtra.`;
  } else if (startingSoon) {
    status = 'Starting soon';
    heading = `${service.title} starts soon`;
    supporting = `${formatServiceDate(start)} at ${service.time} · Middlesbrough time`;
  }

  write('[data-service-status]', status);
  write('[data-countdown-heading]', heading);
  write('[data-countdown-supporting]', supporting);

  const countdownShell = document.querySelector('[data-countdown-shell]');
  countdownShell?.classList.toggle('is-live', isUnderway);
  countdownShell?.classList.toggle('is-soon', startingSoon);

  if (isUnderway) {
    updateCountdownDigits('countdown', { days: 0, hours: 0, minutes: 0, seconds: 0 });
    updateCountdownDigits('mini', { days: 0, hours: 0, minutes: 0, seconds: 0 });
    document.querySelectorAll('[data-countdown-label]').forEach(el => { el.textContent = 'The scheduled start time has arrived'; });
  } else {
    updateCountdownDigits('countdown', countdown);
    updateCountdownDigits('mini', countdown);
    document.querySelectorAll('[data-countdown-label]').forEach(el => { el.textContent = 'Time until the next scheduled gathering'; });
  }

  updateUpcoming(occurrences);
}

export function initServiceExperience() {
  updateServiceExperience();
  window.setInterval(updateServiceExperience, 1000);
}
