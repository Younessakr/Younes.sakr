import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';

i18n
  .use(LanguageDetector) // يكتشف لغة متصفح الزائر
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      de: { translation: de }
    },
    fallbackLng: 'de', // اللغة الاحتياطية إذا كانت لغة المتصفح غير مدعومة
    // قم بحذف السطر: lng: 'de' لتفعيل الاكتشاف التلقائي
    detection: {
      order: ['localStorage', 'navigator'], // يفحص الاختيار اليدوي أولاً ثم متصفح الزائر
      caches: ['localStorage'] // يحفظ اللغة التي يختارها المستخدم لاحقاً
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;