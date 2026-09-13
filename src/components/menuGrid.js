import { menuItems, categories } from '../data/menu.js';
import { categoryIllustration } from '../assets/illustrations.js';

const categoryLabels = Object.fromEntries(categories.map((category) => [category.id, category.label]));

function dishCardMarkup(item) {
  return `
    <article class="dish-card" data-category="${item.category}" data-diets="${item.diets.join(' ')}">
      <div class="dish-card__image" role="img" aria-label="${item.name}">${categoryIllustration(item.category)}</div>
      <div class="dish-card__body">
        <p class="dish-card__category">${categoryLabels[item.category] || ''}</p>
        <div class="dish-card__heading">
          <h3 class="dish-card__name">${item.name}</h3>
          <span class="dish-card__price">₹${item.price}</span>
        </div>
        <p class="dish-card__description">${item.description}</p>
        <ul class="dish-card__diets" role="list">
          ${item.diets.map((diet) => `<li class="diet-tag diet-tag--${diet}">${diet.replace('-', ' ')}</li>`).join('')}
        </ul>
      </div>
    </article>
  `;
}

export function renderMenuGrid(root, items = menuItems) {
  root.innerHTML = items.map(dishCardMarkup).join('');
}
