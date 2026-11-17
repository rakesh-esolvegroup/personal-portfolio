/* =========================================================
   Rakesh Molla — Portfolio interactions
   ========================================================= */

(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------- Sticky header ---------- */
  const header = document.querySelector("[data-header]");

  if (header) {
    const syncHeader = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  const menuButton = document.querySelector("[data-menu-btn]");
  const menuPanel = document.querySelector("[data-menu-panel]");

  if (menuButton && menuPanel) {
    const setMenu = (open) => {
      menuButton.classList.toggle("is-open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      menuPanel.classList.toggle("hidden", !open);
      document.body.classList.toggle("overflow-hidden", open);
    };

    menuButton.addEventListener("click", () => {
      setMenu(!menuButton.classList.contains("is-open"));
    });

    menuPanel.querySelectorAll("[data-mobile-link]").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenu(false);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) setMenu(false);
    });
  }

  /* ---------- Active navigation link ---------- */
  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const sections = navLinks
    .map((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  if (sections.length) {
    let ticking = false;

    const syncActiveLink = () => {
      const marker = window.scrollY + window.innerHeight * 0.3;
      let current = sections[0];

      sections.forEach((entry) => {
        if (entry.target.offsetTop <= marker) current = entry;
      });

      // Bottom of the page always highlights the last section.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 8) {
        current = sections[sections.length - 1];
      }

      navLinks.forEach((link) =>
        link.classList.toggle("is-active", link === current.link)
      );

      ticking = false;
    };

    const requestSync = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(syncActiveLink);
    };

    syncActiveLink();
    window.addEventListener("scroll", requestSync, { passive: true });
    window.addEventListener("resize", requestSync);
  }

  /* ---------- Scroll reveal ---------- */
  const revealItems = document.querySelectorAll(".reveal");

  if (revealItems.length && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  /* ---------- Skill bars ---------- */
  const skills = document.querySelector("[data-skills]");

  if (skills) {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      skills.classList.add("is-visible");
    } else {
      const skillObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            skills.classList.add("is-visible");
            observer.disconnect();
          });
        },
        { threshold: 0.35 }
      );

      skillObserver.observe(skills);
    }
  }

  /* ---------- Footer year ---------- */
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
