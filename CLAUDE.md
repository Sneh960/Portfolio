# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built as a static site with modern interactive features. It showcases Snehdeep Kaur's software development skills and professional experience.

## Architecture

### Static Site Structure
- **Main Entry**: `index.html` - Single page application containing all portfolio sections
- **Assets Organization**: 
  - `assets/css/style.css` - Custom styles with dark/light theme support using CSS variables
  - `assets/js/main.js` - Core functionality (theme toggle, smooth scroll, animations, form handling)
  - `assets/js/components.js` - Component loader system (experimental, not actively used)
  - `assets/vendor/` - Third-party libraries (Bootstrap, jQuery, AOS, Typed.js, Isotope, etc.)

### Component System (Experimental)
A modular component architecture exists but is not currently used in production:
- Template syntax uses `{{variable}}` placeholders
- Component loader with fetch-based loading and simple templating
- ComponentFactory class for creating different component types

### Theme Architecture
- CSS custom properties (variables) for light/dark mode theming
- Theme toggle accessible only through sidebar navigation (removed floating desktop button)
- Theme preference persisted in localStorage
- Dynamic text updates for theme toggle ("Dark Mode" ↔ "Light Mode")

## Development Commands

### Local Development
```bash
# Serve the site locally (any static file server works)
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

### Contact Form Configuration
The contact form uses FormSubmit service (no backend required):
- Form action: `https://formsubmit.co/snehdeep459@gmail.com`
- Includes hidden fields for redirect URL, subject, autoresponse, and template format
- No PHP or server-side processing needed

## Key Technical Features

### Theme System
- Navbar-based theme toggle for all screen sizes
- CSS variables for consistent theming: `--primary-color`, `--text-color`, `--bg-color`, `--card-bg`, etc.
- Smart mobile menu behavior (closes after theme toggle on mobile, stays open on desktop)

### Responsive Design
- Bootstrap 4 grid system with custom utility classes
- Mobile-first responsive breakpoints
- Bootstrap spacing utilities (`mb-4`, `gy-4`) for consistent spacing
- Personal interests section uses 2x2 grid layout with proper row separation

### Interactive Elements
- AOS (Animate On Scroll) for staggered animations
- Typed.js for hero section typing effect
- Isotope for projects/portfolio filtering
- Custom hover animations and micro-interactions
- FormSubmit integration for contact form without backend

### Critical Styling Patterns
- Resume section uses CSS variables for theme compatibility
- Interest boxes use flexbox with Bootstrap utility classes for proper spacing
- Contact form has modern card-based design with gradient header
- All fixed colors replaced with CSS variables for dark mode compatibility

## Deployment

- Deployed via GitHub Pages at: https://sneh960.github.io/Portfolio/
- Jekyll theme configured in `_config.yml` (jekyll-theme-cayman)
- Push to main branch automatically triggers deployment
- Contact form redirects to GitHub Pages URL after submission

## Code Conventions

### CSS
- CSS custom properties for theming (avoid fixed colors)
- Bootstrap utility classes preferred over custom spacing CSS
- Mobile-first media queries
- Flexbox for centering and layout

### JavaScript
- jQuery for DOM manipulation and vendor plugin integration
- Vanilla JS for modern features (theme toggle, localStorage)
- Event delegation for dynamic content
- Optional chaining (`?.`) for safe property access

### HTML
- Bootstrap 4 grid system with responsive classes
- Semantic HTML5 elements
- Data attributes for JavaScript hooks and AOS animations
- Bootstrap utility classes for spacing (`mb-4`, `gy-4`, etc.)