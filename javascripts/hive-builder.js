// Hive builder (hive-builder.md). Runs only on pages that have #hive-builder-app.
(() => {
  // Hive size: 25 slots to start, more bought one at a time in the Honeycomb Blueprint
  // (capped at 115 here). The hive always shows at least 10 rows; cells past your slot
  // count are locked. Slot N fills left to right, bottom row first.
  const MIN_SLOTS = 25, MAX_SLOTS = 115, COLS = 5, MIN_ROWS = 10;
  const HEX_H = Math.sqrt(3) / 2;               // flat-top hexagon height for width 1
  const GRID_W = 0.75 * (COLS - 1) + 1;          // grid width in hexagon widths
  const rowsFor = slots => Math.max(MIN_ROWS, Math.ceil(slots / COLS));
  const gridH = rows => rows * HEX_H + HEX_H / 2;
  // Position of slot i (0-based) in hexagon widths. Columns 2 and 4 sit half a cell higher.
  const cellPos = (i, rows) => {
    const row = Math.floor(i / COLS), col = i % COLS;
    return [col * 0.75, (rows - 1 - row) * HEX_H + (col % 2 === 0 ? HEX_H / 2 : 0)];
  };

  // Rarities in the Bee menu's order, with the game's hive slot colour for each; bees are alphabetical
  // within each. Each bee has a fixed two-letter code for share links: never change or
  // reuse a code, only add new ones. Hell Bee is left out (admin only).
  const RARITIES = [
    ["Common", "#ae792f", "bs Basic"],
    ["Rare", "#dcdde4", "bo Bomber, bv Brave, bu Bumble, co Cool, ha Hasty, lo Looker, ra Rad, rs Rascal, st Stubborn"],
    ["Epic", "#f5d010", "bb Bubble, bk Bucko, cm Commander, de Demo, ex Exhausted, fi Fire, fr Frosty, ho Honey, rg Rage, ri Riley, sk Shocked"],
    ["Legendary", "#4bf6e0", "by Baby, ca Carpenter, dm Demon, di Diamond, li Lion, mu Music, ni Ninja, sh Shy"],
    ["Mythic", "#bda4ff", "bt Buoyant, fu Fuzzy, mo Mortar, pr Precise, sp Spicy, ta Tadpole, ve Vector"],
    ["Event", "#9eea6a", "be Bear, cb Cobalt, ct Crimbolt, cr Crimson, dg Digital, fe Festive, gu Gummy, pa Painter, ph Photon, pu Puppy, tb Tabby, vi Vicious, wi Windy"],
  ];
  // Hive slot faces, tinted like the game. Only Painter has a different gifted face.
  const GIFTED_FACE = new Set(["pa"]);
  const BEES = [], BY_CODE = {};
  for (const [rarity, color, list] of RARITIES) {
    for (const entry of list.split(", ")) {
      const [code, short] = entry.split(" ");
      const file = short.replace(/ /g, "_") + "_Bee";
      const bee = {
        code, short, rarity, color, name: short + " Bee",
        page: short.toLowerCase() + "-bee.html",
        img: "img/hive-builder/" + file + ".webp",
        giftedImg: "img/hive-builder/" + (GIFTED_FACE.has(code) ? "Gifted_" : "") + file + ".webp",
      };
      BEES.push(bee);
      BY_CODE[code] = bee;
    }
  }
  const STORE_KEY = "reswarm-hive-builder";

  // In-game hive codes (Honeycomb Blueprint > Layouts): RSH1. then one slot per hive cell,
  // joined by "-". A slot is the bee's game ID in base 36, "!" on the end if gifted, "0" if empty.
  // Old codes used "*" for gifted. Game IDs never change; new bees get the next one.
  // ID 49 is Hell Bee, which the builder leaves out.
  const CODE_PREFIX = "RSH1.", CODE_MAX = 200;
  const GAME_IDS = ("Basic Bomber Rascal Bumble Cool Brave Hasty Rad Looker Stubborn Shocked Demo Bubble " +
    "Rage Frosty Exhausted Bucko Riley Honey Fire Commander Baby Diamond Lion Shy Demon Ninja Music " +
    "Carpenter Bear Photon Tabby Gummy Cobalt Crimson Puppy Vicious Festive Windy Tadpole Vector " +
    "Spicy Fuzzy Buoyant Precise Digital Crimbolt Mortar Hell Painter").split(" ");
  for (const bee of BEES) bee.id = GAME_IDS.indexOf(bee.short) + 1;
  const BY_ID = Object.fromEntries(BEES.map(b => [b.id, b]));

  // cells -> "RSH1.w!-12!-0-1"
  function hiveCode(cells) {
    const tokens = cells.map(c => (c ? c.b.id.toString(36) + (c.g ? "!" : "") : "0"));
    while (tokens.length && tokens[tokens.length - 1] === "0") tokens.pop();
    return CODE_PREFIX + tokens.join("-");
  }

  // "RSH1...." -> { cells, skipped } or { error }
  function readHiveCode(text) {
    const code = String(text).replace(/\s+/g, "");
    if (!code.startsWith(CODE_PREFIX)) return { error: "That isn't a hive code. Codes start with RSH1." };
    const tokens = code.slice(CODE_PREFIX.length).split("-").filter(t => t !== "");
    if (!tokens.length) return { error: "That hive code is empty." };
    if (tokens.length > CODE_MAX) return { error: "That hive code is too long." };
    const cells = [];
    let skipped = 0;
    for (const token of tokens) {
      if (token === "0") { cells.push(null); continue; }
      const gifted = /[!*]$/.test(token), raw = gifted ? token.slice(0, -1) : token;
      const id = /^[0-9a-z]{1,4}$/.test(raw) ? parseInt(raw, 36) : 0;
      if (!id || id > GAME_IDS.length) return { error: `Unknown bee in code (${token}).` };
      const bee = BY_ID[id];
      if (!bee) skipped++;
      cells.push(bee ? { b: bee, g: gifted } : null);
    }
    return { cells, skipped };
  }

  const el = (tag, cls, text) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  };
  const icon = (cell) => (cell.g ? cell.b.giftedImg : cell.b.img);

  let ui = null;   // the builder on the current page

  function build(root) {
    const s = { slots: MIN_SLOTS, cells: new Array(MAX_SLOTS).fill(null), brush: null, gifted: false };
    root.textContent = "";

    // Bee list
    const picker = el("div", "hb-picker");
    const search = el("input", "hb-search");
    Object.assign(search, { type: "search", placeholder: "Search bees", ariaLabel: "Search bees" });
    picker.append(search);
    const list = el("div", "hb-list");
    const pickButtons = new Map();
    for (const [rarity, color] of RARITIES) {
      const group = el("div", "hb-group");
      group.style.setProperty("--rarity", color);
      group.append(el("div", "hb-group-title", rarity));
      const items = el("div", "hb-items");
      for (const bee of BEES.filter(b => b.rarity === rarity)) {
        const b = el("button", "hb-pick");
        b.type = "button";
        b.title = bee.name;
        b.dataset.code = bee.code;
        const img = el("img");
        Object.assign(img, { src: bee.img, alt: "", loading: "lazy", draggable: false });
        const face = el("span", "hb-face");
        face.style.background = bee.color;
        face.append(img);
        b.append(face, el("span", null, bee.short));
        items.append(b);
        pickButtons.set(bee.code, b);
      }
      group.append(items);
      list.append(group);
    }
    picker.append(list);

    // Toolbar
    const main = el("div", "hb-main");
    const bar = el("div", "hb-bar");
    const slotsBox = el("label", "hb-slots");
    const minus = el("button", "hb-btn hb-step", "−"), plus = el("button", "hb-btn hb-step", "+");
    minus.type = plus.type = "button";
    minus.ariaLabel = "Fewer slots"; plus.ariaLabel = "More slots";
    const slotsInput = el("input");
    Object.assign(slotsInput, { type: "number", min: MIN_SLOTS, max: MAX_SLOTS, value: s.slots, inputMode: "numeric" });
    slotsBox.append(el("span", null, "Hive slots"), minus, slotsInput, plus);
    const btn = (label, cls) => { const b = el("button", "hb-btn" + (cls ? " " + cls : ""), label); b.type = "button"; return b; };
    const giftedBtn = btn("Gifted", "hb-toggle");
    const eraseBtn = btn("Eraser", "hb-toggle");
    const fillBtn = btn("Fill empty");
    const clearBtn = btn("Clear hive", "hb-danger");
    const linkBtn = btn("Copy link");
    const codeBtn = btn("Copy code");
    const importBtn = btn("Import code");
    const pngBtn = btn("Save PNG");
    bar.append(slotsBox, giftedBtn, eraseBtn, fillBtn, clearBtn, linkBtn, codeBtn, importBtn, pngBtn);

    const stats = el("div", "hb-stats");
    const hint = el("div", "hb-hint");

    // Hive grid: flat-top hexagons in 5 columns, grown upward when the slot count needs more rows.
    const hive = el("div", "hb-hive");
    const cellEls = [];
    let shownRows = 0;
    function layoutGrid() {
      const rows = rowsFor(s.slots);
      if (rows === shownRows) return;
      shownRows = rows;
      const h = gridH(rows), n = rows * COLS;
      hive.style.aspectRatio = `${GRID_W} / ${h}`;
      while (cellEls.length < n) {
        const c = el("button", "hb-cell");
        c.type = "button";
        c.dataset.i = cellEls.length;
        c.append(el("span", "hb-hex"));
        hive.append(c);
        cellEls.push(c);
      }
      cellEls.forEach((c, i) => {
        c.hidden = i >= n;
        if (c.hidden) return;
        const [x, y] = cellPos(i, rows);
        Object.assign(c.style, {
          left: (x / GRID_W * 100) + "%", width: (100 / GRID_W) + "%",
          top: (y / h * 100) + "%", height: (HEX_H / h * 100) + "%",
        });
      });
    }
    const trash = el("div", "hb-trash", "Drag here to remove");
    main.append(bar, stats, hint, hive, trash);
    root.append(picker, main);

    // ---- state -> page ----
    function renderCell(i) {
      const c = cellEls[i], cell = s.cells[i], locked = i >= s.slots;
      c.classList.toggle("hb-locked", locked);
      c.disabled = locked;
      const show = !locked && cell;
      c.classList.toggle("hb-filled", !!show);
      c.classList.toggle("hb-gifted", !!(show && cell.g));
      c.style.setProperty("--rarity", show ? cell.b.color : "");
      c.title = locked ? "Locked slot" : show ? (cell.g ? "Gifted " : "") + cell.b.name : "Empty slot " + (i + 1);
      const hex = c.firstChild;
      const img = hex.querySelector("img");
      if (show) {
        if (img) img.src = icon(cell);
        else {
          const n = el("img");
          Object.assign(n, { src: icon(cell), alt: "", draggable: false });
          hex.append(n);
        }
      } else if (img) img.remove();
    }

    function renderStats() {
      let placed = 0, gifted = 0;
      const per = {};
      for (let i = 0; i < s.slots; i++) {
        const cell = s.cells[i];
        if (!cell) continue;
        placed++;
        if (cell.g) gifted++;
        per[cell.b.rarity] = (per[cell.b.rarity] || 0) + 1;
      }
      const parts = RARITIES.filter(([r]) => per[r]).map(([r]) => `${r} ${per[r]}`);
      stats.textContent = `${placed} / ${s.slots} bees` + (gifted ? `, ${gifted} gifted` : "") + (parts.length ? ` (${parts.join(", ")})` : "");
    }

    function renderTools() {
      for (const [code, b] of pickButtons) b.classList.toggle("hb-active", s.brush && s.brush.code === code);
      for (const b of pickButtons.values()) b.querySelector("img").src = s.gifted ? BY_CODE[b.dataset.code].giftedImg : BY_CODE[b.dataset.code].img;
      giftedBtn.setAttribute("aria-pressed", s.gifted);
      eraseBtn.setAttribute("aria-pressed", s.brush === "erase");
      fillBtn.disabled = !(s.brush && s.brush !== "erase");
      root.classList.toggle("hb-erasing", s.brush === "erase");
      root.classList.toggle("hb-painting", !!s.brush);
      hint.textContent = s.brush === "erase" ? "Eraser: tap bees in the hive to remove them."
        : s.brush ? `Placing ${s.gifted ? "Gifted " : ""}${s.brush.name}: tap hive slots.`
        : "Pick a bee from the list to start placing.";
    }

    function renderAll() {
      slotsInput.value = s.slots;
      layoutGrid();
      for (let i = 0; i < cellEls.length; i++) renderCell(i);
      renderStats();
      renderTools();
    }

    // ---- saving: the hive lives in the link (#slots=25&hive=bsBS--ri) ----
    function encode() {
      let hive = "";
      for (let i = 0; i < s.slots; i++) {
        const cell = s.cells[i];
        hive += cell ? (cell.g ? cell.b.code.toUpperCase() : cell.b.code) : "--";
      }
      hive = hive.replace(/(--)+$/, "");
      return `slots=${s.slots}` + (hive ? `&hive=${hive}` : "");
    }

    function decode(text) {
      const p = new URLSearchParams(text.replace(/^#/, ""));
      if (!p.has("slots") && !p.has("hive")) return false;
      const n = parseInt(p.get("slots"), 10);
      s.slots = n >= MIN_SLOTS ? Math.min(n, MAX_SLOTS) : MIN_SLOTS;
      s.cells.fill(null);
      const hive = p.get("hive") || "";
      for (let i = 0; i < MAX_SLOTS && i * 2 + 1 < hive.length; i++) {
        const code = hive.substr(i * 2, 2);
        const bee = BY_CODE[code.toLowerCase()];
        if (bee) s.cells[i] = { b: bee, g: code !== code.toLowerCase() };
      }
      return true;
    }

    function save() {
      const text = encode();
      history.replaceState(history.state, "", "#" + text);
      try { localStorage.setItem(STORE_KEY, text); } catch (e) { /* storage blocked: the link still has it */ }
    }

    function changed(i) {
      if (i == null) { layoutGrid(); for (let k = 0; k < cellEls.length; k++) renderCell(k); }
      else renderCell(i);
      renderStats();
      save();
    }

    function load() {
      if (decode(location.hash)) return;
      try {
        const saved = localStorage.getItem(STORE_KEY);
        if (saved) decode(saved);
      } catch (e) { /* no saved hive */ }
    }

    // ---- actions ----
    function place(i, bee, gifted) {
      s.cells[i] = { b: bee, g: gifted };
    }

    function setSlots(n) {
      n = Math.max(MIN_SLOTS, Math.min(MAX_SLOTS, parseInt(n, 10) || MIN_SLOTS));
      s.slots = n;
      slotsInput.value = n;
      changed();
    }

    function tapCell(i) {
      if (i >= s.slots) return;
      const cell = s.cells[i];
      if (s.brush === "erase") s.cells[i] = null;
      else if (s.brush) {
        if (cell && cell.b === s.brush && cell.g === s.gifted) s.cells[i] = null;
        else place(i, s.brush, s.gifted);
      }
      else if (cell) cell.g = !cell.g;
      else return;
      changed(i);
    }

    function drop(src, x, y) {
      const target = document.elementFromPoint(x, y);
      const cellEl = target && target.closest(".hb-cell");
      const j = cellEl && root.contains(cellEl) ? +cellEl.dataset.i : -1;
      if (src.bee) {
        if (j >= 0 && j < s.slots) { place(j, src.bee, s.gifted); changed(j); }
        return;
      }
      if (j >= 0 && j < s.slots) {
        [s.cells[src.i], s.cells[j]] = [s.cells[j], s.cells[src.i]];
        changed(src.i); changed(j);
      } else if (!target || !hive.contains(target)) {
        s.cells[src.i] = null;   // dragged out of the hive
        changed(src.i);
      }
    }

    // With a bee (or the eraser) picked, press and drag over slots to fill (or clear) each one.
    // Starting on a slot that already has that bee clears instead.
    let paint = null;
    function paintAt(x, y) {
      const t = document.elementFromPoint(x, y), c = t && t.closest(".hb-cell");
      if (!c || !hive.contains(c)) return;
      const i = +c.dataset.i;
      if (i >= s.slots || paint.done.has(i)) return;
      paint.done.add(i);
      if (paint.clear) {
        if (!s.cells[i]) return;
        s.cells[i] = null;
      } else place(i, s.brush, s.gifted);
      renderCell(i);
      paint.changed = true;
    }

    // Pointer dragging (mouse and touch): from the list to the hive, between slots, or out.
    let drag = null, skipClick = false;
    function press(e, src) {
      if (e.button !== 0) return;
      drag = { src, id: e.pointerId, x: e.clientX, y: e.clientY, ghost: null };
    }
    function move(e) {
      if (paint && e.pointerId === paint.id) { paintAt(e.clientX, e.clientY); e.preventDefault(); return; }
      if (!drag || e.pointerId !== drag.id) return;
      if (!drag.ghost) {
        if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 8) return;
        const g = el("img", "hb-ghost");
        g.src = drag.src.bee ? (s.gifted ? drag.src.bee.giftedImg : drag.src.bee.img) : icon(s.cells[drag.src.i]);
        g.alt = "";
        document.body.append(g);
        drag.ghost = g;
        root.classList.add("hb-dragging");
      }
      drag.ghost.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      e.preventDefault();
    }
    function release(e) {
      if (paint && e.pointerId === paint.id) {
        if (paint.changed) { renderStats(); save(); }
        paint = null;
        return;
      }
      if (!drag || e.pointerId !== drag.id) return;
      const d = drag;
      drag = null;
      if (!d.ghost) return;
      d.ghost.remove();
      root.classList.remove("hb-dragging");
      if (e.type === "pointerup") { skipClick = true; setTimeout(() => (skipClick = false)); drop(d.src, e.clientX, e.clientY); }
    }

    list.addEventListener("pointerdown", e => {
      const b = e.target.closest(".hb-pick");
      if (b) press(e, { bee: BY_CODE[b.dataset.code] });
    });
    hive.addEventListener("pointerdown", e => {
      const c = e.target.closest(".hb-cell");
      if (!c || e.button !== 0) return;
      const i = +c.dataset.i, cell = s.cells[i];
      if (s.brush) {
        if (i >= s.slots) return;
        const clear = s.brush === "erase" || !!(cell && cell.b === s.brush && cell.g === s.gifted);
        paint = { id: e.pointerId, clear, done: new Set(), changed: false };
        paintAt(e.clientX, e.clientY);
        e.preventDefault();
      } else if (cell && i < s.slots) press(e, { i });
    });
    root.addEventListener("click", e => {
      if (skipClick) return;
      const pick = e.target.closest(".hb-pick");
      if (pick) {
        const bee = BY_CODE[pick.dataset.code];
        s.brush = s.brush === bee ? null : bee;
        renderTools();
        return;
      }
      const c = e.target.closest(".hb-cell");
      // a mouse or touch press with a bee picked was already handled by painting
      if (c && !(s.brush && e.detail > 0)) tapCell(+c.dataset.i);
    });
    root.addEventListener("dragstart", e => e.preventDefault());

    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      for (const b of pickButtons.values()) b.hidden = q && !BY_CODE[b.dataset.code].name.toLowerCase().includes(q);
      for (const g of list.children) g.hidden = ![...g.querySelectorAll(".hb-pick")].some(b => !b.hidden);
    });
    minus.addEventListener("click", () => setSlots(s.slots - 1));
    plus.addEventListener("click", () => setSlots(s.slots + 1));
    slotsInput.addEventListener("change", () => setSlots(slotsInput.value));
    giftedBtn.addEventListener("click", () => { s.gifted = !s.gifted; renderTools(); });
    eraseBtn.addEventListener("click", () => { s.brush = s.brush === "erase" ? null : "erase"; renderTools(); });
    fillBtn.addEventListener("click", () => {
      if (!s.brush || s.brush === "erase") return;
      for (let i = 0; i < s.slots; i++) if (!s.cells[i]) s.cells[i] = { b: s.brush, g: s.gifted };
      changed();
    });
    clearBtn.addEventListener("click", () => {
      if (!s.cells.some(Boolean) || !confirm("Remove every bee from the hive?")) return;
      s.cells.fill(null);
      changed();
    });
    linkBtn.addEventListener("click", async () => {
      save();
      try {
        await navigator.clipboard.writeText(location.href);
        linkBtn.textContent = "Link copied";
      } catch (e) {
        prompt("Copy this link:", location.href);
      }
      setTimeout(() => (linkBtn.textContent = "Copy link"), 1500);
    });
    codeBtn.addEventListener("click", async () => {
      const code = hiveCode(s.cells.slice(0, s.slots));
      try {
        await navigator.clipboard.writeText(code);
        codeBtn.textContent = "Code copied";
      } catch (e) {
        prompt("Copy this hive code:", code);
      }
      setTimeout(() => (codeBtn.textContent = "Copy code"), 1500);
    });
    importBtn.addEventListener("click", () => {
      const text = prompt("Paste a hive code from the game:");
      if (text == null || !text.trim()) return;
      const r = readHiveCode(text);
      if (r.error) { alert(r.error); return; }
      if (s.cells.some(Boolean) && !confirm("Replace the bees in your hive with this code?")) return;
      const n = Math.min(r.cells.length, MAX_SLOTS);
      s.cells.fill(null);
      r.cells.slice(0, n).forEach((c, i) => (s.cells[i] = c));
      s.slots = Math.max(s.slots, Math.min(MAX_SLOTS, n));
      slotsInput.value = s.slots;
      changed();
      const notes = [];
      if (r.skipped) notes.push(`${r.skipped} Hell Bee slot${r.skipped > 1 ? "s were" : " was"} left empty.`);
      if (r.cells.length > MAX_SLOTS) notes.push(`Only the first ${MAX_SLOTS} slots fit in the builder.`);
      if (notes.length) alert(notes.join(" "));
    });
    pngBtn.addEventListener("click", () => exportPng(s));

    load();
    renderAll();
    return {
      root, move, release,
      hashChanged() { if (decode(location.hash)) renderAll(); },
    };
  }

  // ---- picture export ----
  function loadImage(src) {
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = src;
    });
  }

  function hexPath(ctx, x, y, w, h) {
    ctx.beginPath();
    ctx.moveTo(x + w * .25, y); ctx.lineTo(x + w * .75, y); ctx.lineTo(x + w, y + h / 2);
    ctx.lineTo(x + w * .75, y + h); ctx.lineTo(x + w * .25, y + h); ctx.lineTo(x, y + h / 2);
    ctx.closePath();
  }

  async function exportPng(s) {
    const W = 96, H = W * HEX_H, pad = 28, head = 64, foot = 36;
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(GRID_W * W + pad * 2);
    const rows = rowsFor(s.slots);
    canvas.height = Math.round(head + gridH(rows) * W + foot);
    const ctx = canvas.getContext("2d");
    const used = [...new Set(s.cells.slice(0, s.slots).filter(Boolean).map(icon))];
    const images = Object.fromEntries(await Promise.all(used.map(async src => [src, await loadImage(src)])));

    ctx.fillStyle = "#0d1819";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const placed = s.cells.slice(0, s.slots).filter(Boolean);
    const gifted = placed.filter(c => c.g).length;
    ctx.fillStyle = "#e8eced";
    ctx.font = "bold 22px system-ui, sans-serif";
    ctx.textBaseline = "middle";
    ctx.fillText("Re://:Swarm hive", pad, 26);
    ctx.font = "15px system-ui, sans-serif";
    ctx.fillStyle = "#b9c3c4";
    ctx.fillText(`${placed.length} / ${s.slots} bees` + (gifted ? ` · ${gifted} gifted` : ""), pad, 50);

    for (let i = 0; i < rows * COLS; i++) {
      const [cx, cy] = cellPos(i, rows);
      const x = pad + cx * W, y = head + cy * W;
      const cell = i < s.slots ? s.cells[i] : null;
      hexPath(ctx, x + 2, y + 2, W - 4, H - 4);
      ctx.fillStyle = i >= s.slots ? "#0f1a1b" : cell ? cell.b.color : "#1a2a2b";
      ctx.fill();
      ctx.lineWidth = cell ? 4 : 2;
      ctx.strokeStyle = !cell ? (i >= s.slots ? "#182627" : "#4a5f60") : cell.g ? "#ffd700" : "#4a5f60";
      ctx.stroke();
      if (!cell) continue;
      const img = images[icon(cell)];
      if (img) {
        const box = W * 0.7, k = Math.min(box / img.width, box / img.height);
        const iw = img.width * k, ih = img.height * k;
        ctx.drawImage(img, x + (W - iw) / 2, y + (H - ih) / 2, iw, ih);
      }
    }
    ctx.fillStyle = "#7d8b8c";
    ctx.font = "13px system-ui, sans-serif";
    ctx.fillText("reswarm.org/hive-builder.html", pad, canvas.height - foot / 2);

    canvas.toBlob(blob => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "reswarm-hive.png";
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }, "image/png");
  }

  // Document-wide listeners are added once; they talk to whichever builder is on the page.
  document.addEventListener("pointermove", e => ui && ui.move(e), { passive: false });
  document.addEventListener("pointerup", e => ui && ui.release(e));
  document.addEventListener("pointercancel", e => ui && ui.release(e));
  window.addEventListener("hashchange", () => ui && document.body.contains(ui.root) && ui.hashChanged());

  const start = () => {
    const root = document.getElementById("hive-builder-app");
    ui = root ? build(root) : null;
  };
  if (typeof document$ !== "undefined") document$.subscribe(start);
  else if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
