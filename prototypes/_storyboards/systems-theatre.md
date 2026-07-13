# Systems Theatre

## Independent 26-minute opening prototype for HQRS 846

**Premise:** the room is not an audience watching a safety lecture. It is the instrument. Nine groups make a fast causal attribution, publicly commit to it, receive new system information, and then watch their own language change.

**Learner transformation:** move from “Who failed?” to “What conditions made this action likely, difficult to detect, or hard to recover from?” The memorable verbal correction is **use error, not user error**.

**Anchor:** the Epic Sepsis Model version 2 across four US health systems. The study is especially useful because it resists a simplistic “AI works / AI fails” story. One product family became four local implementations: each site fine-tuned the model on local historical data; patient populations, sepsis prevalence, score thresholds, performance, and the resulting work differed.

**Duration:** 26:30 as written; 22 minutes compressed; 30 minutes with all nine groups reporting.

**Audience geometry:** 44–45 graduate clinicians and life-science professionals, seated as nine mixed-discipline groups of about five.

---

## Why this direction earns its name

The dramatic action is not on the screen. It occurs in the room:

1. The groups see one action and produce nine causal stories.
2. The evidence makes those stories harder to defend.
3. Three different clinical scenes reveal recurring system mechanisms.
4. The groups redesign the conditions, not the people.
5. The room repeats its first vote and sees that it has changed.

This preserves Jobs/TED stagecraft—black stage, one idea per frame, hard cuts, silence, controlled reveals—but replaces the charismatic product reveal with a **causal-boundary reveal**. Each click widens the frame.

---

## Room and prop setup

Prepare the room before students enter.

- Seat learners in nine cross-disciplinary groups. Number tables 1–9.
- Put four 5 × 7 inch voting cards at every table:
  - coral: `PERSON`
  - graphite: `MODEL`
  - cyan: `WORKFLOW`
  - warm white: `NOT ENOUGH INFORMATION`
- Put one sealed station envelope at each table:
  - Tables 1, 4, 7: `A · CORRIDOR`
  - Tables 2, 5, 8: `B · FATIGUE`
  - Tables 3, 6, 9: `C · DISPENSING CABINET`
- Each envelope contains an A5 case card and one response sheet with three lines: `CAUSE / REDESIGN / EVIDENCE`.
- Give each table one thick black marker. The physical act of writing and holding up a causal claim is more theatrical than a polling app.
- If a teaching assistant is available, have them record the first and second vote as nine coloured dots in presenter view. If not, Cafazzo simply counts aloud. The count, not the technology, is the artefact.
- Do not place the source papers on tables. Put full citations in presenter notes and the companion page.

**Facilitation boundary:** no learner is asked to disclose a personal error, fatigue episode, or safety incident. Analyse published cases and hypothetical implementation choices. Make explicit that systems analysis supports learning; it is not itself a process for adjudicating culpability or misconduct.

---

## Visual and motion grammar

- **Canvas:** 16:9, ink `#0B0D0F` or warm white `#F7F7F5`.
- **Signature cyan:** `#08BFD5`, always with ink text; dark teal `#006C75` when white type is needed.
- **Coral:** `#FF5A52`, reserved for premature blame or a violated expectation.
- **Type:** 96–116 px hero statements, 68–80 px questions, 38–46 px response choices, 24–28 px sources.
- **Motion:** hard cuts for judgments; a single 400 ms outward move when the system boundary widens; a 200 ms dissolve for evidence. No decorative movement.
- **Screen discipline:** the projected slide never becomes the worksheet. Students look down only during the three-minute station interval.
- **Sound:** none. The most important transition is silence after the first vote.

---

## 22-slide/click-state storyboard

The wording below is the exact projected copy. Text in brackets is a visual or stage direction, not slide copy.

### Act I — The attribution trap (0:00–7:45)

