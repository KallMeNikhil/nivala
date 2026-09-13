import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/utilities.css';

import { initNav } from './components/nav.js';
import { initMobileNav } from './components/mobileNav.js';
import { initFilters } from './components/filters.js';
import { initMedia } from './components/media.js';
import { initMotion } from './components/motion.js';

initNav();
initMobileNav();
initFilters();
initMedia();
initMotion();
