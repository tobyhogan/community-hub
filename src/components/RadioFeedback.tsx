import { useState } from 'react'



function RadioFeedback({focus}) {

  return (
    <div className='flex flex-row w-fit mx-auto mt-3 [&>input]:ml-2 [&>label]:ml-1'>
      <input type="radio" id="html" name={focus} value="agree"/>
      <label>Agree</label>
      <input type="radio" id="css" name={focus} value="partially_agree"/>
      <label>Partially Agree</label>
      <input type="radio" id="javascript" name={focus} value="neutral"/>
      <label>Neutral</label>
      <input type="radio" id="javascript" name={focus} value="partially_disagree"/>
      <label>Partially Disagree</label>
      <input type="radio" id="javascript" name={focus} value="disagree"/>
      <label>Disagree</label>
    </div>
  )
}

export default RadioFeedback
