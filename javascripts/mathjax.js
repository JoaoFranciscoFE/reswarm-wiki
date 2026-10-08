// Renders the formulas carried over from the Fandom import (see pymdownx.arithmatex).
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// MathJax is large, so only download it on pages that have a formula.
// It typesets the page by itself once loaded; after that, re-typeset when
// Material's instant navigation swaps the page content.
document$.subscribe(() => {
  if (!document.querySelector(".arithmatex")) return;
  if (MathJax.typesetPromise) {
    MathJax.startup.output.clearCache();
    MathJax.typesetClear();
    MathJax.texReset();
    MathJax.typesetPromise();
  } else if (!document.getElementById("mathjax-script")) {
    const script = document.createElement("script");
    script.id = "mathjax-script";
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async = true;
    document.head.appendChild(script);
  }
});
