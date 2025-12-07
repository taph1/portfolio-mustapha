import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../supabaseClient'
import { useTranslation } from 'react-i18next'

export default function ProjectsList() {
  const { i18n } = useTranslation()
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function loadProjects() {
      // Check if Supabase is configured
      if (!isSupabaseConfigured() || !supabase) {
        setLoading(false)
        setProjects([])
        return
      }

      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('id', { ascending: true })
        
        if (error) {
          console.error("Supabase error:", error)
          setProjects([])
        } else {
          setProjects(data || [])
        }
      } catch (err) {
        console.error("Error loading projects:", err)
        setProjects([])
      } finally {
        setLoading(false)
      }
    }
    loadProjects()
  }, [])

  if(loading) return <p className="text-center py-8 opacity-70">Loading...</p>
  if(projects.length===0) return <p className="text-center py-8 opacity-70">More projects coming soon...</p>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {projects.map(p=>{
        // Handle multilingual description - lang can be JSONB object with different structures
        const lang = i18n.language || 'es'
        let desc = p.description || '' // Default to description field
        
        // If lang exists and is an object
        if (p.lang && typeof p.lang === 'object') {
          const langData = p.lang[lang]
          if (langData) {
            // If langData is a string, use it directly
            if (typeof langData === 'string') {
              desc = langData
            } 
            // If langData is an object with description property
            else if (langData.description && typeof langData.description === 'string') {
              desc = langData.description
            }
            // If langData is an object, try to stringify it (fallback)
            else if (typeof langData === 'object') {
              desc = JSON.stringify(langData)
            }
          }
        }
        
        // Ensure desc is always a string
        if (typeof desc !== 'string') {
          desc = String(desc || '')
        }
        
        return (
          <div key={p.id} className="p-4 md:p-6 bg-white dark:bg-gray-800 shadow rounded-xl md:rounded-2xl transition-shadow hover:shadow-lg">
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{p.title}</h3>
            <p className="opacity-80 mb-4 text-sm md:text-base leading-relaxed">{desc}</p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              {p.demo && (
                <a 
                  className="inline-flex items-center justify-center px-4 py-2 md:px-0 md:py-0 text-sm md:text-base underline hover:opacity-70 bg-blue-50 dark:bg-blue-900/20 md:bg-transparent dark:md:bg-transparent rounded-md md:rounded-none transition-colors" 
                  href={p.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 mr-2 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </a>
              )}
              {p.repo && (
                <a 
                  className="inline-flex items-center justify-center px-4 py-2 md:px-0 md:py-0 text-sm md:text-base underline hover:opacity-70 bg-gray-100 dark:bg-gray-700 md:bg-transparent dark:md:bg-transparent rounded-md md:rounded-none transition-colors" 
                  href={p.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4 mr-2 md:hidden" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
