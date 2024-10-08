import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import '../styles/App.css'

import Header from '../components/sections/Header.tsx'

import Home from '../pages/Home.tsx'
import Account from '../pages/Account.tsx'
import About from '../pages/About.tsx'
import Feedback from '../pages/Feedback.tsx'
import Statistics from '../pages/Statistics.tsx'
import Suggestions from '../pages/Suggestions.tsx'
import Page404 from '../pages/Page404.tsx'

function App() {

  return (
    <>
       <Router>
          <Header></Header>
          <Routes>
          
            <Route path="*" element={<Page404></Page404>} /> 
            <Route path="/home" element={<Home></Home>} />
            <Route path="/account" element={<Account></Account>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/statistics" element={<Statistics></Statistics>} />
            <Route path="/suggestions" element={<Suggestions></Suggestions>} />
            <Route path="/feedback" element={<Feedback></Feedback>} />

          </Routes>
        </Router>
    </>
  )
}

export default App
