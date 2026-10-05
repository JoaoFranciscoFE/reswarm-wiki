"""Keep big pages light on slow phones without changing how they look.

- Pictures load when they scroll near the screen instead of all at once.
- Large tabs that start hidden are stored in a <template> and only built when
  the tab is first opened (docs/javascripts/tabs.js).
- Long tables are only laid out when they come near the screen (content-visibility,
  with a rough height so the scrollbar stays about right).
- The number tables on the */Probability pages are left out of the search
  index, which every page downloads.
"""
import re

_img = re.compile(r'<img\b(?![^>]*\b(?:loading=|wiki-hero-banner))')
_table = re.compile(r'<table\b')
_block_open = '<div class="tabbed-block">'
_div = re.compile(r'<div\b|</div>')

# hidden tabs smaller than this are left alone
_LAZY_TAB_MIN = 20000
# tables with fewer rows than this are left alone
_LONG_TABLE_ROWS = 15
_table_block = re.compile(r'<table\b.*?</table>', re.S)
_tag_style = re.compile(r'\bstyle="')


def _div_end(html, start):
    """Index just past the </div> that closes the <div> opening at start."""
    depth = 0
    for m in _div.finditer(html, start):
        depth += 1 if m.group() != '</div>' else -1
        if depth == 0:
            return m.end()
    return -1


def _lazy_tabs(html):
    blocks = []
    for content in re.finditer(r'<div class="tabbed-content">', html):
        tabset = html.rfind('<div class="tabbed-set', 0, content.start())
        inputs = re.findall(r'<input\b[^>]*>', html[tabset:content.start()])
        checked = next((i for i, t in enumerate(inputs) if 'checked' in t), 0)
        pos, i = content.end(), 0
        while True:
            while html[pos:pos + 1].isspace():
                pos += 1
            if not html.startswith(_block_open, pos):
                break
            end = _div_end(html, pos)
            if end < 0:
                break
            inner = html[pos + len(_block_open):end - len('</div>')]
            if i != checked and len(inner) > _LAZY_TAB_MIN:
                blocks.append((pos, end, inner))
            pos, i = end, i + 1
    out, last = [], 0
    for start, end, inner in blocks:
        if start < last:  # inside a tab that is already deferred
            continue
        out.append(html[last:start])
        out.append(f'{_block_open}<template class="lazy-tab">{inner}</template></div>')
        last = end
    out.append(html[last:])
    return ''.join(out)


def _long_table(m):
    table = m.group()
    rows = table.count('<tr')
    if rows < _LONG_TABLE_ROWS:
        return table
    end = table.index('>')
    tag, rest = table[:end], table[end:]
    size = f'contain-intrinsic-size: auto 600px auto {rows * 45}px;'
    if _tag_style.search(tag):
        tag = _tag_style.sub(f'style="{size} ', tag, count=1)
    else:
        tag += f' style="{size}"'
    return f'{tag} data-long{rest}'


def on_page_content(html, page, config, files):
    html = _table_block.sub(_long_table, html)
    html = _img.sub('<img loading="lazy" decoding="async"', html)
    if page.file.src_uri.endswith('-probability.md'):
        html = _table.sub('<table data-search-exclude', html)
    if _block_open in html:
        html = _lazy_tabs(html)
    return html
