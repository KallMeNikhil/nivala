export function initMobileNav() {
  const trigger = document.querySelector('[data-mobile-nav-trigger]');
  const panel = document.querySelector('[data-mobile-nav-panel]');
  if (!trigger || !panel) return;

  let isOpen = false;
  const focusableSelector = 'a[href], button:not([disabled])';

  const openPanel = () => {
    isOpen = true;
    panel.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-nav-open');
    const firstFocusable = panel.querySelector(focusableSelector);
    if (firstFocusable) firstFocusable.focus();
  };

  const closePanel = ({ returnFocus = true } = {}) => {
    isOpen = false;
    panel.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-nav-open');
    if (returnFocus) trigger.focus();
  };

  trigger.addEventListener('click', () => {
    if (isOpen) {
      closePanel();
    } else {
      openPanel();
    }
  });

  panel.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      closePanel({ returnFocus: false });
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!isOpen) return;

    if (event.key === 'Escape') {
      closePanel();
      return;
    }

    if (event.key === 'Tab') {
      const focusable = Array.from(panel.querySelectorAll(focusableSelector));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}
