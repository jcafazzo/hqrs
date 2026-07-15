# Research briefs: Doloral and time-critical Parkinson’s medication

Prepared for Joseph Cafazzo and HQRS 846. Evidence checked **13 July 2026**. These are teaching briefs, not clinical or operational guidance. They are designed for a mixed cohort of approximately 44–45 graduate health professionals and use the course’s central frame: **use error, not user error**.

## Selection-first view

| Candidate | Editorial verdict | What it uniquely teaches | Best use | Main overlap risk |
|---|---|---|---|---|
| **Doloral 1 + 1 = 11** | **Include.** It is current, Canadian, visually immediate and ends with a completed upstream redesign. | A correct database field can become unsafe when product naming, data structure and display typography ask a human to infer the boundary between two numbers. Incident reporting can close the design loop. | A **4–6 minute core microcase** after the medication-label sequence; expand to 8–10 minutes only when teaching reporting and regulatory/manufacturer feedback. | Strong overlap with the automated dispensing-cabinet (ADC) brief if both are taught merely as “computer medication errors.” Their teaching jobs must remain distinct. |
| **Time-critical Parkinson’s medication** | **Do not add as a second full case if corridor care remains.** Keep it as a high-value alternative or use its medication timeline inside the corridor segment. | Time is part of the medication order; safety depends on preserving an individualized regimen across identification, prescribing, supply, administration, self-administration, records and handoffs. | An **8–12 minute substitute for corridor care** when the desired emphasis is medication continuity, patient expertise and ePMA—not the temporary physical environment. | It is the **same HSSIB patient safety event** used in the corridor-care brief. Presenting both as separate cases would create repetition and a false impression of two independent incidents. |

### The practical portfolio decision

- **Keep Doloral** in the core lecture if four to six minutes are available. It can replace older commentary about good medication-label design being discontinued and adds a 2025 Canadian event with a documented redesign.
- Choose **corridor care or time-critical Parkinson’s medication**, not both as full segments. Use corridor care for capacity, space, dignity and missing infrastructure. Use the Parkinson’s lens for individualized timing, medication reconciliation, self-administration, information continuity and ownership.
- If the full ADC case is also retained, use Doloral as the fast perceptual hook and reserve the ADC case for deployment controls, database integrity, downtime and recovery. Do not spend 20 minutes teaching two versions of “the screen was wrong.”

---

# Brief 5 — Doloral: when 1 + 1 became 11

<figure class="source-plate">
  <img src="../prototypes/assets/source-images/museum/doloral-figure-1-drug-system-display.jpg" alt="ISMP Canada re-creation of a drug-information-system display showing DOLORAL 1 beside the concentration 1 mg per mL">
  <figcaption><strong>Primary-source observation:</strong> ISMP Canada Safety Bulletin, 20 February 2025, Figure 1. The source itself labels this a re-creation from an incident report; it is not an identified hospital-system screenshot.</figcaption>
</figure>

## Decision verdict

**Include, preferably as a compact core case.** It has unusually high teaching efficiency: one short line of text makes the hazard observable from the back of the room; the Canadian source is recent; the error reached severe harm in at least one reported incident; and the learning loop ended in a product-name change rather than another reminder to clinicians.

The full 8–12 minute version is justified only if the segment teaches the entire feedback system—incident detection, reporting, manufacturer engagement, Health Canada guidance and an updated product name. If it stops at “look how easy this is to misread,” teach it in four minutes.

## Unique teaching job

This case teaches **semantic coupling**: humans do not read database fields in isolation. They perceive a line as a visual phrase. A brand name ending in a numeral and a concentration beginning with the same numeral can be individually correct yet jointly ambiguous when a downstream display collapses their boundary.

It also provides the clearest new example of a **successful learning loop**:

```text
care work → use error / harm → voluntary reports → pattern recognized
→ manufacturer + regulator engaged → product names changed
→ safer source data for future displays
```

That second job separates Doloral from a generic typography lesson. Reporting is not paperwork after safety work; reporting is one of the mechanisms by which the system can redesign itself.

## 90-second hook

### On screen

Show only this line, centred at full projection scale, in neutral monospace type:

> **DOLORAL 1 1 mg/mL**

Say: “Do not discuss it. What concentration do you see?” Ask for a simultaneous response:

- one finger: **1 mg/mL**
- two fingers: **11 mg/mL**
- closed hand: **I would stop and verify**

Hold the line for five seconds. Then separate the fields spatially:

```text
PRODUCT NAME        CONCENTRATION
DOLORAL 1           1 mg/mL
```

Reveal only three facts:

> Actual concentration: **1 mg/mL**  
> Reported interpretation: **11 mg/mL**  
> Result: **inadvertent 11-fold dosing errors; at least one incident involved severe patient harm**

### Spoken hook

“The database did not need a misspelled drug or a corrupted concentration to become unsafe. Each field could be accurate. The danger appeared when the fields met a human visual system. ISMP Canada received several reports of 11-fold dosing errors. In at least one, a patient was severely harmed. If our conclusion is that several professionals should have looked more carefully, we have missed the design failure. The system asked them to discover an invisible boundary between two ones.”

### Accuracy note

Do **not** call this an 11-fold overdose. ISMP Canada says “11-fold dosing errors” and does not report the direction, the administered dose, the clinical outcome, the number of incidents or the number of patients. The available bulletin does not support any more specific reconstruction.

The official Figure 1 is itself a **re-creation** of a display shared in an incident report. A lecture reconstruction should be labelled the same way and should not be represented as a screenshot of an identified hospital system.

