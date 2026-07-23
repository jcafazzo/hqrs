# Contemporary module library: rights and publication matrix

Build date: 19 July 2026
Use context: Queen's University graduate teaching, private rehearsal, GitHub Pages review, and reuse in other noncommercial presentations

This is an editorial rights-control document, not legal advice. A classroom exception or fair-dealing analysis does not automatically authorize unrestricted public-web or commercial republication. When a licence is not explicit, keep attribution, use only what is necessary for teaching, link to the primary source, and recheck before wider publication.

## Publication lanes

| Lane | Meaning | Permitted default |
|---|---|---|
| A | Explicit open licence or original course asset | Classroom, public review, and noncommercial presentation with the stated credit and licence conditions. |
| B | Official source artifact without an explicit open-reuse licence recorded here | Classroom use and limited public academic review with direct attribution. Recheck or seek permission before commercial, promotional, or broad republication. |
| C | Original Image 2 teaching image | Classroom, public review, and reuse in presentations, subject to applicable OpenAI service terms. Must remain labelled as generated and not evidence. |
| D | Institutional brand asset | Queen's course and affiliated academic presentation use only. Not offered as a general reusable design asset. |
| HOLD | Rights, provenance, or inspection incomplete | Do not publish the affected asset until resolved. |

## Original Image 2 asset registry

All generated assets have the same truth status: **original generated teaching image, hypothetical, not case or study evidence**. They must not contain readable patient records, vendor brands, fabricated metrics, or claims embedded in the bitmap. Exact prompts and crop intentions live in `VISUAL-ASSET-PLAN.md`.

| Module | Asset | Intended slide job | Lane | Publication condition |
|---|---|---|---|---|
| Pulse oximetry | `assets/generated/pulse-measurement-system.png` | Device and measurement observation | C | Keep generated label. Do not imply a specific device or patient. |
| Pulse oximetry | `assets/generated/pulse-home-context.png` | Use and interpretation at home | C | Keep hypothetical label and remove any accidental readable display value. |
| Pulse oximetry | `assets/generated/pulse-use-conditions.png` | Conditions affecting measurement | C | No diagnostic claim or branded device. |
| Corridor care | `assets/generated/corridor-whole-system.png` | Whole temporary-care environment | C | Keep hypothetical label. Do not imply HSSIB case photography. |
| Corridor care | `assets/generated/corridor-handoff.png` | Ownership and handoff under temporary conditions | C | No identifiable patient or readable chart. |
| Corridor care | `assets/generated/corridor-operations-huddle.png` | Immediate mitigation and upstream flow | C | Do not depict crisis theatre or claim a validated intervention. |
| Fatigue | `assets/generated/fatigue-0430.png` | Ordinary night work under circadian pressure | C | No sleeping, intoxication symbolism, or error event. |
| Fatigue | `assets/generated/fatigue-protected-handoff.png` | Handoff and coverage as controls | C | Keep as a design proposal, not an observed study intervention. |
| Fatigue | `assets/generated/fatigue-handoff-object.png` | Work transfer and unfinished tasks | C | No readable patient names or records. |
| ADC frameshift | `assets/generated/adc-cabinet-observation.png` | Cabinet and discrepancy detection | C | Do not imply actual case photography or a named vendor. |
| ADC frameshift | `assets/generated/adc-discrepancy-detection.png` | Frontline detection | C | No wrong-drug administration or patient outcome. |
| ADC frameshift | `assets/generated/adc-team-containment.png` | Coordinated containment and recovery | C | No readable medication or production screen. |
| Doloral | `assets/generated/doloral-object-study.png` | Generic medication object and numeric adjacency | C | Do not include the real product name, dose, or a realistic label. |
| Doloral | `assets/generated/doloral-workstation.png` | Meaning assembled across work surfaces | C | No fabricated production interface or patient record. |
| Doloral | `assets/generated/doloral-source-change-ripple.png` | Upstream rename propagating through the system | C | Keep exact product claims in native HTML, not in the image. |
| Parkinson's medication | `assets/generated/parkinsons-time-dose.png` | Time-specific self-management | C | Avoid frailty stereotype and missed-dose implication. |
| Parkinson's medication | `assets/generated/parkinsons-continuity-handoff.png` | Patient and family expertise in transfer | C | No identifiable patient, readable chart, or claim of case reconstruction. |
| Parkinson's medication | `assets/generated/parkinsons-paper-epma-boundary.png` | Paper and electronic record split | C | Do not mimic a real production ePMA interface. |
| Sepsis AI | `assets/generated/sepsis-four-systems.png` | One product family in four local systems | C | Hypothetical settings, not the four study sites. |
| Sepsis AI | `assets/generated/sepsis-data-work.png` | Site-specific data and fine-tuning work | C | No patient data, metric, alert, or real study documentation. |
| Sepsis AI | `assets/generated/sepsis-local-validation.png` | Threshold, routing, and workflow decisions | C | Design prompt only. Do not imply the study sites used the pictured process. |
| ePMA | `assets/generated/epma-same-product-two-hospitals.png` | Local configuration contrast | C | Hypothetical settings. No vendor ranking or safety verdict. |
| ePMA | `assets/generated/epma-fictional-patient-test.png` | Scenario-response testing | C | Not an ePRaSE interface or published study figure. |
| ePMA | `assets/generated/epma-procurement-dossier.png` | Safety case and procurement scrutiny | C | No real contract, hazard log, or named manufacturer. |
| ePMA | `assets/generated/epma-safety-review.png` | Multidisciplinary change review | C | Design proposal, not a documented HSSIB intervention. |

**Release condition for every Lane C asset:** record Image 2 model path, creation date, prompt, intended crop, alt text, full-size inspection, and any rejection or regeneration decision. A filename alone is not provenance.

