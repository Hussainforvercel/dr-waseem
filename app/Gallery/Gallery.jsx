import React from 'react'

function Gallery() {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-[#36A5B8] lg:w-1/3 lg:mb-0 mb-4">
        Compassionate Care Expert Healing
        </h1>
        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
        Medical Mastery, Compassionate Care. Healing Expertise, Trusted Guardian. Lifesaver in Scrubs, Empathetic Hero. Wellness Wizard, Patient Ally. White Coat, Heart of Gold. Transforming Lives, Restoring Hope
        </p>
      </div>
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="/1.jpeg"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="/2.jpeg"
            />
          </div>
          <div className="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              className="w-full h-full object-cover object-center block"
              src="/3.jpeg"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-full">
            <img
              alt="gallery"
              className="w-full h-full object-cover object-center block"
              src="/4.jpeg"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="/5.jpeg"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <img
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="/6.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Gallery