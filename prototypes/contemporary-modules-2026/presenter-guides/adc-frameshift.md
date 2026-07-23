# Presenter guide: ADC frameshift

Status: READY · library acceptance passed 19 July 2026
Entry point: `../adc-frameshift.html`
Target: 9 to 11 minutes, ten slides

## Audience contract and argument

**Contract:** Find where safety came from before deciding where the error lived.

**Argument:** The nurses were not weak links in this event. They were discrepancy detectors inside an under-defended deployment system.

The case moves from a point-of-use contradiction to data relationships, deployment, network propagation, frontline detection, containment and organized recovery. It ends with a design test that can transfer to medication systems, software releases and other high-risk changes.

## Run of show

| Slide | Target | Primary job | Presenter move | Transition |
|---|---:|---|---|---|
| 1 | 0:55 | Establish the cabinet's authority and the audience contract. | Ask students to notice the pause, not infer an error. | "Now look at what made that pause reasonable." |
| 2 | 1:00 | Make two published contradictions concrete. | Read each pairing slowly. Ask what relationship is broken. | "Those were symptoms. The source diagram shows the mechanism." |
| 3 | 1:00 | Let the authentic frameshift figure carry the explanation. | Hold ten seconds, then trace one row. | "The first effective alert did not come from the cabinet." |
| 4 | 0:55 | Recast frontline work as successful detection. | Emphasize "within minutes" without inventing a count. | "The contradiction was local. The propagation was not." |
| 5 | 1:00 | Reconstruct the supported event path. | Keep technical detail at the source-supported level. | "Before discussing controls, keep scale and harm separate." |
| 6 | 1:05 | Preserve denominators and outcome language. | Stress products are not patients and transactions are not administrations. | "The response became a clinical operation." |
| 7 | 1:05 | Show containment as coordinated safety work. | Name the combined response, not one heroic action. | "The source then asks us to design the deployment itself." |
| 8 | 1:00 | Introduce staged deployment controls through the source figure. | Ask where an enforced stop gate belongs. | "Let us make those controls operational." |
| 9 | 1:10 | Run the prevent, detect, recover exercise. | Give 45 seconds; collect two ten-second reports. | "Now return to the person who first interrupted the system." |
| 10 | 0:40 | Close with the systems principle. | Deliver the two-line close, then stop. | End. |

The default planned timing is approximately 9:50. Classroom discussion can extend slide 9 to twelve minutes total.

## Timing routes

| Route | Interaction | Delivery choice |
|---|---|---|
| 8 minutes | 20 seconds, one report | Park slide 08 and summarize staged deployment from the notes. Keep the mismatch, mechanism, denominator and no-harm boundary. |
| 10 minutes | 45 seconds, two ten-second reports | Use all ten slides and the run of show above. |
| 12 minutes | 90 seconds, one sentence from each table | Let all five tables report and test one control for a silent failure. |

## Structured interaction

Divide 44 to 45 learners into five tables of roughly nine.

1. Data and vendor controls
2. Hospital change control
3. Point-of-care design
4. Clinical operations during downtime
5. Emergency response and learning

Prompt:

> Propose one control that prevents, one that detects or contains, and one that recovers. Which control still depends on a person noticing something?

Expected strong responses include:

- an enforced atomic import;
- cross-field semantic validation, such as stopping a tablet paired with mL;
- a representative end-to-end test in a test environment;
- multidisciplinary approval before production;
- a usable abort or rollback route;
- visible anomaly design and stop-work authority;
- barcode or physical product verification where available;
- executable downtime procedures and pharmacy support;
- transaction monitoring, network-wide communication and post-event learning.

Listen for the hidden failure in every control. A test environment can use an unrepresentative data set. An approval gate can become ceremonial. An alert can be routinely bypassed. A downtime plan can exist but be inaccessible.

## Claim and source map

| Slide | Claim | Source | Boundary to say aloud when needed |
|---|---|---|---|
| 2 | Misoprostol tablets appeared as 30 mL unit-dose cups; selecting morphine 10 mg tablets opened a drawer containing morphine 2 mg ampoules. | ISMP Canada, 31 Jul 2025 | Published mismatch examples, not reported wrong administrations. |
| 3 | A partial import followed by a second import misaligned medication fields. | ISMP Canada Figure 1 | Simplified source diagram, not a production screenshot or technical forensic trace. |
| 4 | Nursing reports alerted pharmacy within minutes. | ISMP Canada | No exact number of minutes is public. |
| 5 | Corrupted data entered a live hospital-wide server connected to the ADC network, and the upload could not immediately be aborted. | ISMP Canada | Do not invent vendor, hospital, code path or more specific root cause. |
| 6 | More than 300 products and more than 150 transactions were affected; Code Grey took approximately six hours; no patient harm was reported. | ISMP Canada | Keep "more than," "approximately" and "reported." Transactions are not errors or administrations. |
| 7 | The response included halted inventory processes, pharmacy support, transaction monitoring, central dispensing, an emergency operations centre and Code Grey. | ISMP Canada | The effect of each action was not separately estimated. |
| 8 | ISMP Canada recommends staged readiness, testing, approval, downtime preparation, escalation and learning. | ISMP Canada Figure 2 | Recommendation is not proof of later implementation. |
| 9 | Proposed controls | Classroom design inference | Label as proposals, not findings about the anonymous organization. |

