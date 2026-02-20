import React from 'react'
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

  return (
    <div className='border-t-2 mx-4 sm:mx-10 flex flex-col items-center justify-center py-5 border-gray-300 mt-10'>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl flex justify-center mb-5 text-gray-800 text-center px-2'>
        Stop Guessing. Start Winning Jobs.
      </h1>
      <button onClick={() => navigate('/sign-up')} className='bg-[#2474e4] py-2 w-40 sm:w-44 rounded-lg font-semibold text-white shadow-lg hover:bg-[#1e5bb8] transition duration-300 cursor-pointer'>
        Get Started
      </button>
    </div>
  )
}

export default Footer