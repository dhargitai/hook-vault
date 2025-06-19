# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hook Vault is a Next.js 15+ application designed as a content creation toolkit for finding proven hooks and CTAs for video content. The app features a public-facing showcase of hooks and CTAs with filtering capabilities, built on a modern React stack.

## Core Architecture

**Tech Stack:**
- **Frontend:** Next.js 15+ with App Router, React 18, TypeScript
- **Styling:** Tailwind CSS 4.x, Headless UI components
- **Build:** Bun package manager, Next.js build pipeline
- **Deployment:** Next.js static export with sitemap generation

**Key Directories:**
- `/app` - Next.js App Router structure with page-based routing
- `/components` - Reusable UI components (Headless UI + custom styling)
- `/components/swipe/` - Hook/CTA display components
- `/public/hooks/` - Hook visual assets (SVG files)
- `/public/ctas/` - CTA visual assets (SVG files)

## Development Commands

**Local Development:**
```bash
# Start development server
bun dev

# Build for production (static export)
bun build

# Lint code
bun lint

# Generate sitemap after build
bun postbuild

# Start production server
bun start
```

## Environment Setup

**Required:**
- Node.js 18+ or Bun runtime
- No external API keys required for basic functionality

## Routing Structure

**Public Routes:**
- `/` → Redirects to `/hooks`
- `/hooks` - Hook showcase with filtering and pagination
- `/cta` - CTA frameworks showcase
- `/title-optimizer` - Title optimization tool

## Data Architecture

**Hook Data Structure:**
- Stored in `/hooksData.js` - Array of hook objects
- Each hook contains: hook text, framework_tags, psychological_triggers, ideal_video_types, best_for_audience_stages, customization_note, quick_tips
- Visual assets in `/public/hooks/hook0000X.svg`

**CTA Data Structure:**
- Stored in `/ctaData.js` - Array of CTA objects
- Each CTA contains: cta text, trigger_types, ideal_placements, audience_stages
- Visual assets in `/public/ctas/cta0000X.svg`

**Type Definitions:**
- `/types/index.ts` - TypeScript interfaces for Hook and Cta data structures

## Component Architecture

**UI System:**
- Headless UI components in `/components/` (Button, Input, Modal, etc.)
- Responsive layout with stacked navigation pattern
- Mobile-first design with collapsible sidebar
- Custom styling with Tailwind CSS utility classes

**Layout Components:**
- `StackedLayout` - Main layout wrapper with responsive navigation
- `Navbar` - Top navigation bar with mobile menu
- `Sidebar` - Collapsible sidebar navigation
- `LayoutClient` - Client-side providers (Toaster, Tooltip, ProgressBar)

**Feature Components:**
- `SwipeCard` - Card component for displaying hooks/CTAs with swipe-like interaction
- `Filters` - Search and filter interface for hooks/CTAs
- `Pagination` - Pagination controls for large datasets
- `HooksCheatsheet` - Reference guide component

**Data Display Pattern:**
- Data loaded from JS modules (hooksData.js, ctaData.js)
- Client-side filtering with search and multi-category filters
- Pagination with 4 items per page
- Visual assets mapped by ID pattern

## Content Management

**Hook Categories:**
- Psychological triggers: Curiosity, Fear of Loss, FOMO, Authority, etc.
- Video types: Tutorial, Educational, Ad, Challenge, Vlog, etc.
- Audience stages: Cold, Warm, Hot

**CTA Frameworks:**
- Trigger types: Reciprocity, Community, Action, Value, etc.
- Ideal placements: End of video, description, comment pin, overlay
- Audience targeting by engagement stage