# Research brief: sepsis AI across health systems

Prepared for Joseph Cafazzo and HQRS 846. Evidence checked 13 July 2026. This is a teaching brief, not clinical, procurement, or operational guidance. It is written for a mixed cohort of approximately 44–45 graduate health professionals and uses a systems-thinking frame: **a prediction model is a component; the intervention is the whole work system built around it**.

---

# Brief 7 — Same product family, four local sepsis-prediction systems

<figure class="source-plate">
  <img src="../prototypes/assets/source-images/theatre/esm-v2-figure-1-performance.jpg" alt="JAMA Network Open Figure 1 showing encounter-level Epic Sepsis Model version 2 performance across four US health systems">
  <figcaption><strong>Primary-source observation:</strong> Wong et al., <em>JAMA Network Open</em>, 2026, Figure 1. The four curves are health-system results, not four runs of one frozen model. Each site locally fine-tuned ESM v2 before implementation. Article and figure are CC BY.</figcaption>
</figure>

## Decision verdict

> **INCLUDE — high priority if the introductory lecture will contain one contemporary AI case.**

This is the strongest proposed case for teaching that a clinical AI product is not a self-contained intervention. It makes local data, fine-tuning, prevalence, threshold, time horizon, laboratory workflow, alert suppression, routing, team response and evaluation visible as one sociotechnical system.

It should **replace or substantially compress the current Apple Watch/atrial-fibrillation sequence on source pages 53–59** if the overall lecture duration must remain unchanged. It should not simply be added as a second seven-slide AI sequence.

### Include it when

- the class needs to distinguish model performance from implementation performance;
- local validation, operating thresholds or alert burden will recur later in the course;
- you want one quantitative example in which a respectable AUROC does not settle whether a system will be useful;
- learners may purchase, govern, build, deploy or respond to predictive systems.

### Park it when

- a later session already provides a full clinical-AI implementation case;
- the introductory lecture cannot spare at least eight minutes for denominator and threshold discipline;
- the intended lesson is whether an AI intervention improved mortality, timeliness or patient experience—this study did not answer that question;
- you retain the full Apple Watch sequence and another alerting case, making the opening feel like an AI lecture rather than an introduction to human factors.

## The unique teaching job

The case earns its place by installing one sentence:

> **A model produces a score. A health system produces an intervention.**

It is not an “AI failed” story. ESM v2 discriminated better than ESM v1 at all four sites, and encounter-level AUROC ranged from 0.82 to 0.92. It is not an “AI worked” story either. Positive predictive value remained low, alert burden was high, performance varied materially, and the study was not designed to test clinical outcomes.

The useful middle is sociotechnical: all four systems used the ESM v2 product family, but each locally fine-tuned the model using its own historical inpatient data. Their patient populations, sepsis prevalence, care settings, early laboratory availability, score distributions and analytically matched thresholds differed. The potential downstream work was therefore locally conditioned even before anyone chose an interface, recipient, escalation pathway or staffing response.

### What this case cannot teach by itself

- It does not show that an alert caused a clinician to act, dismiss, delay or override.
- It does not compare alternative interface designs or alert recipients.
- It does not measure actual interruptive alert workload handled by clinicians.
- It does not establish a mortality, morbidity, antibiotic-timing or length-of-stay benefit.
- It does not establish performance in Canadian hospitals.
- It does not evaluate one identical frozen model at four sites; every site fine-tuned ESM v2 locally.

## Naming correction before teaching

Do **not** call this a “four-hospital study.” It included **four US health systems**:

- University of Michigan: one large academic tertiary-care centre;
- Oregon Health & Science University: one large academic tertiary-care centre;
- Emory Healthcare: six affiliated academic and community hospitals;
- MetroHealth: one large safety-net hospital.

The memorable and accurate line is:

> **One product family. Four health systems. Four locally fine-tuned models.**

## 90-second hook

### On screen

Start with four identical labels across the width of the screen:

```text
ESM v2        ESM v2        ESM v2        ESM v2
```

Say: “All four health systems implemented the same product family. The investigators chose one common operating target: 60% encounter-level sensitivity.”

