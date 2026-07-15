# Teaching-brief research: pulse oximetry and corridor care

**Prepared for:** Joseph Cafazzo, HQRS 846 — Human Factors in Health Care  
**Audience:** 44–45 graduate-level clinicians, nurses, allied health and life-science professionals  
**Evidence checked:** 13 July 2026  
**Teaching stance:** use error, not user error. The person is part of the system; apparently individual mistakes are often predictable adaptations to the equipment, information, environment, incentives and capacity available.

These are two self-contained 8–12 minute teaching modules. Each can be delivered as a contemporary interruption within the original lecture rather than as a mini literature review. The pulse-oximetry module asks students to stop treating a precise display as ground truth. The corridor-care module asks them to stop treating an improvised location as merely a bad room. In both cases the key move is from **“Who made the error?”** to **“What system produced the conditions in which this action or result made sense?”**

---

# Brief 1 — Pulse oximetry: when a precise number hides uncertainty

<figure class="source-plate">
  <img src="../prototypes/assets/source-images/museum/fda-guidance-page-32-study-diversity.png" alt="Excerpt from the FDA 2025 draft guidance recommending diverse skin-pigmentation representation and measurement in pulse-oximeter studies">
  <figcaption><strong>Primary-source observation:</strong> U.S. FDA draft guidance, January 2025, p. 32. Keep the visible draft status; this is proposed validation redesign, not final mandatory guidance.</figcaption>
</figure>

## Intended change in the audience

Students should leave understanding that SpO2 is an estimate produced by a measurement system—not a patient fact—and that safer care requires designing for uncertainty across device validation, procurement, sensor application, signal interpretation, clinical thresholds and escalation pathways.

## One-sentence teaching claim

> The use error is not “believing the monitor”; it is building a system that displays an estimate with great confidence, embeds it in hard thresholds, and leaves the clinician to remember every hidden limitation.

## 90-second hook

### Visual sequence

1. Full Queen's Blue field. One large number: **94%**. No title and no explanatory text.
2. Ask: **“Would this number reassure you?”** Take two or three rapid answers.
3. Replace the percent sign with two labels: **SpO2 94%** and **SaO2 <88%**.
4. Reveal: **“Occult hypoxemia: the estimate looks acceptable; the arterial measurement is not.”**
5. Reveal the University of Michigan result: among paired measurements with SpO2 92–96%, SaO2 was below 88% in **11.7% of measurements from Black patients** versus **3.6% from White patients**.

### Suggested spoken script

“You are looking at a familiar number: 94. It feels objective, immediate and actionable. Would it reassure you? In a 2020 hospital cohort, when the monitor showed 92 to 96, an arterial blood gas still showed saturation below 88 in 11.7 percent of measurements from Black patients, compared with 3.6 percent from White patients. The number did not announce that its uncertainty was unevenly distributed. So: who made the error? The clinician? The patient? Or a system that turned an optical estimate into a crisp threshold?”

