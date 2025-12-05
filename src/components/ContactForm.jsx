import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactForm() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  // Check if Formspree is properly configured (has a valid endpoint that's not a placeholder)
  const isFormspreeConfigured = endpoint && 
                                 endpoint.startsWith('https://formspree.io/f/') && 
                                 !endpoint.includes('your_form_id') &&
                                 endpoint.length > 30 // Valid Formspree IDs are longer

  async function handleSubmit(e) {
    e.preventDefault()
    
    // Always use mailto as fallback if Formspree is not properly configured
    if (!isFormspreeConfigured) {
      try {
        const yourEmail = 'actionsatis@gmail.com'
        const subject = encodeURIComponent(`Portfolio Contact: ${name}`)
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
        window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${body}`
        setStatus('mailto')
        // Clear form after a short delay
        setTimeout(() => {
          setName('')
          setEmail('')
          setMessage('')
        }, 1000)
        return
      } catch (err) {
        console.error('Mailto error:', err)
        setStatus('error')
        return
      }
    }

    // Use Formspree if configured
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
        console.error('Formspree error:', res.status, res.statusText)
        setStatus('error')
      }
    } catch (err) {
      console.error('Formspree fetch error:', err)
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
      {status === 'mailto' && (
        <p className="text-blue-500">
          ✓ Opening your email client... If it doesn't open, please email: actionsatis@gmail.com
        </p>
      )}
      {status === 'error' && (
        <div className="text-red-500">
          <p>Unable to open email client. Please contact me directly at:</p>
          <a href="mailto:actionsatis@gmail.com" className="underline">actionsatis@gmail.com</a>
        </div>
      )}
    </form>
  )
}
