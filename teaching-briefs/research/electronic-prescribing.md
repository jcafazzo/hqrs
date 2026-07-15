# Research brief: electronic prescribing and medicines administration

Prepared for Joseph Cafazzo and HQRS 846. Evidence checked 13 July 2026. This is a teaching brief, not clinical, procurement, legal, or operational guidance. It is written for a mixed cohort of approximately 44–45 graduate health professionals and assumes a systems-thinking frame: **use error, not user error**.

---

# Brief 8 — A licence is not a safety system

<figure class="source-plate">
  <img src="../prototypes/assets/source-images/shared/hssib-epma-control-map.png" alt="HSSIB control map showing government, NHS England, the regulator, inspection body, manufacturers and acute hospital trusts around electronic prescribing safety">
  <figcaption><strong>Primary-source observation:</strong> HSSIB, <em>Electronic prescribing and medicines administration: procurement and safety learning in acute hospitals</em>, 28 May 2026, Figure 3. The software product sits inside a distributed control-and-feedback structure.</figcaption>
</figure>

## Decision verdict

### Recommended disposition: conditional include, preferably compressed

**Include this content if the lecture needs to move students upstream from interface design and frontline work into procurement, configuration, interoperability, governance and continuous assurance.** That is its unique contribution. It makes a powerful bridge from “the user is part of the system” to “the buyer, supplier, contract, configuration team, regulator and learning network are also part of the system.”

**Do not add the full 8–12-minute segment on top of full Parkinson’s, automated-dispensing-cabinet (ADC) and EHR examples.** That would produce three medication-digital stories with substantial thematic overlap. If those examples are all retained, use only the four-minute compressed version below or park this brief in the appendix.

The best course-design choice is one of these:

| Choice | Judgment | Use when |
|---|---|---|
| **Full 8–12 minutes** | Strong inclusion | You want students to understand procurement and digital clinical governance as patient-safety work. Reduce older EHR/fax material to make room. |
| **Compressed four-minute bridge** | **Recommended if Parkinson’s or ADC is already taught** | You want the memorable finding—same product, different safety performance—without another extended medication case. |
| **Appendix / optional seminar** | Sensible | The introductory lecture is already case-heavy, or the cohort has little responsibility for procurement, informatics or governance. |
| **Omit** | Defensible | The lecture’s sole job is to establish use error and basic systems thinking. The ADC case already teaches change control and the Parkinson’s case already teaches work-as-done. |

### Why it earns consideration

This is the most current and institution-level of the proposed digital cases. HSSIB published the national report on **28 May 2026**. It is also unusually explicit that a safe digital medication system is not simply a product characteristic: safety performance depends on the system’s local configuration, interoperability, optimisation, maintenance, governance and feedback loops.

### Why it may not belong in the opening lecture

The report is structurally complex and England-specific. Its most important findings concern procurement frameworks, medical-device classification, digital clinical safety standards and national assurance. Without tight stagecraft, it can become a policy lecture. It should be included only if it performs the distinctive teaching job below.

## Unique teaching job

> **Purchasing safe-looking software does not purchase a safe sociotechnical system.**

The case uniquely teaches five ideas:

1. **Procurement is a clinical-safety intervention.** Requirements omitted before contracting may be difficult or expensive to recover later.
2. **Configuration changes the safety behaviour of a product.** Two organisations using the same electronic prescribing product can obtain markedly different risk-mitigation performance.
3. **Interoperability failures are clinical failures.** A medication record can be locally correct and globally incomplete.
4. **Safety is perishable.** Updates, workflow changes, knowledge bases and local optimisation mean that assurance must be repeated, not declared once at go-live.
5. **Learning requires a feedback system.** Incident reports, helpdesk queries, hazard logs, structured testing, user groups, vendors and regulators must be connected for weak signals to become system learning.

This is not fundamentally a “bad screen” story. It is a **control-and-feedback story**.

## Exact report and status

