import i18n from 'i18next';
import mainPage from './hu/mainPage.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
    hu: {
        mainPage
    },
} as const;

i18n.use(initReactI18next).init({
    lng: 'hu',
    ns: ['mainPage'],
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
});