Then reveal only the four score thresholds:

```text
  14            29            37            35
```

Pause for five seconds. Ask:

> “If the target sensitivity is the same, why are the thresholds so different?”

Take two rapid answers. Then reveal:

> **The product name stayed the same. The model, population and work system did not.**

### Spoken hook

“There is no single number called ‘the performance of the Epic Sepsis Model’ that tells a hospital what will happen after installation. Each site fine-tuned the model locally. Each treated a different population. One site's threshold for 60% sensitivity was 14; another's was 37. The threshold is not a technical footnote. It decides which patients cross the line, how much work is created, and what the system must do next.”

### Hook accuracy note

The thresholds **14, 29, 37 and 35** were analytic site-specific operating points selected by the researchers to match 60% encounter-level sensitivity. Do not imply that these were necessarily the four production thresholds shown to clinicians or that the sites used identical alert workflows.

## Eight-to-twelve-minute teaching arc

| Time | Move | What to show | What to say or ask |
|---|---|---|---|
| 0:00–1:30 | Threshold hook | Four identical `ESM v2` labels, then **14 · 29 · 37 · 35** | “Same product family and same sensitivity target. Why four thresholds?” |
| 1:30–2:30 | Correct the slogan | `SAME PRODUCT FAMILY ≠ SAME MODEL` | Every system locally fine-tuned ESM v2 using site-specific historical adult-inpatient data. Say “four health systems,” not “four hospitals.” |
| 2:30–3:50 | Show the local context | The first comparison table below: setting, encounters, prevalence, ED onset and first-hour CBC exclusions | “The input to an algorithm is not merely a row of data. It is a local care process that determines which data exist, when.” |
| 3:50–5:00 | Separate ranking from usefulness | Encounter AUROC **0.82 · 0.85 · 0.90 · 0.92**, followed by PPV **13% · 26% · 25% · 20%** | AUROC describes discrimination across thresholds. PPV is affected by prevalence and the chosen operating point. Neither specifies who receives an alert or what they can do. |
| 5:00–6:10 | Turn prediction into work | At the 12-hour prediction horizon, NNE **35 · 26 · 22 · 21** | These are analytic prediction-level NNE values, not observed counts of interruptive alerts managed by clinicians. An eight-hour silencing strategy reduced simulated alert volume but could not improve accuracy. |
| 6:10–7:20 | Map the intervention | Build the system map one layer at a time | Ask: “At what point does the algorithm end and the intervention begin?” The practical answer is that safe performance depends on the entire chain. |
| 7:20–9:20 | Nine-table interaction | Four site cards used twice, plus one evidence-auditor table | Each group names one local design decision, one measure and one possible displaced burden. |
| 9:20–10:30 | Debrief | `LOCAL VALIDATION · THRESHOLD · ROUTING · CAPACITY · FEEDBACK` | “Local validation is not an administrative sign-off. It is where a prediction product becomes accountable to a particular population and work system.” |
| 10:30–11:30 | Close with the missing outcome | `GOOD PREDICTION ≠ BETTER OUTCOME` | This was a prospective prognostic evaluation using real-time data after implementation. It did not test whether ESM v2 improved mortality or other patient outcomes. |

The segment can end at 8:30 by taking one table response and omitting the full evidence debrief. Use the 11–12 minute version when learners will later evaluate clinical AI or digital-health procurement.

## Four-health-system comparison

### Local population and data-producing system

| Health system | Study setting | Encounters | Baseline sepsis incidence | Sepsis cases with onset in ED | Sepsis cases excluded because no CBC in first hour |
|---|---|---:|---:|---:|---:|
| University of Michigan | One academic tertiary-care centre | 32,642 | 5.9% | 38.9% | 30.1% |
| Oregon Health & Science University | One academic tertiary-care centre | 36,211 | 7.1% | 44.2% | 15.4% |
| Emory Healthcare | Six academic and community hospitals | 54,420 | 3.7% | 71.5% | 9.8% |
| MetroHealth | One safety-net hospital | 103,818 | 2.2% | 60.3% | 20.0% |

