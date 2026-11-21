(function () {
  const header = document.querySelector("#site-header");
  const footer = document.querySelector("#site-footer");
  if (!header || !footer) return;

  const page = document.body.dataset.page || "home";
  const navItems = [
    { label: "Exams", href: "exams.html", menu: [["📋", "SSC Exams", "exams.html?category=SSC"], ["🏦", "Banking Exams", "exams.html?category=Banking"], ["🚆", "Railway Exams", "exams.html?category=Railway"], ["🏛️", "UPSC", "exams.html?category=UPSC"], ["✦", "All exam categories", "exams.html"]] },
    { label: "Test Series", href: "test-series.html", menu: [["◷", "SSC mock tests", "test-series.html?category=SSC"], ["◎", "Banking practice", "test-series.html?category=Banking"], ["▤", "Railway test series", "test-series.html?category=Railway"], ["✦", "Explore all series", "test-series.html"]] },
    { label: "Expert Coaching", href: "courses.html", menu: [["📊", "SSC coaching", "courses.html?category=SSC"], ["💹", "Banking courses", "courses.html?category=Banking"], ["🏛️", "UPSC preparation", "courses.html?category=UPSC"], ["✦", "Browse all courses", "courses.html"]] },
    { label: "Live Classes", href: "courses.html#live" },
    { label: "Study Material", href: "study-material.html", menu: [["📄", "Previous year papers", "study-material.html?category=Papers"], ["✍️", "Practice questions", "study-material.html?category=Practice"], ["📒", "Study notes", "study-material.html?category=Notes"], ["🧭", "All resources", "study-material.html"]] },
    { label: "Current Affairs", href: "current-affairs.html" }
  ];

  const items = navItems.map((item) => {
    const active = page === item.href.split(".html")[0] || (page === "home" && item.label === "Exams");
    const current = active ? ' aria-current="page"' : "";
    if (!item.menu) return `<div class="nav-item"><a class="nav-link" href="${item.href}"${current}>${item.label}</a></div>`;
    const links = item.menu.map(([icon, text, href]) => `<a href="${href}"><span class="mega-icon" aria-hidden="true">${icon}</span>${text}</a>`).join("");
    return `<div class="nav-item" data-nav-item><button class="nav-trigger" type="button" aria-expanded="false">${item.label}</button><div class="mega-menu">${links}</div></div>`;
  }).join("");

  header.innerHTML = `
    <div class="announcement" data-announcement>
      <span>Make your next move count — explore free practice this week.</span>
      <a href="test-series.html">Get started →</a>
      <button type="button" aria-label="Dismiss announcement" data-dismiss-announcement>×</button>
    </div>
    <nav class="site-nav" aria-label="Main navigation">
      <div class="nav-inner">
        <a class="brand" href="index.html" aria-label="PrepPath home"><span class="brand-mark" aria-hidden="true">p</span><span>prep<em>path</em></span></a>
        <div class="nav-links" id="primary-navigation">${items}<div class="nav-item"><button class="nav-trigger" type="button" aria-expanded="false" data-more-trigger>More</button><div class="mega-menu"><a href="exams.html"><span class="mega-icon">✦</span>Upcoming exams</a><a href="study-material.html"><span class="mega-icon">📚</span>Study hub</a><a href="current-affairs.html"><span class="mega-icon">🗞️</span>Daily updates</a><a href="login.html"><span class="mega-icon">◎</span>Your learning space</a></div></div></div>
        <div class="nav-actions"><button class="theme-toggle" type="button" aria-label="Switch to dark mode" aria-pressed="false" data-theme-toggle><span aria-hidden="true" data-theme-icon>☾</span></button><a class="login-link" href="login.html">Log in</a><a class="button button-primary nav-cta" href="login.html">Get started <span aria-hidden="true">→</span></a></div>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="primary-navigation" data-menu-toggle><span></span><span></span></button>
      </div>
    </nav>`;

  const columns = [
    ["Explore exams", [["Popular exams", "exams.html"], ["SSC preparation", "exams.html?category=SSC"], ["Banking exams", "exams.html?category=Banking"], ["Railway exams", "exams.html?category=Railway"]]],
    ["Practice", [["Test series", "test-series.html"], ["Mock tests", "test-series.html"], ["Previous year papers", "study-material.html?category=Papers"], ["Study notes", "study-material.html?category=Notes"]]],
    ["Learn", [["Online courses", "courses.html"], ["Live classes", "courses.html#live"], ["Current affairs", "current-affairs.html"], ["Learning resources", "study-material.html"]]],
    ["PrepPath", [["About us", "index.html#about"], ["Contact", "mailto:hello@preppath.example"], ["Sign in", "login.html"], ["FAQs", "index.html#faq"]]]
  ];
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="section-wrap footer-main">
        <div class="footer-about"><a class="brand footer-brand" href="index.html"><span class="brand-mark" aria-hidden="true">p</span><span>prep<em>path</em></span></a><p>A little more clarity for every step toward your next big goal.</p><div class="social-links" aria-label="Social links"><a href="https://instagram.com" aria-label="Instagram">ig</a><a href="https://youtube.com" aria-label="YouTube">▶</a><a href="https://linkedin.com" aria-label="LinkedIn">in</a></div></div>
        ${columns.map(([heading, links]) => `<div class="footer-column"><h3>${heading}</h3>${links.map(([label, href]) => `<a href="${href}">${label}</a>`).join("")}</div>`).join("")}
      </div>
      <div class="section-wrap footer-bottom"><p>© 2026 PrepPath. Made for learners, wherever they’re starting from.</p><p>Independent learning platform · Demo experience</p></div>
    </footer>`;

  const announcement = header.querySelector("[data-announcement]");
  header.querySelector("[data-dismiss-announcement]").addEventListener("click", () => {
    announcement.hidden = true;
  });

  const menuToggle = header.querySelector("[data-menu-toggle]");
  window.PrepPathTheme.bindToggle(header.querySelector("[data-theme-toggle]"));
  const nav = header.querySelector(".site-nav");
  const navLinks = header.querySelector(".nav-links");
  const setMobileMenu = (open) => {
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    nav.classList.toggle("menu-is-open", open);
    document.body.classList.toggle("menu-open", open);
    navLinks.style.top = `${Math.ceil(nav.getBoundingClientRect().bottom)}px`;
  };
  menuToggle.addEventListener("click", () => setMobileMenu(menuToggle.getAttribute("aria-expanded") !== "true"));

  header.querySelectorAll(".nav-item").forEach((item) => {
    const button = item.querySelector(".nav-trigger");
    if (!button) return;
    button.addEventListener("click", () => {
      const wrapper = button.closest(".nav-item");
      const open = !wrapper.classList.contains("is-open");
      header.querySelectorAll(".nav-item.is-open").forEach((other) => {
        other.classList.remove("is-open");
        const trigger = other.querySelector(".nav-trigger");
        if (trigger) trigger.setAttribute("aria-expanded", "false");
      });
      wrapper.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      header.querySelectorAll(".nav-item.is-open").forEach((item) => {
        item.classList.remove("is-open");
        item.querySelector(".nav-trigger").setAttribute("aria-expanded", "false");
      });
      if (menuToggle.getAttribute("aria-expanded") === "true") setMobileMenu(false);
    }
  });
  navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a") && menuToggle.getAttribute("aria-expanded") === "true") setMobileMenu(false);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820 && menuToggle.getAttribute("aria-expanded") === "true") setMobileMenu(false);
  });
})();
