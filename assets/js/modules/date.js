export function initialiseDates() {
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  // Sunday service display helper. Uses Europe/London for labels and calculates the next Sunday date.
  const now = new Date();
  const londonParts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/London', weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', hour12: false
  }).formatToParts(now);
  const weekday = londonParts.find(p => p.type === 'weekday')?.value;
  const londonHour = Number(londonParts.find(p => p.type === 'hour')?.value || 0);
  const dayIndex = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(weekday);
  const daysUntilSunday = dayIndex === 0 ? (londonHour >= 10 ? 7 : 0) : 7 - dayIndex;
  const target = new Date(now.getTime() + daysUntilSunday * 86400000);
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', weekday: 'short', day: '2-digit', month: 'short' }).formatToParts(target);
  const get = type => parts.find(p => p.type === type)?.value || '';
  document.querySelectorAll('[data-next-service-day]').forEach(el => el.textContent = get('weekday').toUpperCase());
  document.querySelectorAll('[data-next-service-date]').forEach(el => el.textContent = get('day'));
  document.querySelectorAll('[data-next-service-month]').forEach(el => el.textContent = get('month').toUpperCase());
}
