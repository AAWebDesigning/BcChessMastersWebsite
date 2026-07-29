/* BC Chess Masters — light interactivity, no dependencies. */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Tournament sub-nav scroll-spy ---- */
  var subnav = document.querySelector(".subnav");
  if (subnav) {
    var links = Array.prototype.slice.call(subnav.querySelectorAll("a"));
    var sections = links
      .map(function (l) {
        var id = l.getAttribute("href");
        return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
      })
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      var byId = {};
      links.forEach(function (l) { byId[l.getAttribute("href").slice(1)] = l; });

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              links.forEach(function (l) { l.classList.remove("active"); });
              var active = byId[entry.target.id];
              if (active) active.classList.add("active");
            }
          });
        },
        { rootMargin: "-140px 0px -65% 0px", threshold: 0 }
      );
      sections.forEach(function (s) { observer.observe(s); });
    }
  }

  /* ---- Sortable roster table ---- */
  var sortTable = document.querySelector("table.data[data-sortable]");
  if (sortTable && sortTable.tBodies.length) {
    var body = sortTable.tBodies[0];
    // Sections rank by strength, not alphabetically — plain A-Z would order them
    // Open, U1500, U2000, which reads as nonsense to a chess player.
    var SECTION_RANK = { open: 0, u2000: 1, u1500: 2 };
    var headers = Array.prototype.slice.call(sortTable.querySelectorAll("thead th"));
    var ratingCol = -1;
    headers.forEach(function (th, i) { if (/rating/i.test(th.textContent)) ratingCol = i; });

    function text(row, i) {
      var cell = row.cells[i];
      return cell ? (cell.textContent || "").trim() : "";
    }
    function num(row, i) {
      return parseFloat(text(row, i).replace(/[^\d.-]/g, "")) || 0;
    }
    function rank(row, i) {
      var key = text(row, i).toLowerCase();
      return Object.prototype.hasOwnProperty.call(SECTION_RANK, key) ? SECTION_RANK[key] : 99;
    }

    function sortBy(th, type, dir) {
      var col = th.cellIndex;
      var rows = Array.prototype.slice.call(body.rows);

      rows.sort(function (a, b) {
        var r;
        if (type === "number") r = num(a, col) - num(b, col);
        else if (type === "section") r = rank(a, col) - rank(b, col);
        else r = text(a, col).localeCompare(text(b, col));
        if (r !== 0) return dir === "desc" ? -r : r;
        // Ties always fall back to rating, strongest first, whichever way the
        // primary column is pointing.
        return ratingCol === -1 ? 0 : num(b, ratingCol) - num(a, ratingCol);
      });

      rows.forEach(function (row, i) {
        body.appendChild(row);
        if (row.cells[0]) row.cells[0].textContent = String(i + 1);
      });

      headers.forEach(function (h) {
        if (h.hasAttribute("aria-sort")) h.setAttribute("aria-sort", "none");
        var a = h.querySelector(".th-arrow");
        if (a) a.textContent = "↓";
      });
      th.setAttribute("aria-sort", dir === "desc" ? "descending" : "ascending");
      var arrow = th.querySelector(".th-arrow");
      if (arrow) arrow.textContent = dir === "desc" ? "↓" : "↑";
    }

    headers.forEach(function (th) {
      var btn = th.querySelector(".th-sort");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var type = btn.getAttribute("data-type") || "text";
        var current = th.getAttribute("aria-sort");
        var dir;
        if (current === "descending") dir = "asc";
        else if (current === "ascending") dir = "desc";
        else dir = type === "number" ? "desc" : "asc";
        sortBy(th, type, dir);
      });
    });
  }
})();