The CBC column is a particularly useful human-factors bridge. Per developer guidance reported in the paper, ESM v2 could not produce an accurate first-hour prediction without an available complete blood count. Laboratory access, ordering, collection, transport and result timing therefore sit inside the prediction system—not outside it.

### Encounter-level operating point

All four thresholds below were chosen analytically to match approximately 60% encounter-level sensitivity.

| Health system | Threshold | AUROC (95% CI) | Specificity (95% CI) | PPV (95% CI) | Median lead time for true-positive encounters, h (IQR) |
|---|---:|---:|---:|---:|---:|
| University of Michigan | 14 | 0.82 (0.81–0.83) | 0.83 (0.83–0.84) | 0.13 (0.13–0.14) | 7.3 (2.7–16.7) |
| Oregon Health & Science University | 29 | 0.85 (0.85–0.86) | 0.88 (0.88–0.89) | 0.26 (0.25–0.27) | 10.3 (1.3–81.4) |
| Emory Healthcare | 37 | 0.90 (0.90–0.91) | 0.94 (0.93–0.94) | 0.25 (0.24–0.26) | 1.9 (0.7–6.6) |
| MetroHealth | 35 | 0.92 (0.92–0.93) | 0.96 (0.96–0.96) | 0.20 (0.19–0.21) | 4.2 (0.9–27.4) |

### Prediction-level result at a 12-hour horizon

| Health system | AUROC (95% CI) | Sensitivity (95% CI) | PPV (95% CI) | Number needed to evaluate |
|---|---:|---:|---:|---:|
| University of Michigan | 0.75 (0.74–0.75) | 0.22 (0.21–0.22) | 0.03 (0.03–0.03) | 35 |
| Oregon Health & Science University | 0.81 (0.81–0.82) | 0.41 (0.40–0.41) | 0.04 (0.04–0.04) | 26 |
| Emory Healthcare | 0.84 (0.83–0.84) | 0.42 (0.42–0.43) | 0.05 (0.05–0.05) | 22 |
| MetroHealth | 0.85 (0.85–0.85) | 0.36 (0.35–0.36) | 0.05 (0.05–0.05) | 21 |

### Critical denominator warning

Do not put encounter-level PPV and 12-hour prediction-level NNE on one slide without naming both levels. They answer different questions and do not use interchangeable denominators:

- **Encounter level:** did an encounter cross the threshold before eventually meeting Sepsis-3 criteria?
- **Prediction level at 12 hours:** did an above-threshold prediction precede Sepsis-3 positivity within the next 12 hours?

The encounter PPVs of 13%–26% should therefore not be inverted to “check” the 12-hour NNE values of 21–35.

## Workflow, threshold and system map

Build the upper portion as **observed in the paper** and the lower portion as **implementation choices the paper says health systems must design**.

```text
COMMON PRODUCT FAMILY: EPIC SEPSIS MODEL v2
                         ↓
         SITE-SPECIFIC HISTORICAL INPATIENT DATA
                         ↓
             LOCAL FINE-TUNING BEFORE GO-LIVE
                         ↓
LOCAL CARE + DATA-PRODUCTION CONDITIONS
patient mix • community vs hospital onset • illness complexity
CBC availability • laboratory access • documentation • missingness
                         ↓
       LOCAL MODEL SCORE, CALCULATED EVERY 15 MINUTES
                         ↓
CALIBRATION + SCORE DISTRIBUTION + PREVALENCE + TIME HORIZON
                         ↓
            THRESHOLD / OPERATING-POINT CHOICE
sensitivity ↔ specificity ↔ PPV ↔ false negatives ↔ false positives
                         ↓
──────────────── PUBLISHED WORKFLOW DETAIL BECOMES THIN ────────────────
                         ↓
ALERT SYSTEM DESIGN
silencing period • repeat logic • recipient • channel • interface
                         ↓
TEAM AND CAPACITY
nurse screen • huddle • physician/pharmacist review • competing work
                         ↓
ACTION
reassessment • test • treatment • watchlist • no action • escalation
                         ↓
PATIENT + WORKFORCE OUTCOMES
timeliness • benefit • overtreatment • missed sepsis • workload • trust
                         ↓
MONITORING + FEEDBACK
local performance • subgroup performance • drift • outcome audit
                         ↺
```

