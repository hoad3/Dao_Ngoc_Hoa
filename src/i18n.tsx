import i18n from 'i18next';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { initReactI18next } from 'react-i18next';
import HEADER_EN from './locales/en/headerEN.json'
import HEADER_VI from './locales/vi/headerVI.json'
// import HOME_EN from './locales/en/homeEN.json'
// import HOME_VI from './locales/vi/homeVI.json'

const resources = {
    en: {
        header: HEADER_EN,
        timebox: HEADER_EN,
        homepage: HEADER_EN,
        aboutme: HEADER_EN
    },
    vi: {
        header: HEADER_VI,
        timebox: HEADER_VI,
        homepage: HEADER_VI,
        aboutme: HEADER_VI
    }
};
const defaultNS = 'header';




i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'vi', // Ngôn ngữ mặc định
        ns:['header','timebox','homepage','aboutme'],
        defaultNS,
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false
        }
    });
export default i18n;
