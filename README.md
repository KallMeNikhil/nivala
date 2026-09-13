# Nivāla

Nivāla is a modern Indian eatery built around one idea: home cooking, taken seriously. This is the site for the restaurant - where people browse the menu, check hours and location, and find their way to a table or a quick pickup.

The design leans warm and editorial: soft terracotta and cream tones, confident typography, and food photography given room to breathe, so the site feels like an extension of the dining room rather than a generic template.

## What you can do

- **Browse the full menu** by category - starters, mains, breads & rice, sides, desserts, and drinks
- **Filter by diet** - Veg, Vegan, and Gluten-Free tags can be combined with a category to narrow things down exactly
- **Check hours and location**, with a direct link to get directions
- **Reach the restaurant** by phone, email, or map - no forms, just the fastest path to a human
- **Navigate comfortably on any device**, with a dedicated mobile menu for smaller screens

## The experience

The menu is the centerpiece: a category tab row sits above the grid, and dietary filter chips work alongside it, so you can, for example, view only Vegan Mains in two taps. If a filter combination comes up empty, the site says so plainly and offers a one-tap way to clear filters and start over.

Every interactive control - the category tabs, the diet chips, the mobile navigation - is built to work with a keyboard as well as a mouse or touch, and menu updates are announced for screen readers as they happen.

The layout adapts across phone, tablet, and desktop, and the hero, story, and location sections carry the same warm illustration style throughout, so the visual identity holds together from the first scroll to the last.

## Built with

Vite, HTML, CSS, and JavaScript - no framework, no backend, no CMS. Nivāla is a static site, so it can be served from anywhere that hosts static files.

## Run it locally

```
npm install
npm run dev
```

Then open the local address Vite prints in your terminal (typically `http://localhost:5173`).

To build a production version:

```
npm run build
```

## Prefer Docker?

Nivāla is also fully containerized. If you'd rather not install Node locally, see `docs/DOCKER_SETUP_AND_DEPLOYMENT.md` for setup, running the dev server, and previewing a production build.
