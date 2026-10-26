# Next Storefront Foundation and Header Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create the production Next.js storefront foundation and migrate the active HTML TopBar/Header with measurable visual parity.

**Architecture:** Create a clean App Router application in `next-storefront/`; keep the standalone HTML intact as the visual reference. Tailwind receives the approved Annapê tokens, while a small client-side shell owns only interactive Header state. Browser captures and JSON reports are written under `.visual-parity/header/`.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, ESLint, Vitest, Playwright screenshot/interaction tests.

---

### Task 1: Bootstrap the isolated Next.js storefront

**Files:**
- Create: `next-storefront/package.json`
- Create: `next-storefront/tsconfig.json`
- Create: `next-storefront/next.config.ts`
- Create: `next-storefront/postcss.config.mjs`
- Create: `next-storefront/app/layout.tsx`
- Create: `next-storefront/app/page.tsx`
- Create: `next-storefront/app/globals.css`
- Create: `next-storefront/public/assets/` (copied source assets)

- [ ] **Step 1: Write the failing app smoke test**

Create `next-storefront/tests/home.spec.ts` asserting the root page exposes the landmark text `Annapê Ateliê` and a `banner` landmark.

- [ ] **Step 2: Run the smoke test and confirm it fails because no app exists**

Run: `pnpm --dir next-storefront test`

Expected: a missing package/project failure.

- [ ] **Step 3: Create the App Router project with TypeScript, Tailwind and lint scripts**

Use the official `create-next-app` defaults, then set package scripts for `dev`, `build`, `lint`, `test`, and `test:e2e`. Copy the existing `assets/` directory into `next-storefront/public/assets/` without altering source assets.

- [ ] **Step 4: Implement the smallest root page that renders the target Header fixture**

Use this shell shape:

```tsx
export default function HomePage() {
  return <main><HeaderFixture /></main>;
}
```

- [ ] **Step 5: Run the smoke test and production build**

Run: `pnpm test && pnpm build`

Expected: all tests pass and Next build exits 0.

### Task 2: Port global Annapê design tokens to Tailwind

**Files:**
- Create: `next-storefront/tailwind.config.ts`
- Modify: `next-storefront/app/globals.css`
- Test: `next-storefront/tests/tokens.test.ts`

- [ ] **Step 1: Write failing token assertions**

Assert that the compiled token source contains the source values `#F598A4`, `#C38A67`, `#FCF8F5`, `Fredoka`, `Nunito`, `1320px`, `38px`, `140ms`, `220ms`, and `420ms`.

- [ ] **Step 2: Run the token test and confirm it fails**

Run: `pnpm test -- tokens.test.ts`

Expected: source values are absent.

- [ ] **Step 3: Configure Tailwind and globals from the reference tokens**

Map colors, font families, spacing, radii, shadows, durations, easings and breakpoints using semantic names. Use `next/font/google` for Fredoka and Nunito; keep CSS variables for values that are consumed by diff fixtures.

- [ ] **Step 4: Rerun token test, lint and type validation**

Run: `pnpm test -- tokens.test.ts && pnpm lint && pnpm build`

Expected: all commands exit 0.

### Task 3: Port TopBar and Header behavior with typed contracts

**Files:**
- Create: `next-storefront/components/storefront/icon.tsx`
- Create: `next-storefront/components/storefront/top-bar.tsx`
- Create: `next-storefront/components/storefront/header.tsx`
- Create: `next-storefront/components/storefront/header-fixture.tsx`
- Test: `next-storefront/tests/header.test.tsx`

- [ ] **Step 1: Write failing interaction tests**

Test that the desktop navigation exposes all five reference labels, the menu control appears at mobile width, clicking it opens the navigation, the theme control changes the `data-theme` value, and cart/account/try-on callbacks receive `cart`, `account`, and `tryon`.

- [ ] **Step 2: Run focused tests and confirm they fail**

Run: `pnpm test -- header.test.tsx`

Expected: Header exports are unavailable.

- [ ] **Step 3: Implement reference-equivalent controls**

Use semantic links/buttons, identical source icon paths, `logo-cor.png`, the original nav labels and Tailwind token utilities. Preserve desktop header geometry, mobile actions, active/hover states, top-bar rotation and reduced-motion behavior. The fixture must support deterministic `desktop`, `mobile-menu-open`, `dark`, and `sticky` query states.

- [ ] **Step 4: Run component tests**

Run: `pnpm test -- header.test.tsx`

Expected: all tests pass.

### Task 4: Capture, score, remediate and gate Header parity

**Files:**
- Create: `next-storefront/tests/header.visual.spec.ts`
- Create: `.visual-parity/header/manifest.json`
- Create: `.visual-parity/header/reports/*.json`
- Create: `.visual-parity/header/reference/*.png`
- Create: `.visual-parity/header/target/*.png`
- Create: `.visual-parity/header/diff/*.png`

- [ ] **Step 1: Write the failing visual-matrix test**

Parameterize source and target captures at `1440x900`, `1280x800`, `768x1024`, and `390x844`, covering light/dark and desktop/default/mobile-menu-open states. Require the report's minimum category score to be at least 95.0.

- [ ] **Step 2: Run the matrix and record the initial failure**

Run: `pnpm test:e2e -- header.visual.spec.ts`

Expected: target or threshold is initially missing/failing; retain the produced artifacts.

- [ ] **Step 3: Remediate the lowest-scoring category only**

Use source/target screenshots, bounding boxes, computed styles, font status and interaction traces. Adjust the smallest owning token or Header rule, then regenerate the affected capture.

- [ ] **Step 4: Run the complete Header matrix, quality gates and build**

Run: `pnpm test && pnpm test:e2e -- header.visual.spec.ts && pnpm lint && pnpm build`

Expected: every required report row is `PASS`, each category is `>=95.0`, no console or accessibility failure is present, and all commands exit 0.

### Task 5: Record the phase result

**Files:**
- Modify: `README.md`
- Modify: Obsidian project QA note and daily `#FANTASIANDO` entry

- [ ] **Step 1: Document the runnable Next storefront and Header gate**

Add the install/run commands, visual reference path, fixture route and Header report location. Do not claim completion for cards or pages.

- [ ] **Step 2: Capture repository state without committing**

Run: `git status --short`

Expected: list all new/modified files so the user can decide on a commit.

## Self-review

- Scope is limited to a new Next foundation, global tokens, and Header/TopBar; catalog, pages, backend integration and checkout remain explicitly out of this phase.
- Each new behavior has a failing test before implementation, then focused and full-suite verification.
- The visual gate evaluates every category by viewport/state and uses the minimum score, so no average can hide a mismatch.
