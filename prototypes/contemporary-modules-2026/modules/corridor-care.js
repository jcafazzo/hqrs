window.MODULE = {
  slug: 'corridor-care',
  title: 'Corridor care: when temporary becomes a care system',
  shortTitle: 'Corridor care',
  runtime: '10 min',
  purpose: 'Treat a temporary location as a whole care system, with duties tonight and tomorrow.',
  sources: [
    {
      id: 'hssib-medication',
      label: 'Health Services Safety Investigations Body. Medication not given: administration of time critical medication in the emergency department. 5 December 2024.',
      short: 'HSSIB · time-critical medication · 2024',
      url: 'https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/investigation-report/',
      status: 'OFFICIAL SAFETY INVESTIGATION',
      boundary: 'Single investigated event. The report does not establish that corridor conditions or omitted and late medication caused the patient death four weeks later.'
    },
    {
      id: 'hssib-temporary',
      label: 'Health Services Safety Investigations Body. Patient care in temporary care environments. 8 January 2026.',
      short: 'HSSIB · temporary care environments · 2026',
      url: 'https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/',
      status: 'OFFICIAL SAFETY INVESTIGATION',
      boundary: 'Rapid, bounded investigation across multiple English hospitals, not a representative prevalence study. Source photographs document environments and adaptations, not patient-level outcomes.'
    },
    {
      id: 'tern',
      label: 'Trainee Emergency Research Network. Understanding corridor and escalation area care in 165 UK emergency departments. Emergency Medicine Journal. 2026.',
      short: 'TERN · EMJ · 165 UK EDs · 2026',
      url: 'https://doi.org/10.1136/emermed-2025-215301',
      status: 'PEER-REVIEWED CROSS-SECTIONAL STUDY',
      boundary: 'Five snapshots in March 2025. These are patient observations, not annual incidence, duration, Canadian prevalence, or evidence of individual causal harm.'
    }
  ],
  slides: [
    {
      id: 'corridor-s01',
      title: 'Observe the care environment',
      section: 'Observe',
      time: '0:00',
      className: 'source-inspection',
      visualType: 'source-artifact',
      brand: false,
      source: 'hssib-temporary',
      truth: 'SOURCE PHOTOGRAPH · DOCUMENTS A SETTING · DOES NOT PROVE AN OUTCOME',
      html: `<p class="inspection-cue">Observe before explaining</p><img class="inspection-image cover" src="../assets/source-images/forensic/hssib-temporary-care-corridor-trolleys.jpg" alt="HSSIB photograph of patient trolleys in a hospital corridor used as a temporary care environment"><div class="inspection-credit"><strong>Primary source</strong><a href="https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/" target="_blank" rel="noreferrer">HSSIB, Patient care in temporary care environments, Figure 1, January 2026</a></div>`,
      note: 'Give the room twelve silent seconds. Ask: What care functions can you see, and what care functions are absent or hard to see? Do not yet call the staff unsafe. This photograph documents a setting, not a specific patient outcome.'
    },
    {
      id: 'corridor-s02',
      title: 'Temporary can last 44 hours',
      section: 'Case',
      time: '0:50',
      className: 'center dark',
      visualType: 'native-evidence',
      source: 'hssib-medication',
      truth: 'ONE INVESTIGATED EVENT · SAME EVENT USED IN THE PARKINSON MODULE',
      html: `<p class="eyebrow">An 85-year-old man with Parkinson's disease</p><div class="number-row" style="grid-template-columns:repeat(2,1fr);width:72%"><div><strong>52 h</strong><span>in the emergency department</span></div><div><strong>44 h</strong><span>in a corridor</span></div></div><p class="teaching-copy">Organisational intent said temporary. The patient experienced duration.</p>`,
      note: 'This is the same investigated event used in the separate Parkinson medication module, viewed here through the environment lens. Do not imply that the corridor caused his later death. The HSSIB report does not establish that causal chain.'
    },
    {
      id: 'corridor-s03',
      title: 'A medication result exposes the missing system',
      section: 'Case',
      time: '1:40',
      className: 'center',
      visualType: 'native-evidence',
      source: 'hssib-medication',
      truth: 'CAPSULE-LEVEL DOSES IN ONE INVESTIGATED EVENT · CAUSAL HARM NOT ESTABLISHED',
      html: `<p class="eyebrow">Time-critical Parkinson's medication</p><div class="number-row" style="grid-template-columns:repeat(4,1fr);width:96%"><div><strong>18</strong><span>capsule-level doses due</span></div><div><strong>7</strong><span>not given</span></div><div><strong>3</strong><span>given late</span></div><div><strong>8</strong><span>potentially on time</span></div></div><p class="big-question" style="margin-top:2cqw">Who failed?</p>`,
      note: 'Hold the question for two seconds. Then add the system conditions verbally: no defined owner, no dedicated ED pharmacy support, no secure corridor storage, an e-prescribing outage, split paper and electronic records, inaccessible specialist letters, and out-of-hours information gaps.'
    },
    {
      id: 'corridor-s04',
      title: 'The corridor is part of the clinical system',
      section: 'Reframe',
      time: '2:35',
      className: 'photo-fill',
      visualType: 'generated',
      html: `<img class="visual-field" src="assets/generated/corridor-whole-system.png" alt="Original generated teaching image of corridor care showing a stretcher, privacy screen, equipment and staff work as one environment"><div class="photo-copy"><p class="eyebrow">Underdesigned care system</p><h1 class="hero small">A stretcher does not bring the system with it.</h1><p class="lede">Ownership · information · medication · monitoring · emergency response · dignity</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical · not HSSIB case evidence</div>`,
      note: 'Say: calling it a hallway makes this a location problem. Calling it a temporary care environment lets us ask which care functions travelled with the patient. Staff workarounds are evidence of adaptation to mismatch, not automatically deviance.'
    },
    {
      id: 'corridor-s05',
      title: 'The corridor is downstream',
      section: 'System',
      time: '3:30',
      className: 'dark',
      visualType: 'native-diagram',
      source: 'hssib-temporary',
      html: `<p class="eyebrow">Follow the patient flow</p><div class="pathway"><article><b>Access</b><strong>Community</strong><span>prevention, primary care, home support</span></article><article><b>Arrival</b><strong>Ambulance + ED</strong><span>handover, triage, diagnostics</span></article><article><b>Capacity</b><strong>Inpatient care</strong><span>beds, staffing, specialty support</span></article><article><b>Exit</b><strong>Discharge</strong><span>pharmacy, rehab, transport, social care</span></article></div><p class="big-question" style="margin-top:2.2cqw">Overflow is a visible symptom of the whole path.</p>`,
      note: 'Ask where the visible user sits on this line. The frontline team cannot repair political, organisational and capacity mismatches through vigilance alone. Keep local responsibility in view while widening the system.'
    },
    {
      id: 'corridor-s06',
      title: 'A snapshot shows scale, not harm',
      section: 'Evidence',
      time: '4:30',
      className: 'center',
      visualType: 'native-evidence',
      source: 'tern',
      truth: 'FIVE UK SNAPSHOTS · MARCH 2025 · CROSS-SECTIONAL',
      html: `<p class="eyebrow">165 UK emergency departments</p><div class="display-number">17.7%</div><p class="lede">of 10,042 ED patient observations were in escalation areas.</p><p class="teaching-copy">Of those observations, 54.5% to 61.1% were in non-clinical areas such as corridors.</p>`,
      note: 'Say patient observations, not unique patients. The same person could appear in more than one snapshot. This is not an annual rate, a Canadian prevalence, a duration distribution, or proof that escalation placement caused harm.'
    },
    {
      id: 'corridor-s07',
      title: 'A call bell is not normalization',
      section: 'Observe source',
      time: '5:35',
      className: 'source-inspection',
      visualType: 'source-artifact',
      brand: false,
      source: 'hssib-temporary',
      truth: 'SOURCE PHOTOGRAPH · RISK MITIGATION · NOT A SOLUTION TO FLOW',
      html: `<p class="inspection-cue">Observe the adaptation</p><img class="inspection-image" src="../assets/source-images/forensic/hssib-temporary-care-adapted-corridor-call-bell.jpg" alt="HSSIB Figure 4 photograph of an adapted temporary care environment with an emergency call bell"><div class="inspection-credit"><strong>Primary source</strong><a href="https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/" target="_blank" rel="noreferrer">HSSIB, 2026 · Figure 4 · local adaptation · harm reduction, not normalization</a></div>`,
      note: 'Ask for a vote: does installing a call bell normalize corridor care? Then name the paradox. Refusing a safety control does not remove an exposure already in use. Adding it does not solve the upstream capacity problem.'
    },
    {
      id: 'corridor-s08',
      title: 'No new beds tonight',
      section: 'Interaction',
      time: '6:45',
      className: 'light',
      visualType: 'interaction',
      html: `<p class="eyebrow">Eight pods · 40 seconds · two reports</p><h1 class="hero small">Reduce one risk without pretending the corridor is acceptable.</h1><p class="big-question" style="margin-top:2cqw">Name the owner. Name the trigger. Name the failure signal.</p><div class="prompt" style="font-size:1.9cqw">Monitoring · medication · call system · staffing · information · dignity · selection · flow</div>`,
      note: 'Default ten-minute route: assign one domain per pod, give 40 seconds, then take two ten-second reports. Eight-minute route: 20 seconds and one report. Twelve-minute route: 75 seconds and four reports. Strong controls name an explicit owner, trigger, and failure signal. Ask which controls help tonight and which reduce future need.'
    },
    {
      id: 'corridor-s09',
      title: 'Make temporary care visible to operations',
      section: 'Act',
      time: '8:05',
      className: 'photo-fill',
      visualType: 'generated',
      html: `<img class="visual-field" src="assets/generated/corridor-operations-huddle.png" alt="Original generated teaching image of a multidisciplinary operations huddle tracking temporary care spaces, ownership and patient flow"><div class="photo-copy"><p class="eyebrow">The system must see the whole exposure</p><h1 class="hero small">Location. Duration. Acuity. Owner. Exit.</h1><p class="lede">A temporary patient cannot sit outside the digital and operational map.</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical · not an HSSIB site</div>`,
      note: 'This is a design proposal, not evidence that the depicted huddle exists. Connect the operational view to both bedside mitigation and upstream flow. A corridor patient can be outside the digital map as well as the floor plan.'
    },
    {
      id: 'corridor-s10',
      title: 'Two duties at once',
      section: 'Return',
      time: '9:10',
      className: 'photo-fill',
      visualType: 'generated',
      html: `<img class="visual-field" src="assets/generated/corridor-handoff.png" alt="Original generated teaching image of two clinicians conducting a quiet handoff beside a temporary corridor care space"><div class="photo-copy"><p class="eyebrow">Use error, not user error</p><h1 class="hero small">Reduce harm tonight.<br>Reduce the need tomorrow.</h1><p class="big-question">Which duty does your design serve?</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical · not case evidence</div>`,
      note: 'Close with the dual duty. Safer temporary care is not permission to normalize it. Refusing practical safeguards is not a flow strategy. The next design decision should say whether it mitigates current exposure, removes future demand, or does both.'
    }
  ]
};
