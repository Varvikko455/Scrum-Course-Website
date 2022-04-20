import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LangueDetector from 'i18next-browser-languagedetector';
/* import HttpApi from 'i18next-http-backend'; */

import translationEN from "./assets/en/translationEN.json";
import translationSV from "./assets/sv/translationSV.json";

i18n
  .use(initReactI18next)
  .use(LangueDetector)
  .init({
    supportedLngs: ['sv', 'en'],
    fallbackLng: 'sv',
    resources: {
      sv: {
        translations: translationSV
      },
      en: {
        translations: translationEN
      }
    },
    // detection: {
    //   order: ['cookie', 'localStorage', 'sessionStorage', 'htmlTag'],
    //   caches: ['cookie']
    // },
    ns: ["translations"],
    defaultNS: "translations",
    react: {
      useSuspense: false,
      bindI18n: "languageChanged"
    },


  });



export default i18n;