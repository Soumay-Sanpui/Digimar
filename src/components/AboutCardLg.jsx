import React, { useState } from 'react'

const AboutCardLg = ({num,desc}) => {
    const [isHoverd, setIsHovred] = useState(false);
    return (
        <div onMouseEnter={()=>{setIsHovred(true)}} onMouseLeave={()=>{setIsHovred(false)}} className={`transition-all duration-300 ease-in-out ${isHoverd ? 'bg-crdtxt text-white':'bg-crdbg text-crdtxt'} rounded-3xl w-[40vw] flex flex-col cursor-pointer`}>
          <div className='flex items-end justify-end'>
            <img src={isHoverd ? '/abtstr.png' : '/abtstrw.png'} alt='about card star'/>
          </div>
          <div className='flex flex-col p-6 w-full'>
            <h2 className='text-[3vw] font-black'>{num}</h2>
            <p className='w-[70%]'>
              {desc}
            </p>
          </div>
        </div>
    )
}

export default AboutCardLg