| State | Time | Exact on-slide words and reveal | Facilitation and evidence notes |
| --- | ---: | --- | --- |
| **1. Cold open: the action** | 0:00–0:35 | `[Near-black screen. A large, spare alert card appears.]`<br><br>`SEPSIS RISK`<br>`HIGH`<br><br>`DISMISS`<br><br>`A clinician dismisses the alert.` | Enter on black. Say only: “This happened. Why?” This is a deliberately hypothetical action, **not** an event reported in the 2026 validation study. Its purpose is to expose the room's attribution, not claim an observed dismissal. Pause for eight seconds. |
| **2. Name the first explanation** | 0:35–1:10 | `WHY?`<br><br>`PERSON     MODEL     WORKFLOW     NOT ENOUGH INFORMATION` | Tell each group: “Choose the explanation you would investigate first. You have twenty seconds.” Do not define the options. The forced choice surfaces their default system boundary. |
| **3. Public commitment** | 1:10–1:55 | `CHOOSE.`<br>`NO HEDGING.` | Count down `3 · 2 · 1`; all nine tables raise one card. Count the cards aloud, neutrally. Do not reward `NOT ENOUGH INFORMATION`; it is not automatically the sophisticated answer. Ask one `PERSON` table and one other table for a sentence, without debate. |
| **4. Mirror the room** | 1:55–2:30 | `WE JUST WROTE A CAUSAL STORY`<br>`FROM ONE ACTION.` | Hard cut. Let the line sit. Say: “The clinician did something. We supplied the cause.” This is the first reveal: the room, not the clinician, has acted. |
| **5. Widen one level** | 2:30–3:20 | `ONE MODEL FAMILY.`<br>`FOUR LOCAL IMPLEMENTATIONS.`<br><br>`227,091 inpatient encounters` | Four cyan points move outward from one centre. In small type: `Epic Sepsis Model v2 · four US health systems · Wong et al., 2026`. Say “health systems,” not “four hospitals”: Emory's data included six affiliated hospitals. Each site fine-tuned ESM v2 on a site-specific historical training set. |
| **6. The threshold reveal** | 3:20–4:10 | `14     29     37     35`<br><br>`Score thresholds for the same 60% sensitivity` | Reveal one number at a time over four anonymous site labels. The numbers are the site-specific score thresholds used analytically to match 60% encounter-level sensitivity—not a claim that clinicians saw these four thresholds in an identical workflow. Ask: “If the threshold changes, has the work changed?” |
| **7. The performance reveal** | 4:10–5:00 | `13%     26%     25%     20%`<br><br>`Positive predictive value` | Keep the same four positions so learners see a mapping, not a new graph. Encounter-level AUROC also ranged `0.82–0.92`; say this aloud only if someone asks whether the model discriminated well. The central point is that a respectable AUROC does not specify the workload or usefulness of an alerting system. |
| **8. The work reveal** | 5:00–5:50 | `35     26     22     21`<br><br>`NUMBER NEEDED TO EVALUATE`<br>`12-hour prediction horizon` | Use the paper's term **number needed to evaluate (NNE)**. These are above-threshold predictions per true-positive prediction at the 12-hour horizon under the study's analytic definition. Do **not** call them observed interruptive alerts handled by clinicians. The paper simulated an eight-hour silencing strategy; it did not measure clinical workload directly. |
| **9. Correct the slogan** | 5:50–6:35 | `SAME PRODUCT NAME.`<br><br>`DIFFERENT LOCAL MODEL.`<br>`DIFFERENT POPULATION.`<br>`DIFFERENT THRESHOLD.`<br>`DIFFERENT WORK.` | This replaces the tempting but inaccurate line “the model didn't change.” All sites used ESM v2, but all fine-tuned it locally. The model, population, threshold, and implementation context all belong inside the causal frame. |
| **10. Ask again** | 6:35–7:10 | `WHO FAILED?` `[coral; then struck through]`<br><br>`WHAT CONDITIONS MADE DISMISSAL PREDICTABLE?` `[cyan]` | Do not re-vote yet. Take three fast conditions from the room and repeat them in system language: alert repetition, threshold choice, staffing, local prevalence, escalation path, timing, or competing work. Do not imply any one was present in the hypothetical dismissal. |
| **11. Install the language** | 7:10–7:45 | `USE`**`R`**` ERROR` `[the R is coral]`<br><br>`USE ERROR` `[the R lifts away; a thin cyan boundary expands around USE]`<br><br>`THE PERSON IS PART OF THE SYSTEM.` | Say: “This is not a trick that removes the person. It removes the person from the blame label and puts them back inside the system.” FDA defines use error as an outcome of device use different from that intended, potentially promoted by device design or the situation of use. For the broader course, use the phrase as a disciplined analytic stance, not a claim that responsibility never matters. |

