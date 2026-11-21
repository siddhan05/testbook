(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealElements = [...document.querySelectorAll("[data-reveal]")];
  if (reduceMotion) {
    document.documentElement.classList.add("no-motion");
    revealElements.forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "none";
    });
  }

  window.PrepPath = window.PrepPath || {};
  window.PrepPath.animate = function () {
    const gsap = window.gsap;
    if (!gsap || reduceMotion) {
      document.querySelectorAll("[data-reveal]").forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "none";
      });
      return;
    }

    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
    const heroCopy = document.querySelector(".hero-copy");
    if (heroCopy) gsap.from(heroCopy.children, { opacity: 0, y: 18, duration: .65, stagger: .08, ease: "power2.out" });
    document.querySelectorAll("[data-reveal]").forEach((element, index) => {
      const animation = { opacity: 1, y: 0, duration: .55, delay: (index % 4) * .06, ease: "power2.out" };
      if (window.ScrollTrigger) {
        gsap.fromTo(element, { opacity: 0, y: 20 }, { ...animation, scrollTrigger: { trigger: element, start: "top 88%", once: true } });
      } else {
        gsap.fromTo(element, { opacity: 0, y: 20 }, animation);
      }
    });

    document.querySelectorAll("[data-count]").forEach((element) => {
      const target = Number(element.dataset.count);
      const suffix = target === 9.1 ? "+ crore" : target === 4 ? "+ lakh" : "+ crore";
      const counter = { value: 0 };
      gsap.to(counter, {
        value: target,
        duration: 1.4,
        ease: "power1.out",
        scrollTrigger: window.ScrollTrigger ? { trigger: element, start: "top 90%", once: true } : undefined,
        onUpdate: () => { element.textContent = `${target === 9.1 ? counter.value.toFixed(1) : Math.round(counter.value)}${suffix}`; }
      });
    });
  };
})();