- **Primary report:** Health Services Safety Investigations Body, *Electronic prescribing and medicines administration: procurement and safety learning in acute hospitals*.
- **Published:** 28 May 2026.
- **Position in programme:** the fourth and final report under HSSIB’s medication-related-harm investigation theme.
- **Investigation period:** May 2025 to March 2026.
- **Evidence landscape:** HSSIB states that the findings describe the legislative, regulatory, standards and assurance landscape **up to April 2026**.
- **Scope:** procurement of new or upgraded ePMA functionality in acute NHS hospitals, from identifying the need through contracting, plus how safety learning is identified and shared once ePMA is in use.
- **Important exclusions:** HSSIB explicitly placed detailed ePMA training, configuration, pharmacy dispensing and stock control, non-acute settings and global standards outside this investigation’s scope. The report draws on prior configuration-related events and research, but it was not itself a detailed evaluation of local configuration work.
- **Status checked 13 July 2026:** the official page listed five safety recommendations, R/2026/086 through R/2026/090, and three safety observations, O/2026/086 through O/2026/088. No recipient responses were displayed on the report page at the time of checking. Teach them as recommendations, **not implemented reforms**.

Official report: <https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/fourth-investigation-report/>

Official PDF: <https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/fourth-investigation-report/pdf/>

## 90-second hook

### On screen

Start with an empty Queen’s Blue field and one line:

> **SAME SOFTWARE. DIFFERENT HOSPITAL.**

Hard cut:

> **ONE INTERCEPTS THE PRESCRIBING RISK.**  
> **ONE DOES NOT.**

Ask the room:

> “If the product is the same, where is the safety system?”

Take three rapid answers. Do not resolve them yet.

Reveal one evidence plate:

> **45 NHS TRUSTS**  
> **13 ELECTRONIC PRESCRIBING SYSTEMS**  
> **AVERAGE ‘GOOD MITIGATION’: 50%**

Then reveal:

> **THE BEST RESULT OBSERVED: 73%**

Close the hook:

> **A licence is not a safety system.**

### Spoken hook

“A team led by the NHS Electronic Prescribing Risk and Safety Evaluation programme created fictional patients and asked hospital teams to run known prescribing-risk scenarios through their actual systems. The same product did not provide the same safety performance everywhere. Across the participating trusts, the average result for ‘good mitigation’ was about half of the known risks tested. No system achieved 100% in the study. The product mattered—but so did local implementation, configuration and maintenance. So what exactly did the hospital buy: software, or safety?”

### Hook guardrail

These were **simulated prescribing scenarios and self-assessments**, not observed patient-harm rates. “50% good mitigation” must never be translated into “half of medication errors reached patients.” Participation was voluntary, results may not represent all NHS trusts, and the tool had not yet undergone external or psychometric validation when the study was published.

## Eight-to-twelve-minute teaching arc

| Time | Move | What to show | What to say or ask |
|---|---|---|---|
| 0:00–1:30 | Hook | “Same software. Different hospital.” Then 45 / 13 / 50% | “Where is the safety system?” Establish that safety is an achieved system performance, not a vendor attribute. |
| 1:30–2:15 | Preserve the benefit | Two balanced statements: “PREVENTS SOME ERRORS” / “INTRODUCES DIFFERENT HAZARDS” | HSSIB does not argue against electronic prescribing. It says ePMA can reduce avoidable medication errors while also creating or reshaping hazards. |
| 2:15–3:45 | Separate examples, one analytical pattern | Five independent case cards, never a timeline | Briefly name the distinct prior investigations below. State explicitly that they involved different people, organisations and mechanisms. Do not narrate them as one causal chain. |
| 3:45–5:30 | Move upstream | The five-layer sociotechnical map | Trace one requirement from procurement to configuration to work-as-done, then trace feedback back upstream. Ask: “Who can see the whole loop?” |
| 5:30–6:45 | Procurement reveal | “21 PRODUCTS ON THE FRAMEWORK” followed by “NOT A CERTIFICATE OF ePMA SAFETY” | At the time of the report, 21 commercial manufacturers were available on the NHS procurement framework. HSSIB found that inclusion meant minimum framework requirements were declared, not that the product had been independently certified as safe for every local use. |
| 6:45–8:30 | Table interaction | Six lifecycle assignments | Each table supplies one acceptance test, one accountable owner and one trigger for repeating the test. “Train the user” is not accepted as the primary control. |
| 8:30–10:00 | Debrief as control system | Requirement → contract → configuration → use → signal → learning → change | Highlight the missing or weak feedback paths: incomplete incident detail, informal safety networks, temporary project teams, fragmented responsibilities and limited clinical-safety capacity. |
| 10:00–11:15 | Return | “SAME SOFTWARE. DIFFERENT SAFETY.” | “The frontline action is only the visible end of a much larger control structure.” |
| 11:15–12:00 | Decision close | “BUY THE CAPABILITY. PROVE THE PERFORMANCE. KEEP PROVING IT.” | Connect procurement, commissioning, maintenance and structured retesting. |

