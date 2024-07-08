import React from 'react';

const Navbar = () => {
  const navLinks = ["Home", "About", "Service", "Office"];
  return (
    <nav className='flex flex-col md:flex-row items-center justify-center p-[2vw] px-[7vw] w-full'>
      <div className='w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0'>
        <img src='/logo.png' alt='brand logo' className='h-8 md:h-10'/>
      </div>
      <div className='flex gap-4 md:gap-8 w-full md:w-1/2 items-center justify-center md:justify-end'>
        {
          navLinks.map((link, index) => (
            <a className='cursor-pointer hover:text-primary text-sm md:text-base' key={index}>{link}</a>
          ))
        }
      </div>
    </nav>
  );
}

export default Navbar;
