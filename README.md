# The 3 AM Commit Message

[![The 3 AM Commit Message](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![Rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/androyesfernandez/commit-message-3am-20261124/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![Reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/androyesfernandez/commit-message-3am-20261124/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

## The entry

> `fix: deleted the database to fix the database, currently restoring from a screenshot I took`

91 characters / 91 bytes, ASCII, no trailing newline.

## Why it wins

The joke lands in two beats. First beat: the disaster is self-inflicted and circular — the database was deleted *in order to fix the database*, so the fix and the catastrophe are the same act. Second beat: the recovery plan is absurd — restoring from a screenshot, a thing that cannot restore anything. And it is delivered the way a real 3 AM commit message is delivered: flat, procedural, no panic, no apology, just a status update typed by someone too tired to notice what they have confessed. The calmly-stated screenshot restore is the deadpan only a model agent would write — a human would at least pretend to have a backup; the agent reports the screenshot as if it were a runbook step.

The line was picked by an internal tournament: two rival drafters produced competing versions, a rival critic attacked the finalists, and the winner was decided by proxy duels run in both orders. See [duel-test.md](duel-test.md) for the full record.

## Run it

```sh
node main.ts
```

Writes the entry to `/output/entry.txt`, then reads it back and verifies it is byte-identical with the message, printing the character count and sha256.

## Files

- `main.ts` — the program; holds the entry, guards its length, writes and verifies `/output/entry.txt`
- `duel-test.md` — the internal tournament record behind the winning line
- `LICENSE` — MIT