## Eight-to-twelve-minute teaching arc

| Time | Move | What to show | What to say or ask |
|---|---|---|---|
| 0:00–1:30 | Perceptual commitment | `DOLORAL 1 1 mg/mL`, then separated fields | “What concentration did the display invite you to perceive?” Avoid asking which person failed. |
| 1:30–2:30 | Establish the evidence boundary | **Several reports / 11-fold / ≥1 severe harm** | State exactly what ISMP Canada reported—and immediately state what is unknown. This models disciplined use of incident data. |
| 2:30–3:45 | Reconstruct the information path | Manufacturer submission → Health Canada Drug Product Database → downstream drug-information display → clinician interpretation | The hazardous display was populated from the federal database. The source fields, the transfer and the local presentation are one sociotechnical chain. |
| 3:45–5:00 | Name the failure mode | A boundary disappearing between **name** and **strength** | This is not simply “small font.” It is the interaction of product naming, numeric proximity, field labelling, spacing, visual hierarchy and the expectations of a person doing clinical work. |
| 5:00–6:30 | Map controls across the chain | The system map below, one layer at a time | Ask: “Where is the strongest control: warn the prescriber, change the display, change the source name, or all three?” Use the hierarchy of intervention effectiveness. |
| 6:30–8:15 | Table interaction | Five system owners | Each table proposes one control and one way its control could fail. Hear one sentence from each. |
| 8:15–9:30 | Close the feedback loop | **Reports → manufacturer + Health Canada → numeral removed** | ISMP Canada reports that the manufacturer was informed and, in communication with Health Canada, removed the numeral from the names of both products. This changes the condition at the source. |
| 9:30–10:30 | Verify current status | Current Health Canada entries: **DOLORAL SIROP**, 1 mg/mL and 5 mg/mL, both marketed | Current database entries corroborate the changed name. They do not prove that every downstream system, cached vocabulary or existing package was updated at the same time. |
| 10:30–11:30 | Return | **Where did the error live?** | Answer: “Not in one person. It emerged at the boundary among naming, data, display and perception—and it was reduced by changing that system.” |

The segment can end at 6:30 for a compact version by narrating the redesign without the table exercise. It can expand to 12 minutes by asking tables to rank their controls by leverage and by implementation delay.

## System map

Build this natively rather than screenshotting it:

```text
MANUFACTURER PRODUCT-NAME DESIGN
             ↓
SUBMISSION / AUTHORIZATION / DRUG PRODUCT DATABASE
             ↓
structured fields: brand name | ingredient | strength | route | dosage form
             ↓
DOWNSTREAM DRUG-INFORMATION OR ORDERING SYSTEM
             ↓
field labels • spacing • punctuation • hierarchy • truncation • line wrapping
             ↓
VISUAL PHRASE PRESENTED IN CLINICAL WORK
             ↓
          DOLORAL 1 1 mg/mL
             ↓
PERCEPTION + INTERPRETATION + DOSE WORK
             ↓
      1 mg/mL can be parsed as 11 mg/mL
             ↓
       11-FOLD DOSING-ERROR OPPORTUNITY

Detection and learning path:
clinician / pharmacist detects event → local response → report to ISMP Canada
→ reports aggregated → manufacturer informed → Health Canada communication
→ numeral removed from both product names → safer source representation

Controls can act at every layer, but source-name redesign removes the ambiguity
before it is reproduced across many downstream displays.
```

### The systems question

> “Which control still works when the clinician is interrupted, the screen is small and the local vendor changes the layout?”

This moves the room from awareness and vigilance toward source design, robust data presentation and end-to-end testing.

## Audience interaction for 44–45 learners

Use five tables of approximately nine. Give them 75 seconds. Assign one layer to each:

1. **Manufacturer / naming:** change the source representation without making strengths harder to distinguish.
2. **Regulator / database:** structure, validate and publish product information so dangerous concatenations can be detected.
3. **Software / display:** preserve field boundaries across screen sizes, exports, search results, labels and printouts.
4. **Clinical organization:** build pharmacy verification, formulary governance and escalation without turning every order into alert fatigue.
5. **Learning system:** make weak signals reportable and aggregate them into a pattern that can reach upstream owners.

Prompt:

> “You own one layer. Propose one control that does not depend on perfect attention. Then name one way your control could silently fail downstream.”

Take one ten-second response from each table. Then reveal the intervention actually reported: removal of the numeral from both product names. Ask the room to rank it against their controls using the hierarchy of intervention effectiveness.

Strong answers may include a naming review that tests names beside strength fields; separate labelled display columns; a hard visual delimiter that survives responsive layouts and print; automated detection of a name-ending digit adjacent to a strength-leading digit; end-to-end display testing using the live terminology feed; pharmacy review of new or changed formulary displays; and an incident-report pathway capable of aggregating similar events across sites.

## Use-error framing

### Avoid

- “Several clinicians misread a perfectly clear concentration.”
- “The user saw 11 because they were not paying attention.”
- “This was a typo in the database.”
- “The software made an error.”
- “An alert would have prevented it.”

### Prefer

- “Correct fields combined into an ambiguous visual phrase.”
- “The use error emerged from product naming, data representation, display design and ordinary human grouping.”
- “A clinician’s interpretation was shaped by the representation the system supplied.”
- “The reports were successful safety actions that allowed a cross-site pattern to become visible.”
- “Changing the source name removed a recurrent ambiguity upstream; local display and verification controls may still be needed.”

