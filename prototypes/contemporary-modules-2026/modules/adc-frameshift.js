window.MODULE = {
  slug: 'adc-frameshift',
  title: 'When the cabinet was wrong: deployment, detection and recovery',
  shortTitle: 'ADC frameshift',
  runtime: '10 slides · 9 to 11 minutes',
  purpose: 'A reusable case about corrupted relationships, frontline detection and organized recovery.',
  audienceContract: 'Find where safety came from before deciding where the error lived.',
  argument: 'The nurses were not weak links in this event. They were discrepancy detectors inside an under-defended deployment system.',
  sources: [
    {
      id: 'ismp-adc',
      status: 'PRIMARY CASE SOURCE',
      label: 'ISMP Canada. Emergency Preparedness Mitigates Patient Harm during Failed Deployment of Upgraded Automated Dispensing Cabinets. 31 July 2025.',
      short: 'ISMP Canada · ADC deployment bulletin · 2025',
      url: 'https://ismpcanada.ca/bulletin/automated-dispensing-cabinets/',
      boundary: 'Authoritative source for the de-identified event, Figure 1, mismatch examples, scale, response, outcome and recommendations. It does not identify the organization, vendor or any wrong medication administration.'
    },
    {
      id: 'ismp-adc-guidance',
      status: 'ADJACENT GUIDANCE',
      label: 'ISMP. Guidelines for the Safe Use of Automated Dispensing Cabinets. 2019.',
      short: 'ISMP · ADC guidance · 2019',
      url: 'https://www.ismp.org/system/files/resources/2019-11/ISMP170-ADC%20Guideline-020719_final.pdf',
      boundary: 'General ADC guidance cited by ISMP Canada. It must not be used to add facts to the anonymous Canadian event.'
    }
  ],
  slides: [
    {
      id: 'adc-s01', title: 'The cabinet looked authoritative', section: 'Observe', time: '0:00',
      className: 'photo-fill', visualType: 'generated', source: 'ismp-adc',
      html: `<img class="visual-field" src="assets/generated/adc-cabinet-observation.png" alt="Original editorial teaching image of a nurse and pharmacist pausing at an automated dispensing cabinet after noticing a mismatch"><div class="photo-copy"><p class="eyebrow">A failed medication-system deployment</p><h1 class="hero small">The cabinet<br>was wrong.</h1><p class="lede">Your job: find where safety actually came from.</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical scene · not the affected system</div>`,
      note: 'Open without explaining the mechanism. Ask the room to notice the nurse pausing. The audience contract is to locate safety before locating blame. This is a generated teaching scene, not case evidence.'
    },
    {
      id: 'adc-s02', title: 'Two contradictions made the failure visible', section: 'Event facts', time: '0:55',
      className: 'dark center', visualType: 'native', source: 'ismp-adc',
      html: `<p class="eyebrow">What staff encountered</p><div class="compare"><article><b>Displayed</b><strong>tablets</strong><p style="font-size:1.9cqw">paired with <span style="color:var(--module-gold);font-weight:800">30 mL</span> unit-dose cups</p></article><article><b>Selected</b><strong>morphine 10 mg tablets</strong><p style="font-size:1.9cqw">drawer contained <span style="color:var(--module-gold);font-weight:800">morphine 2 mg ampoules</span></p></article></div><p class="teaching-copy" style="margin-top:2cqw">These are published mismatch examples, not reported administrations.</p>`,
      note: 'Read the two mismatches slowly. Misoprostol tablets appeared as 30 mL unit-dose cups. Selecting morphine 10 mg tablets opened a drawer containing morphine 2 mg ampoules. The bulletin does not report that either wrong product reached a patient.'
    },
    {
      id: 'adc-s03', title: 'The fields shifted out of relationship', section: 'Mechanism', time: '1:55',
      className: 'artifact-slide', visualType: 'artifact', truth: 'AUTHENTIC SOURCE FIGURE · OBSERVE WHAT RELATIONSHIP IS BROKEN', source: 'ismp-adc',
      html: `<div class="artifact-field"><img src="../assets/source-images/museum/adc-figure-1-frameshift.jpg" alt="ISMP Canada Figure 1, a simplified example of medication database fields becoming misaligned during import"></div><div class="artifact-credit">ISMP Canada Safety Bulletin · Vol 25, Issue 8 · 31 Jul 2025 · Figure 1 · simplified example</div>`,
      note: 'Give the room ten quiet seconds. The intended one-step import was split into two. During the second import, data became misaligned across fields. The diagram is simplified and is not a screen capture of the affected system.'
    },
    {
      id: 'adc-s04', title: 'A nurse became the detector', section: 'Detection', time: '2:55',
      className: 'photo-fill', visualType: 'generated', source: 'ismp-adc',
      html: `<img class="visual-field" src="assets/generated/adc-discrepancy-detection.png" alt="Original teaching image of a clinician pausing over an open medication drawer containing varied containers"><div class="photo-copy"><p class="eyebrow">Within minutes</p><h1 class="hero small">That makes<br>no sense.</h1><p class="lede">Domain knowledge interrupted automation.</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical scene · not case photography</div>`,
      note: 'Within minutes of the upload, nursing reports alerted pharmacy to contradictions. Do not frame hesitation as non-compliance. It was successful sensitivity to operations and an interruption of unsafe authority.'
    },
    {
      id: 'adc-s05', title: 'One import reached an entire network', section: 'Propagation', time: '3:50',
      className: 'dark', visualType: 'native', source: 'ismp-adc',
      html: `<p class="eyebrow">The event path</p><div class="pathway"><article><b>01</b><strong>Partial import</strong><span style="font-size:1.9cqw">instead of the required complete one-step import</span></article><article><b>02</b><strong>Fields misaligned</strong><span style="font-size:1.9cqw">valid values no longer belonged to one medication record</span></article><article><b>03</b><strong>Live server</strong><span style="font-size:1.9cqw">corrupted mapping propagated to connected cabinets</span></article><article><b>04</b><strong>Staff detected</strong><span style="font-size:1.9cqw">contradictions were reported and work was stopped</span></article></div>`,
      note: 'Keep the mechanism at the level the bulletin supports. Do not invent code, software architecture or a more specific root cause. The upload could not immediately be aborted, which widened the operational response.'
    },
    {
      id: 'adc-s06', title: 'Scale is not the same as harm', section: 'Evidence boundary', time: '4:50',
      className: 'light center', visualType: 'native', source: 'ismp-adc',
      html: `<p class="eyebrow">Reported scope and response</p><div class="number-row"><div><strong>&gt;300</strong><span>products affected</span></div><div><strong>&gt;150</strong><span>transactions affected</span></div><div><strong>≈6 h</strong><span>Code Grey resolution</span></div></div><p class="big-question" style="margin:2.3cqw 0 0;color:var(--module-blue)">No patient harm was reported.</p><p class="teaching-copy" style="margin:.8cqw 0 0">Products are not patients. Transactions are not administrations.</p>`,
      note: 'Preserve every qualifier: more than 300 products, more than 150 affected transactions, approximately six hours, and no patient harm reported. Do not convert any of these into a count of medication errors or harmed patients.'
    },
    {
      id: 'adc-s07', title: 'Recovery was clinical work', section: 'Containment', time: '5:55',
      className: 'photo-fill', visualType: 'generated', source: 'ismp-adc',
      html: `<img class="visual-field" src="assets/generated/adc-team-containment.png" alt="Original teaching image of three healthcare staff coordinating medication operations around records and supplies"><div class="photo-copy"><p class="eyebrow">Prevent harm while the system is wrong</p><h1 class="hero small">Contain.<br>Support.<br>Recover.</h1><p class="lede">Pharmacy, technical teams, nursing and emergency operations worked as one control.</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical composite · not case photography</div>`,
      note: 'The organization halted ADC inventory processes, deployed pharmacy support to critical areas, monitored transactions, contacted nurses, dispensed centrally, activated an emergency operations centre and declared Code Grey. These combined actions are reported, but their individual effects were not estimated.'
    },
    {
      id: 'adc-s08', title: 'Design the deployment, not just the database', section: 'Controls', time: '7:00',
      className: 'artifact-slide', visualType: 'artifact', truth: 'AUTHENTIC SOURCE FIGURE · WHERE IS THE STOP GATE?', source: 'ismp-adc',
      html: `<div class="artifact-field"><img src="../assets/source-images/museum/adc-figure-2-deployment.jpg" alt="ISMP Canada Figure 2 showing key steps in a staged automated dispensing cabinet deployment"></div><div class="artifact-credit">ISMP Canada Safety Bulletin · Vol 25, Issue 8 · 31 Jul 2025 · Figure 2 · staged deployment model</div>`,
      note: 'Use the source figure to widen into test environments, readiness assessment, multidisciplinary approval, downtime plans, escalation and debriefing. Recommendations are not evidence that every control was implemented after this event.'
    },
    {
      id: 'adc-s09', title: 'Build three kinds of safety', section: 'Table exercise', time: '8:00',
      className: 'gold center', visualType: 'native', truth: 'CLASSROOM DESIGN EXERCISE · PROPOSALS ARE NOT CASE FINDINGS',
      html: `<p class="eyebrow">Five tables · 45 seconds · two reports</p><h1 class="hero small wide">Before. During. After.</h1><div class="grid-3" style="width:92%;margin-top:2cqw"><article class="card"><h3>Prevent</h3><p>Keep corrupted relationships out of production.</p></article><article class="card"><h3>Detect + contain</h3><p>Make contradictions visible and stopping safe.</p></article><article class="card"><h3>Recover + learn</h3><p>Continue care, restore safely and share the signal.</p></article></div><p class="big-question" style="margin:1.8cqw 0 0">Which control still depends on a person noticing?</p>`,
      note: 'Default ten-minute route: give five tables 45 seconds, then take two ten-second reports. Eight-minute route: 20 seconds and one report. Twelve-minute route: 90 seconds and one sentence per table. Tables cover data/vendor controls, hospital change control, point-of-care design, clinical operations, and emergency response. Ask how each proposed control could fail while appearing complete.'
    },
    {
      id: 'adc-s10', title: 'Design for the person who notices', section: 'Return', time: '9:40',
      className: 'dark center', visualType: 'native', source: 'ismp-adc',
      html: `<p class="eyebrow">Use error, not user error</p><h1 class="hero wide">The nurse was not<br>the weak link.</h1><p class="lede">The nurse was the discrepancy detector.</p><p class="big-question" style="margin-top:2.2cqw;color:var(--module-gold)">Design for the mismatch. Design for the person who notices.</p>`,
      note: 'Close the loop. The proximal protocol deviation matters, but it is not an adequate systems explanation. People participate in causing, detecting, adapting to and recovering from failure. Here, frontline staff were a source of resilience.'
    }
  ]
};
