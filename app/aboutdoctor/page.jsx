import React from 'react';

function AboutDoc() {
  return (
    <div className='p-8 mx-2 md:mx-10 text-white bg-[#36A5B8] mb-10 mt-10 rounded-xl flex flex-col md:flex-row items-center'>
      <img
        src='/waseeem.jpeg'  
        alt='Doctor Image'
        className='w-64 h-64 rounded-full mb-4 md:mb-0 md:mr-4'
      />

      <div>
        <h1 className='text-2xl md:text-3xl font-bold mb-2 md:mb-4'>About Me</h1>
        <ul className='list-disc ml-4 mb-4'>
          <li>Dr. Wasim Sarwar Bhatti</li>
          <li>Associate Professor</li>
          <li>Kidney Transplant Surgeon</li>
          <li>Inspector of Colleges</li>
          <li>Head of Department (BS-MT) Dialysis Care</li>
          <li>Department of Urology and Renal Transplantation</li>
          <li>Gambat Medical College/Gambat Institute of Science, Gambat, Sindh, Pakistan</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutDoc;
