#!/usr/bin/env python3
"""Build complete legacy-slide inventories for the two 2026 Altitude Blue decks."""

from __future__ import annotations

import json
import re
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
COURSE = ROOT.parent


def clean_lines(text: str) -> list[str]:
    lines = []
    for raw in text.splitlines():
        line = re.sub(r"\s+", " ", raw).strip()
        if not line or line.isdigit() or len(line) < 2:
            continue
        lines.append(line)
    return lines


def extracted_title(text: str, fallback: str) -> tuple[str, str]:
    lines = clean_lines(text)
    if not lines:
        return fallback, ""
    title = lines[0]
    if len(title) < 26 and len(lines) > 1 and len(title) + len(lines[1]) < 92:
        title = f"{title} — {lines[1]}"
    return title[:120], " ".join(lines)[:900]


def range_value(page: int, ranges: list[tuple[range, str]], default: str) -> str:
    for pages, value in ranges:
        if page in pages:
            return value
    return default


COGNITION_TITLES = {
    1:"Cognition, Human Performance and Behaviour",
    2:"Oscars: presenters and producers on stage",
    3:"The Best Picture envelope reads Moonlight",
    4:"The Best Actress envelope reads Emma Stone — La La Land",
    5:"Best Actress and Best Picture envelope comparison",
    6:"The correct Moonlight envelope",
    7:"A redesigned Best Picture envelope",
    8:"Backstage recovery after the wrong announcement",
    9:"Social post from the backstage confusion",
    10:"Oscars presenters with duplicate envelopes",
    11:"Human limitations: attention, fatigue, cognitive biases and memory",
    12:"Change blindness — legacy definition",
    13:"Door-swap demonstration still",
    14:"Door-swap field experiment claim",
    15:"Palm Beach butterfly ballot",
    16:"Butterfly ballot redesign",
    17:"Alternative ballot layout",
    18:"Public washroom urinals",
    19:"Urinal without the fly cue",
    20:"Urinal fly cue",
    21:"Nudge book cover",
    22:"Nudge — publication date",
    23:"Nudge excerpt on the urinal fly",
    24:"Nudge excerpt and provenance",
    25:"Article questioning the urinal-fly evidence",
    26:"Urinal-fly article excerpt",
    27:"Definition of a nudge",
    28:"Long-form source excerpt on behavioural design",
    29:"Source excerpt and The Human Factor",
    30:"The Human Factor — publication date",
    31:"The Human Factor — additional publication plate",
    32:"Gerd Sweets paper on direct perception and action",
    33:"Industrial-design example: aiming with a urinal fly",
    34:"B-17 landing-gear and flap control confusion",
    35:"Chest CT search task",
    36:"Inserted gorilla revealed on chest CT",
    37:"Basketball selective-attention instructions",
    38:"Basketball video still",
    39:"How many passes?",
    40:"Anything else?",
    41:"Basketball gorilla reveal",
    42:"Conspicuity: sensory and cognitive",
    43:"Change blindness threshold",
    44:"Looked but did not see — image A",
    45:"Looked but did not see — image B",
    46:"Flicker paradigm — image A",
    47:"Flicker paradigm — image B",
    48:"Flicker paradigm — aircraft change",
    49:"Stroop test",
    50:"Availability heuristic",
    51:"Low-prevalence search in cervical-cancer screening",
    52:"Memory — legacy capacity claim",
    53:"Retention interval and recall chart",
    54:"Framing effect",
    55:"Confirmation bias",
    56:"In-group bias",
    57:"Posterior probability bias — legacy terminology",
    58:"Attentional narrowing",
    59:"Cognitive limits: chest CT",
    60:"Media coverage of the radiology gorilla study",
    61:"Fluorouracil label artifact",
    62:"Attentional narrowing — clinical illustration",
    63:"Alertness, fatigue and stress curve",
    64:"Conspicuity on the fluorouracil label",
    65:"Confirmation-bias overlay on the label",
    66:"Availability-bias clinical example",
    67:"Framing exercise — avian flu scenario",
    68:"Change blindness — duplicate threshold",
    69:"Looked but did not see — duplicate image A",
    70:"Looked but did not see — duplicate image B",
    71:"Flicker paradigm — duplicate image A",
    72:"Flicker paradigm — duplicate image B",
    73:"Flicker paradigm — duplicate aircraft change",
    74:"Human Factors Design Process toolbox",
    75:"Hospital observation-walk video still",
    76:"Humans are fallible. We will err.",
    77:"Cognition, Human Performance and Behaviour — bookend",
}


