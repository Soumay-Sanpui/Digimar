import React from 'react'
import Navbar from '../Navbar'
import Button from '../Button'

const HeroSection = () => {
  return (
    <div className='bg-black text-white w-screen min-h-screen'>
        <Navbar />
        <div className='px-[7vw] py-[7vw] flex flex-col gap-10'>
            {/* hero announcer */}
            <div className='flex flex-col items-center justify-center text-center'>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8'>
                    <h2 className="text-[8vw] md:text-[5vw] font-black">MAKE YOUR</h2>
                    <div className='w-[90%] md:w-auto'>
                    <svg width="454" height="84" viewBox="0 0 454 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="454" height="84" rx="42" fill="#2A2A2A"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M47.0327 11H36.9678V29.8509L23.5518 16.435L16.4348 23.5519L29.8506 36.9678H11V47.0327H29.6773L16.4348 60.2752L23.5518 67.3922L36.9678 53.9762V73H47.0327V54.1498L60.2754 67.3926L67.3924 60.2756L54.1495 47.0327H73V36.9678H53.9762L67.3924 23.5516L60.2754 16.4346L47.0327 29.6773V11Z" fill="#FF8E50"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M119.033 11H108.968V29.8509L95.5518 16.435L88.4348 23.5519L101.851 36.9678H83V47.0327H101.677L88.4348 60.2752L95.5518 67.3922L108.968 53.9762V73H119.033V54.1498L132.275 67.3926L139.392 60.2756L126.15 47.0327H145V36.9678H125.976L139.392 23.5516L132.275 16.4346L119.033 29.6773V11Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M155.69 20.117L162.807 13L193.062 43.2549L185.945 50.3719L185.913 50.34L164.952 71.3011L157.835 64.1841L173.71 48.3096H155V38.3096L173.883 38.3096L155.69 20.117Z" fill="#FF8E50"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M203.69 20.117L210.807 13L241.062 43.2549L233.945 50.3719L233.913 50.34L212.952 71.3011L205.835 64.1841L221.71 48.3096H203V38.3096L221.883 38.3096L203.69 20.117Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M251.69 20.117L258.807 13L289.062 43.2549L281.945 50.3719L281.913 50.34L260.952 71.3011L253.835 64.1841L269.71 48.3096H251V38.3096L269.883 38.3096L251.69 20.117Z" fill="#FF8E50"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M299.69 20.117L306.807 13L337.062 43.2549L329.945 50.3719L329.913 50.34L308.952 71.3011L301.835 64.1841L317.71 48.3096H299V38.3096L317.883 38.3096L299.69 20.117Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M347.69 20.117L354.807 13L385.062 43.2549L377.945 50.3719L377.913 50.34L356.952 71.3011L349.835 64.1841L365.71 48.3096H347V38.3096L365.883 38.3096L347.69 20.117Z" fill="#FF8E50"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M395.69 20.117L402.807 13L433.062 43.2549L425.945 50.3719L425.913 50.34L404.952 71.3011L397.835 64.1841L413.71 48.3096H395V38.3096L413.883 38.3096L395.69 20.117Z" fill="white"/>
                    </svg>
                    </div>
                </div>

                <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-4 md:mt-0'>
                    {/* white rounded bar */}
                    <div className='w-full md:w-[45%] h-[10vw] md:h-[5.5vw] bg-white rounded-full'></div>
                    <h2 className="text-[8vw] md:text-[5vw] font-black text-primary">BUSINESS</h2>
                </div>

                <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-4 md:mt-0'>
                    <div className='w-[90%] md:w-auto'>
                        <svg width="160" height="84" viewBox="0 0 160 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="160" height="84" rx="42" fill="#2B2B2B"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M49.0327 11H38.9678V29.8509L25.5518 16.435L18.4348 23.5519L31.8506 36.9678H13V47.0327H31.6773L18.4348 60.2752L25.5518 67.3922L38.9678 53.9762V73H49.0327V54.1498L62.2754 67.3926L69.3924 60.2756L56.1495 47.0327H75V36.9678H55.9762L69.3924 23.5516L62.2754 16.4346L49.0327 29.6773V11Z" fill="#54A7F8"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M121.033 11H110.968V29.8509L97.5518 16.435L90.4348 23.5519L103.851 36.9678H85V47.0327H103.677L90.4348 60.2752L97.5518 67.3922L110.968 53.9762V73H121.033V54.1498L134.275 67.3926L141.392 60.2756L128.15 47.0327H147V36.9678H127.976L141.392 23.5516L134.275 16.4346L121.033 29.6773V11Z" fill="#FF8E50"/>
                        </svg>
                    </div>
                    <h2 className="text-[8vw] md:text-[5vw] font-black">TO THE MOON</h2>
                    <div className='bg-bkg flex items-center justify-center gap-5 w-max h-[10vw] md:h-[5.5vw] px-[4vw] md:px-[2vw] rounded-full text-[6vw] md:text-[3vw]'>
                        <p>🚀🚀</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-4 md:mt-0'>
                <div className='w-full md:w-auto text-center md:text-left'>
                    <Button text={"Get Started"}/>
                </div>
                <div className='w-full md:w-auto text-center md:text-left'>
                    <p className='text-txt text-[4vw] md:text-[1.5vw]'>We are Digimar, a marketing agency with more than 10 years<br />of experience, and we focus on developing your business with<br/>reliable strategies managed by our professional people.</p>
                </div>
                <div className='w-full md:w-auto text-center md:text-left'>
                    <p className='text-txt text-[4vw] md:text-[1.5vw]'>Based on</p>
                    <p className='text-[4vw] md:text-[1.5vw]'>Surakarta, Indonesia</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
