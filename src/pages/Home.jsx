import { useTranslation } from 'react-i18next'
import ProjectsList from '../components/ProjectsList'
import ContactForm from '../components/ContactForm'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="max-w-5xl mx-auto space-y-12 px-4">
      
      <header className="text-center py-10">
        <img src="https://api.dicebear.com/7.x/thumbs/svg?seed=Mustapha" className="w-28 h-28 mx-auto rounded-full shadow mb-4"/>
        <h1 className="text-4xl font-bold">{t('title')}</h1>
        <p className="opacity-80 mb-6">{t('jobTitle')}</p>
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {t('downloadCV')}
        </a>
      </header>

      <section id="about">
        <h2 className="text-2xl font-semibold">{t('nav.about')}</h2>
        <p>{t('aboutText')}</p>
      </section>

      <section id="skills">
        <h2 className="text-2xl font-semibold">{t('nav.skills')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {t('skillsList', { returnObjects: true }).map(s => (
            <div key={s} className="p-3 bg-white dark:bg-gray-800 rounded">{s}</div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2 className="text-2xl font-semibold">{t('projectsLabel')}</h2>
        <ProjectsList />
      </section>

      <section id="contact">
        <h2 className="text-2xl font-semibold">{t('contactLabel')}</h2>
        <ContactForm />
      </section>

    </main>
  )
}
