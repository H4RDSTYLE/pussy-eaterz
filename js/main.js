/* =============================================
   PU$$Y EATERZ — Customizador SVG
   ============================================= */
(function () {
  'use strict';

  /* ---- PATHS POR MODELO ---- */
  const MODELS = {
    clasico: {
      label: 'Clásico',
      precio: 18,
      wb:    'M 15,58 Q 200,38 385,58 L 378,88 Q 200,72 22,88 Z',
      left:  'M 22,88 Q 62,172 174,256 L 190,250 Q 66,166 42,84 Z',
      right: 'M 378,88 Q 338,172 226,256 L 210,250 Q 334,166 358,84 Z',
      panel: 'M 174,256 Q 200,288 226,256 Q 200,238 174,256 Z',
      stitch:'M 18,62 Q 200,43 382,62',
      clip:  'M 15,58 Q 200,38 385,58 L 378,88 Q 200,72 22,88 Z M 22,88 Q 62,172 174,256 L 190,250 Q 66,166 42,84 Z M 378,88 Q 338,172 226,256 L 210,250 Q 334,166 358,84 Z M 174,256 Q 200,288 226,256 Q 200,238 174,256 Z',
      textY: 185,
    },
    fino: {
      label: 'Tanga Fino',
      precio: 20,
      wb:    'M 60,62 Q 200,46 340,62 L 335,86 Q 200,72 65,86 Z',
      left:  'M 65,86 Q 90,168 183,252 L 192,246 Q 72,162 80,84 Z',
      right: 'M 335,86 Q 310,168 217,252 L 208,246 Q 328,162 320,84 Z',
      panel: 'M 183,252 Q 200,280 217,252 Q 200,240 183,252 Z',
      stitch:'M 63,66 Q 200,51 337,66',
      clip:  'M 60,62 Q 200,46 340,62 L 335,86 Q 200,72 65,86 Z M 65,86 Q 90,168 183,252 L 192,246 Q 72,162 80,84 Z M 335,86 Q 310,168 217,252 L 208,246 Q 328,162 320,84 Z M 183,252 Q 200,280 217,252 Q 200,240 183,252 Z',
      textY: 180,
    },
    brasileno: {
      label: 'Brasileño',
      precio: 22,
      wb:    'M 5,55 Q 200,30 395,55 L 390,92 Q 200,70 10,92 Z',
      left:  'M 10,92 Q 40,180 158,262 L 180,254 Q 56,172 30,88 Z',
      right: 'M 390,92 Q 360,180 242,262 L 220,254 Q 344,172 370,88 Z',
      panel: 'M 158,262 Q 200,300 242,262 Q 200,240 158,262 Z',
      stitch:'M 8,60 Q 200,38 392,60',
      clip:  'M 5,55 Q 200,30 395,55 L 390,92 Q 200,70 10,92 Z M 10,92 Q 40,180 158,262 L 180,254 Q 56,172 30,88 Z M 390,92 Q 360,180 242,262 L 220,254 Q 344,172 370,88 Z M 158,262 Q 200,300 242,262 Q 200,240 158,262 Z',
      textY: 192,
    },
  };

  /* ---- TEMA DECORACIONES (SVG innerHTML) ---- */
  const TEMAS = {
    ninguno: {
      label: 'Sin tema',
      color: null,
      decor: '',
    },
    tarot: {
      label: 'Tarot',
      color: '#6c3483',
      decor: `
        <text x="200" y="175" text-anchor="middle" font-size="52" opacity=".85">☽</text>
        <text x="120" y="152" text-anchor="middle" font-size="18" fill="rgba(255,255,255,0.5)">✦</text>
        <text x="280" y="152" text-anchor="middle" font-size="18" fill="rgba(255,255,255,0.5)">✦</text>
        <text x="155" y="205" text-anchor="middle" font-size="13" fill="rgba(255,255,255,0.45)">★</text>
        <text x="245" y="205" text-anchor="middle" font-size="13" fill="rgba(255,255,255,0.45)">★</text>
        <text x="200" y="260" text-anchor="middle" font-size="16" fill="rgba(255,255,255,0.6)">✦</text>
        <line x1="160" y1="178" x2="185" y2="183" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        <line x1="215" y1="183" x2="240" y2="178" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>`,
    },
    haaland: {
      label: 'Haaland',
      color: '#1e3a5f',
      decor: `
        <text x="200" y="195" text-anchor="middle" font-family="Georgia,serif" font-size="80"
              font-weight="bold" fill="rgba(255,255,255,0.07)">9</text>
        <text x="200" y="188" text-anchor="middle" font-family="Georgia,serif" font-size="56"
              font-weight="bold" fill="rgba(255,255,255,0.78)">9</text>
        <polygon points="200,108 206,122 222,122 210,131 214,147 200,138 186,147 190,131 178,122 194,122"
                 fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
        <text x="200" y="262" text-anchor="middle" font-size="14" fill="rgba(255,255,255,0.5)">⚽</text>`,
    },
    guia: {
      label: 'Guía Comer Coños',
      color: '#c0392b',
      decor: `
        <text x="200" y="68" text-anchor="middle" font-family="monospace" font-size="7.5"
              fill="rgba(255,255,255,0.5)" letter-spacing="2">INSTRUCCIONES DE USO</text>
        <text x="200" y="165" text-anchor="middle" font-size="52" fill="rgba(255,255,255,0.82)">↓</text>
        <text x="200" y="210" text-anchor="middle" font-family="monospace" font-size="10"
              font-weight="bold" fill="rgba(255,255,255,0.6)" letter-spacing="3">RTFM</text>
        <line x1="155" y1="218" x2="245" y2="218" stroke="rgba(255,255,255,0.2)" stroke-width=".8"/>
        <text x="200" y="262" text-anchor="middle" font-size="14" fill="rgba(255,255,255,0.6)">📖</text>`,
    },
    horoscopo: {
      label: 'Horóscopo',
      color: '#0d0020',
      decor: `
        <circle cx="100" cy="132" r="2.2" fill="#d4af37" opacity=".85"/>
        <circle cx="145" cy="112" r="1.6" fill="#d4af37" opacity=".75"/>
        <circle cx="168" cy="143" r="2.8" fill="#d4af37" opacity=".9"/>
        <line x1="100" y1="132" x2="145" y2="112" stroke="#d4af37" stroke-width=".8" opacity=".35"/>
        <line x1="145" y1="112" x2="168" y2="143" stroke="#d4af37" stroke-width=".8" opacity=".35"/>
        <circle cx="300" cy="128" r="2.2" fill="#d4af37" opacity=".85"/>
        <circle cx="255" cy="110" r="1.6" fill="#d4af37" opacity=".75"/>
        <circle cx="232" cy="141" r="2.8" fill="#d4af37" opacity=".9"/>
        <line x1="300" y1="128" x2="255" y2="110" stroke="#d4af37" stroke-width=".8" opacity=".35"/>
        <line x1="255" y1="110" x2="232" y2="141" stroke="#d4af37" stroke-width=".8" opacity=".35"/>
        <text x="200" y="185" text-anchor="middle" font-size="44" fill="#d4af37" opacity=".9">♎</text>
        <text x="200" y="66" text-anchor="middle" font-family="serif" font-size="8.5"
              fill="#d4af37" opacity=".55" letter-spacing="3">✦ ♈ ♉ ♊ ♋ ♌ ♍ ✦</text>
        <text x="200" y="262" text-anchor="middle" font-size="12" fill="#d4af37" opacity=".65">✦</text>`,
    },
    setas: {
      label: 'Setas Mágicas',
      color: '#1e5c34',
      decor: `
        <circle cx="82"  cy="122" r="5.5" fill="rgba(255,255,255,0.32)"/>
        <circle cx="130" cy="107" r="4"   fill="rgba(255,255,255,0.28)"/>
        <circle cx="112" cy="155" r="3.2" fill="rgba(255,255,255,0.22)"/>
        <circle cx="293" cy="120" r="5.5" fill="rgba(255,255,255,0.32)"/>
        <circle cx="248" cy="108" r="4"   fill="rgba(255,255,255,0.28)"/>
        <circle cx="310" cy="158" r="3.2" fill="rgba(255,255,255,0.22)"/>
        <ellipse cx="200" cy="152" rx="30" ry="20" fill="#e74c3c" opacity=".88"/>
        <circle cx="191" cy="146" r="5"   fill="rgba(255,255,255,0.58)"/>
        <circle cx="209" cy="143" r="3.5" fill="rgba(255,255,255,0.5)"/>
        <circle cx="200" cy="157" r="4"   fill="rgba(255,255,255,0.52)"/>
        <rect x="195" y="172" width="10" height="24" rx="3" fill="#c8a97e" opacity=".9"/>
        <ellipse cx="200" cy="196" rx="14" ry="5" fill="#a07850" opacity=".6"/>
        <text x="200" y="262" text-anchor="middle" font-size="14" fill="rgba(255,255,255,0.6)">🍄</text>`,
    },
    lola: {
      label: 'Lola Flores',
      color: '#e63946',
      decor: `
        <text x="200" y="178" text-anchor="middle" font-size="48">🌹</text>
        <line x1="28" y1="90" x2="28" y2="104" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="50" y1="86" x2="50" y2="100" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="72" y1="82" x2="72" y2="96" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="94" y1="79" x2="94" y2="93" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="116" y1="77" x2="116" y2="91" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="138" y1="75" x2="138" y2="89" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="160" y1="74" x2="160" y2="88" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="182" y1="73" x2="182" y2="87" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="200" y1="72" x2="200" y2="86" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="218" y1="73" x2="218" y2="87" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="240" y1="74" x2="240" y2="88" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="262" y1="75" x2="262" y2="89" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="284" y1="77" x2="284" y2="91" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="306" y1="79" x2="306" y2="93" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="328" y1="82" x2="328" y2="96" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="350" y1="86" x2="350" y2="100" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>
        <line x1="372" y1="90" x2="372" y2="104" stroke="rgba(0,0,0,0.28)" stroke-width="1.8"/>`,
    },
  };

  /* ---- STATE ---- */
  const state = {
    modelo:    'clasico',
    color:     '#F9C5D1',
    tema:      'ninguno',
    talla:     'S',
    userImage: null,
    texto:     '',
  };

  /* ---- SVG ELEMENTS ---- */
  const svgEl        = document.getElementById('tangaSVG');
  const svgWB        = document.getElementById('svgWaistband');
  const svgLeft      = document.getElementById('svgLeftStrap');
  const svgRight     = document.getElementById('svgRightStrap');
  const svgPanel     = document.getElementById('svgPanel');
  const svgLaceWB    = document.getElementById('svgLaceWB');
  const svgShineL    = document.getElementById('svgShineL');
  const svgShineR    = document.getElementById('svgShineR');
  const svgOutlineWB = document.getElementById('svgOutlineWB');
  const svgOutlineL  = document.getElementById('svgOutlineL');
  const svgOutlineR  = document.getElementById('svgOutlineR');
  const svgOutlineP  = document.getElementById('svgOutlineP');
  const svgStitch    = document.getElementById('svgStitch');
  const svgTheme     = document.getElementById('svgTheme');
  const svgEmbText   = document.getElementById('svgEmbText');
  const svgUserImg   = document.getElementById('svgUserImg');
  const userImgClipPath = document.getElementById('userImgClipPath');
  const modelTag     = document.getElementById('modelTag');

  /* ---- SUMMARY ELEMENTS ---- */
  const precioTotal = document.getElementById('precioTotal');
  const sumModelo   = document.getElementById('sumModelo');
  const sumColor    = document.getElementById('sumColor');
  const sumTema     = document.getElementById('sumTema');
  const sumTalla    = document.getElementById('sumTalla');
  const sumPrecio   = document.getElementById('sumPrecio');
  const charCount   = document.getElementById('charCount');

  /* ---- RENDER ---- */
  function render() {
    const m = MODELS[state.modelo];
    const t = TEMAS[state.tema];

    // Color: tema auto-color overrides unless user manually picked
    const baseColor = t.color && !state.colorManual ? t.color : state.color;

    // Shape paths
    [svgWB, svgLeft, svgRight, svgPanel].forEach(el => el.setAttribute('fill', baseColor));
    svgWB.setAttribute('d',    m.wb);
    svgLeft.setAttribute('d',  m.left);
    svgRight.setAttribute('d', m.right);
    svgPanel.setAttribute('d', m.panel);

    svgLaceWB.setAttribute('d', m.wb);
    svgShineL.setAttribute('d', m.left);
    svgShineR.setAttribute('d', m.right);

    svgOutlineWB.setAttribute('d', m.wb);
    svgOutlineL.setAttribute('d',  m.left);
    svgOutlineR.setAttribute('d',  m.right);
    svgOutlineP.setAttribute('d',  m.panel);
    svgStitch.setAttribute('d',   m.stitch);

    // Clip path for user image
    userImgClipPath.setAttribute('d', m.clip);

    // Model tag
    modelTag.textContent = m.label;

    // Theme decorations
    svgTheme.innerHTML = t.decor;

    // User image
    if (state.userImage) {
      svgUserImg.setAttribute('href', state.userImage);
      svgUserImg.style.display = 'block';
    } else {
      svgUserImg.setAttribute('href', '');
      svgUserImg.style.display = 'none';
    }

    // Embroidered text
    if (state.texto.trim()) {
      svgEmbText.textContent = state.texto;
      svgEmbText.setAttribute('y', m.textY);
      svgEmbText.style.display = 'block';
      // Adapt text color for light backgrounds
      const isLight = isLightColor(baseColor);
      svgEmbText.setAttribute('fill', isLight ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.88)');
    } else {
      svgEmbText.style.display = 'none';
    }

    // Update outline opacity based on color brightness
    const outlineColor = isLightColor(baseColor) ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.12)';
    [svgOutlineWB, svgOutlineL, svgOutlineR, svgOutlineP].forEach(el =>
      el.setAttribute('stroke', outlineColor)
    );
    svgStitch.setAttribute('stroke', isLightColor(baseColor) ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)');

    // Summary
    sumModelo.textContent    = m.label;
    sumColor.style.background = baseColor;
    sumTema.textContent      = t.label;
    sumTalla.textContent     = state.talla;
    precioTotal.textContent  = m.precio;
    sumPrecio.textContent    = m.precio;
  }

  function isLightColor(hex) {
    const c = hex.replace('#','');
    if (c.length < 6) return true;
    const r = parseInt(c.substr(0,2),16);
    const g = parseInt(c.substr(2,2),16);
    const b = parseInt(c.substr(4,2),16);
    return (r*299 + g*587 + b*114) / 1000 > 128;
  }

  /* ---- MODELO ---- */
  document.querySelectorAll('#modeloPills .model-card').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#modeloPills .model-card').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.modelo = btn.dataset.modelo;
      render();
    });
  });

  /* ---- COLORES ---- */
  document.querySelectorAll('#colorSwatches .swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#colorSwatches .swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.color = btn.dataset.color;
      state.colorManual = true;
      render();
    });
  });

  /* ---- TEMA ---- */
  document.querySelectorAll('#temaPills .pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#temaPills .pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.tema = btn.dataset.tema;
      state.colorManual = false; // reset manual color on theme change
      // auto-select matching swatch visually
      const t = TEMAS[state.tema];
      if (t.color) {
        document.querySelectorAll('#colorSwatches .swatch').forEach(b => {
          b.classList.toggle('active', b.dataset.color === t.color);
        });
        state.color = t.color;
      }
      render();
    });
  });

  /* ---- TALLA ---- */
  document.querySelectorAll('#tallaPills .pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tallaPills .pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.talla = btn.dataset.talla;
      render();
    });
  });

  /* ---- UPLOAD IMAGE ---- */
  const uploadArea        = document.getElementById('uploadArea');
  const imgUpload         = document.getElementById('imgUpload');
  const uploadPreview     = document.getElementById('uploadPreview');
  const uploadPlaceholder = document.getElementById('uploadPlaceholder');
  const btnRemoveImg      = document.getElementById('btnRemoveImg');

  uploadArea.addEventListener('click', e => { if (e.target !== btnRemoveImg) imgUpload.click(); });

  uploadArea.addEventListener('dragover', e => {
    e.preventDefault();
    uploadArea.style.borderColor = '#E91E8C';
  });
  uploadArea.addEventListener('dragleave', () => { uploadArea.style.borderColor = ''; });
  uploadArea.addEventListener('drop', e => {
    e.preventDefault();
    uploadArea.style.borderColor = '';
    const file = e.dataTransfer.files[0];
    if (file) loadImage(file);
  });
  imgUpload.addEventListener('change', e => {
    if (e.target.files[0]) loadImage(e.target.files[0]);
  });

  function loadImage(file) {
    if (!file.type.startsWith('image/')) { alert('Solo imágenes, mala.'); return; }
    if (file.size > 5 * 1024 * 1024) { alert('Máximo 5MB, que no es tu tanga de diseño exclusivo.'); return; }
    const reader = new FileReader();
    reader.onload = ev => {
      state.userImage = ev.target.result;
      uploadPreview.src = ev.target.result;
      uploadPreview.style.display = 'block';
      uploadPlaceholder.style.display = 'none';
      btnRemoveImg.style.display = 'inline-flex';
      render();
    };
    reader.readAsDataURL(file);
  }

  btnRemoveImg.addEventListener('click', e => {
    e.stopPropagation();
    state.userImage = null;
    uploadPreview.style.display = 'none';
    uploadPreview.src = '';
    uploadPlaceholder.style.display = 'block';
    btnRemoveImg.style.display = 'none';
    imgUpload.value = '';
    render();
  });

  /* ---- TEXTO ---- */
  const textoInput = document.getElementById('textoInput');
  textoInput.addEventListener('input', () => {
    state.texto = textoInput.value;
    charCount.textContent = state.texto.length;
    render();
  });

  /* ---- "CUSTOMIZAR" desde tarjetas ---- */
  document.querySelectorAll('.card [data-tema]').forEach(btn => {
    btn.addEventListener('click', () => {
      const tema = btn.dataset.tema;
      // Activate tema pill
      document.querySelectorAll('#temaPills .pill').forEach(p => {
        p.classList.toggle('active', p.dataset.tema === tema);
      });
      state.tema = tema;
      state.colorManual = false;
      const t = TEMAS[tema];
      if (t.color) {
        document.querySelectorAll('#colorSwatches .swatch').forEach(b => {
          b.classList.toggle('active', b.dataset.color === t.color);
        });
        state.color = t.color;
      }
      render();
      // Scroll to customizador
      document.getElementById('customizador').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ---- CARRITO ---- */
  let cartCount = 0;
  const navCta    = document.getElementById('navCta');
  const btnAddCart = document.getElementById('btnAddCart');

  btnAddCart.addEventListener('click', () => {
    cartCount++;
    navCta.textContent = `Carrito (${cartCount})`;
    navCta.style.background = '#E91E8C';
    setTimeout(() => { navCta.style.background = ''; }, 700);
    const orig = btnAddCart.innerHTML;
    btnAddCart.innerHTML = '✓ Añadido al carrito';
    btnAddCart.disabled = true;
    setTimeout(() => { btnAddCart.innerHTML = orig; btnAddCart.disabled = false; }, 2000);
  });

  /* ---- NAV SCROLL ---- */
  window.addEventListener('scroll', () => {
    document.querySelector('.nav').style.boxShadow =
      window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.12)' : 'none';
  });

  /* ---- INIT ---- */
  render();

})();
