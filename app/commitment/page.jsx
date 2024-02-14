import React from 'react';
import { RiHeartAddLine } from "react-icons/ri";

function Commitment() {
  return (
    <section className="text-gray-600 relative body-font opacity-60 bg-[#36A5B8] h-full bg-cover" style={{ backgroundImage: 'url("comit.jpeg")' }}>
      <div className="absolute inset-0 bg-[#36A5B8] opacity-20"></div>
      <div className="container relative z-10 px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
        <div className="flex justify-center items-center">
      <RiHeartAddLine className=" text-[#36A5B8]  w-36 h-36 mb-10 " />
    </div>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[#36A5B8]">Committed to You</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">we provide you with the most trusted provider of people's healthcare. We have a highly trained team of medical experts, advanced facilities, and an unwavering commitment to the welfare of our patients.</p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center justify-center">
          <button className="text-white bg-[#36A5B8] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Commitment;