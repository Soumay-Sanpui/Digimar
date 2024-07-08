import React from 'react'
import Button from '../Button'

const CTASection = () => {
  return (
    <div className='bg-[url("/CTAimg.png")] p-10 py-32 bg-cover bg-no-repeat flex flex-col gap-4'>
        <h2 className='uppercase text-white text-[3vw] font-black'>Ready to work<br /> with us?</h2>
        <div>
            <button className={`bg-white text-primary font-semibold rounded-full p-[1.5vw] px-[2.5vw]`}>Get Started</button>
        </div>
    </div>
  )
}

export default CTASection