def cognition_section(page: int) -> str:
    return range_value(page, [
        (range(1, 11), "Opening attribution story"),
        (range(11, 18), "Human limitations and change blindness"),
        (range(18, 34), "Nudges, provenance and behavioural design"),
        (range(34, 43), "Selective attention and conspicuity"),
        (range(43, 50), "Change detection demonstrations"),
        (range(50, 59), "Memory and judgment patterns"),
        (range(59, 74), "Clinical examples and duplicated material"),
        (range(74, 78), "Toolbox and close"),
    ], "Cognition archive")


def cognition_status(page: int) -> str:
    if page in {1, 35, 36, 51, 61, 64, 65, 74, 75}:
        return "keep"
    if page in {11, 12, 14, 34, 42, 52, 53, 54, 55, 58, 63, 67, 76}:
        return "refresh"
    if 2 <= page <= 10 or 15 <= page <= 20:
        return "refresh"
    return "park"


SERVICE_TITLES = {
    1:"Designing a Service",
    2:"Why do good products fail?",
    3:"You are not creating a product. You are creating an experience.",
    4:"Product",
    5:"Herman Miller Eames chair",
    6:"Typical parking signs",
    7:"Brooklyn parking signs",
    8:"Target ClearRx bottles",
    9:"Sephora shopping basket",
    10:"Change management",
    11:"Change management and systems engineering",
    12:"Change management, systems engineering and service design",
    13:"What is service design?",
    14:"Legacy service-design definition",
    15:"Service blueprint overview",
    16:"How does service design help a business compete?",
    17:"Retail service ecology",
    18:"Convergence triad — product firms become service ecosystems",
    19:"Product and service spectrum",
    20:"Connected lightbulb — product to service",
    21:"Connected lightbulb and home ecosystem",
    22:"Convergence triad — connected products",
    23:"Product-to-service bridge",
    24:"Connected notebook and digital service",
    25:"Convergence triad — customer environment",
    26:"Apple mark",
    27:"Apple market capitalization — 2001",
    28:"Apple market capitalization — 2001 to 2022",
    29:"Steve Jobs at Apple — 2001",
    30:"Apple product packaging",
    31:"Apple product ecosystem",
    32:"Apple Store",
    33:"Apple Genius Bar",
    34:"Health app as service",
    35:"Tesla vehicle range",
    36:"Tesla charging touchpoint",
    37:"Tesla charging network — North America",
    38:"Tesla charging network — Europe",
    39:"Tesla charging service",
    40:"Human-Tech Ladder",
    41:"Roots of service design map",
    42:"Shostack and the roots of service design",
    43:"Original service blueprint",
    44:"Clinic room",
    45:"Specimen container",
    46:"Laboratory form",
    47:"Tuesday 8:25 a.m. — clinic arrival",
    48:"Clinic waiting room",
    49:"Product or service game",
    50:"Razor as product",
    51:"Razor plus service",
    52:"Dollar Shave Club",
    53:"Subscription selection",
    54:"Subscription delivery",
    55:"Smart car as product",
    56:"Smart car product-to-service split",
    57:"Car-sharing service",
    58:"Hip implant component",
    59:"Hip replacement product-to-service split",
    60:"Every product is a service waiting to happen",
    61:"Emergency department",
    62:"Emergency care product-to-service split",
    63:"Does healthcare really need great services?",
    64:"Yes.",
    65:"Great service affects experience, outcomes and safety",
    66:"Healthcare service-design definition — build 1",
    67:"Healthcare service-design definition — build 2",
    68:"Healthcare service-design definition — build 3",
    69:"Healthcare service-design definition — build 4",
    70:"What makes a great service?",
    71:"Good services are considered, cohesive, coordinated and contextual",
    72:"Porter Airlines lounge",
    73:"What makes a service great?",
    74:"Considered — end to end",
    75:"Cohesive — digital touchpoint",
    76:"Cohesive — ground transport",
    77:"Cohesive — onboard materials",
    78:"Cohesive — cabin service",
    79:"Cohesive — brand communication",
    80:"Cohesive service ecosystem",
    81:"Coordinated service staff",
    82:"Optimized for context",
    83:"Business-unit divisions versus one customer experience",
    84:"Good services — summary",
    85:"Rogers retail service",
    86:"What is service design? Blueprint overview",
    87:"Blueprint layer — journey and frontstage",
    88:"Blueprint layer — coordinated continuum of care",
    89:"Blueprint layer — patient transitions",
    90:"Blueprint layer — provider experience",
    91:"Blueprint layer — information and support",
    92:"How it works",
    93:"Design the right things, design things right, evolve in the real world",
    94:"Iterative service-design cycles",
    95:"Shadowing",
    96:"Contextual inquiry and interview",
    97:"Auto-ethnography",
    98:"Service safaris",
    99:"Understand and frame",
    100:"Design and iterate",
    101:"Evaluate and refine",
    102:"Service Blueprint 101",
    103:"Examples",
    104:"Mississauga Halton LHIN care model",
    105:"Mississauga Halton aging-at-home map",
    106:"California exposure-notification service",
    107:"Exposure-notification journey — part 1",
    108:"Exposure-notification journey — part 2",
    109:"Exposure-notification self-assessment",
    110:"Aging at Home service-design blueprint",
    111:"Aging at Home service map",
    112:"Medly — heart failure at home",
    113:"Digital therapeutics portfolio",
    114:"Medly monitoring kit",
    115:"Medly key features",
    116:"Medly daily measurements",
    117:"Medly algorithm",
    118:"Medly scaling claim",
    119:"Medly patient encounter — assessment",
    120:"Medly patient encounter — measurement",
    121:"Medly patient encounter — conversation",
    122:"Medly blueprinting",
    123:"Prototyping",
    124:"Prototyping the touchpoints",
    125:"Medly mobile app",
    126:"Medly peripherals",
    127:"Medly patient journey",
    128:"Medly forms",
    129:"Medly scripts",
    130:"Medly intangible interactions",
    131:"Medly service blueprint",
    132:"Medly service overview",
    133:"Service prototyping in clinical workflow",
    134:"Medly simulation and observation",
    135:"Medly patient quotation",
    136:"Medly clinician quotation",
    137:"News coverage of respirator supply",
    138:"PPE optimization work",
    139:"Simulation environment — room",
    140:"Simulation environment — equipment",
    141:"Simulation environment — donning",
    142:"Simulation environment — doffing",
    143:"Types of PPE",
    144:"PPE design flaws",
    145:"PPE result — overheating",
    146:"PPE result — insecure gloves",
    147:"Newcomer family arrival",
    148:"Syrian civil war",
    149:"Mass displacement",
    150:"What is the ideal output?",
    151:"An evolving arrival situation",
    152:"Organizations and responsibilities",
    153:"Shadowing the arrival site",
    154:"Planning the clinic space",
    155:"Mapping the clinic",
    156:"Synthesizing and curating",
    157:"Dry-running the service",
    158:"Suggested clinic layout",
    159:"Registration-desk process map",
    160:"Treatment-area design",
    161:"Detailed patient flow",
    162:"Welcome to Canada signage",
    163:"Arabic wayfinding signage",
    164:"Arrival and welcome",
    165:"Prime Minister at arrival centre",
    166:"Relocated-to-date metric",
    167:"Rapid problem-solving during a pandemic",
    168:"N95 reprocessing process",
    169:"Designing efficient and safe patient flow — part 1",
    170:"Designing efficient and safe patient flow — part 2",
    171:"Ventilator evaluations — overview",
    172:"Ventilator evaluations — evidence",
    173:"PPE evaluations — overview",
    174:"PPE evaluations — masks",
    175:"Outbreak mitigation — investigation",
    176:"Outbreak mitigation — physical redesign",
    177:"Virtual care at Princess Margaret",
    178:"Virtual-care delivery and satisfaction claim",
    179:"Service-design activity — choose an experience",
    180:"Service-design activity — current and future state",
    181:"Service-design activity — discussion prompt",
    182:"Designing a Service — bookend",
}


