import React from 'react';
import { FaStethoscope } from 'react-icons/fa';
import { PiBabyBold } from 'react-icons/pi';
import { FaHeartPulse } from 'react-icons/fa6';
import { FaAppleAlt } from 'react-icons/fa';


function Card() {
  return (
    <div className='md:flex md:justify-center md:items-center bg-[#36A5B8]'>
    <div className='card-container'>
      <div className='card'>
        <div className='bg-[#36A5B8] rounded-full p-2 mb-5'>
          <FaHeartPulse className='h-9 w-9 text-white' />
        </div>
        <h1 className='font-bold text-[#36A5B8] text-2xl'>Gynecological 
        <br />Services</h1>
      </div>




      <div className='card'>
        <div className='bg-[#36A5B8] rounded-full p-2 mb-5'>
          <FaHeartPulse className='h-9 w-9 text-white' />
        </div>
        <h1 className='font-bold text-[#36A5B8] text-2xl'>Surgical <br /> Procedures</h1>
        
      </div>



      <div className='card'>
        <div className='bg-[#36A5B8] rounded-full p-2 mb-5'>
          <FaHeartPulse className='h-9 w-9 text-white' />
        </div>
        <h1 className='font-bold text-[#36A5B8] text-2xl'>Maternity <br />Services</h1>
      </div>


  



     
      {/* Repeat the above card structure for other cards */}

    </div>
    </div>

  );
}

export default Card;
