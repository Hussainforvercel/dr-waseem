import React from 'react';

function Hero() {
  return (
    <div
      className='relative bg-no-repeat bg-cover bg-center'
      style={{
        backgroundImage: 'url("1.png")',
      }}
    >
      <div
        className="absolute inset-0 bg-[#36A5B8] opacity-60"
        style={{ zIndex: '-1', backdropFilter: 'blur(10px) opacity-10' }}
      ></div>
      <section className="relative text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 md:px-20 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white tracking-in-contract">Meet Dr Waseem</h1>
            <p className="mb-8  text-xl leading-relaxed text-white">Dr. Waseem: Renowned nephrologist, compassionate care, expert in kidney health, fostering well-being through personalized treatment and preventive measures.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white hover:transation-all duration-300 delay-75 hover:translate-y-4 bg-[#36A5B8] border border-white py-2 px-6 focus:outline-none hover:bg-[#b5cace] rounded text-lg">Book a consultation</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 pr-20 rounded-full">
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