### Two feedback loops to say aloud

1. **Action changes the label:** antibiotics, cultures and lactate orders were also used as markers of clinician recognition, while the Sepsis-3 label depended partly on cultures and antibiotic treatment. Once a model is live, clinical behaviour and evaluation data can affect one another.
2. **Alerts consume the capacity needed to interpret alerts:** lowering a threshold may find more cases, but it also creates more evaluations. If team capacity is fixed, increased alert work can delay or dilute response. This second loop is a systems hypothesis for design and measurement; the study did not directly measure it.

## Audience interaction for 44–45 learners

Use nine mixed-discipline tables of approximately five learners. Give them 75 seconds and make the response constraint visible:

> **One local decision. One measure. One burden that may move elsewhere.**

Assignments:

- Tables 1 and 5: University of Michigan card.
- Tables 2 and 6: Oregon Health & Science University card.
- Tables 3 and 7: Emory Healthcare card.
- Tables 4 and 8: MetroHealth card.
- Table 9: evidence auditor.

The four site cards contain only setting, prevalence, ED-onset proportion, first-hour CBC exclusion, threshold, encounter PPV and 12-hour NNE. Each pair answers:

1. “Before go-live, what local condition would you investigate first?”
2. “What would you measure in addition to AUROC?”
3. “If you change the threshold or workflow, where might burden or risk move?”

The evidence-auditor table listens for one claim the paper cannot support. Ask each site pair for one 12-second answer, then let the auditor close.

### Strong learner responses

- Validate separately for relevant units, onset contexts and populations rather than rely on a hospital-wide average.
- Measure alert volume by shift and recipient, time to review, action taken, false-positive work and missed cases.
- Treat first-hour CBC availability as a workflow and access question, not simply a missing-data defect.
- Pair a threshold with staffing, routing, escalation, silencing and recovery plans.
- Monitor both clinical outcomes and workforce consequences after deployment.
- Preserve a route for clinical judgment and concern when the model remains below threshold.

### Weak response to redirect

If a table says “train clinicians not to ignore alerts,” ask:

> “What would make the alert actionable at 03:00, and what evidence would distinguish an attention problem from an accuracy, capacity, routing or repetition problem?”

## Exact evidence ledger

