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