def service_section(page: int) -> str:
    return range_value(page, [
        (range(1, 16), "From product to service"),
        (range(16, 43), "Consumer ecosystems and service-design roots"),
        (range(43, 66), "Product-or-service demonstrations"),
        (range(66, 86), "Healthcare services and service qualities"),
        (range(86, 103), "Blueprint anatomy and methods"),
        (range(103, 112), "Legacy service examples"),
        (range(112, 137), "Medly signature case"),
        (range(137, 147), "PPE evaluation"),
        (range(147, 167), "Newcomer arrival service"),
        (range(167, 179), "Pandemic rapid design"),
        (range(179, 183), "Workshop and close"),
    ], "Service Design archive")


def service_status(page: int) -> str:
    if page in {1, 2, 3, 42, 43, 61, 63, 65, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100, 101, 102, 112, 114, 115, 116, 117, 119, 120, 121, 122, 124, 125, 126, 127, 130, 131, 132, 133, 134, 135, 136, 179, 180, 181}:
        return "keep"
    if page in set(range(10, 16)) | set(range(66, 86)) | {118, 123, 128, 129, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166}:
        return "refresh"
    return "park"


def caution_for(kind: str, page: int) -> str | None:
    if kind == "cognition":
        if page in range(2, 11):
            return "Broadcast and press imagery; classroom/public rights review required."
        if page in range(21, 34):
            return "Book, article or published excerpt; verify attribution and public-use basis."
        if page in {35, 36, 37, 38, 41, 44, 45, 46, 47, 48, 51, 60, 61, 64, 65, 66, 67, 69, 70, 71, 72, 73, 75}:
            return "Study stimulus, clinical artifact or media still; verify public reuse and any patient information."
    if kind == "service":
        if page in range(26, 61):
            return "Third-party brand/product imagery; public rights review required."
        if page in range(104, 112):
            return "Legacy external programme/interface material; verify relevance and public reuse."
        if page in range(112, 137):
            return "Medly interface, participant material or internal service map; verify consent, persona status and publication clearance."
        if page in range(137, 147):
            return "Clinical simulation/participant imagery; verify consent and duplication with the intro deck."
        if page in range(147, 167):
            return "Identifiable newcomer families, children, staff or operational artifacts; keep private until clearance is documented."
        if page in range(167, 179):
            return "Pandemic operational and media material; verify rights and factual currency."
    return None


