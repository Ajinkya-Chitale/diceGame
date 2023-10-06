import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context';

const Score = () => {
  // Access state from global context file
  const {number, setNumber} = useContext(Context);
  const {selected, setSelected} = useContext(Context);
  const {score} = useContext(Context);

  // Function to handle number click event
  let btnList = document.querySelectorAll('.numberBtnList button');

  const handleNumber = (e) => {
    setNumber(Number(e.currentTarget.innerText));
    setSelected(true);
  }

  //change the class name whenever number state gets updated 
  useEffect(() => {
    for (const item of btnList) {
      item.innerText == number ? item.classList.add("primary") : item.classList.remove("primary");
    }
  },[number]);

  return (
    <div className='flex items-center justify-center sm:justify-between flex-col sm:flex-row px-4 mb-4'>
      <div className='flex flex-col mb-5'>
        <span className='text-6xl text-center font-medium'>{score}</span>
        <span className='text-2xl font-medium'>Total Score</span>
      </div>
      <div>
        <p className={`text-red-500 text-right mb-2 ${selected ? 'hidden' : '' }`}>You have not selected any number</p>
        <div className='flex gap-3 mb-3 numberBtnList'>
            <button type='button' className='border-2 h-10 w-10' onClick={(e) => handleNumber(e)}>1</button>
            <button type='button' className='border-2 h-10 w-10' onClick={(e) => handleNumber(e)}>2</button>
            <button type='button' className='border-2 h-10 w-10' onClick={(e) => handleNumber(e)}>3</button>
            <button type='button' className='border-2 h-10 w-10' onClick={(e) => handleNumber(e)}>4</button>
            <button type='button' className='border-2 h-10 w-10' onClick={(e) => handleNumber(e)}>5</button>
            <button type='button' className='border-2 h-10 w-10' onClick={(e) => handleNumber(e)}>6</button>
        </div>
        <p className='text-right font-semibold'>Select Number</p>
      </div>
    </div>
  )
}

export default Score
