import React from 'react';

const Button = ({color, text, click}) => {
  return (
    <button type='button' className={`h-10 w-36 sm:w-52 block m-auto lg:mr-0 ${color}`} onClick={click}>{text}</button>
  )
}

export default Button
