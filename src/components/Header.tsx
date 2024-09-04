import { useState } from 'react'
import { Link, useLocation } from "react-router-dom";


function Header() {

  return (
    <>
      <header className='flex flex-row justify-between bg-gray-500 text-white'>
        <Link to="/home" className='text-2xl py-3 ml-3'>Community Hub</Link>
        <ul className='flex flex-row mr-3 [&>*]:mr-3 [&>*]:my-auto'>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/statistics">Statistics</Link>
        </ul>
      </header>
    </>
  )
}

export default Header
