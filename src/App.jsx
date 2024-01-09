import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Home from './pages/Home/home'
import FinanceApp from './pages/FinanceApp/FinanceApp'
import NBAApplication from './pages/NBAApp/NBAApp'
import WorkoutApplication from './pages/WorkoutApp/WorkoutApp'
import Experience from './pages/Experience/experience'
import { Routes, Route } from 'react-router-dom'
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';


function App() {

  return (
    <>
    <Header />
    <Routes>
        <Route path ="/" element={<Home />} />

        <Route path ="/experience" element={<Experience />} />
        <Route path ="/FinanceApplication" element={<FinanceApp />} />
        <Route path ="/NBA" element={<NBAApplication />} />
        <Route path ="/WorkoutApplication" element={<WorkoutApplication />} />
    </Routes>
    </>
  )
}

export default App
