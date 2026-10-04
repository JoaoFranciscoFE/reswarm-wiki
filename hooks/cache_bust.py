"""Add a content hash to the site stylesheet URL so browsers always load the latest version."""
import hashlib
import os

_version = None


def on_config(config):
    global _version
    path = os.path.join(config["docs_dir"], "stylesheets", "wiki.css")
    with open(path, "rb") as f:
        _version = hashlib.sha1(f.read()).hexdigest()[:10]
    return config


def on_post_page(output, page, config):
    return output.replace('stylesheets/wiki.css"', f'stylesheets/wiki.css?v={_version}"')
