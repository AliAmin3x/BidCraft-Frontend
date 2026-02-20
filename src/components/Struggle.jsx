import React from 'react'
import { AiFillProject } from "react-icons/ai";
import { FaChartPie } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Struggle = () => {
  return (
    <div className='border-t-2 mx-4 sm:mx-8 md:mx-10 flex flex-col justify-center py-5 border-gray-300'>
      <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-10 text-gray-800'>
        Struggling to Get Responses?
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10'>

        <div className='bg-white flex flex-col items-center justify-center shadow-xl space-y-2 py-5 px-4 rounded-xl'>
          <div className='w-16 h-16 bg-orange-400 flex items-center justify-center rounded-full shadow-xl'>
            <AiFillProject size={35} />
          </div>
          <h1 className='font-semibold text-lg border-b-2 border-gray-300 text-center'>Wasting time on Proposals</h1>
          <p className='text-sm text-center'>Spending hours crafting proposals?</p>
        </div>

        <div className='bg-white flex flex-col items-center justify-center shadow-xl space-y-2 py-5 px-4 rounded-xl'>
          <div className='w-16 h-16 bg-green-500 flex items-center justify-center rounded-full shadow-xl'>
            <FaChartPie size={35} />
          </div>
          <h1 className='font-semibold text-lg border-b-2 border-gray-300 text-center'>Forgetting to Follow-Up</h1>
          <p className='text-sm text-center'>Not tracking your outreach?</p>
        </div>

        <div className='bg-white flex flex-col items-center justify-center shadow-xl space-y-2 py-5 px-4 rounded-xl sm:col-span-2 lg:col-span-1'>
          <div className='w-16 h-16 bg-amber-400 flex items-center justify-center rounded-full shadow-xl'>
            <IoMail size={35} />
          </div>
          <h1 className='font-semibold text-lg border-b-2 border-gray-300 text-center'>Not Getting Hired</h1>
          <p className='text-sm text-center'>Wondering Why Clients don't reply?</p>
        </div>

      </div>
    </div>
  )
}

export default Struggle