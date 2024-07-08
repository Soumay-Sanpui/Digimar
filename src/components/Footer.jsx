import React from 'react'

const Footer = () => {
  return (
    <footer className='flex p-10 w-screen items-center justify-between'>
        <div className='flex flex-col gap-[3vw]'>
            <div className='flex flex-col gap-3'>
                <div>
                    <img src='/logof.png' alt='brand logo'/>
                </div>
                <p>Marketing strategy simplified.<br/> Digimar is a one-stop shop.</p>
            </div>    
            <div>
                <p className='font-semibold'>©2022 Terke. All right reserved</p>
            </div>
        </div>
        <div className='flex gap-[3vw]'>
            <div className='flex flex-col gap-6 cursor-pointer'>
                <h5 className='font-semibold'>Home</h5>
                <a className='hover:text-primary'>About Us</a>
                <a className='hover:text-primary'>Serivces</a>
                <a className='hover:text-primary'>Office</a>
            </div>
            <div className='flex flex-col gap-6 cursor-pointer'>
                <h5 className='font-semibold'>Lisence</h5>
                <a className='hover:text-primary'>Privacy Policy</a>
                <a className='hover:text-primary'>Copyright</a>
                <a className='hover:text-primary'>Email Address</a>
            </div>
            <div className='flex flex-col gap-6 cursor-pointer'>
                <h5 className='font-semibold'>Social Media</h5>
                <a className='hover:text-primary'>Instagram</a>
                <a className='hover:text-primary'>Facebook</a>
                <a className='hover:text-primary'>Twitter</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer