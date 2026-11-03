// Nathan Irving, REALTOR® — "Find me next" banner
// Reads APPEARANCES from js/data/appearances-data.js and shows the next
// upcoming event above the site header. Renders nothing if none are upcoming.
(function () {
  var TZ = 'America/Los_Angeles';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function partsIn(date) {
    var f = new Intl.DateTimeFormat('en-US', {
      timeZone: TZ, weekday: 'short', month: 'short', day: 'numeric',
      year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true
    });
    var out = {};
    f.formatToParts(date).forEach(function (p) { out[p.type] = p.value; });
    return out;
  }

  function timeLabel(p) {
    // "1:00 PM" -> "1"; "1:30 PM" -> "1:30"
    return p.minute === '00' ? p.hour : p.hour + ':' + p.minute;
  }

  function dayKey(date) {
    var p = partsIn(date);
    return p.year + '-' + p.month + '-' + p.day;
  }

  function whenText(start, end) {
    var s = partsIn(start), e = partsIn(end);
    var sameDay = dayKey(start) === dayKey(end);
    var dateStr = s.weekday + ', ' + s.month + ' ' + s.day;
    if (!sameDay) {
      return dateStr + ' ' + timeLabel(s) + ' ' + s.dayPeriod + ' – ' +
        e.weekday + ', ' + e.month + ' ' + e.day + ' ' + timeLabel(e) + ' ' + e.dayPeriod;
    }
    var range = s.dayPeriod === e.dayPeriod
      ? timeLabel(s) + '–' + timeLabel(e) + ' ' + e.dayPeriod
      : timeLabel(s) + ' ' + s.dayPeriod + '–' + timeLabel(e) + ' ' + e.dayPeriod;
    return dateStr + ' · ' + range;
  }

  function relativeTag(start, end, now) {
    if (now >= start && now < end) return 'Happening now';
    if (dayKey(start) === dayKey(now)) return 'Today';
    var tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    if (dayKey(start) === dayKey(tomorrow)) return 'Tomorrow';
    return '';
  }

  function gcalDate(d) {
    return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  }

  function render() {
    if (typeof APPEARANCES === 'undefined' || !Array.isArray(APPEARANCES)) return;
    var slot = document.querySelector('[data-appearance-slot]');
    if (!slot) return;

    var now = new Date();
    var upcoming = APPEARANCES
      .map(function (ev) {
        return Object.assign({}, ev, { _start: new Date(ev.start), _end: new Date(ev.end) });
      })
      .filter(function (ev) {
        return !isNaN(ev._start) && !isNaN(ev._end) && ev._end > now;
      })
      .sort(function (a, b) { return a._start - b._start; });

    if (!upcoming.length) return;
    var ev = upcoming[0];

    var location = [ev.address, ev.city].filter(Boolean).join(', ');
    var mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(location);
    var calUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=' + encodeURIComponent(ev.title || ev.type || 'Event with Nathan Irving') +
      '&dates=' + gcalDate(ev._start) + '/' + gcalDate(ev._end) +
      '&location=' + encodeURIComponent(location) +
      '&details=' + encodeURIComponent((ev.note ? ev.note + '\n\n' : '') +
        'Nathan Irving, REALTOR® · Coldwell Banker Realty · (415) 209-4864');

    var tag = relativeTag(ev._start, ev._end, now);

    var bar = document.createElement('div');
    bar.className = 'appearance-card';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Where to find Nathan next');
    bar.innerHTML =
      '<div class="appearance-top">' +
        '<span class="appearance-label">Find me next</span>' +
        (tag ? '<span class="appearance-tag">' + esc(tag) + '</span>' : '') +
      '</div>' +
      '<div class="appearance-type">' + esc(ev.type) + '</div>' +
      '<div class="appearance-where">' + esc(ev.address) + (ev.city ? '<span>' + esc(ev.city) + '</span>' : '') + '</div>' +
      '<div class="appearance-when">' + esc(whenText(ev._start, ev._end)) + '</div>' +
      (ev.note ? '<div class="appearance-note">' + esc(ev.note) + '</div>' : '') +
        '<div class="appearance-links">' +
          (location ? '<a href="' + esc(mapsUrl) + '" target="_blank" rel="noopener">Directions</a>' : '') +
          '<a href="' + esc(calUrl) + '" target="_blank" rel="noopener">Add to calendar</a>' +
          (ev.link ? '<a href="' + esc(ev.link) + '" target="_blank" rel="noopener">Details</a>' : '') +
      '</div>';

    slot.appendChild(bar);

    if (typeof gtag === 'function') {
      bar.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          gtag('event', 'appearance_banner_click', { link_text: a.textContent, event_type: ev.type });
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
