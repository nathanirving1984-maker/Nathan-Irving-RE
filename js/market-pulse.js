// Market Pulse — renders data/market.json (FRED, refreshed by GitHub Actions),
// data/local-sales.json and data/news.json. No external libraries.
(function () {
  'use strict';

  var NAVY = '#1B2A4A', GOLD = '#C9A961', GRAY = '#8C8A82';
  var DAY = 864e5;
  var M = null, LOCAL = null, NEWS = null;
  var rangeMonths = 12;

  // ---------- helpers ----------
  function $(s) { return document.querySelector(s); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function parseDate(s) { return new Date(s.length === 10 ? s + 'T00:00:00Z' : s); }
  function series(id) {
    var s = M && M.series && M.series[id];
    if (!s || !s.obs || !s.obs.length) return null;
    return s.obs.map(function (o) { return { d: parseDate(o[0]), v: o[1] }; }).sort(function (a, b) { return a.d - b.d; });
  }
  function last(id) { var s = series(id); return s ? s[s.length - 1] : null; }
  function prev(id) { var s = series(id); return s && s.length > 1 ? s[s.length - 2] : null; }
  function atOrBefore(id, date, maxGapDays) {
    var s = series(id); if (!s) return null;
    var r = null;
    for (var i = 0; i < s.length; i++) { if (s[i].d <= date) r = s[i]; else break; }
    if (r && maxGapDays && (date - r.d) > maxGapDays * DAY) return null;
    return r;
  }
  function ago(id, months, maxGap) {
    var l = last(id); if (!l) return null;
    var t = new Date(l.d); t.setUTCMonth(t.getUTCMonth() - months);
    return atOrBefore(id, t, maxGap || 45);
  }
  function yoyRate(id) { // percent change vs 12 months earlier, for index series
    var l = last(id), a = ago(id, 12, 20); if (!l || !a) return null;
    return { d: l.d, v: (l.v / a.v - 1) * 100 };
  }
  function yoyRateAt(id, idx) { // y/y for the observation idx from the end
    var s = series(id); if (!s || s.length <= idx) return null;
    var o = s[s.length - 1 - idx]; var t = new Date(o.d); t.setUTCFullYear(t.getUTCFullYear() - 1);
    var a = atOrBefore(id, t, 20); return a ? (o.v / a.v - 1) * 100 : null;
  }

  var tz = 'America/Los_Angeles';
  function fmtDate(d) { return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }); }
  function fmtShort(d) { return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' }); }
  function fmtMonth(d) { return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' }); }
  function pct(v, dp) { return v == null ? '—' : v.toFixed(dp == null ? 2 : dp) + '%'; }
  function usd(v) { return v == null ? '—' : '$' + Math.round(v).toLocaleString('en-US'); }
  function usdShort(v) { if (v == null) return '—'; return v >= 1e6 ? '$' + (v / 1e6).toFixed(2) + 'M' : '$' + Math.round(v / 1e3) + 'K'; }
  function num(v) { return v == null ? '—' : Math.round(v).toLocaleString('en-US'); }
  function signed(v, dp, suffix) {
    if (v == null) return '—';
    var r = Number(v.toFixed(dp));
    return (r > 0 ? '+' : r < 0 ? '−' : '±') + Math.abs(r).toFixed(dp) + (suffix || '');
  }
  function toneSpan(text, delta, upIsBad) {
    var s = el('span', delta == null || Math.abs(delta) < 1e-9 ? 'mp-flat' : ((delta > 0) === upIsBad ? 'mp-up' : 'mp-down'), text);
    return s;
  }

  // ---------- chart ----------
  var tip = null;
  function niceTicks(min, max, n) {
    var span = max - min || 1, step = Math.pow(10, Math.floor(Math.log10(span / n)));
    var err = span / n / step;
    if (err >= 7.5) step *= 10; else if (err >= 3.5) step *= 5; else if (err >= 1.5) step *= 2;
    var out = [];
    for (var t = Math.ceil(min / step) * step; t <= max + step * 1e-9; t += step) out.push(Number(t.toFixed(10)));
    return out;
  }
  function svgEl(tag, attrs) {
    var e = document.createElementNS('http://www.w3.org/2000/svg', tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  // lines: [{name, color, dash, data:[{d,v}]}]; opt: {fmt, start, endLabels}
  function lineChart(box, lines, opt) {
    box.textContent = '';
    lines = lines.filter(function (l) { return l.data && l.data.length; }).map(function (l) {
      return Object.assign({}, l, { data: opt.start ? l.data.filter(function (o) { return o.d >= opt.start; }) : l.data });
    }).filter(function (l) { return l.data.length; });
    if (!lines.length || lines.every(function (l) { return l.data.length < 2; })) {
      box.appendChild(el('div', 'mp-empty', 'More history appears after the next data update.'));
      return;
    }
    var W = box.clientWidth || 600, H = box.clientHeight || 260;
    var fmt = opt.fmt || function (v) { return String(v); };
    var all = []; lines.forEach(function (l) { l.data.forEach(function (o) { all.push(o); }); });
    var x0 = Math.min.apply(null, all.map(function (o) { return +o.d; }));
    var x1 = Math.max.apply(null, all.map(function (o) { return +o.d; }));
    var vmin = Math.min.apply(null, all.map(function (o) { return o.v; }));
    var vmax = Math.max.apply(null, all.map(function (o) { return o.v; }));
    var pad = (vmax - vmin) * 0.08 || Math.abs(vmax) * 0.05 || 1;
    var ticks = niceTicks(vmin - pad, vmax + pad, H < 200 ? 3 : 5);
    var y0 = Math.min(ticks[0], vmin), y1 = Math.max(ticks[ticks.length - 1], vmax);

    var svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + H, preserveAspectRatio: 'none', role: 'img' });
    box.appendChild(svg);
    // measure label widths
    var probe = svgEl('text', {}); probe.textContent = fmt(ticks[ticks.length - 1]); svg.appendChild(probe);
    var left = Math.max(probe.getComputedTextLength(), (function () { probe.textContent = fmt(ticks[0]); return probe.getComputedTextLength(); })()) + 10;
    var right = 8;
    if (opt.endLabels) { probe.textContent = fmt(vmax) ; right = probe.getComputedTextLength() + 14; }
    svg.removeChild(probe);
    var top = 8, bottom = 22;
    function X(d) { return left + (x1 === x0 ? 0.5 : (d - x0) / (x1 - x0)) * (W - left - right); }
    function Y(v) { return top + (1 - (v - y0) / (y1 - y0 || 1)) * (H - top - bottom); }

    ticks.forEach(function (t) {
      if (t < y0 - 1e-9 || t > y1 + 1e-9) return;
      svg.appendChild(svgEl('line', { x1: left, x2: W - right, y1: Y(t), y2: Y(t), stroke: '#E3DFD5', 'stroke-width': 1 }));
      var tx = svgEl('text', { x: left - 8, y: Y(t) + 4, 'text-anchor': 'end' }); tx.textContent = fmt(t); svg.appendChild(tx);
    });
    // x labels
    var nx = Math.max(2, Math.min(6, Math.floor((W - left - right) / 90)));
    var spanDays = (x1 - x0) / DAY;
    for (var i = 0; i <= nx; i++) {
      var d = new Date(x0 + (x1 - x0) * i / nx);
      var tx = svgEl('text', { x: X(+d), y: H - 6, 'text-anchor': i === 0 ? 'start' : i === nx ? 'end' : 'middle' });
      tx.textContent = spanDays > 200 ? fmtMonth(d) : fmtShort(d);
      svg.appendChild(tx);
    }
    // lines
    lines.forEach(function (l) {
      var dstr = l.data.map(function (o, j) { return (j ? 'L' : 'M') + X(+o.d).toFixed(1) + ',' + Y(o.v).toFixed(1); }).join('');
      var p = svgEl('path', { d: dstr, fill: 'none', stroke: l.color, 'stroke-width': l.width || 2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', 'vector-effect': 'non-scaling-stroke' });
      if (l.dash) p.setAttribute('stroke-dasharray', '5 4');
      svg.appendChild(p);
    });
    // end labels, nudged apart
    if (opt.endLabels) {
      var labs = lines.map(function (l) { var o = l.data[l.data.length - 1]; return { l: l, o: o, y: Y(o.v) + 4 }; }).sort(function (a, b) { return a.y - b.y; });
      for (var k = 1; k < labs.length; k++) if (labs[k].y - labs[k - 1].y < 13) labs[k].y = labs[k - 1].y + 13;
      labs.forEach(function (a) {
        var t = svgEl('text', { x: X(+a.o.d) + 6, y: a.y, fill: a.l.color, 'class': 'mp-end' }); t.textContent = fmt(a.o.v); svg.appendChild(t);
      });
    }
    // hover
    var rule = svgEl('line', { y1: top, y2: H - bottom, stroke: '#B8B4A8', 'stroke-width': 1, opacity: 0 });
    svg.appendChild(rule);
    var dots = lines.map(function (l) { var c = svgEl('circle', { r: 3.5, fill: l.color, opacity: 0 }); svg.appendChild(c); return c; });
    var hit = svgEl('rect', { x: left, y: 0, width: Math.max(0, W - left - right), height: H, fill: 'transparent' });
    svg.appendChild(hit);
    function nearest(data, t) { var best = null, bd = Infinity; data.forEach(function (o) { var dd = Math.abs(o.d - t); if (dd < bd) { bd = dd; best = o; } }); return best; }
    function move(ev) {
      var r = svg.getBoundingClientRect();
      var cx = (ev.touches ? ev.touches[0].clientX : ev.clientX);
      var mx = (cx - r.left) * (W / r.width);
      var t = x0 + (mx - left) / (W - left - right) * (x1 - x0);
      var main = nearest(lines[0].data, t) || nearest(lines[lines.length - 1].data, t);
      rule.setAttribute('x1', X(+main.d)); rule.setAttribute('x2', X(+main.d)); rule.setAttribute('opacity', 1);
      tip.textContent = '';
      tip.appendChild(el('div', 'd', (opt.monthly ? fmtMonth : fmtDate)(main.d)));
      lines.forEach(function (l, j) {
        var o = nearest(l.data, +main.d);
        if (!o || Math.abs(o.d - main.d) > 10 * DAY) { dots[j].setAttribute('opacity', 0); return; }
        dots[j].setAttribute('cx', X(+o.d)); dots[j].setAttribute('cy', Y(o.v)); dots[j].setAttribute('opacity', 1);
        var row = el('div'); var sw = el('span', 'sw'); sw.style.background = l.color; row.appendChild(sw);
        row.appendChild(document.createTextNode((lines.length > 1 ? l.name + '  ' : '') + fmt(o.v))); tip.appendChild(row);
      });
      tip.style.opacity = 1;
      var px = r.left + X(+main.d) * (r.width / W), py = r.top + 8;
      var tw = tip.offsetWidth;
      var lx = px + 14 + tw > window.innerWidth - 8 ? px - tw - 14 : px + 14;
      tip.style.left = Math.max(8, lx) + 'px'; tip.style.top = py + 'px';
    }
    function leave() { tip.style.opacity = 0; rule.setAttribute('opacity', 0); dots.forEach(function (d) { d.setAttribute('opacity', 0); }); }
    hit.addEventListener('mousemove', move);
    hit.addEventListener('touchstart', move, { passive: true });
    hit.addEventListener('touchmove', move, { passive: true });
    hit.addEventListener('mouseleave', leave);
    hit.addEventListener('touchend', leave);
  }

  // ---------- freshness ----------
  // Sections maintained outside the automatic FRED pull are hidden or flagged
  // once they are older than these limits, so visitors never see stale info.
  var MAX_AGE = { market: 4, news: 21, local: 135 }; // days
  function daysSince(s) { if (!s) return Infinity; return (Date.now() - parseDate(s).getTime()) / DAY; }
  function staleNote(text) { var p = el('p', 'mp-stale'); p.textContent = text; return p; }

  // ---------- sections ----------
  function renderUpdated() {
    var u = $('#mp-updated');
    if (!M || !M.updated) { u.textContent = ''; return; }
    var d = new Date(M.updated);
    var when = d.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: tz, timeZoneName: 'short' });
    u.textContent = 'Data last updated ' + when + ' · Refreshes twice daily';
    var old = document.querySelector('.mp-stale--market'); if (old) old.remove();
    if (daysSince(M.updated) > MAX_AGE.market) {
      var n = staleNote('Heads up: the automatic data update is running behind. Figures below are as of ' + fmtDate(d) + '; each one shows its own date.');
      n.classList.add('mp-stale--market');
      $('#mp-summary').before(n);
    }
  }

  function nextFedDate() {
    if (!NEWS || !NEWS.calendar) return null;
    var today = new Date(); today.setUTCHours(0, 0, 0, 0);
    var r = NEWS.calendar.filter(function (c) { return /Fed/.test(c.event) && parseDate(c.date) >= today; })
      .sort(function (a, b) { return a.date.localeCompare(b.date); })[0];
    return r ? parseDate(r.date) : null;
  }

  function kpi(label, value, subNodes) {
    var k = el('div', 'mp-kpi');
    k.appendChild(el('span', 'mp-lbl', label));
    k.appendChild(el('span', 'mp-val', value));
    var sub = el('span', 'mp-sub');
    (subNodes || []).forEach(function (n) { sub.appendChild(typeof n === 'string' ? document.createTextNode(n) : n); });
    k.appendChild(sub);
    return k;
  }

  function renderKpis() {
    var box = $('#mp-kpis'); box.textContent = '';
    var m30 = last('MORTGAGE30US'), m30p = prev('MORTGAGE30US'), m30y = ago('MORTGAGE30US', 12, 10);
    if (m30) box.appendChild(kpi('30-yr fixed mortgage', pct(m30.v), [
      m30p ? toneSpan(signed(m30.v - m30p.v, 2), m30.v - m30p.v, true) : '', m30p ? ' vs last week' : '',
      m30y ? ' · ' : '', m30y ? toneSpan(signed(m30.v - m30y.v, 2), m30.v - m30y.v, true) : '', m30y ? ' vs a year ago' : ''
    ]));
    var m15 = last('MORTGAGE15US'), m15p = prev('MORTGAGE15US');
    if (m15) box.appendChild(kpi('15-yr fixed mortgage', pct(m15.v), [
      m15p ? toneSpan(signed(m15.v - m15p.v, 2), m15.v - m15p.v, true) : '', m15p ? ' vs last week' : ''
    ]));
    var t10 = last('DGS10'), t10m = ago('DGS10', 1, 10);
    if (t10) box.appendChild(kpi('10-yr Treasury yield', pct(t10.v), [
      t10m ? toneSpan(signed(t10.v - t10m.v, 2), t10.v - t10m.v, true) : '', t10m ? ' vs a month ago · ' : '', fmtShort(t10.d)
    ]));
    var fl = last('DFEDTARL'), fu = last('DFEDTARU');
    if (fl && fu) {
      var nf = nextFedDate();
      var fk = kpi('Fed funds target', fl.v.toFixed(2) + '–' + fu.v.toFixed(2) + '%', [nf ? 'Next decision ' + fmtShort(nf) : 'Set by the Federal Reserve']);
      fk.querySelector('.mp-val').classList.add('mp-val--range');
      box.appendChild(fk);
    }
    var mp = last('MEDLISPRI6041'), mpy = ago('MEDLISPRI6041', 12, 20);
    if (mp) box.appendChild(kpi('Marin median list price', usdShort(mp.v), [
      mpy ? toneSpan(signed((mp.v / mpy.v - 1) * 100, 1, '%'), null, false) : '', mpy ? ' vs a year ago · ' : '', fmtMonth(mp.d)
    ]));
    var ma = last('ACTLISCOU6041'), may = ago('ACTLISCOU6041', 12, 20);
    if (ma) box.appendChild(kpi('Marin homes for sale', num(ma.v), [
      may ? toneSpan(signed((ma.v / may.v - 1) * 100, 1, '%'), null, false) : '', may ? ' vs a year ago · ' : '', fmtMonth(ma.d)
    ]));
  }

  function renderSummary() {
    var p = $('#mp-summary-text'); p.classList.remove('mp-skel');
    var parts = [];
    var m30 = last('MORTGAGE30US'), m30p = prev('MORTGAGE30US'), m30y = ago('MORTGAGE30US', 12, 10);
    if (m30) {
      var s = 'The average 30-year fixed mortgage rate is ' + pct(m30.v) + ' (week of ' + fmtShort(m30.d) + ')';
      if (m30p) { var dw = m30.v - m30p.v; s += Math.abs(dw) < 0.005 ? ', unchanged from last week' : ', ' + (dw > 0 ? 'up ' : 'down ') + Math.abs(dw).toFixed(2) + ' from last week'; }
      if (m30y) { var dy = m30.v - m30y.v; s += ' and ' + Math.abs(dy).toFixed(2) + ' points ' + (dy >= 0 ? 'higher' : 'lower') + ' than a year ago'; }
      parts.push(s + '.');
    }
    var t10 = last('DGS10');
    if (t10 && m30) parts.push('The 10-year Treasury yield, which mortgage rates tend to follow, closed at ' + pct(t10.v) + ' on ' + fmtShort(t10.d) + '.');
    var ma = last('ACTLISCOU6041'), may = ago('ACTLISCOU6041', 12, 20);
    if (ma && may) {
      var ch = (ma.v / may.v - 1) * 100;
      parts.push('Marin had ' + num(ma.v) + ' homes for sale in ' + fmtMonth(ma.d) + ', ' + Math.abs(ch).toFixed(0) + '% ' + (ch >= 0 ? 'more' : 'fewer') + ' than a year earlier.');
    }
    p.textContent = parts.join(' ') || 'Market data is temporarily unavailable. Please check back shortly.';
  }

  function renderRates() {
    var start = new Date(); start.setUTCMonth(start.getUTCMonth() - rangeMonths);
    var lines = [
      { name: '30-yr fixed', color: NAVY, data: series('MORTGAGE30US') },
      { name: '15-yr fixed', color: GOLD, data: series('MORTGAGE15US') },
      { name: '10-yr Treasury', color: GRAY, dash: true, width: 1.5, data: series('DGS10') }
    ];
    var leg = $('#rates-legend'); leg.textContent = '';
    lines.forEach(function (l) { if (!l.data) return; var s = el('span'); var i = el('i', l.dash ? 'dash' : ''); i.style.borderTopColor = l.color; s.appendChild(i); s.appendChild(document.createTextNode(l.name)); leg.appendChild(s); });
    lineChart($('#rates-chart'), lines, { fmt: function (v) { return v.toFixed(2) + '%'; }, start: start, endLabels: true });
  }

  function renderTreasuries() {
    var tb = $('#tsy-table tbody'); tb.textContent = '';
    [['DGS5', '5-year'], ['DGS10', '10-year'], ['DGS30', '30-year']].forEach(function (r) {
      var l = last(r[0]); if (!l) return;
      var m = ago(r[0], 1, 10), y = ago(r[0], 12, 10);
      var tr = tb.insertRow();
      tr.insertCell().textContent = r[1];
      var c = tr.insertCell(); c.className = 'num'; c.textContent = pct(l.v);
      [m, y].forEach(function (o) {
        var td = tr.insertCell(); td.className = 'num';
        if (!o) { td.textContent = '—'; return; }
        td.textContent = pct(o.v) + ' ';
        var d = l.v - o.v; td.appendChild(toneSpan('(' + signed(d, 2) + ')', d, true));
      });
    });
    if (!tb.rows.length) { var tr = tb.insertRow(); var td = tr.insertCell(); td.colSpan = 4; td.textContent = 'Data temporarily unavailable.'; }
  }

  function payment(loan, rate) { var i = rate / 100 / 12; if (!i) return loan / 360; return loan * i / (1 - Math.pow(1 + i, -360)); }
  function setupCalc() {
    var price = $('#calc-price'), down = $('#calc-down'), rate = $('#calc-rate');
    var novato = LOCAL && LOCAL.areas && LOCAL.areas.filter(function (a) { return a.area === 'Novato'; })[0];
    var m30 = last('MORTGAGE30US'), m30y = ago('MORTGAGE30US', 12, 10);
    if (!price.value) price.value = novato ? Math.round(novato.median).toLocaleString('en-US') : '1,200,000';
    if (!rate.value && m30) rate.value = m30.v.toFixed(2);
    function calc() {
      var p = Number(String(price.value).replace(/[^0-9.]/g, '')) || 0;
      var dp = Math.min(100, Math.max(0, Number(down.value) || 0));
      var r = Number(rate.value) || 0;
      var loan = p * (1 - dp / 100);
      var pay = payment(loan, r);
      $('#calc-pay').textContent = usd(pay);
      $('#calc-loan').textContent = usd(loan);
      var cmp = $('#calc-compare'); cmp.textContent = '';
      if (m30y && loan > 0) {
        var py = payment(loan, m30y.v), diff = pay - py;
        cmp.appendChild(document.createTextNode('At a year-ago average of ' + pct(m30y.v) + ', the same loan would be ' + usd(py) + ' a month, '));
        cmp.appendChild(toneSpan(usd(Math.abs(diff)) + (diff >= 0 ? ' less' : ' more'), -diff, false));
        cmp.appendChild(document.createTextNode(' than at ' + pct(r) + '.'));
      }
    }
    price.addEventListener('blur', function () { var p = Number(String(price.value).replace(/[^0-9.]/g, '')); if (p) price.value = Math.round(p).toLocaleString('en-US'); });
    [price, down, rate].forEach(function (i) { i.addEventListener('input', calc); });
    calc();
  }

  function renderMarin() {
    var start = new Date(); start.setUTCMonth(start.getUTCMonth() - 36);
    [['MEDLISPRI6041', '#marin-price', usdShort, false], ['ACTLISCOU6041', '#marin-active', num, false], ['MEDDAYONMAR6041', '#marin-dom', function (v) { return Math.round(v) + ' days'; }, false]].forEach(function (c) {
      var l = last(c[0]), y = ago(c[0], 12, 20), valEl = $(c[1] + '-val');
      valEl.textContent = l ? c[2](l.v) : '—';
      var old = valEl.nextElementSibling && valEl.nextElementSibling.classList.contains('mp-mini-sub') ? valEl.nextElementSibling : null;
      if (old) old.remove();
      if (l) {
        var sub = el('div', 'mp-mini-sub');
        if (y) { sub.appendChild(toneSpan(signed((l.v / y.v - 1) * 100, 1, '%'), null, false)); sub.appendChild(document.createTextNode(' vs a year ago · ')); }
        sub.appendChild(document.createTextNode(fmtMonth(l.d)));
        valEl.after(sub);
      }
      lineChart($(c[1]), [{ name: '', color: NAVY, data: series(c[0]) }], { fmt: c[2], start: start, monthly: true });
    });
  }

  function renderLocal() {
    var box = $('#local-cards'); box.textContent = '';
    if (!LOCAL || !LOCAL.areas) { box.appendChild(el('p', 'mp-note', 'Local sales data is temporarily unavailable.')); return; }
    var per = LOCAL.areas[0] && LOCAL.areas[0].period;
    if (per) $('#local-period').textContent = per.charAt(0).toUpperCase() + per.slice(1) + ' homes that actually sold, from BAREIS MLS (open-market sales). Updated each quarter.';
    if (daysSince(LOCAL.updated) > MAX_AGE.local) box.appendChild(staleNote('Newer quarterly figures are on the way. The numbers below are for ' + (per ? per.split(',')[0] : 'the previous quarter') + '.'));
    LOCAL.areas.forEach(function (a) {
      var c = el('div', 'card');
      c.appendChild(el('h3', null, a.area));
      c.appendChild(el('div', 'mp-lbl', 'Median sale price'));
      c.appendChild(el('div', 'mp-local-big', usd(a.median)));
      var st = el('div', 'mp-stats');
      function stat(lbl, val, node) { var d = el('div'); d.appendChild(el('span', 'mp-lbl', lbl)); var b = el('b', null, val); if (node) { b.textContent = ''; b.appendChild(node); } d.appendChild(b); st.appendChild(d); }
      if (a.yoy != null) stat('vs a year earlier', '', toneSpan(signed(a.yoy * 100, 1, '%'), null, false));
      if (a.sales != null) stat('Homes sold', num(a.sales) + (a.salesYoy != null ? ' (' + signed(a.salesYoy * 100, 0, '%') + ')' : ''));
      if (a.dom != null) stat('Median days on market', a.dom + (a.domPrior != null ? ' (was ' + a.domPrior + ')' : ''));
      if (a.ppsf != null) stat('Price per sq ft', usd(a.ppsf) + (a.ppsfYoy != null ? ' (' + signed(a.ppsfYoy * 100, 1, '%') + ')' : ''));
      c.appendChild(st);
      box.appendChild(c);
    });
  }

  function renderNational() {
    var tb = $('#nat-table tbody'); tb.textContent = '';
    function row(name, note, id, fmt, yoyKind) {
      var l = last(id); if (!l) return;
      var y = ago(id, 12, 20);
      var tr = tb.insertRow();
      var c0 = tr.insertCell(); c0.textContent = name; if (note) c0.appendChild(el('small', null, note));
      var c1 = tr.insertCell(); c1.className = 'num'; c1.textContent = fmt(l.v);
      var c2 = tr.insertCell(); c2.className = 'num';
      if (y) { c2.textContent = fmt(y.v) + ' '; if (yoyKind === 'pct') c2.appendChild(toneSpan('(' + signed((l.v / y.v - 1) * 100, 1, '%') + ')', null, false)); }
      else c2.textContent = '—';
      tr.insertCell().textContent = fmtMonth(l.d);
      tr.insertCell().textContent = M.series[id].source;
    }
    function inflRow(name, note, id) {
      var cur = yoyRate(id); if (!cur) return;
      var s = series(id), yago = null;
      var tr = tb.insertRow();
      var c0 = tr.insertCell(); c0.textContent = name; c0.appendChild(el('small', null, note));
      var c1 = tr.insertCell(); c1.className = 'num'; c1.textContent = pct(cur.v, 1);
      var c2 = tr.insertCell(); c2.className = 'num'; yago = yoyRateAt(id, 12); c2.textContent = yago == null ? '—' : pct(yago, 1);
      tr.insertCell().textContent = fmtMonth(cur.d);
      tr.insertCell().textContent = M.series[id].source;
    }
    var millions = function (v) { return (v / 1e6).toFixed(2) + 'M'; };
    var thousandsToM = function (v) { return (v / 1e3).toFixed(3) + 'M'; };
    inflRow('Inflation (CPI)', 'Change in consumer prices over 12 months', 'CPIAUCSL');
    inflRow('Housing costs in CPI', 'Rents and owners’ equivalent rent, 12-month change', 'CUSR0000SAH1');
    row('Existing-home sales', 'Seasonally adjusted annual pace', 'EXHOSLUSM495S', millions, 'pct');
    row('Median existing-home price', 'All U.S. existing homes sold', 'HOSMEDUSM052N', usd, 'pct');
    row('Homes for sale (U.S.)', 'Existing homes on the market', 'HOSINVUSM495N', millions, 'pct');
    row('Months of supply', 'How long current listings would last at today’s sales pace', 'HOSSUPUSM673N', function (v) { return v.toFixed(1); }, null);
    row('Housing starts', 'New homes begun, annual pace', 'HOUST', thousandsToM, 'pct');
    row('Building permits', 'Future construction, annual pace', 'PERMIT', thousandsToM, 'pct');
    if (!tb.rows.length) { var tr = tb.insertRow(); var td = tr.insertCell(); td.colSpan = 5; td.textContent = 'Data temporarily unavailable.'; }
  }

  function renderNews() {
    var list = $('#news-list'), cal = $('#cal-list');
    list.textContent = ''; cal.textContent = '';
    if (!NEWS) { list.appendChild(el('p', 'mp-note', 'Policy news is temporarily unavailable.')); return; }
    if (NEWS.updated) $('#news-updated').textContent = 'Federal actions that affect mortgages and homeownership, in plain English. Last reviewed ' + fmtDate(parseDate(NEWS.updated)) + '.';
    if (daysSince(NEWS.updated) > MAX_AGE.news) {
      $('#news-updated').textContent = 'Federal actions that affect mortgages and homeownership, in plain English.';
      list.appendChild(staleNote('Policy news is being refreshed. Check back soon for the latest.'));
      cal.appendChild(el('li', null, 'Calendar updating soon.'));
      return;
    }
    var cutoff = parseDate(NEWS.updated || new Date().toISOString().slice(0, 10)); cutoff = new Date(cutoff - 14 * DAY);
    (NEWS.policy || []).slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).forEach(function (n) {
      var it = el('article', 'mp-item' + (parseDate(n.date) >= cutoff ? ' is-new' : ''));
      it.appendChild(el('div', 'dt', fmtDate(parseDate(n.date))));
      it.appendChild(el('h3', null, n.title));
      it.appendChild(el('p', null, n.detail));
      var imp = el('p', 'imp'); var b = el('b', null, 'What it means for buyers & sellers: '); imp.appendChild(b); imp.appendChild(document.createTextNode(n.impact)); it.appendChild(imp);
      it.appendChild(el('p', 'src', 'Source: ' + n.source));
      list.appendChild(it);
    });
    var today = new Date(); today.setUTCHours(0, 0, 0, 0); today = new Date(today - DAY); // keep today's events visible in Pacific time
    var upcoming = (NEWS.calendar || []).filter(function (c) { return parseDate(c.date) >= today; }).sort(function (a, b) { return a.date.localeCompare(b.date); });
    if (!upcoming.length) cal.appendChild(el('li', null, 'Calendar updating soon.'));
    upcoming.forEach(function (c) {
      var li = el('li');
      li.appendChild(el('div', 'when', parseDate(c.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' })));
      li.appendChild(el('div', 'what', c.event));
      li.appendChild(el('div', 'why', c.why));
      cal.appendChild(li);
    });
  }

  function renderAll() {
    renderUpdated(); renderSummary(); renderKpis(); renderRates(); renderTreasuries(); renderMarin(); renderLocal(); renderNational(); renderNews();
  }

  function getJSON(path) {
    return fetch(path + '?t=' + Math.floor(Date.now() / 3e5), { cache: 'no-cache' }).then(function (r) { if (!r.ok) throw new Error(path); return r.json(); }).catch(function () { return null; });
  }

  document.addEventListener('DOMContentLoaded', function () {
    tip = $('#mp-tip');
    Promise.all([getJSON('data/market.json'), getJSON('data/local-sales.json'), getJSON('data/news.json')]).then(function (res) {
      M = res[0] || { series: {} }; LOCAL = res[1]; NEWS = res[2];
      renderAll();
      setupCalc();
      document.querySelectorAll('.mp-range button').forEach(function (b) {
        b.addEventListener('click', function () {
          document.querySelectorAll('.mp-range button').forEach(function (x) { x.classList.remove('is-on'); });
          b.classList.add('is-on'); rangeMonths = Number(b.dataset.range); renderRates();
          if (window.gtag) gtag('event', 'market_pulse_range', { range: b.textContent });
        });
      });
      var w = window.innerWidth, t = null;
      window.addEventListener('resize', function () {
        if (window.innerWidth === w) return; w = window.innerWidth;
        clearTimeout(t); t = setTimeout(function () { renderRates(); renderMarin(); }, 150);
      });
    });
  });
})();
