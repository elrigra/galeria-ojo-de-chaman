/* Galería de piezas únicas · Ojo de Chamán
   Se carga desde la página de la tienda con:
   <div id="gal-root"></div><script src=".../galeria.js"></script>
   Lee piezas.json y las fotos (img/<pieza>/<n>-s.jpg chica, -l.jpg grande) de esta misma carpeta. */
(function () {
  var SCRIPT = document.currentScript;
  var BASE = new URL('.', SCRIPT ? SCRIPT.src : location.href).href;
  var WA = '5491133112754';
  var PER_ROW = 8; // máximo de piezas por cinta
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var wa = function (t) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t); };

  var css = `
.gal{--g-cream:#f5edd6;--g-paper:#fbf6e8;--g-dark:#1a1208;--g-rust:#8b2e0f;--g-gold:#c8860a;--g-line:#1a1208;
  font-family:var(--body-font,'Lexend',sans-serif);color:var(--g-rust);line-height:1.5}
.gal *{box-sizing:border-box}
.gal h2,.gal h3{font-family:var(--heading-font,'Work Sans',sans-serif);font-weight:700;margin:0;color:var(--g-rust);letter-spacing:0;text-transform:none}
.gal button{font:inherit;color:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer;border-radius:0;text-transform:none;letter-spacing:0;box-shadow:none}
.gal a{text-decoration:none}
.gal img{display:block;max-width:none}
.gal :focus-visible{outline:2px solid var(--g-gold);outline-offset:3px}
.gal .g-hero{padding:8px 0 22px}
.gal .g-kick{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--g-gold);font-weight:500;display:flex;align-items:center;gap:12px}
.gal .g-kick::before{content:"";width:34px;height:1px;background:var(--g-gold)}
.gal .g-hero h2{font-size:clamp(40px,7.4vw,92px);line-height:.98;margin:14px 0 0;letter-spacing:-.02em}
.gal .g-hero h2 em{font-style:normal;color:var(--g-gold)}
.gal .hf{display:flex;flex-wrap:wrap;gap:18px 48px;align-items:flex-end;justify-content:space-between;margin-top:22px}
.gal .hf p{max-width:50ch;margin:0;font-size:15px;line-height:1.6}
.gal .g-stats{display:flex;gap:34px}
.gal .g-stats b{display:block;font-family:var(--heading-font,'Work Sans',sans-serif);font-size:40px;line-height:1;font-variant-numeric:tabular-nums}
.gal .g-stats span{font-size:11px;letter-spacing:.14em;text-transform:uppercase}
.gal .g-wall{overflow:hidden;padding:16px 0;display:grid;gap:12px;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)}
.gal .g-row{display:flex;gap:12px;width:max-content;animation:galdrift 70s linear infinite}
.gal .g-row.g-rev{animation-direction:reverse}
.gal .g-wall:hover .g-row{animation-play-state:paused}
@keyframes galdrift{to{transform:translateX(calc(-50% - 6px))}}
.gal .g-row button{border:1px solid var(--g-line);border-radius:4px;overflow:hidden;background:#fff;transition:transform .35s;flex:none;width:clamp(110px,15vw,190px);height:clamp(110px,15vw,190px);display:block}
.gal .g-row button:hover{transform:translateY(-4px)}
.gal .g-row{align-items:flex-start}
.gal .g-row img{width:100%!important;height:100%!important;object-fit:cover}
.gal .g-bar{display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;padding:26px 0 18px}
.gal .g-chips{display:flex;flex-wrap:wrap;gap:8px}
.gal .g-chip{border:1px solid var(--g-rust);border-radius:999px;padding:8px 18px;font-size:13px;transition:.25s;display:inline-flex;gap:8px;align-items:center;color:var(--g-rust)}
.gal .g-chip i{font-style:normal;font-size:11px;opacity:.65}
.gal .g-chip:hover{background:rgba(139,46,15,.08)}
.gal .g-chip[aria-pressed=true]{background:var(--g-rust);color:var(--g-cream);border-color:var(--g-rust)}
.gal .g-count{font-size:12px;letter-spacing:.12em;text-transform:uppercase}
.gal .g-ygrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));grid-auto-flow:dense;gap:16px;padding-bottom:20px}
.gal .g-card{position:relative;background:#fff;border:1px solid var(--g-line);border-radius:4px;overflow:hidden;aspect-ratio:1;text-align:left;
  transform:perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .25s ease-out,box-shadow .3s}
.gal .g-card.g-big{grid-column:span 2;grid-row:span 2}
.gal .g-card img{width:100%!important;height:100%!important;object-fit:cover;transition:transform .7s cubic-bezier(.2,.8,.2,1)}
.gal .g-card:hover{box-shadow:0 18px 34px -18px rgba(26,18,8,.55)}
.gal .g-card:hover img{transform:scale(1.06)}
.gal .g-card .g-cap{position:absolute;left:0;right:0;bottom:0;padding:40px 16px 14px;display:flex;justify-content:space-between;align-items:flex-end;gap:10px;color:var(--g-cream);
  background:linear-gradient(transparent,rgba(26,18,8,.82));transform:translateY(101%);transition:transform .4s cubic-bezier(.2,.8,.2,1)}
.gal .g-card:hover .g-cap,.gal .g-card:focus-visible .g-cap{transform:none}
.gal .g-cap strong{font-family:var(--heading-font,'Work Sans',sans-serif);font-size:17px;line-height:1.15}
.gal .g-cap em{font-style:normal;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--g-gold)}
.gal .g-tag,.gal .g-multi{position:absolute;top:10px;font-size:10px;letter-spacing:.12em;text-transform:uppercase;padding:4px 9px;border-radius:999px}
.gal .g-tag{left:10px;background:var(--g-cream);color:var(--g-rust);border:1px solid var(--g-rust)}
.gal .g-multi{right:10px;background:var(--g-dark);color:var(--g-gold)}
.gal .g-card[hidden]{display:none}
.gal .g-yr{padding:34px 0 8px;scroll-margin-top:90px}
.gal .g-yr[hidden]{display:none}
.gal .g-yh{display:flex;align-items:baseline;gap:18px;border-top:1px solid var(--g-line);padding-top:14px;margin-bottom:18px}
.gal .g-yh h3{font-size:clamp(34px,6vw,64px);line-height:1;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.gal .g-yh span{font-size:12px;letter-spacing:.14em;text-transform:uppercase}
.gal .g-soon{border:1px dashed var(--g-rust);border-radius:4px;padding:28px 22px;text-align:center;font-size:15px;margin-bottom:20px;background:var(--g-paper)}
.gal .g-soon b{display:block;font-family:var(--heading-font,'Work Sans',sans-serif);font-size:18px;margin-bottom:4px}
.gal .g-nav{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:0 0 4px}
.gal .g-nav small{font-size:11px;letter-spacing:.14em;text-transform:uppercase;margin-right:4px}
.gal .g-nav a{border:1px solid var(--g-rust);border-radius:999px;padding:5px 14px;font-size:12px;color:var(--g-rust);transition:.25s;cursor:pointer}
.gal .g-nav a:hover{background:rgba(139,46,15,.08)}
.gal .g-nav a.off{border-style:dashed;opacity:.6}
@media (hover:none){.gal .g-card .g-cap{transform:none;padding-top:28px}.gal .g-cap em{display:none}}
.gal .g-band{background:var(--g-dark);color:var(--g-cream);padding:clamp(34px,6vw,70px) 0}
.gal .g-band .g-in{display:flex;flex-wrap:wrap;gap:24px 56px;align-items:center;justify-content:space-between}
.gal .g-band h3{color:var(--g-cream);font-size:clamp(26px,4.4vw,46px);line-height:1.05;max-width:18ch}
.gal .g-band p{margin:12px 0 0;max-width:44ch;color:var(--g-gold);font-size:15px}
.gal .g-btn{display:inline-flex;align-items:center;gap:10px;background:var(--g-gold);color:var(--g-dark);font-weight:500;font-size:15px;padding:14px 26px;border-radius:999px;border:1px solid var(--g-gold);transition:transform .25s,background .25s,color .25s}
.gal .g-btn:hover{transform:translateY(-3px);background:transparent;color:var(--g-gold)}
.gal .g-btn svg{width:18px;height:18px}
.glb{--g-cream:#f5edd6;--g-dark:#1a1208;--g-gold:#c8860a;position:fixed;inset:0;z-index:2147483000;background:rgba(26,18,8,.97);display:none;align-items:center;justify-items:center;color:var(--g-cream);
  font-family:var(--body-font,'Lexend',sans-serif);padding:16px}
.glb *{box-sizing:border-box}
.glb.on{display:grid;animation:galfade .3s}
@keyframes galfade{from{opacity:0}}
.glb button{font:inherit;color:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer;box-shadow:none}
.glb img{display:block;max-width:none}
.glb .stage{width:min(1180px,100%);display:grid;grid-template-columns:minmax(0,1.6fr) minmax(220px,1fr);gap:clamp(18px,4vw,56px);align-items:center}
.glb .car{position:relative;min-width:0}
.glb .vp{overflow:hidden;border-radius:4px;touch-action:pan-y}
.glb .track{display:flex;gap:14px;transition:transform .55s cubic-bezier(.2,.8,.2,1)}
.glb .slide{flex:none;aspect-ratio:1;background:#fff;border-radius:4px;overflow:hidden;opacity:.5;transform:scale(.93);transition:opacity .45s,transform .55s cubic-bezier(.2,.8,.2,1);cursor:pointer;border:1px solid rgba(245,237,214,.25)}
.glb .slide.cur{opacity:1;transform:none;cursor:zoom-in}
.glb .slide img{width:100%;height:100%;object-fit:contain;transition:transform .35s;transform-origin:var(--zx,50%) var(--zy,50%)}
.glb .slide.zoom{cursor:zoom-out}
.glb .slide.zoom img{transform:scale(2.2)}
.glb .ar{position:absolute;top:50%;margin-top:-24px;z-index:2;border:1px solid var(--g-gold);background:rgba(26,18,8,.7);color:var(--g-gold);border-radius:999px;width:48px;height:48px;font-size:22px;display:grid;place-items:center;transition:.2s}
.glb .ar:hover{background:var(--g-gold);color:var(--g-dark)}
.glb .ar.p{left:12px}.glb .ar.n{right:12px}.glb .ar[hidden]{display:none}
.glb .dots{display:flex;gap:8px;justify-content:center;margin-top:16px;min-height:8px}
.glb .dots i{width:8px;height:8px;border-radius:999px;background:rgba(245,237,214,.3);transition:.3s}
.glb .dots i.on{width:26px;background:var(--g-gold)}
.glb .tg{font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--g-gold)}
.glb h3{font-family:var(--heading-font,'Work Sans',sans-serif);font-weight:700;font-size:clamp(28px,4vw,48px);line-height:1.02;margin:12px 0 14px;color:var(--g-cream)}
.glb p{margin:0 0 20px;color:rgba(245,237,214,.75);max-width:36ch;font-size:14px;line-height:1.6}
.glb dl{display:grid;grid-template-columns:auto 1fr;gap:6px 18px;margin:0 0 24px;font-size:14px}
.glb dt{color:var(--g-gold)}.glb dd{margin:0}
.glb .g-btn{display:inline-flex;align-items:center;background:var(--g-gold);color:var(--g-dark);font-weight:500;font-size:15px;padding:14px 26px;border-radius:999px;text-decoration:none;border:1px solid var(--g-gold);transition:.25s}
.glb .g-btn:hover{background:transparent;color:var(--g-gold)}
.glb .x{position:absolute;top:14px;right:14px;border:1px solid var(--g-gold);color:var(--g-gold);border-radius:999px;width:46px;height:46px;font-size:22px;display:grid;place-items:center;transition:.2s}
.glb .x:hover{background:var(--g-gold);color:var(--g-dark)}
@media (max-width:760px){
  .glb .stage{grid-template-columns:1fr;gap:12px;align-content:center}
  .glb .ar{width:42px;height:42px;margin-top:-21px}
  .gal .g-card.g-big{grid-column:span 1;grid-row:span 1}
  .gal .g-stats b{font-size:32px}
}
@media (prefers-reduced-motion:reduce){.gal *,.glb *{animation:none!important;transition:none!important}.gal .g-card .g-cap{transform:none}}
`;
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var root = $('#gal-root');
  if (!root) return;
  root.className = 'gal';

  // Integración con la plantilla: usar todo el ancho y ocultar el título automático de la página
  var col = root.closest('.col-md-8'); if (col) { col.classList.remove('col-md-8'); col.classList.add('col-12'); }
  Array.prototype.forEach.call(document.querySelectorAll('h1'), function (h) { if (!root.contains(h) && /^(Piezas únicas|Historial de piezas|Archivo histórico)$/.test(h.textContent.trim())) h.style.display = 'none'; });

  var WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.3 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z"/></svg>';

  fetch(BASE + 'piezas.json').then(function (r) { return r.json(); }).then(start).catch(function () {
    root.innerHTML = '<p style="padding:24px 0">No pudimos cargar la galería. Probá de nuevo en unos minutos.</p>';
  });

  function start(DATA) {
    DATA.sort(function (a, b) { return (+a.anio || 9999) - (+b.anio || 9999) || a.id - b.id; });
    DATA.forEach(function (d) { d.s = d.fotos.map(function (f) { return BASE + f + '-s.jpg'; }); d.l = d.fotos.map(function (f) { return BASE + f + '-l.jpg'; }); });
    var tags = ['Todas'].concat(DATA.map(function (d) { return d.tipo; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));
    var years = DATA.map(function (d) { return +d.anio; }).filter(Boolean);
    var span = new Date().getFullYear() - Math.min.apply(null, years);
    root.innerHTML =
      '<div class="g-hero"><div class="g-kick">Archivo vivo</div><h2>Archivo <em>histórico</em></h2>' +
      '<div class="hf"><p>Lo que fuimos haciendo con las manos, de a una, ordenado por año para que se vea cómo fue cambiando el oficio. Cada pieza existió una sola vez. Si alguna te quedó dando vueltas, la hacemos de nuevo a tu medida.</p>' +
      '<div class="g-stats"><div><b>' + DATA.length + '</b><span>piezas</span></div><div><b>' + span + '</b><span>años de historia</span></div></div></div></div>' +
      '<div class="g-wall" id="gwall" aria-label="Muro de piezas"></div>' +
      '<div class="g-bar"><div class="g-chips" id="gchips" role="group" aria-label="Filtrar por tipo"></div><div class="g-count" id="gcount" aria-live="polite"></div></div>' +
      '<div class="g-nav" id="gnav"></div><div id="ggrid"></div><div style="height:36px"></div>' +
      '<div class="g-band" id="gband"><div class="g-in"><div><h3>¿Te gustó alguna? Hagamos la tuya.</h3><p>Contanos cuál te llamó la atención, para quién es y qué talle usás. Te respondemos con tiempos y valores.</p></div>' +
      '<a class="g-btn" id="gcta" target="_blank" rel="noopener">' + WA_SVG + 'Pedir algo parecido</a></div></div>';
    $('#gcta').href = wa('Hola! Vi el archivo histórico de piezas y me gustaría que me hagan algo parecido.');

    // lightbox (en el body para quedar por encima del encabezado de la tienda)
    var lb = document.createElement('div'); lb.className = 'glb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Visor de piezas');
    lb.innerHTML = '<button class="x" aria-label="Cerrar">×</button><div class="stage"><div class="car"><div class="vp"><div class="track"></div></div>' +
      '<button class="ar p" aria-label="Foto anterior">‹</button><button class="ar n" aria-label="Foto siguiente">›</button><div class="dots" aria-hidden="true"></div></div>' +
      '<div class="info"><div class="tg"></div><h3></h3><p>Pieza única. La hacemos de nuevo a tu medida, con pequeñas variaciones porque cada una sale a mano.</p>' +
      '<dl><dt>Material</dt><dd class="m">Plata 925</dd><dt class="yk">Año</dt><dd class="y"></dd></dl><a class="g-btn" target="_blank" rel="noopener">Quiero algo parecido</a></div></div>';
    document.body.appendChild(lb);

    var cur = 'Todas', view = DATA.slice(), open = -1, ph = 0;

    // fit: ancho completo de la ventana para el muro y la banda
    function fit() {
      ['gwall', 'gband'].forEach(function (id) {
        var el = document.getElementById(id); if (!el) return;
        el.style.width = ''; el.style.marginLeft = '0px';
        var left = el.getBoundingClientRect().left;
        el.style.width = document.documentElement.clientWidth + 'px'; el.style.marginLeft = (-left) + 'px';
      });
      var band = $('#gband .g-in'); if (band) { var c = root.closest('.container'); var w = c ? c.getBoundingClientRect() : null; if (w) { band.style.maxWidth = (w.width - 30) + 'px'; band.style.margin = '0 auto'; } }
    }

    // muro
    var wall = $('#gwall'), rows = Math.ceil(DATA.length / PER_ROW);
    for (var r = 0; r < rows; r++) {
      var items = []; for (var k = 0; k < PER_ROW; k++) items.push(DATA[(r * PER_ROW + k) % DATA.length]);
      var row = document.createElement('div'); row.className = 'g-row' + (r % 2 ? ' g-rev' : ''); row.style.animationDuration = (62 + r * 9) + 's';
      var html = items.map(function (d) { return '<button tabindex="-1" data-id="' + d.id + '"><img src="' + d.s[0] + '" alt="" loading="lazy"></button>'; }).join('');
      row.innerHTML = html + html;
      row.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) openLb(DATA.findIndex(function (x) { return x.id == b.dataset.id; })); });
      wall.appendChild(row);
    }

    // grilla por año
    var grid = $('#ggrid'), nav = $('#gnav');
    var y0 = Math.min.apply(null, years), y1 = new Date().getFullYear(), byYear = {};
    DATA.forEach(function (d, i) { d.i = i; var y = d.anio || 'x'; (byYear[y] = byYear[y] || []).push(d); });
    function addCard(d, sec, big) {
      var b = document.createElement('button'); b.className = 'g-card' + (big ? ' g-big' : ''); b.dataset.id = d.id;
      b.style.viewTransitionName = 'g' + d.id;
      b.innerHTML = '<img src="' + (big ? d.l[0] : d.s[0]) + '" alt="' + d.nombre + '" loading="lazy"><span class="g-tag">' + d.tipo + '</span>' +
        (d.s.length > 1 ? '<span class="g-multi">' + d.s.length + ' fotos</span>' : '') + '<span class="g-cap"><strong>' + d.nombre + '</strong><em>' + (d.anio || 'Ver') + '</em></span>';
      b.addEventListener('click', function () { openLb(d.i); });
      b.addEventListener('pointermove', function (e) {
        if (e.pointerType !== 'mouse') return;
        var rc = b.getBoundingClientRect(), x = (e.clientX - rc.left) / rc.width - .5, y = (e.clientY - rc.top) / rc.height - .5;
        b.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg'); b.style.setProperty('--rx', (-y * 8).toFixed(2) + 'deg');
      });
      b.addEventListener('pointerleave', function () { b.style.setProperty('--ry', '0deg'); b.style.setProperty('--rx', '0deg'); });
      sec.appendChild(b);
    }
    function addSection(id, title, count, items, soon) {
      var sec = document.createElement('section'); sec.className = 'g-yr'; sec.id = 'gy' + id; sec.dataset.soon = soon ? '1' : '';
      sec.innerHTML = '<div class="g-yh"><h3>' + title + '</h3><span>' + (soon ? 'en camino' : count + (count === 1 ? ' pieza' : ' piezas')) + '</span></div>';
      if (soon) { sec.insertAdjacentHTML('beforeend', '<div class="g-soon"><b>Cargando piezas</b>Volvé más tarde para verlas.</div>'); }
      else { var g = document.createElement('div'); g.className = 'g-ygrid'; items.forEach(function (d, k) { addCard(d, g, k === 0 && items.length >= 3); }); sec.appendChild(g); }
      grid.appendChild(sec);
    }
    var navHtml = '<small>Ir a</small>', run = [];
    function flush() {
      if (!run.length) return;
      var t = run.length > 1 ? run[0] + ' – ' + run[run.length - 1] : '' + run[0], id = run[0];
      addSection(id, t, 0, [], true); navHtml += '<a class="off" data-t="gy' + id + '">' + t + '</a>'; run = [];
    }
    for (var y = y0; y <= y1; y++) {
      if (byYear[y]) { flush(); addSection(y, y, byYear[y].length, byYear[y], false); navHtml += '<a data-t="gy' + y + '">' + y + '</a>'; }
      else run.push(y);
    }
    flush();
    if (byYear.x) addSection('x', 'Sin fecha', byYear.x.length, byYear.x, false);
    nav.innerHTML = navHtml;
    nav.addEventListener('click', function (e) { var a = e.target.closest('a'); if (!a) return; var el = document.getElementById(a.dataset.t); if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth', block: 'start' }); });

    // filtros
    var chips = $('#gchips');
    tags.forEach(function (t) {
      var n = t === 'Todas' ? DATA.length : DATA.filter(function (d) { return d.tipo === t; }).length;
      var c = document.createElement('button'); c.className = 'g-chip'; c.setAttribute('aria-pressed', t === 'Todas'); c.innerHTML = t + '<i>' + n + '</i>';
      c.onclick = function () { setFilter(t); }; chips.appendChild(c);
    });
    function applyFilter() {
      grid.querySelectorAll('.g-card').forEach(function (c) { var d = DATA.find(function (x) { return x.id == c.dataset.id; }); c.hidden = !(cur === 'Todas' || d.tipo === cur); });
      grid.querySelectorAll('.g-yr').forEach(function (sec) {
        var any = sec.querySelector('.g-card:not([hidden])'); sec.hidden = sec.dataset.soon ? cur !== 'Todas' : !any;
      });
      nav.hidden = cur !== 'Todas';
      view = DATA.filter(function (d) { return cur === 'Todas' || d.tipo === cur; });
      $('#gcount').textContent = view.length + (view.length === 1 ? ' pieza' : ' piezas');
      chips.querySelectorAll('.g-chip').forEach(function (c, i) { c.setAttribute('aria-pressed', tags[i] === cur); });
    }
    function setFilter(t) {
      cur = t;
      if (document.startViewTransition && !matchMedia('(prefers-reduced-motion:reduce)').matches) document.startViewTransition(applyFilter); else applyFilter();
    }
    applyFilter();

    // visor
    var vp = $('.vp', lb), track = $('.track', lb), lastFocus = null;
    function openLb(i) {
      if (i < 0) return;
      var d = DATA[i]; if (view.indexOf(d) < 0) { cur = 'Todas'; applyFilter(); }
      open = view.indexOf(d); ph = 0; lastFocus = document.activeElement;
      build(); lb.classList.add('on'); document.body.style.overflow = 'hidden'; layout(true); $('.x', lb).focus();
    }
    function build() {
      var d = view[open], n = d.l.length;
      track.innerHTML = d.l.map(function (s, i) { return '<button class="slide" data-i="' + i + '" aria-label="Foto ' + (i + 1) + ' de ' + n + '"><img src="' + s + '" alt="' + d.nombre + '"></button>'; }).join('');
      $('.m', lb).textContent = d.material || 'Plata 925'; $('.tg', lb).textContent = d.tipo; $('h3', lb).textContent = d.nombre;
      $('.y', lb).textContent = d.anio || ''; $('.y', lb).style.display = $('.yk', lb).style.display = d.anio ? '' : 'none';
      $('.dots', lb).innerHTML = n > 1 ? d.l.map(function () { return '<i></i>'; }).join('') : '';
      $('.ar.p', lb).hidden = $('.ar.n', lb).hidden = n < 2;
      $('.g-btn', lb).href = wa('Hola! Vi en el archivo histórico «' + d.nombre + '» y me gustaría pedir algo parecido.');
    }
    function layout(instant) {
      var d = view[open]; if (!d) return;
      var W = vp.clientWidth, n = d.l.length, S = n > 1 ? Math.min(W * 0.76, innerHeight * 0.72) : Math.min(W, innerHeight * 0.72);
      track.style.transition = instant ? 'none' : '';
      track.querySelectorAll('.slide').forEach(function (s, i) { s.style.width = S + 'px'; s.classList.toggle('cur', i === ph); if (i !== ph) s.classList.remove('zoom'); });
      track.style.transform = 'translateX(' + (W / 2 - S / 2 - ph * (S + 14)) + 'px)';
      vp.style.height = S + 'px';
      lb.querySelectorAll('.dots i').forEach(function (el, i) { el.classList.toggle('on', i === ph); });
      if (instant) { track.offsetWidth; track.style.transition = ''; }
    }
    function photo(n) { var m = view[open].l.length; if (m < 2) return; ph = (ph + n + m) % m; layout(); }
    function close() { lb.classList.remove('on'); document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); }
    $('.x', lb).onclick = close; $('.ar.p', lb).onclick = function () { photo(-1); }; $('.ar.n', lb).onclick = function () { photo(1); };
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    addEventListener('resize', function () { fit(); if (lb.classList.contains('on')) layout(true); });
    addEventListener('keydown', function (e) { if (!lb.classList.contains('on')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowLeft') photo(-1); if (e.key === 'ArrowRight') photo(1); });
    track.addEventListener('click', function (e) {
      var s = e.target.closest('.slide'); if (!s) return; var i = +s.dataset.i;
      if (i !== ph) { ph = i; layout(); return; }
      var rc = s.getBoundingClientRect(); s.style.setProperty('--zx', ((e.clientX - rc.left) / rc.width * 100) + '%'); s.style.setProperty('--zy', ((e.clientY - rc.top) / rc.height * 100) + '%'); s.classList.toggle('zoom');
    });
    var sx = null;
    vp.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    vp.addEventListener('touchend', function (e) { if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) photo(dx < 0 ? 1 : -1); sx = null; });

    fit(); setTimeout(fit, 400); window.addEventListener('load', fit);
  }
})();
