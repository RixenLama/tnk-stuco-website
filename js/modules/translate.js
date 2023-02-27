const LANGUAGES = {
  en: "English",
  fi: "Finnish",
};

const DEFAULT_LANGUAGE = "en";
const LS_LANGUAGE_KEY = "TNK-STUCO__LANGUAGE";

const traverseObject = (object, parentPath, array) => {
  return Object.keys(object).forEach((key) => {
    const keyPath = `${parentPath}-${key}`;

    if (typeof object[key] === "object") {
      traverseObject(object[key], keyPath, array);
    } else {
      return array.push([keyPath.slice(1), object[key]]);
    }
  });
};

const translatePage = (translationObject) => {
  const translationKeyValuePairs = [];

  traverseObject(translationObject, "", translationKeyValuePairs);

  translationKeyValuePairs.forEach(([key, value]) => {
    const elements = document.querySelectorAll(`[data-locale-id="${key}"]`);
    if (elements.length > 0) {
      elements.forEach((el) => (el.textContent = value));
    }
  });
};

export const switchLanguage = (language) => {
  console.info(`Current Language: ${LANGUAGES[language]} (${language})`);

  setLanguage(language);
  document.documentElement.setAttribute("lang", language);

  fetch("/data/translate.json")
    .then((res) => res.json())
    .then((translations) => {
      translatePage(translations[language]);
    });
};

export const getLanguage = () => {
  return localStorage.getItem(LS_LANGUAGE_KEY) || DEFAULT_LANGUAGE;
};

export const setLanguage = (language) => {
  localStorage.setItem(LS_LANGUAGE_KEY, language);
};