### Core line

> **The error lived in the boundary the display failed to show.**

## Exact, defensible evidence

| Source finding | Exact claim suitable for teaching | Essential qualifier |
|---|---|---|
| ISMP Canada bulletin, 20 Feb 2025 | ISMP Canada received **several reports** of inadvertent **11-fold dosing errors** involving Doloral 1, a morphine **1 mg/mL** oral syrup. | “Several” is not an exact count. The bulletin does not state the direction of the dosing errors, the doses involved or the number of patients. |
| Harm | The reports included **one incident that resulted in severe patient harm**. | No clinical details are provided. Do not infer overdose, respiratory depression, death or a particular mechanism of harm. |
| Misinterpretation | Across the incidents, a key contributing factor was interpretation of the product as **11 mg/mL rather than 1 mg/mL** because the numeral in the brand name appeared next to the numeral in the concentration. | ISMP Canada identifies this as a key contributing factor, not necessarily the only condition in every event. |
| Information path | The drug-information display had been populated from the **Health Canada Drug Product Database**, which was based on manufacturer submissions authorized by Health Canada. | This does not mean the federal database display and every local display were identical. The official incident-system image is a re-creation. |
| Redesign | ISMP Canada reports that the manufacturer was informed and, in communication with Health Canada and in accordance with the federal good-label guide, the numeral was **removed from the name of both products**. | The bulletin does not describe the detailed decision process or implementation timeline and does not claim that naming was the only control needed. |
| Current 1 mg/mL entry, checked 13 Jul 2026 | Health Canada lists DIN **00614491** as **DOLORAL SIROP**, morphine hydrochloride **1 mg/mL**, status **Marketed**, current-status date **2025-03-12**. | The status date should not be described as the proven effective date of the risk-control change. A current database entry does not prove every local downstream system has refreshed it. |
| Current 5 mg/mL entry, checked 13 Jul 2026 | Health Canada lists DIN **00614505** as **DOLORAL SIROP**, morphine hydrochloride **5 mg/mL**, status **Marketed**, current-status date **2025-03-12**. | The product was renamed, not withdrawn. Keep the strength visible whenever showing the current name. |
| Health Canada label guidance | The guide says numbers without units should not be used to express product strength and advises avoiding placement of strength near other numeric information. | The guide is broad labelling guidance. Do not present the Doloral reports as proof that every instance of adjacent numbers causes an error. |

## Claim guardrails: what this case cannot support

1. **Do not say “11-fold overdose.”** The bulletin reports 11-fold dosing errors without stating direction.
2. **Do not state an exact incident or patient count.** “Several” and “including one involving severe harm” are the limits of the public evidence.
3. **Do not invent the harm.** There is no public account of the patient’s condition, treatment, recovery or outcome beyond “severe patient harm.”
4. **Do not call this a spelling error, database corruption or wrong-drug selection.** The available account is about an ambiguous relationship between the numeral in a product name and the concentration displayed beside it.
5. **Do not call the official Figure 1 an authentic screen capture.** ISMP Canada labels it a re-creation based on an image shared in an incident report.
6. **Do not assign blame to a named hospital, software vendor, clinician or regulator.** None is identified as the sole cause in the bulletin.
7. **Do not say Health Canada ordered a recall or withdrew the drug.** The current 1 mg/mL and 5 mg/mL products remain listed as marketed under DOLORAL SIROP.
8. **Do not say the rename eliminated all risk.** Legacy packages, cached records, local aliases, export layouts and other medication-workflow conditions are not addressed in the one-page bulletin.
9. **Do not imply that a warning alert is the documented solution.** The reported upstream action was removal of the numeral from the names of both products.
10. **Do not use the case to claim a general error rate for medication displays.** Incident reports provide a signal and pattern, not a denominator.

## Overlap with the four existing briefs

| Existing brief | Degree of overlap | What is shared | What Doloral uniquely adds | Editorial implication |
|---|---:|---|---|---|
| Pulse oximetry | Low–moderate | A precise-looking number can travel through protocols with more authority than its underlying uncertainty warrants. | Doloral is a visual parsing and naming problem, not a measurement-bias or threshold problem. | Both can stay if the contrast is explicit: **measurement uncertainty** versus **semantic ambiguity**. |
| Corridor care | Low | Medication safety emerges from infrastructure, information and roles, not individual memory alone. | Doloral begins upstream in product naming and terminological display and ends in a source-name change. | No meaningful redundancy. |
| Fatigue | Low | Design should remain safe under ordinary limits of attention and working memory. | The case does not require fatigue to explain the use error and provides no fatigue evidence. | Never add fatigue as an inferred causal factor. |
| ADC frameshift | High | Medication fields can look plausible while their relationships are unsafe; frontline contradiction detection and reporting are protective. | Doloral involves accurate adjacent fields and semantic concatenation, with a manufacturer/regulatory rename. ADC involves corrupted row relationships during deployment, network-wide propagation, downtime and recovery. | If both are used, teach Doloral in 4–6 minutes and ADC as the deeper resilience case. If only one fits the introduction, Doloral is the more efficient stage case. |

## Insertion point in the original presentation

### Recommended location

Insert immediately after **source page 133, “Medication label typography compared with M&M packaging.”** The sequence then becomes:

```text
p127–133  Pill bottle / ClearRx / label hierarchy
NEW       DOLORAL 1 1 mg/mL — live perception test
NEW       Several reports / 11-fold / severe harm
NEW       name → database → display → interpretation
NEW       reports → rename → current DOLORAL SIROP
p138      “Bad products that succeed” / EpiPen transition
```

