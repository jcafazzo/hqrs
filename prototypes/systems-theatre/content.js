const theatreSources = {
  ai: { label: 'Wong et al. · JAMA Network Open · 2026', url: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2845595' },
  corridor: { label: 'HSSIB · Temporary care environments · 8 Jan 2026', url: 'https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/' },
  fatigue: { label: 'HSSIB · Staff fatigue and patient safety · 24 Apr 2025', url: 'https://www.hssib.org.uk/patient-safety-investigations/the-impact-of-staff-fatigue-on-patient-safety/investigation-report/' },
  adc: { label: 'ISMP Canada · Automated dispensing cabinets · 31 Jul 2025', url: 'https://ismpcanada.ca/bulletin/automated-dispensing-cabinets/' },
  use: { label: 'FDA · Human factors postmarket information · 2026', url: 'https://www.fda.gov/medical-devices/human-factors-and-medical-devices/human-factors-postmarket-information-device-surveillance-and-reporting-processes' }
};

const hospitalCards = (values, unit) => values.map((value, i) => `<div class="hospital"><span class="letter">Health system ${String.fromCharCode(65 + i)}</span><div class="alerts">${value}</div><p>${unit}</p></div>`).join('');

window.DECK = {
  title: 'Systems Theatre · HQRS 846',
  shortTitle: 'Systems Theatre',
  runtime: '26:30',
  theme: 'theatre',
  slides: [
    {
      title: 'The action', section: 'Act I · Attribution', time: '0', className: 'stage center',
      html: `<div style="width:42cqw;padding:2.5cqw;border-radius:2cqw;background:#f5f6f7;color:#090b12;box-shadow:0 3cqw 10cqw rgba(0,0,0,.45);text-align:left"><span class="label" style="color:#b42323">Clinical alert</span><h1 style="font-size:4.6cqw;letter-spacing:-.05em;margin:1cqw 0">Sepsis risk<br><span style="color:#b42323">HIGH</span></h1><div style="border-top:1px solid #ccd0d4;padding-top:1.2cqw;text-align:right;font-size:1.4cqw;font-weight:700">DISMISS</div></div><p class="lede">A clinician dismisses the alert.</p>`,
      note: 'This action is hypothetical, not an event reported in the validation study. Say only: “This happened. Why?” Pause eight seconds.'
    },
    {
      title: 'Name the first explanation', section: 'Act I · Attribution', time: '1', className: 'stage top',
      html: `<p class="eyebrow">Nine groups · 20 seconds</p><h1 class="hero small">Why?</h1><div class="grid-4" style="margin-top:4cqw"><div class="card" style="background:rgba(255,106,103,.18);border-color:var(--coral)"><h3>Person</h3></div><div class="card"><h3>Model</h3></div><div class="card" style="background:rgba(91,231,245,.12);border-color:var(--cyan)"><h3>Workflow</h3></div><div class="card" style="background:rgba(255,255,255,.12)"><h3>Not enough information</h3></div></div>`,
      note: 'Each table raises one physical card. Do not define the options; the forced choice surfaces their default system boundary.'
    },
    {
      title: 'Public commitment', section: 'Act I · Attribution', time: '1', className: 'stage center',
      html: `<h1 class="hero">Choose.</h1><p class="lede">No hedging.</p><div class="room-grid" style="width:76%;margin-top:4cqw">${Array.from({length:9},(_,i)=>`<div class="team"><b>Table ${i+1}</b><span>raise one card</span></div>`).join('')}</div>`,
      note: 'Count down 3·2·1 and count cards neutrally. Ask one PERSON table and one other table for one sentence each, without debate.'
    },
    {
      title: 'Mirror the room', section: 'Act I · Attribution', time: '2', className: 'stage center',
      html: `<p class="eyebrow">First reveal</p><h1 class="hero wide">We wrote a causal story from one action.</h1><p class="lede">The clinician acted. We supplied the cause.</p>`,
      note: 'Let the sentence sit. The room—not the clinician—has just acted.'
    },
    {
      title: 'One model family', section: 'Act I · Attribution', time: '3', className: 'stage evidence-split reverse',
      html: `<figure class="source-figure"><img src="../assets/source-images/theatre/esm-v2-figure-2-v1-comparison.jpg" alt="Original JAMA Network Open figure comparing ESM v2 and ESM v1 across four health systems"><figcaption class="attribution">Wong et al., 2026 · JAMA Network Open · Figure 2 · CC BY</figcaption><span class="figure-tag">Original figure</span></figure><div><p class="eyebrow">Epic Sepsis Model v2</p><h1 class="hero small">One product family.<br><span class="accent">Four local implementations.</span></h1><div class="display-number" style="font-size:7cqw;margin-top:2cqw">227,091</div><span class="label">inpatient encounters</span></div>`,
      source: theatreSources.ai,
      note: 'Say four health systems, not four hospitals. Each site fine-tuned ESM v2 using site-specific historical data.'
    },
    {
      title: 'The threshold reveal', section: 'Act I · Attribution', time: '3', className: 'stage top',
      html: `<p class="eyebrow">Same 60% sensitivity target</p><h1 class="hero small">Different thresholds.</h1><div class="hospital-grid" style="margin-top:3cqw">${hospitalCards([14,29,37,35],'score threshold')}</div>`,
      source: theatreSources.ai,
      note: 'These are analytic site-specific score thresholds at 60% encounter-level sensitivity—not proof clinicians saw identical alerts with these settings.'
    },
    {
      title: 'The performance reveal', section: 'Act I · Attribution', time: '4', className: 'stage top',
      html: `<p class="eyebrow">Positive predictive value</p><h1 class="hero small">Different signal.</h1><div class="hospital-grid" style="margin-top:3cqw">${hospitalCards(['13%','26%','25%','20%'],'positive predictive value')}</div>`,
      source: theatreSources.ai,
      note: 'Encounter-level AUROC ranged 0.82–0.92. A respectable AUROC does not specify alert workload or clinical usefulness.'
    },
    {
      title: 'The work reveal', section: 'Act I · Attribution', time: '5', className: 'stage top',
      html: `<p class="eyebrow">12-hour prediction horizon</p><h1 class="hero small">Different work.</h1><div class="hospital-grid" style="margin-top:3cqw">${hospitalCards([35,26,22,21],'number needed to evaluate')}</div>`,
      source: theatreSources.ai,
      note: 'Use the paper’s term NNE. These are above-threshold predictions per true-positive prediction, not observed interruptive alerts handled by clinicians.'
    },
    {
      title: 'Correct the slogan', section: 'Act I · Attribution', time: '6', className: 'stage evidence-split',
      html: `<div><p class="eyebrow">The accurate systems claim</p><h1 class="hero small">Same product name.</h1><div class="layer-stack" style="margin-top:2cqw"><div class="layer"><strong>Model</strong><span>locally fine-tuned</span></div><div class="layer"><strong>Population</strong><span>different prevalence and mix</span></div><div class="layer"><strong>Threshold</strong><span>different operating point</span></div><div class="layer"><strong>Work</strong><span>different consequences</span></div></div></div><figure class="source-figure"><img src="../assets/source-images/theatre/esm-v2-figure-1-performance.jpg" alt="Original JAMA figure showing sensitivity, specificity, PPV, and NPV across thresholds at four institutions"><figcaption class="attribution">Wong et al., 2026 · JAMA Network Open · Figure 1 · CC BY</figcaption><span class="figure-tag">Original figure</span></figure>`,
      source: theatreSources.ai,
      note: 'Do not say the identical model performed differently. The stronger, accurate line is one product family becoming four local model-work systems.'
    },
    {
      title: 'Ask again', section: 'Act I · Attribution', time: '7', className: 'stage center',
      html: `<div class="reframe" style="width:90%"><div class="statement"><span class="strike">Who failed?</span></div><div class="arrow">→</div><div class="statement" style="color:var(--cyan)">What made dismissal predictable?</div></div>`,
      note: 'Take three fast conditions: alert repetition, threshold, local prevalence, staffing, escalation path, timing, competing work. Do not imply any was present in the hypothetical action.'
    },
    {
      title: 'Install the language', section: 'Act I · Attribution', time: '7', className: 'stage center',
      html: `<div class="reframe" style="width:78%"><div class="statement"><span class="strike">USER ERROR</span></div><div class="arrow">→</div><div class="statement" style="color:var(--cyan)">USE ERROR</div></div><p class="lede">The person is part of the system.</p>`,
      source: theatreSources.use,
      note: 'The phrase changes the analytic stance. It does not declare that responsibility never matters.'
    },
    {
      title: 'Put the room to work', section: 'Act II · Stations', time: '8', className: 'stage center',
      html: `<p class="eyebrow">Open the envelopes</p><h1 class="hero wide">Three scenes.<br>Nine tables.<br>Three minutes.</h1><div class="prompt">Cause · redesign · evidence</div>`,
      note: 'Assign timekeeper, writer, reporter. Students analyse published cases; no one discloses a personal error or safety incident.'
    },
    {
      title: 'The three freeze-frames', section: 'Act II · Stations', time: '8', className: 'stage top',
      html: `<p class="eyebrow">Write an eight-word causal explanation</p><div class="grid-3"><div class="card"><span class="label">A · Corridor</span><h3>A patient collapses.</h3><p>No call bell. The nurse must shout.</p></div><div class="card"><span class="label">B · Fatigue</span><h3>A scan may be wrong.</h3><p>A staff member believes fatigue affected accuracy.</p></div><div class="card"><span class="label">C · ADC</span><h3>The drawer disagrees.</h3><p>The nurse selects tablets and finds ampoules.</p></div></div><div class="prompt">What changes the work tomorrow?</div>`,
      note: 'If a group writes training, ask what makes the safer action easier. If policy, ask how the physical work changes. At 1:30 call “Name evidence”; at 2:40 call “Commit.”'
    },
    {
      title: 'Commit the new causal story', section: 'Act II · Stations', time: '11', className: 'stage center',
      html: `<h1 class="hero">Commit.</h1><div style="width:68%;margin-top:4cqw;text-align:left;font:600 2.1cqw/2 ui-monospace,monospace"><div>CAUSE: ____________________</div><div>REDESIGN: _________________</div><div>EVIDENCE: _________________</div></div>`,
      note: 'One table from each station reads only its eight-word cause. Ask sibling tables whether their system boundary is narrower or wider—not whether an answer is right.'
    },
    {
      title: 'Corridor reveal', section: 'Act II · Stations', time: '13', className: 'photo-fill',
      html: `<img src="../assets/source-images/theatre/hssib-tce-figure-1-corridor.jpg" alt="Original HSSIB photograph of trolleys in a temporary corridor care environment"><div class="photo-copy"><p class="eyebrow">Station A · Environment</p><h1 class="hero small">The corridor is part of the clinical system.</h1><p class="lede">Call bells · sightlines · staffing · oxygen + suction · patient flow</p></div><div class="photo-credit">© HSSIB, 2026 · Figure 1 · temporary care environment</div>`,
      source: theatreSources.corridor,
      note: 'HSSIB found no evidence that the temporary environment or response affected the outcome of the reported collapse. Ask which redesign changes the room and which asks the nurse to compensate.'
    },
    {
      title: 'Fatigue reveal', section: 'Act II · Stations', time: '15', className: 'stage evidence-split reverse',
      html: `<figure class="source-figure"><img src="../assets/source-images/theatre/hssib-fatigue-figure-1-reporting.png" alt="HSSIB systems diagram of factors affecting fatigue reporting behaviour"><figcaption class="attribution">© HSSIB, 2025 · Figure 1 · reporting behaviour system map</figcaption><span class="figure-tag">Original figure</span></figure><div><p class="eyebrow">Station B · Work organization</p><h1 class="hero small">Fatigue is not a character flaw.</h1><div class="layer-stack" style="margin-top:2cqw"><div class="layer"><strong>Sleep</strong><span>loss</span></div><div class="layer"><strong>Wake</strong><span>extended</span></div><div class="layer"><strong>Clock</strong><span>circadian phase</span></div><div class="layer"><strong>Work</strong><span>mental + physical load</span></div></div></div>`,
      source: theatreSources.fatigue,
      note: 'The scan account was a staff member’s belief, not a causal adjudication. HSSIB says the scale of fatigue-related harm is poorly measured.'
    },
    {
      title: 'Resilience reveal', section: 'Act II · Stations', time: '16', className: 'cyan evidence-split reverse',
      html: `<figure class="source-figure wide-strip"><img src="../assets/source-images/theatre/ismp-adc-figure-1-frameshift.jpg" alt="ISMP Canada diagram showing the automated dispensing cabinet data frameshift"><figcaption class="attribution">© ISMP Canada, 2025 · Figure 1 · frameshift error illustration</figcaption><span class="figure-tag">Original figure</span></figure><div><p class="eyebrow">Station C · Technology + recovery</p><h1 class="hero small">The error propagated.<br>People interrupted it.</h1><div class="grid-3" style="margin-top:2.4cqw"><div><div class="display-number" style="font-size:6cqw">300+</div><span class="label">products</span></div><div><div class="display-number" style="font-size:6cqw">150+</div><span class="label">transactions</span></div><div><div class="display-number" style="font-size:6cqw">0</div><span class="label">reported harm</span></div></div></div>`,
      source: theatreSources.adc,
      note: 'Ask where the error was created and where it was detected. No reported patient harm is not proof that every discrepancy was detected.'
    },
    {
      title: 'The causal-language ledger', section: 'Act III · Revision', time: '18', className: 'stage top',
      html: `<p class="eyebrow">The room’s language changed</p><div class="layer-stack"><div class="layer" style="border-color:var(--coral)"><strong>Ignored</strong><span>responding within…</span></div><div class="layer" style="border-color:var(--coral)"><strong>Careless</strong><span>working around…</span></div><div class="layer" style="border-color:var(--coral)"><strong>Tired</strong><span>exposed to…</span></div><div class="layer"><strong>Caught it</strong><span>the system recovered because…</span></div></div>`,
      note: 'Invite the remaining six reporters to supply one phrase each. Person-level facts can remain; relocate them inside how the system produced, tolerated, detected, or mitigated them.'
    },
    {
      title: 'Name the method', section: 'Act III · Revision', time: '19', className: 'stage evidence-split reverse',
      html: `<figure class="source-figure"><img src="../assets/source-images/shared/seips-2-figure-1-crop.png" alt="Original SEIPS 2.0 model"><figcaption class="attribution">Holden et al., 2013 · Figure 1 · Required Reading 4</figcaption><span class="figure-tag">Original figure</span></figure><div><p class="eyebrow">Name it after they have used it</p><h1 class="hero small">Same action.<br><span class="accent">Wider frame.</span></h1><p class="lede">Person · task · tool · team · environment · organization · policy</p><h2 style="font-size:2.9cqw;margin-top:2.2cqw">You just did systems thinking.</h2></div>`,
      note: 'A system boundary is a choice. Widen it until conditions become visible that can be redesigned.'
    },
    {
      title: 'Return to the alert', section: 'Act III · Revision', time: '20', className: 'stage top',
      html: `<p class="eyebrow">Seventy-five seconds</p><h1 class="hero small">Redesign one condition.</h1><div class="grid-4" style="margin-top:3cqw"><div class="card"><h3>Remember less</h3></div><div class="card"><h3>Make safe easier</h3></div><div class="card"><h3>Make failure visible</h3></div><div class="card"><h3>Make recovery possible</h3></div></div><div class="prompt">Name one measure.</div>`,
      note: 'Choose one condition around the alert: local validation, threshold, silencing, routing, staffing, escalation, interface, or feedback. Training alone is incomplete.'
    },
    {
      title: 'Test the intervention', section: 'Act III · Revision', time: '22', className: 'stage center',
      html: `<h1 class="hero wide">Does it change<br>the system?</h1><p class="lede">Or only ask the person to try harder?</p>`,
      note: 'Take three 30-second proposals. Ask for thumbs-up only if a proposal changes a condition beyond motivation or vigilance. Stronger controls are still contextual and require evaluation.'
    },
    {
      title: 'Re-vote and bookend', section: '', time: '25', className: 'stage center',
      html: `<p class="eyebrow">Vote again</p><h1 class="hero small">Why?</h1><div class="grid-4" style="width:92%;margin-top:3cqw"><div class="card"><h3>Person</h3></div><div class="card"><h3>Model</h3></div><div class="card"><h3>Workflow</h3></div><div class="card"><h3>Not enough information</h3></div></div><div class="fragment" style="position:absolute;inset:0;z-index:4;display:grid;place-content:center;justify-items:center;background:radial-gradient(ellipse at 50% 110%,rgba(141,122,255,.3),transparent 58%),#070916"><p class="eyebrow">Use error</p><h1 class="hero wide">People will err.<br><span class="accent">Systems shape what happens next.</span></h1><p class="lede">Likely · visible · recoverable · harmful</p></div>`,
      note: 'Do not demand Workflow. More “not enough information” may represent causal humility. Ask what information they now need that they did not request at the start. Advance once more, then end on USE ERROR.'
    }
  ]
};
