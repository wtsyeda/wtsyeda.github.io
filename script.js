const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const year = document.querySelector('#year');

if (year) {
  year.textContent = new Date().getFullYear();
}

function closeMenu() {
  nav?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}

menuButton?.addEventListener('('click', () => {
  const opening = !nav?.classList.contains('open');
  nav?.classList.toggle('open', opening);
  menuButton.setAttribute('aria-expanded', String(opening));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
