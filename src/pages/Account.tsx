import { useState } from 'react'

import '../styles/App.css'
import { Link } from 'react-router-dom'


function Account() {

  return (
    <main className='pt-12 pb-10 px-[20vw]'>
      <h3 className='mt-16'>Name: John Doe</h3>


      <h3 className='mt-8'>Your Contributions & Statistics:</h3>
      <ul className='w-fit [&>p]:text-left mx-auto mt-4 pl-24'>
        <p>- Surveys Completed: 12</p>
        <p>- Suggestions Made: 8</p>
        <p>- Account Registered: 8 Jun 2023 (1.3 years old)</p>
      </ul>

      
    </main>
  )
}

export default Account
