# This Moment Studio — PRD

## Problem Statement
Build a premium 3D website for thismoment.studio — a creative event and entertainment studio. Dark cinematic studio atmosphere, elegant nightlife energy, gold-on-black luxury branding. Feels like walking into a private live show. Homepage sections: Hero (3D stage), Experience (scroll scenes), Services, Gallery, Shows, Booking (lead form), Footer. Mobile responsive, fast loading, editable content.

## User Personas
- **Event Organizer / Brand**: books private shows, brand nights, activations.
- **Couples / Hosts**: weddings, birthdays, intimate dinners.
- **Talent Buyers / Venue Owners**: promotional support, event hosting.

## Core Requirements (Static)
- Cinematic dark hero with 3D stage, moving lights, floating gold orbs, sparkles.
- Multi-scene Experience section with image tiles + copy.
- Services grid (5 cards).
- Bento gallery with 8 curated stock images.
- Upcoming Shows list.
- Booking lead form → MongoDB `bookings` collection.
- Footer with contact, social, giant wordmark.
- Fully mobile responsive.
- Editable branding via `/app/frontend/src/config/site.js`.
- SEO title + description in `App.js` and `index.html`.

## Implemented (Dec 2025)
- Backend: FastAPI `POST /api/bookings` (create) + `GET /api/bookings` (list). Booking model uses UUID id + ISO datetime storage.
- Frontend: React 19 + CRA + Tailwind + Shadcn Sonner toasts.
- 3D: @react-three/fiber v9 + drei v9 + three.js. HeroStage3D (spotlights, orbs, sparkles, camera sway), SceneAtmosphere (ambient ring + halo behind sections).
- Sections: Navigation, Hero, Experience (4 scenes), Services (5 cards), Gallery (bento grid, 8 images), Shows (3 upcoming rows), Booking (validated form + success state), Footer.
- Config-driven brand/contact/social via `src/config/site.js`.
- Cormorant Garamond (display) + Outfit (body) fonts.
- IntersectionObserver scroll reveal with 900ms safety fallback.

## Environment
- Backend: `/api/*` prefix, MongoDB via `MONGO_URL`, DB `test_database`.
- Frontend: `REACT_APP_BACKEND_URL`.

## Prioritized Backlog
### P0 — Not Started
- (none — MVP complete)

### P1
- Email notifications on new booking (Resend/SendGrid) — requires user API key.
- Simple admin route to view submitted bookings.
- Replace stock imagery with real client photography.
- Replace text logotype with official logo file when provided.

### P2
- Add Framer Motion page transitions & staggered card entrances.
- Add scroll-linked camera dolly in HeroStage3D.
- Lenis smooth-scroll integration.
- Add /portfolio, /shows detail pages.
- Analytics (Plausible / GA4).
- Newsletter opt-in in footer.
- Instagram feed embed.

## Deferred Decisions
- Email provider (Resend recommended). User didn't provide API key yet.
- Real logo asset.
- Actual upcoming show data.
