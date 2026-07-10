/* =============================================
   PU$$Y EATERZ — Customizador SVG + Sparkles
   Raxxeta edition ✦
   ============================================= */
(function () {
  'use strict';

  /* ──────────────────────────────────────────
     BRILLI BRILLI — Sparkle generator
  ────────────────────────────────────────── */
  const SPARKLE_CHARS = ['✦', '★', '✶', '⋆', '✸', '✺', '✻', '✼', '❋', '⊹'];
  const SPARKLE_COLORS = ['#E91E8C','#da70d6','#ffd700','#ff69b4','#87ceeb','#ff1493','#fff'];

  function randBetween(a, b) { return a + Math.random() * (b - a); }

  function createSparkle() {
    const el = document.createElement('span');
    el.className = 'sparkle';
    el.textContent = SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)];
    const size  = randBetween(0.6, 1.8);
    const dur   = randBetween(2.5, 5);
    const delay = randBetween(0, dur);
    const tx    = randBetween(0, 100);
    const ty    = randBetween(0, 100);
    const mx    = randBetween(-30, 30);
    const my    = randBetween(-30, -80);
    const color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];

    el.style.cssText = `
      --dur:   ${dur}s;
      --delay: ${delay}s;
      --sz:    ${size}rem;
      --sc:    ${color};
      --tx:    ${tx}%;
      --ty:    ${ty}%;
      --mx:    ${mx}px;
      --my:    ${my}px;
      --mx2:   ${mx * 1.3}px;
      --my2:   ${my * 1.6}px;
      --mx3:   ${mx * .8}px;
      --my3:   ${my * 2.2}px;
    `;
    document.body.appendChild(el);
  }

  // Create 55 sparkles
  for (let i = 0; i < 55; i++) createSparkle();


  /* ──────────────────────────────────────────
     TANGA PATHS — correct front-view anatomy
     viewBox: 0 0 400 360
     Waistband: wide band at top
     Strings: THIN diagonals to bottom
     Panel: small shape at bottom center
  ────────────────────────────────────────── */
  const MODELS = {
    clasico: {
      label:  'Clásico',
      precio: 18,
      wb:     'M 14,50 Q 200,26 386,50 L 382,76 Q 200,58 18,76 Z',
      left:   'M 18,76 Q 48,172 142,274 L 156,268 Q 60,168 30,73 Z',
      right:  'M 382,76 Q 352,172 258,274 L 244,268 Q 340,168 370,73 Z',
      panel:  'M 142,274 Q 166,264 200,266 Q 234,264 258,274 Q 246,304 200,334 Q 154,304 142,274 Z',
      stitch: 'M 18,60 Q 200,36 382,60',
      clip:   'M 14,50 Q 200,26 386,50 L 382,76 Q 200,58 18,76 Z M 18,76 Q 48,172 142,274 L 156,268 Q 60,168 30,73 Z M 382,76 Q 352,172 258,274 L 244,268 Q 340,168 370,73 Z M 142,274 Q 166,264 200,266 Q 234,264 258,274 Q 246,304 200,334 Q 154,304 142,274 Z',
      textY:  295,
      cx: 200, cy: 300,
    },
    fino: {
      label:  'Tanga Fino',
      precio: 20,
      wb:     'M 60,54 Q 200,32 340,54 L 336,78 Q 200,62 64,78 Z',
      left:   'M 64,78 Q 88,164 152,268 L 166,263 Q 96,162 78,75 Z',
      right:  'M 336,78 Q 312,164 248,268 L 234,263 Q 304,162 322,75 Z',
      panel:  'M 152,268 Q 172,260 200,262 Q 228,260 248,268 Q 238,296 200,322 Q 162,296 152,268 Z',
      stitch: 'M 64,63 Q 200,42 336,63',
      clip:   'M 60,54 Q 200,32 340,54 L 336,78 Q 200,62 64,78 Z M 64,78 Q 88,164 152,268 L 166,263 Q 96,162 78,75 Z M 336,78 Q 312,164 248,268 L 234,263 Q 304,162 322,75 Z M 152,268 Q 172,260 200,262 Q 228,260 248,268 Q 238,296 200,322 Q 162,296 152,268 Z',
      textY:  285,
      cx: 200, cy: 290,
    },
    brasileno: {
      label:  'Brasileño',
      precio: 22,
      wb:     'M 4,46 Q 200,20 396,46 L 392,74 Q 200,52 8,74 Z',
      left:   'M 8,74 Q 36,172 132,278 L 146,272 Q 50,168 22,71 Z',
      right:  'M 392,74 Q 364,172 268,278 L 254,272 Q 350,168 378,71 Z',
      panel:  'M 132,278 Q 158,268 200,270 Q 242,268 268,278 Q 254,308 200,338 Q 146,308 132,278 Z',
      stitch: 'M 8,55 Q 200,30 392,55',
      clip:   'M 4,46 Q 200,20 396,46 L 392,74 Q 200,52 8,74 Z M 8,74 Q 36,172 132,278 L 146,272 Q 50,168 22,71 Z M 392,74 Q 364,172 268,278 L 254,272 Q 350,168 378,71 Z M 132,278 Q 158,268 200,270 Q 242,268 268,278 Q 254,308 200,338 Q 146,308 132,278 Z',
      textY:  305,
      cx: 200, cy: 305,
    },
  };

  /* ──────────────────────────────────────────
     TEMA DECORACIONES (panel triangle)
     cx/cy = approx panel centroid
  ────────────────────────────────────────── */
  const TEMAS = {
    ninguno: {
      label: 'Sin tema', color: null,
      decor: (m) => `
        <text x="${m.cx}" y="${m.cy - 30}" text-anchor="middle" font-size="14" fill="rgba(255,255,255,0.25)" letter-spacing="4">✦ ✦ ✦</text>
        <text x="${m.cx}" y="${m.cy + 10}" text-anchor="middle" font-family="'Playfair Display',serif" font-size="13" fill="rgba(255,255,255,0.2)" font-style="italic">PU$$Y EATERZ</text>`,
    },
    tarot: {
      label: 'Tarot', color: '#6c3483',
      decor: (m) => `
        <rect x="${m.cx-38}" y="${m.cy-68}" width="76" height="108" rx="5" fill="rgba(0,0,0,0.35)" stroke="#d4af37" stroke-width="1"/>
        <text x="${m.cx}" y="${m.cy-54}" text-anchor="middle" font-family="serif" font-size="7" fill="#d4af37" letter-spacing="2">XVIII</text>
        <circle cx="${m.cx}" cy="${m.cy-25}" r="20" fill="#f0e4c8" opacity=".9"/>
        <circle cx="${m.cx+8}" cy="${m.cy-25}" r="15" fill="#3d0a6e" opacity=".95"/>
        <text x="${m.cx-6}" y="${m.cy-20}" text-anchor="middle" font-size="10" fill="#555">👁</text>
        <text x="${m.cx}" y="${m.cy+12}" text-anchor="middle" font-size="8" fill="#d4af37" letter-spacing="1">LA LUNA</text>
        <text x="${m.cx-30}" y="${m.cy-40}" font-size="10" fill="#d4af37" opacity=".7">✦</text>
        <text x="${m.cx+22}" y="${m.cy-45}" font-size="8"  fill="#d4af37" opacity=".6">★</text>
        <text x="${m.cx}" y="${m.cy+38}" text-anchor="middle" font-size="9" fill="rgba(212,175,55,0.5)">✦ ✦ ✦</text>`,
    },
    haaland: {
      label: 'Haaland', color: '#1e3a5f',
      decor: (m) => `
        <!-- Haaland mini face -->
        <ellipse cx="${m.cx}" cy="${m.cy-20}" rx="32" ry="36" fill="#FDBCB4"/>
        <path d="M ${m.cx-30},${m.cy-46} Q ${m.cx},${m.cy-62} ${m.cx+30},${m.cy-46} Q ${m.cx+34},${m.cy-54} ${m.cx+28},${m.cy-60} Q ${m.cx},${m.cy-72} ${m.cx-28},${m.cy-60} Q ${m.cx-34},${m.cy-54} ${m.cx-30},${m.cy-46} Z" fill="#F4D03F"/>
        <ellipse cx="${m.cx-13}" cy="${m.cy-22}" rx="9" ry="7" fill="white"/>
        <ellipse cx="${m.cx+13}" cy="${m.cy-22}" rx="9" ry="7" fill="white"/>
        <circle  cx="${m.cx-12}" cy="${m.cy-21}" r="5" fill="#2980B9"/>
        <circle  cx="${m.cx+14}" cy="${m.cy-21}" r="5" fill="#2980B9"/>
        <circle  cx="${m.cx-11}" cy="${m.cy-22}" r="3" fill="#111"/>
        <circle  cx="${m.cx+15}" cy="${m.cy-22}" r="3" fill="#111"/>
        <circle  cx="${m.cx-10}" cy="${m.cy-24}" r="1.2" fill="white"/>
        <circle  cx="${m.cx+16}" cy="${m.cy-24}" r="1.2" fill="white"/>
        <path d="M ${m.cx-12},${m.cy-7} Q ${m.cx},${m.cy+2} ${m.cx+12},${m.cy-7}" fill="none" stroke="#c0392b" stroke-width="2" stroke-linecap="round"/>
        <!-- Jersey -->
        <path d="M ${m.cx-22},${m.cy+14} Q ${m.cx-20},${m.cy+44} ${m.cx},${m.cy+46} Q ${m.cx+20},${m.cy+44} ${m.cx+22},${m.cy+14} Z" fill="#6CABDD"/>
        <text x="${m.cx}" y="${m.cy+38}" text-anchor="middle" font-family="Impact,sans-serif" font-size="14" font-weight="900" fill="white">9</text>`,
    },
    guia: {
      label: 'Guía Comer Coños', color: '#c0392b',
      decor: (m) => `
        <text x="${m.cx}" y="${m.cy-50}" text-anchor="middle" font-family="monospace" font-size="8.5" fill="rgba(255,255,255,0.55)" letter-spacing="2">INSTRUCCIONES</text>
        <line x1="${m.cx-50}" y1="${m.cy-44}" x2="${m.cx+50}" y2="${m.cy-44}" stroke="rgba(255,255,255,0.18)" stroke-width=".8"/>
        <path d="M ${m.cx},${m.cy-38} L ${m.cx},${m.cy+22}" stroke="rgba(255,60,60,0.75)" stroke-width="3.5" stroke-linecap="round"/>
        <polygon points="${m.cx},${m.cy+38} ${m.cx-10},${m.cy+20} ${m.cx+10},${m.cy+20}" fill="rgba(255,60,60,0.8)"/>
        <text x="${m.cx-46}" y="${m.cy-20}" font-family="monospace" font-size="7.5" fill="rgba(255,255,255,0.45)">1. localizar</text>
        <text x="${m.cx-46}" y="${m.cy-6}"  font-family="monospace" font-size="7.5" fill="rgba(255,255,255,0.45)">2. escuchar</text>
        <text x="${m.cx-46}" y="${m.cy+8}"  font-family="monospace" font-size="7.5" fill="rgba(255,255,255,0.45)">3. disfrutar</text>
        <text x="${m.cx}" y="${m.cy+58}" text-anchor="middle" font-family="monospace" font-size="8" font-weight="bold" fill="rgba(255,120,120,0.7)" letter-spacing="3">R T F M</text>`,
    },
    horoscopo: {
      label: 'Horóscopo', color: '#0d0020',
      decor: (m) => `
        <circle cx="${m.cx-50}" cy="${m.cy-30}" r="2" fill="#d4af37" opacity=".9"/>
        <circle cx="${m.cx-28}" cy="${m.cy-50}" r="1.5" fill="#d4af37" opacity=".8"/>
        <circle cx="${m.cx-10}" cy="${m.cy-28}" r="2.5" fill="#d4af37" opacity=".9"/>
        <line x1="${m.cx-50}" y1="${m.cy-30}" x2="${m.cx-28}" y2="${m.cy-50}" stroke="#d4af37" stroke-width=".9" opacity=".4"/>
        <line x1="${m.cx-28}" y1="${m.cy-50}" x2="${m.cx-10}" y2="${m.cy-28}" stroke="#d4af37" stroke-width=".9" opacity=".4"/>
        <circle cx="${m.cx+50}" cy="${m.cy-30}" r="2" fill="#d4af37" opacity=".9"/>
        <circle cx="${m.cx+28}" cy="${m.cy-50}" r="1.5" fill="#d4af37" opacity=".8"/>
        <circle cx="${m.cx+10}" cy="${m.cy-28}" r="2.5" fill="#d4af37" opacity=".9"/>
        <line x1="${m.cx+50}" y1="${m.cy-30}" x2="${m.cx+28}" y2="${m.cy-50}" stroke="#d4af37" stroke-width=".9" opacity=".4"/>
        <line x1="${m.cx+28}" y1="${m.cy-50}" x2="${m.cx+10}" y2="${m.cy-28}" stroke="#d4af37" stroke-width=".9" opacity=".4"/>
        <text x="${m.cx}" y="${m.cy+12}" text-anchor="middle" font-size="48" fill="#d4af37" opacity=".88">♎</text>
        <text x="${m.cx}" y="${m.cy-62}" text-anchor="middle" font-family="serif" font-size="8" fill="#d4af37" opacity=".5" letter-spacing="2">✦ ♈ ♉ ♊ ♋ ✦</text>
        <text x="${m.cx}" y="${m.cy+55}" text-anchor="middle" font-size="10" fill="#d4af37" opacity=".55">✦</text>`,
    },
    setas: {
      label: 'Setas Mágicas', color: '#1e5c34',
      decor: (m) => `
        <!-- Amanita mini -->
        <rect x="${m.cx-6}" y="${m.cy}" width="12" height="30" rx="3" fill="#f5f0e8"/>
        <ellipse cx="${m.cx}" cy="${m.cy+2}" rx="14" ry="4" fill="#e8e0d0"/>
        <ellipse cx="${m.cx}" cy="${m.cy+1}" rx="8" ry="2.5" fill="#d0c8b8"/>
        <path d="M ${m.cx-28},${m.cy-2} Q ${m.cx-28},${m.cy-38} ${m.cx},${m.cy-46} Q ${m.cx+28},${m.cy-38} ${m.cx+28},${m.cy-2} Z" fill="#cc2200"/>
        <path d="M ${m.cx-28},${m.cy-2} Q ${m.cx},${m.cy+4} ${m.cx+28},${m.cy-2}" fill="#aa1800"/>
        <ellipse cx="${m.cx}" cy="${m.cy-28}" rx="7" ry="6.5" fill="rgba(255,255,255,0.85)"/>
        <ellipse cx="${m.cx-14}" cy="${m.cy-18}" rx="5" ry="4.5" fill="rgba(255,255,255,0.8)"/>
        <ellipse cx="${m.cx+14}" cy="${m.cy-18}" rx="5" ry="4.5" fill="rgba(255,255,255,0.8)"/>
        <ellipse cx="${m.cx-20}" cy="${m.cy-6}"  rx="4" ry="3.5" fill="rgba(255,255,255,0.7)"/>
        <ellipse cx="${m.cx+20}" cy="${m.cy-6}"  rx="4" ry="3.5" fill="rgba(255,255,255,0.7)"/>
        <!-- Spore dots scattered -->
        <circle cx="${m.cx-40}" cy="${m.cy-15}" r="2" fill="rgba(255,255,255,0.3)"/>
        <circle cx="${m.cx+42}" cy="${m.cy-20}" r="1.5" fill="rgba(255,255,255,0.25)"/>
        <circle cx="${m.cx-35}" cy="${m.cy+10}" r="1.5" fill="rgba(255,255,255,0.25)"/>`,
    },
    lola: {
      label: 'Lola Flores', color: '#e63946',
      decor: (m) => `
        <!-- Fringe on waistband bottom (handled by outline change) -->
        <!-- Rose petals -->
        <circle cx="${m.cx}" cy="${m.cy-8}" r="22" fill="#aa1122" opacity=".55"/>
        <ellipse cx="${m.cx}" cy="${m.cy-30}" rx="11" ry="14" fill="#cc2233" transform="rotate(0,${m.cx},${m.cy-8})"/>
        <ellipse cx="${m.cx}" cy="${m.cy-30}" rx="11" ry="14" fill="#cc2233" transform="rotate(45,${m.cx},${m.cy-8})"/>
        <ellipse cx="${m.cx}" cy="${m.cy-30}" rx="11" ry="14" fill="#cc2233" transform="rotate(90,${m.cx},${m.cy-8})"/>
        <ellipse cx="${m.cx}" cy="${m.cy-30}" rx="11" ry="14" fill="#cc2233" transform="rotate(135,${m.cx},${m.cy-8})"/>
        <ellipse cx="${m.cx}" cy="${m.cy-30}" rx="11" ry="14" fill="#cc2233" transform="rotate(180,${m.cx},${m.cy-8})"/>
        <ellipse cx="${m.cx}" cy="${m.cy-30}" rx="11" ry="14" fill="#cc2233" transform="rotate(225,${m.cx},${m.cy-8})"/>
        <ellipse cx="${m.cx}" cy="${m.cy-30}" rx="11" ry="14" fill="#cc2233" transform="rotate(270,${m.cx},${m.cy-8})"/>
        <ellipse cx="${m.cx}" cy="${m.cy-30}" rx="11" ry="14" fill="#cc2233" transform="rotate(315,${m.cx},${m.cy-8})"/>
        <circle cx="${m.cx}" cy="${m.cy-8}" r="12" fill="#881122"/>
        <circle cx="${m.cx}" cy="${m.cy-8}" r="6"  fill="#cc3344"/>
        <circle cx="${m.cx}" cy="${m.cy-8}" r="3"  fill="#ff5566"/>
        <ellipse cx="${m.cx-22}" cy="${m.cy+18}" rx="10" ry="5" fill="#2a6018" transform="rotate(-25,${m.cx-22},${m.cy+18})"/>
        <ellipse cx="${m.cx+22}" cy="${m.cy+18}" rx="10" ry="5" fill="#2a6018" transform="rotate(25,${m.cx+22},${m.cy+18})"/>`,
    },
  };

  /* ──────────────────────────────────────────
     STATE
  ────────────────────────────────────────── */
  const state = {
    modelo: 'clasico',
    color: '#F9C5D1',
    tema: 'ninguno',
    talla: 'S',
    userImage: null,
    texto: '',
    colorManual: false,
  };

  /* ──────────────────────────────────────────
     SVG ELEMENTS
  ────────────────────────────────────────── */
  const svgWB         = document.getElementById('svgWaistband');
  const svgLeft       = document.getElementById('svgLeftStrap');
  const svgRight      = document.getElementById('svgRightStrap');
  const svgPanel      = document.getElementById('svgPanel');
  const svgLaceWB     = document.getElementById('svgLaceWB');
  const svgPanelShine = document.getElementById('svgPanelShine');
  const svgOWB        = document.getElementById('svgOutlineWB');
  const svgOL         = document.getElementById('svgOutlineL');
  const svgOR         = document.getElementById('svgOutlineR');
  const svgOP         = document.getElementById('svgOutlineP');
  const svgStitch     = document.getElementById('svgStitch');
  const svgTheme      = document.getElementById('svgTheme');
  const svgEmbText    = document.getElementById('svgEmbText');
  const svgUserImg    = document.getElementById('svgUserImg');
  const userImgClip   = document.getElementById('userImgClipPath');
  const modelTag      = document.getElementById('modelTag');

  const precioTotal = document.getElementById('precioTotal');
  const sumModelo   = document.getElementById('sumModelo');
  const sumColor    = document.getElementById('sumColor');
  const sumTema     = document.getElementById('sumTema');
  const sumTalla    = document.getElementById('sumTalla');
  const sumPrecio   = document.getElementById('sumPrecio');
  const charCount   = document.getElementById('charCount');

  /* ──────────────────────────────────────────
     RENDER
  ────────────────────────────────────────── */
  function render() {
    const m = MODELS[state.modelo];
    const t = TEMAS[state.tema];
    const baseColor = (t.color && !state.colorManual) ? t.color : state.color;
    const light = isLight(baseColor);

    // Paths
    [svgWB, svgLeft, svgRight, svgPanel].forEach(el => el.setAttribute('fill', baseColor));
    svgWB.setAttribute('d',    m.wb);
    svgLeft.setAttribute('d',  m.left);
    svgRight.setAttribute('d', m.right);
    svgPanel.setAttribute('d', m.panel);
    svgLaceWB.setAttribute('d', m.wb);
    svgPanelShine.setAttribute('d', m.panel);
    svgOWB.setAttribute('d', m.wb);
    svgOL.setAttribute('d',  m.left);
    svgOR.setAttribute('d',  m.right);
    svgOP.setAttribute('d',  m.panel);
    svgStitch.setAttribute('d', m.stitch);
    userImgClip.setAttribute('d', m.clip);

    // Outline color
    const oc = light ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)';
    [svgOWB, svgOL, svgOR, svgOP].forEach(el => el.setAttribute('stroke', oc));
    svgStitch.setAttribute('stroke', light ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.3)');

    // Theme decoration
    svgTheme.innerHTML = t.decor(m);

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
      svgEmbText.setAttribute('fill', light ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.9)');
    } else {
      svgEmbText.style.display = 'none';
    }

    // Model tag
    modelTag.textContent = m.label;

    // Summary
    sumModelo.textContent     = m.label;
    sumColor.style.background = baseColor;
    sumTema.textContent       = t.label;
    sumTalla.textContent      = state.talla;
    precioTotal.textContent   = m.precio;
    sumPrecio.textContent     = m.precio;
  }

  function isLight(hex) {
    const c = hex.replace('#', '');
    if (c.length < 6) return true;
    const r = parseInt(c.slice(0,2),16);
    const g = parseInt(c.slice(2,4),16);
    const b = parseInt(c.slice(4,6),16);
    return (r*299 + g*587 + b*114) / 1000 > 130;
  }

  /* ──────────────────────────────────────────
     EVENTO: MODELO
  ────────────────────────────────────────── */
  document.querySelectorAll('#modeloPills .model-card').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#modeloPills .model-card').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.modelo = btn.dataset.modelo;
      render();
    });
  });

  /* ──────────────────────────────────────────
     EVENTO: COLOR
  ────────────────────────────────────────── */
  document.querySelectorAll('#colorSwatches .swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#colorSwatches .swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.color = btn.dataset.color;
      state.colorManual = true;
      render();
    });
  });

  /* ──────────────────────────────────────────
     EVENTO: TEMA
  ────────────────────────────────────────── */
  function applyTema(tema) {
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
  }

  document.querySelectorAll('#temaPills .pill').forEach(btn => {
    btn.addEventListener('click', () => applyTema(btn.dataset.tema));
  });

  /* ──────────────────────────────────────────
     "CUSTOMIZAR" desde tarjetas de colección
  ────────────────────────────────────────── */
  document.querySelectorAll('.card [data-tema]').forEach(btn => {
    btn.addEventListener('click', () => {
      applyTema(btn.dataset.tema);
      document.getElementById('customizador').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ──────────────────────────────────────────
     EVENTO: TALLA
  ────────────────────────────────────────── */
  document.querySelectorAll('#tallaPills .pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tallaPills .pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.talla = btn.dataset.talla;
      render();
    });
  });

  /* ──────────────────────────────────────────
     UPLOAD IMAGE
  ────────────────────────────────────────── */
  const uploadArea        = document.getElementById('uploadArea');
  const imgUpload         = document.getElementById('imgUpload');
  const uploadPreview     = document.getElementById('uploadPreview');
  const uploadPlaceholder = document.getElementById('uploadPlaceholder');
  const btnRemoveImg      = document.getElementById('btnRemoveImg');

  uploadArea.addEventListener('click', e => { if (e.target !== btnRemoveImg) imgUpload.click(); });
  uploadArea.addEventListener('dragover',  e => { e.preventDefault(); uploadArea.style.borderColor = '#E91E8C'; });
  uploadArea.addEventListener('dragleave', ()  => { uploadArea.style.borderColor = ''; });
  uploadArea.addEventListener('drop', e => {
    e.preventDefault(); uploadArea.style.borderColor = '';
    if (e.dataTransfer.files[0]) loadImage(e.dataTransfer.files[0]);
  });
  imgUpload.addEventListener('change', e => { if (e.target.files[0]) loadImage(e.target.files[0]); });

  function loadImage(file) {
    if (!file.type.startsWith('image/')) { alert('Solo imágenes, raxxeta.'); return; }
    if (file.size > 5242880) { alert('Máximo 5MB.'); return; }
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

  /* ──────────────────────────────────────────
     TEXTO BORDADO
  ────────────────────────────────────────── */
  const textoInput = document.getElementById('textoInput');
  textoInput.addEventListener('input', () => {
    state.texto = textoInput.value;
    charCount.textContent = state.texto.length;
    render();
  });

  /* ──────────────────────────────────────────
     CARRITO
  ────────────────────────────────────────── */
  let cartCount = 0;
  const navCta     = document.getElementById('navCta');
  const btnAddCart = document.getElementById('btnAddCart');

  btnAddCart.addEventListener('click', () => {
    cartCount++;
    navCta.textContent = `Carrito (${cartCount})`;
    navCta.style.background = '#E91E8C';
    setTimeout(() => { navCta.style.background = ''; }, 700);
    const orig = btnAddCart.innerHTML;
    btnAddCart.innerHTML = '✦ Añadido! ✦';
    btnAddCart.disabled = true;
    setTimeout(() => { btnAddCart.innerHTML = orig; btnAddCart.disabled = false; }, 2000);
  });

  /* ──────────────────────────────────────────
     NAV SCROLL
  ────────────────────────────────────────── */
  window.addEventListener('scroll', () => {
    document.querySelector('.nav').style.boxShadow =
      window.scrollY > 50 ? '0 4px 30px rgba(233,30,140,0.15)' : 'none';
  });

  /* ──────────────────────────────────────────
     INIT
  ────────────────────────────────────────── */
  render();

})();
