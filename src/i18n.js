import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './styles/locales/en.json'
import es from './styles/locales/es.json'
import fr from './styles/locales/fr.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr }
    },
    lng: 'es',
    fallbackLng: 'es',
    interpolation: { escapeValue: false }
  })

export default i18n
