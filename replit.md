# Pastor Kyle Reynolds Website

## Overview

This is a personal ministry website for Pastor Kyle Reynolds, targeting college students and young adults. It features sermons (pulled from YouTube), blog/devotionals, a book promotion page, campus ministry information, and contact forms. The site is built as a full-stack TypeScript application with a React frontend and Express backend, backed by a PostgreSQL database.

**Pages:** Home, About, Sermons, Blog, Book, Campus Ministry, Contact

**Key Features:**
- YouTube API integration for sermon listings (auto-filtered to Kyle Reynolds' videos)
- Blog posts with category filtering (Devotional, Teaching, Campus)
- Contact form, campus ministry signup form, and newsletter subscription
- Responsive design with sticky navigation and mobile hamburger menu
- Modern pastoral design with blue/teal color palette

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side router)
- **State Management:** TanStack React Query for server state
- **UI Components:** shadcn/ui (new-york style) built on Radix UI primitives
- **Styling:** Tailwind CSS v4 with CSS variables for theming, custom fonts (Montserrat for headings, Lato for body)
- **Forms:** React Hook Form with Zod validation via @hookform/resolvers
- **Animations:** Framer Motion
- **Build Tool:** Vite with React plugin

**Path aliases:**
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

### Backend
- **Runtime:** Node.js with Express
- **Language:** TypeScript (executed via tsx)
- **API Pattern:** RESTful JSON API under `/api/*` prefix
- **Build:** esbuild for production server bundle (outputs to `dist/index.cjs`)

**API Endpoints:**
- `GET /api/sermons` — Fetches YouTube videos filtered to Kyle Reynolds (cached 1 hour)
- `GET /api/blog` — Returns blog posts from database
- `POST /api/contact` — Stores contact form submissions
- `POST /api/campus-signup` — Stores campus ministry signups
- `POST /api/newsletter` — Stores newsletter subscriptions

### Database
- **Database:** PostgreSQL (required, connection via `DATABASE_URL` env var)
- **ORM:** Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema location:** `shared/schema.ts`
- **Migrations:** Generated via `drizzle-kit` to `./migrations/` directory
- **Push command:** `npm run db:push`

**Tables:**
- `blog_posts` — id, title, date, category, excerpt, content
- `contact_submissions` — id, name, email, message, created_at
- `campus_signups` — id, name, email, interest, message, created_at
- `newsletter_subscriptions` — id, email (unique), created_at

### Storage Pattern
- Database access is abstracted through an `IStorage` interface in `server/storage.ts`
- `DatabaseStorage` class implements the interface using Drizzle ORM
- Singleton `storage` instance exported for use in routes

### Development vs Production
- **Development:** Vite dev server is used as middleware on the Express server (HMR enabled)
- **Production:** Client is pre-built to `dist/public/`, served as static files by Express; server bundled to `dist/index.cjs`

### Key Scripts
- `npm run dev` — Starts development server with Vite HMR
- `npm run build` — Builds both client (Vite) and server (esbuild)
- `npm start` — Runs production build
- `npm run db:push` — Pushes Drizzle schema to database

## External Dependencies

### Required Environment Variables
- `DATABASE_URL` — PostgreSQL connection string (required)
- `YOUTUBE_API_KEY` — Google YouTube Data API v3 key (required for sermons page)

### Third-Party Services
- **YouTube Data API v3** — Fetches sermon videos from channel `UCVWrFKtcGFvZk3imn85pxvg`, filtered by title containing "Kyle Reynolds"
- **Amazon** — External link for book purchase (Don't Quit)
- **Google Fonts** — Montserrat and Lato font families loaded via CDN

### Key npm Dependencies
- `express` — HTTP server
- `drizzle-orm` + `drizzle-kit` — Database ORM and migration tool
- `pg` — PostgreSQL client
- `zod` — Schema validation (shared between client and server)
- `@tanstack/react-query` — Client-side data fetching
- `wouter` — Client-side routing
- `framer-motion` — Animations
- `react-hook-form` — Form handling
- Full shadcn/ui component library (Radix UI primitives)