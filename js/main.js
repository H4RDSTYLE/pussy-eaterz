/* =============================================
   PU$$Y EATERZ — Customizador JS
   ============================================= */

(function () {
  'use strict';

  // ---- STATE ----
  const state = {
    modelo: 'clasico',
    precio: 18,
    color: '#F9C5D1',
    tema: 'ninguno',
    talla: 'S',
    userImage: null,
    texto: ''
  };

  // ---- TEMA EMOJIS ----
  const temaData = {
    ninguno:   { emoji: '',   label: 'Sin tema' },
    tarot:     { emoji: '🔮', label: 'Tarot' },
    haaland:   { emoji: '⚽', label: 'Haaland' },
    guia:      { emoji: '📖', label: 'Guía Comer Coños' },
    horoscopo: { emoji: '♈', label: 'Horóscopo' },
    setas:     { emoji: '🍄', label: 'Setas' },
    lola:      { emoji: '🌹', label: 'Lola Flores' }
  };

  // ---- ELEMENTS ----
  const tangaFront   = document.getElementById('tangaFront');
  const tangaShape   = document.getElementById('tangaShape');
  const tangaPatch   = document.getElementById('tangaPatch');
  const tangaUserImg = document.getElementById('tangaUserImg');
  const precioTotal  = document.getElementById('precioTotal');
  const sumModelo    = document.getElementById('sumModelo');
  const sumColor     = document.getElementById('sumColor');
  const sumTema      = document.getElementById('sumTema');
  const sumTalla     = document.getElementById('sumTalla');
  const sumPrecio    = document.getElementById('sumPrecio');
  const charCount    = document.getElementById('charCount');
  const uploadArea   = document.getElementById('uploadArea');
  const imgUpload    = document.getElementById('imgUpload');
  const uploadPreview    = document.getElementById('uploadPreview');
  const uploadPlaceholder = document.getElementById('uploadPlaceholder');
  const btnRemoveImg = document.getElementById('btnRemoveImg');
  const textoInput   = document.getElementById('textoInput');
  const btnAddCart   = document.getElementById('btnAddCart');

  // ---- RENDER ----
  function render() {
    // Color
    tangaFront.style.background = state.color;
    // Update pseudo-element color via injected <style>
    let dynStyle = document.getElementById('dynTangaStyle');
    if (!dynStyle) {
      dynStyle = document.createElement('style');
      dynStyle.id = 'dynTangaStyle';
      document.head.appendChild(dynStyle);
    }
    dynStyle.textContent = `.tanga-shape::before, .tanga-shape::after { background: ${state.color} !important; }`;

    // Patch emoji
    if (state.tema !== 'ninguno') {
      tangaPatch.textContent = temaData[state.tema].emoji;
    } else {
      tangaPatch.textContent = '';
    }

    // User image
    if (state.userImage) {
      tangaUserImg.src = state.userImage;
      tangaUserImg.style.display = 'block';
    } else {
      tangaUserImg.style.display = 'none';
      tangaUserImg.src = '';
    }

    // Summary
    sumModelo.textContent = capitalise(state.modelo);
    sumColor.style.background = state.color;
    sumTema.textContent = temaData[state.tema].label;
    sumTalla.textContent = state.talla;
    precioTotal.textContent = state.precio;
    sumPrecio.textContent = state.precio;
  }

  function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // ---- MODELO ----
  document.querySelectorAll('#modeloPills .pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#modeloPills .pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.modelo = btn.dataset.modelo;
      state.precio = parseInt(btn.dataset.precio, 10);
      render();
    });
  });

  // ---- COLORES ----
  document.querySelectorAll('#colorSwatches .swatch').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#colorSwatches .swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.color = btn.dataset.color;
      render();
    });
  });

  // ---- TEMA ----
  document.querySelectorAll('#temaPills .pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#temaPills .pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.tema = btn.dataset.tema;
      render();
    });
  });

  // ---- TALLA ----
  document.querySelectorAll('#tallaPills .pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#tallaPills .pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.talla = btn.dataset.talla;
      render();
    });
  });

  // ---- UPLOAD IMAGE ----
  uploadArea.addEventListener('click', (e) => {
    if (e.target !== btnRemoveImg) imgUpload.click();
  });

  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#E91E8C';
  });
  uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = '';
  });
  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '';
    const file = e.dataTransfer.files[0];
    if (file) loadImage(file);
  });

  imgUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) loadImage(file);
  });

  function loadImage(file) {
    if (!file.type.startsWith('image/')) return alert('Solo se admiten imágenes.');
    if (file.size > 5 * 1024 * 1024) return alert('La imagen no puede superar 5MB.');
    const reader = new FileReader();
    reader.onload = (ev) => {
      state.userImage = ev.target.result;
      uploadPreview.src = ev.target.result;
      uploadPreview.style.display = 'block';
      uploadPlaceholder.style.display = 'none';
      btnRemoveImg.style.display = 'inline-flex';
      render();
    };
    reader.readAsDataURL(file);
  }

  btnRemoveImg.addEventListener('click', (e) => {
    e.stopPropagation();
    state.userImage = null;
    uploadPreview.style.display = 'none';
    uploadPreview.src = '';
    uploadPlaceholder.style.display = 'block';
    btnRemoveImg.style.display = 'none';
    imgUpload.value = '';
    render();
  });

  // ---- TEXTO ----
  textoInput.addEventListener('input', () => {
    state.texto = textoInput.value;
    charCount.textContent = state.texto.length;
  });

  // ---- CARRITO (mock) ----
  let cartCount = 0;
  const navCta = document.querySelector('.nav__cta');

  btnAddCart.addEventListener('click', () => {
    cartCount++;
    navCta.textContent = `Carrito (${cartCount})`;
    navCta.style.background = '#E91E8C';
    setTimeout(() => { navCta.style.background = ''; }, 800);

    // Mini feedback
    const original = btnAddCart.innerHTML;
    btnAddCart.innerHTML = '✓ Añadido al carrito';
    btnAddCart.disabled = true;
    setTimeout(() => {
      btnAddCart.innerHTML = original;
      btnAddCart.disabled = false;
    }, 2000);
  });

  // ---- NAV SCROLL ----
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    nav.style.boxShadow = window.scrollY > 50
      ? '0 4px 30px rgba(0,0,0,0.08)'
      : 'none';
  });

  // ---- INIT ----
  render();

})();
