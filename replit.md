# The Way - Landing Page

## Overview

The Way is a faith-based web application landing page built with Next.js 15 and React. It presents a Christ-centered discipleship platform called "Wayfinder" (the AI guide inside the movement) that aims to help believers deepen their spiritual formation through AI-powered tools. The landing page is designed to communicate the vision of returning to the original "Way" of the first followers of Christ, combining biblical truth with modern technology.

**Key Positioning:**
- **The Way** = The movement itself
- **Wayfinder** = The AI spiritual guide inside the movement
- **Vision** = Technology layer for the global Body of Christ

The site is deployed on Vercel and was initially generated using v0.dev.

## Recent Changes (November 2025)

### Major Landing Page Redesign
Complete visual and copy overhaul to create a more "movement-focused" aesthetic:

1. **New Dark Hero Section** - Dramatic dark theme with amber accents, featuring the headline "The First Followers of Christ Weren't Called Christians. They Were Called The Way."

2. **Problem Section** - "The Modern Church Has a Discipleship Crisis" with bold conviction design, Revelation 3:16 Scripture callout

3. **Solution Section** - "Discipleship Operating System for Everyday Believers" with 5 pillars (Scripture, Apologetics, Spiritual Warfare, Prayer, Formation)

4. **How It Works Section** - Detailed feature breakdown:
   - Wayfinder: Your Spiritual Guide
   - Learn from the Fathers (Church Fathers content)
   - Apologetics Training (with 1 Peter 3:15)
   - Spiritual Warfare Training (with Ephesians 6:12)
   - Build Discipline, Not Just Habits
   - Unite the Body (Coming Soon)

5. **Vision Future Section** - "Technology Layer for the Body of Christ"

6. **Updated Final CTA** - "The Spirit Is Moving. Will You Follow?"

7. **Navigation/Footer** - Updated for dark theme, CTAs changed to "Start Training"

**Design Tone:** Apostolic summons, conviction without condemnation, movement energy (not app marketing)

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
**Problem**: Need for a modern, performant React framework with server-side rendering capabilities for optimal SEO and user experience.

**Solution**: Next.js 15 with App Router architecture.

**Rationale**: 
- Built-in server-side rendering and static site generation for better SEO
- File-based routing with the App Router provides clear project structure
- Excellent performance optimization out of the box
- Server and client components separation for optimal bundle sizes

**Alternatives Considered**: Create React App (lacks SSR), Remix (less ecosystem maturity)

**Pros**: Modern features, excellent developer experience, strong ecosystem, automatic code splitting

**Cons**: Learning curve for App Router patterns, potential over-engineering for simple landing pages

### Styling System
**Problem**: Need for rapid UI development with consistent, customizable design system and responsive layouts.

**Solution**: Tailwind CSS with shadcn/ui component library.

**Rationale**:
- Utility-first approach enables rapid prototyping and iteration
- shadcn/ui provides high-quality, accessible components built on Radix UI primitives
- CSS variables enable theme customization (light/dark modes)
- Type-safe with TypeScript integration

**Design Decisions**:
- Custom color palette using CSS custom properties in `globals.css`
- Font strategy: Inter (sans-serif) and Crimson Text (serif) for visual hierarchy
- Component variants managed through class-variance-authority
- Responsive breakpoints follow Tailwind's mobile-first approach

**Pros**: Fast development, small bundle sizes, highly customizable, no runtime CSS-in-JS overhead

**Cons**: Can lead to verbose className strings, requires learning utility class names

### Component Architecture
**Problem**: Need for reusable, accessible UI components with consistent behavior.

**Solution**: Combination of custom components and shadcn/ui primitives built on Radix UI.

**Component Structure**:
- Page-level components in `components/` directory (hero-section, problem-section, etc.)
- Reusable UI primitives in `components/ui/` directory
- Layout components (Navigation, Footer) shared across pages
- Client components explicitly marked with `"use client"` directive

