/* Sobre nosotros · Ojo de Chamán
   Se carga desde la página "Sobre nosotros" de la tienda con:
   <div id="sobre-root"></div><script src=".../sobre.js"></script>
   Los textos están en este archivo (sección TEXTOS). Las fotos son las mismas que ya tenía la página. */
(function () {
  var WA = '5491133112754';
  var FOTO_RIGRA = new URL('img/sobre/rigra.jpg', (document.currentScript && document.currentScript.src) || location.href).href;
  var FOTO_VERO = 'https://d1a9qnv764bsoo.cloudfront.net/stores/487/112/rte/blobid1.jpg';
  var wa = function (t) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t); };
  var $ = function (s, r) { return (r || document).querySelector(s); };

  /* ---------- TEXTOS ---------- */
  var T = {
    tagline: 'Joyería artesanal nacida del amor por hacer cosas con las manos — y por las personas que las usan.',
    stats: [['2006', 'empieza el oficio'], ['+19', 'años de taller']],
    rigra: {
      kick: 'Rigra · el taller',
      titulo: 'Rigra empezó a hacer cosas desde que tiene memoria.',
      citaIntro: 'De chico, en San Martín de los Andes, cuando le preguntaban qué quería ser de grande, respondía:',
      cita: 'Inventor, carpintero y pintor. Los últimos dos para poder hacerme el taller.',
      citaOut: 'No estaba bromeando.',
      p: [
        'A lo largo de su adolescencia aprendió todo lo que encontró: macramé, tallado en madera, grabados con lupa, pulseras, origami, cerámica. Hasta que un día llegó la cota de malla, sus primeras piezas fueron partes de armaduras medievales. De ahí fue reduciendo la escala hasta llegar a sus primeras joyas.',
        'Cuando terminó la escuela técnica tenía una sola certeza: no quería estudiar nada basado en teorías. Quería pasar sus días en un taller haciendo cosas. La joyería apareció como la excusa perfecta, y cuando encontró La Escuela de la Joya ya estaba totalmente decidido.',
        'En 2006 se mudó a Buenos Aires y empezó su carrera de joyero. Al poco tiempo consiguió trabajo en el taller de Antonio Belgiorno, donde estuvo casi tres años aprendiendo el oficio desde adentro. Después dejó todo para hacer un working holiday de más de un año por Nueva Zelanda. Cuando volvió a Buenos Aires a fines de 2010, supo exactamente lo que quería: hacer sus propios diseños y dejar volar su imaginación.',
        'Creó una página en Facebook, le dio forma a sus primeros diseños y empezaron a llegar los pedidos personalizados. Se fue especializando en materializar las ideas de otros en piezas únicas, con su identidad.',
        'Hoy lleva casi 20 años perfeccionando su oficio. Trabaja plata 925, oro, piedras naturales e impresión 3D, siempre aprendiendo, siempre desafiando lo que cree posible.'
      ]
    },
    vero: {
      kick: 'Vero · el color',
      titulo: 'Vero llegó al mundo de la joyería por el camino menos esperado.',
      p: [
        'Gestora cultural egresada de la UNTREF, pasó 13 años como empleada pública: trabajó en el Congreso de la Nación dando visitas guiadas, contando historias, conectando personas con el patrimonio, haciendo que lo complejo se vuelva cercano y lo lejano se vuelva propio.',
        'El encuentro con Rigra fue en el aire: compañeros de danza aérea antes de ser cualquier otra cosa. De la amistad nació el amor, del amor nació la confianza, y de la confianza nació la sociedad.',
        'Rigra le fue enseñando a trabajar los metales y el tejido con mostacillas se convirtió en su lenguaje propio, una técnica que combina precisión, color y paciencia, y que hoy es una de las líneas más queridas de la marca.'
      ]
    },
    marca: {
      titulo: 'Ojo de Chamán no fue un plan. <em>Fue una transformación.</em>',
      p: [
        'Cuando Vero se sumó al proyecto de Rigra, algo cambió para siempre. La marca dejó de ser una persona y se convirtió en dos. El taller dejó de ser un espacio de trabajo y se convirtió en un lugar donde dos personas construyen algo juntas todos los días.',
        'El nombre lo dice todo: una mirada que ve más allá de lo evidente. La idea de que cada pieza tiene energía propia, y que quien la lleva, la activa.'
      ]
    },
    valores: {
      titulo: 'En Ojo de Chamán trabajamos en armonía con la tierra y con los ciclos que nos rodean.',
      p: 'Buscamos la mejor calidad y la resistencia al paso del tiempo en todo lo que hacemos. Cada nuevo encargo es un nuevo desafío, y cada pieza que sale de nuestro taller tiene una historia dentro.',
      chips: ['Plata 925', 'Oro', 'Piedras naturales', 'Tejido con mostacillas', 'Impresión 3D', 'Piezas únicas']
    },
    cta: {
      titulo: '¿Querés una pieza que cuente <em>tu historia?</em>',
      p: 'Escribinos y la hacemos juntos.',
      pie: 'Hoy operamos desde nuestro taller en Pilar, Buenos Aires y enviamos a todo el país, porque la joyería que porta una historia no tiene fronteras.'
    }
  };

  /* ---------- ESTILO ---------- */
  var css = `
.sob{--g-cream:#f5edd6;--g-paper:#fbf6e8;--g-dark:#1a1208;--g-rust:#8b2e0f;--g-gold:#c8860a;--g-line:#1a1208;
  font-family:var(--body-font,'Lexend',sans-serif);color:var(--g-rust);line-height:1.65}
.sob *{box-sizing:border-box}
.sob h2,.sob h3{font-family:var(--heading-font,'Work Sans',sans-serif);font-weight:700;margin:0;color:var(--g-rust);letter-spacing:-.01em;text-transform:none}
.sob p{margin:0 0 1em}
.sob a{text-decoration:none}
.sob img{display:block;max-width:none}
.sob :focus-visible{outline:2px solid var(--g-gold);outline-offset:3px}
.sob em{font-style:normal;color:var(--g-gold)}
.sob .s-kick{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--g-gold);font-weight:500;display:flex;align-items:center;gap:12px}
.sob .s-kick::before{content:"";width:34px;height:1px;background:var(--g-gold)}
.sob .s-hero{padding:8px 0 56px}
.sob .s-hero h2{font-size:clamp(44px,8.4vw,108px);line-height:.96;margin:14px 0 0;letter-spacing:-.025em}
.sob .s-hf{display:flex;flex-wrap:wrap;gap:22px 56px;align-items:flex-end;justify-content:space-between;margin-top:26px}
.sob .s-hf p{max-width:46ch;margin:0;font-size:clamp(16px,1.6vw,19px);line-height:1.6}
.sob .s-stats{display:flex;gap:34px}
.sob .s-stats b{display:block;font-family:var(--heading-font,'Work Sans',sans-serif);font-size:38px;line-height:1;font-variant-numeric:tabular-nums}
.sob .s-stats span{font-size:11px;letter-spacing:.14em;text-transform:uppercase}
.sob .s-sec{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(28px,5vw,72px);align-items:start;padding:44px 0;border-top:1px solid rgba(26,18,8,.25)}
.sob .s-sec.s-rev{grid-template-columns:minmax(0,7fr) minmax(0,5fr)}
.sob .s-sec.s-rev .s-fig{order:2}
.sob .s-fig{position:sticky;top:24px;margin:0}
.sob .s-fig .s-ph{aspect-ratio:4/5;border:1px solid var(--g-line);border-radius:4px;overflow:hidden;background:#fff;box-shadow:10px 10px 0 -1px var(--g-gold)}
.sob .s-fig img{width:100%!important;height:100%!important;object-fit:cover}
.sob .s-fig figcaption{margin-top:20px;font-size:12px;letter-spacing:.14em;text-transform:uppercase}
.sob .s-txt h3{font-size:clamp(26px,3.6vw,44px);line-height:1.08;margin:14px 0 22px}
.sob .s-txt p{font-size:16px;max-width:62ch}
.sob blockquote{margin:26px 0;padding:6px 0 6px 24px;border-left:3px solid var(--g-gold);max-width:56ch}
.sob blockquote q{display:block;quotes:none;font-family:var(--heading-font,'Work Sans',sans-serif);font-weight:700;font-size:clamp(20px,2.4vw,28px);line-height:1.25;color:var(--g-rust)}
.sob blockquote small{display:block;margin-top:10px;font-size:14px;opacity:.85}
.sob .s-tl{list-style:none;margin:34px 0;padding:0;position:relative;max-width:62ch}
.sob .s-tl::before{content:"";position:absolute;left:7px;top:6px;bottom:6px;width:1px;background:var(--g-rust);opacity:.35}
.sob .s-tl li{position:relative;padding:0 0 22px 36px}
.sob .s-tl li::before{content:"";position:absolute;left:0;top:6px;width:15px;height:15px;border-radius:50%;background:var(--g-cream);border:2px solid var(--g-gold);transition:.3s}
.sob .s-tl li.s-in::before{background:var(--g-gold)}
.sob .s-tl b{display:block;font-family:var(--heading-font,'Work Sans',sans-serif);font-size:20px;line-height:1.2;margin-bottom:2px}
.sob .s-tl span{font-size:15px}
.sob .s-marca{background:var(--g-dark);color:var(--g-cream);padding:clamp(54px,8vw,110px) 0}
.sob .s-marca h3{color:var(--g-cream);font-size:clamp(32px,5.4vw,68px);line-height:1.02;max-width:18ch}
.sob .s-marca .s-cols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px clamp(28px,5vw,72px);margin-top:34px}
.sob .s-marca p{font-size:clamp(16px,1.5vw,18px);margin:0}
.sob .s-marca .s-kick{color:var(--g-gold)}
.sob .s-val{padding:56px 0 24px;text-align:center}
.sob .s-val h3{font-size:clamp(24px,3.4vw,40px);line-height:1.15;max-width:26ch;margin:0 auto 18px}
.sob .s-val p{max-width:58ch;margin:0 auto 26px}
.sob .s-chips{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}
.sob .s-chip{border:1px solid var(--g-rust);border-radius:999px;padding:9px 20px;font-size:13px;transition:.25s}
.sob .s-chip:hover{background:var(--g-rust);color:var(--g-cream)}
.sob .s-cta{padding:56px 0 64px;text-align:center}
.sob .s-cta h3{font-size:clamp(30px,5vw,60px);line-height:1.04;margin:0 auto 14px;max-width:16ch}
.sob .s-cta p{margin:0 auto 26px;font-size:17px}
.sob .s-btns{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
.sob .s-btn{display:inline-flex;align-items:center;gap:10px;border-radius:999px;padding:14px 28px;font-size:14px;font-weight:500;border:1px solid var(--g-rust);transition:.25s}
.sob .s-btn.s-pri{background:var(--g-rust);color:var(--g-cream)}
.sob .s-btn.s-pri:hover{background:var(--g-dark);border-color:var(--g-dark)}
.sob .s-btn.s-sec2{color:var(--g-rust)}
.sob .s-btn.s-sec2:hover{background:rgba(139,46,15,.08)}
.sob .s-btn svg{width:18px;height:18px}
.sob .s-pie{margin:34px auto 0!important;max-width:54ch;font-size:13px!important;opacity:.8}
.sob.s-js .s-rv{opacity:0;transform:translateY(22px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.8,.2,1)}
.sob.s-js .s-rv.s-in{opacity:1;transform:none}
@media (max-width:820px){
  .sob .s-sec,.sob .s-sec.s-rev{grid-template-columns:1fr;padding:34px 0}
  .sob .s-sec.s-rev .s-fig{order:0}
  .sob .s-fig{position:static;max-width:420px}
  .sob .s-marca .s-cols{grid-template-columns:1fr}
  .sob .s-stats{gap:24px}
}
@media (prefers-reduced-motion:reduce){.sob.s-js .s-rv{opacity:1;transform:none;transition:none}}
`;
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var root = $('#sobre-root');
  if (!root) return;
  root.className = 'sob';

  // integración con la plantilla: ancho completo y ocultar el título automático
  var col = root.closest('.col-md-8'); if (col) { col.classList.remove('col-md-8'); col.classList.add('col-12'); }
  Array.prototype.forEach.call(document.querySelectorAll('h1'), function (h) {
    if (!root.contains(h) && /^(Sobre nosotros|Somos Rigra y Vero)$/.test(h.textContent.trim())) h.style.display = 'none';
  });

  var WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.3 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z"/></svg>';
  var P = function (arr) { return arr.map(function (t) { return '<p>' + t + '</p>'; }).join(''); };
  var R = T.rigra, V = T.vero;

  root.innerHTML =
    '<section class="s-hero s-rv"><div class="s-kick">Sobre nosotros</div><h2>Rigra <em>&amp; Vero</em></h2>' +
      '<div class="s-hf"><p>' + T.tagline + '</p><div class="s-stats">' +
      T.stats.map(function (s) { return '<div><b>' + s[0] + '</b><span>' + s[1] + '</span></div>'; }).join('') + '</div></div></section>' +

    '<section class="s-sec"><figure class="s-fig s-rv"><div class="s-ph"><img src="' + FOTO_RIGRA + '" alt="Rigra con una cota de malla" style="object-position:50% 30%" loading="lazy"></div><figcaption>Rigra · joyero</figcaption></figure>' +
      '<div class="s-txt"><div class="s-kick s-rv">' + R.kick + '</div><h3 class="s-rv">' + R.titulo + '</h3>' +
      '<p class="s-rv">' + R.citaIntro + '</p><blockquote class="s-rv"><q>“' + R.cita + '”</q><small>' + R.citaOut + '</small></blockquote>' +
      '<div class="s-rv">' + P(R.p) + '</div>' +
      '</div></section>' +

    '<section class="s-sec s-rev"><div class="s-txt"><div class="s-kick s-rv">' + V.kick + '</div><h3 class="s-rv">' + V.titulo + '</h3><div class="s-rv">' + P(V.p) + '</div></div>' +
      '<figure class="s-fig s-rv"><div class="s-ph"><img src="' + FOTO_VERO + '" alt="Vero caminando por un pasillo del Congreso de la Nación" style="object-position:52% 50%" loading="lazy"></div><figcaption>Vero · gestora cultural</figcaption></figure></section>' +

    '<section class="s-marca" id="smarca"><div class="s-in2"><div class="s-kick s-rv">La marca</div><h3 class="s-rv" style="margin-top:14px">' + T.marca.titulo + '</h3>' +
      '<div class="s-cols s-rv">' + T.marca.p.map(function (t) { return '<p>' + t + '</p>'; }).join('') + '</div></div></section>' +

    '<section class="s-val"><h3 class="s-rv">' + T.valores.titulo + '</h3><p class="s-rv">' + T.valores.p + '</p>' +
      '<div class="s-chips s-rv">' + T.valores.chips.map(function (c) { return '<span class="s-chip">' + c + '</span>'; }).join('') + '</div></section>' +

    '<section class="s-cta"><h3 class="s-rv">' + T.cta.titulo + '</h3><p class="s-rv">' + T.cta.p + '</p>' +
      '<div class="s-btns s-rv"><a class="s-btn s-pri" href="' + wa('Hola! Vi la página de Ojo de Chamán y quiero consultar por una pieza.') + '" target="_blank" rel="noopener">' + WA_SVG + 'Escribinos por WhatsApp</a>' +
      '<a class="s-btn s-sec2" href="/productos/">Ver productos</a></div>' +
      '<p class="s-pie s-rv">' + T.cta.pie + '</p></section>';

  // banda oscura a todo el ancho
  var band = $('#smarca');
  function fit() {
    band.style.width = ''; band.style.marginLeft = '0px';
    var left = band.getBoundingClientRect().left;
    band.style.width = document.documentElement.clientWidth + 'px'; band.style.marginLeft = (-left) + 'px';
    var c = root.closest('.container'), inn = $('.s-in2', band);
    if (c) { var w = c.getBoundingClientRect().width; inn.style.maxWidth = (w - 30) + 'px'; inn.style.margin = '0 auto'; }
  }
  fit(); setTimeout(fit, 400); addEventListener('load', fit); addEventListener('resize', fit);

  // aparición al hacer scroll (si algo falla, todo queda visible)
  var els = root.querySelectorAll('.s-rv');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('s-js');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('s-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
    setTimeout(function () { Array.prototype.forEach.call(els, function (el) { var r = el.getBoundingClientRect(); if (r.top < innerHeight) el.classList.add('s-in'); }); }, 600);
  }
})();
