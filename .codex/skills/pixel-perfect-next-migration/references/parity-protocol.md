# Parity scoring protocol

## Capture contract

Before scoring, make both implementations deterministic. Capture each declared state at the identical viewport, DPR, browser, zoom, locale, color scheme, animation clock, data fixture, and network/font condition. Store exact source/target URLs and wait for `document.fonts.ready` plus image completion.

Default viewport matrix for the storefront is 1440x900, 1280x800, 768x1024, and 390x844. Extend it whenever the source contains an additional breakpoint or a component has a different responsive boundary. Capture light and dark modes where the source supports both.

## Scores

All values are percentages in the closed interval 0-100 and are rounded to one decimal only after calculation. The scorer emits raw measurements as well as the score.

| Category | Measurement | Score |
|---|---|---|
| Geometry and spacing | Named-element bounding-box deltas plus computed layout values | 60% geometry similarity + 40% computed-value similarity |
| Color and effects | Computed colors/effects plus pixel-diff of painted regions | 70% computed-style similarity + 30% regional pixel similarity |
| Typography | Font-file/family verification, computed type values, wrap/line-box geometry, text-region diff | 35% font and computed style + 35% line-box/wrap + 30% pixel similarity |
| Assets | File/path identity, intrinsic ratio, crop/object-fit, rendered geometry | 100% only if source asset and rendering checks pass; otherwise score from checks but status remains fail below 95 |
| Responsiveness | Minimum geometry/overflow/order score across every viewport and breakpoint transition | Minimum observed viewport score |
| Interaction and animation | State outcomes, computed transition/keyframe values, and normalized frame geometry/pixels | 40% state outcome + 35% timing/easing + 25% frame similarity |
| Pixel rendering | Full screenshot similarity excluding only documented dynamic masks | Normalized pixel similarity |

For numeric values, use `similarity = max(0, 100 * (1 - abs(target-reference) / tolerance))`. Record the tolerance per property in the report; use source-token precision where possible and do not increase a tolerance merely to reach 95. Screenshot masks may exclude only non-visual nondeterminism (for example, a timestamp intentionally not present in the design) and must be documented in `manifest.json`.

## Gates

- A category passes only at `>= 95.0` for a specific viewport and state.
- A unit passes only when every category passes for every required viewport, theme, and state.
- Unit overall = the minimum category score over the complete matrix.
- A measurement is `BLOCKED` if its reference is unavailable or non-deterministic. It cannot be averaged with valid values.
- A Next build failure, console error, inaccessible interactive control, or failed route interaction blocks the unit independently of its visual scores.

## Remediation order

Fix the lowest score first. Prefer a correction at the smallest true owner: source asset -> token -> primitive -> component -> page composition. After each change, repeat only the affected evidence set until it passes, then rerun the full unit matrix. A token change requires regression captures for all already completed consumers of that token.

## Required report shape

```json
{
  "unit": "header",
  "viewport": { "width": 390, "height": 844, "dpr": 1 },
  "theme": "light",
  "state": "menu-open",
  "status": "FAIL",
  "categories": {
    "geometry-spacing": { "score": 97.2, "raw": {} },
    "color-effects": { "score": 99.4, "raw": {} },
    "typography": { "score": 96.1, "raw": {} },
    "assets": { "score": 100.0, "raw": {} },
    "responsiveness": { "score": 94.6, "raw": {} },
    "interaction-animation": { "score": 98.5, "raw": {} },
    "pixel-rendering": { "score": 96.8, "raw": {} }
  },
  "overall": 94.6,
  "nextAction": "Correct mobile navigation geometry and recapture the Header matrix."
}
```
