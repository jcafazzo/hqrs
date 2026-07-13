const museumSources = {
  doloral: { label: 'ISMP Canada · Doloral · 20 Feb 2025', url: 'https://ismpcanada.ca/bulletin/doloral/' },
  pulse: { label: 'Sjoding et al. · NEJM · 2020', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7808260/' },
  fda: { label: 'FDA · Pulse oximeter draft guidance · Jan 2025', url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/pulse-oximeters-medical-purposes-non-clinical-and-clinical-performance-testing-labeling-and' },
  adc: { label: 'ISMP Canada · Automated dispensing cabinets · 31 Jul 2025', url: 'https://ismpcanada.ca/bulletin/automated-dispensing-cabinets/' },
  use: { label: 'FDA · Human factors postmarket information · 2026', url: 'https://www.fda.gov/medical-devices/human-factors-and-medical-devices/human-factors-postmarket-information-device-surveillance-and-reporting-processes' }
};

const adcCells = Array.from({ length: 64 }, (_, i) => `<span class="adc-cell ${i === 29 ? 'bad' : ''} ${i === 45 ? 'caught' : ''}"></span>`).join('');

window.DECK = {
  title: 'The Museum of Designed Error · HQRS 846',
  shortTitle: 'Museum of Designed Error',
  runtime: '25:30',
  theme: 'museum',
  slides: [
    {
      title: 'Doors open', section: 'Entrance', time: '0', className: 'dark bottom',
      html: `<div style="width:16cqw;height:1.1cqw;background:#f7f3e9;box-shadow:0 -5cqw 12cqw rgba(255,255,255,.12);margin:0 auto 6cqw"></div><p class="eyebrow">HQRS 846 · Gallery 01</p><h1 class="hero wide">The Museum of<br>Designed Error</h1>`,
      note: 'Walk to the empty plinth. “I brought you three objects. Each has been accused of witnessing a human error. Let’s look before we judge.”'
    },
    {
      title: 'The exhibit rule', section: 'Entrance', time: '1', className: 'center',
      html: `<p class="eyebrow">The exhibit ritual</p><div class="grid-4" style="width:88%"><div><div class="display-number" style="font-size:7cqw;color:var(--coral)">01</div><h2>LOOK</h2></div><div><div class="display-number" style="font-size:7cqw">02</div><h2>ACT</h2></div><div><div class="display-number" style="font-size:7cqw">03</div><h2>WIDEN</h2></div><div><div class="display-number" style="font-size:7cqw;color:var(--cyan)">04</div><h2>CHANGE</h2></div></div>`,
      note: '“For each exhibit: tell me what you see. Tell me what action makes sense. Then we widen the frame.” This is a ritual, not another model.'
    },
    {
      title: 'The label', section: 'Exhibit 01 · Meaning', time: '1', className: 'left',
      html: `<p class="eyebrow">01 / 03 · Look</p><div class="doloral-display"><span class="brand">DOLORAL 1</span><span class="strength">1 mg/mL</span></div><div class="gallery-label"><span class="number">Re-creation</span><h2>Read the concentration.</h2><p>Say it quietly to the person beside you.</p></div>`,
      source: museumSources.doloral,
      note: 'Hold silence for three seconds. Do not ask anyone to confess how they read it. The proximity of the numeral in the brand and concentration was a key contributing factor.'
    },
    {
      title: 'What it appeared to say', section: 'Exhibit 01 · Meaning', time: '2', className: 'center',
      html: `<p class="eyebrow">01 / 03 · Act</p><div class="doloral-display"><span class="brand danger">11</span><span class="strength">mg/mL</span></div><h2 style="font-size:3.2cqw;margin-top:3cqw">An 11-fold dose.</h2>`,
      source: museumSources.doloral,
      note: 'Several reports described this reading; one reported incident resulted in severe harm. Do not state or imply an incidence rate.'
    },
    {
      title: 'Widen the frame', section: 'Exhibit 01 · Meaning', time: '3', className: 'center',
      html: `<p class="eyebrow">01 / 03 · Widen</p><h1 class="hero small">Where, exactly,<br>is the error?</h1><div class="timeline" style="width:92%"><div class="event"><strong>Brand</strong><span>Numeral in the name</span></div><div class="event"><strong>Database</strong><span>Authorized field</span></div><div class="event"><strong>Display</strong><span>Adjacent values</span></div><div class="event"><strong>Action</strong><span>Meaning becomes dose</span></div></div>`,
      source: museumSources.doloral,
      note: 'The screen inherited a product name and placed it beside a concentration. Do not say the display alone caused every report.'
    },
    {
      title: 'The system changed', section: 'Exhibit 01 · Meaning', time: '4', className: 'center',
      html: `<p class="eyebrow">01 / 03 · Change</p><div class="reframe" style="width:88%"><div class="statement"><span class="strike">DOLORAL 1</span></div><div class="arrow">→</div><div class="statement" style="color:var(--cyan)">DOLORAL</div></div><p class="lede">The numeral was removed from the product name.</p>`,
      source: museumSources.doloral,
      note: 'The response changed the product name rather than asking every future clinician to look harder. Do not claim this eliminated all medication risk.'
    },
    {
      title: 'Name the lens', section: 'Exhibit 01 · Meaning', time: '5', className: 'dark center',
      html: `<p class="eyebrow">Language changes the investigation</p><div class="reframe" style="width:86%"><div class="statement"><span class="strike">USER ERROR</span></div><div class="arrow">→</div><div class="statement" style="color:var(--cyan)">USE ERROR</div></div><p class="lede">The person remains inside the system.</p>`,
      source: museumSources.use,
      note: 'Removing the R removes the person as the end of the explanation—not from the system and not from all questions of accountability.'
    },
    {
      title: 'The reassuring number', section: 'Exhibit 02 · Measurement', time: '6', className: 'split',
      html: `<div><p class="eyebrow">02 / 03 · Look</p><h1 class="hero small">What does<br>this number<br>let us stop<br>worrying about?</h1></div><div class="pulse-device"><div class="screen">94</div><div class="button"></div></div>`,
      source: museumSources.pulse,
      note: 'Take two spontaneous answers. If using a physical device, do not turn the moment into a live accuracy demonstration.'
    },
    {
      title: 'The number and the blood', section: 'Exhibit 02 · Measurement', time: '7', className: 'center dark',
      html: `<p class="eyebrow">02 / 03 · Act</p><div class="split" style="width:82%;text-align:left"><div><span class="label">Pulse oximeter</span><div class="display-number" style="font-size:8.5cqw;color:var(--cyan)">92–96%</div></div><div><span class="label">Arterial blood</span><div class="display-number" style="font-size:8.5cqw;color:var(--coral)">&lt;88%</div></div></div><p class="lede">Occult hypoxemia · study definition</p>`,
      source: museumSources.pulse,
      note: 'SpO₂ is an estimate and arterial SaO₂ was the comparator. Do not imply every 94% reading is unsafe or that pulse oximetry is useless.'
    },
    {
      title: 'Unequal invisibility', section: 'Exhibit 02 · Measurement', time: '8', className: 'center',
      html: `<p class="eyebrow">02 / 03 · Evidence</p><div class="split" style="width:76%;text-align:center"><div><div class="display-number" style="font-size:10cqw;color:var(--coral)">11.7%</div><p class="lede" style="margin-top:1cqw">Black patients</p></div><div><div class="display-number" style="font-size:10cqw;color:var(--teal)">3.6%</div><p class="lede" style="margin-top:1cqw">White patients</p></div></div><span class="micro" style="margin-top:3cqw">Paired measurements · one retrospective cohort</span>`,
      source: museumSources.pulse,
      note: 'The paper used self-identified race, not measured pigmentation. Race is an imperfect social proxy, and these are paired measurements in one cohort—not universal device failure rates.'
    },
    {
      title: 'Designed measurement', section: 'Exhibit 02 · Measurement', time: '9', className: 'paper-grid split third',
      html: `<div class="pulse-device" style="width:13cqw;height:23cqw"><div class="screen" style="font-size:4cqw">94</div><div class="button"></div></div><div><p class="eyebrow">02 / 03 · Widen</p><div class="layer-stack"><div class="layer"><strong>Physics</strong><span>light + sensor</span></div><div class="layer"><strong>Software</strong><span>algorithm</span></div><div class="layer"><strong>Evidence</strong><span>validation sample</span></div><div class="layer"><strong>System</strong><span>label · procurement · threshold</span></div></div></div>`,
      source: museumSources.fda,
      note: 'The number is produced by device physics, software, validation evidence, labelling, procurement, and clinical interpretation. Other conditions can also affect accuracy.'
    },
    {
      title: 'Curate the intervention', section: 'Exhibit 02 · Measurement', time: '10', className: 'top',
      html: `<p class="eyebrow">Pair exercise · 55 seconds</p><h1 class="hero small">You may fund two.</h1><div class="grid-4" style="margin-top:3cqw"><div class="card"><h3>A</h3><p>Remind the clinician</p></div><div class="card"><h3>B</h3><p>Add a warning label</p></div><div class="card"><h3>C</h3><p>Require representative testing</p></div><div class="card"><h3>D</h3><p>Change procurement + escalation</p></div></div><div class="prompt">Which two—and what failure remains?</div>`,
      note: 'Ask one clinical pair and one non-clinical pair for twenty seconds each. Reward boundary widening, not selection of a single “correct” card.'
    },
    {
      title: 'Design the evidence', section: 'Exhibit 02 · Measurement', time: '12', className: 'center',
      html: `<p class="eyebrow">02 / 03 · Change</p><h1 class="hero wide">Design the evidence.</h1><div style="width:78%;height:5cqw;border-radius:999px;background:linear-gradient(90deg,#f4d7c4,#d7aa86,#a96f50,#75442f,#3e2118);margin:4cqw auto 2cqw"></div><div class="grid-3" style="width:78%"><span class="micro">more participants</span><span class="micro">pigmentation measured</span><span class="micro">performance labelled</span></div>`,
      source: museumSources.fda,
      note: 'The FDA recommendations remain draft and not for implementation. Describe them as proposed, non-binding recommendations—not mandatory current requirements.'
    },
    {
      title: 'The cabinet', section: 'Exhibit 03 · Recovery', time: '13', className: 'dark split',
      html: `<div><p class="eyebrow">03 / 03 · Look</p><h1 class="hero small">The cabinet<br>was wrong.</h1><p class="lede">The humans hesitated.</p></div><div class="adc-grid">${adcCells}</div>`,
      source: museumSources.adc,
      note: 'The hospital network and vendor were not named. Keep them anonymous and do not suggest access to its actual cabinet.'
    },
    {
      title: 'The impossible drawer', section: 'Exhibit 03 · Recovery', time: '14', className: 'dark center',
      html: `<p class="eyebrow">03 / 03 · Act</p><div class="grid-2" style="display:grid;grid-template-columns:1fr 1fr;gap:2cqw;width:88%;text-align:left"><div class="card"><span class="label">Selected</span><h3>Misoprostol tablets</h3><span class="label">Displayed</span><h3 style="color:var(--coral)">30 mL cups</h3></div><div class="card"><span class="label">Selected</span><h3>Morphine 10 mg tablets</h3><span class="label">Drawer</span><h3 style="color:var(--coral)">Morphine 2 mg ampoules</h3></div></div>`,
      source: museumSources.adc,
      note: 'Nursing staff reported both discrepancies within minutes. Do not say a wrong medication was administered; these were detection reports.'
    },
    {
      title: 'The database shifted', section: 'Exhibit 03 · Recovery', time: '15', className: 'dark center',
      html: `<p class="eyebrow">03 / 03 · Widen</p><h1 class="hero small">One partial import.<br>Then another.</h1><div class="timeline" style="width:90%"><div class="event"><strong>Name</strong></div><div class="event"><strong>Strength</strong></div><div class="event"><strong>Format</strong></div><div class="event"><strong>Location</strong></div></div><p class="lede">The fields no longer travelled together.</p>`,
      source: museumSources.adc,
      note: 'A partial import followed by a second import misaligned data and reached the live network. Do not collapse this into blame of the operator.'
    },
    {
      title: 'The blast radius', section: 'Exhibit 03 · Recovery', time: '16', className: 'dark center',
      html: `<p class="eyebrow">Not a drawer problem</p><div class="grid-3" style="width:92%"><div><div class="display-number" style="font-size:8.5cqw;color:var(--coral)">300+</div><span class="label">products</span></div><div><div class="display-number" style="font-size:8.5cqw;color:var(--amber)">150+</div><span class="label">transactions</span></div><div><div class="display-number" style="font-size:8.5cqw;color:var(--cyan)">6h</div><span class="label">Code Grey</span></div></div>`,
      source: museumSources.adc,
      note: 'More than 300 medication products and 150 transactions were affected; Code Grey took approximately six hours to resolve.'
    },
    {
      title: 'People caught the system', section: 'Exhibit 03 · Recovery', time: '17', className: 'cyan center',
      html: `<p class="eyebrow">The counter-reveal</p><div class="display-number" style="font-size:18cqw">0</div><h1 class="hero small">reported patient harm</h1><p class="lede" style="font-weight:750;color:var(--teal)">People caught the system.</p>`,
      source: museumSources.adc,
      note: 'Say “no reported patient harm as a result of the incident,” not “no harm occurred.” Celebrate detection without making people permanent compensating controls.'
    },
    {
      title: 'Curate the defences', section: 'Exhibit 03 · Recovery', time: '19', className: 'dark top',
      html: `<p class="eyebrow">Nine groups · 60 seconds</p><h1 class="hero small">Place one defence.</h1><div class="choice-grid" style="margin-top:3cqw"><div class="choice"><strong>Prevent</strong><span>Groups 1–3</span></div><div class="choice"><strong>Detect</strong><span>Groups 4–6</span></div><div class="choice"><strong>Recover</strong><span>Groups 7–9</span></div></div>`,
      note: 'Ask one group from each category for a fifteen-second label. Seed only if needed: test deployment, illogical-data checks, escalation, downtime procedures, emergency operations.'
    },
    {
      title: 'The full exhibit label', section: 'Exhibit 03 · Recovery', time: '21', className: 'dark center',
      html: `<p class="eyebrow">The same story holds failure and success</p><div class="timeline" style="width:94%;grid-template-columns:repeat(5,1fr)"><div class="event"><strong>Protocol</strong><span>deviation</span></div><div class="event"><strong>Data</strong><span>misalignment</span></div><div class="event"><strong>Network</strong><span>propagation</span></div><div class="event"><strong>Human</strong><span>detection</span></div><div class="event"><strong>System</strong><span>recovery</span></div></div>`,
      source: museumSources.adc,
      note: 'A system view must explain what failed and what enabled recovery. This is the pivot from prevention alone to resilience.'
    },
    {
      title: 'Three designed realities', section: 'Exit gallery', time: '22', className: 'top',
      html: `<p class="eyebrow">The collection</p><div class="grid-3"><div class="card" style="min-height:25cqw"><span class="label">01</span><h3 style="font-size:3cqw">Doloral</h3><div style="margin:auto;font-size:6cqw;font-weight:800">11</div><p>Designed meaning</p></div><div class="card" style="min-height:25cqw"><span class="label">02</span><h3 style="font-size:3cqw">Pulse ox</h3><div style="margin:auto;font-size:6cqw;font-weight:800;color:var(--teal)">94</div><p>Designed measurement</p></div><div class="card" style="min-height:25cqw"><span class="label">03</span><h3 style="font-size:3cqw">ADC</h3><div style="margin:auto;font-size:6cqw;font-weight:800;color:var(--cyan)">0</div><p>Designed recovery</p></div></div><h2 style="font-size:2.5cqw;margin-top:2.5cqw">The action occurred inside a designed world.</h2>`,
      note: 'Ask: “In each case, was the person outside the system?” The user is part of the system.'
    },
    {
      title: 'Exit question', section: '', time: '25', className: 'dark center',
      html: `<h1 class="hero wide">Humans are fallible.<br>We will err.</h1><div style="height:2cqw"></div><h2 style="font-size:3cqw;color:var(--cyan);max-width:26ch">Therefore, systems must anticipate, detect, and help us recover.</h2><div class="fragment" style="position:absolute;inset:0;z-index:4;display:grid;place-content:center;justify-items:center;background:#111;color:#fff"><div class="reframe" style="width:74cqw"><div class="statement"><span class="strike">USER ERROR</span></div><div class="arrow">→</div><div class="statement" style="color:var(--cyan)">USE ERROR</div></div><p class="lede">What made this action likely?</p></div>`,
      note: 'Advance once more to reveal USE ERROR. Close: “This is not a museum of foolish people. It is a collection of reasonable actions in designed worlds.” Then hard cut to SEIPS/Human-Tech Ladder.'
    }
  ]
};
