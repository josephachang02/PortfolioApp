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
    <div>
    <Header />
    <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route exact path ="/Experience" element={<Experience />} />
        <Route exact path ="/GIS" element={<GIS />} />
        <Route exact path ="/Projects" element={<Projects />} />
        <Route exact path ="/NBA" element={<NBAApplication />} />
        <Route exact path ="/WorkoutApplication" element={<WorkoutApplication />} />
    </Routes>
    </div>
  );
}

export default App;
