import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Only create client if both URL and key are provided
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export const isSupabaseConfigured = () => !!(supabaseUrl && supabaseAnonKey)

// Only log in development mode for security
if (import.meta.env.DEV) {
  if (!isSupabaseConfigured()) {
    console.warn('⚠ Supabase environment variables are not set. Projects feature will not work.')
    console.warn('📝 Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file')
  } else {
    // Debug: Log configuration status (URL is partially masked for security)
    const maskedUrl = supabaseUrl.replace(/https:\/\/([^.]+)\.supabase\.co/, 'https://$1***.supabase.co')
    console.log('✓ Supabase URL loaded:', maskedUrl)
    const maskedKey = supabaseAnonKey.substring(0, 20) + '...' + supabaseAnonKey.substring(supabaseAnonKey.length - 10)
    console.log('✓ Supabase Anon Key loaded:', maskedKey)
  }
}
