import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Thesus from './pages/Thesus'
import WeekendBoots from './pages/WeekendBoots'
import RainBoots from './pages/RainBoots'
import ModernWinterBoots from './pages/ModernWinterBoots'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <main className='w-full'>
      <Routes>
        <Route path="/" element={<Thesus/>}/>
        <Route path="/weekendboots" element={<WeekendBoots/>}/>
        <Route path="/rainboots" element={<RainBoots/>}/>
        <Route path="/modernwinterboots" element={<ModernWinterBoots/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
      </main>
    </div>
  )
}

export default App
