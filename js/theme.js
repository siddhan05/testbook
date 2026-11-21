(function () {
  const storageKey = "preppath-theme";
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)");
  let savedTheme = localStorage.getItem(storageKey);
  let theme = savedTheme || (systemPreference.matches ? "dark" : "light");

  const updateButtons = () => {
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const isDark = theme === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
      button.title = `Switch to ${isDark ? "light" : "dark"} mode`;
      button.querySelector("[data-theme-icon]").textContent = isDark ? "☀" : "☾";
    });
  };

  const applyTheme = () => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    updateButtons();
  };

  window.PrepPathTheme = {
    toggle() {
      theme = theme === "dark" ? "light" : "dark";
      savedTheme = theme;
      localStorage.setItem(storageKey, theme);
      applyTheme();
    },
    bindToggle(button) {
      button.addEventListener("click", this.toggle);
      updateButtons();
    }
  };

  systemPreference.addEventListener("change", (event) => {
    if (savedTheme) return;
    theme = event.matches ? "dark" : "light";
    applyTheme();
  });

  applyTheme();
})();
