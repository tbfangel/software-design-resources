/* Software Design Resources — OKF viewer frontend.
   No dependencies. Data is injected as window.BUNDLE = {name, nodes, edges, facets}. */
(function () {
  "use strict";

  var BUNDLE = window.BUNDLE || { nodes: [], edges: [], facets: {} };
  var NODES = BUNDLE.nodes || [];
  var FACETS = BUNDLE.facets || { sites: [], clusters: [], types: [], years: [] };

  var byId = {};
  NODES.forEach(function (n) { byId[n.id] = n; });

  // Backlinks: target -> [source ids] ("cited by")
  var citedBy = {};
  (BUNDLE.edges || []).forEach(function (e) {
    (citedBy[e.target] = citedBy[e.target] || []).push(e.source);
  });

  // ---------- graph edge model (for the Graph view) ----------
  // Undirected edges combine two signals: authored cite-links (from BUNDLE.edges,
  // mostly intra-cluster — they guarantee connectivity) and tag-similarity links
  // (two cards sharing >= TAG_MIN controlled-vocab tags — these cross clusters/sites).
  var TAG_MIN = 2;
  var GRAPH_EDGES = [];
  var ADJ = {};   // id -> Set(neighbor ids)
  var DEG = {};   // id -> neighbour count
  (function buildGraphEdges() {
    var map = {};
    function key(a, b) { return a < b ? a + " " + b : b + " " + a; }
    function link(a, b) {
      (ADJ[a] = ADJ[a] || Object.create(null))[b] = 1;
      (ADJ[b] = ADJ[b] || Object.create(null))[a] = 1;
    }
    (BUNDLE.edges || []).forEach(function (e) {
      if (!byId[e.source] || !byId[e.target] || e.source === e.target) return;
      var k = key(e.source, e.target);
      (map[k] || (map[k] = { a: e.source, b: e.target, cite: false, tag: 0 })).cite = true;
    });
    var tv = NODES.filter(function (n) { return n.tags && n.tags.length; });
    for (var i = 0; i < tv.length; i++) {
      var A = tv[i], ta = A.tags;
      for (var j = i + 1; j < tv.length; j++) {
        var B = tv[j], tb = B.tags, s = 0;
        for (var t = 0; t < ta.length; t++) if (tb.indexOf(ta[t]) > -1) s++;
        if (s >= TAG_MIN) {
          var k2 = key(A.id, B.id);
          (map[k2] || (map[k2] = { a: A.id, b: B.id, cite: false, tag: 0 })).tag = s;
        }
      }
    }
    Object.keys(map).forEach(function (k) { var o = map[k]; GRAPH_EDGES.push(o); link(o.a, o.b); });
    NODES.forEach(function (n) { DEG[n.id] = ADJ[n.id] ? Object.keys(ADJ[n.id]).length : 0; });
  })();

  // Precompute a lowercase search haystack per node.
  NODES.forEach(function (n) {
    n._hay = [n.title, n.description, n.cluster, n.type, (n.tags || []).join(" "), n.body]
      .join(" ").toLowerCase();
  });

  // Tag vocabulary actually used in the bundle, with card counts (for the tag autocomplete).
  var tagCounts = {};
  NODES.forEach(function (n) { (n.tags || []).forEach(function (t) { tagCounts[t] = (tagCounts[t] || 0) + 1; }); });
  var ALL_TAGS = Object.keys(tagCounts).sort();

  var YEARS = (FACETS.years || []).slice().sort(function (a, b) { return a - b; });
  var YMIN = YEARS.length ? YEARS[0] : null;
  var YMAX = YEARS.length ? YEARS[YEARS.length - 1] : null;

  var state = {
    sites: new Set(),
    clusters: new Set(),
    types: new Set(),
    tags: new Set(),
    yearMin: YMIN,
    yearMax: YMAX,
    search: "",
    sort: "date-desc",
    view: "list"
  };

  // Deterministic colour per site.
  var PALETTE = ["#7a5cff", "#e0568b", "#2ca6a4", "#e08a2b", "#5b8def", "#8a63d2", "#57a639", "#d1495b"];
  var siteColor = {};
  (FACETS.sites || []).forEach(function (s, i) { siteColor[s] = PALETTE[i % PALETTE.length]; });

  // ---------- helpers ----------
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function titleize(slug) {
    if (!slug) return "";
    return slug.split("-").map(function (w) {
      if (["cqrs", "ddd", "tdd", "bdd", "api", "ci", "cd"].indexOf(w) > -1) return w.toUpperCase();
      return w.charAt(0).toUpperCase() + w.slice(1);
    }).join(" ");
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function searchTerms() {
    return state.search.toLowerCase().split(/\s+/).filter(Boolean);
  }
  function yearActive() {
    return YMIN != null && (state.yearMin > YMIN || state.yearMax < YMAX);
  }

  // ---------- filter predicates ----------
  function passSite(n) { return state.sites.size === 0 || state.sites.has(n.site); }
  function passCluster(n) { return state.clusters.size === 0 || state.clusters.has(n.cluster); }
  function passType(n) { return state.types.size === 0 || state.types.has(n.typeBase); }
  function passTag(n) {
    if (state.tags.size === 0) return true;
    var t = n.tags || [];
    var it = state.tags.values(), v;   // OR within the tag dimension (matches the other facets)
    while (!(v = it.next()).done) if (t.indexOf(v.value) > -1) return true;
    return false;
  }
  function passYear(n) {
    if (!yearActive()) return true;
    if (n.year == null) return false;
    return n.year >= state.yearMin && n.year <= state.yearMax;
  }
  function passSearch(n) {
    var t = searchTerms();
    for (var i = 0; i < t.length; i++) if (n._hay.indexOf(t[i]) === -1) return false;
    return true;
  }
  function matchExcept(dim, n) {
    if (dim !== "site" && !passSite(n)) return false;
    if (dim !== "cluster" && !passCluster(n)) return false;
    if (dim !== "type" && !passType(n)) return false;
    if (dim !== "tag" && !passTag(n)) return false;
    if (dim !== "year" && !passYear(n)) return false;
    return passSearch(n);
  }
  function fullMatch(n) {
    return passSite(n) && passCluster(n) && passType(n) && passTag(n) && passYear(n) && passSearch(n);
  }

  // ---------- tag filtering (chips are clickable everywhere they appear) ----------
  function tagChipHtml(t) {
    var on = state.tags.has(t);
    return '<span class="chip clickable' + (on ? " on" : "") + '" data-tag="' + escapeHtml(t) +
      '" role="button" tabindex="0" title="' + (on ? "Remove tag filter" : "Filter by tag") + '">' +
      escapeHtml(t) + "</span>";
  }
  // Re-render the open detail panel so its tag/cluster chips reflect the current filter.
  function refreshOpenDetail() {
    if (elDetail.hidden) return;
    var id = curHash();
    if (id && byId[id]) showDetail(id);
  }
  function toggleTag(t) {
    if (!t) return;
    if (state.tags.has(t)) state.tags.delete(t); else state.tags.add(t);
    apply();
    refreshOpenDetail();
  }
  function clusterPillHtml(slug) {
    var on = state.clusters.has(slug);
    return '<span class="pill clickable' + (on ? " on" : "") + '" data-cluster="' + escapeHtml(slug) +
      '" role="button" tabindex="0" title="' + (on ? "Remove cluster filter" : "Filter by cluster") + '">' +
      escapeHtml(titleize(slug)) + "</span>";
  }
  function toggleCluster(slug) {
    if (!slug) return;
    if (state.clusters.has(slug)) state.clusters.delete(slug); else state.clusters.add(slug);
    facetOpts.forEach(function (o) { if (o.dim === "cluster" && o.value === slug) o.cb.checked = state.clusters.has(slug); });
    apply();
    refreshOpenDetail();
  }
  function renderActiveTags() {
    var box = $("tag-active"), clr = $("tag-clear");
    if (!box) return;
    box.innerHTML = Array.from(state.tags).sort().map(function (t) {
      return '<button type="button" class="tagfilter" data-tag="' + escapeHtml(t) + '">' +
        escapeHtml(t) + '<span class="x">✕</span></button>';
    }).join("");
    if (clr) clr.hidden = !state.tags.size;
  }

  // Free-text tag autocomplete: type to filter the vocabulary, click/Enter to add.
  function initTagSearch() {
    var input = $("tag-input"), suggest = $("tag-suggest"), clr = $("tag-clear");
    if (!input) return;
    var current = [], activeIdx = -1;

    function close() { suggest.hidden = true; suggest.innerHTML = ""; current = []; activeIdx = -1; }
    function highlight(t, q) {
      var i = t.indexOf(q);
      if (i < 0 || !q) return escapeHtml(t);
      return escapeHtml(t.slice(0, i)) + "<b>" + escapeHtml(t.slice(i, i + q.length)) + "</b>" + escapeHtml(t.slice(i + q.length));
    }
    function render(q) {
      current = ALL_TAGS.filter(function (t) { return t.indexOf(q) > -1 && !state.tags.has(t); }).slice(0, 12);
      if (!current.length) { close(); return; }
      activeIdx = 0;
      suggest.innerHTML = current.map(function (t, i) {
        return '<div class="ts-row' + (i === 0 ? " active" : "") + '" data-tag="' + escapeHtml(t) + '">' +
          "<span>" + highlight(t, q) + '</span><span class="ts-n">' + (tagCounts[t] || 0) + "</span></div>";
      }).join("");
      suggest.hidden = false;
    }
    function paint() {
      Array.prototype.forEach.call(suggest.children, function (c, i) { c.classList.toggle("active", i === activeIdx); });
    }
    function pick(t) { toggleTag(t); input.value = ""; close(); input.focus(); }

    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      if (!q) { close(); return; }
      render(q);
    });
    input.addEventListener("keydown", function (e) {
      if (suggest.hidden) return;
      if (e.key === "ArrowDown") { e.preventDefault(); activeIdx = Math.min(current.length - 1, activeIdx + 1); paint(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); activeIdx = Math.max(0, activeIdx - 1); paint(); }
      else if (e.key === "Enter") { e.preventDefault(); if (current[activeIdx]) pick(current[activeIdx]); }
      else if (e.key === "Escape") { e.preventDefault(); close(); }
    });
    // mousedown (not click) so it fires before the input's blur closes the list
    suggest.addEventListener("mousedown", function (e) {
      var r = e.target.closest(".ts-row");
      if (r) { e.preventDefault(); pick(r.getAttribute("data-tag")); }
    });
    input.addEventListener("blur", function () { setTimeout(close, 120); });
    if (clr) clr.addEventListener("click", function () {
      if (state.tags.size) { state.tags.clear(); apply(); refreshOpenDetail(); }
      input.focus();
    });
  }

  function results() {
    var out = NODES.filter(fullMatch);
    var s = state.sort;
    out.sort(function (a, b) {
      if (s === "title") return a.title.localeCompare(b.title);
      var ay = a.year, by = b.year;
      if (ay == null && by == null) return a.title.localeCompare(b.title);
      if (ay == null) return 1;   // undated last
      if (by == null) return -1;
      if (ay !== by) return s === "date-asc" ? ay - by : by - ay;
      return a.title.localeCompare(b.title);
    });
    return out;
  }

  // ---------- inline markdown ----------
  function renderLink(label, url) {
    url = url.trim();
    var hashless = url.split("#")[0];
    if (/^https?:\/\//i.test(url)) {
      return '<a href="' + escapeHtml(url) + '" target="_blank" rel="noopener">' + label + "</a>";
    }
    if (/\.md$/.test(hashless)) {
      var id = hashless.replace(/^\//, "").replace(/\.md$/, "");
      if (byId[id]) return '<a class="xref" href="#' + encodeURIComponent(id) + '" data-nav="' + escapeHtml(id) + '">' + label + "</a>";
      return "<span>" + label + "</span>";
    }
    return '<a href="' + escapeHtml(url) + '">' + label + "</a>";
  }
  function inlineMd(text) {
    var codes = [];
    text = text.replace(/`([^`]+)`/g, function (m, c) { codes.push(c); return "" + (codes.length - 1) + ""; });
    text = escapeHtml(text);
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (m, label, url) { return renderLink(label, url); });
    text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/(^|[^\w*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    text = text.replace(/(^|[^\w_])_([^_\n]+)_(?![\w])/g, "$1<em>$2</em>");
    text = text.replace(/(\d+)/g, function (m, i) { return "<code>" + escapeHtml(codes[+i]) + "</code>"; });
    return text;
  }
  function renderMarkdown(md) {
    var lines = String(md).replace(/\r\n/g, "\n").split("\n");
    var html = [], i = 0;
    while (i < lines.length) {
      var line = lines[i];
      if (/^\s*```/.test(line)) {
        var buf = [];
        i++;
        while (i < lines.length && !/^\s*```/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++; // closing fence
        html.push("<pre><code>" + escapeHtml(buf.join("\n")) + "</code></pre>");
        continue;
      }
      if (/^\s*(---|\*\*\*|___)\s*$/.test(line)) { html.push("<hr>"); i++; continue; }
      var h = line.match(/^(#{1,6})\s+(.*)$/);
      if (h) { var lv = h[1].length; html.push("<h" + lv + ">" + inlineMd(h[2]) + "</h" + lv + ">"); i++; continue; }
      if (/^\s*>\s?/.test(line)) {
        var q = [];
        while (i < lines.length && /^\s*>\s?/.test(lines[i])) { q.push(lines[i].replace(/^\s*>\s?/, "")); i++; }
        html.push("<blockquote>" + inlineMd(q.join(" ")) + "</blockquote>");
        continue;
      }
      if (/^\s*([-*+]|\d+\.)\s+/.test(line)) {
        var ordered = /^\s*\d+\.\s+/.test(line);
        var items = [];
        while (i < lines.length && /^\s*([-*+]|\d+\.)\s+/.test(lines[i])) {
          items.push(lines[i].replace(/^\s*([-*+]|\d+\.)\s+/, "")); i++;
        }
        html.push("<" + (ordered ? "ol" : "ul") + ">" +
          items.map(function (it) { return "<li>" + inlineMd(it) + "</li>"; }).join("") +
          "</" + (ordered ? "ol" : "ul") + ">");
        continue;
      }
      if (/^\s*$/.test(line)) { i++; continue; }
      var para = [];
      while (i < lines.length && !/^\s*$/.test(lines[i]) &&
             !/^\s*(#{1,6}\s|>|```|([-*+]|\d+\.)\s|(---|\*\*\*|___)\s*$)/.test(lines[i])) {
        para.push(lines[i]); i++;
      }
      html.push("<p>" + inlineMd(para.join(" ")) + "</p>");
    }
    return html.join("\n");
  }

  // ---------- DOM refs ----------
  var $ = function (id) { return document.getElementById(id); };
  var elResults = $("results"), elFacets = $("facets"), elDetail = $("detail"),
      elDetailContent = $("detail-content"), elCount = $("result-count"),
      elSearch = $("search"), elSort = $("sort"), elClear = $("clear-filters");

  document.getElementById("bundle-name").textContent = window.BUNDLE_NAME || BUNDLE.name || "OKF Viewer";
  document.title = (window.BUNDLE_NAME || BUNDLE.name || "OKF Viewer") + " — viewer";

  // scrim for detail overlay
  var scrim = el("div"); scrim.id = "scrim"; scrim.hidden = true;
  document.body.appendChild(scrim);
  scrim.addEventListener("click", function () { navTo(""); });

  // ---------- facets ----------
  var facetOpts = []; // {dim, value, root, cntEl}

  function optionRow(dim, value, labelHtml) {
    var row = el("label", "opt");
    var cb = el("input"); cb.type = "checkbox"; cb.value = value;
    var lbl = el("span", "lbl"); lbl.innerHTML = labelHtml;
    var cnt = el("span", "cnt");
    row.appendChild(cb); row.appendChild(lbl); row.appendChild(cnt);
    cb.addEventListener("change", function () {
      var set = state[dim + "s"];
      if (cb.checked) set.add(value); else set.delete(value);
      apply();
    });
    facetOpts.push({ dim: dim, value: value, root: row, cntEl: cnt, cb: cb });
    return row;
  }

  function buildFacets() {
    elFacets.innerHTML = "";

    // Tags — autocomplete search + active-filter pills (top of the sidebar).
    var ft = el("div", "facet tagfacet");
    ft.innerHTML =
      "<h3>Tags</h3>" +
      '<div class="tagsearch">' +
        '<input id="tag-input" type="text" autocomplete="off" spellcheck="false" placeholder="Search tags…">' +
        '<div id="tag-suggest" class="tag-suggest" hidden></div>' +
      "</div>" +
      '<div id="tag-active" class="tagfilters"></div>' +
      '<button id="tag-clear" type="button" class="ghost tag-clear" hidden>Clear all tags</button>';
    elFacets.appendChild(ft);

    // Sites
    if ((FACETS.sites || []).length) {
      var fs = el("div", "facet"); fs.appendChild(el("h3", null, "Site"));
      FACETS.sites.forEach(function (s) {
        var dot = '<span class="site-dot" style="background:' + siteColor[s] + '"></span>';
        fs.appendChild(optionRow("site", s, dot + escapeHtml(s)));
      });
      elFacets.appendChild(fs);
    }

    // Clusters, grouped by site
    var clusters = FACETS.clusters || [];
    if (clusters.length) {
      var fc = el("div", "facet"); fc.appendChild(el("h3", null, "Cluster"));
      var bySite = {};
      clusters.forEach(function (c) { (bySite[c.site] = bySite[c.site] || []).push(c.slug); });
      Object.keys(bySite).sort().forEach(function (site) {
        var grp = el("div", "facet-group-label", site); fc.appendChild(grp);
        bySite[site].sort().forEach(function (slug) {
          fc.appendChild(optionRow("cluster", slug, escapeHtml(titleize(slug))));
        });
      });
      elFacets.appendChild(fc);
    }

    // Types
    if ((FACETS.types || []).length) {
      var ft = el("div", "facet"); ft.appendChild(el("h3", null, "Type"));
      FACETS.types.forEach(function (t) {
        ft.appendChild(optionRow("type", t, escapeHtml(titleize(t))));
      });
      elFacets.appendChild(ft);
    }

    // Year range
    if (YEARS.length > 1) {
      var fy = el("div", "facet"); fy.appendChild(el("h3", null, "Year"));
      var wrap = el("div", "year-range");
      var from = el("select"), to = el("select");
      YEARS.forEach(function (y) {
        var o1 = el("option", null, y); o1.value = y; from.appendChild(o1);
        var o2 = el("option", null, y); o2.value = y; to.appendChild(o2);
      });
      from.value = state.yearMin; to.value = state.yearMax;
      from.addEventListener("change", function () {
        state.yearMin = +from.value;
        if (state.yearMin > state.yearMax) { state.yearMax = state.yearMin; to.value = to.value = state.yearMax; }
        apply();
      });
      to.addEventListener("change", function () {
        state.yearMax = +to.value;
        if (state.yearMax < state.yearMin) { state.yearMin = state.yearMax; from.value = state.yearMin; }
        apply();
      });
      state._yearFrom = from; state._yearTo = to;
      wrap.appendChild(from); wrap.appendChild(el("span", "muted", "–")); wrap.appendChild(to);
      fy.appendChild(wrap);
      elFacets.appendChild(fy);
    }
  }

  function updateFacetCounts() {
    facetOpts.forEach(function (o) {
      var c = 0;
      for (var i = 0; i < NODES.length; i++) {
        var n = NODES[i];
        if (!matchExcept(o.dim, n)) continue;
        if (o.dim === "site" && n.site === o.value) c++;
        else if (o.dim === "cluster" && n.cluster === o.value) c++;
        else if (o.dim === "type" && n.typeBase === o.value) c++;
      }
      o.cntEl.textContent = c;
      o.root.classList.toggle("zero", c === 0 && !o.cb.checked);
    });
  }

  // ---------- results ----------
  function typeChip(n) {
    if (n.kind === "synthesis") return '<span class="chip synth">Synthesis</span>';
    return '<span class="chip type">' + escapeHtml(titleize(n.typeBase)) + "</span>";
  }
  function renderResults() {
    var list = results();
    elCount.textContent = list.length + (list.length === 1 ? " card" : " cards");
    elResults.innerHTML = "";
    if (!list.length) {
      elResults.appendChild(el("div", "empty", "No cards match these filters."));
      return;
    }
    var frag = document.createDocumentFragment();
    var selected = curHash();
    list.forEach(function (n) {
      var card = el("article", "card" + (n.id === selected ? " selected" : ""));
      card.tabIndex = 0;
      var meta = el("div", "meta");
      meta.innerHTML =
        typeChip(n) +
        '<span class="site"><span class="site-dot" style="background:' + siteColor[n.site] + '"></span>' + escapeHtml(n.site) + "</span>" +
        (n.cluster ? clusterPillHtml(n.cluster) : "") +
        (n.year != null ? '<span class="year">' + n.year + "</span>" : "");
      card.appendChild(meta);
      card.appendChild(el("h2", null, n.title));
      if (n.description) card.appendChild(el("p", "desc", n.description));
      if (n.tags && n.tags.length) {
        var tags = el("div", "tags");
        tags.innerHTML = n.tags.slice(0, 6).map(tagChipHtml).join("");
        card.appendChild(tags);
      }
      card.addEventListener("click", function (e) {
        var tg = e.target.closest && e.target.closest("[data-tag]");
        if (tg) { toggleTag(tg.getAttribute("data-tag")); return; }
        var cl = e.target.closest && e.target.closest("[data-cluster]");
        if (cl) { toggleCluster(cl.getAttribute("data-cluster")); return; }
        navTo(n.id);
      });
      card.addEventListener("keydown", function (e) {
        if (e.key !== "Enter") return;
        var tg = e.target.closest && e.target.closest("[data-tag]");
        if (tg) { toggleTag(tg.getAttribute("data-tag")); return; }
        var cl = e.target.closest && e.target.closest("[data-cluster]");
        if (cl) { toggleCluster(cl.getAttribute("data-cluster")); return; }
        navTo(n.id);
      });
      frag.appendChild(card);
    });
    elResults.appendChild(frag);
  }

  // ---------- detail ----------
  function showDetail(id) {
    var n = byId[id];
    if (!n) return closeDetail();
    var parts = [];
    parts.push('<div class="d-meta">' + typeChip(n) +
      '<span class="site"><span class="site-dot" style="background:' + siteColor[n.site] + '"></span>' + escapeHtml(n.site) + "</span>" +
      (n.cluster ? clusterPillHtml(n.cluster) : "") +
      (n.year != null ? '<span class="year">' + n.year + "</span>" : "") + "</div>");
    parts.push("<h1>" + escapeHtml(n.title) + "</h1>");
    if (n.description) parts.push('<p class="d-desc">' + escapeHtml(n.description) + "</p>");
    if (n.resource) parts.push('<a class="d-source" href="' + escapeHtml(n.resource) + '" target="_blank" rel="noopener">Open source ↗</a>');
    if (n.tags && n.tags.length) {
      parts.push('<div class="d-tags">' + n.tags.map(tagChipHtml).join("") + "</div>");
    }
    parts.push('<div class="md">' + renderMarkdown(stripLeadLine(n)) + "</div>");

    var backs = (citedBy[n.id] || []).filter(function (s) { return byId[s]; });
    if (backs.length) {
      parts.push('<div class="d-section-label">Cited by</div>');
      backs.forEach(function (sid) {
        var s = byId[sid];
        parts.push('<a class="backlink xref" href="#' + encodeURIComponent(sid) + '" data-nav="' + escapeHtml(sid) +
          '"><span class="bl-title">' + escapeHtml(s.title) + '</span><span class="bl-sub">' +
          escapeHtml(s.site) + (s.year != null ? " · " + s.year : "") + "</span></a>");
      });
    }

    elDetailContent.innerHTML = parts.join("\n");
    elDetail.hidden = false;
    if (isNarrow()) scrim.hidden = false;
    elDetail.scrollTop = 0;
    // re-mark selected card
    Array.prototype.forEach.call(elResults.children, function (c) { c.classList.remove("selected"); });
  }
  function stripLeadLine(n) {
    // The body starts "# Title\n\n> description" — drop the H1 + lead quote (shown in the header already).
    var body = n.body || "";
    body = body.replace(/^\s*#\s+.*\n+/, "");
    body = body.replace(/^\s*>\s?.*(\n>.*)*\n*/, "");
    return body;
  }
  function closeDetail() {
    elDetail.hidden = true;
    scrim.hidden = true;
    if (state.view === "graph") Graph.select("");
    else renderResults(); // restore selected highlight state
  }
  function isNarrow() { return window.matchMedia("(max-width: 860px)").matches; }

  elDetailContent.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-nav]");
    if (a) { e.preventDefault(); navTo(a.getAttribute("data-nav")); return; }
    var tg = e.target.closest("[data-tag]");
    if (tg) { toggleTag(tg.getAttribute("data-tag")); return; }
    var cl = e.target.closest("[data-cluster]");
    if (cl) { toggleCluster(cl.getAttribute("data-cluster")); }
  });
  $("detail-close").addEventListener("click", function () { navTo(""); });

  // ---------- navigation via hash ----------
  function curHash() {
    var h = location.hash.slice(1);
    try { return decodeURIComponent(h); } catch (e) { return h; }
  }
  function navTo(id) { location.hash = id ? "#" + encodeURIComponent(id) : ""; }
  function syncFromHash() {
    var id = curHash();
    if (id && byId[id]) { showDetail(id); markSelected(id); if (state.view === "graph") Graph.select(id); }
    else closeDetail();
  }
  function markSelected(id) {
    Array.prototype.forEach.call(elResults.children, function (c) { c.classList.remove("selected"); });
  }
  window.addEventListener("hashchange", syncFromHash);

  // ---------- controls ----------
  var searchDebounce;
  elSearch.addEventListener("input", function () {
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(function () { state.search = elSearch.value.trim(); apply(); }, 120);
  });
  elSort.addEventListener("change", function () { state.sort = elSort.value; renderResults(); });
  elFacets.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".tagfilter");
    if (b) toggleTag(b.getAttribute("data-tag"));
  });
  elClear.addEventListener("click", function () {
    state.sites.clear(); state.clusters.clear(); state.types.clear(); state.tags.clear();
    state.yearMin = YMIN; state.yearMax = YMAX;
    state.search = ""; elSearch.value = "";
    facetOpts.forEach(function (o) { o.cb.checked = false; });
    if (state._yearFrom) { state._yearFrom.value = YMIN; state._yearTo.value = YMAX; }
    apply();
    refreshOpenDetail();
  });

  function anyFilterActive() {
    return state.sites.size || state.clusters.size || state.types.size || state.tags.size || yearActive() || state.search;
  }
  function apply() {
    if (state.view === "graph") {
      var list = results();
      elCount.textContent = list.length + (list.length === 1 ? " card" : " cards");
      Graph.setVisible(list);
    } else {
      renderResults();
    }
    renderActiveTags();
    updateFacetCounts();
    elClear.hidden = !anyFilterActive();
  }

  // ---------- theme ----------
  var themeBtn = $("theme-toggle");
  function currentTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("okf-theme", t); } catch (e) {}
    themeBtn.textContent = t === "dark" ? "☀" : "☾";
    if (typeof Graph !== "undefined" && Graph.isActive()) Graph.refreshTheme();
  }
  (function initTheme() {
    var saved;
    try { saved = localStorage.getItem("okf-theme"); } catch (e) {}
    applyTheme(saved || currentTheme());
  })();
  themeBtn.addEventListener("click", function () { applyTheme(currentTheme() === "dark" ? "light" : "dark"); });

  // ---------- keyboard ----------
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!elDetail.hidden) navTo("");
      else if (document.activeElement === elSearch && elSearch.value) { elSearch.value = ""; state.search = ""; apply(); }
    }
    var ae = document.activeElement;
    var typing = ae && (ae.tagName === "INPUT" || ae.tagName === "TEXTAREA" || ae.tagName === "SELECT");
    if (e.key === "/" && !typing) { e.preventDefault(); elSearch.focus(); }
  });

  // ---------- graph view ----------
  var Graph = (function () {
    var canvas = $("graph-canvas"), gWrap = $("graph"), elInfo = $("graph-info");
    var ctx = null, active = false, raf = null, running = false;
    var cssW = 0, cssH = 0, dpr = 1;

    // persistent per-node physics state, keyed by id (survives filtering)
    var pos = {};                 // id -> {x,y,vx,vy,pinned}
    var S = [];                   // visible sim nodes: {id,node,st,r}
    var SE = [];                  // visible edges: {a,b,cite,tag}
    var visible = Object.create(null);
    var selectedId = "";

    var view = { k: 1, tx: 0, ty: 0 };
    var vTarget = { k: 1, tx: 0, ty: 0 };   // camera eases toward this
    var firstFit = true;                     // snap camera on first show, ease afterwards
    var autoFit = true;
    var hoverId = null, dragId = null, panning = false;
    var hoverEdgeTag = {};   // neighbourId -> connecting tag slug (or CITE_KEY) for the hovered node
    var CITE_KEY = " cite";
    var down = null;              // {x,y,moved}
    var alpha = 0;

    // tunables
    var REP = 3000, GRAVITY = 0.028, DAMP = 0.85, ALPHA_MIN = 0.02, ALPHA_DECAY = 0.985;
    var SPRING = 0.02, MAXV = 40, WARMUP = 170;

    var COL = {};
    function cssVar(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
    function hexToRgb(h) {
      h = (h || "").replace("#", "");
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      var n = parseInt(h || "888888", 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }
    function rgba(c, a) { return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")"; }

    // Stable per-tag colour from a hash -> hue (there are ~220 tags, too many for a
    // hand palette). Lightness/saturation is tuned per theme for legibility.
    var tagColorCache = {};
    function hashStr(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
    function hslToRgb(h, s, l) {
      h /= 360; s /= 100; l /= 100;
      function f(p, q, t) { if (t < 0) t += 1; if (t > 1) t -= 1; if (t < 1 / 6) return p + (q - p) * 6 * t; if (t < 1 / 2) return q; if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6; return p; }
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
      return [Math.round(f(p, q, h + 1 / 3) * 255), Math.round(f(p, q, h) * 255), Math.round(f(p, q, h - 1 / 3) * 255)];
    }
    function tagColor(slug) {
      var key = slug + (COL.dark ? "|d" : "|l");
      if (tagColorCache[key]) return tagColorCache[key];
      var hue = hashStr(slug) % 360;
      return (tagColorCache[key] = COL.dark ? hslToRgb(hue, 67, 64) : hslToRgb(hue, 60, 43));
    }
    function citeRGB() { return COL.dark ? [140, 160, 190] : [84, 100, 132]; }

    function refreshTheme() {
      COL.faint = hexToRgb(cssVar("--faint"));
      COL.accent = hexToRgb(cssVar("--accent"));
      COL.ink = hexToRgb(cssVar("--ink"));
      COL.muted = hexToRgb(cssVar("--muted"));
      COL.panel = cssVar("--panel") || "#fff";
      COL.dark = (0.299 * COL.ink[0] + 0.587 * COL.ink[1] + 0.114 * COL.ink[2]) > 140;
      tagColorCache = {};
      if (active) draw();
    }

    function radius(id) { return Math.max(4, Math.min(17, 4 + Math.sqrt(DEG[id] || 0) * 1.7)); }

    function ensurePos(id, seedX, seedY) {
      if (pos[id]) return pos[id];
      var ang = Math.random() * Math.PI * 2, rad = 40 + Math.random() * 160;
      return (pos[id] = {
        x: (seedX || 0) + Math.cos(ang) * rad,
        y: (seedY || 0) + Math.sin(ang) * rad,
        vx: 0, vy: 0, pinned: false
      });
    }

    function setVisible(list) {
      // centroid of nodes already placed, to seed newcomers near the action
      var cx = 0, cy = 0, c = 0;
      list.forEach(function (n) { var p = pos[n.id]; if (p) { cx += p.x; cy += p.y; c++; } });
      if (c) { cx /= c; cy /= c; }
      visible = Object.create(null);
      list.forEach(function (n) { visible[n.id] = 1; });
      S = list.map(function (n) {
        return { id: n.id, node: n, st: ensurePos(n.id, cx, cy), r: radius(n.id), kind: n.kind };
      });
      SE = [];
      for (var i = 0; i < GRAPH_EDGES.length; i++) {
        var e = GRAPH_EDGES[i];
        if (visible[e.a] && visible[e.b]) SE.push(e);
      }
      // When tags are filtered, the >=2-shared-tags rule is too strict: the user
      // expects cards sharing a *selected* tag to be linked. Add those edges here
      // (deduped against the ones already present), so filtering reveals the group.
      if (state.tags.size) {
        var sel = Array.from(state.tags), have = Object.create(null);
        for (i = 0; i < SE.length; i++) { var s0 = SE[i]; have[s0.a < s0.b ? s0.a + " " + s0.b : s0.b + " " + s0.a] = 1; }
        for (i = 0; i < S.length; i++) {
          var na = S[i].node, ta = na.tags || [];
          for (var j = i + 1; j < S.length; j++) {
            var nb = S[j].node, tb = nb.tags || [], sc = 0;
            for (var k = 0; k < sel.length; k++) if (ta.indexOf(sel[k]) > -1 && tb.indexOf(sel[k]) > -1) sc++;
            if (!sc) continue;
            var key = na.id < nb.id ? na.id + " " + nb.id : nb.id + " " + na.id;
            if (have[key]) continue;
            have[key] = 1;
            SE.push({ a: na.id, b: nb.id, cite: false, tag: sc });
          }
        }
      }
      // Pre-settle off-screen so the opening isn't a violent explosion; the user
      // sees a nearly-relaxed layout that only eases into its final position.
      // Full settle on first open; positions persist across filters, so later
      // filter changes only need a light relax of any newcomers.
      alpha = firstFit ? 0.6 : 0.35;
      var iters = firstFit ? WARMUP : 55;
      for (var s = 0; s < iters; s++) step();
      alpha = 0.05;           // gentle residual motion only
      autoFit = true;
      fitTo(firstFit);        // snap camera the first time, ease on later filters
      firstFit = false;
      ensureRaf();
    }

    function step() {
      var n = S.length, i, j, a, b, dx, dy, d2, d, f;
      for (i = 0; i < n; i++) { a = S[i].st; a.fx = 0; a.fy = 0; }
      // repulsion (naive O(n^2) — fine at this scale)
      for (i = 0; i < n; i++) {
        a = S[i].st;
        for (j = i + 1; j < n; j++) {
          b = S[j].st;
          dx = a.x - b.x; dy = a.y - b.y;
          d2 = dx * dx + dy * dy || 0.01;
          if (d2 > 1000000) continue;            // ignore only very-distant pairs
          f = REP / d2;
          d = Math.sqrt(d2);
          var ux = dx / d, uy = dy / d;
          a.fx += ux * f; a.fy += uy * f;
          b.fx -= ux * f; b.fy -= uy * f;
        }
      }
      // springs
      for (i = 0; i < SE.length; i++) {
        var e = SE[i], pa = pos[e.a], pb = pos[e.b];
        dx = pb.x - pa.x; dy = pb.y - pa.y;
        d = Math.sqrt(dx * dx + dy * dy) || 0.01;
        var rest = e.tag ? Math.max(60, 130 - 14 * e.tag) : 66;
        var strength = SPRING * (e.cite ? 1 : 0.55) + (e.tag ? SPRING * 0.12 * e.tag : 0);
        f = (d - rest) * strength;
        var ex = dx / d * f, ey = dy / d * f;
        pa.fx += ex; pa.fy += ey; pb.fx -= ex; pb.fy -= ey;
      }
      // gravity to centre + integrate
      for (i = 0; i < n; i++) {
        a = S[i].st;
        if (a === (dragId && pos[dragId])) continue;
        a.fx += -a.x * GRAVITY; a.fy += -a.y * GRAVITY;
        if (a.pinned) { a.vx = 0; a.vy = 0; continue; }
        a.vx = (a.vx + a.fx * alpha) * DAMP;
        a.vy = (a.vy + a.fy * alpha) * DAMP;
        var sp = Math.sqrt(a.vx * a.vx + a.vy * a.vy);
        if (sp > MAXV) { a.vx = a.vx / sp * MAXV; a.vy = a.vy / sp * MAXV; }
        a.x += a.vx; a.y += a.vy;
      }
      alpha *= ALPHA_DECAY;
    }

    // Compute the framing that fits all visible nodes into vTarget; snap the
    // live view to it on first show, otherwise let frame() ease toward it.
    function fitTo(snap) {
      if (!S.length) return;
      var minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
      for (var i = 0; i < S.length; i++) {
        var p = S[i].st;
        if (p.x < minx) minx = p.x; if (p.x > maxx) maxx = p.x;
        if (p.y < miny) miny = p.y; if (p.y > maxy) maxy = p.y;
      }
      var pad = 70, w = (maxx - minx) || 1, h = (maxy - miny) || 1;
      var k = Math.min((cssW - pad) / w, (cssH - pad) / h);
      k = Math.max(0.12, Math.min(2.0, k));
      vTarget.k = k;
      vTarget.tx = cssW / 2 - (minx + maxx) / 2 * k;
      vTarget.ty = cssH / 2 - (miny + maxy) / 2 * k;
      if (snap) { view.k = vTarget.k; view.tx = vTarget.tx; view.ty = vTarget.ty; }
    }

    function toScreen(p) { return [p.x * view.k + view.tx, p.y * view.k + view.ty]; }
    function toWorld(sx, sy) { return [(sx - view.tx) / view.k, (sy - view.ty) / view.k]; }

    function draw() {
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cssW, cssH);
      var hov = hoverId, hoverAdj = hov ? ADJ[hov] : null;

      // edges — when hovering, non-incident edges are dimmed and the hovered node's
      // edges are drawn on top, coloured by their connecting tag (or the cite colour).
      function seg(pa, pb) { var A = toScreen(pa), B = toScreen(pb); ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke(); }
      var incidentEdges = [];
      for (var i = 0; i < SE.length; i++) {
        var e = SE[i];
        if (hov && (e.a === hov || e.b === hov)) { incidentEdges.push(e); continue; }
        if (hov) { ctx.strokeStyle = rgba(COL.faint, 0.05); ctx.lineWidth = 0.8; }
        else {
          ctx.strokeStyle = e.cite ? rgba(COL.muted, 0.32) : rgba(COL.faint, Math.min(0.26, 0.08 + 0.05 * e.tag));
          ctx.lineWidth = e.cite ? 1 : 0.8;
        }
        seg(pos[e.a], pos[e.b]);
      }
      for (i = 0; i < incidentEdges.length; i++) {
        var ie = incidentEdges[i];
        var oid = ie.a === hov ? ie.b : ie.a;
        var tg = hoverEdgeTag[oid];
        var col = tg === CITE_KEY ? citeRGB() : (tg ? tagColor(tg) : COL.accent);
        ctx.strokeStyle = rgba(col, 0.95); ctx.lineWidth = 2;
        seg(pos[ie.a], pos[ie.b]);
      }

      // nodes
      var labels = [];
      for (i = 0; i < S.length; i++) {
        var s = S[i], p = s.st, sc = toScreen(p), r = s.r;
        var dim = hov && s.id !== hov && !(hoverAdj && hoverAdj[s.id]);
        var col = siteColor[s.node.site] || "#888";
        ctx.globalAlpha = dim ? 0.25 : 1;
        ctx.beginPath(); ctx.arc(sc[0], sc[1], r, 0, Math.PI * 2);
        ctx.fillStyle = col; ctx.fill();
        if (s.kind === "synthesis") {
          // cluster hub: solid disc with a crisp outer ring so it stands out from leaf donuts
          ctx.lineWidth = 2; ctx.strokeStyle = rgba(COL.ink, 0.5); ctx.stroke();
        } else {
          // concept leaf: a donut — separation ring against overlaps + a punched centre
          ctx.lineWidth = 1.4; ctx.strokeStyle = COL.panel; ctx.stroke();
          ctx.beginPath(); ctx.arc(sc[0], sc[1], Math.max(1.6, r * 0.42), 0, Math.PI * 2);
          ctx.fillStyle = COL.panel; ctx.fill();
        }
        if (s.id === selectedId) {
          ctx.globalAlpha = 1; ctx.lineWidth = 2.5;
          ctx.strokeStyle = rgba(COL.accent, 1);
          ctx.beginPath(); ctx.arc(sc[0], sc[1], r + 3.5, 0, Math.PI * 2); ctx.stroke();
        }
        ctx.globalAlpha = 1;
        var showLabel = s.id === hov || (hoverAdj && hoverAdj[s.id]) || s.id === selectedId
          || (!hov && (S.length <= 55 || (view.k > 1.15 && r >= 9)));
        if (showLabel) labels.push({ s: s, sc: sc, r: r, strong: s.id === hov || s.id === selectedId });
      }

      // labels (capped, drawn on top)
      labels.sort(function (a, b) { return b.r - a.r; });
      ctx.font = "600 11.5px " + (cssVar("--sans") || "system-ui, sans-serif");
      ctx.textBaseline = "middle";
      for (i = 0; i < labels.length && i < 46; i++) {
        var L = labels[i], txt = L.s.node.title;
        if (txt.length > 42) txt = txt.slice(0, 40) + "…";
        var tx = L.sc[0] + L.r + 4, ty = L.sc[1];
        var w = ctx.measureText(txt).width;
        ctx.fillStyle = rgba(hexToRgb(cssVar("--panel")), 0.72);
        ctx.fillRect(tx - 2, ty - 8, w + 4, 16);
        ctx.fillStyle = L.strong ? rgba(COL.ink, 1) : rgba(COL.muted, 1);
        ctx.fillText(txt, tx, ty);
      }
    }

    function frame() {
      if (!active) { running = false; raf = null; return; }
      var moving = alpha > ALPHA_MIN || dragId;
      if (moving) step();
      var camMoving = false;
      if (autoFit) {
        if (moving) fitTo(false);   // keep target current while nodes still drift
        view.k += (vTarget.k - view.k) * 0.16;
        view.tx += (vTarget.tx - view.tx) * 0.16;
        view.ty += (vTarget.ty - view.ty) * 0.16;
        camMoving = Math.abs(vTarget.k - view.k) > 1e-3 ||
          Math.abs(vTarget.tx - view.tx) > 0.3 || Math.abs(vTarget.ty - view.ty) > 0.3;
      }
      draw();
      if (moving || camMoving) raf = requestAnimationFrame(frame);
      else { running = false; raf = null; }
    }
    function ensureRaf() { if (!running && active) { running = true; raf = requestAnimationFrame(frame); } }
    function kick(a) { alpha = Math.max(alpha, a || 0.5); ensureRaf(); }

    function resize() {
      var rect = gWrap.getBoundingClientRect();
      cssW = Math.max(50, rect.width); cssH = Math.max(50, rect.height);
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(cssW * dpr); canvas.height = Math.round(cssH * dpr);
      canvas.style.width = cssW + "px"; canvas.style.height = cssH + "px";
      if (active) { if (autoFit) fitTo(true); draw(); }
    }

    function pickNode(sx, sy) {
      for (var i = S.length - 1; i >= 0; i--) {
        var s = S[i], sc = toScreen(s.st);
        var dx = sx - sc[0], dy = sy - sc[1];
        if (dx * dx + dy * dy <= (s.r + 3) * (s.r + 3)) return s;
      }
      return null;
    }
    function evtPos(e) {
      var rect = canvas.getBoundingClientRect();
      return [e.clientX - rect.left, e.clientY - rect.top];
    }

    // Hover panel: which tags connect the hovered node to its neighbours. Also
    // records, per neighbour, the connecting tag used to colour that edge (draw()).
    function updateInfo() {
      hoverEdgeTag = {};
      if (!elInfo) return;
      if (!hoverId || !visible[hoverId]) { elInfo.hidden = true; elInfo.innerHTML = ""; return; }
      var h = byId[hoverId], ht = h.tags || [];
      var counts = Object.create(null), cites = 0, tagNbrs = 0;
      var shareByNbr = [];   // {oid, shared:[slugs]}
      for (var i = 0; i < SE.length; i++) {
        var e = SE[i];
        if (e.a !== hoverId && e.b !== hoverId) continue;
        var oid = e.a === hoverId ? e.b : e.a, o = byId[oid];
        var shared = [];
        if (e.tag && o.tags) {
          for (var t = 0; t < ht.length; t++) if (o.tags.indexOf(ht[t]) > -1) shared.push(ht[t]);
        }
        if (shared.length) {
          tagNbrs++;
          shared.forEach(function (s) { counts[s] = (counts[s] || 0) + 1; });
          shareByNbr.push({ oid: oid, shared: shared });
        } else if (e.cite) {
          hoverEdgeTag[oid] = CITE_KEY;   // cite-only link
        }
        if (e.cite) cites++;
      }
      var pairs = Object.keys(counts).map(function (k) { return { tag: k, n: counts[k] }; })
        .sort(function (a, b) { return b.n - a.n || a.tag.localeCompare(b.tag); });
      var rank = {};
      pairs.forEach(function (p, i) { rank[p.tag] = i; });
      // colour each tag-edge by its most prominent shared tag (lowest rank)
      shareByNbr.forEach(function (r) {
        var best = r.shared[0];
        for (var k = 1; k < r.shared.length; k++) if (rank[r.shared[k]] < rank[best]) best = r.shared[k];
        hoverEdgeTag[r.oid] = best;
      });

      var typeLabel = h.kind === "synthesis" ? "Cluster synthesis" : titleize(h.typeBase);
      var html = '<div class="gi-title">' + escapeHtml(h.title) + "</div>" +
        '<div class="gi-type">' + escapeHtml(typeLabel) + "</div>";
      if (pairs.length) {
        html += '<div class="gi-head">Connected by tag</div><div class="gi-tags">';
        pairs.slice(0, 10).forEach(function (p) {
          var c = tagColor(p.tag);
          html += '<span class="gi-chip"><span class="gi-dot" style="background:rgb(' +
            c[0] + "," + c[1] + "," + c[2] + ')"></span>' + escapeHtml(p.tag) +
            '<span class="gi-n">' + p.n + "</span></span>";
        });
        html += "</div>";
        if (pairs.length > 10) html += '<div class="gi-more">+' + (pairs.length - 10) + " more</div>";
      }
      if (cites) {
        var cc = citeRGB();
        html += '<div class="gi-foot"><span class="gi-dot" style="background:rgb(' +
          cc[0] + "," + cc[1] + "," + cc[2] + ')"></span>' + cites + " cite" + (cites > 1 ? "s" : "") + "</div>";
      }
      elInfo.innerHTML = html;
      elInfo.hidden = false;
    }
    function setHover(id) {
      if (id === hoverId) return;
      hoverId = id; updateInfo(); if (!running) draw();
    }

    canvas.addEventListener("pointerdown", function (e) {
      var p = evtPos(e); canvas.setPointerCapture(e.pointerId);
      down = { x: p[0], y: p[1], moved: false };
      var hit = pickNode(p[0], p[1]);
      if (hit) { dragId = hit.id; hit.st.pinned = true; canvas.classList.add("grabbing"); }
      else { panning = true; canvas.classList.add("grabbing"); }
    });
    canvas.addEventListener("pointermove", function (e) {
      var p = evtPos(e);
      if (down && (Math.abs(p[0] - down.x) + Math.abs(p[1] - down.y)) > 3) down.moved = true;
      if (dragId) {
        var w = toWorld(p[0], p[1]), st = pos[dragId];
        st.x = w[0]; st.y = w[1]; st.vx = 0; st.vy = 0;
        autoFit = false; kick(0.35);
      } else if (panning) {
        view.tx += p[0] - down.x; view.ty += p[1] - down.y;
        down.x = p[0]; down.y = p[1]; autoFit = false; if (!running) draw();
      } else {
        var hit = pickNode(p[0], p[1]);
        canvas.classList.toggle("pickable", !!hit);
        setHover(hit ? hit.id : null);
      }
    });
    canvas.addEventListener("pointerleave", function () { setHover(null); });
    function endPointer(e) {
      if (dragId && down && !down.moved) { pos[dragId].pinned = false; }
      if (down && !down.moved && !dragId) { /* background click: no-op */ }
      if (down && !down.moved) {
        var hit = pickNode(down.x, down.y);
        if (hit) onPick(hit.id);
      }
      dragId = null; panning = false; down = null;
      canvas.classList.remove("grabbing");
    }
    canvas.addEventListener("pointerup", endPointer);
    canvas.addEventListener("pointercancel", endPointer);
    canvas.addEventListener("dblclick", function (e) {
      var p = evtPos(e), hit = pickNode(p[0], p[1]);
      if (hit) { hit.st.pinned = false; kick(0.4); }
    });
    canvas.addEventListener("wheel", function (e) {
      e.preventDefault();
      var p = evtPos(e), before = toWorld(p[0], p[1]);
      var factor = Math.exp(-e.deltaY * 0.0015);
      view.k = Math.max(0.08, Math.min(4, view.k * factor));
      view.tx = p[0] - before[0] * view.k;
      view.ty = p[1] - before[1] * view.k;
      autoFit = false; if (!running) draw();
    }, { passive: false });

    var onPick = function () {};
    var ro = null;

    function activate(list, selId, pickCb) {
      active = true; onPick = pickCb || onPick; selectedId = selId || "";
      firstFit = true;   // snap the camera when the view is (re)opened
      if (!ctx) ctx = canvas.getContext("2d");
      refreshTheme();
      resize();
      if (ro == null && "ResizeObserver" in window) {
        ro = new ResizeObserver(function () { if (active) resize(); });
        ro.observe(gWrap);
      }
      setVisible(list);
    }
    function deactivate() {
      active = false; running = false; if (raf) cancelAnimationFrame(raf); raf = null;
      hoverId = null; if (elInfo) elInfo.hidden = true;
    }
    function select(id) { selectedId = id || ""; if (active && !running) draw(); }
    function resetView() {
      Object.keys(pos).forEach(function (k) { pos[k].pinned = false; });
      autoFit = true; alpha = Math.max(alpha, 0.12); fitTo(false); ensureRaf();
    }

    return {
      activate: activate, deactivate: deactivate, setVisible: setVisible,
      select: select, refreshTheme: refreshTheme, resetView: resetView,
      isActive: function () { return active; }
    };
  })();

  var elGraph = $("graph");
  $("graph-reset").addEventListener("click", function () { Graph.resetView(); });

  function setView(v) {
    if (v === state.view) return;
    state.view = v;
    var g = v === "graph";
    $("view-graph").classList.toggle("active", g);
    $("view-list").classList.toggle("active", !g);
    $("view-graph").setAttribute("aria-selected", g ? "true" : "false");
    $("view-list").setAttribute("aria-selected", g ? "false" : "true");
    elResults.hidden = g;
    elGraph.hidden = !g;
    if (g) Graph.activate(results(), curHash(), navTo);
    else { Graph.deactivate(); renderResults(); }
  }
  $("view-list").addEventListener("click", function () { setView("list"); });
  $("view-graph").addEventListener("click", function () { setView("graph"); });

  (function buildGraphLegend() {
    var lg = $("graph-legend");
    if (!lg) return;
    var html = '<div class="lg-head">Site</div>';
    (FACETS.sites || []).forEach(function (s) {
      html += '<div class="lg-row"><span class="lg-dot" style="background:' + siteColor[s] + '"></span>' + escapeHtml(s) + "</div>";
    });
    html += '<div class="lg-head" style="margin-top:6px">Link</div>' +
      '<div class="lg-row"><span class="lg-line" style="border-top:2px solid #6b7a99"></span>cites</div>' +
      '<div class="lg-row"><span class="lg-line" style="border-top:2px solid var(--faint)"></span>shared tags</div>' +
      '<div class="lg-row" style="margin-top:4px;color:var(--faint)">◯ ring = cluster hub · size = links</div>';
    lg.innerHTML = html;
  })();

  // ---------- boot ----------
  buildFacets();
  initTagSearch();
  apply();
  syncFromHash();
})();
