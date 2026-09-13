export function initNav() {
  const header = document.querySelector('[data-nav]');
  if (!header) return;

  const setScrolledState = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  setScrolledState();
  window.addEventListener('scroll', setScrolledState, { passive: true });
}
