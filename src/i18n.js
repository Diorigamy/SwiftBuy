// i18n.js

const i18n = require('i18next');
const { initReactI18next } = require('react-i18next');
const enTranslation = require('./locales/en.json');
const frTranslation = require('./locales/fr.json');

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enTranslation },
        fr: { translation: frTranslation }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
});

module.exports = i18n;

