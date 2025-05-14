# minimal-geff.re

A minimalist personal website built with [Eleventy](https://www.11ty.dev/). The site features a clean, typography-focused design with dark mode support and a custom black metal-style logo.

## Project Structure

```
minimal-geff.re/
├── _includes/         # Template partials and SVG components
├── _layouts/          # Page layouts (page.njk)
├── _site/            # Generated site output
├── fonts/            # Custom web fonts
├── images/           # Site images and assets
├── *.md              # Content pages in Markdown
├── .eleventy.js      # Eleventy configuration
├── package.json      # Project dependencies
└── style.css         # Site-wide styles
```

## Content Pages

- `index.md` - Homepage
- `resume.md` - Professional experience and skills
- `hedonic-adaption.md` - Article about hedonic adaptation
- `my-obsidian-setup.md` - Obsidian setup guide
- `notetaking.md` - Note-taking methodology
- `testimonials.md` - Professional testimonials

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

- [Eleventy](https://www.11ty.dev/) v2.0.1 - Static site generator
- Nunjucks (.njk) - Templating engine
- Markdown - Content authoring
- CSS - Custom styling with dark mode support

## Deployment

The site is built into the `_site` directory, which can be deployed to any static hosting service.

## Customization

- `.eleventy.js` - Configure Eleventy settings and add plugins
- `style.css` - Modify site-wide styles
- `_layouts/page.njk` - Edit main page template
- `_includes/` - Add or modify template partials

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
