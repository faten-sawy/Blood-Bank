import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEn from './locales/English/translationEn.json'
import translationAr from './locales/Arabic/translationAR.json'

const resources ={
    en: {
        translation: translationEn
    },
    ar: {
        translation: translationAr
    }
}

i18n 
  .use(initReactI18next)
  .init({
      resources,
      lng: 'ar',
      keySeparator: false,
      interpolation: {
        escapeValue: false
      }   
  })

export default i18n