The segment can end at 8:30 by taking two table responses. It can expand to 12 minutes by hearing all six and comparing the proposed feedback triggers.

## Four-minute compressed version

Use this when Parkinson’s or the ADC case already supplies the human story.

1. **0:00–0:45 — Hook:** Same product, different hospital; 45 trusts, 13 systems, average 50% good mitigation.
2. **0:45–1:30 — Meaning:** Safety depends on local configuration, integration, maintenance and governance, not only manufacturer design.
3. **1:30–2:30 — Lifecycle:** Show the five-layer map and trace one high-risk prescribing safeguard from contract requirement to repeated test.
4. **2:30–3:30 — Pair prompt:** “Name one thing that must be true at go-live, and one signal that should force retesting six months later.”
5. **3:30–4:00 — Close:** “Buy the capability. Prove the performance. Keep proving it.”

Do not add the five patient-event cards in the compressed version. They will turn a systems bridge back into another case catalogue.

## Separate-event firewall

The 2026 national report uses prior investigations to illustrate different ePMA hazards. These are **separate reference events and reports**. They must not be merged into a composite patient, hospital, vendor, timeline or causal chain.

| Independent source event | What HSSIB reports | Mechanism illustrated | Do not say |
|---|---|---|---|
| **Parkinson’s/time-critical medication in an ED**, report published 5 December 2024 | A man with Parkinson’s spent three days in an ED. Of 18 scheduled doses, seven were not given and three were late; only eight were recorded as on time. The ePMA lacked a function to alert staff to time-critical prescribing or administration. | Functionality, work environment, outage, parallel paper/electronic records, roles, access and work-as-done. | Do not say the absent alert alone caused the omissions, deterioration or death. Do not reuse this as a new ePMA patient if the Parkinson’s/corridor-care brief is already taught. |
| **Paused anticoagulant before and after a procedure**, report published 13 March 2025 | An older man’s anticoagulant was paused, was not restarted as intended after a procedure, and he had a stroke and died two days later. HSSIB noted no ePMA prompt to review the paused medication and a delay in restarting it. | State transitions, prospective reminders and review ownership. | Do not say this occurred to the Parkinson’s patient, or that a prompt would certainly have prevented the death. |
| **Insulin after discharge**, report published 14 August 2025 | A man with type 2 diabetes was changed to insulin in hospital. Seventeen days after discharge, it was identified that he had not taken insulin; he was admitted overnight with high blood glucose. Multiple providers used systems that did not interact to share care information. | Cross-organisational interoperability and continuity of medication information. | Do not combine this with the anticoagulant discharge case or claim the 2026 procurement report newly investigated this patient. |
| **Ann and two anticoagulants**, legacy HSIB report published 24 October 2019 | A 75-year-old woman took dalteparin and apixaban concurrently after discharge, possibly causing gastrointestinal bleeding. Hospital discharge information did not interface with the relevant ePMA systems across trust, primary care and community pharmacy. | Discharge reconciliation, parallel supplies and non-interoperability. | Do not say the two anticoagulants caused Ann’s death. HSSIB says she was admitted to a hospice and died; the double therapy possibly caused an episode of gastrointestinal bleeding. |
| **Felicity and weight-based paediatric dosing**, legacy HSIB report published 2022 | A four-year-old received ten times the intended anticoagulant dose on five occasions over one weekend; a later scan showed a new brain bleed. Adult ePMA functionality had been changed for paediatric use without consistent understanding and mitigation of the introduced hazards. | Local adaptation, configuration governance, paediatric requirements and safety cases. | Do not say this was the same product or organisation as any other event. Configuration was outside the detailed scope of the 2026 national investigation. |
| **Penicillin recorded as penicillamine**, NHS England national alert issued 2025 | Incorrect allergy recording put patients at risk; penicillin-based antibiotics were prescribed in some incidents, with life-threatening anaphylaxis and at least one reported death. Alphabetical lists and allergy-search results increased the risk. | Vocabulary, search design, data quality, national detection and delayed safety learning. | Do not present this as one named HSSIB reference patient or imply that every error caused anaphylaxis. |

