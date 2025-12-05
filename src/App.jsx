import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageWrapper from './components/PageWrapper'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App(){
  const [dark, setDark] = useState(false)

  useEffect(()=>{
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefers)
    document.documentElement.classList.toggle('dark', prefers)
  },[])

  function toggleDark(){
    setDark(d=>!d)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className={dark ? 'min-h-screen bg-gray-900 text-gray-100' : 'min-h-screen bg-gray-50 text-gray-800'}>
        <Navbar onToggleDark={toggleDark} dark={dark} />

        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </PageWrapper>
      </div>
    </Router>
  )
}
