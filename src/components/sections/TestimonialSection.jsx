import React from 'react'

const TestimonialSection = () => {
  return (
    <div className='text-white py-28 w-screen mi-h-screen flex flex-col justify-center gap-[3vw] bg-[url("/tesimg.png")] bg-cover bg-no-repeat'>
        <div>
            <h2 className='font-black text-[4vw] uppercase'>
                "I really enjoyed working<br />with you guys, you guys are<br />very communicative and<br />quick to do the job. I really<br /> can't wait to work with you<br />again!"
            </h2>
        </div>
        <div className='flex flex-col justify-center gap-[3vw]'>
            <div className='flex gap-5'>
                <div className='rounded-full w-[4vw] h-[4vw] bg-txt'></div>
                <div>
                    <p>Alexa Christiany</p>
                    <p className='text-txt'>CEO Binst</p>
                </div>
            </div>
            <div className='flex gap-6'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.5" cx="20" cy="20" r="20" transform="matrix(-1 0 0 1 40 0)" fill="white"/>
                        <path d="M28.5723 20.3184H10.7945" stroke="black" stroke-width="2.53968" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.6826 11.4277L10.7937 20.3166L19.6826 29.2055" stroke="black" stroke-width="2.53968" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="white"/>
                        <path d="M11.4277 20.3184H29.2055" stroke="black" stroke-width="2.53968" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.3174 11.4277L29.2063 20.3166L20.3174 29.2055" stroke="black" stroke-width="2.53968" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            </div>
        </div>
    </div>
  )
}

export default TestimonialSection