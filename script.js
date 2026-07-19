// Cornerways site — tab navigation, no page reloads, no dependencies.
(function(){
  function linksHtml(links){
    return (links || []).map(function(l){
      return '<a class="rlink" href="' + l.url + '" target="_blank" rel="noopener">' + l.label + ' →</a>';
    }).join('<br>');
  }

  // ---- Route-style card (Walks, Climbing): name + stats line + description + links
  function routeCardHtml(item){
    var statLine = item.length || (item.style ? (item.style + (item.note ? ' · ' + item.note : '')) : (item.note || ''));
    var links = linksHtml(item.links);
    return (
      '<div class="route-card">' +
        '<h3>' + item.name + '</h3>' +
        (statLine ? '<div class="stats"><span>' + statLine + '</span></div>' : '') +
        '<p>' + (item.description || '') + '</p>' +
        (links ? '<p>' + links + '</p>' : '') +
      '</div>'
    );
  }

  // ---- Simple card (Places to Eat, Places to Visit): name + description + links
  function simpleCardHtml(item){
    var links = linksHtml(item.links);
    return (
      '<div class="card">' +
        '<h3>' + item.name + '</h3>' +
        '<p style="margin-bottom:' + (links ? '8px' : '0') + ';">' + (item.description || '') + '</p>' +
        (links ? '<p style="margin-bottom:0;">' + links + '</p>' : '') +
      '</div>'
    );
  }

  // ---- Distance from Cornerways (Worth Matravers village car park) ----
  var CORNERWAYS_COORDS = [50.5956, -2.0396];

  function haversineMiles(a, b){
    var R = 3958.8; // Earth radius, miles
    var toRad = function(d){ return d * Math.PI / 180; };
    var dLat = toRad(b[0] - a[0]);
    var dLon = toRad(b[1] - a[1]);
    var lat1 = toRad(a[0]), lat2 = toRad(b[0]);
    var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    return R * 2 * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  }

  // ---- Live map of the currently-filtered entries (Leaflet + OpenStreetMap) ----
  var mapsByPanel = {};

  function popupHtml(item){
    var statLine = item.length || (item.style ? (item.style + (item.note ? ' · ' + item.note : '')) : '');
    var firstLink = item.links && item.links[0];
    return '<strong>' + item.name + '</strong>' +
      (statLine ? '<br><span class="map-popup-stat">' + statLine + '</span>' : '') +
      (firstLink ? '<br><a href="' + firstLink.url + '" target="_blank" rel="noopener">' + firstLink.label + ' →</a>' : '');
  }

  // Map is an enhancement layered on top of an external CDN dependency
  // (Leaflet + OpenStreetMap tiles) — everything in here is defensive so a
  // failure here (blocked CDN, offline, unexpected browser quirk) can never
  // take down the tabs, filters, or bin schedule.
  function createMapView(container){
    if (typeof L === 'undefined') return null; // Leaflet failed to load

    var mapEl;
    try {
      mapEl = document.createElement('div');
      mapEl.className = 'map-view';
      mapEl.setAttribute('role', 'img');
      mapEl.setAttribute('aria-label', 'Map showing the locations currently listed');
      container.parentNode.insertBefore(mapEl, container);

      var map = L.map(mapEl, { scrollWheelZoom: false });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      L.circleMarker(CORNERWAYS_COORDS, { radius: 8, color: '#2A2A26', weight: 2, fillColor: '#2A2A26', fillOpacity: 1 })
        .addTo(map)
        .bindTooltip('Cornerways', { permanent: true, direction: 'top', offset: [0, -6], className: 'map-tooltip' });

      var markers = L.layerGroup().addTo(map);
      var currentBounds = L.latLngBounds([CORNERWAYS_COORDS]);

      // Panels start out hidden (display:none), so the map container has zero
      // size when first created — fitBounds computed against that is wrong.
      // refresh() re-measures and re-fits; called again once the tab is shown.
      function refresh(){
        try {
          map.invalidateSize();
          map.fitBounds(currentBounds, { padding: [30, 30], maxZoom: 15 });
        } catch (e) { /* non-fatal — map just won't re-fit this time */ }
      }

      function update(items){
        try {
          markers.clearLayers();
          currentBounds = L.latLngBounds([CORNERWAYS_COORDS]);
          items.forEach(function(item){
            if (!item.coords) return;
            currentBounds.extend(item.coords);
            L.circleMarker(item.coords, { radius: 7, color: '#52655C', weight: 2, fillColor: '#52655C', fillOpacity: 0.85 })
              .addTo(markers)
              .bindPopup(popupHtml(item));
          });
          refresh();
        } catch (e) { /* non-fatal — list/cards already rendered independently */ }
      }

      return { map: map, update: update, refresh: refresh };
    } catch (e) {
      if (mapEl && mapEl.parentNode) mapEl.parentNode.removeChild(mapEl);
      return null;
    }
  }

  // ---- Reusable filter bar + live-filtered list. Used by all four
  // data-driven tabs (Walks, Climbing, Places to Eat, Places to Visit).
  function initFilterable(containerId, data, templateFn, opts){
    opts = opts || {};
    var container = document.getElementById(containerId);
    if (!container || typeof data === 'undefined') return;

    var entries = data.map(function(item){
      return { item: item, distanceMi: item.coords ? haversineMiles(CORNERWAYS_COORDS, item.coords) : null };
    });

    var state = { q: '', maxDist: '', lenRange: '' };

    var bar = document.createElement('div');
    bar.className = 'filter-bar';
    bar.innerHTML =
      '<input type="search" class="filter-input" placeholder="Search ' + (opts.noun || 'entries') + '…" aria-label="Search ' + (opts.noun || 'entries') + '">' +
      '<select class="filter-select filter-distance" aria-label="Maximum distance from Cornerways">' +
        '<option value="">Any distance</option>' +
        '<option value="1">Under 1 mi</option>' +
        '<option value="3">Under 3 mi</option>' +
        '<option value="6">Under 6 mi</option>' +
        '<option value="15">Under 15 mi</option>' +
      '</select>' +
      (opts.hasLength ?
        '<select class="filter-select filter-length" aria-label="Walk length">' +
          '<option value="">Any length</option>' +
          '<option value="0-3">Under 3 mi</option>' +
          '<option value="3-5">3–5 mi</option>' +
          '<option value="5-999">5+ mi</option>' +
        '</select>'
        : '') +
      '<button type="button" class="filter-clear">Clear filters</button>' +
      '<span class="filter-count"></span>';
    container.parentNode.insertBefore(bar, container);

    var mapView = opts.showMap ? createMapView(container) : null;
    if (mapView && opts.panel) mapsByPanel[opts.panel] = mapView;

    var inputEl = bar.querySelector('.filter-input');
    var distEl = bar.querySelector('.filter-distance');
    var lenEl = bar.querySelector('.filter-length');
    var countEl = bar.querySelector('.filter-count');

    function matches(entry){
      var item = entry.item;
      if (state.q){
        var haystack = [item.name, item.description, item.style, item.note, item.length]
          .filter(Boolean).join(' ').toLowerCase();
        if (haystack.indexOf(state.q.toLowerCase()) === -1) return false;
      }
      if (state.maxDist && entry.distanceMi !== null && entry.distanceMi > parseFloat(state.maxDist)) return false;
      if (opts.hasLength && state.lenRange && typeof item.lengthMi === 'number'){
        var range = state.lenRange.split('-');
        if (item.lengthMi < parseFloat(range[0]) || item.lengthMi > parseFloat(range[1])) return false;
      }
      return true;
    }

    function clearFilters(){
      state = { q: '', maxDist: '', lenRange: '' };
      inputEl.value = '';
      distEl.value = '';
      if (lenEl) lenEl.value = '';
      render();
    }

    function render(){
      var filtered = entries.filter(matches).map(function(e){ return e.item; });
      container.innerHTML = filtered.length
        ? filtered.map(templateFn).join('')
        : '<p class="filter-empty">No matches — try adjusting or <button type="button" class="filter-clear-inline">clearing the filters</button>.</p>';
      countEl.textContent = filtered.length === entries.length
        ? entries.length + (entries.length === 1 ? ' entry' : ' entries')
        : 'Showing ' + filtered.length + ' of ' + entries.length;
      var inlineClear = container.querySelector('.filter-clear-inline');
      if (inlineClear) inlineClear.addEventListener('click', clearFilters);
      if (mapView) mapView.update(filtered);
    }

    inputEl.addEventListener('input', function(e){ state.q = e.target.value; render(); });
    distEl.addEventListener('change', function(e){ state.maxDist = e.target.value; render(); });
    if (lenEl) lenEl.addEventListener('change', function(e){ state.lenRange = e.target.value; render(); });
    bar.querySelector('.filter-clear').addEventListener('click', clearFilters);

    render();
  }

  initFilterable('walks-list', typeof WALKS !== 'undefined' ? WALKS : undefined, routeCardHtml, { noun: 'walks', hasLength: true, showMap: true, panel: 'walks' });
  initFilterable('crags-list', typeof CRAGS !== 'undefined' ? CRAGS : undefined, routeCardHtml, { noun: 'crags', showMap: true, panel: 'climbing' });
  initFilterable('eat-list', typeof EATERIES !== 'undefined' ? EATERIES : undefined, simpleCardHtml, { noun: 'places to eat', showMap: true, panel: 'eat' });
  initFilterable('visit-list', typeof PLACES !== 'undefined' ? PLACES : undefined, simpleCardHtml, { noun: 'places to visit', showMap: true, panel: 'visit' });

  // ---- Bin & recycling schedule (live from Dorset Council's own data API) ----
  function loadBinSchedule(){
    var el = document.getElementById('bin-schedule');
    if (!el) return;

    var UPRN = '100040613119';
    var API_KEY = 'tJUk7ng0hix0PrY951fL';
    var SERVICES = [
      { code: 'refuseday', label: 'Rubbish' },
      { code: 'recyclingday', label: 'Recycling' },
      { code: 'gardenwasteday', label: 'Garden waste' },
      { code: 'foodwasteday', label: 'Food waste' }
    ];
    var DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    function formatDate(iso){
      var d = new Date(iso + 'T00:00:00');
      return DAY_NAMES[d.getDay()] + ' ' + d.getDate() + ' ' + MONTH_NAMES[d.getMonth()];
    }

    Promise.all(SERVICES.map(function(service){
      return fetch('https://geoapi.dorsetcouncil.gov.uk/v1/Services/' + service.code + '/' + UPRN, {
        headers: { 'X-API-Key': API_KEY }
      })
        .then(function(res){ return res.ok ? res.json() : null; })
        .then(function(data){
          var v = data && data.values && data.values[0];
          return v && v.dateNextVisit ? { label: service.label, date: v.dateNextVisit, frequency: v.frequency, url: v.url } : null;
        })
        .catch(function(){ return null; });
    })).then(function(results){
      var rows = results.filter(Boolean);
      if (!rows.length){
        el.innerHTML = '<p style="margin:0;"><em>Live schedule unavailable right now — use the links below.</em></p>';
        return;
      }
      rows.sort(function(a, b){ return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });

      // Several bin types share the same round calendar — group the links so
      // we don't print the same "view/download/print" link three times over.
      var labelsByUrl = {};
      var urlOrder = [];
      rows.forEach(function(r){
        if (!r.url) return;
        if (!labelsByUrl[r.url]){ labelsByUrl[r.url] = []; urlOrder.push(r.url); }
        labelsByUrl[r.url].push(r.label);
      });
      var calendarLinks = urlOrder.map(function(url){
        return '<a class="rlink" href="' + url + '" target="_blank" rel="noopener">View &amp; print ' +
          labelsByUrl[url].join(' &amp; ').toLowerCase() + ' calendar →</a>';
      }).join('<br>');

      el.innerHTML = '<ul style="margin:0; padding-left:1.1em;">' + rows.map(function(r){
        return '<li style="margin-bottom:6px;"><strong>' + r.label + '</strong> — ' + formatDate(r.date) +
          ' <span style="color:#9a9789;">(' + r.frequency.toLowerCase() + ')</span></li>';
      }).join('') + '</ul>' +
      (calendarLinks ? '<p style="margin:10px 0 0;">' + calendarLinks + '</p>' : '');
    });
  }
  loadBinSchedule();

  // ---- Tabs --------------------------------------------------
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.tab-btn'));
  var panels  = Array.prototype.slice.call(document.querySelectorAll('.tab-panel'));

  function activate(name, scrollToId){
    var found = false;
    buttons.forEach(function(b){
      var isActive = b.dataset.tab === name;
      if (isActive) found = true;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    if (!found) return; // unknown tab name — leave things as they are
    panels.forEach(function(p){
      p.hidden = p.dataset.panel !== name;
    });
    if (mapsByPanel[name]){
      // wait a tick for the panel to un-hide so the map container has a real size to measure
      requestAnimationFrame(function(){ mapsByPanel[name].refresh(); });
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    if (scrollToId){
      // wait a tick for the panel to un-hide before measuring position
      requestAnimationFrame(function(){
        var target = document.getElementById(scrollToId);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  function routeFromHash(){
    var hash = window.location.hash.replace('#', '');
    if (!hash){ activate('walks'); return; }
    var parts = hash.split('/');
    activate(parts[0], parts[1]);
  }

  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      window.location.hash = btn.dataset.tab;
    });
  });

  window.addEventListener('hashchange', routeFromHash);
  routeFromHash();
})();
