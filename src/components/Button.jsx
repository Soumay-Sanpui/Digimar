import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`bg-primary text-white font-semibold rounded-full p-[1.5vw] px-[2.5vw] ${className}`}>{text}</button>
  )
}

export default Button