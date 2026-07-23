window.MODULE = {
  slug: 'sepsis-ai',
  title: 'Sepsis AI across four health systems · HQRS 846',
  shortTitle: 'Sepsis AI: local work',
  runtime: '10 slides · 9 to 11 min',
  purpose: 'Audience contract: judge the local work system, not an AI product name.',
  argument: 'A prediction model becomes safe or unsafe through local data, thresholds, routing, ownership, and response.',
  sources: [
    {
      id: 'jama',
      status: 'PEER-REVIEWED PROGNOSTIC STUDY · CC BY',
      label: 'Wong A, Currey D, Schwinne M, et al. Multicenter Prospective Validation of an Updated Proprietary Sepsis Prediction Model. JAMA Network Open. 2026;9(2):e260181.',
      short: 'Wong et al., JAMA Network Open, 2026 · CC BY',
      url: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2845595',
      boundary: 'Prospective observational validation across four US health systems. All sites locally fine-tuned ESM v2. The study assessed prognostic performance, not mortality or other clinical outcomes.'
    }
  ],
  slides: [
    {
      id: 'sepsis-ai-s01',
      title: 'One product family, four local systems',
      section: 'Observe',
      time: '0:50',
      className: 'photo-fill',
      visualType: 'generated',
      source: 'jama',
      html: `<img class="visual-field" src="assets/generated/sepsis-four-systems.png" alt="Four ordinary hospital work settings arranged as one documentary composition, each with a different local team and workflow"><div class="photo-copy"><p class="eyebrow">Epic Sepsis Model v2</p><h1 class="hero wide">One product family.<br><span class="accent">Four local systems.</span></h1><p class="lede">What would have to be the same before one threshold meant the same thing?</p></div><div class="generated-credit" style="font-size:1.25cqw">Original Image 2 teaching image · four hypothetical settings · not study-site photography</div>`,
      note: 'Audience contract: for the next ten minutes, judge the local work system rather than the product name. Let the room inventory what could differ: population, data, training, threshold, routing, ownership, staffing, and response. The study involved four health systems, not four hospitals. Emory included six affiliated hospitals.'
    },
    {
      id: 'sepsis-ai-s02',
      title: 'The threshold puzzle',
      section: 'Verified fact',
      time: '0:55',
      className: 'light center',
      source: 'jama',
      html: `<p class="eyebrow">One analytic target: 60% encounter sensitivity</p><h1 class="hero small">Four score thresholds.</h1><div class="grid-4" style="width:90%;margin-top:2.4cqw"><article class="card"><h3>Michigan</h3><p style="font-size:4.2cqw;font-weight:800;color:var(--module-red)">14</p></article><article class="card"><h3>OHSU</h3><p style="font-size:4.2cqw;font-weight:800;color:var(--module-red)">29</p></article><article class="card"><h3>Emory</h3><p style="font-size:4.2cqw;font-weight:800;color:var(--module-red)">37</p></article><article class="card"><h3>MetroHealth</h3><p style="font-size:4.2cqw;font-weight:800;color:var(--module-red)">35</p></article></div><p class="teaching-copy" style="margin:1.6cqw auto 0">These were study operating points used for comparison. They were not reported as four production alert thresholds.</p>`,
      note: 'Ask: Which number is the safe threshold? The answer is that the study does not establish a universally safe threshold. Investigators selected a site-specific score matching 60% encounter sensitivity so they could compare other measures. Say explicitly that 14, 29, 37, and 35 are analytic operating points, not a record of production alert settings.'
    },
    {
      id: 'sepsis-ai-s03',
      title: 'Local before measured',
      section: 'Explanation',
      time: '0:55',
      className: 'photo-fill',
      visualType: 'generated',
      source: 'jama',
      html: `<img class="visual-field" src="assets/generated/sepsis-data-work.png" alt="Clinical and data staff comparing an abstract data pipeline and local care records in a calm hospital workroom"><div class="photo-copy"><p class="eyebrow">Before validation</p><h1 class="hero small">The model was already local.</h1><p class="lede">Each health system fine-tuned ESM v2 with its own historical inpatient data.</p></div><div class="generated-credit" style="font-size:1.25cqw">Original Image 2 teaching image · hypothetical data work · not study documentation</div>`,
      note: 'The product family was shared. The fitted model was not identical. All four sites fine-tuned ESM v2 using a site-specific historical training set of adult inpatients. This is the first systems widening: the algorithm is part of a local data and implementation process.'
    },
    {
      id: 'sepsis-ai-s04',
      title: 'Comparison across four health systems',
      section: 'Evidence',
      time: '1:05',
      className: 'artifact-slide',
      visualType: 'source-artifact',
      source: 'jama',
      truth: 'ORIGINAL PEER-REVIEWED FIGURE · STUDY EVIDENCE · CC BY',
      html: `<div class="observe-cue">Observe before interpreting</div><div class="artifact-field"><img src="../assets/source-images/theatre/esm-v2-figure-2-v1-comparison.jpg" alt="Original JAMA Network Open Figure 2 comparing ESM version 2 with version 1 across four health systems"></div><div class="artifact-credit" style="font-size:1.25cqw">Wong et al., 2026 · Figure 2 · CC BY · projected whole</div>`,
      note: 'Give the back row time to inspect the whole source figure. Ask: Where is variation still visible after the version update? Then state the cohort: 227,091 inpatient encounters, of which 7,401 met Sepsis-3 criteria. Keep the denominator and diagnostic definition attached.'
    },
    {
      id: 'sepsis-ai-s05',
      title: 'Validation is local work',
      section: 'Transfer',
      time: '0:55',
      className: 'photo-fill',
      visualType: 'generated',
      source: 'jama',
      html: `<img class="visual-field" src="assets/generated/sepsis-local-validation.png" alt="A multidisciplinary hospital team testing an abstract clinical prediction workflow with paper routing maps and an unreadable screen"><div class="photo-copy"><p class="eyebrow">Implementation work</p><h1 class="hero small">Validation is local work.</h1><p class="lede">Thresholds, routing, silencing, ownership, and response change what the model does to care.</p></div><div class="generated-credit" style="font-size:1.25cqw">Original Image 2 teaching image · hypothetical validation session · not study-site photography</div>`,
      note: 'Ask learners to point to the clinical work that cannot be bought from a vendor. Expected responses: independent local evaluation, threshold choice, alert routing, who responds, what counts as action, silent periods, monitoring, and change control. This image is a design prompt, not evidence that the study sites used this process.'
    },
    {
      id: 'sepsis-ai-s06',
      title: 'Discrimination is not the whole work burden',
      section: 'Verified fact',
      time: '1:05',
      className: 'dark center',
      source: 'jama',
      html: `<p class="eyebrow">Two measures · two different questions</p><h1 class="hero small">A strong ranker can still create a weak signal.</h1><div class="compare" style="margin-top:2.2cqw"><article><b>Across all thresholds</b><strong>AUROC 0.82 to 0.92</strong><p>How well scores separated encounters across the full range.</p></article><article><b>At each site's 60% sensitivity point</b><strong>PPV 0.13 to 0.26</strong><p>How often a threshold-positive encounter met the study outcome.</p></article></div>`,
      note: 'Do not call the model simply good or bad. AUROC summarizes discrimination across thresholds; it is not tied to the selected 60% sensitivity point. PPV was reported at each site-specific analytic operating point and ranged from 0.13 to 0.26. Prevalence and threshold choice matter.'
    },
    {
      id: 'sepsis-ai-s07',
      title: 'The alert burden estimate',
      section: 'Limitation',
      time: '0:55',
      className: 'gold center',
      source: 'jama',
      html: `<p class="eyebrow">Prediction-level analysis · 12-hour horizon</p><div class="display-number" style="font-size:14cqw;color:var(--module-red)">21 to 35</div><h1 class="hero small" style="max-width:16ch">evaluations per true case</h1><p class="teaching-copy" style="margin:1.4cqw auto 0;max-width:42ch">An analytic number needed to evaluate. Not an observed, identical production alert workflow.</p>`,
      note: 'The study estimated a number needed to evaluate of 21 to 35 at the 12-hour prediction horizon. Keep three boundaries attached: prediction-level analysis, analytic thresholds, and no common observed workflow. Do not translate this directly into 21 to 35 bedside interruptions or assume each prediction created an alert.'
    },
    {
      id: 'sepsis-ai-s08',
      title: 'Performance depends on the operating point',
      section: 'Evidence',
      time: '0:55',
      className: 'artifact-slide',
      visualType: 'source-artifact',
      source: 'jama',
      truth: 'ORIGINAL PEER-REVIEWED FIGURE · STUDY EVIDENCE · CC BY',
      html: `<div class="observe-cue">Follow one site across thresholds</div><div class="artifact-field"><img src="../assets/source-images/theatre/esm-v2-figure-1-performance.jpg" alt="Original JAMA Network Open Figure 1 showing encounter-level performance across score thresholds at four health systems"></div><div class="artifact-credit" style="font-size:1.25cqw">Wong et al., 2026 · Figure 1 · CC BY · projected whole</div>`,
      note: 'Ask one learner to trace a single site across the thresholds. Then ask what changes when the threshold moves: sensitivity, specificity, PPV, NPV, and workload. The point is not to teach every metric in the figure. The point is to make operating-point choice visible as a local safety and workload decision.'
    },
    {
      id: 'sepsis-ai-s09',
      title: 'Design the operating system',
      section: 'Action',
      time: '1:15',
      className: 'light center',
      source: 'jama',
      truth: 'STRUCTURED TEACHING EXERCISE · DESIGN PROPOSAL · NOT STUDY FINDING',
      html: `<p class="eyebrow">45-second implementation huddle · two reports</p><h1 class="hero small">Before go-live, make four decisions.</h1><div class="grid-4" style="width:94%;margin-top:2.2cqw"><article class="card"><h3>Threshold</h3><p>Whose misses and false positives are being traded?</p></article><article class="card"><h3>Routing</h3><p>Who sees a signal, when, and in what work queue?</p></article><article class="card"><h3>Ownership</h3><p>Who assesses, acts, documents, and closes the loop?</p></article><article class="card"><h3>Monitoring</h3><p>What drift, burden, equity, and workarounds will trigger review?</p></article></div>`,
      note: 'Default ten-minute route: assign one decision to each quadrant, give 45 seconds, then take two ten-second reports. Eight-minute route: 20 seconds and one report. Twelve-minute route: 90 seconds and up to four reports. Expected responses contain a denominator, role, action, and review trigger. These are design proposals informed by the study, not interventions tested by it.'
    },
    {
      id: 'sepsis-ai-s10',
      title: 'Local validation never finishes',
      section: 'Close',
      time: '0:45',
      className: 'gold center',
      source: 'jama',
      html: `<p class="eyebrow">Use error, not user error</p><h1 class="hero wide">Do not ask, “Does the AI work?”</h1><p class="big-question" style="margin:2cqw auto 0">Ask: what must be validated here, with this team, in this workflow, over time?</p><p class="teaching-copy" style="margin:1.7cqw auto 0">The study measured prediction performance. It did not test mortality or other clinical outcomes.</p>`,
      note: 'Close on the reusable capability. A model score does not act alone. The work system turns it into attention, delay, escalation, treatment, documentation, and learning. Final evidence boundary: this prognostic study was not designed to evaluate mortality or other clinical outcomes.'
    }
  ]
};
