const palette = {
  cream: '#F6EEE1',
  charcoal: '#241F1C',
  terracotta: '#C1502E',
  turmeric: '#D9A441',
  cardamom: '#5C6E4A',
};

function svgWrap(viewBox, inner) {
  return `<svg viewBox="${viewBox}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
}

export function heroIllustration() {
  return svgWrap(
    '0 0 640 360',
    `
    <rect width="640" height="360" fill="${palette.charcoal}" />
    <rect x="0" y="220" width="640" height="140" fill="${palette.terracotta}" opacity="0.18" />
    <rect x="60" y="150" width="180" height="90" rx="4" fill="${palette.cream}" opacity="0.08" />
    <rect x="280" y="130" width="220" height="110" rx="4" fill="${palette.cream}" opacity="0.1" />
    <circle cx="150" cy="95" r="5" fill="${palette.turmeric}" />
    <line x1="150" y1="70" x2="150" y2="95" stroke="${palette.turmeric}" stroke-width="2" />
    <circle cx="390" cy="80" r="5" fill="${palette.turmeric}" />
    <line x1="390" y1="55" x2="390" y2="80" stroke="${palette.turmeric}" stroke-width="2" />
    <circle cx="490" cy="100" r="5" fill="${palette.turmeric}" />
    <line x1="490" y1="75" x2="490" y2="100" stroke="${palette.turmeric}" stroke-width="2" />
    <circle cx="150" cy="200" r="34" fill="${palette.cream}" opacity="0.12" />
    <circle cx="150" cy="200" r="20" fill="${palette.terracotta}" opacity="0.6" />
    <circle cx="400" cy="185" r="26" fill="${palette.cream}" opacity="0.12" />
    <circle cx="400" cy="185" r="15" fill="${palette.cardamom}" opacity="0.6" />
  `
  );
}

export function storyIllustration() {
  return svgWrap(
    '0 0 400 500',
    `
    <rect width="400" height="500" fill="${palette.cream}" />
    <circle cx="200" cy="220" r="120" fill="${palette.turmeric}" opacity="0.9" />
    <circle cx="200" cy="220" r="80" fill="${palette.cream}" />
    <circle cx="200" cy="220" r="60" fill="${palette.terracotta}" opacity="0.85" />
    <path d="M120 340 Q200 300 280 340" stroke="${palette.charcoal}" stroke-width="6" fill="none" stroke-linecap="round" />
    <path d="M150 420 Q200 400 250 420" stroke="${palette.cardamom}" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.7" />
  `
  );
}

export function mapIllustration() {
  return svgWrap(
    '0 0 400 300',
    `
    <rect width="400" height="300" fill="${palette.cream}" />
    <g stroke="${palette.charcoal}" stroke-opacity="0.15" stroke-width="2">
      <line x1="0" y1="60" x2="400" y2="60" />
      <line x1="0" y1="150" x2="400" y2="150" />
      <line x1="0" y1="230" x2="400" y2="230" />
      <line x1="90" y1="0" x2="90" y2="300" />
      <line x1="230" y1="0" x2="230" y2="300" />
      <line x1="330" y1="0" x2="330" y2="300" />
    </g>
    <circle cx="230" cy="150" r="14" fill="${palette.terracotta}" />
    <path d="M230 150 L230 190" stroke="${palette.terracotta}" stroke-width="4" stroke-linecap="round" />
    <circle cx="230" cy="150" r="5" fill="${palette.cream}" />
  `
  );
}

const categoryIllustrations = {
  starters: svgWrap(
    '0 0 320 400',
    `
    <rect width="320" height="400" fill="${palette.charcoal}" />
    <ellipse cx="160" cy="230" rx="110" ry="60" fill="${palette.cream}" opacity="0.1" />
    <ellipse cx="160" cy="230" rx="80" ry="42" fill="${palette.terracotta}" opacity="0.75" />
    <circle cx="130" cy="215" r="8" fill="${palette.cream}" opacity="0.5" />
    <circle cx="185" cy="230" r="8" fill="${palette.cream}" opacity="0.5" />
    <circle cx="155" cy="250" r="8" fill="${palette.cream}" opacity="0.5" />
  `
  ),
  mains: svgWrap(
    '0 0 320 400',
    `
    <rect width="320" height="400" fill="${palette.charcoal}" />
    <circle cx="160" cy="220" r="100" fill="${palette.cream}" opacity="0.1" />
    <circle cx="160" cy="220" r="75" fill="${palette.terracotta}" opacity="0.35" />
    <circle cx="160" cy="220" r="45" fill="${palette.turmeric}" opacity="0.8" />
  `
  ),
  'breads-rice': svgWrap(
    '0 0 320 400',
    `
    <rect width="320" height="400" fill="${palette.charcoal}" />
    <ellipse cx="160" cy="230" rx="95" ry="55" fill="${palette.cream}" opacity="0.12" />
    <ellipse cx="160" cy="220" rx="70" ry="34" fill="${palette.turmeric}" opacity="0.85" />
    <ellipse cx="160" cy="220" rx="70" ry="34" fill="none" stroke="${palette.charcoal}" stroke-opacity="0.2" stroke-width="2" />
  `
  ),
  sides: svgWrap(
    '0 0 320 400',
    `
    <rect width="320" height="400" fill="${palette.charcoal}" />
    <circle cx="160" cy="220" r="85" fill="${palette.cream}" opacity="0.12" />
    <circle cx="160" cy="220" r="58" fill="${palette.cardamom}" opacity="0.75" />
  `
  ),
  desserts: svgWrap(
    '0 0 320 400',
    `
    <rect width="320" height="400" fill="${palette.charcoal}" />
    <ellipse cx="160" cy="235" rx="90" ry="48" fill="${palette.cream}" opacity="0.1" />
    <circle cx="160" cy="205" r="42" fill="${palette.terracotta}" opacity="0.8" />
    <circle cx="160" cy="205" r="18" fill="${palette.cream}" opacity="0.4" />
  `
  ),
  drinks: svgWrap(
    '0 0 320 400',
    `
    <rect width="320" height="400" fill="${palette.charcoal}" />
    <path d="M120 130 h80 l-14 150 a30 30 0 0 1 -52 0 z" fill="${palette.cream}" opacity="0.1" />
    <path d="M128 150 h64 l-10 120 a24 24 0 0 1 -44 0 z" fill="${palette.turmeric}" opacity="0.85" />
  `
  ),
};

export function categoryIllustration(category) {
  return categoryIllustrations[category] || categoryIllustrations.mains;
}

export function fennelMark() {
  return `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24 9 C31 9 36 16 36 24 C36 32 31 39 24 39 C17 39 12 32 12 24 C12 16 17 9 24 9 Z" stroke="currentColor" stroke-width="2.2" />
      <line x1="24" y1="12" x2="24" y2="36" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
      <line x1="24" y1="17" x2="18.5" y2="14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      <line x1="24" y1="17" x2="29.5" y2="14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      <line x1="24" y1="24" x2="17.5" y2="21.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      <line x1="24" y1="24" x2="30.5" y2="21.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      <line x1="24" y1="31" x2="18.5" y2="34" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      <line x1="24" y1="31" x2="29.5" y2="34" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
    </svg>
  `;
}

export function fennelDivider() {
  const frond = (cx) => `
    <g transform="translate(${cx} 12)">
      <line x1="0" y1="-7" x2="0" y2="7" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
      <line x1="0" y1="-3" x2="-4" y2="-6" stroke="currentColor" stroke-width="1" stroke-linecap="round" />
      <line x1="0" y1="-3" x2="4" y2="-6" stroke="currentColor" stroke-width="1" stroke-linecap="round" />
      <line x1="0" y1="3" x2="-4" y2="6" stroke="currentColor" stroke-width="1" stroke-linecap="round" />
      <line x1="0" y1="3" x2="4" y2="6" stroke="currentColor" stroke-width="1" stroke-linecap="round" />
    </g>
  `;
  return `
    <svg viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="0" y1="12" x2="86" y2="12" stroke="currentColor" stroke-width="1" opacity="0.5" />
      <line x1="134" y1="12" x2="220" y2="12" stroke="currentColor" stroke-width="1" opacity="0.5" />
      ${frond(110)}
      ${frond(78)}
      ${frond(142)}
    </svg>
  `;
}
