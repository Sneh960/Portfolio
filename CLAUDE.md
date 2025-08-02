# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built as a static site with modern interactive features. It showcases software development skills and professional experience.

## Architecture

### Static Site Structure
- **Main Entry**: `index.html` - Single page application containing all portfolio sections
- **Assets Organization**: 
  - `assets/css/style.css` - Custom styles with dark/light theme support
  - `assets/js/main.js` - Core functionality (theme toggle, smooth scroll, animations)
  - `assets/js/components.js` - Component loader system (partially implemented)
  - `assets/vendor/` - Third-party libraries (Bootstrap, jQuery, AOS, etc.)

### Component System (In Progress)
A modular component architecture is being implemented:
- Components stored in `components/` directory
- Template syntax uses `{{variable}}` placeholders
- Component loader in `assets/js/components.js`

## Development Commands

### Local Development
```bash
# Serve the site locally (any static file server works)
python -m http.server
# or
npx serve .
```

### Contact Form Setup
Update email address in `forms/contact.php`:
```php
$receiving_email_address = 'your-email@example.com';
```
Note: Requires PHP Email Form library (not included in free template)

## Key Features

### Theme System
- Dark/light mode toggle implemented
- Theme preference saved in localStorage
- CSS variables used for theming

### Responsive Design
- Bootstrap grid system
- Mobile-first approach
- Custom mobile navigation

### Interactive Elements
- AOS (Animate On Scroll) for animations
- Typed.js for typing effects
- Isotope for portfolio filtering
- Smooth scrolling navigation

## Important Files

- `portfolio_updates.md` - Detailed roadmap and feature tracking
- `_config.yml` - Jekyll configuration for GitHub Pages deployment
- `forms/contact.php` - Contact form handler (requires setup)

## Current Development Status

Based on `portfolio_updates.md`, the portfolio is being modernized with:
- ✅ Modern UI/UX improvements
- ✅ Component-based architecture (partial)
- ✅ Dark/light theme toggle
- ✅ Projects section with filtering
- ✅ Personal interests section
- ⏳ Content updates pending for education, experience, and career goals sections

## Deployment

The site is deployed via GitHub Pages. Push to the main branch automatically triggers deployment.

## Code Conventions

### CSS
- BEM naming convention for custom classes
- CSS variables for theming
- Mobile-first media queries

### JavaScript
- jQuery used for DOM manipulation and plugins
- Vanilla JS for modern features (theme toggle, component loader)
- Event delegation for dynamic content

### HTML
- Semantic HTML5 elements
- Bootstrap utility classes for spacing and layout
- Data attributes for JavaScript hooks