### Act II — Three scenes, one recurring move (7:45–18:00)

| State | Time | Exact on-slide words and reveal | Facilitation and evidence notes |
| --- | ---: | --- | --- |
| **12. Put the room to work** | 7:45–8:20 | `THREE SCENES.`<br>`NINE TABLES.`<br>`THREE MINUTES.`<br><br>`1 · Write an eight-word cause`<br>`2 · Choose one redesign`<br>`3 · Name evidence it worked` | Tell groups to open their envelope only now. Assign a timekeeper, a writer, and a reporter. “You are not solving the whole case. You are demonstrating where you draw the system boundary.” Start a visible 3:00 timer, then step out of the centre of the room. |
| **13. The three freeze-frames** | 8:20–11:20 | `[Three equal columns. The assigned case is printed on each table's card; the screen is a distant reference.]`<br><br>`A · CORRIDOR`<br>`A patient collapses in a corridor. There is no emergency call bell. The nurse must shout for help.`<br><br>`B · FATIGUE`<br>`A staff member believes fatigue affected the accuracy of a pregnancy scan.`<br><br>`C · DISPENSING CABINET`<br>`A nurse selects morphine 10 mg tablets. The drawer contains morphine 2 mg ampoules. The nurse stops.` | Circulate silently. If a group writes “training,” ask “What would make the correct action the path of least resistance?” If they write “policy,” ask “How would the work be physically different tomorrow?” At 1:30 call “Now name evidence.” At 2:40 call “Commit to eight words.” Cases are compressed from HSSIB and ISMP Canada; no new patient outcome is invented. |
| **14. Commit the new causal story** | 11:20–13:00 | `COMMIT.`<br><br>`CAUSE: ____________________`<br>`REDESIGN: _________________`<br>`EVIDENCE: _________________` | One table from each station reads only its eight-word cause. The two sibling tables hold their response sheets up; Cafazzo asks whether their boundary is narrower or wider, not whether the answer is right. Use 30 seconds per station. Keep the remaining responses for the final synthesis. |
| **15. Station A reveal: corridor care** | 13:00–14:40 | `THE CORRIDOR IS PART OF THE CLINICAL SYSTEM.`<br><br>`CALL BELLS` `SIGHTLINES` `STAFFING`<br>`OXYGEN + SUCTION` `PATIENT FLOW`<br><br>`THE ENVIRONMENT IS NOT SCENERY.` | Build the five conditions around a central trolley, one per click within this state. HSSIB described temporary care environments as spaces not designed, staffed, or equipped for care. It reported nurses' concern about collapses where no emergency bell was available, alongside wider monitoring, staffing, equipment, privacy, infection-control, and flow issues. **Caution:** HSSIB found no evidence that the environment or response affected the outcome of the reported collapse; do not manufacture harm. Ask Station A: “Which redesign changes the room? Which merely asks the nurse to compensate?” |
| **16. Station B reveal: fatigue** | 14:40–16:20 | `FATIGUE IS NOT A CHARACTER FLAW.`<br><br>`SLEEP LOSS`<br>`EXTENDED WAKEFULNESS`<br>`CIRCADIAN PHASE`<br>`WORKLOAD`<br><br>`NOT ROUTINELY CAPTURED. OFTEN INDIVIDUALIZED.` | The four factors are the fatigue definition adopted by HSSIB from ICAO. HSSIB found organisational contributors including workload, long shifts, inadequate rest facilities and breaks; fatigue was often treated as an individual risk and was not routinely captured in safety learning. The scan account was a staff member's belief, not a causal adjudication. HSSIB also says the scale of fatigue-related patient harm is poorly measured. Ask Station B: “What would it mean to manage fatigue as a hazard rather than praise endurance?” |
| **17. Station C reveal: resilience** | 16:20–18:00 | `THE ERROR PROPAGATED.`<br>`PEOPLE INTERRUPTED IT.`<br><br>`300+ medication products affected`<br>`150+ transactions affected`<br>`0 reported patient harm` | Animate a single offset database row propagating through a network, then stop it with two human reports. ISMP Canada says a partial database import followed by a second import misaligned data. Nurses reported implausible displays within minutes: misoprostol tablets shown as 30 mL cups, and a morphine tablet selection directing a nurse to ampoules. The emergency plan and operations centre were activated. Ask Station C first, “Where was the error created?” then, “Where was it detected?” Preserve the phrase **reported patient harm**; this is a near-miss/resilience case, not proof of perfect detection. |

