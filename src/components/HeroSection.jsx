import React from 'react'
import HeroWavesTopGradient from './HeroWavesTopGradient'

const HeroSection = () => {
  return (
    <div className='flex justify-center'>
      <div>
        <HeroWavesTopGradient />
      </div>
      <div className='flex flex-col md:flex-row relative top-16 md:top-28 gap-8 md:gap-20 w-full mx-4 sm:mx-8 md:mx-16 pb-16'>
        
        {/* Text Content */}
        <div className='flex-1 w-full md:w-1/2 space-y-6 md:space-y-10 text-center md:text-left'>
          <h1 className='font-bold text-5xl sm:text-6xl md:text-4xl lg:text-6xl text-white'>
            Win More Freelancer Jobs with AI-Powered Proposals
          </h1>
          <p className='font-normal text-base sm:text-lg md:text-lg text-white'>
            Generate personalized proposals, track your outreach, and automate follow-ups in one powerful platform.
          </p>
          <div className='space-x-5 sm:space-x-8 flex flex-col sm:flex-row gap-4'>
            <button className='w-full sm:w-auto bg-[#2474e4] px-4 py-2 rounded-lg font-semibold text-white shadow-lg hover:bg-[#1e5bb8] transition duration-300 cursor-pointer'>
            Start Free - 10 Proposals
          </button>
          <button
  onClick={() => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className='w-full sm:w-auto bg-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition duration-300 cursor-pointer'
>
  See how it works
</button>
          </div>
        </div>

        <div className='w-full md:w-1/2 hidden md:flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5'>
  <img src="/Images/dashboard.png" alt="Dashboard Preview" className='shadow-2xl rounded-xl' />
</div>

      </div>
    </div>
  )
}

export default HeroSection