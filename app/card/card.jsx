import React from 'react';
import { FaHeartPulse } from 'react-icons/fa6';
import { LiaStethoscopeSolid } from "react-icons/lia";
import { PiBabyFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";

function Card() {
  return (
    <div className='md:flex md:flex-col md:items-center bg-[#36A5B8] mt-10'>
      <h1 className='text-white text-4xl font-bold text-center mb-8 md:mt-10 py-5'>Our Services</h1>
      <p className='text-center text-white md:text-xl -mt-10'>Medical provides top-notch care in people's health specialties.</p>
      <div className='card-container mt-4 mb-10 py-10'>

        <div className='card hover:transation-all duration-300 delay-75 hover:translate-y-4 shadow-xl'>
          <div className=' rounded-full p-2 mb-5'>
            <FaHeartPulse className='h-20 w-20 text-[#36A5B8]' />
          </div>
          <h1 className=' text-[#36A5B8] text-2xl'><span className='px-5'>Pain Management </span>
          <br /><span className='px-20'>Services</span></h1>
          <div className='mt-5 text-4xl text-[#36A5B8]'>
            <FaPlus />
          </div>
        </div>

        <div className='card hover:transation-all duration-300 delay-75 hover:translate-y-4 shadow-xl'>
          <div className='rounded-full  p-2 mb-5'>
            <LiaStethoscopeSolid  className='h-20 w-20 text-[#36A5B8]' />
          </div>
          <h1 className=' text-[#36A5B8] text-2xl'><span className='px-16'>Surgical </span>
          <br /><span className='px-12'>Procedures</span></h1>
          <div className='mt-5 text-4xl text-[#36A5B8]'>
            <FaPlus />
          </div>
        </div>

        <div className='card hover:transation-all duration-300 delay-75 hover:translate-y-4 shadow-xl '>
          <div className=' rounded-full p-2 mb-5'>
            <PiBabyFill className='h-20 w-20 text-[#36A5B8]' />
          </div>
          <h1 className=' text-[#36A5B8] text-2xl'><span className='px-12'>Maternity </span>
          <br /><span className='px-12'>Services</span></h1>
          <div className='mt-5 text-4xl text-[#36A5B8]'>
            <FaPlus />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;
