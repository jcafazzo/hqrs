window.MODULE = {
  slug: 'pulse-oximetry',
  title: 'Pulse oximetry: the number is not the patient',
  shortTitle: 'Pulse oximetry',
  runtime: '10 min',
  purpose: 'See SpO2 as a designed estimate, then redesign how uncertainty travels into care.',
  sources: [
    {
      id: 'sjoding',
      label: 'Sjoding MW et al. Racial Bias in Pulse Oximetry Measurement. New England Journal of Medicine. 2020.',
      short: 'Sjoding et al. · NEJM · 2020',
      url: 'https://doi.org/10.1056/NEJMc2029240',
      status: 'PEER-REVIEWED STUDY',
      boundary: 'Retrospective, measurement-level results. Self-identified race was a proxy, devices and settings varied, and the estimates are not a universal current-device prevalence.'
    },
    {
      id: 'health-canada',
      label: 'Health Canada. Pulse oximeters: For health care providers. 30 December 2022.',
      short: 'Health Canada · pulse oximeters · 2022',
      url: 'https://www.canada.ca/en/health-canada/services/drugs-medical-devices/pulse-oximeters/health-care-providers.html',
      status: 'CANADIAN REGULATOR GUIDANCE',
      boundary: 'General guidance, not a device comparison. Pulse oximetry remains useful when interpreted with trends, symptoms and other information.'
    },
    {
      id: 'fda-draft',
      label: 'US Food and Drug Administration. Pulse Oximeters for Medical Purposes. Draft guidance. January 2025.',
      short: 'FDA · draft pulse oximeter guidance · Jan 2025',
      url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/pulse-oximeters-medical-purposes-non-clinical-and-clinical-performance-testing-labeling-and',
      status: 'DRAFT, NON-BINDING GUIDANCE',
      boundary: 'Still draft and non-binding when checked 19 July 2026. Proposed validation design must not be described as current mandatory law.'
    }
  ],
  slides: [
    {
      id: 'pulse-s01',
      title: 'Would 94 percent reassure you?',
      section: 'Observe',
      time: '0:00',
      className: 'photo-fill',
      visualType: 'generated',
      html: `<img class="visual-field" src="assets/generated/pulse-home-context.png" alt="Original generated teaching image of an older adult competently using a fingertip pulse oximeter at a kitchen table"><div class="photo-copy"><p class="eyebrow">Commit before the explanation</p><h1 class="hero">94%</h1><p class="big-question">Would this number reassure you?</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical · not case evidence</div>`,
      note: 'Take a simultaneous hand vote. Fist means reassured, one finger means uncertain, two fingers means confirm or escalate now. Do not add clinical context yet. The teaching move is to let the display earn confidence before you expose its boundary.'
    },
    {
      id: 'pulse-s02',
      title: 'The estimate and the reference can disagree',
      section: 'Reveal',
      time: '0:45',
      className: 'center dark',
      visualType: 'native-evidence',
      source: 'sjoding',
      truth: 'ILLUSTRATIVE PAIRED VALUES WITHIN THE STUDY DEFINITION · NOT A PUBLISHED PATIENT PAIR',
      html: `<p class="eyebrow">Illustrative paired values</p><div class="compare"><article><b>Non-invasive estimate</b><strong>SpO2&nbsp;94%</strong><p>One value inside the study's 92% to 96% range.</p></article><article><b>Arterial reference</b><strong style="color:var(--module-red)">SaO2&nbsp;&lt;88%</strong><p>Meets the study definition of occult hypoxemia.</p></article></div><p class="lede">A precise display can hide clinically important uncertainty.</p>`,
      note: 'These are illustrative values constructed inside the published definition, not a reported patient pair. SpO2 is the optical estimate; SaO2 is the arterial reference. Do not imply every reading of 94 has this result or that an arterial blood gas is required for every patient.'
    },
    {
      id: 'pulse-s03',
      title: 'The uncertainty was not evenly distributed',
      section: 'Evidence',
      time: '1:35',
      className: 'center',
      visualType: 'native-evidence',
      source: 'sjoding',
      truth: 'RETROSPECTIVE · MEASUREMENT-LEVEL RESULTS · SELF-IDENTIFIED RACE',
      html: `<p class="eyebrow">SpO2 92 to 96, while SaO2 was below 88</p><div class="number-row"><div><strong>11.7%</strong><span>88 of 749 measurements from Black patients</span></div><div><strong>3.6%</strong><span>99 of 2,778 measurements from White patients</span></div><div><strong>2020</strong><span>one hospital cohort, then replicated in a multicentre ICU cohort</span></div></div><p class="teaching-copy">Nearly threefold in these cohorts. Not a universal device rate.</p>`,
      note: 'Use the denominators. Say measurements, not people or population prevalence. Race helped identify a disparity but does not establish one biological mechanism. The multicentre cohort reported 17.0 percent versus 6.2 percent, but keep the main visual to one comparison.'
    },
    {
      id: 'pulse-s04',
      title: 'The number is made, not found',
      section: 'Explain',
      time: '2:45',
      className: 'photo-fill copy-right',
      visualType: 'generated',
      html: `<img class="visual-field" src="assets/generated/pulse-measurement-system.png" alt="Original generated conceptual image of pulse oximeter sensors on hands with varied skin pigmentation"><div class="photo-copy"><p class="eyebrow">Measurement is a system</p><h1 class="hero small">The number is made, not found.</h1><p class="lede">Light, tissue, perfusion, motion, sensor, algorithm, display.</p></div><div class="generated-credit">Original Image 2 teaching image · conceptual · not optical evidence</div>`,
      note: 'Give only the physics needed for the argument: two wavelengths, a pulsatile arterial signal, and an empirically calibrated algorithm. Avoid turning this into a device lecture. The point is that a measurement has a production history.'
    },
    {
      id: 'pulse-s05',
      title: 'Watch uncertainty travel',
      section: 'System',
      time: '3:35',
      className: 'dark',
      visualType: 'native-diagram',
      source: 'health-canada',
      html: `<p class="eyebrow">Where does the user begin?</p><div class="pathway"><article><b>Before use</b><strong>Validation</strong><span>Who and what conditions represented?</span></article><article><b>At acquisition</b><strong>Sensor + signal</strong><span>Fit, motion, perfusion, temperature.</span></article><article><b>At display</b><strong>Number + threshold</strong><span>Precision becomes authority.</span></article><article><b>In care</b><strong>Decision + feedback</strong><span>Trend, symptoms, confirmation, learning.</span></article></div><p class="big-question" style="margin-top:2.2cqw">There is no clean boundary.</p>`,
      note: 'Point across the chain and ask where the user begins. Let the room answer. Then say that the patient, probe, algorithm, procurement choice, protocol and clinician all participate in one measurement system.'
    },
    {
      id: 'pulse-s06',
      title: 'Real use is not a laboratory exception',
      section: 'Use conditions',
      time: '4:40',
      className: 'photo-fill',
      visualType: 'generated',
      source: 'health-canada',
      html: `<img class="visual-field" src="assets/generated/pulse-use-conditions.png" alt="Original generated teaching image of competent pulse oximeter use under ordinary clinical conditions, with believable sensor placement and environmental context"><div class="photo-copy"><p class="eyebrow">Foreseeable conditions</p><h1 class="hero small">Motion. Perfusion. Temperature. Fit.</h1><p class="lede">The patient is not the defect. The use environment is part of performance.</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical · not device-performance evidence</div>`,
      note: 'Health Canada also names ambient light, nail products, moisture, placement and low saturation among factors that can affect readings. Do not call these operator failures. Ask what the product and workflow could detect, prevent, or make visible.'
    },
    {
      id: 'pulse-s07',
      title: 'Representation is a design control',
      section: 'Observe source',
      time: '5:40',
      className: 'artifact-slide',
      visualType: 'source-artifact',
      brand: false,
      source: 'fda-draft',
      truth: 'DRAFT · NON-BINDING · JANUARY 2025',
      html: `<p class="observe-cue">Observe the proposed study population</p><div class="artifact-field"><img style="width:100%;height:100%" src="../assets/source-images/museum/fda-guidance-page-32-study-diversity.png" alt="FDA draft guidance page describing proposed diversity and skin-tone measures in pulse oximeter clinical studies"></div>`,
      note: 'Give the room ten seconds to inspect the page. Ask what changed before a device ever reaches a bedside. Keep the word draft visible and spoken. This is a proposal for validation redesign, not proof that the proposal is implemented.'
    },
    {
      id: 'pulse-s08',
      title: 'Change one node',
      section: 'Interaction',
      time: '6:45',
      className: 'light',
      visualType: 'interaction',
      html: `<p class="eyebrow">Eight pods · 35 seconds · two reports</p><h1 class="hero small">Add one defence that does not depend on memory.</h1><div class="grid-4" style="margin-top:2.1cqw"><div class="card"><h3>Validation</h3><p>Who must be represented?</p></div><div class="card"><h3>Procurement</h3><p>What evidence is required?</p></div><div class="card"><h3>Acquisition</h3><p>What makes signal quality visible?</p></div><div class="card"><h3>Decision</h3><p>What happens when signs disagree?</p></div></div>`,
      note: 'Default ten-minute route: assign two pods to each visible node, give 35 seconds, then take two ten-second reports. Eight-minute route: 20 seconds and one report. Twelve-minute route: 60 seconds and four ten-second reports. Strong answers specify a trigger and action, not another generic warning banner.'
    },
    {
      id: 'pulse-s09',
      title: 'A proposed redesign can be inspected',
      section: 'Regulation',
      time: '8:10',
      className: 'artifact-slide',
      visualType: 'source-artifact',
      brand: false,
      source: 'fda-draft',
      truth: 'DRAFT · NON-BINDING · JANUARY 2025',
      html: `<p class="observe-cue">Observe scale, range and acceptance criteria</p><div class="artifact-field"><img style="width:100%;height:100%" src="../assets/source-images/museum/fda-guidance-page-35-performance-criteria.png" alt="FDA draft guidance page showing proposed pulse oximeter performance and validation criteria"></div>`,
      note: 'Name only the most useful figures if they are legible in the artifact: at least 150 participants and at least 3,000 paired observations across the proposed study. The teaching move is that validation and acceptance criteria are designed controls. Do not describe these as mandatory in 2026.'
    },
    {
      id: 'pulse-s10',
      title: 'The number is not the patient',
      section: 'Return',
      time: '9:15',
      className: 'photo-fill',
      visualType: 'generated',
      html: `<img class="visual-field" src="assets/generated/pulse-home-context.png" alt="Original generated teaching image returning to an older adult using a pulse oximeter in a real decision context"><div class="photo-copy"><p class="eyebrow">Use error, not user error</p><h1 class="hero small">The number is not the patient.</h1><p class="big-question">What will your system show when the number and the person disagree?</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical · not case evidence</div>`,
      note: 'Close without another answer round. Say: the safer system preserves the usefulness of pulse oximetry while making its uncertainty visible and recoverable. The person should not need heroic memory to know every hidden limitation.'
    }
  ]
};