This location makes Doloral an applied, contemporary Canadian consequence of the design principles already established by ClearRx.

### What it could replace

For a time-neutral revision, replace or park **pages 134–137**—the ClearRx discontinuation and customer-reaction sequence. Those pages show attachment to a well-designed product, but Doloral does more curricular work: it demonstrates harm, cross-system propagation, reporting and upstream redesign.

Protect pages 127–133, which establish the object and information-design lesson. Protect pages 139–146 if the EpiPen use-error story remains one of the lecture’s signature demonstrations.

### If the ADC brief is also included

Keep Doloral to four slides and four minutes. Place the ADC case later, after the Human-Tech Ladder or as a transition from product/interface design to organizational resilience. Do not run both cases back-to-back as two long medication-software incidents.

## Slide and source-observation plan

1. **Perceptual trap:** `DOLORAL 1 1 mg/mL` alone on Queen’s Blue, at least 96 px, no explanatory footer until after the vote.
2. **Field separation:** same line, same position, then animate or hard-cut in the column labels and a visible boundary. Do not change the text while demonstrating the grouping effect.
3. **Evidence:** three large statements—**several reports / 11-fold / ≥1 severe harm**—with a visible footer: “Direction and clinical details not reported.”
4. **Primary-source observation:** dedicate a full slide to ISMP Canada’s one-page bulletin or Figure 1 at readable scale. Label it: “Figure 1 is a re-creation based on an incident report.”
5. **System path:** build the name-to-display chain natively, one layer per hard cut.
6. **Redesign reveal:** `DOLORAL 1` → `DOLORAL SIROP`; then show the current Health Canada 1 mg/mL and 5 mg/mL entries as a separate observation slide.
7. **Close:** “The error lived in the boundary the display failed to show.”

## Primary and authoritative sources

1. **Institute for Safe Medication Practices Canada. “Sharing Matters! Concerned Reporting Results in a Safer Product Name.”** *ISMP Canada Safety Bulletin*, Volume 25, Issue 2, Supplement 1; published **20 February 2025**.  
   Web: <https://ismpcanada.ca/bulletin/doloral/>  
   Official one-page PDF: <https://ismpcanada.ca/wp-content/uploads/ISMPCSB2025-i2-supp1-Doloral.pdf>  
   Primary source for “several reports,” 11-fold dosing errors, severe harm in at least one incident, the 1 versus 11 mg/mL interpretation, the database path and the removal of the numeral from both product names.

2. **Health Canada. Drug Product Database: DOLORAL SIROP, DIN 00614491.**  
   <https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=6171>  
   Current official listing for the marketed 1 mg/mL morphine hydrochloride syrup under the revised product name. Checked 13 July 2026.

3. **Health Canada. Drug Product Database: DOLORAL SIROP, DIN 00614505.**  
   <https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=11597>  
   Current official listing for the marketed 5 mg/mL morphine hydrochloride syrup under the revised product name. Checked 13 July 2026.

4. **Health Canada. “Good label and package practices guide for prescription drugs.”**  
   <https://www.canada.ca/en/health-canada/services/drugs-health-products/reports-publications/medeffect-canada/good-label-package-practices-guide-prescription-drugs-profile/guidance-document.html>  
   Authoritative source for the recommendations about numbers without units, numeric proximity, spacing, visual hierarchy and expression of strength. ISMP Canada explicitly connects the rename to this guide.

5. **Health Canada / Laboratoire Atlas. Product Monograph: DOLORAL SIROP, morphine hydrochloride syrup, 1 mg/mL and 5 mg/mL.** Last revised 28 February 2024.  
   <https://pdf.hres.ca/dpd_pm/00074783.PDF>  
   Confirms the two current strengths and current product-monograph naming. It does not describe the incidents and should not be used to add details to them.

---

# Brief 6 — Time is part of the dose: Parkinson’s medication in the emergency department

<figure class="source-plate">
  <img src="../prototypes/assets/source-images/forensic/hssib-parkinsons-executive-summary-8-of-18.png" alt="HSSIB executive-summary excerpt stating that only 8 of 18 time-critical Parkinson's medication doses were provided on time during an emergency-department stay">
  <figcaption><strong>Primary-source observation:</strong> HSSIB investigation report, published 5 December 2024. Read “8 of 18 on time” with the report's record-reconstruction uncertainty; do not convert it into a causal claim about deterioration or death.</figcaption>
</figure>

## Decision verdict

**Park as an alternative, not an additional full case, if the corridor-care brief remains in the lecture.** The corridor brief already uses this exact HSSIB event—the 85-year-old man, 52-hour ED stay, 44 corridor hours and 18 due doses. Re-presenting it later as “a new Parkinson’s case” would consume time without adding independent evidence.

This is nevertheless an excellent **replacement lens**. Choose it over corridor care when the intended teaching job is:

- an individualized schedule must survive every transition;
- the clock time is part of the medication order;
- identifying, prescribing, sourcing and administering are different functions with different owners;
- the patient and family can hold safety-critical knowledge;
- self-administration requires support, storage and documentation rather than informal tolerance;
- electronic records can be individually usable yet collectively fragmented; and
- a single investigated event can be tested against current multicentre quality-improvement data.

## Unique teaching job

The case turns “medication omitted” from a point error into a **continuity problem**. It asks whether the care system can preserve one person’s four-times-daily, two-strength regimen from home to reception, triage, ED assessment, corridor, specialty referral, paper downtime, ePMA recovery and ward transfer.