### Act III — Let the room observe itself changing (18:00–26:30)

| State | Time | Exact on-slide words and reveal | Facilitation and evidence notes |
| --- | ---: | --- | --- |
| **18. The causal-language ledger** | 18:00–19:10 | `THE ROOM'S LANGUAGE CHANGED.`<br><br>`ignored` `→ responding within…`<br>`careless` `→ working around…`<br>`tired` `→ exposed to…`<br>`caught it` `→ the system recovered because…` | Invite the remaining six table reporters to supply one phrase each. Repeat or write their actual verbs into the stems. Do not ban person-level facts; relocate them. “The nurse was fatigued” may be true, but is not yet an explanation of how fatigue was produced, tolerated, detected, or mitigated. |
| **19. Name the method after they have used it** | 19:10–20:00 | `SAME ACTION.`<br>`WIDER FRAME.`<br><br>`PERSON · TASK · TOOL · TEAM · ENVIRONMENT · ORGANIZATION · POLICY`<br><br>`YOU JUST DID SYSTEMS THINKING.` | Seven thin rings expand around one action. This is the moment to name SEIPS/Human-Tech Ladder as the diagnostic family, without teaching the entire framework. Say: “A system boundary is a choice. Widen it until you can see conditions you can redesign.” |
| **20. Return to the alert** | 20:00–22:00 | `RETURN TO THE ALERT.`<br><br>`REDESIGN ONE CONDITION.`<br><br>`Reduce the need to remember`<br>`Make the safer action easier`<br>`Make failure visible`<br>`Make recovery possible` | Give tables 75 seconds. Each chooses one condition around the sepsis alert—local validation, threshold, silencing, routing, staffing, escalation, interface, feedback—and one stronger response. They must also name one measure. Remind them that “educate the clinician to take alerts seriously” is a weak control unless paired with redesigned conditions. |
| **21. Test the intervention** | 22:00–24:30 | `DOES IT CHANGE THE SYSTEM?`<br><br>`OR ONLY ASK THE PERSON TO TRY HARDER?` | Take three 30-second proposals. After each, ask the room for a thumbs-up only if it changes at least one condition beyond motivation or vigilance. Use the existing Hierarchy of Intervention Effectiveness as the action lens: education and policy may contribute, but forcing functions, simplification, standardisation, automation with safeguards, and recovery design generally reduce reliance on perfect human performance. Avoid claiming that stronger-on-the-hierarchy automatically means contextually appropriate or harm-reducing. |
| **22. Re-vote and bookend** | 24:30–26:30 | `[First, return exactly to State 2.]`<br><br>`WHY?`<br>`PERSON     MODEL     WORKFLOW     NOT ENOUGH INFORMATION`<br><br>`[After the nine cards rise, hard cut to:]`<br><br>`PEOPLE WILL ERR.`<br>`SYSTEMS SHAPE WHETHER ERROR IS`<br>`LIKELY, VISIBLE, RECOVERABLE, OR HARMFUL.`<br><br>`USE ERROR.` | Repeat the vote with the same cards and count aloud. Do not demand that every group choose `WORKFLOW`; a defensible result may be more `NOT ENOUGH INFORMATION` because causal humility is part of systems thinking. Ask: “What information do you need now that you did not ask for twenty-five minutes ago?” Take two answers. Close: “The user never left the story. We changed the story they were placed inside.” Hold silence; do not append a recap slide. |

