# Presenter guide: Sepsis AI across four health systems

## Audience contract and argument

**Contract:** Judge the local work system, not an AI product name.

**Argument:** A prediction model becomes safe or unsafe through local data, thresholds, routing, ownership, response, and learning.

**Target length:** 9 to 11 minutes. The module is designed for a mixed graduate clinical cohort and can travel intact into leadership, quality, implementation, procurement, or AI-governance presentations.

## Run of show

| Slide | Time | Presenter move | Ask and expected responses | Transition |
|---|---:|---|---|---|
| 1. One product family | 0:50 | Hold the four-setting image. Name the contract. | What could differ? Population, data, tuning, threshold, routing, staffing, ownership, response. | The first difference is visible in four numbers. |
| 2. Four thresholds | 0:55 | Reveal 14, 29, 37, and 35. Let someone choose. | Which is safe? None can be called universally safe from this study. | The model was local before it was measured. |
| 3. Local data work | 0:55 | Explain site-specific fine-tuning. | What was shared? The ESM v2 product family. What was local? Historical data and fitted model. | Now inspect what happened across sites. |
| 4. Figure 2 | 1:05 | Give ten seconds of silent observation. | Where does variation remain? Performance before Sepsis-3 positivity and clinician recognition varies by site and model version. | One product story is hiding several work systems. |
| 5. Validation is work | 0:55 | Point to the people and work surfaces. | What cannot be purchased? Local evaluation, threshold choice, routing, ownership, monitoring, change control. | Two familiar performance measures tell different stories. |
| 6. AUROC and PPV | 1:05 | Contrast ranking with actionable signal. | Why can both values be true? They answer different questions and depend on prevalence and operating point. | Now translate signal into evaluation work carefully. |
| 7. NNE 21 to 35 | 0:55 | State all three qualifiers before interpreting. | What is this not? Not 21 to 35 observed bedside interruptions in one common workflow. | The source figure shows why threshold choice matters. |
| 8. Figure 1 | 0:55 | Ask one person to trace one site. | What moves with threshold? Sensitivity, specificity, PPV, NPV, workload. | A go-live decision needs an operating system around the score. |
| 9. Four decisions | 1:15 | Give each quadrant 45 seconds, then take two ten-second reports. | Good answers name a denominator, role, action, and review trigger. | Those decisions remain local after launch. |
| 10. Local validation | 0:45 | Return to use error, not user error. | What must be validated here, over time? Prediction, workflow, burden, equity, response, outcomes. | End. |

**Timed rehearsal estimate:** 9:35 including the default 45-second activity and two ten-second reports. Allow up to 10:40 for transitions and brief unplanned discussion.

## Timing routes

| Route | Interaction | Delivery choice |
|---|---|---|
| 8 minutes | 20 seconds, one report | Park either slide 04 or 08, but keep one original JAMA figure and the outcomes limitation. |
| 10 minutes | 45 seconds, two ten-second reports | Use all ten slides, giving the figures a focused observation rather than a metric lecture. |
| 12 minutes | 90 seconds, up to four ten-second reports | Keep both figures and challenge one proposed implementation decision with a denominator. |

## Claim and caveat matrix

| Claim used in the module | Source support | Boundary that must travel with it |
|---|---|---|
| 227,091 inpatient encounters; 7,401 met Sepsis-3 criteria | Wong et al., 2026 | Four US health systems. This is a prognostic cohort, not an intervention trial. |
| All four sites fine-tuned ESM v2 | Wong et al., 2026 | Do not call these four identical fitted models. |
| Analytic thresholds 14, 29, 37, and 35 | Wong et al., Table 2 | Site-specific score operating points selected to match 60% encounter sensitivity. Not reported production thresholds. |
| Encounter-level AUROC 0.82 to 0.92; PPV 0.13 to 0.26 | Wong et al., Table 2 | AUROC summarizes discrimination across thresholds. PPV is reported at the site-specific operating point selected for 60% encounter sensitivity. Both vary by institution. |
| NNE 21 to 35 at 12 hours | Wong et al., Table 2 and discussion | Prediction-level analytic result. Do not equate it with a common observed alert workflow. |
| Local evaluation, alert-silencing strategy, and workflow design are needed | Wong et al., conclusion | Author recommendation and implementation implication, not a tested intervention result. |
| Mortality impact was not evaluated | Wong et al., limitations | Never imply the study showed improved or worsened clinical outcomes. |

