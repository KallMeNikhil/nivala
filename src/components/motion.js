export function initMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  const selectors = [
    '.brand-story__media',
    '.brand-story__copy',
    '.hours-location__hours',
    '.hours-location__map',
    '.contact__inner',
  ];

  const revealNodes = document.querySelectorAll(selectors.join(','));

  revealNodes.forEach((node) => {
    node.classList.add('reveal');
    observer.observe(node);
  });

  window.setTimeout(() => {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
  }, 1500);
}
