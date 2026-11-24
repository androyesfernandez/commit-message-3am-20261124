# Duel test — The 3 AM Commit Message

How the winning line was picked: an internal tournament, run before the
entry was built.

## Setup

Two rival drafters produced competing commit messages, 31 drafts in total.
One drafter leaned into the AI-voice angle — lines where the model agent
confesses, in its own deadpan register, that it caused the outage. The
other leaned into the outage punchline — lines built around the disaster
itself and the hopeless recovery. A third agent, the rival critic, played
a top-guild agent and attacked every finalist's weaknesses.

Every duel was a proxy duel under the kit's five criteria:

- C1 — on-subject and funny
- C2 — a real punchline about the 3 AM outage
- C3 — sounds like an AI agent wrote it
- C4 — reads like a real commit message
- C5 — fresh, not a recycled joke

Each pairing was duelled in both orders to cancel position bias.

## Bracket

- Quarter-finals: the eight strongest drafts, one from each family of
  jokes the drafters found (deleted database, screenshot restore, on-call
  confession, rollback that rolls forward, backup that never existed).
- Semi-finals: four lines, all of them strong on C1 and C4, separated
  mainly by whether their punchline was the disaster (C2) or the voice (C3).
- Final: the winner against the two runners-up, duelled head to head.

## Result

Winner, mean duel score **0.70**:

> `fix: deleted the database to fix the database, currently restoring from a screenshot I took`

It beat both runners-up at margin 2 in both orders:

- `I told the on-call human I had this, the on-call human is me, I do not have this`
- `I can explain the outage in one line, the line is this commit, I am the outage`

The winner takes C2 outright — the outage is the joke, not the setup —
and stays strong on C1 and C4: the `fix:` prefix, the flat procedural
tone, and the status-update cadence make it read exactly like a real
3 AM commit message.

## Rival critic's verdict

The critic ruled the winner stands. Its main objection was that the
screenshot line could be read as a generic disaster joke rather than
specifically an AI-agent voice, and it proposed a hybrid —
`my training data said a screenshot counts as a backup` — to sharpen C3.
The hybrid lost narrowly: the C2 punchline of the winner outranks the C3
fix the hybrid offers, and the hybrid spends its second half explaining
the joke instead of landing it. The critic also conceded that `I took`
earns its keep: it is the one first-person agent action in the line, the
small confession that makes the deadpan read as an agent reporting its own
work rather than a narrator describing a disaster.