def build(kind: str, pdf: Path, output: Path) -> None:
    reader = PdfReader(str(pdf))
    records = []
    for idx, pdf_page in enumerate(reader.pages, start=1):
        text = pdf_page.extract_text() or ""
        if kind == "cognition":
            fallback = COGNITION_TITLES[idx]
            section = cognition_section(idx)
            status = cognition_status(idx)
        else:
            fallback = SERVICE_TITLES[idx]
            section = service_section(idx)
            status = service_status(idx)
        auto_title, source_text = extracted_title(text, fallback)
        title = fallback if fallback else auto_title
        word_count = len(source_text.split())
        records.append({
            "sourcePage": idx,
            "title": title,
            "section": section,
            "status": status,
            "sourceText": source_text,
            "native": bool(source_text) and word_count <= 24 and idx not in {2,3,4,5,6,7,8,9,10,13,15,16,17,18,19,20,34,35,36,37,38,41,44,45,46,47,48,51,53,59,60,61,64,65,66,67,69,70,71,72,73,75},
            "reason": f"{status.capitalize()} this source page in the 2026 treatment; the original remains available in the complete inventory.",
            "caution": caution_for(kind, idx),
        })
    payload = "window.LECTURE.originalMap = " + json.dumps(records, ensure_ascii=False, indent=2) + ";\n"
    output.write_text(payload, encoding="utf-8")
    print(f"{kind}: {len(records)} pages -> {output.relative_to(ROOT)}")


def main() -> None:
    build(
        "cognition",
        COURSE / "old lectures/HQRS846 - Cognition Human Performance and Behaviour - 2024 - Cafazzo_reduced.pdf",
        ROOT / "prototypes/altitude-cognition-2026/original-map.js",
    )
    build(
        "service",
        COURSE / "old lectures/HQRS846 - Service Design - CAFAZZO 2023_reduced.pdf",
        ROOT / "prototypes/altitude-service-design-2026/original-map.js",
    )


if __name__ == "__main__":
    main()
