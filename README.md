# The Bodega Creative Institute - Investment Pitch Deck

A world-class, 17-slide investment pitch deck for **The Bodega Creative Institute**, NYC's first all-ages creative arts academy built in the South Bronx.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (utility-first styling)
- **Framer Motion** (scroll-triggered animations)
- **Self-contained images** (all assets embedded as base64 data URIs)

## Project Structure

```
src/
  app/
    layout.tsx      # Root layout with Google Fonts (Playfair Display, Outfit, DM Mono)
    page.tsx         # Main page with all 17 slides
    globals.css      # Tailwind config and global styles
  components/
    Slide.tsx        # Reusable slide container, tag, title, and subtitle components
    AnimatedSection.tsx  # Framer Motion scroll animation wrappers
  lib/
    images.ts        # Base64-encoded image data (all images self-contained)
```

## Slides

1. **Cover** - Logo, title, 501(c)(3) badge, MBE seal
2. **The Vision** - Mission statement, student photos, 4 pillars
3. **The Problem** - NYC arts education crisis (6 stat cards)
4. **The Foundation** - La Bodega NY facts and capabilities
5. **Some of Our Clients** - 10 client logos in white boxes
6. **The Solution** - Age track cards (5-12, 13-17, 18-24, 25+)
7. **Music Programs** - 8 program cards with icons and tags
8. **Dance, Digital, and AI** - 8 expanded program cards
9. **Summer Intensive** - Signature program details + photo
10. **Story of Music** - Cultural timeline (pre-1900s to future)
11. **Already Giving Back** - 6 community impact cards
12. **Year-Round Events** - 12 month calendar cards
13. **Five Boroughs** - Borough grid + 3-phase roadmap
14. **Hybrid Revenue Model** - Revenue streams + access model
15. **The Investment** - $1.2M ask + use-of-funds breakdown
16. **The Team** - Leadership bios
17. **Contact** - Contact info, badges, confidential notice

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Deployment

Deploy on Vercel:

```bash
npx vercel
```

Or connect the GitHub repo to Vercel for automatic deployments on push.

## Brand Colors

| Color | Hex |
|-------|-----|
| Primary Red | `#c1272d` |
| Black | `#0a0a0a` |
| Off-white | `#f7f5f2` |
| White | `#ffffff` |

## Design Decisions

- **Private funding is listed first** in revenue streams at 35% (top investor priority)
- **Calendar cards use full red border** (not one-sided)
- **"South Bronx"** used consistently (not "Mott Haven")
- **All timeline dots and labels are red** (no yellow)
- **No emojis** anywhere in the deck
- **No em dashes** - natural phrasing with "and"
- **Client logos shown in full color** on white backgrounds, no hover effects
- **All text 25%+ larger** than typical for phone readability
- **Fully responsive** - stacks properly on mobile, tablet, laptop, ultrawide

## Client

- **La Bodega NY** - 696 E 135th St, Bronx, NY 10454
- **Built by** CQ Marketing (Digital Marketing and Technology Partner)
