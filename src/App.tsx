import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'

import Header from './components/Header'

import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Statistics from './pages/Statistics.tsx'
import Page404 from './pages/Page404.tsx'

function App() {

  return (
    <>
       <Router>
          <Header></Header>
          <div className=''>
            <Routes>
            
              <Route path="*" element={<Page404></Page404>} /> 
              <Route path="/home" element={<Home></Home>} />
              <Route path="/about" element={<About></About>} />
              <Route path="/statistics" element={<Statistics></Statistics>} />

            </Routes>
          </div>
        </Router>
    </>
  )
}

export default App
