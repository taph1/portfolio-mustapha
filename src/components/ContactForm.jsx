import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactForm() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  const isFormspreeConfigured = endpoint && !endpoint.includes('your_form_id')

  async function handleSubmit(e) {
    e.preventDefault()
    
    // If Formspree is not configured, use mailto as fallback
    if (!isFormspreeConfigured) {
      const yourEmail = 'actionsatis@gmail.com' // ← Replace with your actual email
      const subject = encodeURIComponent(`Portfolio Contact: ${name}`)
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
      window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`
      setStatus('mailto')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <input
        type="text"
        placeholder={t('name')}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-700"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-700"
        required
      />
      <textarea
        placeholder={t('message')}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
        className="w-full p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-700"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {t('send')}
      </button>

      {/* Form uses mailto - no warning needed */}
      
      {status === 'loading' && <p className="opacity-70">Sending...</p>}
      {status === 'success' && <p className="text-green-500">Message sent. Thank you!</p>}
      {status === 'mailto' && <p className="text-blue-500">Opening your email client...</p>}
      {status === 'error' && <p className="text-red-500">Error sending message. Please try again later.</p>}
    </form>
  )
}
