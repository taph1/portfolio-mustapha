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
    <div className="grid md:grid-cols-2 gap-6">
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
          <div key={p.id} className="p-6 bg-white dark:bg-gray-800 shadow rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="opacity-80 mb-4">{desc}</p>
            <div className="flex gap-4">
              {p.demo && (
                <a className="underline hover:opacity-70" href={p.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
              {p.repo && (
                <a className="underline hover:opacity-70" href={p.repo} target="_blank" rel="noreferrer">
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
