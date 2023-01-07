// Responsive Navbar

const mobileNavButton = document.querySelector("#mobile-nav-button");

mobileNavButton.addEventListener("click", () => {
  const mobileNavExpanded = document.body.getAttribute(
    "data-mobile-nav-expanded"
  );

  if (mobileNavExpanded === "true") {
    mobileNavButton.setAttribute("aria-expanded", true);
    document.body.setAttribute("data-mobile-nav-expanded", false);
  } else if (mobileNavExpanded === "false") {
    mobileNavButton.setAttribute("aria-expanded", false);
    document.body.setAttribute("data-mobile-nav-expanded", true);
  }

  window.scrollTo({ top: 0 });
});

// Always Show Expanded Mobile Nav
window.addEventListener("resize", () => {
  if (
    window.innerWidth <= 768 &&
    document.body.getAttribute("data-mobile-nav-expanded") === "true"
  ) {
    window.scrollTo({ top: 0 });
  }
});

// Dynamic Copyright Year

document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector("#copyright-text");
  footerText.innerText = `© ${year} Turun normaalikoulun lukio. All rights reserved.`;
});
