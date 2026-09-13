import '../styles/base.css';
import '../styles/layout.css';
import '../styles/utilities.css';
import '../styles/dev-tokens.css';

const colors = [
  { name: 'Cream', variable: '--color-cream', hex: '#F6EEE1' },
  { name: 'Charcoal', variable: '--color-charcoal', hex: '#241F1C' },
  { name: 'Terracotta', variable: '--color-terracotta', hex: '#C1502E' },
  { name: 'Turmeric', variable: '--color-turmeric', hex: '#D9A441' },
  { name: 'Cardamom', variable: '--color-cardamom', hex: '#5C6E4A' },
];

const typeRows = [
  { tag: 'h1', label: 'H1 - Display', variable: '--fs-h1', sample: 'Home cooking, taken seriously.' },
  { tag: 'h2', label: 'H2 - Section heading', variable: '--fs-h2', sample: 'The Menu' },
  { tag: 'h3', label: 'H3 - Item name', variable: '--fs-h3', sample: 'Dal Makhani' },
  { tag: 'p', label: 'Body', variable: '--fs-body', sample: 'Slow-cooked black lentils, butter, cream.' },
  { tag: 'small', label: 'Small / meta', variable: '--fs-small', sample: 'Tue-Sun, 11:30 AM-9:30 PM' },
];

const spaceTokens = ['--space-1', '--space-2', '--space-3', '--space-4', '--space-5', '--space-6', '--space-7', '--space-8'];

function createSection(titleText) {
  const section = document.createElement('section');
  const title = document.createElement('p');
  title.className = 'dev-tokens__block-title';
  title.textContent = titleText;
  section.appendChild(title);
  return section;
}

function renderColors(root) {
  const section = createSection('Color tokens');
  const grid = document.createElement('div');
  grid.className = 'dev-swatches';
  colors.forEach((color) => {
    const card = document.createElement('div');
    card.className = 'dev-swatch';
    const fill = document.createElement('div');
    fill.className = 'dev-swatch__fill';
    fill.style.backgroundColor = `var(${color.variable})`;
    const label = document.createElement('div');
    label.className = 'dev-swatch__label';
    label.textContent = `${color.name} - ${color.hex}`;
    card.appendChild(fill);
    card.appendChild(label);
    grid.appendChild(card);
  });
  section.appendChild(grid);
  root.appendChild(section);
}

function renderTypography(root) {
  const section = createSection('Typography hierarchy');
  typeRows.forEach((row) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'dev-type-row';
    const el = document.createElement(row.tag);
    el.textContent = row.sample;
    const meta = document.createElement('div');
    meta.className = 'dev-type-row__meta';
    meta.textContent = `${row.label} - ${row.variable}`;
    wrapper.appendChild(el);
    wrapper.appendChild(meta);
    section.appendChild(wrapper);
  });
  root.appendChild(section);
}

function renderSpacing(root) {
  const section = createSection('Spacing scale (8px base unit)');
  spaceTokens.forEach((token) => {
    const row = document.createElement('div');
    row.className = 'dev-space-row';
    const label = document.createElement('span');
    label.className = 'dev-space-row__label';
    label.textContent = token;
    const bar = document.createElement('span');
    bar.className = 'dev-space-row__bar';
    bar.style.width = `var(${token})`;
    row.appendChild(label);
    row.appendChild(bar);
    section.appendChild(row);
  });
  root.appendChild(section);
}

function renderBordersRadiiShadow(root) {
  const section = createSection('Borders, radii, shadow');
  const grid = document.createElement('div');
  grid.className = 'dev-detail-grid';

  const hairline = document.createElement('div');
  hairline.className = 'dev-detail-box';
  hairline.textContent = 'Hairline border, radius-sm';

  const mdRadius = document.createElement('div');
  mdRadius.className = 'dev-detail-box dev-detail-box--radius-md';
  mdRadius.textContent = 'Hairline border, radius-md';

  const shadow = document.createElement('div');
  shadow.className = 'dev-detail-box dev-detail-box--shadow';
  shadow.textContent = 'Nav shadow token';

  grid.appendChild(hairline);
  grid.appendChild(mdRadius);
  grid.appendChild(shadow);
  section.appendChild(grid);
  root.appendChild(section);
}

function renderResponsiveGrid(root) {
  const section = createSection('Responsive foundation (1 / 2 / 3 columns)');
  const grid = document.createElement('div');
  grid.className = 'dev-responsive-grid';
  for (let i = 1; i <= 6; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'dev-responsive-cell';
    cell.textContent = `Cell ${i}`;
    grid.appendChild(cell);
  }
  section.appendChild(grid);
  root.appendChild(section);
}

function render() {
  const root = document.getElementById('tokens-app');
  const container = document.createElement('div');
  container.className = 'dev-tokens container';

  const heading = document.createElement('h1');
  heading.textContent = 'Nivāla - Design Token Preview';
  container.appendChild(heading);

  renderColors(container);
  renderTypography(container);
  renderSpacing(container);
  renderBordersRadiiShadow(container);
  renderResponsiveGrid(container);

  root.appendChild(container);
}

render();
