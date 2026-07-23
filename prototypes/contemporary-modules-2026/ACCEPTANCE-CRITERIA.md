# Contemporary module library: acceptance criteria

Status: release gate passed 19 July 2026
Date established: 19 July 2026
Scope: eight standalone HQRS 846 teaching modules, ten slides each

`Built is not the same as ready.` A module passes only when the claim, teaching move, image, projection experience, presenter support, and reuse boundary all work together.

## Release rule

- **P0:** unsafe, materially false, fabricated, privacy-breaching, broken, or unusable. Zero allowed.
- **P1:** misleading evidence boundary, unreadable required content, missing source, broken interaction, or non-portable asset. Zero allowed.
- **P2:** noticeable quality defect that weakens teaching but has a safe workaround. Maximum two across the entire library, each documented.
- Every automated gate must pass.
- Every module must pass a full-size visual review and an editorial review.
- A module that fails one mandatory criterion remains `HOLD`, even if its overall score is high.

## A. Curriculum and teaching fit

Each module must:

1. State one audience contract and one sentence of argument.
2. Contain exactly ten slides and fit an eight to twelve minute teaching window.
3. Give every slide one primary job and one natural presenter move.
4. Move through observation, verified facts, explanation, limitation, transfer, and action.
5. Return explicitly to `use error, not user error` or an equivalent systems principle.
6. Show people as participants in adaptation, detection, recovery, and responsibility, not merely as weak links.
7. End with a reusable question, capability, design test, or decision.
8. Remain understandable when removed from HQRS and used in another presentation.

Mandatory evidence: module storyboard, presenter guide, and timed rehearsal estimate.

## B. Evidence and claim discipline

Each factual claim must:

1. Trace to a named primary, peer-reviewed, regulator, government, or official investigation source.
2. Preserve the source's population, setting, denominator, date, and status where material.
3. Separate event facts, measured evidence, author interpretation, teaching inference, and design proposal.
4. Keep association separate from causation and recommendation separate from implementation.
5. Preserve null findings, uncertainty, incomplete records, and limits of generalization.
6. Avoid invented timelines, interfaces, records, quotes, metrics, mechanisms, or outcomes.
7. Use the exact case classification supported by the source, including incident, near miss, reported harm, or no reported harm.
8. Display a source link on every slide carrying a case fact, number, quotation, or source artifact.

Mandatory evidence: per-module claim matrix and source map. Every live URL must resolve or be documented as archived.

## C. Image 2 and visual quality

Each module must:

1. Include at least three distinct high-quality original Image 2 assets.
2. Use generated imagery on at least three image-led slide states, with at least one image-led moment in every major movement.
3. Include at least one authentic artifact or source figure when the evidence provides one.
4. Let images own the field or function as a deliberate object study. Small decorative thumbnails do not count.
5. Avoid more than three consecutive text, card, or diagram slides unless an evidence sequence requires it.
6. Match Cafazzo's established grammar: documentary scenes, isolated objects, hard cuts, matched reveals, natural colour, restrained annotation, and dry visual intelligence.
7. Reject stock-photo posing, heroic clinicians, spectacle, cinematic distress, malformed anatomy, implausible equipment, decorative clutter, fabricated readable records, and embedded explanatory text.
8. Preserve negative space for native slide copy and keep exact claims, labels, values, and citations outside the generated bitmap.
9. Label every generated image visibly as an original generated teaching image and state when it is hypothetical or conceptual.
10. Record the prompt, model path, creation date, intended crop, truth status, and publication boundary.

Mandatory evidence: visual asset ledger, prompt record, full-size image inspection, and final-slide inspection.

## D. Projection and stagecraft

At 1600 by 900, each module must:

1. Keep primary headlines at 60 px or larger.
2. Keep required teaching copy at 30 px or larger.
3. Keep labels and source rails at 20 px or larger.
4. Use roughly 5 to 7 percent safe margins, except deliberate full-bleed imagery.
5. Give required artifacts enough canvas for a student at the back of the room to inspect them.
6. Split content before shrinking it.
7. Use direct, conversational headlines that sound natural in Cafazzo's voice.
8. Avoid trailer language, generic inspiration, repeated suspense, and text that merely announces the next slide.
9. Use hard cuts by default and reveals only when sequence improves understanding.
10. Show no clipped, colliding, overflowing, or illegibly low-contrast content.

Mandatory evidence: all-slide contact sheet plus full-size inspection of every generated-image slide, every source-artifact slide, and the densest explanatory slide.

## E. Interaction and accessibility

Every module must support:

1. Arrow keys, Page Up, Page Down, Space, Home, and End.
2. Click navigation without stealing clicks from links or controls.
3. Deep links to every slide.
4. Notes, outline, sources, help, and full-screen controls.
5. Escape to close every overlay.
6. Visible focus treatment and keyboard-operable controls.
7. Useful alternative text for meaningful images and empty alt text for decorative brand marks.
8. Reduced-motion behaviour that removes non-essential transitions.
9. A logical document outline and no duplicate IDs.
10. No console errors during navigation or overlay tests.

## F. Technical integrity

The automated browser run must confirm:

1. Eight modules load successfully.
2. Exactly eighty slides render.
3. Every expected deep link opens the correct slide.
4. Zero broken images, stylesheets, scripts, or links to local-only absolute paths.
5. Zero slide overflow or viewport clipping.
6. Zero required teaching elements below the projection threshold.
7. Zero duplicate slide IDs.
8. Notes, outline, sources, help, and full-screen controls respond correctly.
9. Zero visible em dash characters.
10. The library index contains all eight modules and their current acceptance status.

Mandatory evidence: machine-readable `qa.json`, console log, renders, and contact sheets.

## G. Reuse and portability

Each module must provide:

1. Editable HTML and JavaScript content.
2. A self-contained module entry point with relative asset paths.
3. A concise presenter guide with timings, questions, expected responses, transitions, and caveats.
4. A source and claim map that remains useful when slides are copied elsewhere.
5. A visual asset ledger and faithful Image 2 prompt record.
6. A section stating what can be shortened, what must remain together, and what should never be separated from its evidence boundary.
7. No dependency on the private original lecture deck at presentation time.
8. A clear classroom versus public-publication boundary.

## H. Final editorial panel

The completed library receives four independent readings:

1. **Human-factors lens:** Does the module widen the system without erasing responsibility?
2. **Evidence lens:** Does any polished slide overclaim beyond its source?
3. **Didactic lens:** Can a mixed graduate cohort follow, discuss, and transfer the lesson?
4. **Stagecraft lens:** Does it sound and look like Cafazzo rather than a generic corporate deck?

The panel reports P0, P1, and P2 findings. The final acceptance record names every fixed issue and every intentionally retained limitation.

## Final acceptance statement

A module is `READY` only when:

- all mandatory criteria pass;
- P0 and P1 findings equal zero;
- automated QA reports `passing: true`;
- every slide has been rendered;
- every image-led and evidence-led slide has been visually inspected full-size;
- the source map and presenter guide are complete; and
- the final editorial panel agrees that the module teaches a systems lesson without fabricating certainty.
