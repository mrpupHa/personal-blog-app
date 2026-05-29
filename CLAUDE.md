# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint
npm run preview  # Preview production build
```

## Architecture

This is a React 19 personal blog application built with Vite 8 and TypeScript 6. Deployed on Vercel.

### Tech Stack
- **Styling**: Tailwind CSS 4 + DaisyUI + shadcn/ui components
- **Routing**: React Router DOM 7
- **HTTP**: Axios (API at `VITE_API_BASE_URL` env var)
- **Date formatting**: date-fns

### Project Structure
- `src/pages/` - Page components (e.g., `LadingPage.tsx`)
- `src/layouts/` - Layout wrappers (`MainLayout.tsx` wraps pages with Navbar)
- `src/components/` - React components
  - `ui/` - shadcn/ui primitives (button, input, select, dropdown-menu)
  - `Navbar/` - Navigation with guest/user variants based on auth state
- `src/lib/utils.ts` - `cn()` utility for className merging (clsx + tailwind-merge)
- `src/types/` - TypeScript type definitions
- `src/assets/` - Fonts (Poppins) and images

### Path Alias
Use `@/` to reference `./src/` (configured in tsconfig.json and vite.config.ts).

### Design System
Custom theme in `src/index.css`:
- **Typography**: `text-headline-1` through `text-headline-4`, `text-body-1` through `text-body-3`
- **Colors**: `brown-100` through `brown-600`, brand colors (`brand-orange`, `brand-green`, `brand-red`)
- **Font**: Poppins (custom @font-face declarations)
- **Markdown styles**: `.markdown` class for rendered article content

### Component Patterns
- Navbar conditionally renders `NavbarUser` or `NavbarGuest` based on auth state
- `BlogCard` and `ArticleSection` fetch posts from API and support category filtering and search
- shadcn/ui components use class-variance-authority for variant styling