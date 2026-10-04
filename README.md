# Re://:Swarm Wiki

Community wiki for Re://:Swarm, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## Editing
Pages are Markdown files in `docs/`. Edit a file, commit to `main`, and the site
is rebuilt and published automatically by GitHub Actions.

## Adding an update log
1. Copy `templates/update-log.md` to `docs/<update-name>.md` and fill it in.
2. Add a card for it at the **top** of `docs/update-logs.md` (newest first).
3. Add it under `"Update Logs"` in the `nav` of `mkdocs.yml`, right after `update-logs.md`.

## Running locally
    pip install -r requirements.txt
    mkdocs serve

## Credits
Content adapted from the [Bee Swarm Simulator Wiki](https://bee-swarm-simulator.fandom.com),
licensed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
