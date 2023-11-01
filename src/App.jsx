import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Home from './pages/Home/home'
import FinanceApp from './pages/FinanceApp/FinanceApp'
import NBAApplication from './pages/NBAApp/NBAApp'
import WorkoutApplication from './pages/WorkoutApp/WorkoutApp'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header />
    <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/FinanceApplication" element={<FinanceApp />} />
        <Route path ="/NBA" element={<NBAApplication />} />
        <Route path ="/WorkoutApplication" element={<WorkoutApplication />} />
    </Routes>
    </>
  )
}

export default App
