window.MODULE = {
  slug: 'parkinsons-medication',
  title: 'Time is part of the dose: preserving a Parkinson medication schedule',
  shortTitle: 'Time-critical Parkinson medication',
  runtime: '10 slides · 10 to 12 minutes',
  purpose: 'A reusable case about preserving a person-specific regimen across roles, records, places and downtime.',
  audienceContract: 'Follow one schedule across every transition without turning one missed dose into a one-person explanation.',
  argument: 'When ownership and information fragmented, the patient and family were asked to supply the integration.',
  sources: [
    {
      id: 'hssib-parkinson',
      status: 'PRIMARY CASE SOURCE',
      label: 'HSSIB. Medication not given: administration of time critical medication in the emergency department. 5 December 2024.',
      short: 'HSSIB · time-critical medication investigation · 2024',
      url: 'https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/investigation-report/',
      boundary: 'Primary source for the single investigated event, reconstructed dose record, ED and corridor exposure, roles, information, ePMA and adaptations. It does not establish that delayed medication, corridor care or any single factor caused deterioration or death.'
    },
    {
      id: 'nice-levodopa',
      status: 'QUALITY STANDARD',
      label: 'NICE QS164. Quality statement 4: Levodopa in hospital or a care home. 2018.',
      short: 'NICE · levodopa quality statement · 2018',
      url: 'https://www.nice.org.uk/guidance/qs164/chapter/quality-statement-4-levodopa-in-hospital-or-a-care-home',
      boundary: 'Recommends administration within 30 minutes of the individually prescribed time. NICE states that the 30-minute timeframe is based on expert consensus, not a universal biological cliff.'
    },
    {
      id: 'rcem-qip',
      status: 'CURRENT QI PROGRAMME REPORT',
      label: 'Royal College of Emergency Medicine. Time Critical Medication QIP 2025: National Report. June 2026.',
      short: 'RCEM · Time Critical Medication QIP 2025',
      url: 'https://rcem.ac.uk/wp-content/uploads/2026/06/RCEM-Time-Critical-Medications-QIP-National-Report-2025.pdf',
      boundary: 'Quality-improvement submissions from participating EDs, not national population prevalence. The report supports programme measures, not causal explanations for delay.'
    }
  ],
  slides: [
    {
      id: 'park-s01', title: 'Four times make one regimen', section: 'Observe', time: '0:00',
      className: 'photo-fill', visualType: 'generated', source: 'hssib-parkinson',
      html: `<img class="visual-field" src="assets/generated/parkinsons-time-dose.png" alt="Original teaching object study of four analogue clocks showing scheduled times beside two blank medicine containers"><div class="photo-copy" style="top:33%"><p class="eyebrow">08:00 · 12:00 · 16:00 · 20:00</p><h1 class="hero small">What is<br>the order?</h1><p class="lede">Two strengths. Four times. One individualized regimen.</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical object study · not the investigated medicine</div>`,
      note: 'Ask what constitutes the medication order. The investigated patient normally took two strengths of co-beneldopa at 08:00, 12:00, 16:00 and 20:00. This is one person’s regimen, not a standard schedule for every person with Parkinson disease.'
    },
    {
      id: 'park-s02', title: 'Time is part of the dose', section: 'Principle', time: '1:00',
      className: 'gold center', visualType: 'native', source: 'nice-levodopa',
      html: `<p class="eyebrow">Not the hospital round · the individually prescribed time</p><h1 class="hero wide">Time is part<br>of the dose.</h1><p class="lede">NICE uses a 30-minute quality threshold for levodopa.</p><p class="teaching-copy" style="margin-top:1.4cqw">The threshold is based on expert consensus. It is not a universal cliff at minute 31.</p>`,
      note: 'Make the principle memorable without overclaiming. NICE says adults should receive levodopa within 30 minutes of their individually prescribed time and notes that the timeframe is based on expert consensus.'
    },
    {
      id: 'park-s03', title: 'Read the investigation record', section: 'Event facts', time: '2:00',
      className: 'artifact-slide', visualType: 'artifact', truth: 'AUTHENTIC SOURCE EXCERPT · WHAT DOES THE DENOMINATOR MEAN?', source: 'hssib-parkinson',
      html: `<div class="artifact-field"><img style="width:auto;height:43cqw;object-fit:contain" src="../assets/source-images/forensic/hssib-parkinsons-executive-summary-8-of-18.png" alt="HSSIB executive summary excerpt reporting seven doses not given, three late and eight of eighteen on time"></div><div class="artifact-credit">HSSIB, 2024 · executive-summary excerpt · the detailed record retains uncertainty</div>`,
      note: 'Eighteen counts the two strengths separately. It is not 18 medication rounds. Preserve the word potentially because the record reconstruction was uncertain. Do not infer an exact number of self-administered doses.'
    },
    {
      id: 'park-s04', title: 'The schedule crossed a long emergency stay', section: 'Journey', time: '3:15',
      className: 'dark', visualType: 'native', source: 'hssib-parkinson',
      html: `<p class="eyebrow">One investigated event</p><div class="pathway"><article><b>ED exposure</b><strong>52 hours</strong><span style="font-size:1.9cqw">total time in the emergency department</span></article><article><b>Temporary space</b><strong>44 hours</strong><span style="font-size:1.9cqw">in a corridor bed after early day two</span></article><article><b>Denominator</b><strong>18 due</strong><span style="font-size:1.9cqw">two strengths counted as capsule-level doses</span></article><article><b>Record result</b><strong>potentially 8</strong><span style="font-size:1.9cqw">on time · 7 not given · 3 late</span></article></div><p class="teaching-copy" style="margin:1.6cqw 0 0">Three mechanisms: not prescribed · wrong regimen · prescribed but not given.</p>`,
      note: 'The event reached the medication result through several mechanisms: early doses were not prescribed and some were self-administered, the morning regimen was later incorrect, and one prescribed dose was not given on day three. Do not say the medication delays or corridor stay caused deterioration or death.'
    },
    {
      id: 'park-s05', title: 'The person carried safety-critical knowledge', section: 'Continuity', time: '4:35',
      className: 'photo-fill', visualType: 'generated', source: 'hssib-parkinson',
      html: `<img class="visual-field" src="assets/generated/parkinsons-continuity-handoff.png" alt="Original teaching image of a family member sharing a small handwritten card with a nurse while an older adult sits nearby"><div class="photo-copy"><p class="eyebrow">Patient + family + records + team</p><h1 class="hero small">Listen.<br>Reconcile.<br>Preserve.</h1><p class="lede">Patient expertise is a safety input, not a substitute for a reliable process.</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical handoff · not case photography</div>`,
      note: 'The patient and his son held important regimen knowledge, while available records were incomplete or outdated. Any source can be wrong. The design task is to preserve conflict until it is reconciled, assign an owner and show completion.'
    },
    {
      id: 'park-s06', title: 'Paper and electronic authority diverged', section: 'Downtime', time: '5:40',
      className: 'photo-fill', visualType: 'generated', source: 'hssib-parkinson',
      html: `<img class="visual-field" src="assets/generated/parkinsons-paper-epma-boundary.png" alt="Original overhead teaching image of a hand on a blank paper chart beside a pager, clock, medicine container and blank tablet"><div class="photo-copy" style="top:34%"><p class="eyebrow">Outage → paper → ePMA recovery</p><h1 class="hero small">Which record<br>still counts?</h1><p class="lede">Recovery changed the authority of information mid-journey.</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical transition · not the investigated system</div>`,
      note: 'During an unplanned outage, a noon dose was on paper. When ePMA returned, a past dose could not be entered retrospectively and the paper chart was treated as redundant, contributing to missed noon doses. The outage was one interacting condition, not the sole cause.'
    },
    {
      id: 'park-s07', title: 'This is the corridor case through a medication lens', section: 'Same event, different lens', time: '6:50',
      className: 'artifact-slide', visualType: 'artifact', truth: 'AUTHENTIC HSSIB FIGURE · SAME EVENT AS CORRIDOR CARE · TWO LENSES', source: 'hssib-parkinson',
      html: `<div class="artifact-field"><img src="../assets/source-images/forensic/hssib-parkinsons-care-model.png" alt="HSSIB CARe model showing demand, capacity, adaptations and outcomes in the investigated event"></div><div class="artifact-credit">Corridor lens: space + flow · medication lens: time + ownership · do not count as independent cases</div>`,
      note: 'State this explicitly: the corridor-care module and this Parkinson medication module are different analyses of the same HSSIB event, not two independent cases. Choose one full module in a single lecture, or use this slide to integrate the lenses.'
    },
    {
      id: 'park-s08', title: 'The wider programme still shows a reliability gap', section: 'Current context', time: '8:05',
      className: 'light center', visualType: 'native', source: 'rcem-qip',
      html: `<p class="eyebrow">RCEM Time Critical Medication QIP 2025 · published June 2026</p><div class="number-row"><div><strong>122</strong><span>participating EDs</span></div><div><strong>47.6%</strong><span>levodopa patients identified within 30 minutes</span></div><div><strong>38.4%</strong><span>eligible levodopa dose records on time</span></div></div><p class="teaching-copy" style="margin:2cqw 0 0">18,067 eligible submitted cases. QI submissions, not national prevalence.</p>`,
      note: 'The programme received 18,570 submissions and 18,067 met eligibility criteria. Identification and on-time administration percentages are QI performance in participating submissions. They do not explain why delays occurred and are not a national patient-harm rate.'
    },
    {
      id: 'park-s09', title: 'Design one reliable link', section: 'Pod exercise', time: '9:15',
      className: 'gold center', visualType: 'native', truth: 'CLASSROOM DESIGN EXERCISE · PROPOSALS ARE NOT CASE FINDINGS',
      html: `<p class="eyebrow">Six pods · 45 seconds · two reports</p><h1 class="hero small wide">Owner. Trigger. Completion. Fallback.</h1><div class="grid-3" style="width:92%;margin-top:2cqw"><article class="card"><h3>Identify + verify</h3><p>Recognize the schedule and reconcile competing sources.</p></article><article class="card"><h3>Prescribe + supply</h3><p>Preserve exact times and make medication accessible.</p></article><article class="card"><h3>Administer + hand off</h3><p>Record what happened across place, shift and downtime.</p></article></div><p class="big-question" style="margin:1.6cqw 0 0">How could your link look complete and still fail?</p>`,
      note: 'Default ten-minute route: give six pods 45 seconds, then take two ten-second reports. Eight-minute route: 20 seconds and one report. Twelve-minute route: 90 seconds and up to four reports. Pods cover identify, verify, prescribe, supply, administer or self-administer, and handoff or downtime. Each names an owner, trigger, completion signal, fallback, and one silent failure.'
    },
    {
      id: 'park-s10', title: 'Do not make the patient the interface', section: 'Return', time: '10:50',
      className: 'dark center', visualType: 'native', source: 'hssib-parkinson',
      html: `<p class="eyebrow">Use error, not user error</p><h1 class="hero wide">The schedule disappeared<br>between systems.</h1><p class="lede">The patient was asked to supply the integration.</p><p class="big-question" style="margin-top:2.2cqw;color:var(--module-gold)">Can your system preserve one person’s regimen on its worst ordinary day?</p>`,
      note: 'Close on continuity rather than blame. Patients and families are safety-critical participants, but a care system should not depend on them being the only interface among incomplete records, roles, service hours, physical locations and technology states.'
    }
  ]
};
