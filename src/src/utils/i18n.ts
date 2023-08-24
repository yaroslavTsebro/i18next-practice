import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import languages from "../constant/languages.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: languages,
    fallbackLng: "en",
    debug: process.env.NODE_ENV !== "production",
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
      format: (value: any, format: any) =>
        format === "lowercase" ? value.toLowerCase() : value,
    },
  });

export default i18n;
