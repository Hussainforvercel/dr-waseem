import React from 'react'

function Hero() {
  return (
    <div>
<section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 md:px-20 lg:pr-24 md:pr-16 flex flex-col md:items-start  md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 tracking-in-contract" > Meet Dr Waseem
            </h1>
            <p className="mb-8 leading-relaxed">Dr. Waseem: Renowned nephrologist, compassionate care, expert in kidney health, fostering well-being through personalized treatment and preventive measures.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-[#36A5B8] border border-white py-2 px-6 focus:outline-none hover:bg-[#b5cace] rounded text-lg">Book a consultation</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-[#36A5B8] pr-20 rounded-full">
            <img className="object-cover object-center rounded-xl slide-in-bck-center mx-8" alt="hero" src="/profile.png" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero