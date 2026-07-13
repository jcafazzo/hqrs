const forensicSources = {
  parkinson: { label: 'HSSIB · Time-critical Parkinson’s medication · 2024', url: 'https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/investigation-report/' },
  corridor: { label: 'HSSIB · Temporary care environments · 8 Jan 2026', url: 'https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/' },
  fatigue: { label: 'HSSIB · Staff fatigue and patient safety · 24 Apr 2025', url: 'https://www.hssib.org.uk/patient-safety-investigations/the-impact-of-staff-fatigue-on-patient-safety/investigation-report/' },
  use: { label: 'FDA · Human factors postmarket information · 2026', url: 'https://www.fda.gov/medical-devices/human-factors-and-medical-devices/human-factors-postmarket-information-device-surveillance-and-reporting-processes' },
  seips: { label: 'Holden et al. · SEIPS 2.0 · Ergonomics 2013', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3835697/' }
};

const scheduledDoses = Array.from({ length: 18 }, () => '<span class="dose on-time"></span>').join('');
const outcomeDoses = Array.from({ length: 18 }, (_, i) => `<span class="dose ${i < 8 ? 'on-time' : i < 11 ? 'close' : ''}"></span>`).join('');

window.DECK = {
  title: 'The Forensic Thread · HQRS 846',
  shortTitle: 'The Forensic Thread',
  runtime: '25:30',
  theme: 'forensic',
  slides: [
    {
      title: '08:00', section: 'Act I · Attribution', time: '0', className: 'casefile center',
      html: `<div class="display-number" style="font-family:ui-monospace,monospace;font-size:16cqw;letter-spacing:-.1em">08:00</div>`,
      note: 'Let the room settle. “For most medications, eight o’clock is a time.” Pause.'
    },
    {
      title: 'Time is part of the dose', section: 'Act I · Attribution', time: '1', className: 'casefile center',
      html: `<p class="eyebrow">For this medication</p><h1 class="hero wide">08:00 is part<br>of the dose.</h1>`,
      source: forensicSources.parkinson,
      note: 'A medicine can be correct in substance and amount—and still wrong in time. Keep the claim specific to time-critical medication.'
    },
    {
      title: 'Eighteen scheduled', section: 'Act I · Attribution', time: '1', className: 'casefile',
      html: `<p class="eyebrow">One emergency-department stay</p><div class="display-number" style="font-size:12cqw;color:var(--cyan)">18</div><h1 class="hero small">scheduled doses</h1><div class="dose-strip">${scheduledDoses}</div>`,
      source: forensicSources.parkinson,
      note: 'HSSIB counted capsules as doses; two strengths due at one administration time count as two doses. Do not call these 18 medication rounds.'
    },
    {
      title: 'What happened', section: 'Act I · Attribution', time: '1', className: 'casefile evidence-split reverse',
      html: `<figure class="source-figure"><img src="../assets/source-images/forensic/hssib-parkinsons-executive-summary-8-of-18.png" alt="HSSIB executive-summary excerpt stating seven doses were missed, three late, and eight of eighteen on time"><figcaption class="attribution">© HSSIB, 2024 · Executive-summary excerpt · educational use</figcaption><span class="figure-tag">Source excerpt</span></figure><div><p class="eyebrow">Official finding</p><div class="display-number" style="font-size:12cqw;color:var(--cyan)">8/18</div><h1 class="hero small">on time.</h1><p class="lede">7 missed · 3 late</p></div>`,
      source: forensicSources.parkinson,
      note: 'State the numbers once, then hold three seconds. Do not simplify this to ten omitted doses.'
    },
    {
      title: 'Whose error?', section: 'Act I · Attribution', time: '2', className: 'casefile top',
      html: `<p class="eyebrow">First attribution</p><h1 class="hero wide">Whose error<br>was this?</h1><div class="grid-4" style="margin-top:4cqw"><div class="card"><h3>Patient</h3></div><div class="card"><h3>Nurse</h3></div><div class="card"><h3>Doctor</h3></div><div class="card"><h3>System</h3></div></div><div class="prompt">What fact did you assume?</div>`,
      note: 'Ask for a fast point or one-to-four fingers, then 30 seconds with a neighbour. Never ask anyone to defend a blame judgment.'
    },
    {
      title: 'Fallibility is the premise', section: 'Act I · Attribution', time: '3', className: 'cyan center',
      html: `<h1 class="hero wide">Humans are fallible.<br>We will err.</h1><p class="lede">Fallibility is a design requirement—not a verdict.</p>`,
      note: 'That includes the patient, nurse, physician, pharmacist, and us. Accountability and system learning remain different questions.'
    },
    {
      title: 'Remove one letter', section: 'Act I · Attribution', time: '4', className: 'casefile center',
      html: `<div class="reframe" style="width:88%"><div class="statement"><span class="strike">USER ERROR</span></div><div class="arrow">→</div><div class="statement" style="color:var(--cyan)">USE ERROR</div></div><p class="lede">The unit of analysis just changed.</p>`,
      source: forensicSources.use,
      note: 'The FDA definition is device-specific. Here the phrase is a broader analytic stance: investigate interaction in circumstances rather than a defective person.'
    },
    {
      title: 'Fifty-two hours', section: 'Act II · Widen', time: '5', className: 'casefile center',
      html: `<p class="eyebrow">Widen the frame</p><div class="display-number">52</div><h1 class="hero small">hours in the ED</h1>`,
      source: forensicSources.parkinson,
      note: 'This was not one dose at one moment. It was a patient journey through 52 hours of emergency care.'
    },
    {
      title: 'Forty-four in a corridor', section: 'Act II · Widen', time: '6', className: 'casefile center',
      html: `<p class="eyebrow">The environment enters the system</p><div class="display-number" style="color:var(--coral)">44</div><h1 class="hero small">hours cared for<br>in a corridor</h1>`,
      source: forensicSources.parkinson,
      note: 'HSSIB says corridor care created additional challenges and may have limited opportunities to store home medication. Preserve “may.”'
    },
    {
      title: 'The environment is not scenery', section: 'Act II · Widen', time: '6', className: 'photo-fill',
      html: `<img src="../assets/source-images/forensic/hssib-temporary-care-corridor-trolleys.jpg" alt="Hospital trolleys being used in a temporary corridor care environment"><div class="photo-copy"><p class="eyebrow">Temporary care environments</p><h1 class="hero small">Not designed.<br>Not staffed.<br>Not equipped.</h1><p class="lede">The environment is part of the medication system.</p></div><div class="photo-credit">© HSSIB, 2026 · Figure 1 · temporary care environment</div>`,
      source: forensicSources.corridor,
      note: 'The 2026 corridor investigation is separate from the 2024 case. Use it to generalize the environmental design problem, not add facts to the patient’s story.'
    },
    {
      title: 'The task was a chain', section: 'Act II · Widen', time: '7', className: 'casefile center',
      html: `<p class="eyebrow">Reconstructed workflow</p><div class="timeline" style="width:94%;grid-template-columns:repeat(5,1fr)"><div class="event"><strong>Identify</strong></div><div class="event"><strong>Verify</strong></div><div class="event"><strong>Prescribe</strong></div><div class="event"><strong>Obtain</strong></div><div class="event"><strong>Administer</strong></div></div><p class="lede">There was no single act called “give the medication.”</p>`,
      source: forensicSources.parkinson,
      note: 'This is a teaching synthesis of the documented workflow, not a validated process map. Label it as reconstructed.'
    },
    {
      title: 'The tools changed under the work', section: 'Act II · Widen', time: '8', className: 'paper-grid center',
      html: `<p class="eyebrow">Tools + technology</p><div class="reframe" style="width:76%"><div class="statement">ePMA</div><div class="arrow">×</div><div class="statement">PAPER</div></div><h2 style="font-size:3cqw;margin-top:4cqw;color:var(--coral)">No time-critical alert.</h2>`,
      source: forensicSources.parkinson,
      note: 'The electronic prescribing system was unavailable, requiring paper and electronic charts. When restored, it lacked a time-critical medication alert.'
    },
    {
      title: 'Ownership was undefined', section: 'Act II · Widen', time: '9', className: 'casefile center',
      html: `<p class="eyebrow">Organization</p><div class="grid-3" style="width:82%"><div class="card"><h3>ED</h3></div><div class="card"><h3>Specialty</h3></div><div class="card"><h3>Pharmacy</h3></div></div><h1 class="hero small" style="margin-top:4cqw">Who owned<br>the clock?</h1>`,
      source: forensicSources.parkinson,
      note: 'The investigation found no defined ED roles or responsibilities for identifying, prescribing, and ensuring administration of time-critical medication, and no dedicated pharmacy support.'
    },
    {
      title: 'The correct record was wrong', section: 'Act II · Widen', time: '10', className: 'paper-grid',
      html: `<p class="eyebrow">Information</p><div class="split"><div><span class="label">Family</span><h2 style="font-size:4cqw">One schedule</h2></div><div><span class="label">GP summary</span><h2 style="font-size:4cqw;color:var(--coral)">Another schedule</h2></div></div><h1 class="hero small" style="margin-top:4cqw">The authoritative<br>record was wrong.</h1>`,
      source: forensicSources.parkinson,
      note: 'The sources conflicted. The GP summary contained incorrect information; the neurology letter was unavailable and services could not be reached after hours.'
    },
    {
      title: 'The work system appears', section: 'Act II · Widen', time: '12', className: 'casefile evidence-split',
      html: `<div><p class="eyebrow">SEIPS 2.0 · Original framework</p><h1 class="hero small">Performance is conditional.</h1><p class="lede">People · tasks · tools · teams · organization · environment</p></div><figure class="source-figure"><img src="../assets/source-images/shared/seips-2-figure-1-crop.png" alt="Original SEIPS 2.0 model showing work system, processes, outcomes, and adaptation"><figcaption class="attribution">Holden et al., 2013 · Figure 1, SEIPS 2.0 model · Required Reading 4</figcaption><span class="figure-tag">Original figure</span></figure>`,
      source: forensicSources.seips,
      note: 'Name the categories quickly; do not lecture the diagram. The exact stage labels are simplified from SEIPS 2.0.'
    },
    {
      title: 'A configuration that could not keep time', section: 'Act II · Widen', time: '13', className: 'casefile evidence-split',
      html: `<div><p class="eyebrow">Not one broken link</p><h1 class="hero small">A configuration that could not reliably keep time.</h1><p class="lede">Why did safe care require heroic memory and coordination?</p></div><figure class="source-figure"><img src="../assets/source-images/forensic/hssib-parkinsons-care-model.png" alt="HSSIB CARe model showing demand, capacity, adaptations, and outcomes"><figcaption class="attribution">© HSSIB, 2024 · Investigation CARe model · original figure</figcaption><span class="figure-tag">Source model</span></figure>`,
      source: forensicSources.parkinson,
      note: 'Configuration is not a single root cause. The report presents interacting factors and learning prompts.'
    },
    {
      title: 'Nine groups, three targets', section: 'Investigation', time: '14', className: 'teal top',
      html: `<p class="eyebrow" style="color:#9ff7ff">Nine groups · 90 seconds</p><h1 class="hero small">Redesign one property.</h1><div class="choice-grid" style="margin-top:3cqw"><div class="choice"><strong>Visible</strong><span>Groups 1 · 4 · 7</span></div><div class="choice"><strong>Owned</strong><span>Groups 2 · 5 · 8</span></div><div class="choice"><strong>Recoverable</strong><span>Groups 3 · 6 · 9</span></div></div><div class="prompt">It must work at 03:00, in a corridor, during downtime.</div>`,
      note: 'Ban “be careful,” “educate,” and “remind staff” as complete answers. After 90 seconds, give 45 seconds to name a new failure the redesign might create.'
    },
    {
      title: 'Convert ideas into properties', section: 'Investigation', time: '17', className: 'casefile top',
      html: `<p class="eyebrow">Not three products—three system properties</p><div class="grid-3"><div class="card"><h3 style="color:var(--cyan)">Detect</h3><p>Status and schedule become salient at arrival.</p></div><div class="card"><h3 style="color:var(--cyan)">Own</h3><p>Responsibility and escalation are explicit.</p></div><div class="card"><h3 style="color:var(--cyan)">Recover</h3><p>Downtime, corridor, after-hours, and self-administration have a safe path.</p></div></div>`,
      source: forensicSources.parkinson,
      note: 'Connect the room’s proposals to HSSIB learning prompts, but call this a design brief—not proof of effectiveness.'
    },
    {
      title: 'Fatigue as a stress-test', section: 'Act III · Stress-test', time: '19', className: 'casefile evidence-split reverse',
      html: `<figure class="source-figure"><img src="../assets/source-images/forensic/hssib-fatigue-reporting-behaviour.png" alt="HSSIB systems diagram of factors influencing fatigue reporting behaviour"><figcaption class="attribution">© HSSIB, 2025 · Figure 1 · factors affecting reporting behaviour</figcaption><span class="figure-tag">Original figure</span></figure><div><p class="eyebrow">Evidence discipline</p><h1 class="hero small">Fatigue is a real system hazard.</h1><p class="lede"><strong style="color:var(--coral)">Not established in this case.</strong><br>Would your design still work?</p></div>`,
      source: forensicSources.fatigue,
      note: 'Do not retrofit fatigue into the Parkinson case. A separate HSSIB investigation supports using fatigue as a redesign stress-test and says the scale of related harm remains poorly measured.'
    },
    {
      title: 'Which intervention survives?', section: 'Act III · Stress-test', time: '20', className: 'paper-grid evidence-split reverse',
      html: `<figure class="source-figure crop"><img src="../assets/source-images/forensic/hssib-temporary-care-adapted-corridor-call-bell.jpg" alt="Adapted corridor care spaces with electrical points, oxygen, and call bell infrastructure"><figcaption class="attribution">© HSSIB, 2026 · Figure 4 · practical corridor-care mitigation</figcaption><span class="figure-tag">Mitigation in practice</span></figure><div><p class="eyebrow">The worst ordinary day</p><div class="layer-stack"><div class="layer" style="border-color:var(--coral);opacity:.5"><strong>Remember</strong><span>Be more careful</span></div><div class="layer" style="border-color:var(--amber)"><strong>Alert</strong><span>Who owns it? What closes the loop?</span></div><div class="layer" style="border-color:var(--teal)"><strong>System</strong><span>Visible · owned · recoverable</span></div></div><h1 class="hero small" style="margin-top:2.6cqw">Which intervention survives?</h1></div>`,
      source: forensicSources.corridor,
      note: 'Education and alerts can contribute. The test is whether success remains dependent on perfect attention at the worst moment.'
    },
    {
      title: 'A safer configuration', section: 'Act III · Stress-test', time: '22', className: 'casefile center',
      html: `<p class="eyebrow">Concept design · not validated intervention</p><div class="timeline" style="width:94%"><div class="event"><strong>Arrival</strong></div><div class="event"><strong>Status</strong><span>time critical</span></div><div class="event"><strong>Owner</strong><span>named</span></div><div class="event"><strong>Due</strong><span>administer or escalate</span></div></div><h1 class="hero small" style="margin-top:4cqw"><span class="accent">Anticipate.</span> Detect. Recover.</h1><p class="lede">Downtime · corridor · after hours · supported self-administration</p>`,
      source: forensicSources.parkinson,
      note: 'This is a specification, not a solution. Local workflow study, co-design, usability testing, balancing measures, and outcome evaluation would be required.'
    },
    {
      title: 'The new habit', section: '', time: '25', className: 'casefile center',
      html: `<div class="reframe" style="width:72%"><div class="statement"><span class="strike">USER ERROR</span></div><div class="arrow">→</div><div class="statement" style="color:var(--cyan)">USE ERROR</div></div><h1 class="hero wide" style="margin-top:4cqw">People will err.<br><span class="accent">Systems decide what happens next.</span></h1>`,
      note: 'Close by naming the four questions: what made error likely, whether it was detectable, whether recovery was possible, and whether it reached the patient. Hold five seconds.'
    }
  ]
};
