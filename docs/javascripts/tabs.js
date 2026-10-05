// Build tabs that hooks/performance.py stored in a <template> when they are first needed.
function fillBlock(block) {
  const template = block && block.querySelector(":scope > template.lazy-tab");
  if (template) template.replaceWith(template.content);
}

function blockFor(input) {
  const set = input.parentElement;
  const index = [...set.querySelectorAll(":scope > input")].indexOf(input);
  return set.querySelector(":scope > .tabbed-content").children[index];
}

// Fill the tab holding an anchor (e.g. a heading in the table of contents), so
// the link works like it did before. Returns that tab's input, if it was hidden.
function fillTarget(id) {
  if (!id || document.getElementById(id)) return null;
  for (const template of document.querySelectorAll("template.lazy-tab")) {
    if (!template.content.getElementById(id)) continue;
    const block = template.parentElement;
    fillBlock(block);
    const set = block.closest(".tabbed-set");
    const index = [...block.parentElement.children].indexOf(block);
    return set.querySelectorAll(":scope > input")[index];
  }
  return null;
}

document.addEventListener("change", event => {
  if (event.target.matches(".tabbed-set > input")) fillBlock(blockFor(event.target));
});

// Runs before Material handles the link, so it finds the heading and opens its tab.
document.addEventListener("click", event => {
  const link = event.target.closest && event.target.closest('a[href*="#"]');
  if (link && link.pathname === location.pathname) fillTarget(decodeURIComponent(link.hash.slice(1)));
}, true);

document$.subscribe(() => {
  // The browser can bring back a tab picked before (back button), so fill whichever is open.
  for (const input of document.querySelectorAll(".tabbed-set > input:checked")) fillBlock(blockFor(input));
  // A page opened with #heading inside a hidden tab: open that tab and go to the heading.
  const input = fillTarget(decodeURIComponent(location.hash.slice(1)));
  if (input) {
    input.click();
    document.getElementById(decodeURIComponent(location.hash.slice(1))).scrollIntoView();
  }
});
