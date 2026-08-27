# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, minimalist portfolio template built with Astro and Tailwind CSS v4. It's designed to be easily customizable through a single configuration file while maintaining a clean, professional appearance.

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS v4**: Utility-first CSS framework using the new @tailwindcss/vite plugin
- **TypeScript**: For type-safe configuration
- **Tabler Icons**: Icon library

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): Individual Astro components for each section (Hero, About, Projects, Experience, Education, Header, Footer), plus three shared ones:
  - `Section.astro`: the 12-column split, spacing rhythm and sticky heading used by About/Projects/Experience/Education
  - `EntryCard.astro`: the card shared by Experience and Education (same markup, different field names)
  - `ThemeToggle.astro`: the light/dark switch
- **Main Layout** (`src/pages/index.astro`): Single-page layout that imports all components
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization

### Key Architectural Decisions

1. **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: `accentColor` (light) and `accentColorDark` propagate throughout the site via CSS custom properties
5. **Theming**: All colours are `--c-*` custom properties defined in `global.css` and exposed to Tailwind via `@theme inline`, which is what lets the toggle re-theme at runtime. Components use token utilities (`bg-canvas`, `bg-surface`, `text-ink`, `text-muted`, `border-line`, `text-accent`) and must never hardcode `gray-*`/`white`/`black`

## Important Implementation Details

- The site uses Tailwind CSS v4 with the Vite plugin configuration
- No linting or testing framework is currently configured; verification is `npm run build` plus checking both themes in a browser
- Dark mode resolves in three layers: `:root` (light default) → `prefers-color-scheme` → `[data-theme]` set by the toggle and persisted in `localStorage`. A blocking inline script in `index.astro` applies the stored choice before first paint to avoid a flash
- Scroll reveals are driven by one `IntersectionObserver` in `index.astro` over `[data-reveal]`. The hidden state is gated behind a `.reveal-ready` class added by the head script, with a 2.5s watchdog that lifts it if the module never runs — so a failed bundle degrades to a readable page rather than a blank one
- All motion is behind `prefers-reduced-motion`
- All components are in `.astro` format (not React/Vue/etc)
- The project uses IBM Plex Mono font loaded from Google Fonts
- Social links in the config are all optional and will conditionally render

## Working with Components

When modifying components:
1. Components read directly from the imported `siteConfig` object
2. Use Tailwind utility classes for styling
3. Maintain the existing monospace font aesthetic
4. Use Tabler Icons for consistency with existing icons

## Configuration Structure

The `src/config.ts` exports a `siteConfig` object with these sections:
- Basic info: name, title, description, accentColor, accentColorDark
- Social links: email, linkedin, twitter, github (all optional)
- aboutMe: string
- skillGroups: array of {category, items[]}
- projects: array of {name, description, link, skills} — an empty `link` renders the card without a click affordance
- experience: array of {company, title, dateRange, bullets}
- education: array of {school, degree, dateRange, achievements}