---

## Three station cards: printable exact copy

These can be printed directly. The reveal content stays sealed from the group until Cafazzo projects it.

### A · Corridor

> A patient collapses in a hospital corridor being used for care. There is no emergency call bell. The nurse must shout and wait until someone hears.
>
> Write:
> 1. an eight-word causal explanation;
> 2. one redesign stronger than “be more vigilant”;
> 3. one observation or measure that would show improvement.

### B · Fatigue

> A staff member believes their fatigue affected the accuracy of a pregnancy scan and contributed to serious safety issues for a mother and child.
>
> Write:
> 1. an eight-word causal explanation;
> 2. one redesign stronger than “manage your fatigue”;
> 3. one observation or measure that would show improvement.

### C · Automated dispensing cabinet

> During an automated dispensing cabinet upgrade, a nurse selects morphine 10 mg tablets. The cabinet directs the nurse to a drawer containing morphine 2 mg ampoules. The nurse stops and reports it.
>
> Write:
> 1. an eight-word causal explanation;
> 2. one redesign that improves prevention, detection, or recovery;
> 3. one observation or measure that would show improvement.

---

## Facilitation decision rules

Use these prompts to keep discussion at systems level without suppressing clinical expertise.

- When a learner says **“They should have…”**, ask: “What made that action easy, hard, visible, or invisible?”
- When a learner says **“More training”**, ask: “What changes for the next person at 03:00?”
- When a learner says **“The algorithm failed”**, ask: “Which model, threshold, population, workflow, or outcome?”
- When a learner says **“No one is accountable, then?”**, answer: “Systems analysis and accountability answer different questions. Learning asks how to make recurrence less likely and recovery more likely; culpability requires a separate fair process.”
- When a learner proposes a technology control, ask: “What new failure mode and new work does it introduce?”
- When a learner proposes an intervention, ask: “What would you measure, and compared with what?”
- When the room gets abstract, return to the physical scene: What did the person see? What else were they doing? What happened next? Where could the system detect and recover?

---

## Timing variants

### Compressed 22-minute run

- States 1–11: 6:30 rather than 7:45; take only one first-vote explanation.
- Station work: 2:15 rather than 3:00.
- State 14: read one cause from each station only.
- States 15–17: 60 seconds each.
- State 20: 45-second redesign.
- State 21: hear two proposals.
- Preserve the re-vote and closing silence; those are the payoff.

### Expanded 30-minute run

- Have all nine tables read their eight-word causal claim at State 14.
- After each station reveal, invite a 20-second revision from one sibling table.
- At State 21, hear one intervention for prevention, one for detection, and one for recovery.
- Do not expand by adding another case; deepen the visible revision of the room's explanations.

---

## Editorial map against the 2025 deck

This map distinguishes what remains valuable in the overall course from what appears in this independent opening. “Park” means preserved in a clearly labelled appendix or reassigned to a later lecture—not deleted.

