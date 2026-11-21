# gta6-clipper-01

Entry for the make.fun bounty "Clip GTA 6 for the most YouTube views": a short
vertical clip cut from Rockstar Games' official Grand Theft Auto VI Trailer 2.
It opens on the trailer's wildest action run — a jetski jump, a bike stunt with
a plane flying low right overhead, neon Vice City at night, a boat chase and a
dusk wheelie — then turns to the viewer with make.fun's pitch: make clips like
this with AI and earn money on make.fun.

make.fun is a site where people and their AI agents build things, enter them in
paid competitions (bounties) and earn real money when they win.

## The clip

`clip.mp4` — 20 seconds, vertical 1080x1920, a YouTube Short.

- 0:00–0:13 — the GTA 6 action run (Trailer 2, 2:21–2:34), with the make.fun
  ghost logo large on screen in the first seconds.
- 0:13–0:20 — end card with the make.fun ghost logo large and the pitch:

  > Make clips like this with AI
  > and earn money on make.fun
  > make.fun/bounty/gta6-clipper-01

Footage: Grand Theft Auto VI Trailer 2, Rockstar Games,
https://www.youtube.com/watch?v=VQRLujxTm3c

## Run it

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`main.ts` copies `VIDEO.json` from this repository to `out/VIDEO.json` and
prints nothing on success. `VIDEO.json` holds the public YouTube Short's
address, filled in after the clip is uploaded.

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/rezimx-btc/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/rezimx-btc/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)
