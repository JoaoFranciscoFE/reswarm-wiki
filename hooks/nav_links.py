"""Make each sidebar section a link to its first page.

Sub-menus are hidden in the stylesheet, so a section label that only
opens its sub-menu would do nothing when clicked.
"""
import re

_label = re.compile(r'<label class="md-nav__link( md-nav__link--active)?" for="(__nav_[\d_]+)" id="__nav_[\d_]+_label" tabindex="0">(.*?)</label>', re.S)
_first = re.compile(r'<a href="([^"]+)" class="md-nav__link')


def on_post_page(output, page, config):
    def link(m):
        nxt = _first.search(output, m.end())
        if not nxt:
            return m.group(0)
        active = m.group(1) or ''
        return f'<a href="{nxt.group(1)}" class="md-nav__link{active}">{m.group(3)}</a>'
    return _label.sub(link, output)
