# minimal-geff.re

A minimalist personal website built with [Eleventy](https://www.11ty.dev/).

## Project Structure

```
minimal-geff.re/
├── _site/            # Generated site output
├── content/          # All content pages in Markdown
│   ├── drafts/       # Draft content
│   └── portfolio/    # Portfolio content
├── images/           # Site images and assets
├── includes/         # Template partials and SVG components
├── layouts/          # Page layouts (page.njk)
├── styles/           # CSS stylesheets
├── utils/            # JavaScript utilities
├── .eleventy.js      # Eleventy configuration
└── package.json      # Project dependencies
```

## Development

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm

### Installation

```bash
npm install
```

### Development Commands

- `npm start` - Start development server with hot reloading
- `npm run build` - Build site for production
- `npm run dev` - Run development server (alias for start)

### Technology Stack

- [Eleventy](https://www.11ty.dev/) v3.1.0 - Static site generator
- Nunjucks (.njk) - Templating engine
- Markdown - Content authoring
- CSS - Custom styling with dark mode support
- jsdom - DOM manipulation for static site generation
- pretty - HTML formatting

## Deployment

The site is built into the `_site` directory, which can be deployed to any static hosting service. Currently, the site is hosted on [Vercel](https://vercel.com/), which provides surprisingly seamless deployment from Git repositories.

## Customization

- `.eleventy.js` - Configure Eleventy settings and add plugins
- `styles/` - Modify site-wide styles
- `layouts/page.njk` - Edit main page template
- `includes/` - Add or modify template partials
- `utils/` - Utility functions for site generation

## Features

- Responsive design
- Dark mode support
- Custom web fonts
- SVG logo integration
- Clean typography
- Fast build times
- Minimal JavaScript

## Philosophy
This website is built with longevity in mind, prioritizing simplicity and maintainability above all else. By design, it eschews complex databases and elaborate systems in favor of straightforward solutions like Markdown content. Every decision, from the foundational structure to the content management, is made to ensure the site remains easily manageable and adaptable long into the future, capable of outlasting the ever-evolving technological landscape.