Its most useful line is:

> **For a time-critical medication, the time is part of the dose.**

That statement should not be confused with a universal 30-minute biological cliff. NICE’s 30-minute quality threshold for levodopa is based on expert consensus and is meant to drive reliable, individualized administration and measurement.

## 90-second hook

### On screen

Begin with four clocks only:

> **08:00 · 12:00 · 16:00 · 20:00**

Then add:

> **two strengths · every time · individualized at home**

Ask: “What is the medication order?” Take two answers. Then reveal:

> **The clock is part of the order.**

Hard cut to:

> **52 hours in the ED**  
> **18 doses due**  
> **7 not given · 3 late · potentially 8 on time**

### Spoken hook

“An 85-year-old man with Parkinson’s arrived after a fall. At home he managed two strengths of co-beneldopa four times a day, at exact individual times. Over 52 hours in the emergency department, 18 capsule-level doses were due. Records indicated seven were not given and three were late. It is tempting to ask who forgot. HSSIB found a more consequential question: where, across this pathway, did the system take ownership of preserving his schedule? The answer was nowhere reliably enough.”

### Accuracy note

The 18-dose denominator counts the two co-beneldopa strengths as separate doses at each scheduled administration time; it is not 18 separate medication rounds.

HSSIB’s narrative and table are not perfectly consistent about the number of self-administered doses. The executive narrative says three, while the detailed medication table marks four capsule-level doses as self-administered across two scheduled times and the analysis refers to “the first four.” Do not put an exact self-administration count on a slide. Say the patient self-administered **some early doses from his own supply**.

## Eight-to-twelve-minute teaching arc

| Time | Move | What to show | What to say or ask |
|---|---|---|---|
| 0:00–1:30 | Hook | Four clocks → 52 hours / 18 / 7 / 3 / 8 | “Where is ownership of the schedule created, transferred and verified?” |
| 1:30–2:30 | Define the requirement | NICE: levodopa within **30 minutes of the individually prescribed administration time** | The schedule is the person’s usual regimen, not a generic morning/noon/evening medication round. State that the 30-minute threshold is an expert-consensus quality standard. |
| 2:30–4:15 | Reconstruct the event | A stable three-day timeline | Arrival and triage recognized Parkinson’s; an initial discharge mental model persisted; medication was not prescribed early; paper and electronic prescribing split during an outage; the documented regimen was incomplete; some early doses were self-administered; later doses were late or not given. |
| 4:15–5:45 | Show the three failure mechanisms | **not prescribed / wrong regimen / prescribed but not given** | HSSIB summarizes three different mechanisms. “Omitted medication” is an outcome label, not a single cause or control point. |
| 5:45–7:15 | Build the system | The continuity map below | Add undefined roles, no dedicated ED pharmacy, 44 corridor hours, inaccessible specialist letters, an incorrect summary record, out-of-hours information, ePMA limitations, paper/electronic transition, no supported self-administration and no secure storage. |
| 7:15–8:20 | Show this is not only one event | Current RCEM 2025 QIP: **122 EDs / 18,067 eligible cases / 47.6% identified / 38.4% on-time levodopa doses** | These are participating-ED quality-improvement submissions, not a population prevalence estimate. The point is persistence of the system problem, not causal proof from one case. |
| 8:20–10:10 | Table interaction | Six continuity owners | Each pod designs an owner, signal and fallback at one transition. Hear one sentence from each. |
| 10:10–11:10 | Apply the hierarchy | “Poster / alert / supported pathway” | Posters and education can help, but stronger design establishes ownership, exact-time prescribing, medication access, supported self-administration, downtime continuity and visible overdue-dose data. |
| 11:10–12:00 | Return | **The time is part of the dose.** | “When the schedule disappears between systems, the patient is asked to supply the missing integration.” |

The arc can stop at 8:20 if the corridor-care interaction has already been used. If this brief replaces corridor care, use the full interaction and keep the physical corridor as one contributing condition rather than the organizing theme.

## System map

```text
PERSON'S ESTABLISHED REGIMEN AT HOME
two strengths • four individual times • response known to patient/family
                         ↓
ARRIVAL: IDENTIFY TIME-CRITICAL MEDICATION
reception → triage → assessment → specialty handoff
                         ↓
VERIFY THE CURRENT REGIMEN
patient + family + own medicines + GP record + specialist letters
                         ↓
PRESCRIBE EXACT DRUG / STRENGTH / TIME
not “morning / afternoon / evening”
                         ↓
SOURCE AND STORE THE MEDICATION
ED stock • pharmacy • own supply • secure accessible storage
                         ↓
ADMINISTER OR SUPPORT SELF-ADMINISTRATION
suitability • authority • access • documentation
                         ↓
RECORD WHAT OCCURRED
on time • early • late • not given • self-administered • reason
                         ↓
HAND OFF THE REGIMEN AND OUTSTANDING TASKS
ED → specialty → ward; paper ↔ ePMA; shift ↔ shift
                         ↓
MEASURE, LEARN AND REDESIGN
overdue-dose visibility • audit • QIP • incident review

Conditions acting across the whole chain:
ED crowding and 44 corridor hours • no dedicated ED pharmacy
unclear role ownership • inaccessible computers/medication rooms
no medication trolley • ePMA outage • paper/electronic split
13-month specialist-letter backlog • out-of-hours service boundaries
incorrect/incomplete summary record • local system configuration
no implemented self-administration pathway or secure lockers
```

### Resilience reading

