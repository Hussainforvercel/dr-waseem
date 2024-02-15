import React from 'react';
import { FaPlus } from "react-icons/fa6";

const doctorsData = [
  {
    id: 1,
    name: 'Dr Sadia',
    specialty: 'Cardiologist',
    image: '/sadia.jpeg',
  },
  {
    id: 2,
    name: 'Dr. Shabana Wasim',
    specialty: 'Gynecologist',
    image: '/shabana.jpeg',
  },
  {
    id: 3,
    name: 'Dr. Naeem Karim Bhatti',
    specialty: 'General Surgeon',
    image: '/naeem.jpeg',
  },
  {
    id: 4,
    name: 'Dr. Temina',
    specialty: 'Pediatrician',
    image: '/Taimina.jpeg',
  },
];

function Page() {
  return (
    <div className='flex flex-col items-center bg-[#36A5B8] m-5 rounded-3xl p-5'>
      <h1 className='text-white md:text-4xl text-2xl font-bold md:mb-36 mb-28 mt-5 text-center'>Meet Our Doctors</h1>
      <div className='md:flex justify-center gap-5'>
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className='mb-28 md:mb-10 bg-gray-300 border-2 border-green-200 text-center rounded-3xl hover:transation-all duration-300 delay-75 hover:translate-y-4 shadow-xl'>
            <div>
              <div className='w-36 h-36 p-2 bg-white rounded-full mx-auto -mt-20'>
                <img src={doctor.image} alt={doctor.name} className='rounded-full object-cover w-full h-full' />
              </div>
              <h1 className='py-2 text-3xl'>{doctor.name}</h1>
              <span>{doctor.specialty}</span>
            </div>
            <div className='px-5 py-3'>
              <p className='text-sm md:text-base lg:text-lg xl:text-xl'>With over a decade of experience, {doctor.name} is the resident expert in {doctor.specialty}.</p>
            </div>
            <div className='flex items-center justify-center mb-10'>
              <div className='mt-5 text-4xl text-[#36A5B8]'>
                <FaPlus />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
