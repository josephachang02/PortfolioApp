import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Home from './pages/Home/home'
import FinanceApp from './pages/FinanceApp/FinanceApp'
import NBAApplication from './pages/NBAApp/NBAApp'
import WorkoutApplication from './pages/WorkoutApp/WorkoutApp'
import Experience from './pages/Experience/experience.jsx'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects/projects'
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import GIS from './pages/GIS/gis'

function App() {

  return (
    <>
    <Header />
    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/Experience" element={<Experience />} />
        <Route path ="/GIS" element={<GIS />} />
        <Route path ="/Projects" element={<Projects />} />
        <Route path ="/NBA" element={<NBAApplication />} />
        <Route path ="/WorkoutApplication" element={<WorkoutApplication />} />
    </Routes>
    </>
  )
}

export default App
