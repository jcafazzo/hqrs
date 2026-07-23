window.MODULE = {
  slug: 'fatigue',
  title: 'Fatigue is a system condition',
  shortTitle: 'Fatigue',
  runtime: '11 min',
  purpose: 'Treat changing human capacity as a design input, then test controls for displaced work.',
  sources: [
    {
      id: 'niosh',
      label: 'US National Institute for Occupational Safety and Health. Fatigue and Work. Updated 3 March 2026.',
      short: 'NIOSH · Fatigue and Work · 2026',
      url: 'https://www.cdc.gov/niosh/fatigue/about/index.html',
      status: 'GOVERNMENT GUIDANCE',
      boundary: 'General occupational summary. It does not assign a fixed error rate to healthcare fatigue or define one universal hour at which everyone becomes unsafe.'
    },
    {
      id: 'weaver',
      label: 'Weaver MD et al. Impact of work schedules of senior resident physicians on patient and resident physician safety. BMJ Medicine. 2023.',
      short: 'Weaver et al. · BMJ Medicine · 2023',
      url: 'https://bmjmedicine.bmj.com/content/2/1/e000320',
      status: 'PROSPECTIVE OBSERVATIONAL COHORT',
      boundary: 'US resident physicians, self-reported work hours and outcomes, with possible participation bias. Association does not establish causation or generalize to the whole workforce.'
    },
    {
      id: 'rosters',
      label: 'Landrigan CP et al. Effect on Patient Safety of a Resident Physician Schedule without 24-Hour Shifts. New England Journal of Medicine. 2020.',
      short: 'ROSTERS · NEJM · 2020',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7405505/',
      status: 'RANDOMIZED CROSSOVER TRIAL',
      boundary: 'Six US pediatric ICUs. Site effects varied, workload changed with the schedule, and secondary workload analyses were exploratory. The result does not show that long shifts are safer.'
    },
    {
      id: 'hssib-fatigue',
      label: 'Health Services Safety Investigations Body. The impact of staff fatigue on patient safety. 24 April 2025.',
      short: 'HSSIB · staff fatigue · 2025',
      url: 'https://www.hssib.org.uk/patient-safety-investigations/the-impact-of-staff-fatigue-on-patient-safety/investigation-report/',
      status: 'OFFICIAL SAFETY INVESTIGATION',
      boundary: 'The displayed systems map explains factors affecting fatigue reporting behaviour. It is not a causal model or prevalence estimate for fatigue-related harm.'
    },
    {
      id: 'ahrq',
      label: 'Agency for Healthcare Research and Quality. Fatigue and Sleepiness of Clinicians Due to Hours of Service. Making Healthcare Safer IV. May 2024.',
      short: 'AHRQ · Making Healthcare Safer IV · 2024',
      url: 'https://effectivehealthcare.ahrq.gov/products/fatigue-sleepiness/rapid-research',
      status: 'GOVERNMENT RAPID REVIEW',
      boundary: 'English-language research since 2013, concentrated in physician trainees and scheduling interventions. The review found mixed effects and does not identify one best universal policy.'
    }
  ],
  slides: [
    {
      id: 'fatigue-s01',
      title: 'What does the system allow at 04:30?',
      section: 'Observe',
      time: '0:00',
      className: 'photo-fill',
      visualType: 'generated',
      html: `<img class="visual-field" src="assets/generated/fatigue-0430.png" alt="Original generated teaching image of a clinician doing ordinary cognitive work during a hospital night shift"><div class="photo-copy"><p class="eyebrow">It is 04:30</p><h1 class="hero small">Working memory needs backup.</h1><p class="big-question">What does the system let them do next?</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical · not an error event</div>`,
      note: 'Pause for five seconds. Take three rapid answers without asking anyone to disclose a personal error. Common answers are coffee, slow down, double-check, take a break, call for relief, or hand off. Ask which answers the system has actually resourced and authorized.'
    },
    {
      id: 'fatigue-s02',
      title: 'Changing capacity changes performance',
      section: 'Define',
      time: '1:05',
      className: 'center dark',
      visualType: 'native-evidence',
      source: 'niosh',
      html: `<p class="eyebrow">Foreseeable operating condition</p><div class="grid-4" style="width:96%"><div class="card"><h3>Reaction time</h3><p>can slow</p></div><div class="card"><h3>Attention</h3><p>can narrow</p></div><div class="card"><h3>Memory</h3><p>can weaken</p></div><div class="card"><h3>Judgment</h3><p>can degrade</p></div></div><p class="lede">Fatigue is not a character flaw.</p>`,
      note: 'Do not equate fatigue, sleepiness and burnout. They overlap but are not interchangeable. Do not offer one universal fatigue threshold. Shift timing, prior sleep, workload, breaks and individual factors all matter.'
    },
    {
      id: 'fatigue-s03',
      title: 'Longer hours were associated with more reported errors',
      section: 'Evidence',
      time: '2:00',
      className: 'center',
      visualType: 'native-evidence',
      source: 'weaver',
      truth: 'PROSPECTIVE OBSERVATIONAL COHORT · SELF-REPORTED HOURS AND OUTCOMES',
      html: `<p class="eyebrow">US PGY2+ resident physicians</p><div class="number-row"><div><strong>4,826</strong><span>participants</span></div><div><strong>38,702</strong><span>monthly reports</span></div><div><strong>2.36</strong><span>odds ratio for self-reported medical error, over 60 to 70 hours versus 48 or less</span></div></div><p class="teaching-copy">Associated is the operative word.</p>`,
      note: 'State the 95 percent confidence interval for the odds ratio if asked: 2.01 to 2.78. Do not translate the odds ratio into patients harmed, and do not generalize this resident cohort to nurses, allied health professionals, or every setting.'
    },
    {
      id: 'fatigue-s04',
      title: 'A clock change moves work',
      section: 'Complicate',
      time: '3:10',
      className: 'photo-fill',
      visualType: 'generated',
      source: 'rosters',
      html: `<img class="visual-field" src="assets/generated/fatigue-handoff-object.png" alt="Original generated teaching image of the physical work objects and information boundary created by a clinical handoff"><div class="photo-copy"><p class="eyebrow">Ask the second question</p><h1 class="hero small">Where did the work go?</h1><p class="lede">Shorter shifts can change workload, handoffs, coverage and circadian timing.</p></div><div class="generated-credit">Original Image 2 teaching image · conceptual · not trial-site evidence</div>`,
      note: 'This image is a teaching inference, not a photograph from ROSTERS. Say: hours matter, but changing hours changes other parts of the system. We need to inspect the work transferred across the new boundary.'
    },
    {
      id: 'fatigue-s05',
      title: 'The apparent fix changed workload',
      section: 'Evidence',
      time: '4:05',
      className: 'dark',
      visualType: 'native-evidence',
      source: 'rosters',
      truth: 'SIX US PEDIATRIC ICUS · RANDOMIZED CROSSOVER · SITE EFFECTS VARIED',
      html: `<p class="eyebrow">ROSTERS trial</p><div class="compare"><article><b>Patients per resident</b><strong>6.7&nbsp;&rarr;&nbsp;8.8</strong><p>schedule containing 24-hour shifts versus schedule without them</p></article><article><b>Observed serious errors</b><strong>79.0&nbsp;&rarr;&nbsp;97.1</strong><p>resident-related errors per 1,000 patient-days</p></article></div><p class="teaching-copy">Shorter shifts improved sleep, but the work system changed too.</p>`,
      note: 'Do not conclude that long shifts are safer. The trial removed 24-hour shifts, sleep and neurobehavioural performance improved, workload increased, and the observed serious-error rate was higher. Site results varied, and exploratory workload adjustment did not support one simple causal story.'
    },
    {
      id: 'fatigue-s06',
      title: 'Intervene, then look for displacement',
      section: 'System',
      time: '5:25',
      className: 'light',
      visualType: 'native-diagram',
      source: 'ahrq',
      html: `<p class="eyebrow">The operating system</p><div class="pathway"><article><b>Capacity</b><strong>Demand + staffing</strong><span>roster, overtime, patient load</span></article><article><b>Recovery</b><strong>Sleep + circadian timing</strong><span>opportunity, quality, sequence</span></article><article><b>Performance</b><strong>Task + interface</strong><span>memory, attention, interruptions</span></article><article><b>Resilience</b><strong>Detect + recover</strong><span>relief, check, escalation, learning</span></article></div><p class="big-question" style="margin-top:2cqw">What might your control accidentally worsen?</p>`,
      note: 'Ask someone to choose the first box they would change. Then ask which box that intervention might worsen. AHRQ found mixed effects across fatigue interventions and a narrow evidence base. The point is not paralysis, but whole-system evaluation.'
    },
    {
      id: 'fatigue-s07',
      title: 'Reporting fatigue is safety work',
      section: 'Observe source',
      time: '6:35',
      className: 'source-inspection',
      visualType: 'source-artifact',
      brand: false,
      source: 'hssib-fatigue',
      truth: 'SOURCE FIGURE · REPORTING BEHAVIOUR · NOT A CAUSAL HARM MODEL',
      html: `<p class="inspection-cue">Find one barrier and one enabler</p><img class="inspection-image" src="../assets/source-images/forensic/hssib-fatigue-reporting-behaviour.png" alt="HSSIB systems map, adapted from Shorrock, of capability, opportunity, motivation and organisational factors influencing fatigue reporting behaviour"><div class="inspection-credit"><strong>Primary source</strong><a href="https://www.hssib.org.uk/patient-safety-investigations/the-impact-of-staff-fatigue-on-patient-safety/investigation-report/" target="_blank" rel="noreferrer">HSSIB, 2025, Figure 1 · adapted from Shorrock · fatigue reporting behaviour</a></div>`,
      note: 'Give the room ten seconds. Ask for one organisational and one social influence. Preserve the boundary: this map explains reporting behaviour, not the causes or prevalence of fatigue-related clinical harm.'
    },
    {
      id: 'fatigue-s08',
      title: 'Design a control that can actually operate',
      section: 'Interaction',
      time: '7:35',
      className: 'gold',
      visualType: 'interaction',
      html: `<p class="eyebrow" style="color:var(--module-red)">Five tables · 45 seconds · two reports</p><h1 class="hero small">One task. Five control families.</h1><div class="grid-4" style="margin-top:1.9cqw;grid-template-columns:repeat(5,1fr)"><div class="card"><h3>Prevent</h3><p>capacity</p></div><div class="card"><h3>Detect</h3><p>risk</p></div><div class="card"><h3>Adapt</h3><p>the task</p></div><div class="card"><h3>Recover</h3><p>before harm</p></div><div class="card"><h3>Learn</h3><p>without blame</p></div></div><p class="big-question" style="margin-top:1.7cqw">What authority, staffing or information does it require?</p>`,
      note: 'Default ten-minute route: give tables 45 seconds and take two ten-second reports. Eight-minute route: 20 seconds and one report. Twelve-minute route: 75 seconds and one sentence from each table. Prompt: it is 04:30 and a high-consequence medication task cannot disappear. If the answer is coffee, be careful, or sleep better, ask which upstream condition remains unchanged.'
    },
    {
      id: 'fatigue-s09',
      title: 'Relief and handoff are designed controls',
      section: 'Act',
      time: '9:00',
      className: 'photo-fill',
      visualType: 'generated',
      html: `<img class="visual-field" src="assets/generated/fatigue-protected-handoff.png" alt="Original generated teaching image of outgoing and incoming clinicians conducting a structured handoff at shift change"><div class="photo-copy"><p class="eyebrow">A credible response</p><h1 class="hero small">Coverage. Authority. Information.</h1><p class="lede">Self-reporting fatigue is a safety behaviour only if the system can respond.</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical · not a study site</div>`,
      note: 'Name layered controls: staffing and workload limits, protected recovery, task deferral criteria, planned handoffs, independent checking for selected high-consequence work, and a no-fault escalation path. Personal strategies can be minor layers, not the primary design.'
    },
    {
      id: 'fatigue-s10',
      title: 'Design the work, not just the clock',
      section: 'Return',
      time: '9:35',
      className: 'photo-fill',
      visualType: 'generated',
      html: `<img class="visual-field" src="assets/generated/fatigue-0430.png" alt="Original generated teaching image returning to ordinary cognitive work during a hospital night shift"><div class="photo-copy"><p class="eyebrow">Use error, not user error</p><h1 class="hero small">Design the work, not just the clock.</h1><p class="big-question">At 04:30, what safe option is already prepared?</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical · not an error event</div>`,
      note: "Return to the opening without soliciting another discussion. A safe answer is not one heroic action. It is a prepared set of options with authority, coverage and no punishment for using them. The person's changing capacity is a system design input."
    }
  ]
};
