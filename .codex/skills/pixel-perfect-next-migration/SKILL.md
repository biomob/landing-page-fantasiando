---
name: pixel-perfect-next-migration
description: Use when migrating an existing HTML storefront or design-system UI to Next.js and Tailwind while visual, responsive, and interactive parity must be measured before each component or section can be completed.
---

# Pixel-perfect Next migration

## Purpose

Migrate the active Annape HTML storefront to a production-quality Next.js + TypeScript + Tailwind application without changing the approved experience. The reference implementation is the source of truth; the agent runs the comparison, remediation, and validation loop autonomously.

Use this skill for work derived from `ui_kits/website/`, `components/`, `tokens/`, `styles.css`, and `assets/`. Treat `legacy-next/` only as historical code: audit it for useful infrastructure, but do not use it as the visual reference.

## Non-negotiable completion gate

A unit of work is a component, card, header state, section, or page. A unit may advance only when every applicable category is at least **95.0%** for every required viewport and state. The overall score is the lowest category score, never an average.

Do not replace a failed measurement with visual judgement, an aggregate score, a waiver, or a promise to fix it later. If a font, asset, source state, or deterministic browser capture is unavailable, mark the unit **BLOCKED** and do not start the next unit.

## Workflow

1. **Freeze the reference.** Identify the exact HTML/React source, CSS, assets, data, viewports, interaction states, and animations. Use the same browser engine, device-pixel ratio, locale, theme, reduced-motion preference, seeded data, and font files for source and target. Wait for fonts and images before every capture.
2. **Create the Next.js unit.** Implement typed React components and Tailwind classes. Configure Tailwind from the existing tokens before approximating values. Reuse the actual image, logo, icon, and font asset. Put component-specific CSS in a co-located CSS Module only when Tailwind cannot express it faithfully; do not use inline-style sprawl or a generic icon substitute when the source asset exists.
3. **Expose a deterministic fixture.** Render the unit in isolation with a fixed route, props, state, and data. Make responsive and interactive states directly reproducible.
4. **Capture equivalent evidence.** Automate browser screenshots, DOM bounding boxes, computed styles, font-load status, interaction traces, and animation frames for source and target. Save source image, target image, diff/heatmap, and machine-readable measurements.
5. **Score every category.** Apply the protocol in [references/parity-protocol.md](references/parity-protocol.md). Write one report row for every `unit x viewport x state x category`.
6. **Remediate the lowest failure.** Change only the owning token, class, asset, or component rule; rebuild; recapture the affected matrix; rescore. Repeat until all categories pass.
7. **Run regression validation.** After a passing local fix, rerun the whole unit matrix. Any shared-token change also reruns every previously passed dependent unit.
8. **Record and hand off.** Keep the parity report and evidence under `.visual-parity/`. State the pass score per category in the implementation handoff. Update the project note and daily `#FANTASIANDO` entry required by `AGENTS.md` after material code changes.

## Required category matrix

| Category | Must compare |
|---|---|
| Geometry and spacing | Dimensions, position, gaps, padding, margins, alignment, radius, borders, z-index, overflow |
| Color and effects | Backgrounds, text, borders, opacity, gradients, shadows, filters, focus states |
| Typography | Loaded font family/file, weight, size, line-height, letter spacing, wrapping, text position |
| Assets | Exact source file/SVG path, crop, fit, intrinsic ratio, rendering dimensions |
| Responsiveness | Every declared viewport, breakpoint transition, no clipping or unexpected reflow |
| Interaction and animation | Click/keyboard outcome, open/closed/hover/focus/active states, duration, delay, easing, frame positions |
| Pixel rendering | Screenshot-diff similarity after the category-specific checks above |

## Reference and target rules

- Start with the global design-token migration, then primitives, then navigation, cards, sections, and pages. Do not duplicate raw values that already have an approved token.
- Header work includes top bar, desktop and mobile variants, logo, navigation, action controls, drawers/menus, sticky behavior, and all reachable interaction states.
- Tailwind configuration must map the existing colors, fonts, spacing, radii, shadows, breakpoints, durations, and easing values. Maintain type-safe component contracts and accessible semantic controls.
- Run the Next production build and relevant automated interaction tests before marking a page complete. A visual pass cannot compensate for a broken build or interaction.
- Never proceed from a passing desktop state while the same unit fails on mobile, dark mode, a required state, or an animation frame.

## Evidence layout

```
.visual-parity/<unit>/
  manifest.json
  reports/<viewport>-<state>.json
  reference/<viewport>-<state>.png
  target/<viewport>-<state>.png
  diff/<viewport>-<state>.png
  traces/<viewport>-<state>.json
```

`manifest.json` names the source files, target route, browser version, DPR, viewport, theme, frozen data, fonts, states, and capture timestamp. Reports must state `PASS`, `FAIL`, or `BLOCKED`; a missing measurement is `BLOCKED`, never `0%` or an assumed pass.

## Red flags

- "The aggregate is above 95%." A single failed category blocks completion.
- "It looks close enough." Use automated evidence, not subjective scoring.
- "Desktop matches." Mobile, all declared states, and theme variants still need their own pass.
- "The icon is tiny" or "the CDN is flaky." Use the source asset and deterministic local fonts before measurement.
- "We will tune animation later." Animation below 95% blocks the unit.

## Example

For `Header / 390x844 / menu-open`, a report of `spacing 97.2, colors 99.4, typography 96.1, assets 100, responsiveness 94.6, interaction-animation 98.5, pixel-rendering 96.8` is **FAIL**. Correct the mobile responsive behavior, recapture that state, then rerun the entire Header matrix before beginning a card or page section.