**Attribution on slide:** Sjoding MW et al., *N Engl J Med* 2020;383:2477–2478. DOI: [10.1056/NEJMc2029240](https://doi.org/10.1056/NEJMc2029240).

**Accuracy note:** The 11.7% and 3.6% values are measurement-level results in the University of Michigan cohort: 88/749 and 99/2,778 paired measurements, respectively. Do not call them population prevalence or say that every darker-skinned patient is affected.

## Ten-minute teaching arc

| Time | Slide/job | Teaching action and speaker direction |
|---|---|---|
| 0:00–1:30 | **Hook / observation** | Run the 94% reveal above. Let the class commit before explaining. The pedagogic value is the felt confidence in the number. |
| 1:30–2:30 | **Axiom** | “SpO2 is an estimate. SaO2 is the reference measurement.” Explain only what is needed: two wavelengths of light, pulsatile arterial signal, empirically calibrated algorithm. Avoid a physics lecture. |
| 2:30–4:00 | **Result** | Show 11.7% versus 3.6%, then the replication cohort: 17.0% versus 6.2%. Say “nearly threefold in these cohorts,” not “threefold for every device and setting.” |
| 4:00–5:20 | **System map** | Build the chain one node at a time: validation population → hardware/algorithm → patient and perfusion → application/environment → display → threshold/protocol → decision/action. Ask where the “user” begins and ends. Answer: there is no clean boundary. |
| 5:20–6:40 | **Contemporary caveat** | Complicate the easy story. A 2026 prospective ICU cohort found Black race associated with about a 1 percentage-point positive bias, but objective skin-pigmentation measures were not associated. Say: “Race identified a disparity; it did not establish a single mechanism.” |
| 6:40–7:50 | **Use-error reframing** | Move common “operator errors”—motion, cold hand, wrong sensor, placement, ambient light—onto the system map. These are foreseeable use conditions to be detected, prevented or made visible, not moral failures. |
| 7:50–9:00 | **Regulatory redesign** | Show what redesign looks like before the bedside: the FDA’s January 2025 draft proposes ≥150 diversely pigmented participants, ≥3,000 paired SpO2/SaO2 observations, subjective and objective skin-tone measures, and performance across saturation bands. Clearly label this **draft, non-binding, not yet final as of 13 July 2026**. |
| 9:00–10:00 | **Audience redesign / return** | Give eight pods of 5–6 students one system node each. Sixty seconds: “Add one defence that does not depend on a clinician remembering a caveat.” Take four ten-second answers. Close: “The number is not the patient.” |

## System map

Use this as a horizontal build rather than a small all-at-once diagram:

```text
Who was represented in development and calibration?
                ↓
Sensor wavelengths + probe geometry + algorithm + device model
                ↓
Patient: pigmentation, perfusion, temperature, physiology, dyshemoglobin
                ↓
Use conditions: sensor choice, site, fit, motion, nails, ambient light, moisture
                ↓
Signal-quality handling + displayed SpO2 + hidden uncertainty
                ↓
Alert and guideline thresholds + EHR/risk-score ingestion
                ↓
Clinician and patient interpretation: trend, symptoms, examination, context
                ↓
Oxygen / triage / testing / treatment / discharge decision
                ↓
Outcome, incident reporting, procurement feedback and post-market surveillance
```

### Systems-thinking prompts

- Where is uncertainty introduced?
- Where is it suppressed or made invisible?
- Which downstream systems treat SpO2 as if it were ground truth?
- Who gets an opportunity to challenge the number?
- Where would a defence be strongest: acquisition, display, workflow, protocol, procurement or regulation?

## Use-error framing

| Blame-oriented wording | Human-factors reframing |
|---|---|
| “The nurse trusted the monitor.” | The display and protocol gave a precise estimate privileged status over symptoms and other data. |
| “The probe was put on incorrectly.” | Sensor selection, placement and signal adequacy are foreseeable use conditions; the device and workflow should support correct application and make poor signal quality salient. |
| “The patient's hand was cold / moving.” | Perfusion, temperature and motion are properties of the real use environment, not deviations invented by the patient. |
| “Dark skin confuses the device.” | Some studies show racial and pigmentation-related performance disparities, but device model, calibration, perfusion, physiology and measurement methods also matter. The patient is not the defect. |
| “Clinicians should just remember the limitation.” | Memory is a weak safety control. Use labelling, procurement criteria, trend displays, signal-quality cues, escalation rules and confirmatory testing pathways. |

## Audience interaction for 44–45 students

### Option A — one-minute commitment test

Display **SpO2 94%** and ask everyone to vote simultaneously with a hand:

- fist: reassured;
- one finger: uncertain / seek more context;
- two fingers: escalate or confirm now.

After the reveal, ask: “What information would have changed your vote?” Capture answers under **patient**, **device**, **environment**, **workflow**. This prevents the discussion from collapsing into “order an ABG for everyone.”

### Option B — eight-node redesign sprint

Assign the eight pods one node each: validation, procurement, sensor, application, display, protocol, clinical assessment, feedback. Prompt:

> “You may change only your node. Design one control that makes a use error less likely or less harmful without adding a generic warning banner.”

Strong answers include procurement evidence by device model and pigmentation; signal-quality indicators that are visually coupled to the number; trend plus range rather than isolated value; a protocol for discordant signs/symptoms; and a path to blood-gas confirmation when clinically warranted.

## Exact defensible numbers

| Claim | Exact evidence | Defensible phrasing | Necessary caveat |
|---|---|---|---|
| Landmark occult-hypoxemia disparity | University of Michigan: 88/749 Black-patient measurements, **11.7%** (95% CI 8.5–16.0), versus 99/2,778 White-patient measurements, **3.6%** (95% CI 2.7–4.7), when SpO2 was 92–96% and SaO2 <88%. Multicentre ICU cohort: 160/939, **17.0%**, versus 546/8,795, **6.2%**. | “In two retrospective cohorts, occult hypoxemia occurred nearly three times as often in measurements from self-identified Black patients as White patients.” | Measurement-level retrospective analysis; race was a proxy, not an objective pigmentation measure; device and clinical context vary. |
| COVID-19 treatment-threshold study | 7,126 patients; 1,216 had 32,282 concurrent pairs. At least one occult-hypoxemia episode occurred in **30.2% Asian, 28.5% Black, 29.8% non-Black Hispanic, 17.2% White** patients. In the modelled threshold analysis, Black patients had a **29% lower hazard** of treatment-eligibility recognition (HR 0.71, 95% CI 0.63–0.80); among those ultimately recognized, median delay was **1.0 hour** longer (95% CI 0.23–1.9). | “In this COVID-19 cohort, differential oximeter error was associated with delayed or unrecognized eligibility under oxygen-threshold rules.” | Retrospective; treatment eligibility was modelled from predicted SaO2, not a randomized causal estimate; COVID-era thresholds should not be generalized to every disease or current protocol. |
| Health Canada performance context | Health Canada says regulated pulse oximeters typically read within **2%–4%** of ABG, while noting that error can be clinically significant and readings can be less accurate with dark skin and at lower true saturation. | “A few percentage points can matter when a protocol uses a hard cutoff.” | “Typically” is not a guarantee for every device, patient or condition; the page provides general guidance, not a device comparison. |
| Current prospective nuance | 2026 Emory ICU cohort: **198 adults, 709 paired measurements**. Black race associated with bias estimate **+1.032 percentage points** (95% CI 0.200–1.862; P=.02); objective ITA and melanin index were not significantly associated. Hidden hypoxemia: **4.7%** of pairs in the darkly pigmented group versus **3.8%** in the lighter group; Black versus non-Black **4.9% vs 1.4%**, P=.06. | “The disparity remains real enough to design for, but skin pigmentation alone did not explain it in this cohort.” | One health system, one sensor family, high SpO2 distribution, retrospective extraction of pairs up to five minutes apart, perfusion index unavailable; not proof that pigmentation never matters. |
| FDA draft validation proposal | January 2025 draft: **150 or more participants**; **3,000 or more** paired observations; ≥20 pairs per participant spanning SaO2 70–100%; ≥25% of participants in each of three Monk Skin Tone bands; objective ITA plus subjective MST measures. | “The proposed redesign changes who is represented and how performance is demonstrated before market entry.” | Still labelled draft and non-binding by FDA as of 13 July 2026; do not describe it as current mandatory law. |

## What not to overclaim

- Do not say **“pulse oximeters are racist”** as a complete causal explanation. Say that multiple studies found racial disparities in measurement and clinical recognition, while mechanisms and performance vary by device, setting, perfusion, physiology and how pigmentation is measured.
- Do not equate self-identified race with skin pigmentation. Race is a social category and an imperfect proxy; people within a racial category have heterogeneous pigmentation.
- Do not say melanin is the only proven mechanism. The April 2026 prospective cohort found a race association but no association with its objective pigmentation measures, and identified unresolved perfusion and measurement limitations.
- Do not imply that pulse oximetry is useless. Health Canada and FDA continue to regard it as clinically useful when interpreted with trends, symptoms and other information.
- Do not propose a race-based correction factor. A single adjustment can hide variance and reify race as biology.
- Do not say every discordant reading requires an ABG. Health Canada recommends considering blood gas when signs conflict or doubt exists; clinical protocols and invasiveness still matter.
- Do not infer mortality causation from the COVID-19 recognition study. Its authors used “may contribute,” and explicitly noted that downstream consequences required further study.
- Do not use the 2020 11.7% versus 3.6% result as a universal current-device prevalence estimate.

## Altitude Blue slide and image suggestions

1. **Axiom / hook — “94%”**  
   Queen's Blue stage; 180–220 px white number; no frame. Hard cut to “SpO2 94% / SaO2 <88%.” Keep all explanation spoken.

2. **Observation — the threshold trap**  
   Full-field native diagram of a monitor number feeding a protocol threshold. Use Queen's Gold only on the exact cutoff; Queen's Red appears only when the reference SaO2 is revealed. This should be an original vector diagram, not a stock monitor photo.

3. **Original editorial image — optical estimate**  
   Generate a clean, medically neutral cross-sectional illustration of a fingertip in a pulse-oximeter clip with red and infrared light paths, shown across a continuous range of skin pigmentation. No faces, no brand, no clinical reading. Credit: “Conceptual illustration generated for HQRS 846; not to optical scale.” Never use it as empirical evidence.

4. **Result — 11.7 / 3.6**  
   Rebuild the comparison at projection scale rather than screenshotting the NEJM figure. Use identical denominators in a small footer. Attribution must remain visible. Follow immediately with a slide carrying the multicentre 17.0 / 6.2 replication at the same scale.

5. **Evidence complication — “Race found the disparity. It did not explain the mechanism.”**  
   Warm-paper axiom slide, then a dedicated result slide for the 2026 cohort: Black race +1.032 points; ITA/melanin not significant. This protects against a simplistic “one pigment, one fix” narrative.

6. **Observation — official warning**  
   If an authentic web artifact is useful, dedicate a slide to the Health Canada “Pulse oximeters: For health care providers” page, enlarged so the back row can read the two key paragraphs. Do not embed it as a browser card. Add page title, date (30 Dec 2022) and URL in the observation footer.

7. **System map**  
   Build one node per hard cut across consecutive slides. Do not show the entire map in 18-point type. The final overview may show all nodes, but the spoken focus stays on one node at a time.

8. **Return — “The number is not the patient.”**  
   Queen's Blue, one line, no logo beyond a small unaltered Queen's mark. Pause before advancing.

## Speaker notes

- “This is not a story about a bad nurse or a bad patient. It is a story about a measurement system whose uncertainty is easy to ignore.”
- “SpO2 and SaO2 are not interchangeable labels. One is a non-invasive estimate; the other is the arterial reference used in these studies.”
- “Notice how a one- or two-point average bias can sound small while becoming consequential at a hard treatment threshold.”
- “The same visual precision is carried into the EHR, early-warning scores and protocols. The estimate becomes more authoritative as it travels.”
- “Race helped investigators see the inequity. Race alone does not tell us whether the pathway is pigmentation, perfusion, illness, device calibration, structural inequity or some interaction.”
- “A warning in a manual is not a strong control. What would we change so the next person does not need heroic memory?”
- “Health Canada’s practical advice is not ‘ignore the device.’ It is to use trends and other clinical information, and take a precautionary approach when signs and readings conflict.”

## Primary and authoritative sources

1. **Sjoding MW, Dickson RP, Iwashyna TJ, Gay SE, Valley TS. “Racial Bias in Pulse Oximetry Measurement.”** *New England Journal of Medicine*. Published 16 Dec 2020;383:2477–2478.  
   Article: [https://www.nejm.org/doi/full/10.1056/NEJMc2029240](https://www.nejm.org/doi/full/10.1056/NEJMc2029240)  
   DOI: [https://doi.org/10.1056/NEJMc2029240](https://doi.org/10.1056/NEJMc2029240)  
   Supports the 11.7%/3.6% and 17.0%/6.2% results and the study definition of occult hypoxemia. The article notes that the clinical significance was not fully known.

2. **Fawzy A, Wu TD, Wang K, et al. “Racial and Ethnic Discrepancy in Pulse Oximetry and Delayed Identification of Treatment Eligibility Among Patients With COVID-19.”** *JAMA Internal Medicine*. Published online 31 May 2022;182(7):730–738.  
   Full text: [https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2792653](https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2792653)  
   DOI: [https://doi.org/10.1001/jamainternmed.2022.1906](https://doi.org/10.1001/jamainternmed.2022.1906)  
   Supports the cohort sizes, occult-hypoxemia proportions, modelled recognition hazards and one-hour median delay. The article was corrected 22 Aug 2022 for errors in Figure 3; use the corrected version linked above.

3. **Health Canada. “Pulse oximeters: For health care providers.”** Page date 30 Dec 2022.  
   [https://www.canada.ca/en/health-canada/services/drugs-medical-devices/pulse-oximeters/health-care-providers.html](https://www.canada.ca/en/health-canada/services/drugs-medical-devices/pulse-oximeters/health-care-providers.html)  
   Authoritative Canadian guidance on ABG as reference, typical regulated-device accuracy, dark-skin and low-saturation limitations, real-world factors, trends and precautionary management when signs conflict.

4. **US Food and Drug Administration. “Pulse Oximeters for Medical Purposes—Non-Clinical and Clinical Performance Testing, Labeling, and Premarket Submission Recommendations.”** Draft guidance, Jan 2025.  
   Landing page: [https://www.fda.gov/regulatory-information/search-fda-guidance-documents/pulse-oximeters-medical-purposes-non-clinical-and-clinical-performance-testing-labeling-and](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/pulse-oximeters-medical-purposes-non-clinical-and-clinical-performance-testing-labeling-and)  
   PDF: [https://www.fda.gov/media/184896/download](https://www.fda.gov/media/184896/download)  
   Supports the proposed sample, paired-observation and pigmentation-measure requirements. The live FDA page continued to label it “Draft—Not for implementation” on 13 Jul 2026.

5. **Yang P, Felzer JR, Tovar S, et al. “The Association of Skin Pigmentation With Pulse Oximetry Bias in Adult Patients in the ICU.”** *CHEST Critical Care*. Available online 29 Apr 2026;100277, in-press uncorrected proof when checked.  
   Article: [https://www.sciencedirect.com/science/article/pii/S2949788426000444](https://www.sciencedirect.com/science/article/pii/S2949788426000444)  
   DOI: [https://doi.org/10.1016/j.chstcc.2026.100277](https://doi.org/10.1016/j.chstcc.2026.100277)  
   Supports the 198-patient/709-pair prospective cohort, race association, absence of an ITA/melanin association and stated limitations. Recheck the final paginated version before a public 2027 reuse because the accessed article was an uncorrected proof.

6. **Travers AB, Terry CR, Merrell WP, et al. “Investigation of Skin Pigmentation Effect on Performance of Pulse Oximetry: Feasibility of a Study Examining the Effect of Skin Pigment on Pulse Oximetry.”** *CHEST Critical Care*. Dec 2025;3(4):100209.  
   [https://www.sciencedirect.com/science/article/pii/S2949788425000826](https://www.sciencedirect.com/science/article/pii/S2949788425000826)  
   DOI: [https://doi.org/10.1016/j.chstcc.2025.100209](https://doi.org/10.1016/j.chstcc.2025.100209)  
   Useful optional caveat: a feasibility sample of 50 patients/80 valid pairs found no occult events and no significant light/dark difference; it was designed to test feasibility, not settle the clinical question.

---

# Brief 2 — Corridor care: when “temporary” becomes a care system

<figure class="source-plate">
  <img src="../prototypes/assets/source-images/forensic/hssib-temporary-care-corridor-trolleys.jpg" alt="HSSIB photograph of patient trolleys in a hospital corridor used as a temporary care environment">
  <figcaption><strong>Primary-source observation:</strong> HSSIB, <em>Patient care in temporary care environments</em>, 8 January 2026, Figure 1. The image documents the setting; it does not prove a particular patient outcome.</figcaption>
</figure>

## Intended change in the audience

Students should leave seeing corridor care as a whole-system capacity and design problem—not an emergency-department staff failure—and understand that immediate harm reduction and long-term elimination of the need for temporary spaces are simultaneous responsibilities.

## One-sentence teaching claim

> A corridor does not become a care environment when a stretcher arrives; it becomes an underdesigned care system when the bed, staff, information, medication, monitoring, emergency response, privacy and upstream flow do not arrive with it.

## 90-second hook — the 44-hour corridor

### Visual sequence

1. Queen's Blue field: **52 hours in the ED**.
2. Hard cut: **44 hours in a corridor**.
3. Hard cut: **18 time-critical doses due**.
4. Reveal three blocks: **7 missed / 3 late / 8 on time**.
5. Ask: **“Who failed?”** Hold the silence.
6. Replace the question with the system conditions: no defined responsibility; no dedicated ED pharmacy support; no secure medication storage; e-prescribing outage and paper/electronic split; inaccessible neurology letters; out-of-hours information gap; contradictory records; no medication trolley in the corridor.

### Suggested spoken script

“An 85-year-old man with Parkinson’s spent 52 hours in an emergency department—44 of them in a corridor. Eighteen doses of time-critical medication were due. Seven were not given, three were late, and only eight arrived on time. Who failed? Before we answer, add the rest of the system: no defined owner for identifying and prescribing time-critical medication; no dedicated ED pharmacy support; no secure storage beside the patient; an electronic prescribing outage; paper and electronic charts; specialist letters not available; and no medication trolley in the corridor. The word ‘missed’ makes this sound like one person's lapse. The investigation describes a system that repeatedly made the right action difficult.”

**Attribution on slide:** Health Services Safety Investigations Body, *Medication not given: administration of time critical medication in the emergency department*, published 5 Dec 2024. [Official report](https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/investigation-report/).

**Causation guardrail:** The patient died four weeks after transfer to a ward; the death certificate included bronchopneumonia, Parkinson’s and frailty. The report does **not** establish that corridor care or the missed medication caused his death. Do not imply that it does.

## Ten-minute teaching arc

| Time | Slide/job | Teaching action and speaker direction |
|---|---|---|
| 0:00–1:30 | **Hook / case timeline** | Run the 52/44/18/7/3/8 sequence. Ask “Who failed?” before showing system conditions. |
| 1:30–2:30 | **Definition / full-field case** | Use HSSIB’s definition: spaces not designed, staffed or equipped for care—corridors, waiting rooms, chairs on wards, ambulances outside EDs and other non-inpatient spaces. Emphasize that “temporary” describes organisational intent, not necessarily patient duration. |
| 2:30–4:00 | **System map** | Build the care pathway: community/primary care → ambulance/ED → diagnostics/consults → inpatient bed → discharge/community/social care. Show the corridor as the visible overflow created by constraints across the entire path. |
| 4:00–5:20 | **Scale / result** | UK snapshot: across five March 2025 snapshots in 165 EDs, 17.7% (n=10,042 patient observations) were in escalation areas; 54.5–61.1% of those were in non-clinical areas such as corridors. Then localize: Canada recorded 16.1 million unscheduled ED visits in 2024–25; 90% of admitted-patient ED visits ended within 48.5 hours. Say explicitly that CIHI does not identify corridor placement. |
| 5:20–6:50 | **Risk trade-off** | HSSIB found staff were often making a “best worse” choice: corridor, waiting unseen, remaining in an ambulance, or an ambulance unavailable for a community emergency. Avoid the false binary “corridor bad / room good”; the system is distributing risk. |
| 6:50–8:10 | **Use-error analysis** | Take three apparent errors from the case—late medication, poor monitoring, loss of privacy—and trace the missing environmental and organisational supports. Include the paradox that leaders may resist adding call bells or sockets for fear of normalizing corridor care, even when the spaces are already used. |
| 8:10–9:20 | **Audience redesign sprint** | Eight pods, each with one domain: monitoring, medication, emergency response, staffing, information, dignity, patient selection, upstream flow. Prompt below. Ask for four ten-second defences. |
| 9:20–10:00 | **Return / dual duty** | End with two simultaneous obligations: **reduce harm tonight** and **reduce the need tomorrow**. “Designing a safer temporary space is not permission to normalize it.” |

## System map

Build this as a patient-flow line with constraints appearing above and safety consequences below:

```text
PRIMARY / COMMUNITY CARE
access, prevention, home support
        ↓
AMBULANCE + ED ARRIVAL
demand, handover, triage, initial assessment
        ↓
ED CARE
staff, cubicles, diagnostics, specialty opinions, medications
        ↓
INPATIENT BED
bed availability, cleaning, staffing, specialty capacity
        ↓
DISCHARGE PATHWAY
pharmacy, transport, rehab, long-term care, home/community/social care

When flow < demand, overflow appears in a temporary care environment.

The temporary environment must still carry:
identity + ownership + observations + medication + equipment + call system
+ privacy + hydration/toileting + deterioration response + handover + duration tracking
```

### Human Tech Ladder version

- **Political:** funding, bed and community-care capacity, ambulance handover policy, regulatory tolerance.
- **Organisational:** escalation rules, ownership, exclusion criteria, staffing deployment, pharmacy and specialty availability, discharge coordination.
- **Team:** handover, nurse supervisor role, who owns observations and time-critical medication, visibility of corridor patients.
- **Psychological/information:** location coding, overdue-observation alerts, medication reconciliation, patient status displays, competing goals.
- **Physical:** line of sight, call bells, oxygen/suction, power, medication storage, computer access, width, light, noise, toilets and privacy.

The ladder makes the core point: a staff member at the physical end cannot repair political and organisational mismatches through vigilance alone.

## Use-error framing

| Blame-oriented wording | Human-factors reframing |
|---|---|
| “The nurse forgot the medication.” | No dedicated role owned identification/prescribing; the corridor lacked a medication trolley and secure storage; staff had to leave patients to obtain medicines; digital and paper records split during an outage. |
| “The patient did not call for help.” | Many temporary spaces had no emergency call bell; portable bells could go missing; visibility and response routes were variable. |
| “Observations were overdue.” | Temporary beds may be outside the normal location model and line of sight. Safer sites extended digital observation boards to include temporary spaces and made overdue observations salient. |
| “The clinician discussed private information in public.” | A corridor may offer no private space. HSSIB heard of difficult diagnoses being discussed where there was nowhere else. The environment creates a predictable confidentiality compromise. |
| “The family should have managed the home medication.” | The patient and family were sources of expertise, but self-administration had no supported process and the environment had no secure storage. Patient heroics are not a medication system. |
| “ED staff should stop using corridors.” | The corridor is a downstream manifestation of demand, inpatient capacity, diagnostics, discharge and community/social-care constraints. Local staff are balancing risks they do not control alone. |

## Audience interaction for 44–45 students

### Eight-pod “no new beds tonight” sprint

Assign one domain to each pod of 5–6 students:

1. monitoring and deterioration;
2. time-critical medication;
3. emergency response / call system;
4. staffing, competence and supervision;
5. information, handover and location tracking;
6. dignity, privacy, nutrition and toileting;
7. patient selection and exclusion criteria;
8. patient flow across the hospital and community.

Prompt:

> “It is 19:00. You cannot create a new inpatient bed tonight. Design one safeguard that reduces immediate risk without pretending the corridor is acceptable. Name the owner, trigger and failure signal.”

After 60–75 seconds, take four ten-second reports. Then ask the whole room:

> “Which of these controls reduces harm tonight? Which reduces the need for the corridor tomorrow?”

This preserves the ethical tension. Students should not “solve” corridor care by decorating the corridor, nor reject practical mitigations because they fear normalization.

### Optional provocative vote

Display: **“Installing call bells normalizes corridor care.”** Ask agree/disagree. Then reveal HSSIB’s observation that some leaders resisted physical adaptation for exactly this reason, while better-adapted spaces appeared calmer and more organised. Debrief as a safety paradox: refusing a control does not eliminate the exposure.

## Exact defensible numbers

| Claim | Exact evidence | Defensible phrasing | Necessary caveat |
|---|---|---|---|
| HSSIB medication event | Patient age **85**; **52 hours** in ED, **44** in a corridor; **18** doses due, **7 missed**, **3 late**, **8 on time**. | “The event shows how corridor conditions interacted with roles, information, e-prescribing, pharmacy access and storage.” | Single investigated event. Death four weeks later is not proof of causal harm from the corridor or missed doses. |
| HSSIB temporary-environment investigation | Direct observation in **7 hospitals** Aug–Oct 2025; evidence from a further **6 hospitals** Nov–Dec; remote discussions with staff at **4 other hospitals**. Observed nursing ratios ranged **1:4 to 1:6** excluding healthcare assistants. In some sites a nurse supervisor oversaw up to **24 extra care spaces**. | “The investigation documents recurring design risks and local adaptations across multiple English hospitals.” | It was a rapid, bounded investigation, not a representative prevalence study; HSSIB warns that definitions and reporting are inconsistent. Do not add the hospital counts together as a national sample estimate without explaining the differing evidence routes. |
| Duration in temporary space | HSSIB was told some temporary stays were **up to 1 hour**, but where acuity/exclusion constraints prevented movement patients could remain **a few days**. | “Temporary intent can become multi-day exposure.” | Qualitative report from participating hospitals, not a measured duration distribution. |
| UK point prevalence | Prospective cross-sectional study in **165 UK EDs**, five snapshots in March 2025. **17.7% (n=10,042)** of ED patient observations were in escalation areas. Of escalation-area patients, **54.5%–61.1%** were in non-clinical areas such as corridors. ED occupancy ranged from **1.0 to 2.4 patients per cubicle** across snapshots. No resuscitation cubicle was available at **10.5%–26.2%** of sites. | “At the sampled times, almost one in five ED patient observations occurred in an escalation area.” | Point-prevalence snapshots, not annual incidence or duration; the same patient may be present at more than one snapshot; UK findings do not supply a Canadian prevalence. It did not establish patient-level causal outcomes. |
| Canadian pressure context | CIHI final 2024–25 data: **more than 16.1 million** unscheduled ED visits. For admitted patients, **90%** of ED visits were completed within **48.5 hours**; for discharged patients, **90%** within **8.0 hours**. About **12%** of visits resulted in admission; half of admitted patients waited less than **16 hours** for transfer, while one in ten waited almost two days or more. | “Long ED stays for admitted patients show the Canadian flow pressure in which temporary spaces can emerge.” | CIHI measures ED visit duration, not whether a patient was in a corridor. Do not label 48.5 hours as “corridor time.” Reporting participation and provincial coverage should be checked in the CIHI tables for any local comparison. |

## HSSIB risk and adaptation inventory

This can become a back-row-readable sequence, one risk per slide.

| System property | Risk in temporary environment | Adaptations HSSIB observed or suggested |
|---|---|---|
| Visibility and monitoring | Deterioration or falls can be missed when patients are outside line of sight or not represented in normal bed/observation systems. | Visible locations; electronic boards showing due/overdue observations; temporary locations added to digital observation systems; nominated supervisor. |
| Emergency response | No fixed call bell; unclear location; narrow or obstructed routes; compromised response to collapse or fire. | Fixed emergency call systems, voice communication devices, portable patient bells, multidisciplinary fire/estates/clinical risk assessment. |
| Equipment | No piped oxygen or suction, insufficient sockets, equipment distant. | Nearby emergency equipment, mini nursing stations, carefully installed sockets/oxygen/suction where justified. |
| Medication | No secure storage or trolley; staff leave the area to source medication; ePMA access and self-administration process do not fit the space. | Defined role, ED pharmacy support, time-critical-medication prompts, supported self-administration and documentation, local stock/access redesign. |
| Staffing and supervision | Extra spaces silently expand workload; redeployed staff may lack ED familiarity; no one sees the whole temporary area. | Ratios based on number and acuity; consistent experienced staff; familiarization; supervisor who is not absorbed in direct care. |
| Dignity/basic needs | No privacy for history, diagnosis or personal care; noise/light interfere with sleep; food, water and toileting can be missed. | Private space for conversations and invasive/personal care; active patient engagement; duration tracking; quieter areas where possible. |
| Patient selection | Frail, unassessed, mental-health or deteriorating patients can enter a space that cannot support their needs. | Explicit inclusion/exclusion criteria, multidisciplinary placement decisions, escalation and frequent reassessment. |
| Whole-system flow | Local optimization can shift risk to ambulances, wards, rehab, community care or other patients. | Real-time flow data; hospital-wide governance; coordinated diagnostics, specialties, cleaning, pharmacy, allied health, discharge and community/social care. |

## What not to overclaim

- Do not say corridor care caused the HSSIB patient’s death. The report does not establish that causal chain.
- Do not call the 17.7% UK snapshot a Canadian prevalence, annual rate or individual risk.
- Do not treat every long Canadian ED stay as corridor care. CIHI does not report location in these figures.
- Do not say temporary spaces are always less observable than a regular bed. HSSIB noted that some visible temporary locations supported monitoring better than some permanent spaces, although privacy and dignity suffered.
- Do not say staff ratios of 1:4–1:6 are a universal safe standard. They are observations from visited sites, and suitability depends on acuity, competence and support.
- Do not claim that adding sockets, call bells or monitoring “solves” corridor care. These are immediate risk mitigations; they can also create knock-on risk or reduce other services, such as when a rehabilitation gym becomes a ward.
- Do not blame emergency-department demand only on “inappropriate patients.” HSSIB and CIHI locate delay across primary/community care, diagnostics, inpatient capacity, discharge and social care.
- Do not imply that refusing to adapt a used space prevents normalization. HSSIB observed a real tension: some hospitals resisted adaptation, but the spaces were still regularly used.
- Do not portray staff workarounds as deviance. Many are resilience strategies under mismatch; study which ones preserve safety and which transfer hidden risk.

## Altitude Blue slide and image suggestions

1. **Case timeline — 52 / 44 / 18 / 7 / 3 / 8**  
   Six consecutive slides, same layout and fixed baseline. Queen's Gold marks “due/on time”; Queen's Red appears only for “missed/late.” No patient photograph and no fictional face.

2. **Full-field observation — the care space that is missing its system**  
   Commission an original editorial illustration: a long hospital corridor with a stretcher, but show the absent infrastructure as negative-space outlines—call bell, oxygen/suction, secure medication locker, monitor, privacy screen, computer and handwashing point. No logos, no identifiable hospital and no patient face. Credit it as a conceptual generated illustration, not documentary evidence.

3. **Object theatre — a call bell**  
   One near-life-size call bell on Queen's Blue, followed by an empty wall plate. Spoken line: “We call this patient failure to ask for help—until we notice there is nothing to press.” Use a generic original photograph or generated object, not a branded product.

4. **System map — the corridor is downstream**  
   Build primary/community → ambulance/ED → diagnostics/consults → inpatient → discharge/community one slide at a time. On the final overview, place “corridor” below the bottleneck as the visible symptom, not the root cause.

5. **Result — 17.7%**  
   Queen's Blue field with “17.7%” at 180 px and a single line: “of ED patient observations across five UK snapshots were in escalation areas.” Footer carries “165 EDs · March 2025 · TERN, EMJ 2026 · cross-sectional.” Follow with a dedicated caveat slide: “A snapshot shows scale. It does not prove harm.”

6. **Canadian context — 48.5 hours**  
   Warm-paper result slide: “90% of admitted-patient ED visits ended within 48.5 h.” The next slide must say: “CIHI measured time—not corridor location.” This two-slide pairing prevents an attractive but false visual inference.

7. **Before / after evidence — underdesigned versus risk-mitigated space**  
   Two matched, full-field plan-view diagrams at identical scale. Before: stretcher only. After: ownership, line of sight, call system, equipment, monitoring, privacy route and escalation trigger. Label the second **“harm reduction, not normalization.”**

8. **Return — two duties**  
   Split field without cards: left warm paper, **Reduce harm tonight**; right Queen's Blue, **Reduce the need tomorrow**. Gold route crosses both. This is the core synthesis.

9. **Authentic-source option**  
   The HSSIB January 2026 report contains photographs/figures of temporary care environments and adaptations. If used in classroom slides, show each on a dedicated full-field observation slide with report title, date and URL. Confirm HSSIB image-reuse terms before public web publication; otherwise use the original conceptual illustration above.

## Speaker notes

- “Calling it a hallway makes it sound like a location problem. Calling it a temporary care environment lets us ask what care functions the environment must support.”
- “The patient did not enter a blank corridor. He entered a system with staffing, records, medication, policies, opening hours and missing infrastructure.”
- “Seven missed doses sounds like seven moments of inattention. The investigation found repeated conditions that made timely medication hard: ownership, storage, access, digital outage and information continuity.”
- “Staff in these reports did not want corridor care. They were often choosing the ‘best worse’ option among risks distributed across the hospital, ambulance service and community.”
- “There is a trap in saying ‘do not normalize it’ if that becomes a reason not to install an emergency call bell in a space already used every day.”
- “But there is an equal trap in making the corridor efficient enough that leadership stops seeing the upstream failure. We have two duties at once.”
- “Notice that the corridor patient may be outside the digital map as well as the floor plan. If the system does not know where the patient is, it cannot reliably know when observations, medication or escalation are due.”
- “The visible user is the nurse. The effective system includes community support, ambulance response, diagnostics, cleaning, pharmacy, allied health, inpatient beds and discharge services.”

## Primary and authoritative sources

1. **Health Services Safety Investigations Body. “Medication not given: administration of time critical medication in the emergency department.”** Published 5 Dec 2024.  
   [https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/investigation-report/](https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/investigation-report/)  
   Primary national patient-safety investigation supporting the 85-year-old patient case, 52/44-hour duration, medication counts and interacting system factors. The report uses a CARe/resilient-healthcare approach and explicitly avoids reducing the event to individual error.

2. **Health Services Safety Investigations Body. “Patient care in temporary care environments.”** Published 8 Jan 2026; investigation conducted Aug–Dec 2025.  
   HTML: [https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/](https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/)  
   PDF: [https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/pdf/](https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/pdf/)  
   Primary safety-investigation evidence for the definition, risks, hospital sample, observed adaptations, data gaps, staff experience and safety observation O/2026/080.

3. **Trainee Emergency Research Network (TERN). “Understanding corridor and escalation area care in 165 UK emergency departments: a multicentre cross-sectional snapshot study.”** *Emergency Medicine Journal*. Epub 9 Dec 2025; 2026;43:72–80.  
   DOI: [https://doi.org/10.1136/emermed-2025-215301](https://doi.org/10.1136/emermed-2025-215301)  
   University of Bristol record with abstract: [https://research-information.bris.ac.uk/en/publications/4c023266-1592-4eef-bc03-bc2a88e982ba/](https://research-information.bris.ac.uk/en/publications/4c023266-1592-4eef-bc03-bc2a88e982ba/)  
   Peer-reviewed primary prevalence study supporting the 165-site, five-snapshot and 17.7% findings. Keep the cross-sectional limitations visible.

4. **Canadian Institute for Health Information. “NACRS emergency department visits and lengths of stay.”** Updated/released 13 Apr 2026; complete-year data Apr 2024–Mar 2025.  
   [https://www.cihi.ca/en/nacrs-emergency-department-visits-and-lengths-of-stay](https://www.cihi.ca/en/nacrs-emergency-department-visits-and-lengths-of-stay)  
   Authoritative Canadian source for >16.1 million unscheduled ED visits and the 48.5-hour/8.0-hour 90th-percentile comparison.

5. **Canadian Institute for Health Information. “Longer ED stays reflect growing patient complexity and delays in admission.”** Current system-perspective analysis checked 13 Jul 2026.  
   [https://www.cihi.ca/en/emergency-department-wait-times-in-canada-insights-from-a-health-system-perspective/longer-ed-stays-reflect-growing-patient-complexity-and-delays-in-admission](https://www.cihi.ca/en/emergency-department-wait-times-in-canada-insights-from-a-health-system-perspective/longer-ed-stays-reflect-growing-patient-complexity-and-delays-in-admission)  
   Supports the 12% admission share, median transfer wait below 16 hours, one-in-ten near-two-day wait and patient-flow framing. It includes a patient partner’s account of hallway admission, but obtain permission/check CIHI reuse terms before reproducing the quotation beyond a short attributed classroom excerpt.

## Suggested final bridge between the two cases

Use one sentence if these modules appear in the same lecture:

> “In pulse oximetry, uncertainty disappears inside a number; in corridor care, infrastructure disappears around a patient. Human factors makes both absences visible.”

Then return to the lecture's governing axiom:

> **Humans are fallible. We will err. Design the system so ordinary error is visible, recoverable and less harmful.**
