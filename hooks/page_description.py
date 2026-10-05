"""Use each page's first paragraph as its description for link embeds."""
import html
import re
from html.parser import HTMLParser

SKIP = {"table", "aside", "figure", "details", "nav", "script", "style"}
# Notice banners that would make a poor summary.
BOILERPLATE = ("The following content has been removed", "Not to be confused with", "For the ", "This article is about", "This article is a stub", "This page is about")


class _FirstParagraph(HTMLParser):
    def __init__(self):
        super().__init__()
        self.skip = 0
        self.in_p = False
        self.text = []
        self.found = None

    def handle_starttag(self, tag, attrs):
        if tag in SKIP:
            self.skip += 1
        elif tag == "p" and not self.skip and self.found is None:
            self.in_p = True
            self.text = []

    def handle_endtag(self, tag):
        if tag in SKIP:
            self.skip = max(0, self.skip - 1)
        elif tag == "p" and self.in_p:
            self.in_p = False
            text = re.sub(r"\s+", " ", "".join(self.text)).strip()
            if len(text) >= 40 and not text.startswith(BOILERPLATE) and not text.endswith(":") and self.found is None:
                self.found = text

    def handle_data(self, data):
        if self.in_p and not self.skip:
            self.text.append(data)


def on_page_content(content, page, config, files):
    if page.meta.get("description") or page.is_homepage:
        return content
    parser = _FirstParagraph()
    parser.feed(content)
    text = parser.found
    if text:
        if len(text) > 200:
            text = text[:197].rsplit(" ", 1)[0] + "..."
        page.meta["description"] = html.unescape(text)
    return content