**Key Patterns**:
- Server components by default for better performance
- Client components only when interactivity is required
- Compound component pattern for complex UI (e.g., Accordion, Dialog)
- Forwarded refs for accessibility and third-party library integration

### Routing Architecture
**Problem**: Need for multi-page navigation with SEO optimization.

**Solution**: Next.js App Router with file-based routing.

**Structure**:
- `/` - Main landing page (`app/page.tsx`)
- `/vision` - Vision page (`app/vision/page.tsx`)
- `app/layout.tsx` - Root layout with metadata and font configuration

**SEO Strategy**:
- Metadata API for static and dynamic meta tags
- OpenGraph and Twitter card support
- Semantic HTML structure
- Custom favicon and apple-touch-icon

### Type Safety
**Problem**: Need for type safety and better developer experience in a JavaScript codebase.

**Solution**: TypeScript with strict mode enabled.

**Configuration**:
- Path aliases (`@/*`) for clean imports
- Strict type checking enabled
- Next.js plugin for automatic type generation
- React Server Components type support

### Image Optimization
**Problem**: Need for optimized image delivery with proper loading states.

**Solution**: Next.js Image component with priority loading for above-fold images.

**Strategy**:
- Static images in `public/` directory
- Automatic format optimization (WebP/AVIF)
- Responsive image sizing
- Priority loading for hero images to improve LCP

### Animation and Interactivity
**Problem**: Need for engaging visual effects without performance degradation.

**Solution**: CSS animations with Tailwind utilities and Radix UI primitives for interactive elements.

**Approach**:
- Tailwind animation utilities for simple effects (pulse, fade)
- Radix UI primitives handle complex interaction states
- Framer Motion NOT currently used (could be added for advanced animations)
- CSS transforms for performance-conscious animations

### Form Handling
**Problem**: Need for form validation and management (for future interactive features).

**Solution**: React Hook Form with Zod resolvers (infrastructure in place).

**Dependencies Present**:
- `react-hook-form` for form state management
- `@hookform/resolvers` for validation schema integration
- Form components in `components/ui/form.tsx`

**Note**: Forms are not actively used in current landing page but infrastructure exists for future features.

### State Management
**Problem**: Need for minimal client-side state in a primarily static landing page.

**Solution**: React hooks (useState, useEffect) for local component state only.

**Approach**:
- No global state management library required
- Local state for navigation scroll behavior, mobile menu toggle
- Server components handle data fetching (minimal currently)

## External Dependencies

### UI Component Libraries
- **Radix UI** - Headless, accessible component primitives
  - Multiple packages for different components (dialog, dropdown-menu, accordion, etc.)
  - Provides accessibility features and keyboard navigation out of the box
  - Unstyled components that integrate with Tailwind CSS

### Icons
- **Lucide React** - Icon library for UI elements
  - Tree-shakeable, only imports used icons
  - Consistent 24x24 stroke-based design
- **Tabler Icons React** - Additional icon set for feature sections

### Styling Dependencies
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant management for components
- **clsx** - Utility for constructing className strings conditionally
- **tailwind-merge** - Intelligent Tailwind class merging to avoid conflicts

### Date Handling
- **date-fns** - Date utility library (available but not actively used in landing page)

### Carousel
- **embla-carousel-react** - Carousel/slider component library (infrastructure present)

### Font Loading
- **next/font/google** - Optimized Google Fonts loading
  - Inter (sans-serif)
  - Crimson Text (serif)
- **geist** - Vercel's Geist font family

### Build Tools
- **TypeScript** - Type safety and developer experience
- **ESLint** - Code linting
- **Autoprefixer** - CSS vendor prefixing

### Deployment Platform
- **Vercel** - Hosting and deployment platform
  - Automatic deployments from Git
  - Edge network for global distribution
  - Built-in analytics and performance monitoring
  - Integration with v0.dev for design iterations

### Design Tool Integration
- **v0.dev** - AI-powered design tool
  - Automatic syncing between v0.dev and GitHub repository
  - Design iterations pushed directly to codebase
  - Component generation and iteration