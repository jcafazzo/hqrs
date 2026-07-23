window.MODULE = {
  slug: 'doloral',
  title: 'Doloral: when two correct fields became one dangerous phrase',
  shortTitle: 'Doloral 1 + 1',
  runtime: '10 slides · 8 to 10 minutes',
  purpose: 'A reusable Canadian microcase about semantic coupling, reporting and upstream redesign.',
  audienceContract: 'Notice what the display invites you to perceive before deciding who should have looked harder.',
  argument: 'The use error emerged where product naming, data fields, display layout and ordinary visual grouping met.',
  sources: [
    {
      id: 'ismp-doloral',
      status: 'PRIMARY CASE SOURCE',
      label: 'ISMP Canada. Sharing Matters! Concerned Reporting Results in a Safer Product Name. 20 February 2025.',
      short: 'ISMP Canada · Doloral bulletin · 2025',
      url: 'https://ismpcanada.ca/bulletin/doloral/',
      boundary: 'Primary source for several reported 11-fold dosing errors, severe harm in at least one incident, the 1 versus 11 mg/mL interpretation, the information path and removal of the numeral from both product names. Figure 1 is itself a re-creation.'
    },
    {
      id: 'hc-doloral-1',
      status: 'CURRENT REGULATOR RECORD',
      label: 'Health Canada Drug Product Database. DOLORAL SIROP, DIN 00614491.',
      short: 'Health Canada · DOLORAL SIROP 1 mg/mL',
      url: 'https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=6171',
      boundary: 'Current official record for the marketed 1 mg/mL product, checked 19 July 2026. The status date does not prove the effective date of every downstream change.'
    },
    {
      id: 'hc-doloral-5',
      status: 'CURRENT REGULATOR RECORD',
      label: 'Health Canada Drug Product Database. DOLORAL SIROP, DIN 00614505.',
      short: 'Health Canada · DOLORAL SIROP 5 mg/mL',
      url: 'https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=11597',
      boundary: 'Current official record for the marketed 5 mg/mL product, checked 19 July 2026. The product was renamed, not withdrawn.'
    },
    {
      id: 'hc-label-guide',
      status: 'REGULATOR GUIDANCE',
      label: 'Health Canada. Good label and package practices guide for prescription drugs.',
      short: 'Health Canada · label and package guide',
      url: 'https://www.canada.ca/en/health-canada/services/drugs-health-products/reports-publications/medeffect-canada/good-label-package-practices-guide-prescription-drugs-profile/guidance-document.html',
      boundary: 'General guidance on numeric proximity, spacing, hierarchy and expression of strength. It does not provide an incident denominator.'
    }
  ],
  slides: [
    {
      id: 'dol-s01', title: 'What concentration do you see?', section: 'Observe', time: '0:00',
      className: 'artifact-slide', visualType: 'artifact', truth: 'SOURCE-LABELLED RE-CREATION · WHAT CONCENTRATION DO YOU SEE?', source: 'ismp-doloral',
      html: `<div class="artifact-field"><img style="width:78cqw;height:auto" src="../assets/source-images/museum/doloral-figure-1-drug-system-display.jpg" alt="ISMP Canada Figure 1 showing a recreated drug information display with Doloral 1 beside 1 milligram per millilitre"></div><div class="artifact-credit">ISMP Canada Safety Bulletin · Vol 25, Issue 2, Supplement 1 · 20 Feb 2025 · Figure 1 · re-creation</div>`,
      note: 'Do not explain. Ask for one finger for 1 mg/mL, two fingers for 11 mg/mL, or a closed hand for stop and verify. The source figure is a re-creation, not a capture of an identified hospital system.'
    },
    {
      id: 'dol-s02', title: 'Two correct fields became one phrase', section: 'Perception', time: '0:55',
      className: 'photo-fill', visualType: 'generated',
      html: `<img class="visual-field" src="assets/generated/doloral-object-study.png" alt="Original editorial object study of an amber medicine vial and blank label strips with no readable drug information"><div class="photo-copy"><p class="eyebrow">Designed meaning</p><h1 class="hero small">Two fields.<br>One phrase.</h1><p class="lede">People perceive relationships, not database columns.</p></div><div class="generated-credit">Original Image 2 teaching image · generic objects · no real product shown</div>`,
      note: 'Name the concept: semantic coupling. This image establishes medication naming and display as designed objects without fabricating the real product. It is explanatory, not incident evidence.'
    },
    {
      id: 'dol-s03', title: 'Keep the evidence boundary visible', section: 'Event facts', time: '1:50',
      className: 'light center', visualType: 'native', source: 'ismp-doloral',
      html: `<p class="eyebrow">What the bulletin supports</p><div class="number-row"><div><strong style="font-size:5.9cqw">several</strong><span>reports</span></div><div><strong>11×</strong><span>dosing errors</span></div><div><strong>≥1</strong><span>incident with severe harm</span></div></div><p class="teaching-copy" style="margin:2cqw 0 0">Direction, dose, clinical details and exact incident count were not reported.</p>`,
      note: 'Say 11-fold dosing errors, not 11-fold overdose. ISMP Canada reports several incidents and severe harm in at least one. It does not publish direction, administered dose, patient count, clinical details or outcome beyond severe harm.'
    },
    {
      id: 'dol-s04', title: 'Meaning was assembled across systems', section: 'Information chain', time: '2:45',
      className: 'photo-fill', visualType: 'generated', source: 'ismp-doloral',
      html: `<img class="visual-field" src="assets/generated/doloral-workstation.png" alt="Original teaching image of a clinician's hand at a medication workstation with a blank, unreadable screen"><div class="photo-copy"><p class="eyebrow">Name → database → display → action</p><h1 class="hero small">The boundary<br>travelled badly.</h1><p class="lede">Each handoff shaped what the next person could perceive.</p></div><div class="generated-credit">Original Image 2 teaching image · hypothetical workstation · not case photography</div>`,
      note: 'The downstream display was populated from the Health Canada Drug Product Database, which was based on manufacturer submissions authorized by Health Canada. Do not imply that every local display was identical to the federal database.'
    },
    {
      id: 'dol-s05', title: 'The source fields were adjacent', section: 'Source artifact', time: '3:40',
      className: 'artifact-slide', visualType: 'artifact', truth: 'AUTHENTIC SOURCE FIGURE · WHERE SHOULD THE BOUNDARY SURVIVE?', source: 'ismp-doloral',
      html: `<div class="artifact-field"><img src="../assets/source-images/museum/doloral-figure-2-health-canada-display.jpg" alt="ISMP Canada Figure 2 showing the Health Canada Drug Product Database entries for the former Doloral product names and strengths"></div><div class="artifact-credit">ISMP Canada Safety Bulletin · Vol 25, Issue 2, Supplement 1 · 20 Feb 2025 · Figure 2</div>`,
      note: 'Let students inspect the product name and strength fields. The problem is not merely small type. Naming, numeric proximity, field labels, spacing, hierarchy, truncation and downstream rendering all shape the visual phrase.'
    },
    {
      id: 'dol-s06', title: 'Reporting moved the source', section: 'Learning loop', time: '4:40',
      className: 'photo-fill', visualType: 'generated', source: 'ismp-doloral',
      html: `<img class="visual-field" src="assets/generated/doloral-source-change-ripple.png" alt="Original conceptual teaching image of a generic medicine label change propagating across several blank downstream formats"><div class="photo-copy"><p class="eyebrow">A successful safety action</p><h1 class="hero small">Report.<br>Recognize.<br>Redesign.</h1><p class="lede">A weak signal became an upstream change.</p></div><div class="generated-credit">Original Image 2 teaching image · conceptual propagation · not a real product record</div>`,
      note: 'Clinicians and pharmacists detected and reported events. ISMP Canada recognized a pattern, informed the manufacturer, and reports that the numeral was removed from both product names in communication with Health Canada. Do not invent the implementation timeline.'
    },
    {
      id: 'dol-s07', title: 'Choose the strongest layer', section: 'Table exercise', time: '5:40',
      className: 'gold center', visualType: 'native', truth: 'CLASSROOM DESIGN EXERCISE · PROPOSALS ARE NOT REPORTED CONTROLS',
      html: `<p class="eyebrow">Five tables · 35 seconds · two reports</p><h1 class="hero small wide">Where would you intervene?</h1><div class="grid-3" style="width:92%;margin-top:2cqw"><article class="card"><h3>Source</h3><p>Name, authorization and structured data.</p></article><article class="card"><h3>Display</h3><p>Labels, delimiters, spacing and responsive layouts.</p></article><article class="card"><h3>Learning</h3><p>Detect, aggregate and reach upstream owners.</p></article></div><p class="big-question" style="margin:1.6cqw 0 0">How could your control fail while looking complete?</p>`,
      note: 'Default ten-minute route: give five tables 35 seconds, then take two ten-second reports. Eight-minute route: 20 seconds and one report. Twelve-minute route: 75 seconds and one sentence per table. Tables cover manufacturer/naming, regulator/database, software/display, clinical organization, and learning. Each proposes one control that does not depend on perfect attention and one silent downstream failure.'
    },
    {
      id: 'dol-s08', title: 'The numeral was removed', section: 'Upstream redesign', time: '7:00',
      className: 'dark center', visualType: 'native', source: 'ismp-doloral',
      html: `<p class="eyebrow">Reported redesign</p><div style="display:grid;grid-template-columns:1fr auto 1fr;gap:2.2cqw;align-items:center;width:92%"><div><span class="label">Before</span><div style="font-size:4.9cqw;line-height:1;font-weight:800;text-decoration:line-through;text-decoration-color:var(--module-red)">DOLORAL 1</div></div><div style="font-size:4cqw;color:var(--module-gold)">→</div><div><span class="label">After</span><div style="font-size:4.9cqw;line-height:1;font-weight:800;color:var(--module-gold)">DOLORAL SIROP</div></div></div><p class="lede">The source representation changed.</p>`,
      note: 'ISMP Canada reports that the manufacturer, in communication with Health Canada, removed the numeral from both product names. Do not say Health Canada ordered a recall or that the medicine was withdrawn.'
    },
    {
      id: 'dol-s09', title: 'The products remain marketed', section: 'Current status', time: '7:55',
      className: 'light center', visualType: 'native', source: ['hc-doloral-1', 'hc-doloral-5'],
      html: `<p class="eyebrow">Health Canada records · checked 19 July 2026</p><h1 class="hero small wide" style="color:var(--module-blue)">DOLORAL SIROP</h1><div class="compare" style="margin-top:2cqw"><article style="color:var(--module-ink);border-color:rgba(0,36,82,.18);background:white"><b style="color:var(--module-red)">DIN 00614491</b><strong>1 mg/mL</strong><p>Marketed</p></article><article style="color:var(--module-ink);border-color:rgba(0,36,82,.18);background:white"><b style="color:var(--module-red)">DIN 00614505</b><strong>5 mg/mL</strong><p>Marketed</p></article></div><p class="teaching-copy" style="margin:1.4cqw 0 0">A current record does not prove every downstream system refreshed at the same time.</p>`,
      note: 'Both current Health Canada entries use DOLORAL SIROP and remain marketed at 1 mg/mL and 5 mg/mL. Both audience source links are visible on the slide. Do not treat the current-status date as the proven effective date of every downstream change.'
    },
    {
      id: 'dol-s10', title: 'The boundary was the hazard', section: 'Return', time: '9:00',
      className: 'photo-fill', visualType: 'generated', source: 'ismp-doloral',
      html: `<img class="visual-field" src="assets/generated/doloral-object-study.png" alt="Original editorial object study returning to a generic amber bottle, two blank information fields and a magnifier"><div class="photo-copy"><p class="eyebrow">Use error, not user error</p><h1 class="hero small">The error lived<br>in the boundary.</h1><p class="lede">The display failed to show it. Reporting helped the system change it.</p><p class="big-question">Which boundary still depends on perfect attention?</p></div><div class="generated-credit">Original Image 2 teaching image · generic object study · not the real product</div>`,
      note: 'Return to the systems principle. Correct fields combined into an ambiguous phrase. Ordinary visual grouping shaped interpretation. Reporting was not paperwork after safety work; it was part of the mechanism that changed the source representation.'
    }
  ]
};