The correct teaching line is:

> “Different events exposed different constraints that the wider ePMA safety system did not reliably control.”

Not:

> “One faulty ePMA caused all of these incidents.”

## Sociotechnical system map

Build this natively at presentation scale. Animate one horizontal layer at a time, then reveal the return path.

```text
PATIENT-SAFETY GOAL
Right medication information and controls are available
to the right people, in the right workflow, over time.

                         SAFETY CONSTRAINTS ↓

1. PROCUREMENT + CONTRACT
   real work requirements • users and settings represented
   standards evidence • hazard log • safety case
   testable acceptance criteria • supplier obligations • leverage
                              ↓
2. PRODUCT + LOCAL CONFIGURATION
   manufacturer baseline • medication dictionaries • decision support
   alert thresholds • roles/permissions • local workflows • devices
                              ↓
3. INTEROPERABILITY + INFRASTRUCTURE
   EPR ↔ ePMA ↔ pharmacy ↔ primary/community care
   identifiers • semantic mapping • interfaces • networks • hardware
                              ↓
4. WORK-AS-DONE
   prescriber • nurse • pharmacist • patient/family • clinical context
   interruptions • access • workload • downtime • handoffs • adaptations
                              ↓
5. OUTCOME + SIGNALS
   intercepted order • override • delayed/omitted dose • discrepancy
   helpdesk ticket • incident report • audit • patient report • ePRaSE test

                         FEEDBACK + LEARNING ↑

GOVERNANCE ACROSS THE LOOP
executive owner • clinical safety officer • medication safety
digital team • procurement • supplier • regulator • national learning network

MAINTENANCE ACROSS TIME
upgrade • new medication/knowledge • interface change • workflow redesign
local optimisation • staff/device change • retest • update hazard log
```

### The five questions to place beside the map

1. **Procurement:** What safety capability was made contractually testable?
2. **Configuration:** Who owns the risk created by a local change?
3. **Interoperability:** What meaning is lost when data crosses a boundary?
4. **Governance:** Who has authority, evidence and resources to stop deployment?
5. **Maintenance:** What change triggers retesting, and where does the learning go?

### Core systems line

> **Go-live is not the end of implementation. It is the beginning of exposure.**

## Audience interaction for 44–45 learners

Divide the room into six tables of seven or eight. Give each table one lifecycle layer:

1. **Procurement and contract**
2. **Configuration and clinical decision support**
3. **Interoperability and infrastructure**
4. **Work-as-done and usability**
5. **Governance and authority**
6. **Maintenance, measurement and learning**

### Scenario

> “Your hospital is upgrading its electronic prescribing system. In the vendor demonstration, a high-risk prescription is blocked. The contract says the product ‘supports allergy checking.’ The local build will use your medication dictionary, your alert rules, your EPR interface and your hardware. What must your layer contribute before the executive signs go-live?”

Each table has 90 seconds to provide exactly three things:

- **one testable safety constraint**
- **one named accountable role**
- **one event that forces the test to be repeated**

Examples of strong responses:

