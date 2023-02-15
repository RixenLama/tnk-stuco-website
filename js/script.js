const DEFAULT_LOCALE = "en";

const enButton = document.querySelector("#en-button");
const fiButton = document.querySelector("#fi-button");

const traverseObject = (object, root, array) => {
  return Object.keys(object).forEach((key) => {
    const keyPath = `${root}-${key}`;

    if (typeof object[key] === "object") {
      traverseObject(object[key], keyPath, array);
    } else {
      return array.push([keyPath.slice(1), object[key]]);
    }
  });
};

const translatePage = (translations) => {
  const keys = [];

  traverseObject(translations, "", keys);

  keys.forEach(([key, value]) => {
    const element = document.querySelector(`[data-locale-id="${key}"]`);
    if (element) {
      console.log(element);
      element.textContent = value;
    }
  });
};

const switchLocale = (locale) => {
  console.log(`Locale: ${locale}`);
  localStorage.setItem("tnk-stuco_locale", locale);

  fetch("/data/translate.json")
    .then((res) => res.json())
    .then((translations) => {
      translatePage(translations[locale]);
    });
};

enButton.addEventListener("click", () => {
  switchLocale("en");
});
fiButton.addEventListener("click", () => {
  switchLocale("fi");
});

// Responsive Navbar

const mobileNavButton = document.querySelector("#mobile-nav-button");
const mobileNav = document.querySelector("#mobile-nav");

const BP_MEDIUM = 768;

const openMobileNav = () => {
  document.body.setAttribute("data-mobile-nav-expanded", true);
  mobileNavButton.setAttribute("aria-expanded", true);
  mobileNav.setAttribute("data-state", "opening");

  mobileNav.addEventListener(
    "animationend",
    () => {
      mobileNav.setAttribute("data-state", "opened");
    },
    { once: true }
  );
};

const closeMobileNav = () => {
  document.body.setAttribute("data-mobile-nav-expanded", false);
  mobileNavButton.setAttribute("aria-expanded", false);
  mobileNav.setAttribute("data-state", "closing");

  mobileNav.addEventListener(
    "animationend",
    () => {
      mobileNav.setAttribute("data-state", "closed");
    },
    { once: true }
  );
};

const hideMobileNav = () => {
  document.body.setAttribute("data-mobile-nav-expanded", false);
  mobileNavButton.setAttribute("aria-expanded", false);
  mobileNav.setAttribute("data-state", "closed");
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

// Hide Mobile Nav By Default

window.addEventListener("pageshow", () => {
  hideMobileNav();
});

// Dynamic Copyright Year

document.addEventListener("DOMContentLoaded", () => {
  const locale = localStorage.getItem("tnk-stuco_locale") || DEFAULT_LOCALE;
  switchLocale(locale);

  const year = new Date().getFullYear();
  const footerText = document.querySelector("#copyright-text");
  footerText.innerText = `© ${year} Turun normaalikoulun lukio. All rights reserved.`;
});
