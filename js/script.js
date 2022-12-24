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
});

// Dynamic Copyright Year

document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footerText = document.querySelector("#footer-text");
  footerText.innerText = `© ${year} Turun normaalikoulun lukio. All rights reserved.`;
});