| Layer | Testable constraint | Accountable role | Repeat trigger |
|---|---|---|---|
| Procurement | Extreme-risk scenarios and expected responses are written into acceptance criteria. | Executive sponsor plus procurement and clinical safety leads | Contract variation or major product upgrade |
| Configuration | The local build produces the agreed response to a defined set of fictional patient scenarios. | Clinical safety officer with pharmacy informatics | Alert-rule, formulary or medication-dictionary change |
| Interoperability | Allergy status and medication changes retain correct identity, meaning and status across interfaces. | Integration owner plus clinical safety officer | Interface-engine, terminology or connected-system update |
| Work-as-done | Required information and controls remain usable in the actual ward/ED context, including downtime. | Clinical service owner | Workflow, device, location or staffing-model redesign |
| Governance | A named group can withhold go-live and owns unresolved hazards. | Executive accountable officer | New high-severity hazard or failed acceptance test |
| Maintenance | Structured safety tests, incident signals, helpdesk data and overrides are reviewed together. | Medication-safety/digital-safety governance group | Scheduled review plus any serious signal or major change |

### Facilitation rule

If a table offers “train staff,” ask:

> “What design, contract or governance condition is training compensating for—and who will know when that condition changes?”

Training can be one control. It cannot be the system map.

## Evidence table

| Evidence | Defensible teaching claim | Essential qualifier |
|---|---|---|
| HSSIB publication and scope | The national ePMA report was published **28 May 2026**, was conducted from **May 2025 to March 2026**, and describes the relevant national landscape up to **April 2026**. | The report concerns acute NHS hospitals in England. Canadian law, procurement and regulatory structures differ. |
| Investigation sampling | HSSIB visited **six acute trusts**; its stakeholder table lists **29 trust staff**, **four ePMA manufacturers with eight staff**, three digital specialists, three researchers and multiple national bodies/advisors. | This was a systems investigation, not a representative prevalence survey of all trusts or suppliers. |
| Incident-report search | HSSIB searched **540,646** LFPSE records from 1 October 2023 to 30 April 2025, extracted **1,837**, and retained **127** attributed directly to ePMA after manual review. | The 127 reports were incomplete and provided limited insight into mechanism. They are neither all ePMA incidents nor an incidence rate. |
| Prior medication-safety investigations | A 2024 HSSIB/HSIB review found **five of 18** medication-safety investigation reports had considered ePMA. | The five reports do not establish the prevalence of ePMA-related harm. They were selected investigations, not a denominator-based sample. |
| Procurement market | At the time of writing, **21 commercial manufacturers** of ePMA functionality were available on the NHS Clinical Digital Health Solutions framework. | A framework listing was not an independent guarantee that a product was safe for every local workflow or that it met a core ePMA-specific national design standard. |
| National standards finding | HSSIB found **no core national patient-safety standards specifically informing ePMA design or procurement** and variation in how trusts specified safety requirements. | Do not say “there were no standards.” DCB0129, DCB0160 and interoperability standards existed; HSSIB identified gaps in ePMA-specific standards, assurance, oversight and enforcement. |
| ePRaSE 2022 study | **68 pharmacists**, **45 English NHS trusts** and **13 electronic prescribing systems** participated. Safety-mitigation performance varied between products and between trusts using the same product. | Voluntary, self-assessed simulated testing; only 45 of 90 identified trusts with live EP completed it. Not a patient-outcome study. |
| ePRaSE performance | Across participating trusts and systems, average “good mitigation” was approximately **50%**; the maximum achieved by any trust was **73%**. | “Good mitigation” is a scenario-response score, not an error, harm or mortality rate. No product achieved 100% in this study, but the study could not estimate each product’s true optimised ceiling. |
| Recommendations | HSSIB issued **five safety recommendations** addressing medical-device classification, core ePMA safety requirements, external assurance of interoperability standards, support/capability for trusts, and CQC oversight of DCB0160 compliance. | Recommendations indicate identified improvement opportunities. They do not prove that recipients have implemented the changes or that the changes will produce a specific outcome. |
| Safety observations | HSSIB issued **three safety observations** on applying medical-device-like expectations, sharing safety learning nationally, and participating in ePRaSE/continuous optimisation. | An observation is not a statutory requirement or evidence that the activity is universally adopted. |

