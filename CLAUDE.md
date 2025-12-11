# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript portfolio website for UX/UI designers. It's built with Vite as the build tool and uses React Router for navigation. The project uses modern React patterns and a component-based architecture.

## Development Commands

- `npm i` - Install dependencies
- `npm run dev` - Start development server on port 3000

## Build System

This project uses Vite 6.3.5 with React SWC plugin. The build output goes to the `build` directory and targets ESNext. The dev server runs on port 3000 and opens automatically.

## Architecture

### Core Structure
- **App.tsx**: Main application router with BrowserRouter defining routes for:
  - `/` - HomePage with version switcher (human/AI variants)
  - `/projects` - Projects gallery page
  - `/projects/mobile-banking` - Case study page

### Components Architecture
The project uses a dual-version system where the user can toggle between a "human" and "AI" version of the portfolio.

**Main Components:**
- `Hero` - Hero section with version selector
- `Projects`, `Experience`, `About`, `Contact` - Human version sections
- `AIVersion` - AI version of the portfolio
- `ProjectsPage`, `CaseStudyPage` - Dedicated project pages

### UI Components
Extensive Radix UI component library in `src/components/ui/` with primitives like:
- Dialog, Dropdown, Navigation components
- Form components (input, textarea, checkbox, etc.)
- Complex components (carousel, charts, tables)

### Dependencies
- **UI Framework**: Radix UI components with Tailwind CSS styling
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **Charts**: Recharts
- **Animations**: Framer Motion (as "motion")
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React
- **Carousel**: Embla Carousel React
- **Notifications**: Sonner

### Path Aliases
Vite config includes aliases for all dependencies with specific versions and `@` pointing to `./src`.

## Key Features

- Version switching between human and AI portfolio variants
- Responsive design with mobile-first approach
- Project gallery with case study navigation
- Modern React patterns with hooks and functional components
- Accessible UI components through Radix UI