| Finding | Exact claim suitable for teaching | Essential qualifier |
|---|---|---|
| Study identity | Wong et al. evaluated ESM v2 in **227,091 adult inpatient encounters** across **four US health systems**; **7,401 encounters (3.3%)** met the study's Sepsis-3 criteria. | Prospective prognostic validation using real-time data collected after implementation; observational and not randomized. Emory contributed six hospitals, so “four hospitals” is inaccurate. |
| Study period | Site data were collected during consecutive periods between **31 August 2023 and 11 March 2025**, immediately after local ESM v2 implementation. | The four sites had different collection windows and durations; this was not one simultaneous national cohort. |
| Local models | Every health system fine-tuned ESM v2 on a **site-specific historical training set of adult inpatients** before implementation. | Do not call the deployed models identical or describe this as a test of the untuned base model. The authors explicitly could not estimate base-model performance. |
| Scoring | ESM v1 and v2 generated **0–100 scores every 15 minutes** for ED and hospitalized patients. After v2 implementation, v2 triggered alerts and v1 ran silently. | The paper does not provide enough detail to reconstruct each site's interface, recipient, escalation workflow or production threshold. |
| Encounter discrimination | Encounter-level AUROC ranged from **0.82 to 0.92** across the four systems. | AUROC is threshold-independent ranking discrimination. It does not measure clinical benefit, alert workload or calibration by itself. |
| Common sensitivity target | Analytic score thresholds matching **60% encounter-level sensitivity** were **14, 29, 37 and 35**. | These are research operating points for comparison, not documented production thresholds shown in four otherwise identical workflows. |
| Encounter PPV | At those operating points, encounter-level PPV was **0.13, 0.26, 0.25 and 0.20**. | An encounter-level true positive means eventual Sepsis-3 positivity after threshold crossing; it is not the same unit as a 12-hour prediction event. |
| 12-hour prediction performance | At the 12-hour prediction horizon, AUROC ranged **0.75–0.85**, PPV **0.03–0.05**, and NNE **21–35**. | NNE is an analytic prediction-level measure. Do not say clinicians actually handled 21–35 interruptive alerts for every detected case. |
| Lead time | For true-positive encounters, median prediction lead time ranged from **1.9 hours at Emory to 10.3 hours at OHSU**. | The distributions were wide and site-specific. Lead time is not evidence that treatment occurred earlier or that the time was clinically usable. |
| CBC dependency | The percentage of sepsis-positive encounters excluded because no CBC was available in the first hour ranged from **9.8% to 30.1%**. | This is an exclusion tied to reported developer guidance and local data availability, not a general estimate of missing laboratory data. |
| Clinician recognition | Against a composite of earliest antibiotic, lactate or body-culture order, encounter AUROC ranged **0.80–0.90**. | Orders are imperfect proxies for clinician recognition and are partly entangled with the Sepsis-3 outcome definition. |
| V2 versus V1 | ESM v2 outperformed ESM v1 across all reported performance metrics, thresholds and sites. | This supports improved prognostic performance, not improved patient outcomes. V1 ran silently after v2 deployment. |
| Alert suppression | A theoretical **eight-hour silencing strategy** substantially reduced simulated alert volume; low PPV and high NNE persisted. | Silencing reduces repetition, not false-positive rate. The study did not randomize or compare implemented silencing policies. |
| Outcomes | The study was **not designed to evaluate mortality or other clinical outcomes**. | Never translate prognostic performance into lives saved, reduced mortality or better care. |
| Equity analysis | Authors reported no major deviation from the relationship between baseline sepsis rate and performance that independently suggested disproportionately better or worse discrimination by age, sex, race or ethnicity. | This does not prove the system is fair. The audit focused on subgroup incidence, score distributions and AUROC; it did not establish equal clinical benefit, burden or calibration across groups. |

## Claim guardrails

### Do not say

1. **“The same model performed differently at four hospitals.”** Use: “the same product family became four locally fine-tuned models across four health systems.”
2. **“The algorithm failed.”** ESM v2 improved on v1 and had moderate-to-strong discrimination; the concern is local variability, low PPV, alert burden and the untested clinical intervention.
3. **“The algorithm worked.”** Predictive validity is not evidence of patient benefit.
4. **“Clinicians had to respond to 21–35 alerts for each sepsis case.”** NNE was calculated at the prediction level; actual interruptive clinical workload was not observed and reported that way.
5. **“The sites used thresholds of 14, 29, 37 and 35 in practice.”** These were analytic thresholds matched to 60% encounter-level sensitivity.
6. **“An eight-hour mute solved alert fatigue.”** The researchers simulated silencing; it reduced volume but did not improve accuracy, PPV or NNE.
7. **“High AUROC means the alerts were useful.”** AUROC says nothing by itself about prevalence, calibration, threshold, PPV, actionability or capacity.
8. **“The model predicted sepsis 10 hours early.”** Site medians ranged widely, and some true-positive lead-time IQRs were extremely broad. Prediction time did not prove treatment time or benefit.
9. **“The model was unbiased.”** The reported subgroup audit did not demonstrate equal outcomes or equal burden.
10. **“This is an implementation-effectiveness study.”** It is a prognostic validation conducted after implementation; it did not evaluate the effectiveness of the clinical intervention.

### Prefer

- “A common product family was locally fine-tuned and operated in four different data-producing care systems.”
- “Threshold choice converts scores into work.”
- “Alert suppression can change volume without changing accuracy.”
- “The paper measures prediction well and workflow incompletely.”
- “Local validation is the beginning of implementation design, not the end.”
- “The model can be better than its predecessor while the patient benefit remains unknown.”