## Claim guardrails

1. **Do not say electronic prescribing is less safe than paper.** HSSIB says ePMA can prevent avoidable medication errors and can also introduce or reshape hazards.
2. **Do not say there were no digital clinical safety standards.** The precise finding is that there were no core national patient-safety standards specifically informing ePMA design/procurement, alongside variation and gaps in assurance and oversight.
3. **Do not say an NHS procurement-framework listing certified a product as safe.** HSSIB says manufacturers self-assessed framework requirements and the framework did not assure those responses; local organisations still had substantial assurance work.
4. **Do not say local configuration matters more than product design in every circumstance.** The study found important between-site variation using the same systems. It did not render manufacturer design irrelevant.
5. **Do not translate “50% good mitigation” into a clinical error or harm rate.** It is performance on simulated prescribing scenarios.
6. **Do not say all trusts performed poorly or that the 45 participating trusts represent the whole NHS.** Participation was voluntary and only half of the identified trusts with live systems completed the 2022 assessment.
7. **Do not combine the Parkinson’s, paused-anticoagulant, insulin-discharge, Ann, Felicity or penicillin/penicillamine events.** They involved different patients, organisations, dates and mechanisms.
8. **Do not state that the 2026 national investigation re-investigated those patients.** It used previous reports to motivate and illustrate a national investigation of procurement and safety learning.
9. **Do not claim the fourth report studied local configuration in depth.** Detailed configuration was explicitly out of scope, although prior investigations and ePRaSE evidence made configuration highly relevant to the national safety problem.
10. **Do not teach the five recommendations as completed reforms.** As checked 13 July 2026, the report page listed the recommendations without displayed recipient responses.
11. **Do not import England’s regulatory findings directly into Canada.** Use them as a sociotechnical analogue and ask students to identify the corresponding Canadian/Ontario actors and assurance mechanisms.
12. **Do not blame the prescriber for failing to compensate for a latent digital hazard.** Frontline contradiction detection and reporting are safety functions; they do not relieve designers, buyers, implementers or governors of responsibility.

## Use-error framing

### Avoid

- “The clinician clicked the wrong thing.”
- “The hospital bought a bad system.”
- “The vendor made a safe product and the hospital configured it badly.”
- “Users ignored the alert.”
- “People need better ePMA training.”

### Prefer

- “The control structure did not reliably constrain a known prescribing hazard.”
- “The system’s safety behaviour emerged from the product, local configuration, connected systems, work context and maintenance.”
- “The contract described a capability; the organisation still needed evidence of local performance.”
- “Alert response depends on clinical relevance, timing, workflow, signal-to-noise ratio and available action—not vigilance alone.”
- “The user, buyer, configurator, supplier, governance team and regulator are interacting parts of one safety system.”

### Core line

> **The prescriber uses the interface. The organisation uses the whole lifecycle.**

## Insertion and replacement point in the original presentation

### Best conceptual insertion

Insert after **source slide 126, “Technology changes; humans do not,”** and before slide 127, “The pill bottle.” The sequence becomes:

1. Human–Tech Ladder.
2. Technology must conform to human capability.
3. Contemporary digital proof: the same product can produce different safety behaviour across local systems.
4. Return to the tangible medication-object examples.

This elevates the ePMA case above interface critique and makes the Human–Tech Ladder operational.

### Best time-neutral replacement

If the full 8–12-minute version is included, park or compress older material in the **EHR/fax sequence at source slides 26–42**. The most replaceable teaching time is in:

- slide 34, “Scribes reduce EHR use, restore joy of practice”
- slides 39–41, the fax machine, interoperability standard and fax virtues.

Retain slide 42, “If your fax machine was like your EHR,” as a short comic transition if it remains effective in the room. Follow it with:

> “But even an interoperable product is not yet a safe local system.”

Then deliver the compressed or full ePMA brief.

### Do not insert here

Do not place a full ePMA segment immediately after both the Parkinson’s and ADC cases. The repeated medication/digital vocabulary will flatten the distinctions and make the lecture feel like an incident catalogue.