Primary source: [ISMP Canada bulletin](https://ismpcanada.ca/bulletin/automated-dispensing-cabinets/)

Adjacent guidance: [ISMP Guidelines for the Safe Use of Automated Dispensing Cabinets](https://www.ismp.org/system/files/resources/2019-11/ISMP170-ADC%20Guideline-020719_final.pdf)

## Caveats and forbidden shortcuts

- Do not say hundreds of patients received a wrong drug.
- Do not say exactly 300 products, 150 transactions or six hours.
- Do not call this a cyberattack, AI failure or general proof that ADCs are unsafe.
- Do not identify or imply a hospital, network, vendor or employee.
- Do not claim a wrong product reached a patient.
- Do not stop at protocol deviation. The official recommendations span vendor, hospital and joint responsibilities.
- Do not claim that any one emergency action independently prevented harm.
- Keep the authentic source figure separate from generated explanatory images.

## Visual asset ledger and prompt record

All generated assets use the built-in Image 2 path and are labelled on-slide as hypothetical, not case evidence. Intended creation date for the new library assets is 19 July 2026.

| Asset | Slide | Intended crop | Truth and publication boundary | Prompt record |
|---|---:|---|---|---|
| `assets/generated/adc-cabinet-observation.png` | 1 | Full-bleed 16:9, people and cabinet right, copy left | Original editorial teaching image. Not the affected cabinet, nurse, pharmacist or organization. | Image 2, 19 July 2026. Ordinary hospital medication room, nurse pauses at an automated dispensing cabinet after detecting a mismatch while a pharmacist approaches to cross-check, coherent drawers and hands, calm fluorescent light, negative space left, no readable medicine, screen or patient data, no vendor brand, alarm, wrong administration, accusation or crisis. |
| `assets/generated/adc-discrepancy-detection.png` | 4 | Full-bleed 16:9, medication drawer right, copy left | Hypothetical teaching scene. It may illustrate the point-of-use pause but cannot evidence the event. Full-size inspection accepted coherent hand, drawer and containers; the image does not display the published mismatch or a readable ADC interface. | Photorealistic documentary healthcare scene, nurse cross-checking a cabinet selection against the physical medication after noticing a form or quantity contradiction, posture attentive and calm, believable automated dispensing cabinet, natural institutional light, clinician and equipment on left with negative space right, no readable drug names, patient data, logos, wrong administration, accusation, spectacle or alarm lighting. |
| `assets/generated/adc-team-containment.png` | 7 | Full-bleed 16:9, team right, copy left | Hypothetical composite. It illustrates coordinated medication operations but is not case photography. Full-size inspection accepted the team and work setting; the output does not show a cabinet or test laptop and must not be narrated as doing so. | Photorealistic natural documentary scene, nurse, pharmacist and medication informatics specialist reviewing an open automated dispensing cabinet and separate test laptop together, screens and labels indistinct, active cross-checking, ordinary pharmacy-unit light, believable equipment, team on right with generous negative space left, no vendor branding, readable drugs, patient data, accusation, celebration or crisis lighting. |
| `../assets/source-images/museum/adc-figure-1-frameshift.jpg` | 3 | Contain at maximum readable size | Authentic ISMP Canada simplified explanatory figure. Preserve title, attribution and link. | Not generated. |
| `../assets/source-images/museum/adc-figure-2-deployment.jpg` | 8 | Contain at maximum readable size | Authentic ISMP Canada deployment figure. Recommendation figure, not proof of implementation. | Not generated. |

## Reuse rules

**Can be shortened:** For a six-minute version, use slides 1, 2, 3, 4, 6, 9 and 10. Narrate the propagation and recovery bridge from notes.

**Must remain together:**

- Slide 2 mismatch examples must retain the statement that they are not reported administrations.
- Slide 6 numbers must retain products, transactions, approximate duration and no harm reported.
- Any use of Figure 1 must identify it as a simplified source diagram.
- Any generated cabinet image must retain its hypothetical teaching-image label.

**Never separate:** Do not copy the "more than 300" figure into another deck without its product denominator. Do not use the recovery image to claim that the pictured roles or equipment reproduce the anonymous event.

For a public webpage, preserve source links and image attribution. Classroom fair dealing does not automatically settle public-web reuse. If source-image reuse terms are uncertain, replace the embedded figure with a linked source page while keeping the native explanation.
