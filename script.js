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

  function renderInto(containerId, data, templateFn){
    var el = document.getElementById(containerId);
    if (!el || typeof data === 'undefined') return;
    el.innerHTML = data.map(templateFn).join('');
  }

  renderInto('walks-list', typeof WALKS !== 'undefined' ? WALKS : undefined, routeCardHtml);
  renderInto('crags-list', typeof CRAGS !== 'undefined' ? CRAGS : undefined, routeCardHtml);
  renderInto('eat-list', typeof EATERIES !== 'undefined' ? EATERIES : undefined, simpleCardHtml);
  renderInto('visit-list', typeof PLACES !== 'undefined' ? PLACES : undefined, simpleCardHtml);

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
        return '<a class="rlink" href="' + url + '" target="_blank" rel="noopener">labelsByUrl[url].join(' &amp; ').toLowerCase() + ' calendar →</a>';
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
