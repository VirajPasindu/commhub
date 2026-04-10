import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import si from './locales/si.json';
import ta from './locales/ta.json';

const resources = {
  en: { translation: en },
  si: { translation: si },
  ta: { translation: ta },
};

i18n
  .use(LanguageDetector)           // detects browser language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'si', 'ta'],
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;