## Insertion point and replacement candidate

### Recommended treatment

Replace source pages **53–59**, the full Apple Watch/atrial-fibrillation sequence, with a six- to eight-slide sepsis module. Park the Apple Watch sequence in the appendix.

This location is unusually strong: the AED sequence on pages 46–50 establishes that observed use can differ from intended use; the sepsis case then widens from device interaction to local model, threshold and organizational work; page 60, <em>Modern Times</em>, can carry the transition into system architecture.

Suggested slide sequence:

1. `ESM v2 · ESM v2 · ESM v2 · ESM v2`
2. Thresholds `14 · 29 · 37 · 35`
3. Correction: `ONE PRODUCT FAMILY · FOUR LOCAL MODELS`
4. Encounter AUROC `0.82 · 0.85 · 0.90 · 0.92`
5. Encounter PPV `13% · 26% · 25% · 20%`
6. Twelve-hour NNE `35 · 26 · 22 · 21`
7. Native system map
8. `A MODEL PRODUCES A SCORE. A SYSTEM PRODUCES AN INTERVENTION.`

### If Apple Watch must stay

Keep only pages **53, 56 and 57** to preserve the consumer-screening and unintended-consequence idea. Follow them with a four-slide sepsis sequence: thresholds, local context, NNE, system axiom. This adds approximately six minutes.

### If the 30-minute Systems Theatre prototype is used

Do not also teach this full brief. Use the brief as speaker notes and evidence guardrails for Systems Theatre. The 30-minute prototype already makes the sepsis case the attribution trap and implementation anchor.

## Overlap with other cases

| Existing or proposed case | Overlap | What sepsis uniquely contributes | Editorial decision |
|---|---|---|---|
| Apple Watch AFib, pages 53–59 | High: algorithm performance can create downstream work and unintended effects | Quantified local fine-tuning, threshold, prevalence and workload variation in deployed hospital systems | **Replace or compress Apple Watch.** Do not run both at full length. |
| Pulse oximetry | Moderate: a number is produced by hardware, software, calibration population and use conditions | Explicit conversion from model score to threshold, alert burden and organizational response | Keep both only if measurement equity and AI implementation are separate course objectives. |
| EHR burden and fax, pages 28–42 | Moderate: technology changes documentation and communication work | Prospective multisite evidence and explicit operating-point trade-offs | Complementary. Let the EHR case remain qualitative and the sepsis case quantitative. |
| Radiation interface, pages 225–233 | Low-to-moderate: local workflow redesign and measured performance | AI governance and the distinction between prediction validity and intervention effectiveness | Complementary. Radiation is the stronger proof that redesign changed human performance; sepsis preserves uncertainty about outcomes. |
| Automated dispensing-cabinet near miss | Moderate: digital deployment creates system-wide work and requires local controls | Thresholds and prospective prediction metrics | Keep both if teaching prevention **and** recovery. ADC is the resilience case; sepsis is the implementation case. |
| Corridor care and fatigue | Low: local conditions shape safe performance | Quantitative demonstration that data and threshold conditions differ across institutions | Complementary; these prevent “systems thinking” from becoming synonymous with software. |
| Human-Tech Ladder / SEIPS | Framework overlap only | A contemporary case on which learners can apply the framework | Use sepsis as evidence; do not teach it as another framework. |

## Altitude Blue evidence and staging notes

1. **Do not begin with an alert screenshot.** No particular alert interface or dismissal was evaluated. Begin with the four identical product labels and threshold reveal.
2. **Keep site order fixed** throughout: Michigan, OHSU, Emory, MetroHealth. The audience should map changes across hard cuts without rereading labels.
3. **Put each denominator on screen.** Use `ENCOUNTER LEVEL` for AUROC/PPV and `PREDICTION LEVEL · NEXT 12 HOURS` for NNE.
4. **Give Figure 1 its own observation slide.** It is dense; maximize it rather than placing it inside a journal-page frame. Tell students what to inspect before displaying it.
5. **Avoid stock “AI brain” imagery.** The original visual should depict four locally different pathways emerging from one product family—not a humanoid robot or glowing neural network.
6. **Make the system map native and progressive.** Stop once at the horizontal line marking where published workflow detail becomes thin. That boundary is part of the lesson.
7. **Close on an axiom, not a verdict:** `THE MODEL CAN BE BETTER. THE INTERVENTION CAN STILL BE UNKNOWN.`