| Decision | 2025 material | 2026 treatment in Systems Theatre | Rationale |
| --- | --- | --- | --- |
| **KEEP** | Frames 2–8, the attribution-trap mechanics of the Miss Universe opening | Keep the *mechanic*—the room makes and revises a judgment—but use the sepsis-alert vote as this prototype's independent cold open. Park the original sequence immediately behind it in the appendix for easy restoration. | The cognitive move is signature Cafazzo; repeating both cold opens would dilute the new prototype. |
| **KEEP** | “Humans are fallible. We will err.” and frames 353–354's circular return | Preserve the premise, but complete it in State 22: `Systems shape whether error is likely, visible, recoverable, or harmful.` | Fallibility becomes a design requirement rather than a fatalistic ending. |
| **KEEP** | Presenter-led minimalism, hard cuts, pauses, humour, clinical artefacts, cyan identity | Preserve fully, with corrected cyan contrast and sparse causal-layer motion. | The stagecraft is an asset; the refresh is editorial and evidentiary. |
| **KEEP FOR LATER** | Frames 46–50 AED, 127–146 pill bottle/EpiPen, 157–177 real HHF fieldwork, 225–242 radiation-interface before/after | Keep in the complete lecture after the prototype. Use at most one object case and one before/after case in the following 90 minutes. | These provide concrete design craft and proof that changed design changes performance. They need not compete for the opening. |
| **REFRESH** | Multiple overlapping diagnostic languages—empathy, Human-Tech Ladder, SEIPS, design thinking, service design | State 19 names one diagnostic family only after learners have enacted it: person, task, tool, team, environment, organization, policy. | Experience precedes terminology; one reusable frame is more transferable. |
| **REFRESH** | Hierarchy of Intervention Effectiveness | Use it briefly at State 21 as a test of the room's proposed controls, not as another model to memorise. | It becomes an action lens connected to an immediate decision. |
| **REFRESH** | Dense screenshots of journal pages, workflows, and browser/news evidence | Rebuild evidence as four numbers in fixed positions: thresholds, PPV, and NNE. Full tables live in notes/companion page. | The evidence becomes legible from the back of a 45-person room and supports rather than interrupts the reveal. |
| **PARK** | Dated press, social-media, and old-browser screenshots | Put in `Appendix · Historical/canonical examples`; do not use as current evidence in the opening. | The case may remain good while the visual culture dates the claim. |
| **PARK** | Competing late narratives: extended Apple/Tesla growth, Medly, refugee response, COVID response, and multiple service-design/HHF portfolio sequences | Preserve intact under `Appendix · Portfolio and service-design cases`; select one later as a capstone. | Each is a possible act; together they make the introductory lecture feel like three lectures. |
| **PARK** | Full model recaps and worksheets at the close | Move to course handout or post-lecture activity. End the opening with the repeated vote and `USE ERROR`. | The last image should be the learner transformation, not administration. |
| **NEW** | ESM v2 multisite validation | States 1–10 and 20–22 | A contemporary AI case makes implementation context visible and resonates across clinical and technical disciplines. |
| **NEW** | `USE ERROR` protected motif | State 11, every debrief, and State 22 | The current extracted slide text does not make the intended language visible. |
| **NEW** | Corridor care, fatigue, and ADC resilience stations | States 12–18 | The cases span environment, physiology/work organization, technology deployment, and successful recovery. Together they prevent “systems” from becoming synonymous with software. |
| **NEW** | Two identical public votes and a causal-language ledger | States 2–4 and 18–22 | The room generates visible evidence of its own shift. Interactivity is the narrative, not an interruption. |

---

## Evidence notes and claim guardrails

### Epic Sepsis Model v2

Use these exact claims:

- Wong et al. studied **227,091 inpatient encounters** across four US health systems.
- All sites used ESM v2 and **fine-tuned it using site-specific historical inpatient data** before implementation.
- Encounter-level AUROC ranged **0.82–0.92** across sites.
- At the 60% sensitivity operating point, thresholds were **14, 29, 37, and 35**; PPV was **0.13, 0.26, 0.25, and 0.20**.
- At a 12-hour prediction horizon, NNE was **35, 26, 22, and 21**.
- The authors modelled an eight-hour alert-silencing strategy and described high alert burden.

Do not say:

- “The identical model performed differently.” The product family was the same; the local models had site-specific fine-tuning.
- “Clinicians managed 21–35 interruptive alerts for every sepsis case.” NNE was an analytic prediction-level measure, not an observed count of clinician interruptions.
- “The model improved sepsis outcomes.” This was a prognostic validation and was not designed to evaluate mortality or other clinical outcomes.
- “The clinician dismissed an alert in this study.” The cold-open dismissal is explicitly hypothetical.

