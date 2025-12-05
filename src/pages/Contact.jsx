import { useTranslation } from 'react-i18next'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  const { t } = useTranslation()
  
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{t('contactLabel')}</h1>
      <ContactForm />
    </div>
  )
}
