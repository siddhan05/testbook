(function () {
  const data = window.PrepPath && window.PrepPath.data;
  if (!data) return;

  const searchForm = document.querySelector("[data-search-form]");
  const searchInput = document.querySelector("[data-search-input]");
  const suggestions = document.querySelector("[data-search-suggestions]");
  if (searchForm && searchInput && suggestions) {
    const showSuggestions = () => {
      const query = searchInput.value.trim().toLowerCase();
      if (!query) {
        suggestions.classList.remove("is-visible");
        suggestions.replaceChildren();
        return;
      }
      const matches = data.exams.filter((exam) => `${exam.name} ${exam.category}`.toLowerCase().includes(query)).slice(0, 5);
      suggestions.innerHTML = matches.length
        ? matches.map((exam) => `<a href="exams.html?category=${encodeURIComponent(exam.category)}">${exam.icon} ${exam.name}<span>Explore →</span></a>`).join("")
        : `<p>No matching exam yet. Try another search.</p>`;
      suggestions.classList.add("is-visible");
    };
    searchInput.addEventListener("input", showSuggestions);
    searchInput.addEventListener("focus", showSuggestions);
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const query = searchInput.value.trim();
      window.location.href = `exams.html${query ? `?q=${encodeURIComponent(query)}` : ""}`;
    });
    document.addEventListener("click", (event) => {
      if (!searchForm.contains(event.target)) suggestions.classList.remove("is-visible");
    });
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Escape") suggestions.classList.remove("is-visible");
    });
  }

  document.querySelectorAll("[data-faq-list]").forEach((list) => {
    list.addEventListener("click", (event) => {
      const button = event.target.closest(".faq-question");
      if (!button) return;
      const item = button.closest(".faq-item");
      const expanded = button.getAttribute("aria-expanded") === "true";
      list.querySelectorAll(".faq-item").forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });
      if (!expanded) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });

  const track = document.querySelector("[data-story-track]");
  if (track) {
    let index = 0;
    const move = (direction) => {
      const cards = [...track.children];
      if (!cards.length) return;
      const visible = window.innerWidth <= 600 ? 1 : window.innerWidth <= 820 ? 2 : 3;
      const lastIndex = Math.max(0, cards.length - visible);
      index = Math.max(0, Math.min(lastIndex, index + direction));
      const distance = cards[index].getBoundingClientRect().left - cards[0].getBoundingClientRect().left;
      track.style.transform = `translateX(-${distance}px)`;
    };
    document.querySelector("[data-story-prev]")?.addEventListener("click", () => move(-1));
    document.querySelector("[data-story-next]")?.addEventListener("click", () => move(1));
    window.addEventListener("resize", () => {
      index = 0;
      track.style.transform = "";
    });
  }

  const backToTop = document.querySelector("[data-back-to-top]");
  if (backToTop) {
    const updateBackToTop = () => backToTop.classList.toggle("is-visible", window.scrollY > 500);
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const filterToolbar = document.querySelector("[data-filter-toolbar]");
  const pageSearch = document.querySelector("[data-page-search]");
  const cards = [...document.querySelectorAll("[data-page-card]")];
  if (filterToolbar && cards.length) {
    let activeCategory = "All";
    const params = new URLSearchParams(window.location.search);
    const initialCategory = params.get("category");
    if (pageSearch && params.has("q")) pageSearch.value = params.get("q");
    if (initialCategory) activeCategory = initialCategory;
    const applyFilters = () => {
      const query = pageSearch ? pageSearch.value.trim().toLowerCase() : "";
      let visible = 0;
      cards.forEach((card) => {
        const categoryMatches = activeCategory === "All" || card.dataset.category === activeCategory;
        const searchMatches = !query || card.dataset.searchable.toLowerCase().includes(query);
        const show = categoryMatches && searchMatches;
        card.hidden = !show;
        if (show) visible += 1;
      });
      const empty = document.querySelector("[data-empty-state]");
      if (empty) empty.hidden = visible > 0;
    };
    filterToolbar.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter-value]");
      if (!button) return;
      activeCategory = button.dataset.filterValue;
      filterToolbar.querySelectorAll("[data-filter-value]").forEach((item) => item.classList.toggle("is-active", item === button));
      applyFilters();
    });
    if (initialCategory) {
      const matchingButton = [...filterToolbar.querySelectorAll("[data-filter-value]")].find((button) => button.dataset.filterValue.toLowerCase() === initialCategory.toLowerCase());
      if (matchingButton) {
        activeCategory = matchingButton.dataset.filterValue;
        filterToolbar.querySelectorAll("[data-filter-value]").forEach((button) => button.classList.toggle("is-active", button === matchingButton));
      } else {
        activeCategory = "All";
      }
    }
    pageSearch?.addEventListener("input", applyFilters);
    applyFilters();
  }

  const loginForm = document.querySelector("[data-login-form]");
  if (loginForm) {
    const phone = loginForm.querySelector("[data-phone]");
    const phoneStep = loginForm.querySelector("[data-phone-step]");
    const otpStep = loginForm.querySelector("[data-otp-step]");
    const status = loginForm.querySelector("[data-login-status]");
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (phoneStep.hidden) {
        const code = [...loginForm.querySelectorAll("[data-otp-digit]")].map((input) => input.value).join("");
        status.textContent = /^\d{6}$/.test(code) ? "This is a demo sign-in. No account or OTP was verified." : "Enter all 6 digits to continue in this demo.";
        return;
      }
      if (!phone.checkValidity()) {
        phone.reportValidity();
        return;
      }
      phoneStep.hidden = true;
      otpStep.hidden = false;
      status.textContent = `Demo mode: enter any 6 digits for ${phone.value}. No message will be sent.`;
      otpStep.querySelector("[data-otp-digit]").focus();
    });
    loginForm.querySelectorAll("[data-otp-digit]").forEach((input, index, inputs) => {
      input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "").slice(-1);
        if (input.value && inputs[index + 1]) inputs[index + 1].focus();
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && !input.value && inputs[index - 1]) inputs[index - 1].focus();
      });
      input.addEventListener("paste", (event) => {
        const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        if (!pasted) return;
        event.preventDefault();
        [...pasted].forEach((digit, digitIndex) => {
          if (inputs[digitIndex]) inputs[digitIndex].value = digit;
        });
        inputs[Math.min(pasted.length, inputs.length - 1)].focus();
      });
    });
    loginForm.querySelector("[data-edit-phone]").addEventListener("click", () => {
      otpStep.hidden = true;
      phoneStep.hidden = false;
      status.textContent = "";
      phone.focus();
    });
    loginForm.querySelector("[data-google-login]").addEventListener("click", () => {
      status.textContent = "Social sign-in is not connected in this demo.";
    });
  }
})();
