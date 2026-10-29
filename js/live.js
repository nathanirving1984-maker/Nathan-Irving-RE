// Fills any element marked data-live="key" with the latest numbers from the
// site's data files (updated daily by the market-data workflow). The HTML
// carries sensible values already, so the page reads correctly before this runs.
(function () {
  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function monthYear(s) { return new Date(s + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', year: 'numeric' }); }
  function shortDate(s) { return new Date(s + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }); }
  function last(o) { return o[o.length - 1]; }
  function set(key, text, cls) {
    document.querySelectorAll('[data-live="' + key + '"]').forEach(function (el) {
      el.textContent = text;
      if (cls !== undefined) { el.classList.remove('up', 'down'); if (cls) el.classList.add(cls); }
    });
  }
  if (!document.querySelector('[data-live], [data-spark]')) return;

  fetch('data/local-sales.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (d) {
    var a = (d.areas || []).filter(function (x) { return x.area === 'Novato'; })[0];
    if (!a) return;
    set('novato-period', a.period.split(' (')[0]);
    set('novato-median', money(a.median));
    set('novato-sales', String(a.sales));
    set('novato-dom', a.dom + ' days');
    set('novato-ppsf', money(a.ppsf));
    if (a.salesYoy != null) set('novato-sales-yoy', Math.round(Math.abs(a.salesYoy) * 100) + '% ' + (a.salesYoy >= 0 ? 'more' : 'fewer'));
    var y = a.yoy;
    set('novato-median-yoy', Math.abs(y) < 0.01 ? 'about the same as a year earlier' : (y > 0 ? 'up ' : 'down ') + Math.abs(y * 100).toFixed(1) + '% from a year earlier');
  }).catch(function () {});

  fetch('data/market.json', { cache: 'no-cache' }).then(function (r) { return r.json(); }).then(function (d) {
    var s = d.series || {};
    if (s.MORTGAGE30US) {
      var r = s.MORTGAGE30US.obs, now = last(r), ago = r[Math.max(0, r.length - 53)];
      set('rate30', now[1].toFixed(2) + '%');
      set('rate30-week', 'Week of ' + shortDate(now[0]));
      var diff = now[1] - ago[1];
      set('rate30-change', (Math.abs(diff) < 0.05 ? 'About flat' : (diff > 0 ? 'Up ' : 'Down ') + Math.abs(diff).toFixed(2) + ' points') + ' from a year ago',
        diff > 0.05 ? 'up' : diff < -0.05 ? 'down' : '');
      document.querySelectorAll('[data-spark="rate30"]').forEach(function (svg) {
        var vals = r.slice(-53).map(function (p) { return p[1]; });
        var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals), W = 300, H = 52;
        var pts = vals.map(function (v, i) { return [i / (vals.length - 1) * W, H - 4 - (v - lo) / ((hi - lo) || 1) * (H - 12)]; });
        var line = pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join('');
        svg.innerHTML = '<path class="area" d="' + line + 'L' + W + ',' + H + 'L0,' + H + 'Z"/><path class="line" d="' + line + '"/>';
      });
    }
    if (s.MEDDAYONMAR6041) {
      var dom = last(s.MEDDAYONMAR6041.obs);
      set('marin-dom', String(Math.round(dom[1])));
      set('marin-dom-month', 'Median, ' + monthYear(dom[0]));
    }
    if (s.PRIREDCOU6041 && s.ACTLISCOU6041) {
      var cuts = last(s.PRIREDCOU6041.obs), act = last(s.ACTLISCOU6041.obs);
      set('marin-cuts', String(Math.round(cuts[1])));
      set('marin-cuts-of', 'of ' + Math.round(act[1]) + ' active, ' + monthYear(cuts[0]));
    }
  }).catch(function () {});
})();
