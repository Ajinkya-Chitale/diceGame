import React from 'react'

const Rules = () => {
  return (
    <div className='bg-red-100 my-8 px-5 py-3 max-w-3xl mx-5 lg:mx-auto'>
      <h3 className='font-bold text-xl mb-3'>How to play dice game</h3>
      <ul className='text-base list-disc ml-6'>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>After click on  dice if selected number is equal to dice number you will get same point as dice</li>
        <li>If you get wrong guess then  2 point will be dedcuted</li>
      </ul>
    </div>
  )
}

export default Rules
