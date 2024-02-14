import React from 'react';
import { FaPlus } from "react-icons/fa6";

const doctorsData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    image: '/teamdoc.jpg',
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    specialty: 'Dermatologist',
    image: '/teamdoc.jpg',
  },
  {
    id: 3,
    name: 'Dr. Mike Johnson',
    specialty: 'Orthopedic Surgeon',
    image: '/teamdoc.jpg',
  },
  {
    id: 4,
    name: 'Dr. Emily White',
    specialty: 'Pediatrician',
    image: '/teamdoc.jpg',
  },
];

function Page() {
  return (
    <div className='md:flex justify-center items-center gap-5 m-10'>
      {doctorsData.map((doctor) => (
        <div key={doctor.id} className='mb-24 md:mb-0 bg-gray-300 border-2 border-green-200 text-center rounded-3xl'>
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
  );
}

export default Page;
