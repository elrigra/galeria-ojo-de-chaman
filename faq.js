/* Preguntas frecuentes · Ojo de Chamán
   Se carga desde la página "Preguntas Frecuentes" de la tienda con:
   <div id="faq-root"></div><script src=".../faq.js"></script>
   Las preguntas y respuestas están en este archivo (sección TEXTOS).
   En las respuestas, una línea que empieza con "##" es un subtítulo. */
(function () {
  var WA = '5491133112754';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var wa = function (t) { return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t); };
  var MAIL = '<a href="mailto:infodechaman@gmail.com">infodechaman@gmail.com</a>';
  var IG = '<a href="https://www.instagram.com/ojo.de.chaman/" target="_blank" rel="noopener">@ojo.de.chaman</a>';

  /* ---------- TEXTOS ---------- */
  var CATS = ['Envíos y pagos', 'Encargos', 'Showroom', 'Cuidado de tus joyas'];
  var Q = [
    { c: 0, q: '¿Cómo se realizan los envíos?', a: [
      'Los envíos se realizan por Correo Argentino y superando los $120.000 <b>¡son gratis a todo el país!</b>',
      'Luego de despachado tu paquete recibirás un email con el número de seguimiento para poder saber dónde se encuentra en cada momento.',
      'Dependiendo del destino, puede tardar desde 3 a 6 días en llegar. El cartero hará un intento de entrega y de no encontrar a nadie en el domicilio, dejará un aviso y deberás buscar tu paquete en la sucursal de correo más cercana.',
      '## Envíos internacionales',
      'Consultanos a ' + MAIL] },
    { c: 0, q: '¿Cuáles son las formas de pago?', a: [
      'El pago podés hacerlo a través de Mercado Pago con todas las facilidades y tarjetas de crédito que ofrece.',
      'También por transferencia o depósito bancario accediendo a un descuento extra del 10%. Al realizar la compra recibirás un email con los datos de la cuenta.',
      'Consultanos en caso de querer pagar usando criptomonedas.'] },
    { c: 1, q: '¿Hacen encargos personalizados?', a: [
      'Sí, es una de las cosas que más amamos hacer. Podés encargar una pieza completamente a tu medida, desde el diseño hasta el material. Trabajamos en plata 925, oro, piedras naturales y chaquiras. Si tenés una idea, una imagen o un recuerdo que querés convertir en joya, escribinos y lo hacemos realidad.',
      'Para iniciar un encargo escribinos a ' + MAIL + ' o por Instagram a ' + IG + '.'] },
    { c: 1, q: '¿Cuánto tarda un encargo personalizado?', a: [
      'Depende de la complejidad de la pieza. Siempre te avisamos el tiempo estimado antes de confirmar el encargo.'] },
    { c: 1, q: '¿Puedo traer mi propio oro para que lo transformen?', a: [
      'Sí. Si tenés joyas de oro que ya no usás (alianzas, aros, cadenas) podemos fundirlas y transformarlas en una pieza nueva con diseño a tu elección. Es una de las formas más especiales de hacer joyería: el metal tiene una historia, y la nueva pieza la porta.',
      'Consultanos para coordinar la entrega del material y el presupuesto.'] },
    { c: 2, q: '¿Tienen showroom físico?', a: [
      'Sí, podés visitarnos en el showroom Espacio Hormiga en Islas Malvinas 2631, Castelar, Provincia de Buenos Aires. Ahí podés ver las piezas en persona, probártelas y encargar tu joya cara a cara con Rigra o Vero.',
      'Consultá horarios de atención por Instagram antes de venir: <a href="https://www.instagram.com/espacio.hormiga/" target="_blank" rel="noopener">@espacio.hormiga</a>'] },
    { c: 1, q: '¿Hacen alianzas de matrimonio?', a: [
      'Sí, hacemos alianzas artesanales en plata 925 y oro. Cada par se trabaja a mano y podemos incluir grabado interior con una fecha, inicial o frase. Al ser encargos personalizados, el precio varía según el diseño y el material, escribinos para cotizar el tuyo.'] },
    { c: 0, q: '¿Puedo solicitar un cambio?', a: [
      'Podés solicitar un cambio de tu joya hasta 15 días luego de recibir tu pedido. Para eso escribinos a ' + MAIL + '. Es necesario que no la hayas usado y que la guardes en su packaging original para poder acceder al cambio.'] },
    { c: 3, q: '¿Cómo cuidar tus joyas?', a: [
      'Cada pieza de Ojo de Chamán fue hecha a mano en plata 925. Cuidar de tus joyas asegura que se vean hermosas cada vez que las uses.',
      'La plata naturalmente va perdiendo su brillo con el tiempo, pero lo hará mucho más rápido si está expuesta a luz UV, perfumes, aire de mar, cremas para la piel, spray de pelo, cloros y detergentes. Esto es completamente normal y no significa que el material sea de poca calidad.',
      'Por eso te recomendamos que te las saques cuando te bañás, cuando limpiás, cuando hacés ejercicio o cuando te vas a dormir. Evitá ponerte perfume o cremas directamente sobre ellas y tené cuidado con productos químicos de limpieza.'] },
    { c: 3, q: '¿Cómo limpiar tus joyas?', a: [
      'Podés usar jabón suave con agua tibia para frotar gentilmente tus piezas. De ser necesario ayudate con un cepillo de dientes para remover la suciedad más difícil. Después enjuagá con abundante agua y asegurate de que queden completamente secas antes de guardarlas.',
      'Para restaurar el brillo de una pieza opacada, usá un paño de pulido o microfibra y frotá con suavidad hasta recuperar el lustre.'] },
    { c: 3, q: '¿Cómo guardar tus joyas?', a: [
      'Guardá los colgantes con las cadenas sujetas para evitar que se enreden. Evitá dejarlas al sol, en ambientes húmedos como el baño, o expuestas al aire. Las cajas herméticas o bolsas ziplock individuales son ideales porque evitan que pierdan el brillo y que se dañen entre sí.',
      'Los platitos en la mesa de luz y los exhibidores de joyería son muy lindos, pero dejan las joyas expuestas al aire y a la luz — solo se recomiendan para las piezas que vas a volver a usar en el corto plazo.'] }
  ];
  var T = {
    kick: 'Ayuda',
    sub: 'Todo lo que necesitás saber antes de comprar o encargar tu pieza.',
    ctaTitulo: '¿No encontraste lo que buscabas? <em>Escribinos.</em>',
    ctaP: 'Te respondemos personalmente, Rigra y Vero.'
  };

  /* ---------- ESTILO ---------- */
  var css = `
.faq{--g-cream:#f5edd6;--g-paper:#fbf6e8;--g-dark:#1a1208;--g-rust:#8b2e0f;--g-gold:#c8860a;--g-line:#1a1208;
  font-family:var(--body-font,'Lexend',sans-serif);color:var(--g-rust);line-height:1.65}
.faq *{box-sizing:border-box}
.faq h2,.faq h3,.faq h4{font-family:var(--heading-font,'Work Sans',sans-serif);font-weight:700;margin:0;color:var(--g-rust);letter-spacing:-.01em;text-transform:none}
.faq p{margin:0 0 1em}
.faq a{color:var(--g-rust);text-decoration:underline;text-underline-offset:3px;text-decoration-color:var(--g-gold)}
.faq a:hover{color:var(--g-gold)}
.faq button{font:inherit;color:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer;border-radius:0;text-transform:none;letter-spacing:0;box-shadow:none;text-align:left}
.faq :focus-visible{outline:2px solid var(--g-gold);outline-offset:3px}
.faq em{font-style:normal;color:var(--g-gold)}
.faq .f-kick{font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--g-gold);font-weight:500;display:flex;align-items:center;gap:12px}
.faq .f-kick::before{content:"";width:34px;height:1px;background:var(--g-gold)}
.faq .f-hero{padding:8px 0 34px}
.faq .f-hero h2{font-size:clamp(42px,7.6vw,96px);line-height:.98;margin:14px 0 0;letter-spacing:-.025em}
.faq .f-hero p{max-width:46ch;margin:22px 0 0;font-size:clamp(16px,1.6vw,19px)}
.faq .f-main{display:grid;grid-template-columns:minmax(0,3fr) minmax(0,8fr);gap:clamp(24px,5vw,72px);align-items:start;padding:34px 0 20px;border-top:1px solid rgba(26,18,8,.25)}
.faq .f-side{position:sticky;top:24px}
.faq .f-search{position:relative;margin-bottom:18px}
.faq .f-search input{width:100%;height:46px;border:1px solid var(--g-line);border-radius:999px;background:#fff;padding:0 20px 0 44px;font:inherit;font-size:14px;color:var(--g-dark);margin:0;box-shadow:none}
.faq .f-search input:focus{outline:2px solid var(--g-gold);outline-offset:2px}
.faq .f-search svg{position:absolute;left:16px;top:50%;transform:translateY(-50%);width:16px;height:16px;color:var(--g-rust)}
.faq .f-chips{display:flex;flex-direction:column;gap:8px;align-items:flex-start}
.faq .f-chip{border:1px solid var(--g-rust);border-radius:999px;padding:8px 18px;font-size:13px;transition:.25s;display:inline-flex;gap:8px;align-items:center;color:var(--g-rust)}
.faq .f-chip i{font-style:normal;font-size:11px;opacity:.65}
.faq .f-chip:hover{background:rgba(139,46,15,.08)}
.faq .f-chip[aria-pressed=true]{background:var(--g-rust);color:var(--g-cream)}
.faq .f-count{margin-top:18px;font-size:12px;letter-spacing:.12em;text-transform:uppercase}
.faq .f-list{border-top:1px solid var(--g-line)}
.faq .f-item{border-bottom:1px solid var(--g-line)}
.faq .f-item[hidden]{display:none}
.faq .f-q{width:100%;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:22px 0;font-family:var(--heading-font,'Work Sans',sans-serif);font-weight:700;font-size:clamp(17px,2vw,22px);line-height:1.25;color:var(--g-rust);transition:color .25s}
.faq .f-q:hover{color:var(--g-gold)}
.faq .f-plus{flex:none;width:34px;height:34px;border:1px solid var(--g-rust);border-radius:50%;position:relative;transition:transform .35s,background .25s}
.faq .f-plus::before,.faq .f-plus::after{content:"";position:absolute;left:50%;top:50%;width:12px;height:1.5px;background:var(--g-rust);transform:translate(-50%,-50%);transition:.3s}
.faq .f-plus::after{transform:translate(-50%,-50%) rotate(90deg)}
.faq .f-item.f-open .f-plus{transform:rotate(180deg);background:var(--g-rust)}
.faq .f-item.f-open .f-plus::before,.faq .f-item.f-open .f-plus::after{background:var(--g-cream)}
.faq .f-item.f-open .f-plus::after{transform:translate(-50%,-50%) rotate(0deg)}
.faq .f-pan{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s cubic-bezier(.2,.8,.2,1)}
.faq .f-item.f-open .f-pan{grid-template-rows:1fr}
.faq .f-pan>div{overflow:hidden}
.faq .f-a{padding:0 0 24px;max-width:64ch;font-size:16px}
.faq .f-a h4{font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:var(--g-gold);margin:18px 0 6px}
.faq .f-none{padding:30px 0;font-size:16px}
.faq .f-cta{margin:clamp(40px,6vw,72px) 0 64px;background:var(--g-dark);color:var(--g-cream);border-radius:4px;padding:clamp(32px,5vw,64px);display:flex;flex-wrap:wrap;gap:24px 40px;align-items:center;justify-content:space-between}
.faq .f-cta h3{color:var(--g-cream);font-size:clamp(26px,3.8vw,46px);line-height:1.05;max-width:18ch}
.faq .f-cta p{margin:12px 0 0;font-size:16px}
.faq .f-btns{display:flex;flex-wrap:wrap;gap:12px}
.faq .f-btn{display:inline-flex;align-items:center;gap:10px;border-radius:999px;padding:14px 26px;font-size:14px;font-weight:500;border:1px solid var(--g-cream);text-decoration:none;transition:.25s;color:var(--g-cream)}
.faq .f-btn.f-pri{background:var(--g-cream);color:var(--g-dark)}
.faq .f-btn.f-pri:hover{background:var(--g-gold);border-color:var(--g-gold);color:var(--g-dark)}
.faq .f-btn:not(.f-pri):hover{background:rgba(245,237,214,.12);color:var(--g-cream)}
.faq .f-btn svg{width:18px;height:18px}
.faq.f-js .f-rv{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.8,.2,1)}
.faq.f-js .f-rv.f-in{opacity:1;transform:none}
@media (max-width:820px){
  .faq .f-main{grid-template-columns:1fr;gap:20px;padding-top:26px}
  .faq .f-side{position:static}
  .faq .f-chips{flex-direction:row;flex-wrap:nowrap;overflow-x:auto;padding-bottom:6px;margin:0 -2px}
  .faq .f-chip{flex:none;white-space:nowrap}
  .faq .f-count{margin-top:12px}
}
@media (prefers-reduced-motion:reduce){.faq .f-pan,.faq .f-plus{transition:none}.faq.f-js .f-rv{opacity:1;transform:none;transition:none}}
`;
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var root = $('#faq-root');
  if (!root) return;
  root.className = 'faq';

  // integración con la plantilla: ancho completo y ocultar el título automático
  var col = root.closest('.col-md-8'); if (col) { col.classList.remove('col-md-8'); col.classList.add('col-12'); }
  Array.prototype.forEach.call(document.querySelectorAll('h1'), function (h) {
    if (!root.contains(h) && /^Preguntas Frecuentes$/i.test(h.textContent.trim())) h.style.display = 'none';
  });

  var WA_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.3 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z"/></svg>';
  var SEARCH_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
  var norm = function (s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); };
  var strip = function (h) { var d = document.createElement('div'); d.innerHTML = h; return d.textContent; };

  var ansHtml = function (a) {
    return a.map(function (t) { return t.indexOf('##') === 0 ? '<h4>' + t.slice(2).trim() + '</h4>' : '<p>' + t + '</p>'; }).join('');
  };

  var counts = CATS.map(function (_, i) { return Q.filter(function (x) { return x.c === i; }).length; });
  root.innerHTML =
    '<section class="f-hero f-rv"><div class="f-kick">' + T.kick + '</div><h2>Preguntas <em>frecuentes</em></h2><p>' + T.sub + '</p></section>' +
    '<section class="f-main"><aside class="f-side f-rv">' +
      '<label class="f-search"><span class="screen-reader-text" style="position:absolute;left:-9999px">Buscar en las preguntas</span>' + SEARCH_SVG + '<input id="fsearch" type="search" placeholder="Buscar una pregunta…" autocomplete="off"></label>' +
      '<div class="f-chips" id="fchips"><button class="f-chip" data-c="-1" aria-pressed="true">Todas <i>' + Q.length + '</i></button>' +
      CATS.map(function (c, i) { return '<button class="f-chip" data-c="' + i + '" aria-pressed="false">' + c + ' <i>' + counts[i] + '</i></button>'; }).join('') + '</div>' +
      '<div class="f-count" id="fcount"></div></aside>' +
    '<div><div class="f-list f-rv" id="flist">' +
      Q.map(function (x, i) {
        return '<div class="f-item" data-c="' + x.c + '" data-t="' + norm(x.q + ' ' + strip(x.a.join(' '))).replace(/"/g, '') + '">' +
          '<h3><button class="f-q" aria-expanded="false" aria-controls="fa' + i + '" id="fq' + i + '"><span>' + x.q + '</span><span class="f-plus" aria-hidden="true"></span></button></h3>' +
          '<div class="f-pan" id="fa' + i + '" role="region" aria-labelledby="fq' + i + '"><div><div class="f-a">' + ansHtml(x.a) + '</div></div></div></div>';
      }).join('') +
      '<div class="f-none" id="fnone" hidden>No encontramos esa pregunta. Probá con otra palabra o escribinos directamente, abajo.</div></div></div></section>' +
    '<section class="f-cta f-rv"><div><h3>' + T.ctaTitulo + '</h3><p>' + T.ctaP + '</p></div>' +
      '<div class="f-btns"><a class="f-btn f-pri" href="' + wa('Hola! Tengo una consulta sobre Ojo de Chamán.') + '" target="_blank" rel="noopener">' + WA_SVG + 'WhatsApp</a>' +
      '<a class="f-btn" href="https://www.instagram.com/ojo.de.chaman/" target="_blank" rel="noopener">Instagram</a>' +
      '<a class="f-btn" href="mailto:infodechaman@gmail.com">Email</a></div></section>';

  // acordeón
  var items = Array.prototype.slice.call(root.querySelectorAll('.f-item'));
  items.forEach(function (it) {
    $('.f-q', it).addEventListener('click', function () {
      var open = it.classList.toggle('f-open');
      $('.f-q', it).setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // filtro por categoría + búsqueda
  var cur = -1, term = '';
  var count = $('#fcount'), none = $('#fnone');
  function apply() {
    var n = 0, t = norm(term.trim());
    items.forEach(function (it) {
      var ok = (cur < 0 || +it.getAttribute('data-c') === cur) && (!t || it.getAttribute('data-t').indexOf(t) > -1);
      it.hidden = !ok; if (ok) n++;
    });
    none.hidden = n > 0;
    count.textContent = n + (n === 1 ? ' pregunta' : ' preguntas');
  }
  Array.prototype.forEach.call(root.querySelectorAll('.f-chip'), function (b) {
    b.addEventListener('click', function () {
      cur = +b.getAttribute('data-c');
      Array.prototype.forEach.call(root.querySelectorAll('.f-chip'), function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      apply();
    });
  });
  $('#fsearch').addEventListener('input', function (e) { term = e.target.value; apply(); });
  apply();

  // datos estructurados para Google (preguntas y respuestas)
  try {
    var ld = document.createElement('script'); ld.type = 'application/ld+json';
    ld.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: Q.map(function (x) {
      return { '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: strip(x.a.map(function (t) { return t.replace(/^##\s*/, ''); }).join(' ')) } };
    }) });
    document.head.appendChild(ld);
  } catch (e) {}

  // aparición al hacer scroll (si algo falla, todo queda visible)
  var els = root.querySelectorAll('.f-rv');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    root.classList.add('f-js');
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('f-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.03 });
    Array.prototype.forEach.call(els, function (el) { io.observe(el); });
    setTimeout(function () { Array.prototype.forEach.call(els, function (el) { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('f-in'); }); }, 600);
  }
})();
