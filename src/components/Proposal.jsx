import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { MdAreaChart } from "react-icons/md";
import { TbAutomaticGearbox } from "react-icons/tb";

const Proposal = () => {
  return (
    <div className='border-t-2 mx-4 sm:mx-8 md:mx-10 flex flex-col justify-center py-5 border-gray-300 mt-10'>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-10 text-gray-800'>
        Your AI Proposal Engine
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>

        <div className='bg-gray-300 flex flex-col items-center justify-center shadow-xl space-y-2 py-5 px-4 rounded-xl'>
          <div className='flex flex-row items-center justify-center gap-5 border-b-2 border-gray-500 pb-2 w-full'>
            <div className='w-16 h-16 bg-blue-600 flex-shrink-0 flex items-center justify-center rounded-full shadow-xl'>
              <IoDocumentText size={35} />
            </div>
            <h1 className='font-semibold text-base sm:text-lg'>Smart Proposal Creation</h1>
          </div>
          <p className='text-sm text-center'>Instantly Create tailored proposals</p>
        </div>

        <div className='bg-gray-300 flex flex-col items-center justify-center shadow-xl space-y-2 py-5 px-4 rounded-xl'>
          <div className='flex flex-row items-center justify-center gap-5 border-b-2 border-gray-500 pb-2 w-full'>
            <div className='w-16 h-16 bg-green-500 flex-shrink-0 flex items-center justify-center rounded-full shadow-xl'>
              <MdAreaChart size={35} />
            </div>
            <h1 className='font-semibold text-base sm:text-lg'>Track Your Outreach</h1>
          </div>
          <p className='text-sm text-center'>Manage all your proposals in one place</p>
        </div>

        <div className='bg-gray-300 flex flex-col items-center justify-center shadow-xl space-y-2 py-5 px-4 rounded-xl sm:col-span-2 lg:col-span-1'>
          <div className='flex flex-row items-center justify-center gap-5 border-b-2 border-gray-500 pb-2 w-full'>
            <div className='w-16 h-16 bg-orange-400 flex-shrink-0 flex items-center justify-center rounded-full shadow-xl'>
              <TbAutomaticGearbox size={35} />
            </div>
            <h1 className='font-semibold text-base sm:text-lg'>Automated Follow-Ups</h1>
          </div>
          <p className='text-sm text-center'>Send timely reminders to clients</p>
        </div>

      </div>
    </div>
  )
}

export default Proposal