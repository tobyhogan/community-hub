import { useState } from 'react'

import '../styles/App.css'
import { Link } from 'react-router-dom'


function Home() {

  return (
    <main className='pt-12 pb-10 px-[20vw]'>
      <h2 className='mt-9'>What is the community hub?</h2>
      <p className='mt-3'>
        The community hub provides a place where feedback and data about frome can be collected and processed by the council and 
        citizens, this feedback can then be used to inform decisions and actions.
      </p>
      <h2 className='mt-3'>Give your feedback</h2>
      <p className='mt-2'>
        Contribute to the project now by giving your feedback about what frome needs!
      </p>
      <div className='w-fit mx-auto mt-4'>
        <Link to="/feedback" className='Button1'>Give Feedback</Link>
      </div>
    </main>
  )
}

export default Home
