import { heroIllustration, storyIllustration, mapIllustration, fennelDivider } from '../assets/illustrations.js';

const illustrationsByKey = {
  hero: heroIllustration,
  story: storyIllustration,
  map: mapIllustration,
  divider: fennelDivider,
};

export function initMedia() {
  document.querySelectorAll('[data-illustration]').forEach((node) => {
    const key = node.getAttribute('data-illustration');
    const build = illustrationsByKey[key];
    if (build) {
      node.innerHTML = build();
    }
  });
}
