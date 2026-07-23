window.MODULE = {
  slug: 'epma-procurement',
  title: 'ePMA procurement and lifecycle safety · HQRS 846',
  shortTitle: 'ePMA: safety after purchase',
  runtime: '10 slides · 10 to 12 min',
  purpose: 'Audience contract: treat procurement as the beginning of a local safety lifecycle.',
  argument: 'Electronic prescribing safety is produced through local configuration, testing, use, change, feedback, and shared assurance.',
  sources: [
    {
      id: 'hssib',
      status: 'OFFICIAL INVESTIGATION · PUBLISHED 28 MAY 2026',
      label: 'Health Services Safety Investigations Body. Electronic prescribing and medicines administration: procurement and safety learning in acute hospitals. 2026.',
      short: 'HSSIB, ePMA procurement and safety learning, 2026',
      url: 'https://www.hssib.org.uk/patient-safety-investigations/medication-related-harm/fourth-investigation-report/',
      boundary: 'Investigation of procurement and safety learning in acute NHS hospitals. It made five safety recommendations and three safety observations. A recommendation is not evidence of implementation.'
    },
    {
      id: 'eprase',
      status: 'PEER-REVIEWED SIMULATION STUDY · CC BY-NC-ND 4.0',
      label: 'Klein S, Tsanas A, Coleman J, et al. A simulation study to quantitatively assess the performance of electronic prescribing systems in English NHS Hospital Trusts. Scientific Reports. 2025;15:2120.',
      short: 'Klein et al., Scientific Reports, 2025 · CC BY-NC-ND 4.0',
      url: 'https://www.nature.com/articles/s41598-025-86112-w',
      boundary: 'Voluntary ePRaSE self-assessment using prescribing scenarios. The score measures recorded scenario responses, not medication harm or patient outcomes. The tool had not been externally validated or psychometrically evaluated.'
    }
  ],
  slides: [
    {
      id: 'epma-procurement-s01',
      title: 'Same product, different local safeguards',
      section: 'Observe',
      time: '0:50',
      className: 'photo-fill',
      visualType: 'generated',
      source: 'eprase',
      html: `<img class="visual-field" src="assets/generated/epma-same-product-two-hospitals.png" alt="Two ordinary hospital medication work settings shown side by side, with different local arrangements around similar electronic prescribing workstations"><div class="photo-copy"><p class="eyebrow">Electronic prescribing</p><h1 class="hero wide">Same product.<br><span class="accent">Different local safeguards.</span></h1><p class="lede">What can configuration and work design change?</p></div><div class="generated-credit" style="font-size:1.25cqw">Original Image 2 teaching image · hypothetical settings · not study-site photography</div>`,
      note: 'Audience contract: treat procurement as the beginning of a safety lifecycle, not the final assurance event. Ask the class to identify what can differ after two hospitals buy the same product: configuration, interfaces, alerts, formularies, workflow, training, staffing, hardware, governance, and update practices.'
    },
    {
      id: 'epma-procurement-s02',
      title: 'The ePRaSE sample and result',
      section: 'Verified fact',
      time: '1:05',
      className: 'dark center',
      source: 'eprase',
      html: `<p class="eyebrow">Voluntary simulation study</p><div class="number-row"><div><strong>68</strong><span>pharmacists</span></div><div><strong>45</strong><span>English NHS trusts</span></div><div><strong>13</strong><span>electronic prescribing systems</span></div></div><h1 class="hero small" style="margin-top:3cqw">About 50% good mitigation.</h1><p class="teaching-copy" style="margin:1.5cqw auto 0">Mean performance against known prescribing-risk scenarios, not a rate of patient harm.</p>`,
      note: 'Keep the study design and denominator together. Sixty-eight pharmacists from 45 English NHS trusts using 13 systems volunteered. The mean overall good-mitigation score was about 50% across scenario responses. Do not translate 50% into half of real prescriptions being unsafe or half of errors reaching patients.'
    },
    {
      id: 'epma-procurement-s03',
      title: 'Test the local configuration',
      section: 'Explanation',
      time: '0:55',
      className: 'photo-fill',
      visualType: 'generated',
      source: 'eprase',
      html: `<img class="visual-field" src="assets/generated/epma-fictional-patient-test.png" alt="A pharmacist testing a generic electronic prescribing workstation with fictional patient scenarios and blank paper test scripts"><div class="photo-copy"><p class="eyebrow">ePRaSE teaching move</p><h1 class="hero small">Test the work, not the promise.</h1><p class="lede">Enter known-risk scenarios. Observe what the locally configured system actually does.</p></div><div class="generated-credit" style="font-size:1.25cqw">Original Image 2 teaching image · hypothetical test session · not a published ePRaSE interface</div>`,
      note: 'Explain the method without showing a fabricated interface. ePRaSE uses expert-derived fictional prescribing scenarios with expected system responses. The assessor records how the local implementation reacts. This is closer to a fire drill than a product brochure.'
    },
    {
      id: 'epma-procurement-s04',
      title: 'What the score can and cannot say',
      section: 'Limitation',
      time: '1:05',
      className: 'light center',
      source: 'eprase',
      html: `<p class="eyebrow">Evidence boundary</p><h1 class="hero small">A scenario-response score.</h1><div class="compare" style="margin-top:2.2cqw"><article style="background:rgba(0,36,82,.06);border-color:rgba(0,36,82,.16)"><b style="color:var(--module-red)">It supports</b><strong>Local variation is measurable</strong><p>Trusts using the same system could show different mitigation performance.</p></article><article style="background:rgba(0,36,82,.06);border-color:rgba(0,36,82,.16)"><b style="color:var(--module-red)">It does not establish</b><strong>Patient outcome impact</strong><p>Participation was voluntary. The tool was not externally validated or psychometrically evaluated.</p></article></div><p class="teaching-copy" style="margin:1.5cqw auto 0">The highest trust score reported was 73%, not a proven ceiling.</p>`,
      note: 'This is the adversarial pause. The study supports measurable variation across systems and sites. It does not measure patient outcomes, and it cannot establish why every site differed. The authors describe voluntary participation, interpretation variability, uneven system representation, and no external or psychometric validation. The reported maximum of 73% is an observed score, not the product family’s theoretical limit.'
    },
    {
      id: 'epma-procurement-s05',
      title: 'Procurement is one stage',
      section: 'Evidence',
      time: '0:55',
      className: 'artifact-slide',
      visualType: 'source-artifact',
      source: 'hssib',
      truth: 'ORIGINAL HSSIB REPORT FIGURE · PROJECTED WHOLE · NO CONTENT ALTERATION',
      html: `<div class="observe-cue">Find procurement on the lifecycle</div><div class="artifact-field"><img src="../assets/source-images/shared/hssib-epma-roadmap.png" alt="Original HSSIB Figure 2 showing stages in the electronic prescribing and medicines administration roadmap"></div><div class="artifact-credit" style="font-size:1.25cqw">HSSIB, 2026 · Figure 2 · extracted whole from official report</div>`,
      note: 'Project the whole artifact for the back row. Ask learners to locate procurement, then count how much life follows it. The report focused on functional specification, tendering, system choice, procurement, and contracting, but the roadmap makes the broader lifecycle visible.'
    },
    {
      id: 'epma-procurement-s06',
      title: 'A framework listing is not local assurance',
      section: 'Procurement',
      time: '1:00',
      className: 'photo-fill',
      visualType: 'generated',
      source: 'hssib',
      html: `<img class="visual-field" src="assets/generated/epma-procurement-dossier.png" alt="A clinical procurement team examining an unbranded software dossier, hazard log, test plan, and contract papers around a worktable"><div class="photo-copy"><p class="eyebrow">At report publication</p><h1 class="hero small">21 manufacturers on the framework.</h1><p class="lede">A catalogue count is not assurance that one local configuration is safe.</p></div><div class="generated-credit" style="font-size:1.25cqw">Original Image 2 teaching image · hypothetical procurement review · not HSSIB evidence</div>`,
      note: 'HSSIB reported 21 commercial manufacturers of ePMA functionality on the CDHS framework at the time of writing. It also reported that manufacturers self-assessed eligibility responses and that the framework did not assure those responses. Do not imply 21 products were tested or approved as locally safe. The number describes framework availability.'
    },
    {
      id: 'epma-procurement-s07',
      title: 'Control and feedback are distributed',
      section: 'Evidence',
      time: '1:00',
      className: 'artifact-slide',
      visualType: 'source-artifact',
      source: 'hssib',
      truth: 'ORIGINAL HSSIB REPORT FIGURE · PROJECTED WHOLE · NO CONTENT ALTERATION',
      html: `<div class="observe-cue">Trace one safety signal</div><div class="artifact-field"><img src="../assets/source-images/shared/hssib-epma-control-map.png" alt="Original HSSIB Figure 3 showing the distributed legislation, regulation, standards, assurance, manufacturer, and hospital control structure around ePMA"></div><div class="artifact-credit" style="font-size:1.25cqw">HSSIB, 2026 · Figure 3 · extracted whole from official report</div>`,
      note: 'Ask: if a local configuration creates a new hazard, where can that information travel and where can it stop? HSSIB used systems methods to show distributed control, responsibilities, and feedback. Avoid saying there were no digital safety standards. The report found legally mandated standards, alongside variation in compliance, oversight, enforcement, and ePMA-specific requirements.'
    },
    {
      id: 'epma-procurement-s08',
      title: 'Recommendations are not implementation evidence',
      section: 'Status',
      time: '0:55',
      className: 'red center',
      source: 'hssib',
      html: `<p class="eyebrow" style="color:white">HSSIB report · 28 May 2026</p><div class="number-row" style="grid-template-columns:1fr 1fr;max-width:70%"><div><strong style="color:var(--module-gold)">5</strong><span>safety recommendations</span></div><div><strong style="color:var(--module-gold)">3</strong><span>safety observations</span></div></div><h1 class="hero small" style="margin-top:3cqw">A recommendation is a proposed control.</h1><p class="teaching-copy" style="margin:1.4cqw auto 0">Do not present it as implemented, effective, or complete without response evidence.</p>`,
      note: 'This report made five recommendations and three observations. The slide intentionally distinguishes report action from external-system action. As checked for this build on 19 July 2026, no response panels were visible on the report page. That may change, so refresh status before reuse. Never equate publication with implementation or effectiveness.'
    },
    {
      id: 'epma-procurement-s09',
      title: 'Review the next change',
      section: 'Action',
      time: '1:20',
      className: 'photo-fill',
      visualType: 'generated',
      source: 'hssib',
      truth: 'STRUCTURED TEACHING EXERCISE · HYPOTHETICAL · NOT HSSIB EVIDENCE',
      html: `<img class="visual-field" src="assets/generated/epma-safety-review.png" alt="A multidisciplinary medication-safety group reviewing an unbranded software change with test scripts, a hazard log, and a rollback plan"><div class="photo-copy"><p class="eyebrow">45-second change review · two reports</p><h1 class="hero small">Who owns the next update?</h1><div class="teaching-copy" style="margin-top:1.4cqw;text-align:left"><p style="margin:.45cqw 0">1. Name the new or changed hazard.</p><p style="margin:.45cqw 0">2. Test one high-risk workflow.</p><p style="margin:.45cqw 0">3. Assign detection, response, rollback, and learning.</p></div></div><div class="generated-credit" style="font-size:1.25cqw">Original Image 2 teaching image · hypothetical safety review · not a documented intervention</div>`,
      note: 'Default ten-minute route: give pairs 45 seconds and take two ten-second reports. Eight-minute route: 20 seconds and one report. Twelve-minute route: 90 seconds and up to four reports. Each proposal names a changed hazard, realistic test, stop authority, post-release detection, rollback, and learning route. If the answer is train users, ask what design, configuration, staffing, monitoring, and supplier controls accompany training.'
    },
    {
      id: 'epma-procurement-s10',
      title: 'Safety is a maintained property',
      section: 'Close',
      time: '0:45',
      className: 'gold center',
      source: 'hssib',
      html: `<p class="eyebrow">Use error, not user error</p><h1 class="hero wide">A safe product is not a finished state.</h1><p class="big-question" style="margin:2cqw auto 0">What evidence will show that this configuration still supports safe work after the next change?</p><p class="teaching-copy" style="margin:1.6cqw auto 0">Specify. Test. Configure. Monitor. Learn. Repeat.</p>`,
      note: 'Close with the reusable test: software safety is maintained through a sociotechnical lifecycle. People remain responsible participants in specifying, checking, adapting, detecting, recovering, and learning. The system must make those responsibilities possible, visible, resourced, and connected.'
    }
  ]
};
