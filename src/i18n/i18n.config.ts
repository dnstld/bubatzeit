import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { de, en, pt } from './translations';

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  pt: {
    translation: pt,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'de',
  fallbackLng: 'de',
  debug: true,
  compatibilityJSON: 'v3',
});

export default i18n;