## Overlap and differentiation

| Existing/new example | Overlap | What that example does better | What this brief uniquely adds | Recommendation if both are used |
|---|---|---|---|---|
| **Parkinson’s/time-critical medication** | High: ePMA, omission, ED conditions, interoperability and workflow | A human, emotionally legible bedside story; shows corridor care, time-criticality, outage, roles and adaptations | Moves upstream to purchasing, standards, accountability, assurance and national learning | Keep Parkinson’s as the human case; use only the four-minute ePMA governance bridge. Do not repeat the full Parkinson’s facts here. |
| **ADC database-import near miss** | High: digital medication system, upgrade/change control, configuration, testing and recovery | A concrete technical failure mode with an elegant visual reveal; shows data integrity, go-live controls and recovery | Broadens from one upgrade to lifecycle governance, contracting, regulation, multiple organisations and recurring assurance | If ADC is full length, use ePMA as a 2–4-minute debrief or appendix. If ePMA is full length, use the ADC only as a one-slide example of why acceptance/rollback controls matter. |
| **EHR burden/interface slides** | Moderate: digital systems, usability, workarounds, interoperability | Immediate empathy and recognition; exposes documentation burden and poor interface fit | Demonstrates that usability is only one layer; contract, configuration, maintenance and feedback can change safety even with the same product | Replace some EHR/fax repetition with this brief. Use one dense-interface slide to establish the familiar problem, then move upstream. |
| **Human–Tech Ladder** | Conceptual rather than case overlap | Supplies the course’s normative framework | Provides a current, evidence-rich demonstration spanning every rung of the ladder | Strong pairing. Insert after slide 126. |

## Altitude Blue slide direction

1. **Axiom — Queen’s Blue:** “SAME SOFTWARE. DIFFERENT HOSPITAL.” No interface screenshot.
2. **Contrast pair:** “ONE INTERCEPTS THE RISK.” / “ONE DOES NOT.” Identical layout and scale.
3. **Evidence — warm paper:** oversized **45 / 13 / 50%**, with a visible qualifier: “Simulated scenarios; not a patient-harm rate.”
4. **Axiom — Queen’s Blue:** “A LICENCE IS NOT A SAFETY SYSTEM.”
5. **Independent case cards:** one card per prior event with different colour tabs and explicit labels “SEPARATE INVESTIGATION.” Never connect them with arrows.
6. **System map:** native vector diagram, full screen. Reveal procurement, configuration, interoperability, work and feedback sequentially.
7. **Observation slide:** HSSIB Figure 3, the high-level control structure, full field if legible from the back. Follow with the simplified native map; do not leave the official figure inside a browser or report frame.
8. **Procurement reveal:** **21 MANUFACTURERS** followed by “FRAMEWORK LISTING ≠ LOCAL SAFETY ASSURANCE.”
9. **Interaction:** six large layer labels only. Put the detailed instructions in speaker notes or a student handout.
10. **Close — Queen’s Blue:** “BUY THE CAPABILITY. PROVE THE PERFORMANCE. KEEP PROVING IT.”

## Concise speaker notes

### Opening

“When we describe a digital system as safe, what exactly are we describing? The code? The vendor’s default build? The configuration in this hospital? Its connections to other systems? The hardware on the ward? The staff and workflow? Or the organization’s ability to detect when any of those things change?”

### Evidence

“The ePRaSE study used fictional patients and known prescribing-risk scenarios. Forty-five trusts used 13 different electronic prescribing systems. Average good mitigation was about 50%, and the best trust result observed was 73%. Importantly, organizations using the same product still differed. This is not a patient-harm rate. It is evidence that safety performance is not delivered by the product name alone.”

### Distinct cases

“HSSIB points to several previous investigations. Keep them separate. One concerned time-critical Parkinson’s medication in an ED. One concerned restarting anticoagulation after a procedure. Another concerned insulin after discharge. Ann’s older discharge case involved concurrent anticoagulants. Felicity’s paediatric case involved a locally adapted adult system. These are not one hospital, one vendor or one causal chain. Their shared analytical lesson is that different safety constraints failed in different parts of the wider system.”

