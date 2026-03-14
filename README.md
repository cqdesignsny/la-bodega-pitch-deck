# The Bodega Creative Institute - Investment Pitch Deck

A world-class, 17-slide investment pitch deck for **The Bodega Creative Institute**, NYC's first all-ages creative arts academy built in the South Bronx.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** (utility-first styling, custom theme tokens)
- **Framer Motion** (scroll-triggered animations, hover interactions, animated counters)
- **Self-contained images** (all 16 assets embedded as base64 data URIs)
- **Google Fonts** (Playfair Display, Outfit, DM Mono via next/font)

## Project Structure

```
src/
  app/
    layout.tsx           # Root layout, Google Fonts, metadata, favicon
    page.tsx             # Main page with all 17 slides (single-page app)
    globals.css          # Tailwind theme tokens, hover transitions, animations
  components/
    Slide.tsx            # Slide container, SlideTag, SectionTitle, SectionSub
    AnimatedSection.tsx  # FadeIn, StaggerGrid, StaggerItem, AnimatedCounter,
                         # AnimatedBar, TimelineDot
    ScrollProgressBar.tsx # Fixed scroll progress indicator
  lib/
    images.ts            # Base64-encoded image data (~890KB, all images self-contained)
public/
  favicon.svg            # La Bodega logo as favicon
```

## Slides

1. **Cover** - Logo, title, 501(c)(3) badge, MBE seal, background image with overlay
2. **The Vision** - Mission statement, 4 student photos (hover zoom), 4 pillar cards
3. **The Problem** - NYC arts education crisis, 6 animated stat counters
4. **The Foundation** - La Bodega NY facts grid + capabilities grid
5. **Some of Our Clients** - 10 client logos in white boxes (hover lift)
6. **The Solution** - 4 age track cards with red top borders
7. **Music Programs** - 8 program cards with SVG icons and tag pills
8. **Dance, Digital, and AI** - 8 cards with red outline borders (hover glow)
9. **Summer Intensive** - Program details + photo (hover zoom)
10. **Story of Music** - Cultural timeline with pulsing dots
11. **Already Giving Back** - 6 community impact cards with red left borders
12. **Year-Round Events** - 12 month calendar cards with full red borders (hover glow)
13. **Five Boroughs** - Borough grid + 3-phase roadmap
14. **Hybrid Revenue Model** - Animated revenue bars + access model + grant targets
15. **The Investment** - $1.2M ask + 5 use-of-funds cards (hover glow)
16. **The Team** - Leadership bios (Joseph, Frank, Advisory Board, CQ Marketing)
17. **Contact** - Contact info, badges, confidential notice

## Animations and Interactivity

- **Scroll progress bar** - Red gradient bar fixed at top of viewport
- **Fade-in on scroll** - All sections animate in with staggered children
- **Card hover effects** - Lift + red glow/shadow on all card types (CSS transitions)
- **Animated counters** - Stat numbers count up from 0 on scroll (Framer Motion spring)
- **Revenue bars** - Fill width animates on scroll entry
- **Timeline dots** - Pulse animation when era enters viewport
- **Image hover zoom** - Student photos and summer program image scale on hover
- **Client logo hover** - Subtle lift with shadow
- **Badge hover** - 501(c)(3) badge fills red on hover
- **Cover line pulse** - Continuous subtle glow animation

All hover effects use CSS transitions for 60fps performance on mobile and desktop.

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

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Red | `#c1272d` | Brand color, icons, accents, borders |
| Red Dark | `#9e1f24` | Gradients, hover states |
| Red Light | `#d94a4f` | Gradient endpoints |
| Black | `#0a0a0a` | Dark slide backgrounds |
| Dark3 | `#1a1a1a` | Dark card backgrounds |
| Off-white | `#f7f5f2` | Light slide backgrounds |
| White | `#ffffff` | Light card backgrounds, text on dark |

## Typography

| Font | Usage | Weights |
|------|-------|---------|
| Playfair Display | Headlines, display text | 400-900 |
| Outfit | Body text, UI | 300-800 |
| DM Mono | Labels, tags, metadata | 400-500 |

## Design Rules

- **Private funding is listed first** in revenue streams at 35% (top investor priority)
- **Calendar cards use full red border** (`border-2 border-red`) not one-sided
- **Dance/Digital/AI cards** have red outline borders (`border-2 border-red/20`)
- **"South Bronx"** used consistently (not "Mott Haven")
- **All timeline dots and labels are red** (no yellow)
- **No emojis** anywhere in the deck
- **No em dashes** - natural phrasing with "and"
- **Client logos shown in full color** on white backgrounds
- **All text 25%+ larger** than typical for phone readability
- **Fully responsive** - stacks properly on mobile, tablet, laptop, ultrawide
- **No horizontal scrolling** at any breakpoint (`overflow-x: hidden` on body)
- **Icons are red** (#c1272d), 56px container, 30px icon, centered on mobile
- **Language is human and emotional** - not robotic or AI-sounding

## Source Materials

The `files/` directory in the parent folder contains:
- `bodega-creative-institute-context.md` - Complete brand guide, content, design rules, slide structure
- `pitch-deck-current.html` - Original HTML version (pre-rebuild reference)

The parent folder also contains all original image files (`.webp`, `.svg`) used to generate the base64 data.

## Client

- **La Bodega NY** - 696 E 135th St, Bronx, NY 10454
- **Founders:** Joseph R. Guerrido and Frank Urban
- **Nonprofit arm:** La Bodega BX - 501(c)(3), MBE Certified
- **Built by** CQ Marketing (Digital Marketing and Technology Partner)
- **Repo:** github.com/cqdesignsny/la-bodega-pitch-deck
