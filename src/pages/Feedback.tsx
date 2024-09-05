import { useState } from 'react'

import RadioFeedback from '../components/RadioFeedback'


function Feedback() {

  return (
    <main className='pt-12 pb-20'>
      <h1 className='mt-5'>Feedback</h1>
      <h3 className='mt-2'>Please choose the extent that you agree with the statements.</h3>

      <form className='[&>h4]:mt-12'>

        <h4>"I feel safe in Frome"</h4>
        <RadioFeedback focus="safety"/>

        <h4>"There are good work opportunities in Frome"</h4>
        <RadioFeedback focus="work_opportunities"/>

        <h4>"I feel connected to the Frome community"</h4>
        <RadioFeedback focus="frome_safety"/>

        <h4>"I am satisfied with public transport in Frome"</h4>
        <RadioFeedback focus="frome_safety"/>

        <h4>"Young people are OK in Frome"</h4>
        <RadioFeedback focus="frome_safety"/>


        <div className='w-fit mx-auto mt-8'>
          <button className='Button1'>Submit</button>
        </div>

      </form>

    </main>
  )
}

export default Feedback
