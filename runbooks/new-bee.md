# Runbook: "new bee X added"

Use this when meno says a new bee was added to the game. Work through every step; a new bee
touches about 15 places in the wiki. Examples to copy from: `docs/crimbolt-bee.md` (event bee
with its own ability) and `docs/mortar-bee.md` (passives only).

Below, `X` is the bee's short name (`Crimbolt`), `x` its lower-case slug (`crimbolt`), and
`Rarity` one of Common, Rare, Epic, Legendary, Mythic, Event.

## 1. Get the game data from Studio (read-only)

Studio is only reachable through the "Read game data in Studio" thread. Send the request to the
project's coordinator session (`send_message`), which relays it and forwards the answer back.
Never change anything in the game; game bugs are reported in the wiki, not fixed.

Ask for one export file, `x-data.md` (like `crimbolt-data.md`), plus PNGs, saved to the
project files root. The request:

> Read-only, nothing in the game may change. For the new bee X, export to `x-data.md` in
> the project files:
> 1. `BeesAndHive.BeeTypes` entry: name, rarity, colour, description (bee menu and egg text),
>    energy, speed, attack, gather amount and speed, convert amount and speed, favourite treat,
>    liked and disliked fields, abilities, passives (exact text), gifted hive bonus,
>    gifted-only passives, bee info panel bonuses, colour scheme, one-per-hive or not.
> 2. `BeesAndHive.BeeAbilityDefs` for each ability: text, attempt and use cooldown, chance,
>    token duration, categories (gather/battle), token icon asset ID. Mechanics from
>    `GameEffectsServer` for any new ability, and any new buff from `BuffDefs`.
> 3. Stickers: every sticker the bee can find or cause (`StickerTypes` name, ID, text, image
>    asset ID, stack boost and reward) and its `StickerDiscoveryService.BEE_RULES` odds.
> 4. `EggTypes`: the X Bee Egg, Gifted X Bee Egg, X Bee Jelly (and 1st Edition ones), and
>    everything that gives them (rebirth rewards, quests, shop packs, codes, vouchers).
> 5. Any NPC quest line, Robux shop pack or event tied to the bee.
> 6. Images as PNG: `x-bee-icon.png` (`BeeTypes` Thumbnail), `x-gifted-bee-icon.png`
>    (GiftedThumbnail), `x-face-icon.png` (hive slot face icon, see `bee-faces-index.md`),
>    and the ability token icons. Say if the gifted image is the same as the normal one.

Before using any image, look at it: it must be a good front-facing view of the bee, not a
backside or odd angle, and keep its aspect ratio (no stretching). Prefer the game's own
display images over placeholders.

Numbers use the game's suffixes (see `number-suffixes.md` in project files). Re-read the
export before relying on any value.

## 2. Images

| File | From |
|---|---|
| `docs/img/X_Bee.png` | bee icon (other bees are 256x256 RGBA) |
| `docs/img/Gifted_X_Bee.png` | gifted icon; skip if the game uses the same image |
| `docs/img/<Ability_Name>.png` | each new ability token icon |
| `docs/img/<Sticker_Name>.png` | each new sticker |

Multi-word names use underscores (`Menacing_Crimbolt_Bee.png`).

## 3. The bee's own page: `docs/x-bee.md`

Copy the structure of `crimbolt-bee.md`:

- Front matter: `title: "X Bee"`, `tags: ["Bees", "Rarity", "Colour", "Re://:Swarm"]`
  (add an event tag if it came with one, like `"Painter Bee Event"`).
- `bee-infobox` with class `bee-rarity-<rarity>`, Original and Gifted tabs, the quote, rarity,
  colour, energy/speed/attack, and the Color Scheme block if the game has one.
- Intro, Stats table, Abilities (each with `ability-token-row` icon, exact quote, numbers),
  passives, gifted bonus, `## Stickers` table (as in `mortar-bee.md`, ending with the
  "Like any bee..." line), Gallery if there are extra images.
- Last lines, always:

  ```
  ## All bees

  --8<-- "all-bees.md"
  ```

## 4. Lists, menus and tables

| File | What to add |
|---|---|
| `mkdocs.yml` | `- "X Bee": x-bee.md` under `"Bees"`, alphabetical. |
| `docs/browse-bees.md` | a `wiki-card` in the bee's rarity section, alphabetical. |
| `snippets/all-bees.md` | the same card; this list is in rarity order, then alphabetical. It shows on every bee page. |
| `docs/bees-<rarity>.md` | a table row (icon, link, game description), alphabetical. |
| `docs/bees.md` | the bee count and the "not in Bee Swarm Simulator" sentence in the intro, and a row in the Bee Stats Table. |
| `docs/gifted-bee.md` | a row in "List of Hive Bonuses". |
| `docs/treats.md` | the bee under its favourite treat (or "None") in the Treat Table. |
| `docs/emoticons.md` | a row in "Field Preferences" (likes, dislikes). |
| Field pages (`docs/rose-field.md` etc.) | the bee in the "Bees that like the ..." sentence of each liked field. |
| `docs/egg.md` | a `### X Bee Egg` section under "Re://:Swarm Bee Eggs" (uses `img/Basic_Egg.png`), with how to get it and the Gifted egg and jelly. |
| `docs/sticker.md` | each new sticker in "Re://:Swarm Stickers > New stickers". |
| `docs/ability-tokens.md` | a section for each new ability, and the bee added to the "... bees have the ability" line of each shared ability. |
| Other mechanic pages | wherever the passives touch: `critical-hits.md`, `instant-conversion.md`, `passive-abilities.md`, buff pages. Grep for a similar bee to find them. |
| Sources | `rebirths.md` reward row, the quest giver's page, `robux-shop.md` pack, `codes.md`, as the export shows. |

Leave the old `NavLinks` navbox tables on the older bee pages alone. They are legacy
Fandom tables and the `all-bees.md` snippet replaced them.

## 5. Hive Builder (`docs/hive-builder.md`, `docs/javascripts/hive-builder.js`)

- Add the bee to its rarity in `RARITIES` in `hive-builder.js`, alphabetical, with a **new**
  two-letter code. Never change or reuse an existing code: share links depend on them.
- Add its icons to `docs/img/hive-builder/` in the format the other icons use (128x128 WebP,
  `X_Bee.webp` and `Gifted_X_Bee.webp`). If there is no gifted icon, add the code to
  `NO_GIFTED_ICON`.
- Event bees are automatically one per hive. Read the top of `hive-builder.js` first in case
  the format changed, and check there is no open PR on these files.

## 6. Update log and home page (if the bee came with an update)

Follow "Adding an update log" in `README.md`. If it's the headline of the update, also update
the news line in `docs/index.md`.

## 7. Check and ship

1. `grep -rn "X Bee" docs snippets mkdocs.yml` and compare with a bee of the same rarity, so
   nothing is missed.
2. `pip install -r requirements.txt` then `mkdocs build`: no new warnings about missing
   files or links.
3. Open the built page in a browser (or `mkdocs serve`) and look at the infobox, images and
   the All bees cards.
4. Follow the project's GitHub rules: author and committer `replicatedevents`, no Claude
   attribution anywhere, branch not starting with `claude/`, short commit and PR text, and
   check the PR is still open before pushing to it.

## Known gaps (as of 2026-10-06)

Crimbolt, Mortar and Painter Bee were added before this runbook, and are still missing from:
the Bee Stats Table in `bees.md`, `gifted-bee.md`, `treats.md`, the Field Preferences table in
`emoticons.md`, and their liked-field pages. Fill these in when their data is at hand.