## Source-artifact registry

| Asset or source family | Owner and source | Licence or basis recorded | Lane | Required treatment |
|---|---|---|---|---|
| `esm-v2-figure-1-performance.jpg` | Wong et al., *JAMA Network Open*, 2026 | CC BY | A | Credit authors, journal, year, figure, and CC BY. Whole-figure projection is used here. If cropped or annotated later, state the modification. |
| `esm-v2-figure-2-v1-comparison.jpg` | Wong et al., *JAMA Network Open*, 2026 | CC BY | A | Same conditions as Figure 1. Do not imply clinical outcome benefit. |
| HSSIB temporary-care photographs and adaptations | HSSIB, *Patient care in temporary care environments*, 2026 | Official report; no open licence recorded in this repository | B | Classroom and limited public academic review with report title, date, figure, and direct URL. Recheck before commercial use. Never imply the photograph proves a causal outcome. |
| `hssib-fatigue-reporting-behaviour.png` | HSSIB, adapted from Shorrock, 2025 report | Official report; no open licence recorded here | B | Keep whole or use only under a documented exception. It concerns reporting behaviour, not a causal model of fatigue harm. |
| `adc-figure-1-frameshift.jpg` and `adc-figure-2-deployment.jpg` | ISMP Canada Safety Bulletin, 2025 | Official bulletin; no open licence recorded here | B | Preserve bulletin, issue, date, figure, and direct URL. Figure 1 is a simplified explanatory diagram. Do not call it a production screenshot. |
| `doloral-figure-1-drug-system-display.jpg` and `doloral-figure-2-health-canada-display.jpg` | ISMP Canada Safety Bulletin, 2025 | Official bulletin; no open licence recorded here | B | Preserve source and the statement that Figure 1 is a re-creation. Do not imply an authentic local screen capture. |
| Health Canada DOLORAL product records | Government of Canada | Crown copyright and public information; no open licence recorded here | B | Prefer linking or a necessary classroom excerpt. Preserve date checked, DIN, strength, and status. Do not imply recall or withdrawal. |
| FDA draft-guidance page captures | US Food and Drug Administration | US federal-government source; verify third-party content before reuse | A for federal text, otherwise HOLD | Keep draft and non-binding labels. Link to the current guidance page. Do not imply final requirements. |
| Health Canada pulse-oximetry guidance capture | Government of Canada | Crown copyright and public information; no open licence recorded here | B | Use only the necessary excerpt with page title, date, and link. Preserve qualifiers. |
| HSSIB Parkinson's executive-summary and care-model extracts | HSSIB, 2024 report | Official report; no open licence recorded here | B | Keep report title, date, figure or page context, and direct link. Preserve reconstruction uncertainty. |
| `hssib-epma-roadmap.png` | HSSIB, ePMA report, 2026, Figure 2 | Official report; no open licence recorded here | B | Project whole, no content alteration, with visible attribution and link. Recheck before commercial republication. |
| `hssib-epma-control-map.png` | HSSIB, ePMA report, 2026, Figure 3 | Official report; no open licence recorded here | B | Project whole, no content alteration, with visible attribution and link. Do not claim recommendations are implemented. |
| ePRaSE article figures, if added later | Klein et al., *Scientific Reports*, 2025 | CC BY-NC-ND 4.0 | A only for whole unmodified noncommercial reproduction | No crop, recolour, annotation, rearrangement, or adapted derivative. This build deliberately uses an independent native HTML summary instead of an article figure. |
| RCEM QIP report tables or figures, if added later | Royal College of Emergency Medicine, 2026 | No open licence recorded here | B | Prefer native factual summary and direct link. If a figure is essential, use the minimum necessary with full attribution and recheck rights. |
| CIHI ED data display | Canadian Institute for Health Information | Data-use terms must be checked for public republication | B | Use a native factual summary with direct link. Do not imply CIHI measured corridor placement. |

## Institutional and interface assets

| Asset | Lane | Boundary |
|---|---|---|
| `../assets/brand/queens-emblem-right-v3.png` | D | Queen's-affiliated course and academic presentation use. Do not package as an independent brand resource. |
| Shared HTML, CSS, and JavaScript module system | A | Original project code. Reusable with source attribution as appropriate. No private lecture file is required at presentation time. |
| Native charts, pathways, numbers, and evidence plates | A | Original arrangement of sourced facts. The underlying facts remain cited. Native display does not grant rights to reproduce a source's protected figure. |

## Public-route rules

1. Keep every source link live on the audience-facing slide that carries a case fact, number, quotation, or artifact.
2. Keep generated-image truth labels visible. Do not remove them when exporting a slide image.
3. Do not reproduce ePRaSE article figures in cropped or adapted form under its NoDerivatives licence.
4. Do not assume Canadian classroom fair dealing settles unrestricted GitHub Pages publication. Use source artifacts only where necessary for criticism, review, or instruction, with attribution and an amount proportionate to that purpose.
5. Do not use de-identified incident cases to infer a hospital, clinician, vendor, patient identity, or hidden clinical detail.
6. Before commercial reuse, remove Lane B artifacts or obtain permission.

## Release checklist

- [x] Every generated image has a prompt and inspection record.
- [x] Every source artifact has visible attribution on the slide.
- [x] Every open-licence condition is satisfied.
- [x] Every Lane B artifact has a documented teaching purpose and proportionate use.
- [x] No generated image is positioned as evidence.
- [x] No public slide reproduces an adapted CC BY-NC-ND source figure.
- [x] Queen's branding remains in the intended institutional context.
- [x] Commercial reuse boundary is explicit in presenter handoff.

Checklist closed 19 July 2026. See `ACCEPTANCE-REPORT.md` for the release verdict and retained publication limits.
