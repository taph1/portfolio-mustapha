import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Navbar({ onToggleDark, dark }) {
  const { t, i18n } = useTranslation()

  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center py-4">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-2xl font-bold">MJ</Link>
        <div className="hidden md:flex gap-4">
          <a href="/#about" className="hover:underline">{t('nav.about')}</a>
          <a href="/#skills" className="hover:underline">{t('nav.skills')}</a>
          <Link to="/proyectos" className="hover:underline">{t('nav.projects')}</Link>
          <Link to="/contacto" className="hover:underline">{t('nav.contact')}</Link>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <select defaultValue={i18n.language} onChange={(e)=>i18n.changeLanguage(e.target.value)} className="p-2 rounded bg-white dark:bg-gray-800">
          <option value="es">ES</option>
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
        <button onClick={onToggleDark} className="p-2 rounded bg-gray-200 dark:bg-gray-700">
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  )
}
