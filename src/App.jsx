import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Home from './pages/Home/home'
import Experience from './pages/Experience/experience.jsx'
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects/projects'
import GIS from './pages/GIS/gis'
import UrbanPlanning from './pages/UrbanPlanning/UrbanPlanning.jsx'
import Software from './pages/SoftwareEngineering/software.jsx'
import Footer from './components/Footer/footer.jsx'

// looking to implement react-component for browser view adjustment compatible for mobile
// import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function App() {

  return (
    <div>
    <Header />
    <Routes>
        <Route exact path ="/" element={<Home />} />
        <Route exact path ="/Experience" element={<Experience />} />
        <Route exact path ="/GIS" element={<GIS />} />
        <Route exact path ="/UrbanPlanning" element={<UrbanPlanning />} />
        <Route exact path ="/Projects" element={<Projects />} />
        <Route exact path ="/software-engineering" element={<Software />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
