# Re://:Swarm Wiki

Community wiki for Re://:Swarm, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## Editing
Pages are Markdown files in `docs/`. Edit a file, commit to `main`, and the site
is rebuilt and published automatically by GitHub Actions.

## Adding an update log
1. Copy `templates/update-log.md` to `docs/update-log-YYYY-MM-DD.md` and fill it in (pick an icon from `docs/img`).
2. Add a card with the same icon at the **top** of `docs/update-logs.md` (newest first).
3. Add it under `"Update Logs"` in the `nav` of `mkdocs.yml`, right after `update-logs.md`.

## Adding a new bee
Follow [`runbooks/new-bee.md`](runbooks/new-bee.md). It lists every page, list and file a bee touches.

## Running locally
    pip install -r requirements.txt
    mkdocs serve

## Credits
Content adapted from the [Bee Swarm Simulator Wiki](https://bee-swarm-simulator.fandom.com),
licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
