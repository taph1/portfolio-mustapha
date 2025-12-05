import { useTranslation } from 'react-i18next'
import ProjectsList from '../components/ProjectsList'

export default function Projects() {
  const { t } = useTranslation()
  
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{t('projectsLabel')}</h1>
      <ProjectsList />
    </div>
  )
}
