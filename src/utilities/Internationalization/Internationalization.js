import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import english from "./general.en.json";
import turkish from "./general.tr-TR.json";

const currentLanguage =
  JSON.parse(localStorage.getItem("user"))?.currentLanguage || "en";

const resources = {
  en: {
    translation: english,
  },
  tr: {
    translation: turkish,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: currentLanguage,

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
