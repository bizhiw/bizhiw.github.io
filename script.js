/* ============================================================
   Neecha & Alborz — small progressive-enhancement script.
   The site works fine without it; this just adds the countdown
   and the gentle fade-in on scroll.
   ============================================================ */
(function () {
  document.documentElement.classList.add("js");

  /* ---- Countdown ----
     Set the wedding date on the element: data-date="2027-03-20" */
  function countdown() {
    var el = document.querySelector("[data-countdown]");
    if (!el) return;
    var iso = el.getAttribute("data-date") || "2027-03-20";
    var target = new Date(iso + "T00:00:00").getTime();

    function render() {
      var diff = Math.max(0, target - Date.now());
      var days = Math.floor(diff / 86400000);
      var hours = Math.floor((diff % 86400000) / 3600000);
      var mins = Math.floor((diff % 3600000) / 60000);
      var pairs = [[days, "Days"], [hours, "Hours"], [mins, "Minutes"]];
      el.innerHTML = pairs
        .map(function (p) {
          return (
            '<div class="countdown__unit"><div class="n">' +
            String(p[0]).padStart(2, "0") +
            '</div><p class="eyebrow" style="margin-top:.35rem">' +
            p[1] +
            "</p></div>"
          );
        })
        .join("");
    }
    render();
    setInterval(render, 1000);
  }

  /* ---- Fade-in on scroll ---- */
  function reveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (n) { n.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (n) { io.observe(n); });
  }

  /* ---- Header height ----
     Publishes the sticky header's height as --header-h so the home hero
     can pull itself up underneath the bar at any viewport width. */
  function headerHeight() {
    var h = document.querySelector(".site-header");
    if (!h) return;
    function set() { document.documentElement.style.setProperty("--header-h", h.offsetHeight + "px"); }
    set();
    window.addEventListener("resize", set);
    if ("ResizeObserver" in window) { new ResizeObserver(set).observe(h); }
  }

  if (document.readyState !== "loading") { countdown(); reveal(); headerHeight(); }
  else document.addEventListener("DOMContentLoaded", function () { countdown(); reveal(); headerHeight(); });
})();
