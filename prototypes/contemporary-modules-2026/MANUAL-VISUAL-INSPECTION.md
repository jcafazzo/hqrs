# Manual projection and visual inspection

Inspection date: 19 July 2026
Render canvas: 1600 by 900 inside a 1600 by 990 browser viewport
Evidence: individual PNG render of every slide, eight module contact sheets, and one 80-slide overview
Result: PASS after correction and fresh rerender

## Inspection method

1. Reviewed the 80-slide overview for library-level pacing, visual repetition, colour cadence, and text-heavy runs.
2. Reviewed every module contact sheet for argument rhythm, hard cuts, image ownership, artifact placement, and opening-to-close coherence.
3. Opened every generated-image slide at full 1600 by 900 render size.
4. Opened every source-artifact slide at full size.
5. Opened the densest explanatory and interaction slide in every module at full size.
6. Checked the newly generated PNG itself at its original 1672 by 941 size before accepting it.
7. Reran automated projection, deep-link, interaction, accessibility, and console checks after the final corrections.

## Required inspection matrix

| Module | Generated-image slides inspected | Source-artifact slides inspected | Densest slides inspected | Contact sheet | Verdict |
|---|---|---|---|---|---|
| Pulse oximetry | 01, 04, 06, 10 | 07, 09 | 03, 05, 08 | `../renders/contemporary-modules-2026/pulse-oximetry/contact-sheet.png` | PASS |
| Corridor care | 04, 09, 10 | 01, 07 | 03, 05, 08 | `../renders/contemporary-modules-2026/corridor-care/contact-sheet.png` | PASS |
| Fatigue | 01, 04, 09, 10 | 07 | 05, 06, 08 | `../renders/contemporary-modules-2026/fatigue/contact-sheet.png` | PASS |
| ADC frameshift | 01, 04, 07 | 03, 08 | 05, 06, 09 | `../renders/contemporary-modules-2026/adc-frameshift/contact-sheet.png` | PASS |
| Doloral | 02, 04, 06, 10 | 01, 05 | 03, 07, 09 | `../renders/contemporary-modules-2026/doloral/contact-sheet.png` | PASS |
| Parkinson's medication | 01, 05, 06 | 03, 07 | 04, 08, 09 | `../renders/contemporary-modules-2026/parkinsons-medication/contact-sheet.png` | PASS |
| Sepsis AI | 01, 03, 05 | 04, 08 | 02, 06, 09 | `../renders/contemporary-modules-2026/sepsis-ai/contact-sheet.png` | PASS |
| ePMA procurement | 01, 03, 06, 09 | 05, 07 | 02, 04, 10 | `../renders/contemporary-modules-2026/epma-procurement/contact-sheet.png` | PASS |

Library overview: `../renders/contemporary-modules-2026/overview.png`

## Corrections made during inspection

| Finding | Severity at discovery | Correction | Reinspection |
|---|---|---|---|
| Seven image slides placed copy over the visually active side instead of the generated negative space. | P2 | Reversed copy-side composition on pulse 10, corridor 10, fatigue 04 and 10, sepsis 03, and ePMA 03 and 09. | PASS at full size and in refreshed contact sheets. |
| Generated-image credits and section labels could compete near the lower edge. | P2 | Raised generated and artifact credits and adjusted the course brand position. | PASS across all image slides. |
| Sepsis Figure 1 was labelled projected whole but its lower PPV and NPV panels were clipped. | P1 | Constrained artifact images to an absolute, full-field contain box and rerendered. | PASS. All four panels are present and traceable. |
| ePMA HSSIB Figure 3 remained near native size and was too small for the stated observation. | P1 | Used the same full-field contain treatment to upscale the whole artifact inside the safe projection field. | PASS. Major actors, arrow routes, and labels are readable at 1600 by 900. |
| Three inherited course images lacked recoverable generation-call provenance. | P1 | Replaced them with new, visually matched Image 2 originals for pulse measurement, the whole corridor system, and ADC observation. | PASS at original size and on the final slides. |
| Initial Doloral object and propagation concepts were too abstract. | P2 | Rejected and regenerated them as a precise medication object study and a coherent physical downstream-format still life. | PASS. Rejections remain recorded in the asset ledger. |
| One initial fatigue handoff concept embedded an explanatory arrow. | P2 | Rejected it and regenerated an object-and-hands transfer scene with no explanatory mark. | PASS. Claim remains native HTML. |

## Projection findings

- Primary headlines remain at or above 60 px.
- Required teaching copy remains at or above 30 px.
- Labels, visible source rails, credits, and truth chips remain at or above 20 px.
- No required content clips or overflows the slide canvas.
- All source artifacts used for observation are dedicated full-slide fields rather than framed thumbnails.
- Each module uses at least three distinct original Image 2 assets and at least one authentic source artifact.
- No module contains more than three consecutive non-image slides.
- The complete library has a restrained image, evidence, diagram, interaction, and close cadence rather than repeated photographic wallpaper.
- Generated images retain natural clinical colour. Queen's Blue, Gold, and Red remain in the slide frame rather than tinting the photograph.

## Intentionally retained limits

- A source artifact can be inspected from the back of the room, but its smallest original labels may still require the presenter to direct attention rather than expect silent reading of every word.
- HSSIB and ISMP artifacts are included for teaching and review with attribution. Their public and commercial reuse limits remain governed by `RIGHTS-MATRIX.md`.
- The visual check is a 1600 by 900 simulation. A final room check should still be run on the actual projector because contrast and overscan vary by venue.

No unresolved P0, P1, or P2 visual defect remains in the release candidate.
