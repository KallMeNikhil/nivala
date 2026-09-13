import { menuItems, categories, diets } from '../data/menu.js';
import { renderMenuGrid } from './menuGrid.js';

export function filterMenu(items, category, selectedDiets) {
  return items.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category;
    const matchesDiets = Array.from(selectedDiets).every((diet) => item.diets.includes(diet));
    return matchesCategory && matchesDiets;
  });
}

export function initFilters() {
  const tabsRoot = document.querySelector('[data-category-tabs]');
  const chipsRoot = document.querySelector('[data-diet-chips]');
  const gridRoot = document.querySelector('[data-menu-grid]');
  const liveRegion = document.querySelector('[data-menu-live-region]');
  if (!tabsRoot || !chipsRoot || !gridRoot) return;

  let selectedCategory = 'all';
  const selectedDiets = new Set();

  function renderTabs() {
    tabsRoot.innerHTML = categories
      .map((category) => {
        const isActive = category.id === selectedCategory;
        return `
          <button
            type="button"
            role="tab"
            class="tab${isActive ? ' tab--active' : ''}"
            aria-selected="${isActive}"
            aria-controls="menu-panel"
            tabindex="${isActive ? '0' : '-1'}"
            data-category="${category.id}"
          >${category.label}</button>
        `;
      })
      .join('');
  }

  function renderChips() {
    chipsRoot.innerHTML = diets
      .map((diet) => {
        const isActive = selectedDiets.has(diet.id);
        return `
          <button
            type="button"
            class="chip${isActive ? ' chip--active' : ''}"
            aria-pressed="${isActive}"
            data-diet="${diet.id}"
          >${isActive ? '✓ ' : ''}${diet.label}</button>
        `;
      })
      .join('');
  }

  function renderResults() {
    const filtered = filterMenu(menuItems, selectedCategory, selectedDiets);

    gridRoot.style.opacity = '0';

    window.requestAnimationFrame(() => {
      if (filtered.length === 0) {
        const message = selectedDiets.size > 0
          ? 'No dishes match these filters.'
          : 'No dishes in this category yet.';
        gridRoot.innerHTML = `
          <div class="menu-empty">
            <p>${message}</p>
            ${selectedDiets.size > 0 ? '<button type="button" class="button button--secondary" data-clear-filters>Clear filters</button>' : ''}
          </div>
        `;
      } else {
        renderMenuGrid(gridRoot, filtered);
      }

      if (liveRegion) {
        liveRegion.textContent = `Showing ${filtered.length} of ${menuItems.length} dishes`;
      }

      window.requestAnimationFrame(() => {
        gridRoot.style.opacity = '1';
      });
    });
  }

  function focusActiveTab() {
    const activeTab = tabsRoot.querySelector('[aria-selected="true"]');
    if (activeTab) activeTab.focus();
  }

  function selectCategory(categoryId, { moveFocus = false } = {}) {
    selectedCategory = categoryId;
    renderTabs();
    if (moveFocus) focusActiveTab();
    renderResults();
  }

  function toggleDiet(dietId) {
    if (selectedDiets.has(dietId)) {
      selectedDiets.delete(dietId);
    } else {
      selectedDiets.add(dietId);
    }
    renderChips();
    renderResults();
  }

  function clearFilters() {
    selectedCategory = 'all';
    selectedDiets.clear();
    renderTabs();
    renderChips();
    renderResults();
  }

  tabsRoot.addEventListener('click', (event) => {
    const tab = event.target.closest('[data-category]');
    if (!tab) return;
    selectCategory(tab.dataset.category);
  });

  tabsRoot.addEventListener('keydown', (event) => {
    const navigationKeys = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End'];
    if (!navigationKeys.includes(event.key)) return;

    const tabs = Array.from(tabsRoot.querySelectorAll('[role="tab"]'));
    const currentIndex = tabs.indexOf(document.activeElement);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    }

    event.preventDefault();
    tabs.forEach((tab, index) => {
      tab.tabIndex = index === nextIndex ? 0 : -1;
    });
    tabs[nextIndex].focus();
  });

  chipsRoot.addEventListener('click', (event) => {
    const chip = event.target.closest('[data-diet]');
    if (!chip) return;
    toggleDiet(chip.dataset.diet);
  });

  gridRoot.addEventListener('click', (event) => {
    if (event.target.closest('[data-clear-filters]')) {
      clearFilters();
    }
  });

  renderTabs();
  renderChips();
  renderResults();
}
