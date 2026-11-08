# Implementation Plan: Intersection-Observer Scroll-Triggered Animations

Implement smooth, accessible, performance-conscious scroll-triggered animations in the **Portfolio** and **Services** components with subtle upward fade-in reveals and full `'prefers-reduced-motion'` compliance.

---

## 1. Technical Architecture & Approach

### Custom Hook: `useScrollReveal` (`src/hooks/useScrollReveal.ts`)
- Utilizes the native browser **`IntersectionObserver`** API with a subtle threshold (`threshold: 0.15` and bottom margin offset `rootMargin: '0px 0px -40px 0px'`).
- Detects the user's OS / browser motion accessibility setting via `window.matchMedia('(prefers-reduced-motion: reduce)')` dynamically.
- Tracks visibility per element or grid container:
  - Once an element enters the viewport, it triggers the visible state and immediately **unobserves** to prevent unnecessary CPU cycles (fulfilling the "Animate once" choice).
  - If `prefers-reduced-motion` is active, elements render instantly at full opacity with zero translation or transition delays.

### Animation Styling
- **Initial state**: `opacity: 0`, `transform: translateY(24px)`
- **Visible state**: `opacity: 1`, `transform: translateY(0)`
- **Transition**: `cubic-bezier(0.16, 1, 0.3, 1)` over 600ms
- **Stagger delay**: `transition-delay: ${index * 80}ms` (smoothly cascading cards across the grid)

---

## 2. Proposed Changes

### 1. New Hook: `src/hooks/useScrollReveal.ts`
- Provides ref-binding functions and reactive visibility state.
- Gracefully handles server-side / test environments without crashing when `IntersectionObserver` or `window.matchMedia` is absent.

### 2. Update `src/components/Services.tsx`
- Attach scroll observation to the 8 services cards.
- Add staggered index calculation (`delay = (index % 4) * 80ms` for multi-column symmetry).
- Apply smooth fade-in and subtle upward slide as the services grid scrolls into view.

### 3. Update `src/components/Portfolio.tsx`
- Attach scroll observation to the project showcase cards.
- Ensure animations gracefully handle category tab switches (resetting or seamlessly displaying filtered project cards).

### 4. Tests & Verification
- Add automated unit tests in `src/utils/validation.test.ts` or dedicated hook tests.
- Re-run `npm test`, `npm run lint`, and `compile_applet`.
- Update project ZIP package (`zexuna-project.zip` and `/public/zexuna-project.zip`).

---

## 3. Verification & Acceptance Criteria
- [ ] Cards in both Services and Portfolio smoothly fade in and translate upward by ~24px as they scroll into view.
- [ ] Each card animates once on first view and remains stable.
- [ ] When `prefers-reduced-motion: reduce` is enabled, all cards appear immediately with no motion.
- [ ] Zero layout shift or horizontal overflow.
- [ ] Production build (`npm run build`) and TypeScript lint checks pass without errors.
