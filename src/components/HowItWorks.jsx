import React from 'react'
import { MdVerified } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <div className='border-t-2 mx-4 sm:mx-8 md:mx-10 flex flex-col justify-center py-5 border-gray-300 mt-10'>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-10 text-gray-800'>
        How It Works
      </h1>

      <div className='flex flex-col lg:grid lg:grid-cols-3 gap-6 mx-2 sm:mx-5'>

        {/* Step 1 */}
        <div className='relative'>
          <div className='bg-gray-300 flex flex-col items-center justify-center shadow-xl space-y-2 py-5 px-4 rounded-xl'>
            <div className='flex flex-row items-center justify-center gap-5 border-b-2 border-gray-500 pb-2 w-full'>
              <div className='w-12 h-12 flex-shrink-0 bg-blue-700 text-white flex items-center justify-center rounded-full shadow-xl text-3xl font-bold'>1</div>
              <h1 className='font-semibold text-base sm:text-lg'>Paste Job Description</h1>
            </div>
            <div className='w-2/3 flex flex-row gap-2 items-center'>
              <MdVerified className='flex-shrink-0' />
              <p className='text-sm'>Add the job Details.</p>
            </div>
          </div>
          {/* Arrow right on desktop */}
          <div className='hidden lg:block absolute bottom-3 right-0 transform translate-x-1/2'>
            <BiSolidRightArrow size={30} />
          </div>
          {/* Arrow down on mobile */}
          <div className='flex lg:hidden justify-center mt-3'>
            <BiSolidDownArrow size={24} />
          </div>
        </div>

        {/* Step 2 */}
        <div className='relative'>
          <div className='bg-gray-300 flex flex-col items-center justify-center shadow-xl space-y-2 py-5 px-4 rounded-xl'>
            <div className='flex flex-row items-center justify-center gap-5 border-b-2 border-gray-500 pb-2 w-full'>
              <div className='w-12 h-12 flex-shrink-0 bg-blue-700 text-white flex items-center justify-center rounded-full shadow-xl text-3xl font-bold'>2</div>
              <h1 className='font-semibold text-base sm:text-lg'>Generate Proposals</h1>
            </div>
            <div className='w-2/3 flex flex-row gap-2 items-center'>
              <MdVerified className='flex-shrink-0' />
              <p className='text-sm'>Get a custom proposal in seconds.</p>
            </div>
          </div>
          {/* Arrow right on desktop */}
          <div className='hidden lg:block absolute bottom-3 right-0 transform translate-x-1/2'>
            <BiSolidRightArrow size={30} />
          </div>
          {/* Arrow down on mobile */}
          <div className='flex lg:hidden justify-center mt-3'>
            <BiSolidDownArrow size={24} />
          </div>
        </div>

        {/* Step 3 */}
        <div className='bg-gray-300 flex flex-col items-center justify-center shadow-xl space-y-2 py-5 px-4 rounded-xl'>
          <div className='flex flex-row items-center justify-center gap-5 border-b-2 border-gray-500 pb-2 w-full'>
            <div className='w-12 h-12 flex-shrink-0 text-3xl font-bold bg-blue-700 text-white flex items-center justify-center rounded-full shadow-xl'>3</div>
            <h1 className='font-semibold text-base sm:text-lg'>Automate Follow-Ups</h1>
          </div>
          <div className='w-2/3 flex flex-row gap-2 items-center'>
            <MdVerified className='flex-shrink-0' />
            <p className='text-sm'>Track and Follow Up easily.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HowItWorks