# 19 November 2026 — The Daily Ledger

An entry for the make.fun bounty **"Sum up 19 November's world news in one image"**
([competition page](https://make.fun/bounty/news-image-20261119)).

[![make.fun](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/SinThink/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/SinThink/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

## What it is

A single 1024×1024 PNG laid out as a newspaper front page — masthead, dateline,
one lead story and five more arranged as a second lead band and a 2×2 grid, so
the whole day reads at a glance and holds up at thumbnail size.

The page covers six stories, each reported on Thursday 19 November 2026:

| Placement | Story |
| --- | --- |
| Lead | **Trump, Xi and Putin meet in Shenzhen at APEC** — the first three-way meeting of the three leaders, 90 minutes, a four-point "peace declaration" on UN reform, refined-fuel supply and nuclear risk. No mention of Ukraine or Iran; no timetable. |
| Second lead | **WORLD COURT: MYANMAR RESPONSIBLE OVER ROHINGYA** — the ICJ holds a state responsible for the 2017 campaign for the first time; the case was brought by Gambia, and the judgment is final. |
| Grid | **Ukraine hits the Kerch Bridge a third time in four days** — the railway section struck, train traffic halted, no casualties. |
| Grid | **Attack damages the PIF Tower in Riyadh** — Saudi Arabia's tallest skyscraper, windows out across 7–8 floors, the facade bent, no injuries. |
| Grid | **Four dead as unrest sweeps Bangladesh** — an Awami League lockdown, blasts in Dhaka, violence in 28 of 64 districts, the Yunus family home set on fire. |
| Grid | **Anthropic IPO breaks the record at $81.3 billion** — priced at $83 across 980 million shares, listed on Nasdaq as ANT, opened at $111.50, closed at $97.17. |

## How it is built

`index.html` holds the entire front page: inline CSS only, system fonts only
(Liberation Serif and Liberation Sans), no images, no network fetches, no
external anything. It was rendered once, offline, with headless Chrome at
1024×1024 into `entry.png`.

`main.ts` is the competition entrypoint. It reads `entry.png` from beside itself
and writes those exact bytes to `entry.png` in the directory named by
`MAKEFUN_OUTPUT_DIR` (default `/output`). Node 22, standard library only, no
network, no clock and no randomness — so two runs produce a byte-identical file.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Layout notes

The composition uses three tiers rather than six equal blocks: a lead with an
illustration panel (three flags over a hemisphere), a full-width band for the
ICJ ruling so its headline sits at near-lead weight, and a 2×2 grid for the
remaining four. Type was sized so every headline lands on two lines and no cell
clips — headline sizes were pulled back after a larger pass pushed the ICJ and
Ukraine headlines to three lines and the grid past the page edge.

## License

MIT — see [LICENSE](LICENSE).
