window.LECTURE = {
  slug:'hqrs-service-design-2026',
  shortTitle:'Service Design',
  meta:{
    duration:'90 minutes',
    subtitle:'Human Factors in Health Care · Queen\'s University · 2026'
  },
  teachingPath:[
    {
      id:'s01',type:'title',section:'Opening',
      title:'Designing a Service',
      htmlTitle:'Design the <span class="accent">service</span>,<br>not the touchpoint.',
      subtitle:'HQRS 846 · Human Factors in Health Care · Queen\'s University · 2026',
      note:'Open with the thesis. The learner job is to expose and redesign the invisible coordination behind a care experience.',
      delivery:'0:00–0:45. No housekeeping.'
    },
    {
      id:'s02',type:'metrics',section:'Opening',theme:'paper',eyebrow:'Martha\'s Rule · September 2024 to April 2026',
      title:'A new route into the care system',
      metrics:[
        {value:'14,654',label:'calls',detail:'patients, families, carers and staff requesting review'},
        {value:'72%',label:'from families or carers',detail:'a new front door for concern and deterioration'}
      ],
      source:'https://www.england.nhs.uk/patient-safety/marthas-rule/',
      sourceLabel:'NHS England management information, accessed July 2026',
      caveat:'Programme management information; not a controlled causal evaluation.',
      note:'The numbers open a service-design question: what invisible system must exist behind a “call us” promise?',
      delivery:'0:45–2:00.'
    },
    {
      id:'s03',type:'metrics',section:'Opening',theme:'blue',eyebrow:'What happened after the call',
      title:'The service had to change care',
      metrics:[
        {value:'2,720',label:'treatment changes',detail:'including medication, investigations and procedures'},
        {value:'616',label:'transfers or escalations',detail:'to higher, specialist or enhanced levels of care'}
      ],
      source:'https://www.england.nhs.uk/patient-safety/marthas-rule/',
      sourceLabel:'NHS England, data through April 2026',
      caveat:'Reported programme data; implementation varies and full evaluation is ongoing.',
      note:'Do not equate every change with a saved life. The operational lesson is that a visible channel depends on a response system.',
      delivery:'2:00–3:15.'
    },
    {
      id:'s04',type:'statement',section:'Opening',theme:'gold',eyebrow:'The provocation',
      title:'A phone number is not a service.',
      body:'The service is awareness, trust, access, triage, authority, response capacity, records, follow-through and learning.',
      note:'Hard pivot from touchpoint to service ecosystem.',
      delivery:'3:15–4:00.'
    },
    {
      id:'s05',type:'flow',section:'Opening',eyebrow:'One visible action · many invisible commitments',
      title:'What the promise requires',
      nodes:[
        {kicker:'Notice',title:'Concern',body:'A patient, family member or staff member sees deterioration'},
        {kicker:'Access',title:'Escalate',body:'They know the route and feel safe using it'},
        {kicker:'Capacity',title:'Review',body:'A different team can respond with authority'},
        {kicker:'Continuity',title:'Act + learn',body:'Care changes, records update and the system follows through'}
      ],
      source:'https://www.england.nhs.uk/patient-safety/marthas-rule/',
      sourceLabel:'NHS England Martha\'s Rule core components',
      note:'Invite the room to name one backstage dependency per node.',
      delivery:'4:00–6:00.'
    },
    {
      id:'s06',type:'statement',section:'Opening',theme:'blue',eyebrow:'The learner transformation',
      title:'A service is a promise delivered across time and organizations.',
      body:'Your blueprint makes the promise, the hidden work, the ownership and the recovery path inspectable.',
      note:'This replaces “service design improves experiences” with an operationally testable definition.',
      delivery:'6:00–7:00.'
    },
    {
      id:'s07',type:'compare',section:'Opening',theme:'paper',eyebrow:'Do not confuse the levels',
      title:'Touchpoint → service',
      cards:[
        {title:'Touchpoint',body:'A poster, app, device, room, call or conversation.'},
        {title:'Service',body:'The coordinated system that reliably produces a useful outcome across those touchpoints.'}
      ],
      note:'Ask students to name a health-care “product” whose success depends on invisible services.',
      delivery:'7:00–8:30.'
    },
    {
      id:'s08',type:'statement',section:'Opening',theme:'red',eyebrow:'The coordination gap',
      title:'The patient sees one experience. The organization sees departments.',
      body:'Service design makes the gaps between those views visible.',
      note:'This is the bridge to blueprinting. Pause after “departments.”',
      delivery:'8:30–9:15.'
    },
    {
      id:'s09',type:'steps',section:'Opening',theme:'paper',eyebrow:'A health service must be more than seamless',
      title:'Acceptance criteria',
      steps:[
        '<strong>Safe and useful</strong> for the people served',
        '<strong>Workable</strong> for the people delivering it',
        '<strong>Equitable and accessible</strong> under different conditions',
        '<strong>Recoverable and adaptable</strong> when the happy path breaks'
      ],
      note:'Preserve the spirit of the legacy four Cs, but add safety, equity, workability and recovery.',
      delivery:'9:15–11:00.'
    },

    {
      id:'s10',type:'source',section:'01 · Blueprint',sourcePage:43,fit:'contain',label:'Provenance',
      title:'Shostack\'s service blueprint',
      caption:'The original blueprint joined customer action to visible and invisible operations.',
      status:'keep',
      note:'Use this as intellectual provenance, not as a legibility test. The next slides rebuild the grammar at projection scale.',
      delivery:'11:00–12:00.'
    },
    {
      id:'s11',type:'source',section:'01 · Blueprint',sourcePage:86,fit:'contain',label:'Legacy whole',
      title:'What is service design?',
      caption:'Observe the complete original model once; then rebuild each layer at full scale.',
      status:'refresh',
      note:'The original is a good whole-system composition but too small for the back row. Do not teach its details from this frame.',
      delivery:'12:00–13:00.'
    },
    {
      id:'s12',type:'blueprint',section:'01 · Blueprint',eyebrow:'Layer 1 · The person\'s goal over time',
      title:'Experience and journey',
      rows:[
        {label:'Experience',cells:['Worried','Seeks help','Waits','Receives response','Knows what happens next']}
      ],
      note:'Begin with the goal and lived experience, not the organization\'s process.',
      delivery:'13:00–14:15.'
    },
    {
      id:'s13',type:'blueprint',section:'01 · Blueprint',eyebrow:'Layer 2 · What people can see',
      title:'Frontstage',
      rows:[
        {label:'Experience',cells:['Worried','Seeks help','Waits','Receives response','Knows what happens next']},
        {label:'Frontstage',cells:['Poster / invitation','Call answered','Concern acknowledged','Rapid review','Plan explained']}
      ],
      note:'Frontstage includes people, not only interfaces. Ask what makes the encounter trustworthy.',
      delivery:'14:15–15:30.'
    },
    {
      id:'s14',type:'blueprint',section:'01 · Blueprint',eyebrow:'Layer 3 · Information is a service material',
      title:'Technology and information',
      rows:[
        {label:'Experience',cells:['Worried','Seeks help','Waits','Receives response','Knows what happens next']},
        {label:'Frontstage',cells:['Poster / invitation','Call answered','Concern acknowledged','Rapid review','Plan explained']},
        {label:'Tech + info',cells:['Accessible contact','Identity + location','Concern captured','Record available','Decision documented']}
      ],
      note:'Make information movement explicit: who can see what, when, and in a form they can act on?',
      delivery:'15:30–17:00.'
    },
    {
      id:'s15',type:'blueprint',section:'01 · Blueprint',eyebrow:'Layer 4 · The invisible work',
      title:'Backstage',
      rows:[
        {label:'Experience',cells:['Worried','Seeks help','Waits','Receives response','Knows what happens next']},
        {label:'Frontstage',cells:['Poster / invitation','Call answered','Concern acknowledged','Rapid review','Plan explained']},
        {label:'Tech + info',cells:['Accessible contact','Identity + location','Concern captured','Record available','Decision documented']},
        {label:'Backstage',cells:['Awareness campaign','Roster + triage','Team mobilized','Authority to act','Primary team handoff']}
      ],
      note:'Backstage is where coordination, authority and queueing become visible.',
      delivery:'17:00–18:30.'
    },
    {
      id:'s16',type:'blueprint',section:'01 · Blueprint',eyebrow:'Layer 5 · Conditions for delivery',
      title:'Support and governance',
      rows:[
        {label:'Experience',cells:['Worried','Seeks help','Waits','Receives response','Knows what happens next']},
        {label:'Frontstage',cells:['Poster / invitation','Call answered','Concern acknowledged','Rapid review','Plan explained']},
        {label:'Tech + info',cells:['Accessible contact','Identity + location','Concern captured','Record available','Decision documented']},
        {label:'Backstage',cells:['Awareness campaign','Roster + triage','Team mobilized','Authority to act','Primary team handoff']},
        {label:'Support',cells:['Training + languages','Telephony','Staffing + capacity','Policy + escalation','Audit + learning']}
      ],
      note:'Expand support beyond IT: policy, finance, workforce, training, procurement and partner organizations.',
      delivery:'18:30–20:00.'
    },
    {
      id:'s17',type:'blueprint',section:'01 · Blueprint',eyebrow:'Layer 6 · The real service appears under strain',
      title:'Failure, recovery and measurement',
      rows:[
        {label:'Experience',cells:['Worried','Seeks help','Waits','Receives response','Knows what happens next']},
        {label:'Frontstage',cells:['Poster / invitation','Call answered','Concern acknowledged','Rapid review','Plan explained']},
        {label:'Tech + info',cells:['Accessible contact','Identity + location','Concern captured','Record available','Decision documented']},
        {label:'Backstage',cells:['Awareness campaign','Roster + triage','Team mobilized','Authority to act','Primary team handoff']},
        {label:'Support',cells:['Training + languages','Telephony','Staffing + capacity','Policy + escalation','Audit + learning']},
        {label:'Recover + measure',cells:['Who cannot access?','What if unanswered?','Who owns delay?','What if teams disagree?','Did concern close?']}
      ],
      note:'The happy path is the brochure. The exception path is the service.',
      delivery:'20:00–22:00.'
    },
    {
      id:'s18',type:'statement',section:'01 · Blueprint',theme:'gold',eyebrow:'A stronger definition',
      title:'A blueprint is an operational hypothesis.',
      body:'It predicts how value, information, authority and work will move. Observation and operational data must test it.',
      note:'Move blueprinting from illustration to testable design claim.',
      delivery:'22:00–23:00.'
    },
    {
      id:'s19',type:'compare',section:'01 · Blueprint',theme:'paper',eyebrow:'Related, not interchangeable',
      title:'Journey map ≠ service blueprint',
      cards:[
        {title:'Journey map',body:'Describes goals, actions, experience and pain points over time.'},
        {title:'Service blueprint',body:'Commits people, information, capacity, ownership and recovery behind that experience.'}
      ],
      note:'This distinction directly serves the assessed assignment.',
      delivery:'23:00–24:30.'
    },
    {
      id:'s20',type:'steps',section:'01 · Blueprint',theme:'paper',eyebrow:'Minimum viable future state',
      title:'Every change needs five things',
      steps:[
        'A named <strong>owner</strong>',
        'A visible <strong>state</strong> and information handoff',
        'A required <strong>capacity or implementation condition</strong>',
        'An <strong>exception and recovery</strong> path',
        'An outcome plus a <strong>balancing measure</strong>'
      ],
      note:'Give students the grading-quality standard before the case.',
      delivery:'24:30–26:30.'
    },
    {
      id:'s21',type:'prompt',section:'01 · Blueprint',theme:'paper',eyebrow:'Pairs · two minutes',
      title:'Map one failed handoff from practice.',
      body:'What did the person experience? What invisible work or ownership failed?',
      note:'Pairs. Take one report from a non-physician discipline. The purpose is transfer, not completeness.',
      delivery:'26:30–30:00.'
    },

    {
      id:'s22',type:'source',section:'02 · Medly',sourcePage:125,fit:'contain',label:'Visible touchpoint',
      title:'The Medly mobile app',
      caption:'A carefully designed interface is necessary—and still only one touchpoint.',
      status:'keep',
      note:'Let the app occupy the whole field. Ask what must happen before and after each screen.',
      delivery:'30:00–31:00.'
    },
    {
      id:'s23',type:'source',section:'02 · Medly',sourcePage:114,fit:'contain',label:'Physical touchpoints',
      title:'Monitoring at home',
      caption:'Phone, scale, blood-pressure cuff, onboarding materials and support all participate.',
      status:'keep',
      note:'Reveal the kit as a service ecology rather than a product bundle.',
      delivery:'31:00–32:00.'
    },
    {
      id:'s24',type:'statement',section:'02 · Medly',theme:'gold',eyebrow:'The pivot',
      title:'These are touchpoints. They are not the service.',
      body:'The service begins when measurements trigger a reliable chain of interpretation, response and follow-through.',
      note:'Hard cut from devices to coordinated work.',
      delivery:'32:00–32:45.'
    },
    {
      id:'s25',type:'flow',section:'02 · Medly',theme:'paper',eyebrow:'Rules-based decision support',
      title:'What the algorithm connected',
      nodes:[
        {kicker:'Home',title:'Inputs',body:'Weight, blood pressure, heart rate and symptoms'},
        {kicker:'Rules',title:'Interpret',body:'Compare readings with individualized thresholds'},
        {kicker:'Patient',title:'Respond',body:'Display immediate self-care feedback'},
        {kicker:'Clinic',title:'Alert',body:'Send deterioration signals to the care team'}
      ],
      source:'https://www.jmir.org/2020/2/e16538/',
      sourceLabel:'Ware et al., pragmatic pretest-posttest study, 2020',
      caveat:'This describes the mechanism; it does not by itself establish effectiveness.',
      note:'The legacy source page remains in the archive, but its unsupported testimonial outcome language is not projected in the live path.',
      delivery:'32:45–33:45.'
    },
    {
      id:'s26',type:'flow',section:'02 · Medly',eyebrow:'The service chain',
      title:'A measurement becomes care',
      nodes:[
        {kicker:'Home',title:'Measure',body:'Patient performs and transmits daily readings'},
        {kicker:'System',title:'Interpret',body:'Rules classify state and provide feedback'},
        {kicker:'Team',title:'Review',body:'Clinician sees trends, alerts and context'},
        {kicker:'Care',title:'Respond',body:'Treatment, coaching, escalation or reassurance follows'}
      ],
      note:'Ask who owns non-adherence, missing data, an alert after hours, and an unreachable patient.',
      delivery:'33:45–35:30.'
    },
    {
      id:'s27',type:'source',section:'02 · Medly',sourcePage:127,fit:'contain',label:'Patient journey',
      title:'Onboarding, ongoing use and offboarding',
      caption:'The journey exposes transitions that an app screen cannot show.',
      status:'keep',
      note:'Confirm that the persona and any health details are suitable for classroom and public reuse before publication.',
      delivery:'35:30–37:00.'
    },
    {
      id:'s28',type:'source',section:'02 · Medly',sourcePage:131,fit:'contain',label:'Blueprint',
      title:'The whole service at once',
      caption:'Patient action, touchpoints, clinical work, support and evidence become one inspectable system.',
      status:'keep',
      note:'Full-field treatment. Zoom orally into only two or three columns; do not ask the back row to read the whole blueprint.',
      delivery:'37:00–38:30.'
    },
    {
      id:'s29',type:'prompt',section:'02 · Medly',theme:'paper',eyebrow:'Diagnose the service',
      title:'Where can Medly fail without the app failing?',
      body:'Choose one: onboarding, measurement, alert review, clinical response, caregiver work, or offboarding.',
      note:'Take three fast answers. This prevents the case from becoming a success-story showcase.',
      delivery:'38:30–41:00.'
    },
    {
      id:'s30',type:'statement',section:'02 · Medly',theme:'blue',eyebrow:'The contemporary extension',
      title:'When home becomes the ward, the household becomes part of the workforce.',
      body:'Space, devices, connectivity, language, caregiver time, clinical capacity and escalation back to hospital are service conditions.',
      note:'Make patient and caregiver labour visible. Convenience often transfers work.',
      delivery:'41:00–42:15.'
    },
    {
      id:'s31',type:'steps',section:'02 · Medly',theme:'paper',eyebrow:'Virtual wards · implementation test',
      title:'A scalable service asks who can participate',
      steps:[
        'Compare reach with the <strong>local population</strong>',
        'Offer <strong>non-digital alternatives</strong> and accessible communication',
        'Track accepted and rejected <strong>referrals</strong>',
        'Measure staffing, occupancy, throughput, outcomes and <strong>equity</strong>'
      ],
      source:'https://www.england.nhs.uk/long-read/virtual-wards-operational-framework/',
      sourceLabel:'NHS England virtual wards operational framework, updated 2025',
      caveat:'Operational guidance, not outcome evidence; virtual-ward models vary.',
      note:'Use the framework as a service-quality checklist, not as proof that virtual care works everywhere.',
      delivery:'42:15–44:00.'
    },
    {
      id:'s32',type:'statement',section:'02 · Medly',theme:'gold',eyebrow:'A useful 2026 data question',
      title:'Can the service detect when home is no longer safe?',
      body:'Hospital-at-home datasets now explicitly capture escalation back to hospital and unanticipated mortality.',
      source:'https://www.cms.gov/newsroom/fact-sheets/acute-hospital-care-home-data-release-fact-sheet-0',
      sourceLabel:'CMS Acute Hospital Care at Home data release, 17 Mar 2026',
      caveat:'Programme data do not make heterogeneous home-hospital models equivalent.',
      note:'The design object is not only admission to home care—it is safe escalation out of it.',
      delivery:'44:00–45:15.'
    },

    {
      id:'s33',type:'compare',section:'03 · Implementation',theme:'paper',eyebrow:'A blueprint is not implementation',
      title:'Intervention → conditions for use',
      cards:[
        {title:'The service intervention',body:'What the new experience and operations are intended to do.'},
        {title:'Implementation strategies',body:'Training, staffing, governance, incentives, adaptation, feedback and sustainment.'}
      ],
      note:'This is the missing implementation-science bridge in the legacy deck.',
      delivery:'45:15–47:00.'
    },
    {
      id:'s34',type:'flow',section:'03 · Implementation',eyebrow:'Will it survive Monday morning?',
      title:'A light RE-AIM check',
      nodes:[
        {kicker:'Reach',title:'Who enters?',body:'And who does not?'},
        {kicker:'Adoption',title:'Who delivers?',body:'Across teams and settings?'},
        {kicker:'Implementation',title:'What changes?',body:'Fidelity, adaptation, cost and burden'},
        {kicker:'Maintenance',title:'What lasts?',body:'Feedback, sustainment and de-implementation'}
      ],
      source:'https://re-aim.org/learn/what-is-re-aim/',
      sourceLabel:'RE-AIM official overview',
      note:'Do not turn this into a framework lecture. Use four questions as a realism test for the blueprint.',
      delivery:'47:00–49:00.'
    },
    {
      id:'s35',type:'compare',section:'03 · Implementation',theme:'paper',eyebrow:'Co-design and power',
      title:'Participation is not shared authority',
      cards:[
        {title:'Consultation',body:'People react to a frame, options and decisions others already set.'},
        {title:'Co-design',body:'People share framing, decision power, recognition, access and evaluation.'}
      ],
      source:'https://implementationscience.biomedcentral.com/counter/pdf/10.1186/s13012-024-01394-4.pdf',
      sourceLabel:'Implementation Science co-design evaluation framework, 2024',
      caveat:'Framework synthesis for health research co-design; definitions vary; apply with local community governance.',
      note:'Ask who is paid, who can veto, whose language is used and who sees the results.',
      delivery:'49:00–51:00.'
    },
    {
      id:'s36',type:'statement',section:'03 · Implementation',theme:'red',eyebrow:'Work transfer',
      title:'Every convenience transfers work.',
      body:'Ask who now performs the cognitive, emotional, administrative, travel or data work—and whether they can refuse it.',
      note:'This is the equity and workload lens the legacy “seamless experience” language lacks.',
      delivery:'51:00–52:00.'
    },
    {
      id:'s37',type:'prompt',section:'03 · Implementation',theme:'paper',eyebrow:'Two-minute audit',
      title:'Who did more work in the future state?',
      body:'Patient? Family? Nurse? Physician? Allied health? Administrator? Vendor? Someone outside the map?',
      note:'Have tables identify one transferred burden and one balancing measure.',
      delivery:'52:00–55:00.'
    },

    {
      id:'s38',type:'statement',section:'04 · Workshop bridge',theme:'blue',eyebrow:'A service under strain',
      title:'Corridor care is not an ED journey-map problem.',
      body:'It is a whole-system service failure expressed in a space not designed, staffed or equipped for care.',
      source:'https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/',
      sourceLabel:'HSSIB, Patient care in temporary care environments, Jan 2026',
      caveat:'Short-scope multi-site observations; findings are not prevalence estimates.',
      note:'This is the workshop transfer case. Keep the systemic framing explicit.',
      delivery:'55:00–56:30.'
    },
    {
      id:'s39',type:'compare',section:'04 · Workshop bridge',theme:'paper',eyebrow:'The environment changes the service',
      title:'Designed care space → temporary care environment',
      cards:[
        {title:'Designed space',body:'Privacy, observation, equipment, infection control, records, staff access and escalation are anticipated.'},
        {title:'Temporary space',body:'Corridors, waiting rooms or ambulances inherit care without the same built-in supports.'}
      ],
      source:'https://www.hssib.org.uk/patient-safety-investigations/patient-care-in-temporary-care-environments/investigation-report/',
      sourceLabel:'HSSIB, 2026',
      note:'Ask which service layers move with the patient and which remain tied to the intended room.',
      delivery:'56:30–58:30.'
    },
    {
      id:'s40',type:'flow',section:'04 · Workshop bridge',eyebrow:'Follow one patient through the temporary service',
      title:'Where does continuity break?',
      nodes:[
        {kicker:'Arrival',title:'Place',body:'No designed bed space or privacy'},
        {kicker:'Assessment',title:'Observe',body:'Monitoring, conversation and documentation compete'},
        {kicker:'Treatment',title:'Deliver',body:'Equipment, medication and staff travel farther'},
        {kicker:'Transition',title:'Hand off',body:'Ownership, location and next action can become ambiguous'}
      ],
      note:'This four-state skeleton is intentionally incomplete. The eight groups will add the service layers.',
      delivery:'58:30–60:00.'
    },
    {
      id:'s41',type:'blueprint',section:'04 · Workshop bridge',eyebrow:'Current state · deliberately uncomfortable',
      title:'The workshop canvas',
      rows:[
        {label:'Experience',cells:['Arrives','Waits in corridor','Is assessed','Receives care','Moves or leaves']},
        {label:'Frontstage',cells:['Registration','Updates?','Conversation','Treatment','Handoff']},
        {label:'Tech + info',cells:['Location','Queue state','Record access','Orders / results','Next owner']},
        {label:'Backstage',cells:['Demand + capacity','Bed management','Staff allocation','Equipment flow','Discharge / admission']},
        {label:'Support',cells:['Space + privacy','Infection control','Interpreting','Portering','Governance']},
        {label:'Recover + measure',cells:['Who is missed?','Who detects delay?','Who owns risk?','What can fail?','How do we know?']}
      ],
      note:'Do not solve the canvas in the lecture. Use it to set up the 90-minute workshop that follows.',
      delivery:'60:00–62:00.'
    },
    {
      id:'s42a',type:'roles',section:'04 · Workshop bridge',theme:'paper',eyebrow:'Every table · assign before starting',
      title:'Every person has a job.',
      columns:3,
      roles:[
        {title:'Experience voice',body:'Protect the patient or family goal'},
        {title:'Frontstage mapper',body:'Map people and conversations'},
        {title:'Backstage mapper',body:'Map work, capacity and partners'},
        {title:'Equity challenger',body:'Test access, burden and power'},
        {title:'Recovery designer',body:'Build exceptions and escalation'},
        {title:'Scribe + reporter',body:'Name owner, measure and pitch'}
      ],
      body:'Groups of five combine Experience voice + Scribe/Reporter. Mix professions at every table.',
      note:'These are within-table roles. Assign them before assigning each table its distinct blueprint lane.',
      delivery:'62:00–63:00.'
    },
    {
      id:'s42',type:'roles',section:'04 · Workshop bridge',theme:'paper',eyebrow:'Eight groups · one shared service',
      title:'Each table owns one layer',
      columns:4,
      roles:[
        {title:'01 · Goal + journey',body:'Need, action, wait, handoff'},
        {title:'02 · Frontstage',body:'People, talk, privacy, trust'},
        {title:'03 · Tech + information',body:'State, access, visibility, downtime'},
        {title:'04 · Backstage',body:'Workforce, partners, support work'},
        {title:'05 · Capacity + queues',body:'Demand, variation, space, flow'},
        {title:'06 · Equity + burden',body:'Who is excluded or does more work?'},
        {title:'07 · Exception + recovery',body:'Detect, escalate, contain, learn'},
        {title:'08 · Ownership + measures',body:'Owner, implementation, outcomes'}
      ],
      note:'Give each group one distinct lane. The eight outputs are combined into the shared blueprint rather than producing eight duplicate maps.',
      delivery:'63:00–64:00.'
    },
    {
      id:'s43',type:'statement',section:'04 · Workshop bridge',theme:'gold',eyebrow:'Failure injects',
      title:'Now make the conditions difficult.',
      body:'02:00. Interpreter unavailable. EHR outage. Staffing shortfall. Patient cannot use the digital channel.',
      note:'The exception path is where the real service becomes visible. Use these injects during the workshop, not all at once.',
      delivery:'64:00–65:00.'
    },
    {
      id:'s44',type:'steps',section:'04 · Workshop bridge',theme:'paper',eyebrow:'Required workshop output',
      title:'A future state earns its place',
      steps:[
        'One current-state <strong>failure</strong>',
        'One future-state <strong>change across at least two lanes</strong>',
        'Its owner and <strong>implementation condition</strong>',
        'One outcome, one staff/workload balancing measure and one <strong>recovery mechanism</strong>'
      ],
      note:'Bridge explicitly to the 35% service-blueprint assignment and its narrative.',
      delivery:'65:00–67:00.'
    },
    {
      id:'s45',type:'prompt',section:'Synthesis',theme:'paper',eyebrow:'Retrieval practice',
      title:'What is invisible—but accountable—in this service?',
      body:'Name the owner, information, capacity, exception and measure the journey alone would miss.',
      note:'Take one answer from each side of the room. Use this as the final comprehension check.',
      delivery:'67:00–71:00.'
    },
    {
      id:'s46',type:'statement',section:'Close',theme:'blue',eyebrow:'The close',
      title:'A service is a promise the system keeps—especially when conditions are difficult.',
      body:'If the patient or family must coordinate it, the service is unfinished.',
      note:'Close on accountability and recovery. Leave the remaining time for discussion and transition to workshop.',
      delivery:'71:00–72:00. Eighteen-minute buffer for discussion, examples and transition.'
    }
  ],
  originalMap:[]
};
