// Responsive Navbar

const mobileNavButton = document.querySelector("#mobile-nav-button");
const mobileNav = document.querySelector("#mobile-nav");

const BP_MEDIUM = 768;

const openMobileNav = () => {
  document.body.setAttribute("data-mobile-nav-expanded", true);
  mobileNavButton.setAttribute("aria-expanded", true);
  // mobileNav.setAttribute("data-state", "opening");

  // mobileNav.addEventListener(
  //   "animationend",
  //   () => {
  //     mobileNav.setAttribute("data-state", "opened");
  //   },
  //   { once: true }
  // );
};

const closeMobileNav = () => {
  document.body.setAttribute("data-mobile-nav-expanded", false);
  mobileNavButton.setAttribute("aria-expanded", false);
  // mobileNav.setAttribute("data-state", "closing");

  // mobileNav.addEventListener(
  //   "animationend",
  //   () => {
  //     mobileNav.setAttribute("data-state", "closed");
  //   },
  //   { once: true }
  // );
};

mobileNavButton.addEventListener("click", () => {
  const isMobileNavExpanded =
    document.body.getAttribute("data-mobile-nav-expanded") === "true";

  if (isMobileNavExpanded) {
    closeMobileNav();
  } else {
    openMobileNav();
  }

  window.scrollTo({ top: 0 });
});

// Always Show Expanded Mobile Nav

window.addEventListener("resize", () => {
  if (
    window.innerWidth <= BP_MEDIUM &&
    document.body.getAttribute("data-mobile-nav-expanded") === "true"
  ) {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
});

// Dynamic Copyright Year

document.addEventListener("DOMContentLoaded", () => {
  closeMobileNav();

  const year = new Date().getFullYear();
  const footerText = document.querySelector("#copyright-text");
  footerText.innerText = `© ${year} Turun normaalikoulun lukio. All rights reserved.`;
});