## Speaker notes: concise script

### Opening

“The tempting version of this story is: one sepsis model, four hospitals, different results. That is memorable—and wrong in three ways. These were four health systems. Emory alone contributed six hospitals. And each system fine-tuned the product locally before it went live. What stayed the same was the product family, not the entire model or implementation.”

### Threshold reveal

“The investigators selected thresholds that produced the same encounter-level sensitivity—60%—at every site. Those thresholds ranged from 14 to 37. A threshold is where a probability becomes work. It determines which patients cross the line, how many false positives a team must sort, and which cases remain below it.”

### Performance reveal

“The new version was not a failure. It outperformed the old version, and AUROC ranged from 0.82 to 0.92. But a good ranking statistic is not a staffing plan. At the chosen encounter operating points, positive predictive value ranged from 13% to 26%. At a 12-hour prediction horizon, the number needed to evaluate ranged from 21 to 35.”

### Systems interpretation

“Notice what is already inside the model before an alert appears: the local population, whether sepsis begins in the community or hospital, whether a CBC is ordered and available in the first hour, and the historical data used to fine-tune the model. Then notice what comes after the model: threshold, suppression, routing, recipient, staffing, escalation and recovery. The intervention is that whole chain.”

### Close

“This paper licenses two statements at once. ESM v2 predicted better than ESM v1. We still do not know from this study whether the deployed intervention improved patient outcomes. That is not indecision. It is disciplined systems thinking: identify exactly which layer the evidence supports.”

## Primary sources and status

1. **Wong A, Currey D, Schwinne M, et al. “Multicenter Prospective Validation of an Updated Proprietary Sepsis Prediction Model.”** <em>JAMA Network Open</em>. 2026;9(2):e260181. DOI: [https://doi.org/10.1001/jamanetworkopen.2026.0181](https://doi.org/10.1001/jamanetworkopen.2026.0181). Publisher full text: [https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2845595](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2845595). Open-access archive: [https://pmc.ncbi.nlm.nih.gov/articles/PMC12949446/](https://pmc.ncbi.nlm.nih.gov/articles/PMC12949446/). PubMed: [https://pubmed.ncbi.nlm.nih.gov/41758510/](https://pubmed.ncbi.nlm.nih.gov/41758510/). This is the primary source for every study-specific quantitative claim above.
2. **Wong A, Otles E, Donnelly JP, et al. “External Validation of a Widely Implemented Proprietary Sepsis Prediction Model in Hospitalized Patients.”** <em>JAMA Internal Medicine</em>. 2021;181(8):1065–1070. DOI: [https://doi.org/10.1001/jamainternmed.2021.2626](https://doi.org/10.1001/jamainternmed.2021.2626). Open-access archive: [https://pmc.ncbi.nlm.nih.gov/articles/PMC8218233/](https://pmc.ncbi.nlm.nih.gov/articles/PMC8218233/). Optional context for ESM v1 only; it is not the source of the v2 numbers in this brief.

### Publication-status note

As checked on **13 July 2026**, the v2 study is a published, PubMed-indexed, open-access JAMA Network Open article (PMID **41758510**, PMCID **PMC12949446**) distributed under **CC BY**. The PubMed record contained no correction/retraction relation, and the NCBI open-access record marked it `retracted="no"`. It is not a preprint. Publisher and NCBI metadata differ on the precise February publication day, so use **“February 2026”** or the volume/issue citation rather than asserting a day in the lecture.

---

## One-line judgment for the editorial dashboard

> **Include as the main AI implementation case; replace the full Apple Watch sequence. Its value is not “AI good” or “AI bad,” but that a product, locally fine-tuned model, threshold, workflow and care capacity jointly determine what the technology becomes.**
