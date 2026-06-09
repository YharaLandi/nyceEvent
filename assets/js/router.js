const PAGES = ['home','lavora','chi-siamo','servizi','partners','contatti'];

function navigate(id) {
  const target = PAGES.includes(id) ? id : 'home';

  // mostra/nasconde pagine
  PAGES.forEach(p => {
    const el = document.getElementById(p);
    if (!el) return;
    el.style.display = p === target ? 'block' : 'none';
  });

  // footer sempre visibile
  document.querySelector('.footer').style.display = '';

  // aggiorna link attivo
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.toggle('active', a.dataset.nav === target);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState(null, '', '#' + target);

  // chiudi menu mobile
  document.getElementById('navLinks')?.classList.remove('open');
  document.getElementById('burger')?.classList.remove('open');
}

// click su link interni
document.addEventListener('click', e => {
  const a = e.target.closest('[data-nav]');
  if (!a) return;
  e.preventDefault();
  navigate(a.dataset.nav);
});

// hamburger
document.getElementById('burger')?.addEventListener('click', () => {
  document.getElementById('navLinks')?.classList.toggle('open');
  document.getElementById('burger')?.classList.toggle('open');
});

// init
document.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash.replace('#','') || 'home';
  navigate(hash);
});

window.addEventListener('popstate', () => {
  const hash = location.hash.replace('#','') || 'home';
  navigate(hash);
});