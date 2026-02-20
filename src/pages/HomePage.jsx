import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Struggle from '../components/Struggle'
import Proposal from '../components/Proposal'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import HeroWaves from '../components/HeroWaves'

const HomePage = () => {
  return (
    <div className='h-full'>
      <div className='h-screen'>
        <Navbar/>
        <HeroSection/>
      </div>
      <div>
        <Struggle/>
        <Proposal/>
        <HowItWorks/>
        <Footer/>
        <HeroWaves/>
      </div>
    </div>
  )
}

export default HomePage