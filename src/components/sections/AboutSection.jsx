import React from 'react'
import AboutCard from '../AboutCard'
import Button from '../Button'
import AboutCardLg from '../AboutCardLg'

const AboutSection = () => {
  const smcards = [
    {
      title : "60M+",
      desc: "Total Revenue generated from our portfolio"
    },
    {
      title: "10+",
      desc: "Experience helping clients to grow their business rapidly"
    },
    {
      title: "700+",
      desc: "Projects that we have done, and make clients happy"
    }
  ];

  const lgCards = [
    {
      title: "SEO",
      desc: "Helping clients to increase traffic by setting SEO, which aims to get the client's website to be on search engines"
    },
    {
      title: "SOCMED",
      desc: "Help clients to increase their business traffic by making social media more attractive and also good",
    },
    {
      title: "WEBSITE",
      desc: "Help clients to increase their business traffic by creating a website so that the company looks professional and can also increase customers"
    },
    {
      title: "PAID MEDIA",
      desc: "Help clients to increase their business traffic by advertising on several platforms with a strategy from a professional team"
    }
  ]
  return (
    <div className='w-screen min-h-screen my-[3vw] p-[3vw] flex flex-col gap-[4vw] justify-center'>
        <div className='flex items-center justify-between w-full px-[5vw]'>
            <h2 className='text-[4vw] font-black'>WE'RE ON A MISSION TO<br />HELP <span className='text-primary'>BUSINESS</span> <span className='text-org'>GROW</span><br />FASTER THAN EVER.</h2>
            <p className='text-xl'>
                We are Digimar, a marketing<br /> agency with more than 10<br />years of experience, and we<br /> focus on developing your<br />business with reliable<br />strategies managed by our<br />professional people.
            </p>
        </div>
        {/* small cards section */}
        <div className='flex gap-6 p-10'>
          {
            smcards.map((crd,index)=> (
              <AboutCard key={index} num={crd.title} desc={crd.desc}/>
            ))
          }
        </div>

        {/* second section */}
        <div className='flex px-[5vw] items-center justify-between'>
          <h2 className='font-black text-[3vw]'>FULL POTENTIAL<br/> <span className='text-primary'>MARKETING</span> <span className='text-org'>SERVICE</span></h2>
          <div className='flex flex-col items-start justify-center gap-4'>
            <p>Marketing strategy simplified.<br />Digimar is a one-stop shop.</p>
            <Button text={"Get Started"}/>
          </div>
        </div>

          {/* lg cards */}
        <div className='flex flex-wrap items-center justify-around px-[3vw] gap-8'>
          {
            lgCards.map((card,index)=>(
              <AboutCardLg num={card.title} desc={card.desc} key={index}/>
            ))
          }
        </div>

        {/* video section */}
        <div className='w-full'>

          <div className='flex px-[5vw] w-full items-center justify-between my-[4vw]'>
            <h2 className='font-black text-[4vw]'>MARKETING AGENCY<br /> WITH <span className='text-primary'>PROFESSIONAL</span>AND<br /><span className='text-org'>EXPERIENCED</span>TEAM</h2>

            <div>
              <svg width="353" height="84" viewBox="0 0 353 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="353" height="84" rx="42" fill="#2A2A2A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M47.0327 11H36.9678V29.852L23.5516 16.4358L16.4346 23.5527L29.8506 36.9687H11V47.0337H29.6753L16.4348 60.2742L23.5518 67.3912L36.9678 53.9752V73H47.0327V54.1509L60.2752 67.3934L67.3922 60.2764L54.1495 47.0337H73V36.9688H53.9742L67.3924 23.5506L60.2754 16.4336L47.0327 29.6763V11Z" fill="#FF8E50"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M119.033 11H108.968V29.852L95.5516 16.4358L88.4346 23.5527L101.851 36.9687H83V47.0337H101.675L88.4348 60.2742L95.5518 67.3912L108.968 53.9752V73H119.033V54.1509L132.275 67.3934L139.392 60.2764L126.149 47.0337H145V36.9688H125.974L139.392 23.5506L132.275 16.4336L119.033 29.6763V11Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M155.69 20.117L162.807 13L193.062 43.2549L185.945 50.3719L185.913 50.34L164.952 71.3011L157.835 64.1841L173.711 48.3086H155V38.3086L173.882 38.3086L155.69 20.117Z" fill="#FF8E50"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M203.69 20.117L210.807 13L241.062 43.2549L233.945 50.3719L233.913 50.34L212.952 71.3011L205.835 64.1841L221.711 48.3086H203V38.3086L221.882 38.3086L203.69 20.117Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M251.69 20.117L258.807 13L289.062 43.2549L281.945 50.3719L281.913 50.34L260.952 71.3011L253.835 64.1841L269.711 48.3086H251V38.3086L269.882 38.3086L251.69 20.117Z" fill="#FF8E50"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M299.69 20.117L306.807 13L337.062 43.2549L329.945 50.3719L329.913 50.34L308.952 71.3011L301.835 64.1841L317.711 48.3086H299V38.3086L317.882 38.3086L299.69 20.117Z" fill="white"/>
              </svg>
            </div>
          </div>

          <div className='my-[3vw] w-full flex px-[4vw] items-center justify-between'>
            <div>
              <div className='bg-bkg/35 h-[20vw] w-[40vw] rounded-xl flex items-center justify-center'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.4" cx="40" cy="40" r="40" fill="white"/>
                  <path d="M27.1992 58.5149V21.334L59.7326 39.9245L27.1992 58.5149Z" fill="white"/>
                </svg>
              </div>
            </div>
            <div className='flex flex-col gap-8'>
              <p className='text-xl'>
                  We are Digimar, a marketing<br /> agency with more than 10<br />years of experience, and we<br /> focus on developing your<br />business with reliable<br />strategies managed by our<br />professional people.
              </p>
              <Button text={"Learn More"}/>
            </div>
          </div>

        </div>


    </div>
  )
}

export default AboutSection