HSSIB used the CARe model to examine staff adaptations that bridged the gap between demand and capacity. In this case, self-administration, free-text documentation, phone contact with the son, paper prescribing during downtime and staff workarounds were not simply deviations. They were attempts to keep care moving in a system whose formal mechanisms did not fully fit the situation. The question is which adaptations should be supported and formalized, and which indicate a hazardous design gap.

## Audience interaction for 44–45 learners

Divide the room into six pods of seven or eight. Assign one continuity function:

1. **Identify:** recognize time-critical medication at arrival without relying on the patient knowing the category.
2. **Verify:** reconcile differences among the patient, family, own supply, primary-care record and specialist plan.
3. **Prescribe:** preserve exact individualized times and ensure every due dose has an active order.
4. **Supply:** make the medication accessible during crowding, out of hours and pharmacy downtime.
5. **Administer / self-administer:** decide suitability, provide secure access and record what was actually taken.
6. **Handoff / downtime:** preserve schedule, provenance and outstanding tasks across shifts, specialties, locations and paper/electronic transitions.

Prompt:

> “Design one reliable link in the chain. Name the owner, the trigger, the visible completion signal and the fallback when the digital system is unavailable. Then name one way your link could fail while appearing complete.”

Give 90 seconds. Take one sentence from each pod. Ask the final pod to identify where a failure from any earlier link becomes detectable.

Strong responses include a time-critical-medication question at first clinical contact coupled to an assigned follow-up task; exact scheduled times rather than standard rounds; a reconciliation state that preserves conflicting sources until resolved; pharmacist support; locally available stock; a supported self-administration pathway with secure storage; an ePMA flag coupled to an actionable owner; a downtime list of due time-critical medication; and an overdue-dose dashboard that separates late, not given and patient-administered doses.

## Use-error framing

### Avoid

- “The nurse forgot seven doses.”
- “The doctor entered the wrong medication.”
- “The patient should have brought enough medicine and insisted on taking it.”
- “The family knew the right answer, so staff should simply trust families over the record.”
- “The computer outage caused the event.”
- “This would be solved if everyone knew Parkinson’s medication is important.”

### Prefer

- “No role reliably owned identification, prescribing and preservation of the individualized schedule across the whole ED stay.”
- “The event reached the same outcome through three mechanisms: doses were not prescribed, the regimen was under-prescribed, and a prescribed dose was not given.”
- “The patient and family were safety-critical information sources, but the system lacked a reliable process for reconciling and preserving that information.”
- “Self-administration was an adaptation without an implemented supporting pathway, secure storage or integrated documentation.”
- “The ePMA outage exposed a weak paper-to-electronic transition; the system also lacked time-critical alerts when operational.”
- “The use errors emerged from interacting roles, records, access, environment, policy and technology.”

### Core line

> **When the schedule disappeared between systems, the patient was asked to supply the integration.**

## Exact, defensible evidence

| Source finding | Exact claim suitable for teaching | Essential qualifier |
|---|---|---|
| Patient regimen | The patient was **85** and normally took co-beneldopa **12.5/50 mg and 50/200 mg** at **08:00, 12:00, 16:00 and 20:00**. | This is one patient’s individualized regimen. It is not a standard Parkinson’s schedule. |
| ED exposure | The patient spent **52 hours** in the ED, including a further **44 hours** in a corridor bed after approximately 03:00 on day 2. | Corridor care was one interacting condition. HSSIB does not quantify its independent causal contribution. |
| Medication record | **18 capsule-level doses** were due. Records indicated **7 were not given**, **3 were late**, and HSSIB says potentially **8 of 18 were provided on time**. | “Potentially” reflects record uncertainty. Eighteen counts each strength as a dose; it is not 18 separate administration rounds. |
| Three mechanisms | HSSIB summarizes: the first eight doses were not prescribed in the first 24 hours and some were self-administered; when medication was prescribed, the morning regimen was incorrect; and one prescribed dose was not given on day 3. | Avoid an exact count of self-administered doses because the report’s narrative and detailed table are internally inconsistent on that point. |
| Clinical course | After ward transfer, symptoms deteriorated, the patient lost the ability to swallow and required a nasogastric tube. He died **four weeks** later; the death certificate listed bronchopneumonia, Parkinson’s and frailty of old age. | The report does **not** establish that the missed or late medication, corridor stay or any single factor caused his deterioration or death. Do not imply causation. |
| NICE quality statement QS164 | Adults with Parkinson’s in hospital or a care home should take levodopa within **30 minutes of their individually prescribed administration time**. | NICE states that the 30-minute timeframe is based on expert consensus. It is a quality standard, not proof of a universal physiological cliff at minute 31. |
| Role and service conditions | HSSIB found no defined ED role responsible for early identification and prescribing, and no dedicated ED pharmacy support. | These are findings about the investigated organization and learning prompts for wider use, not proof that every ED has the same structure. |
| Information continuity | The latest neurology letter available to the ED trust was **13 months old**; the GP summary record did not carry the note that the higher-strength dose had increased to four times daily; out-of-hours teams could not be reached. | The report describes specific system configurations and local record-transfer conditions. Do not universalize the exact failure. |
| ePMA transition | An unplanned outage ran from the evening of day 2 until midday day 3. A noon dose was on paper; when ePMA returned, a past dose could not be entered retrospectively and the paper chart was treated as redundant, contributing to missed noon doses. | The system was not the sole cause. It interacted with prescribing timing, paper/electronic authority, workflow and handoff. |
| HSSIB safety observation | Safety observation **O/2024/052** encourages NHS trusts to use the RCEM QIP information pack to assess preparedness and improve identification, prescribing and administration in EDs. | This is a safety observation, not evidence that one specific intervention is effective in every setting. |
| Current RCEM 2025 QIP scope | **122 EDs** submitted **18,570 cases**; **18,067** met eligibility criteria: **7,526 levodopa**, **10,429 insulin**, and **112 both**. | Participating sites and submitted eligible cases; not a census of all UK EDs or patients. The report is a QI programme report, not a population-prevalence study. |
| Current RCEM identification result | **47.6%** of patients receiving levodopa were identified as taking a time-critical medication within 30 minutes of ED arrival, essentially unchanged from 47.5% in year 1. | This is performance in participating submissions. It does not establish why identification was delayed. |
| Current RCEM administration result | **38.4%** of eligible levodopa dose records were administered within 30 minutes of the expected time, versus 39.17% in year 1. | Eligibility and submission rules matter. Do not turn 38.4% into a national patient-level harm rate. |
| Current programme status | RCEM’s 2025 national report was published **June 2026** and describes the programme as running from **2023/24 to 2027**. RCEM lists Time Critical Medications as a Year 3 QIP in 2026. | The 2026 data-entry period is ongoing; do not imply that Year 3 results are available. |

