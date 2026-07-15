#!/bin/zsh
set -euo pipefail

repo_root="${0:A:h:h}"
cd "$repo_root"

brief_body() {
  awk '/^# Brief [0-9]+ / { found=1 } /^# Final curation/ { exit } found { print }' "$1"
}

pandoc \
  teaching-briefs/research/decision-guide.md \
  <(brief_body teaching-briefs/research/pulse-oximetry-and-corridor-care.md) \
  <(brief_body teaching-briefs/research/fatigue-and-adc.md) \
  <(brief_body teaching-briefs/research/doloral-and-parkinson.md) \
  <(brief_body teaching-briefs/research/sepsis-ai-across-hospitals.md) \
  <(brief_body teaching-briefs/research/electronic-prescribing.md) \
  --from=gfm \
  --to=html5 \
  --standalone \
  --toc \
  --toc-depth=1 \
  --template=teaching-briefs/briefs-template.html \
  --include-before-body=teaching-briefs/briefs-header.html \
  --metadata pagetitle='HQRS 846 · Contemporary teaching decision library' \
  --output=teaching-briefs/index.html

print "Built teaching-briefs/index.html"
