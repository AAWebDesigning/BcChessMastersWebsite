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
})();