## Facilitation notes

- If someone asks whether the model is good, ask, “Good for which decision, at which operating point, in which workflow?”
- If learners focus only on clinicians ignoring alerts, move upstream to prevalence, local data, threshold, routing, queue design, ownership, staffing, and feedback.
- If learners assume 60% sensitivity was a production goal, restate that it was the shared analytic target used for performance comparison.
- If someone converts NNE directly into alert fatigue, say that burden is a legitimate design concern, but the study’s NNE is not a count of identical bedside alert interruptions.

## Reuse and shortening

**Can be shortened:**

- Remove slide 4 or slide 8, but keep at least one original JAMA figure.
- Combine slides 6 and 7 verbally if the audience already understands AUROC, PPV, and NNE.

**Must remain together:**

- Slide 2 thresholds and the analytic-threshold caveat.
- Slide 7 NNE and the prediction-level, non-workflow caveat.
- Any performance claim and a source-linked evidence slide.
- Slide 10 clinical-outcomes limitation.

**Never separate:**

- The phrase “four health systems” from the note that Emory included multiple hospitals.
- “Locally fine-tuned” from any “same model” shorthand.
- NNE 21 to 35 from the 12-hour prediction-level boundary.

## Publication and image boundary

- Slides 1, 3, and 5 use original Image 2 teaching images. They are hypothetical and are visibly labelled as not study evidence.
- Slides 4 and 8 use unmodified JAMA Network Open source figures under CC BY. Preserve the visible credit and source link.
- Exact values and labels remain native HTML, not embedded in generated images.

## Visual asset ledger and prompt record

All generated assets use the built-in Image 2 path, were created 19 July 2026, and are visibly labelled as hypothetical rather than study evidence.

| Asset | Slide and crop | Truth boundary | Faithful prompt record |
|---|---|---|---|
| `assets/generated/sepsis-four-systems.png` | 01, full field with copy left | Four hypothetical work settings, not the four study sites or four hospitals. | One coherent documentary composition of four visibly different hospital work settings around a shared prediction-product idea; ordinary teams, workflows and equipment; natural institutional light; no alert theatre, metric, patient data or site identity. |
| `assets/generated/sepsis-data-work.png` | 03, team right and copy left | Hypothetical local data work, not study documentation. | Clinical and data staff comparing an abstract pipeline and local records on unreadable displays; active cross-checking, plausible workroom, no patient data, performance result, alert or logo. |
| `assets/generated/sepsis-local-validation.png` | 05, team right and copy left | Design prompt only. The study did not document this pictured process. | Multidisciplinary team testing a prediction workflow with an abstract screen and paper routing map; threshold, routing, ownership and monitoring work made visible; no glowing AI interface, real metric or victory pose. |
| `../assets/source-images/theatre/esm-v2-figure-2-v1-comparison.jpg` | 04, whole figure contained | Original JAMA Network Open Figure 2, CC BY. | Not generated. Preserve whole-figure credit and clinical-outcomes limitation. |
| `../assets/source-images/theatre/esm-v2-figure-1-performance.jpg` | 08, whole figure contained | Original JAMA Network Open Figure 1, CC BY. | Not generated. Preserve all four panels when asking learners to trace a site across thresholds. |

## Primary source

Wong A, Currey D, Schwinne M, et al. [Multicenter Prospective Validation of an Updated Proprietary Sepsis Prediction Model](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2845595). *JAMA Network Open*. 2026;9(2):e260181. DOI: 10.1001/jamanetworkopen.2026.0181.
