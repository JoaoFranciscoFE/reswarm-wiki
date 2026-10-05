"""Turn ```tool-pattern blocks into small flower grids.

Write the grid with the top row as the direction the player faces:
  #  collected tile        .  not collected
  P  player, not collected @  player, collected
  o  searched area (e.g. Spark Staff picks from these)
An optional last line starting with "note:" is shown under the grid.
"""
import html
import re

_block = re.compile(r'^```tool-pattern[ \t]*\n(.*?)\n```[ \t]*$', re.S | re.M)
_cls = {'#': 'on', '.': 'off', 'P': 'me', '@': 'me on', 'o': 'area'}


def _render(m):
    lines = [l.rstrip() for l in m.group(1).splitlines() if l.strip()]
    note = ''
    if lines and lines[-1].lower().startswith('note:'):
        note = lines.pop()[5:].strip()
    cols = max(len(l) for l in lines)
    # each tile is one of the game's flower decals (white/red/blue, 1-3 flowers),
    # mixed in a fixed scatter so the grid reads like a field
    cells = ''.join(f'<i class="{_cls.get(c, "off")} f{(x * 5 + y * 3 + x * y) % 3}{(x * 2 + y * 7 + x * y) % 3 + 1}"></i>'
                    for y, l in enumerate(lines) for x, c in enumerate(l.ljust(cols, '.')))
    out = f'<div class="tool-pattern" style="--cols:{cols}">{cells}</div>'
    key = '<span class="on"></span>collected'
    if any('o' in l for l in lines):
        key = '<span class="area"></span>search area'
    out += f'<div class="tool-pattern-key">{key}<span class="me"></span>you (facing up)</div>'
    if note:
        out += f'<div class="tool-pattern-note">{html.escape(note)}</div>'
    return out


def on_page_markdown(markdown, page, config, files):
    return _block.sub(_render, markdown)
