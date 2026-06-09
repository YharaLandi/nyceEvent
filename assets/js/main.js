/**
 * main.js – Logica interattiva per Nyce Event SPA
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── FILE INPUT: mostra nome file selezionato ──
  const cvInput = document.getElementById('cv-upload');
  const cvLabel = document.getElementById('cv-filename');
  cvInput?.addEventListener('change', () => {
    cvLabel.textContent = cvInput.files[0]?.name || '';
  });

  // ── FORM CANDIDATURA (Italia) ──────────────────────────────
  const formItalia = document.querySelector('.candidatura-form:not(.candidatura-form--egitto)');
  formItalia?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!formItalia.checkValidity()) {
      formItalia.reportValidity();
      return;
    }
    // TODO: sostituire con integrazione backend reale (es. Formspree, EmailJS, API propria)
    const data = Object.fromEntries(new FormData(formItalia));
    console.log('[Candidatura Italia]', data);
    showToast('Candidatura inviata! Ti ricontatteremo presto 🎉');
    formItalia.reset();
  });

  // ── FORM CANDIDATURA (Egitto) ─────────────────────────────
  const formEgitto = document.querySelector('.candidatura-form--egitto');
  formEgitto?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!formEgitto.checkValidity()) {
      formEgitto.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(formEgitto));
    console.log('[Candidatura Egitto]', data);
    showToast('Candidatura Egitto inviata! Ti ricontatteremo presto 🌍');
    formEgitto.reset();
  });

  // ── FORM CONTATTI ─────────────────────────────────────────
  const formContatti = document.querySelector('.contatti-form');
  formContatti?.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!formContatti.checkValidity()) {
      formContatti.reportValidity();
      return;
    }
    const data = Object.fromEntries(new FormData(formContatti));
    console.log('[Contatti]', data);
    showToast('Messaggio inviato! Ti risponderemo al più presto.');
    formContatti.reset();
  });

  // ── NAVBAR STICKY: cambia stile allo scroll ───────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('navbar--scrolled', window.scrollY > 40);
  });

  // ── HELPER: toast notification ────────────────────────────
  function showToast(msg) {
    const toast = document.createElement('div');
    toast.textContent = msg;
    toast.style.cssText = `
      position: fixed; bottom: 32px; right: 32px; z-index: 9999;
      background: #E2007A; color: #fff; font-family: 'Nunito', sans-serif;
      font-weight: 700; padding: 16px 28px; border-radius: 50px;
      box-shadow: 0 8px 30px rgba(0,0,0,.2);
      animation: toastIn .3s ease;
    `;
    const style = document.createElement('style');
    style.textContent = `
      @keyframes toastIn {
        from { transform: translateY(20px); opacity: 0; }
        to   { transform: translateY(0);    opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

});