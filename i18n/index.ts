import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";

import en from "./locales/en.json";
import ur from "./locales/ur.json";

const resources = {
  en: { translation: en },
  ur: { translation: ur },
};

const fallbackLng = "en";
const deviceLanguage = getLocales()[0]?.languageCode || fallbackLng;

const getLanguage = () => {
  const textDirection = getLocales()[0]?.textDirection || 'ltr';
  const isRTL = textDirection == 'rtl';
  I18nManager.allowRTL(isRTL);
  I18nManager.forceRTL(isRTL);
}
getLanguage();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: deviceLanguage,
    fallbackLng,
    // compatibilityJSON: "v4",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
