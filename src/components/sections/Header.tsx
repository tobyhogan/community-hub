import { useState } from 'react'
import { Link, useLocation } from "react-router-dom";


function Header() {

  return (
    <header className='flex flex-row justify-between fixed w-full bg-gray-500 text-white'>
      <Link to="/home" className='text-2xl py-2.5 ml-[3vw]'>Community Hub</Link>
      <ul className='flex flex-row mr-[3vw] [&>*]:mr-[2vw] [&>*]:my-auto'>
        <Link to="/home">Home</Link>
        <Link to="/feedback">Give Feedback</Link>
        <Link to="/suggestions">Suggestions</Link>
        <Link to="/statistics">Results</Link>
        <Link to="/home" className='Button2'>Log In / Sign Up</Link>
        <Link to="/account">Your Account</Link>
      </ul>
    </header>
  )
}

export default Header
