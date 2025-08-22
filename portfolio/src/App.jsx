import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import Community from './components/Community'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {


  return (
    <BrowserRouter>
            < Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/community" element={<Community/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
    </BrowserRouter>
  )
}

export default App
