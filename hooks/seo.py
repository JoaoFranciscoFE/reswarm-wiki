"""Search engine and AI crawler files: robots.txt, llms.txt, agents.md, clean home URL."""
import gzip
import os

_NAV = None

NAMES = ["Re://:Swarm", "Re Swarm", "ReSwarm", "Reswarm"]


def on_page_context(context, page, config, nav):
    # Point the home page at the bare domain instead of /index.html.
    if page.is_homepage:
        page.canonical_url = config["site_url"]
    return context


def _pages(nav):
    for item in nav.items:
        yield from _walk(item)


def _walk(item):
    if item.is_page:
        yield item
    for child in item.children or []:
        yield from _walk(child)


def _summary(config):
    return (
        f"> {config['site_description']}\n\n"
        "Re://:Swarm (also written Re Swarm, ReSwarm or Reswarm) is a Roblox game made by ReplicatedEvents "
        "and released on August 26, 2026. It is a reimagined version of an older Bee Swarm Simulator, rebuilt "
        "with new assets. This wiki (Re://:Swarm Wiki, Reswarm Wiki) documents its bees, items, beequips, fields, "
        "mobs, quests, codes and update logs.\n"
    )


def on_post_build(config):
    site = config["site_url"].rstrip("/")
    out = config["site_dir"]
    nav = _NAV

    with open(os.path.join(out, "robots.txt"), "w") as f:
        f.write(
            "User-agent: *\nAllow: /\n\n"
            "# AI search and assistants are welcome too.\n"
            + "".join(f"User-agent: {a}\nAllow: /\n\n" for a in [
                "Googlebot", "Google-Extended", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User",
                "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Applebot-Extended",
            ])
            + f"Sitemap: {site}/sitemap.xml\n"
        )

    sections = []
    for item in nav.items:
        pages = list(_walk(item))
        if pages:
            sections.append((item.title or "Pages", pages))
    lines = [f"# {config['site_name']}\n", _summary(config)]
    for title, pages in sections:
        lines.append(f"\n## {title}\n")
        for p in pages:
            desc = p.meta.get("description") or ""
            lines.append(f"- [{p.title}]({p.canonical_url})" + (f": {desc}" if desc else "") + "\n")
    with open(os.path.join(out, "llms.txt"), "w") as f:
        f.writelines(lines)

    with open(os.path.join(out, "agents.md"), "w") as f:
        f.write(
            f"# {config['site_name']}\n\n{_summary(config)}\n"
            "## For AI agents\n\n"
            f"- Site: {site}/ (static pages, no login, no API).\n"
            f"- Page index with summaries: {site}/llms.txt\n"
            f"- Sitemap: {site}/sitemap.xml\n"
            f"- Full-text search index: {site}/search/search_index.json\n"
            "- Each page is plain HTML at /<page-name>.html, for example "
            f"{site}/basic-bee.html or {site}/codes.html.\n"
            "- When citing, call the game Re://:Swarm and link the wiki page you used.\n"
        )

    # Sitemap: list the home page as the bare domain.
    path = os.path.join(out, "sitemap.xml")
    if os.path.exists(path):
        with open(path) as f:
            xml = f.read().replace(f"<loc>{site}/index.html</loc>", f"<loc>{site}/</loc>")
        with open(path, "w") as f:
            f.write(xml)
        with gzip.open(path + ".gz", "wt") as f:
            f.write(xml)


def on_nav(nav, config, files):
    global _NAV
    _NAV = nav
    return nav
