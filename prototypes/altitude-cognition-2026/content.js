window.LECTURE = {
  slug: 'hqrs-cognition-2026',
  shortTitle: 'Cognition and use error',
  meta: {
    duration: '60 minutes',
    subtitle: 'Human Factors in Health Care · Queen\'s University · 2026'
  },
  teachingPath: [
    {
      id:'c01', type:'title', section:'Opening',
      title:'Cognition, Human Performance and Behaviour',
      htmlTitle:'Cognition,<br><span class="accent">Human Performance</span><br>and Behaviour',
      subtitle:'HQRS 846 · Human Factors in Health Care · Queen\'s University · 2026',
      note:'Open with the discipline, not a catalogue of biases. The live promise is to turn predictable cognitive limits into design requirements.',
      delivery:'0:00–0:45. No housekeeping.'
    },
    {
      id:'c02', type:'prompt', section:'Opening', theme:'paper', eyebrow:'A routine allergy search',
      title:'You type: penicill…',
      body:'What do you expect the system to show first?',
      note:'Ask for a private prediction before revealing the options. Do not frame this as a test of pharmacology.',
      delivery:'0:45–1:30. Ten seconds silent commitment, then take two answers.'
    },
    {
      id:'c03', type:'compare', section:'Opening', theme:'paper', eyebrow:'Two plausible strings', arrow:'↕',
      cards:[
        {title:'penicillin',body:'The intended allergy group.'},
        {title:'penicillamine',body:'A different medicine—sometimes surfaced alone or listed first.'}
      ],
      title:'Penicillin and penicillamine',
      source:'https://www.england.nhs.uk/2025/11/harm-from-incorrect-recording-of-penicillin-allergy-as-penicillamine-allergy/',
      sourceLabel:'NHS England National Patient Safety Alert, 20 Nov 2025',
      note:'Let the near-match fill the screen. The point is similarity plus search/list behaviour—not a careless user.',
      delivery:'1:30–2:30.'
    },
    {
      id:'c04', type:'flow', section:'Opening', eyebrow:'The work system',
      title:'How the recording becomes plausible',
      nodes:[
        {kicker:'Intent',title:'Record allergy',body:'Time pressure, prior knowledge, incomplete context'},
        {kicker:'Search',title:'Type “penicill”',body:'The group may not appear under drug-name search'},
        {kicker:'Display',title:'Near-match surfaces',body:'Alphabetic order can put penicillamine first'},
        {kicker:'Record',title:'Wrong state persists',body:'Later prescribing trusts the stored allergy'}
      ],
      source:'https://www.england.nhs.uk/wp-content/uploads/2025/11/national-patient-safety-alert-penicillamine-allergy-recording.pdf',
      sourceLabel:'NHS England alert PDF',
      note:'Name intent, search semantics, ordering, persistent data and downstream trust. The user is one component in that chain.',
      delivery:'2:30–4:00.'
    },
    {
      id:'c05', type:'metrics', section:'Opening', theme:'paper', eyebrow:'A three-year national incident review',
      title:'The alert was not hypothetical',
      metrics:[
        {value:'1',label:'death identified',detail:'after a known penicillin allergy was recorded as penicillamine'},
        {value:'0',label:'useful blame',detail:'the mitigation is technical, operational and clinical'}
      ],
      source:'https://www.england.nhs.uk/2025/11/harm-from-incorrect-recording-of-penicillin-allergy-as-penicillamine-allergy/',
      sourceLabel:'NHS England, 2025',
      caveat:'National incident reports are not a prevalence estimate; local configurations vary.',
      note:'State the severity without implying incidence. Immediately pivot from outcome to design action.',
      delivery:'4:00–5:00.'
    },
    {
      id:'c06', type:'statement', section:'Opening', theme:'blue', eyebrow:'The premise',
      title:'Cognition is part of the system.',
      body:'Human limits are not defects to overcome through vigilance. They are predictable design requirements.',
      note:'This is the lecture thesis. Pause after “system.”',
      delivery:'5:00–5:45.'
    },
    {
      id:'c07', type:'steps', section:'Opening', theme:'paper', eyebrow:'By the end, diagnose four things',
      title:'The learner contract',
      steps:[
        'What shaped what could be <strong>detected</strong>?',
        'What had to be <strong>remembered</strong>?',
        'What shaped <strong>judgment and trust</strong>?',
        'How could the system <strong>catch and contain</strong> the miss?'
      ],
      note:'Give students a reusable analysis structure, not a list of named biases.',
      delivery:'5:45–7:00.'
    },

    {
      id:'c08', type:'statement', section:'01 · Detection', theme:'blue', eyebrow:'Mechanism one',
      title:'Attention is selection.',
      body:'We notice what the task, signal and expectation make available—not everything that reaches the eye.',
      note:'Normalize selective attention as necessary performance, not a lapse.',
      delivery:'7:00–7:45.'
    },
    {
      id:'c09', type:'source', section:'01 · Detection', sourcePage:35, fit:'contain', label:'Search task',
      title:'Chest CT with pulmonary nodules',
      caption:'Inspect the scan exactly as the radiologists did: search for nodules.',
      status:'keep',
      note:'Use the original scan full-frame. Give the room 15–20 seconds. Do not mention the unexpected object.',
      delivery:'7:45–8:30.'
    },
    {
      id:'c10', type:'source', section:'01 · Detection', sourcePage:36, fit:'contain', label:'Reveal',
      title:'The inserted gorilla',
      caption:'A large unexpected object can remain unreported during a demanding search task.',
      status:'refresh',
      note:'Reveal without ridicule. The researchers observed that 20 of 24 radiologists did not report the inserted gorilla.',
      delivery:'8:30–9:15.',
      source:'https://pubmed.ncbi.nlm.nih.gov/23863753/',
      sourceLabel:'Drew, Võ and Wolfe, Psychological Science, 2013'
    },
    {
      id:'c11', type:'metrics', section:'01 · Detection', theme:'paper', eyebrow:'One experimental nodule-search task',
      title:'Expertise did not make attention unlimited',
      metrics:[
        {value:'20/24',label:'radiologists did not report it',detail:'the object was visible; the task controlled attention'},
        {value:'1',label:'study—not a clinical miss rate',detail:'do not generalize this percentage to routine care'}
      ],
      source:'https://pubmed.ncbi.nlm.nih.gov/23863753/',
      sourceLabel:'Drew et al., 2013',
      caveat:'Experimental search task; not an estimate of ordinary diagnostic error.',
      note:'Use the denominator. Preserve the external-validity caveat on the slide and in speech.',
      delivery:'9:15–10:30.'
    },
    {
      id:'c12', type:'statement', section:'01 · Detection', theme:'gold', eyebrow:'Normalize',
      title:'They were doing the task they were given.',
      body:'“Pay more attention” does not redesign the signal, the search goal or the recovery path.',
      note:'This is the debrief. Ask what the task made relevant and what it made peripheral.',
      delivery:'10:30–11:30.'
    },
    {
      id:'c13', type:'source', section:'01 · Detection', sourcePage:51, fit:'contain', label:'Clinical transfer',
      title:'Low-prevalence search in cytology',
      caption:'When targets are rare, the decision threshold and search behaviour can shift.',
      status:'refresh',
      note:'Reclassify this legacy slide from “availability bias” to signal detection and low-prevalence search.',
      delivery:'11:30–12:45.',
      source:'https://pmc.ncbi.nlm.nih.gov/articles/PMC3966132/',
      sourceLabel:'Evans et al., Archives of Pathology & Laboratory Medicine, 2011'
    },
    {
      id:'c14', type:'compare', section:'01 · Detection', theme:'paper', eyebrow:'Signal detection',
      title:'Two different design problems',
      cards:[
        {title:'Can the signal be distinguished?',body:'Improve discriminability: contrast, grouping, context, test conditions.'},
        {title:'When does someone say “present”?',body:'Support the criterion: prevalence cues, second reads, sampling, feedback.'}
      ],
      note:'Keep the vocabulary light. Students need the distinction between changing the signal and changing the decision threshold.',
      delivery:'12:45–14:15.'
    },
    {
      id:'c15', type:'flow', section:'01 · Detection', eyebrow:'Therefore the system must…',
      title:'Make detection a system property',
      nodes:[
        {kicker:'Signal',title:'Differentiate',body:'Shape, spacing, contrast, naming, context'},
        {kicker:'Task',title:'Direct search',body:'Make the goal and priority explicit'},
        {kicker:'Feedback',title:'Calibrate',body:'Show misses, false alarms and changing prevalence'},
        {kicker:'Recovery',title:'Catch later',body:'Independent checks and downstream containment'}
      ],
      note:'This is the first transfer slide. Each element should be illustrated orally from a profession in the room.',
      delivery:'14:15–15:45.'
    },
    {
      id:'c16', type:'prompt', section:'01 · Detection', theme:'paper', eyebrow:'Pair test · 90 seconds',
      title:'Where is the signal being lost in your work?',
      body:'Name the task, the expected signal, the competing signal—and one recovery mechanism.',
      note:'Pairs. Stop after 90 seconds and take one nursing/pharmacy/allied-health example, not only a physician example.',
      delivery:'15:45–18:00.'
    },

    {
      id:'c17', type:'statement', section:'02 · Memory', theme:'blue', eyebrow:'Mechanism two',
      title:'Remembering is work.',
      body:'Working memory is sharply limited and task-dependent. Prospective memory—remembering to act later—is especially vulnerable to interruption.',
      source:'https://pubmed.ncbi.nlm.nih.gov/11515286/',
      sourceLabel:'Cowan working-memory review, 2001',
      source2:'https://pmc.ncbi.nlm.nih.gov/articles/PMC3240749/',
      sourceLabel2:'Systematic interruption review, 2012',
      caveat:'Capacity depends on chunking, expertise, interference and task conditions; prospective-memory effects vary by task and cue.',
      note:'Avoid “the brain holds exactly four things.” Emphasize externalization and interruption recovery.',
      delivery:'18:00–19:15.'
    },
    {
      id:'c18', type:'source', section:'02 · Memory', sourcePage:61, fit:'contain', label:'Observe',
      title:'A fluorouracil label in use',
      caption:'What must the clinician notice, infer and remember?',
      status:'refresh',
      note:'Do not explain the event yet. Ask students to scan the label from the back of the room.',
      delivery:'19:15–20:15.'
    },
    {
      id:'c19', type:'source', section:'02 · Memory', sourcePage:64, fit:'contain', label:'Inspect',
      title:'Make the relevant cues visible',
      caption:'The legacy slide becomes a dedicated evidence frame—not a small image inside a lecture slide.',
      status:'refresh',
      note:'Use the original annotations to show how meaning was distributed across label, volume, concentration and prior knowledge.',
      delivery:'20:15–21:30.'
    },
    {
      id:'c20', type:'compare', section:'02 · Memory', theme:'paper', eyebrow:'Move state out of the head',
      title:'Externalize the calculation and next action',
      cards:[
        {title:'Memory carries it',body:'Calculate, retain the result, survive interruption and remember what comes next.'},
        {title:'The system carries it',body:'Compute visibly, persist state, name the next action and show who owns it.'}
      ],
      note:'Ask which information should be persistent, which should be computed, and which should be independently verified.',
      delivery:'21:30–22:45.'
    },
    {
      id:'c21', type:'metrics', section:'02 · Memory', theme:'paper', eyebrow:'3,232 clinicians · 50,027 clinician-days · 14 US hospitals',
      title:'Concurrent conversations change the work surface',
      metrics:[
        {value:'4+',label:'concurrent message conversations',detail:'compared with clinician-days without concurrent conversations'},
        {value:'+54.8',label:'EHR minutes associated',detail:'and 41.6 additional patient-chart switches'}
      ],
      source:'https://www.jmir.org/2025/1/e72768',
      sourceLabel:'Xia et al., JMIR observational cohort, 2025',
      caveat:'Attending and trainee physicians plus advanced practice providers; association, not evidence that messaging caused errors.',
      note:'The cohort did not include every profession in this classroom. Use the finding as a work-system example, not as a universal estimate.',
      delivery:'22:45–24:15.'
    },
    {
      id:'c22', type:'flow', section:'02 · Memory', eyebrow:'Therefore the system must…',
      title:'Let the work remember',
      nodes:[
        {kicker:'State',title:'Persist',body:'What has happened and what remains'},
        {kicker:'Intent',title:'Mark',body:'The next action, owner and deadline'},
        {kicker:'Return',title:'Resume',body:'Re-entry cues after interruption'},
        {kicker:'Escalation',title:'Recover',body:'What happens when the action is late or missed'}
      ],
      note:'Connect to charts, medication administration, therapy plans, referral queues and patient self-management.',
      delivery:'24:15–25:45.'
    },
    {
      id:'c23', type:'statement', section:'02 · Memory', theme:'red', eyebrow:'Variable capacity',
      title:'Fatigue is a managed hazard.',
      body:'If performance changes predictably with hours, recovery and workload, the control system cannot be “be more resilient.”',
      source:'https://www.hssib.org.uk/patient-safety-investigations/the-impact-of-staff-fatigue-on-patient-safety/investigation-report/',
      sourceLabel:'HSSIB investigation, 2025',
      caveat:'The report notes that the magnitude of fatigue-related harm is difficult to quantify.',
      note:'Replace the legacy alcohol-equivalence slogan with fatigue-risk management: rosters, rest, handoffs, escalation and learning systems.',
      delivery:'25:45–27:00.'
    },
    {
      id:'c24', type:'prompt', section:'02 · Memory', theme:'paper', eyebrow:'Individual → system',
      title:'What would still work at hour 12?',
      body:'Stress-test one process for interruption, fatigue and an incomplete handoff.',
      note:'Ask for one fast response. The “worst ordinary day” is a design condition, not an edge case.',
      delivery:'27:00–29:00.'
    },

    {
      id:'c25', type:'statement', section:'03 · Judgment', theme:'blue', eyebrow:'Mechanism three',
      title:'Expectation shapes judgment.',
      body:'Prior information changes what evidence is sought, weighted and challenged—whether it comes from a colleague, a chart or an algorithm.',
      note:'Use expectation as a mechanism. Avoid presenting named biases as root causes.',
      delivery:'29:00–30:00.'
    },
    {
      id:'c26', type:'prompt', section:'03 · Judgment', theme:'paper', eyebrow:'Commit before the machine',
      title:'What is your leading diagnosis?',
      body:'And what finding would make you change your mind?',
      note:'This is a generic clinical-vignette set-up. The teaching point is independent assessment before machine advice.',
      delivery:'30:00–31:00.'
    },
    {
      id:'c27', type:'statement', section:'03 · Judgment', theme:'gold', eyebrow:'Now the AI speaks',
      title:'“The most likely diagnosis is…”',
      body:'What changed in your search after you saw the answer?',
      note:'Ask students to notice their own search and confidence—not whether they “trust AI.”',
      delivery:'31:00–32:00.'
    },
    {
      id:'c28', type:'metrics', section:'03 · Judgment', theme:'paper', eyebrow:'457 clinicians · randomized vignettes',
      title:'Incorrect AI changed the team',
      metrics:[
        {value:'73.0%',label:'baseline diagnostic accuracy',detail:'across the study vignettes'},
        {value:'−11.3 pp',label:'with systematically biased AI',detail:'image explanations did not meaningfully rescue performance'}
      ],
      source:'https://jamanetwork.com/journals/jama/fullarticle/2812908',
      sourceLabel:'JAMA randomized clinical vignette study, 2023',
      caveat:'Vignette study; not patient-outcome evidence.',
      note:'The unit of analysis for teaching is the human–AI team. Avoid “AI is bad” or “clinicians are gullible.”',
      delivery:'32:00–34:00.'
    },
    {
      id:'c29', type:'statement', section:'03 · Judgment', theme:'red', eyebrow:'A non-result worth keeping',
      title:'An explanation did not reliably neutralize biased advice.',
      body:'More information is not necessarily a better collaboration workflow.',
      source:'https://jamanetwork.com/journals/jama/fullarticle/2812908',
      sourceLabel:'JAMA, 2023',
      note:'Keep the negative finding visible. The intervention must structure when judgments happen and how disagreements are handled.',
      delivery:'34:00–35:00.'
    },
    {
      id:'c30', type:'flow', section:'03 · Judgment', eyebrow:'Design the collaboration',
      title:'Sequence can protect independence',
      nodes:[
        {kicker:'Human',title:'Assess first',body:'Record leading hypothesis and disconfirming evidence'},
        {kicker:'Machine',title:'Reveal next',body:'Show advice, uncertainty and relevant evidence'},
        {kicker:'Team',title:'Compare',body:'Make agreement and disagreement explicit'},
        {kicker:'System',title:'Verify',body:'Escalate uncertainty and monitor outcomes'}
      ],
      note:'This is a design hypothesis, not a universally proven recipe. Invite students to identify where independence is practical or costly.',
      delivery:'35:00–37:00.'
    },
    {
      id:'c31', type:'compare', section:'03 · Judgment', theme:'paper', eyebrow:'Retire bias bingo',
      title:'Description is not explanation',
      cards:[
        {title:'“Confirmation bias”',body:'A label applied after the decision.'},
        {title:'Information order + workload + authority + uncertainty',body:'Conditions that can be redesigned and tested.'}
      ],
      note:'Do not ban cognitive-bias language. Put it in the right place: a pattern to investigate, not a root cause.',
      delivery:'37:00–38:30.'
    },
    {
      id:'c32a', type:'roles', section:'03 · Judgment', theme:'paper', eyebrow:'Eight groups of 5–6 · assign before starting',
      title:'Every person has a job.',
      columns:3,
      roles:[
        {title:'Case reader',body:'State the evidence and work conditions'},
        {title:'Detection lead',body:'Change the signal or discriminability'},
        {title:'Memory lead',body:'Remove a recall or interruption burden'},
        {title:'Challenge lead',body:'Create an independent check'},
        {title:'Recovery lead',body:'Catch and contain the miss'},
        {title:'Reporter',body:'Name the change, owner and test'}
      ],
      body:'Groups of five combine Case reader + Reporter. Specialty knowledge is not required.',
      note:'Assign roles aloud before revealing the design task. This prevents one confident discipline from doing the analysis for the table.',
      delivery:'38:30–39:15.'
    },
    {
      id:'c32', type:'prompt', section:'03 · Judgment', theme:'paper', eyebrow:'Groups of 5–6 · four minutes',
      title:'Redesign the penicillin search.',
      body:'Change one signal, one memory demand, one challenge point and one recovery mechanism.',
      note:'Return to the opening case. The six roles work in parallel, then the Reporter gives one sentence.',
      delivery:'39:15–44:30. Four minutes design, then a rapid harvest.'
    },
    {
      id:'c33', type:'steps', section:'Synthesis', theme:'paper', eyebrow:'A compact diagnostic',
      title:'Four questions after any use error',
      steps:[
        'What was made <strong>easy or hard to detect</strong>?',
        'What state lived only in <strong>memory</strong>?',
        'What expectation shaped <strong>judgment</strong>?',
        'Where could the system <strong>detect, own and recover</strong>?'
      ],
      note:'Have learners photograph or copy these four questions. They are the portable course artifact.',
      delivery:'44:30–46:00.'
    },
    {
      id:'c34', type:'flow', section:'Synthesis', eyebrow:'One miss · many design levers',
      title:'From mechanism to intervention',
      nodes:[
        {kicker:'Detect',title:'Signal',body:'Make the right thing conspicuous and distinguishable'},
        {kicker:'Remember',title:'State',body:'Externalize intent, owner, deadline and progress'},
        {kicker:'Challenge',title:'Sequence',body:'Protect independent assessment and surface disagreement'},
        {kicker:'Recover',title:'Contain',body:'Catch misses before they become harm'}
      ],
      note:'Tie each verb to a case from today. The action language matters more than the bias vocabulary.',
      delivery:'46:00–48:00.'
    },
    {
      id:'c35', type:'prompt', section:'Synthesis', theme:'paper', eyebrow:'Retrieval practice',
      title:'Given these conditions, the response was understandable. What should change?',
      body:'Say the sentence without excusing harm and without blaming the person.',
      note:'Invite two examples. Distinguish explanation from exoneration: accountability includes designing safer conditions.',
      delivery:'48:00–52:00.'
    },
    {
      id:'c36', type:'statement', section:'Close', theme:'blue', eyebrow:'The close',
      title:'What you notice is designed.',
      body:'So are the things you have to remember, the voices you can challenge—and the chances you get to recover.',
      note:'Slow down. This line integrates attention, memory, judgment and resilience.',
      delivery:'52:00–53:00.'
    },
    {
      id:'c37', type:'quote', section:'Close', eyebrow:'Human factors',
      title:'Humans are fallible. We will err.',
      htmlTitle:'Humans are fallible.<br><span>We will err.</span>',
      by:'The design question is what the system does with that reality.',
      note:'Preserve the signature closing premise, now earned by three mechanisms and four system responses.',
      delivery:'53:00–54:00. Leave up for questions and a six-minute buffer.'
    }
  ],
  originalMap: []
};