### Procurement

“By the time a prescriber sees a screen, many consequential decisions have already been made: what the organization required, what the contract made enforceable, what the supplier provided, how the system was configured, what interfaces were built, who owned the hazard log, and whether anyone was resourced to keep testing after go-live.”

### Close

“Use errors happen at the visible end of a long chain of design and governance. If we only retrain the person at the screen, we have ignored the people who specified, purchased, configured, connected, maintained and assured that screen. Buy the capability. Prove the performance. Keep proving it.”

## Official and primary sources

1. **Health Services Safety Investigations Body.** *Electronic prescribing and medicines administration: procurement and safety learning in acute hospitals.* Published 28 May 2026. <https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/fourth-investigation-report/>. Primary source for the report scope, evidence-gathering, findings, recommendations, observations, prior-event summaries and status. PDF: <https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/fourth-investigation-report/pdf/>.
2. **HSSIB.** *Medication related harm.* <https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/>. Official programme page and publication timeline showing the three local reports followed by the national investigation.
3. **Klein S, Tsanas A, Coleman J, et al.** “A simulation study to quantitatively assess the performance of electronic prescribing systems in English NHS Hospital Trusts.” *Scientific Reports.* Published 16 January 2025;15:2120. <https://doi.org/10.1038/s41598-025-86112-w>. Primary study for the 68 pharmacists, 45 trusts, 13 systems, variability, approximately 50% average good mitigation and 73% maximum observed trust result. The limitations section supports the self-assessment, participation and validation guardrails.
4. **Electronic Prescribing Risk and Safety Evaluation programme.** “About ePRaSE.” <https://eprase.info/about/>. Current programme description and explanation of structured fictional-patient testing, local reports, benchmarking and continuous optimisation.
5. **HSSIB.** *Medication not given: administration of time critical medication in the emergency department.* Published 5 December 2024. <https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/investigation-report/>. Primary source for the Parkinson’s event; 18 scheduled doses, seven not given, three late, eight on time; and the multifactorial ED/ePMA findings.
6. **HSSIB.** *Medication not given: anticoagulation before and after a procedure.* Published 13 March 2025. <https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/second-investigation-report/>. Primary source for the paused anticoagulant event.
7. **HSSIB.** *Medication not given: discharge from an acute hospital to the community.* Published 14 August 2025. <https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/third-investigation-report/>. Primary source for the insulin and cross-provider interoperability event.
8. **HSIB/HSSIB legacy report.** *Electronic prescribing and medicines administration systems and safe discharge.* Final report published 24 October 2019. <https://www.hssib.org.uk/patient-safety-investigations/electronic-prescribing-and-medicines-administration-systems-and-safe-discharge/>. Primary source for Ann’s distinct anticoagulant/discharge event and earlier ePMA recommendations.
9. **HSIB/HSSIB legacy report.** *Weight-based medication errors in children.* <https://www.hssib.org.uk/patient-safety-investigations/weight-based-medication-errors-in-children/>. Primary source for Felicity’s distinct paediatric dosing/configuration event.
10. **NHS England.** *National patient safety alert—harm from incorrect recording of a penicillin allergy as a penicillamine allergy.* 2025. <https://www.england.nhs.uk/long-read/national-patient-safety-alert-harm-from-incorrect-recording-of-a-penicillin-allergy-as-a-penicillamine-allergy/>. Official alert for the distinct allergy-recording risk.

---

## Bottom-line recommendation for course planning

**Keep this brief available, but do not automatically add all 12 minutes.** Its strongest form for the introductory lecture is the four-minute “same software, different safety” bridge after the Human–Tech Ladder or the EHR/fax sequence. Promote it to the full segment only if procurement, informatics governance and lifecycle assurance are learning priorities for this cohort. If the ADC segment already occupies that territory, park this full version for a later class or appendix.

The content earns its place only when the student leaves with this idea:

> **Digital medication safety is not installed. It is continuously produced.**