Primary source: [Wong A, Currey D, Schwinne M, et al. *Multicenter Prospective Validation of an Updated Proprietary Sepsis Prediction Model*. JAMA Network Open. 2026;9(2):e260181.](https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2845595) DOI: `10.1001/jamanetworkopen.2026.0181`.

### Corridor care

Use these exact claims:

- HSSIB defines temporary care environments as spaces not designed, staffed, or equipped for care, including corridors, waiting rooms, and chairs on wards.
- The investigation described risks involving monitoring, staffing, infection prevention, oxygen and suction, and emergency response.
- Nurses described patient collapses where no emergency call bell was present and staff had to shout for help.
- Hospitals also demonstrated adaptations and thoughtful local mitigations.

Do not claim the reported lack of a buzzer caused a documented adverse outcome. HSSIB explicitly says it found no evidence that the temporary environment or emergency response affected the outcome of the reported collapse. The investigation was a time-limited sample of multiple English hospitals; it is not an incidence study.

Primary source: [Health Services Safety Investigations Body. *Patient care in temporary care environments*. Published 8 January 2026.](https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/)

### Fatigue

Use these exact claims:

- HSSIB adopted a fatigue definition encompassing sleep loss, extended wakefulness, circadian phase, and mental or physical workload.
- It found that fatigue was not routinely captured in patient-safety reporting or learning and was often perceived as an individual staff risk.
- Organisational factors included workload, long shifts, insufficient rest facilities, and inadequate breaks.
- HSSIB reported a staff member's belief that fatigue affected pregnancy-scan accuracy; the report does not independently establish that causal chain.

Do not translate staff surveys or reported events into an incidence estimate. HSSIB says there was little evidence to quantify the size and scale of fatigue-related patient-safety risk.

Primary source: [Health Services Safety Investigations Body. *The impact of staff fatigue on patient safety*. Published 24 April 2025.](https://www.hssib.org.uk/patient-safety-investigations/the-impact-of-staff-fatigue-on-patient-safety/investigation-report/)

### Automated dispensing cabinet near miss

Use these exact claims:

- A partial medication-database import followed by a second import caused data misalignment that propagated across a hospital network's upgraded ADCs.
- Nurses noticed implausible cabinet content within minutes and reported it.
- More than **300 medication products** and **150 medication transactions** were affected; **no patient harm was reported**.
- Emergency preparedness, leadership, pharmacy/nursing collaboration, and frontline detection supported recovery.

Use the case to teach resilience as well as failure. `No reported patient harm` does not mean the system was safe by design or that every discrepancy was necessarily detected.

Primary source: [ISMP Canada. *Emergency Preparedness Mitigates Patient Harm during Failed Deployment of Upgraded Automated Dispensing Cabinets*. Published 31 July 2025.](https://ismpcanada.ca/bulletin/automated-dispensing-cabinets/)

### Use error terminology

The FDA describes use error as a device-use outcome different from what was intended, not due to device malfunction, that resulted or could have resulted in harm; it notes that design or the situation of use may promote the error and that other users may repeat it.

Primary source: [US Food and Drug Administration. *Human Factors: Postmarket Information—Device Surveillance and Reporting Processes*.](https://www.fda.gov/medical-devices/human-factors-and-medical-devices/human-factors-postmarket-information-device-surveillance-and-reporting-processes)

---

## Build brief for the eventual prototype

The prototype should not look like a miniature conference workshop. It should feel like a keynote whose most important visual is 45 people changing their minds.

- The first alert is large enough to feel like an object on stage, but generic enough not to mimic a specific production interface.
- The nine voting cards create the only saturated colour in the room during the first three minutes.
- Evidence stays spatially stable across States 6–8; the four sites never reorder.
- Station content uses documentary restraint: one scene, no sensational patient imagery, no invented tragedy.
- State 17 is the emotional turn. People are not only sources of error; they are also the system's capacity to detect and recover.
- The last vote visually repeats the first. The meaning changes because the room has changed.
- End on State 22. No agenda, learning-objective, bibliography, or “questions?” slide follows it.