## Claim guardrails: what this case cannot support

1. **Do not say the missed medication caused the patient’s death.** The temporal sequence and death-certificate entries do not establish that causal claim.
2. **Do not say corridor care caused all ten late or missed doses.** HSSIB describes corridor-related access and storage challenges alongside role ambiguity, pharmacy availability, records, prescribing, self-administration and ePMA conditions.
3. **Do not use an exact self-administration count.** The public report contains an internal inconsistency; use “some early doses.”
4. **Do not describe 18 separate medication rounds.** The total counts the two strengths as separate capsule-level doses.
5. **Do not say every Parkinson’s medicine or every patient has the same schedule.** The core requirement is the individually prescribed regimen. NICE’s cited quality statement is specifically about levodopa.
6. **Do not make 30 minutes a universal biological cliff.** NICE says the timeframe is based on expert consensus. Delays can matter greatly, but individual effect varies.
7. **Do not teach self-administration as a blanket solution.** It requires suitability assessment, continued access, secure storage, documentation and a fallback as capacity changes.
8. **Do not treat the family as a substitute for medication reconciliation.** Patient and family knowledge should be heard and reconciled with clinical sources; any source can be incomplete or wrong.
9. **Do not say ePMA would automatically have prevented the event.** The operational system lacked time-critical alerts, had local configuration and access constraints, and became unavailable. Digital and paper authority also conflicted during recovery.
10. **Do not describe the RCEM results as UK-wide prevalence.** They are quality-improvement data from participating EDs and submitted eligible cases.
11. **Do not infer fatigue, negligence or lack of compassion.** The investigation did not establish these as causal factors and documented staff adaptations under demand-capacity mismatch.
12. **Do not present both this brief and corridor care as independent evidence.** They are two analyses of the same investigated event.

## Overlap with the four existing briefs

| Existing brief | Degree of overlap | What is shared | What the Parkinson’s lens uniquely adds | Editorial implication |
|---|---:|---|---|---|
| Pulse oximetry | Low | A clinical number or threshold can drive a rule and can acquire authority as it moves through systems. | An individualized medication schedule must be preserved; the problem is continuity and ownership rather than measurement bias. | Both can stay without confusion if time allows. |
| Corridor care | **Complete case overlap** | Same 85-year-old patient, same 52/44-hour exposure, same 18-dose record and many of the same system factors. | Parkinson’s lens foregrounds exact timing, regimen reconciliation, self-administration, ePMA and current RCEM QIP data. Corridor lens foregrounds temporary space, monitoring, dignity, infrastructure and whole-hospital flow. | **Choose one full segment.** Embed the 18-dose timeline inside corridor care or replace corridor care with this brief. Do not teach both as separate cases. |
| Fatigue | Low–moderate | Work occurs under capacity constraints and humans adapt when formal systems do not fit demand. | HSSIB did not identify fatigue as the cause; the case maps continuity across roles and records. | Do not combine them into a claim that tired staff missed doses. |
| ADC frameshift | Moderate | Both involve medication information, digital systems and frontline detection under uncertainty. | Parkinson’s is longitudinal continuity across multiple records and transitions; ADC is corrupted database relationships during a deployment with network-wide downtime and recovery. | Both can stay if their system maps are visibly different. If time is short, Parkinson’s is the clinically richer case; ADC is the stronger technology-deployment case. |

## Insertion point in the original presentation

### Recommended location if selected

Place it immediately after **pages 121–122, the Human-Tech Ladder**, as a worked example across levels:

```text
p121–122  Human-Tech Ladder
NEW       The time is part of the dose
NEW       52 hours / 18 due / 7 not given / 3 late / 8 on time
NEW       three mechanisms: not prescribed / wrong regimen / not given
NEW       person → task → technology → team → organization → policy map
NEW       current RCEM 2025 results
p123      Why are there so many failed products in healthcare?
```

This makes the ladder operational before the lecture narrows into the pill-bottle and EpiPen object lessons.

### What it could replace

The first replacement should be the **corridor-care brief**, because it is the same case. That keeps the new-content budget honest.

If the corridor brief is not otherwise in the timed lecture and six to eight minutes still need to be recovered from the original deck, compress rather than delete the medication-object sequence:

- park pages **134–137** if Doloral is not using that slot;
- show EpiPen pages **140–145** as a shorter matched sequence rather than narrating every instruction panel; or
- use only one of the two extended medication-object stories in class and retain the other in the appendix.

Protect pages 121–122 and the circular thesis pages 124–126. The new case should demonstrate the Human-Tech Ladder, not displace its conceptual setup.

### Selection rule

- Choose **corridor care** when the day’s question is: “What happens when a physical space becomes a care system without its infrastructure?”
- Choose **time-critical Parkinson’s medication** when the question is: “Can the system preserve a person-specific regimen across every transition?”
- If unsure, keep corridor care in the introductory lecture because it ranges across more system levels and use this Parkinson’s brief later in a medication-safety, digital-health or service-design session.

## Slide and source-observation plan

1. **Clock hook:** four large times on Queen’s Blue. No pill photograph; the regimen is the visual object.
2. **Axiom:** “The time is part of the dose.”
3. **Case result:** **52 h / 18 due / 7 not given / 3 late / potentially 8 on time**, with a back-row footer explaining the capsule-level denominator.
4. **Primary-source observation:** rebuild HSSIB Table 1 at projection scale as a three-day timeline. Preserve due time, actual time and paper/ePMA/self-administration state. Do not show a tiny report screenshot.
5. **Three mechanisms:** one dedicated slide each—**not prescribed**, **wrong regimen**, **prescribed but not given**.
6. **System build:** reveal the continuity chain one transition at a time; place the paper/ePMA outage as a cross-cut, not as the sole central cause.
7. **Current evidence:** **122 EDs / 47.6% identified / 38.4% on time**. Footer: “Participating QIP submissions; not population prevalence.”
8. **Close:** “When the schedule disappeared between systems, the patient was asked to supply the integration.”

Avoid stock photographs of a person with Parkinson’s. They add little evidence and can sentimentalize the event. Use the clocks, authentic investigation timeline, system map and current QIP results as the visual story.

## Primary and authoritative sources

1. **Health Services Safety Investigations Body. “Medication not given: administration of time critical medication in the emergency department.”** Published **5 December 2024**.  
   Official report: <https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/investigation-report/>  
   PDF view: <https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/investigation-report/pdf/>  
   Primary source for the event, medication timeline, system factors, CARe analysis, local learning prompts and safety observation O/2024/052.

2. **National Institute for Health and Care Excellence. “Quality statement 4: Levodopa in hospital or a care home.”** Quality standard QS164, published **9 February 2018**.  
   <https://www.nice.org.uk/guidance/qs164/chapter/quality-statement-4-levodopa-in-hospital-or-a-care-home>  
   Authoritative source for administration within 30 minutes of the individually prescribed time, the need for exact admission documentation and monitoring, support for self-medication, and the note that the 30-minute timeframe is based on expert consensus.

3. **Royal College of Emergency Medicine. *Time Critical Medication QIP 2025: National Report*.** Published **June 2026**.  
   <https://rcem.ac.uk/wp-content/uploads/2026/06/RCEM-Time-Critical-Medications-QIP-National-Report-2025.pdf>  
   Current multicentre QI context for the 122 participating EDs, case and medication counts, identification and administration performance, self-administration findings, organizational measures and 2026 continuation.

4. **Royal College of Emergency Medicine. Quality Improvement programme page.**  
   <https://rcem.ac.uk/quality-improvement/>  
   Current official status page listing Time Critical Medications as a Year 3 QIP in 2026 and linking the current information pack and reports. Checked 13 July 2026.

5. **Royal College of Emergency Medicine. *Time Critical Medications 2023–2026 QIP: Year 1 Information Pack*.** Published November 2023.  
   <https://rcem.ac.uk/wp-content/uploads/2023/11/Time_Critical_Medications_QIP_Information_Pack_2023_Final.pdf>  
   Source for the original process map, MISSED categories, standards and measures that HSSIB used for safety observation O/2024/052. Use the June 2026 national report for current performance.

6. **Parkinson’s UK. *Every Minute Counts: Time critical Parkinson’s medication on time, every time*.** Published September 2023.  
   <https://www.parkinsons.org.uk/sites/default/files/2023-09/CS4006%20Get%20it%20on%20time%20policy%20report_Web%20Version.pdf>  
   Patient-advocacy and policy context for training, self-administration and e-prescribing. Its Freedom of Information findings are organizational responses, not direct observation of medication administrations.

---

# Final curation recommendation across these six candidates

For an introductory lecture that must preserve stagecraft and leave room for discussion, the strongest non-redundant portfolio is:

1. **Pulse oximetry** — measurement, validation and equity.
2. **Corridor care or time-critical Parkinson’s medication** — choose one lens on the same event.
3. **Fatigue** — changing human capacity as a design input.
4. **Doloral** — compact Canadian naming/display case and successful reporting loop.
5. **ADC frameshift** — optional deeper technology-deployment and recovery case.

If only **two** new cases fit, choose pulse oximetry plus corridor care: together they span product validation, thresholds, equity, physical environment, capacity and system ownership.

If **three** fit, add Doloral as the short Canadian case. It gives the lecture a satisfying design intervention rather than only examples of unresolved risk.

If **four** fit, add fatigue. Use the ADC case as an appendix or later-session case unless digital deployment and resilience are explicit learning objectives.

Do not count the Parkinson’s and corridor versions as two pieces of independent evidence. Their value lies in letting the instructor choose the lens that best serves the room.
