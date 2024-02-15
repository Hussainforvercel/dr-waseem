import React from 'react'
import { FaSquarePhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

function Page() {
    return (
        <div className='md:mx-96 bg-[#36A5B8] flex items-center justify-center md:w-1/2 m-2 rounded-2xl'>
            <div>
                <div className='text-center mb-3 md:text-4xl mt-5 text-2xl text-white'>
                    <h1 className=''>
                        Phone Number
                        <FaSquarePhone className='md:w-96 w-80 mt-5'/>
                        
                        </h1>
                </div>
                <div className='md:space-x-10 space-x-3 text-center text-white mb-2' >
                    <span className='text-xl'>
                        +92335-5027551
                    </span>
                    <span className='text-xl'>
                    +923004254130
                    </span>
                </div>
                <div className='text-center text-white  mb-2'>
                    <h1 className='text-2xl md:text-4xl '>

                        Email Address
                        <IoMailSharp  className='md:w-96 w-80 mt-5'/>
                    </h1>
                </div>
                <div className='space-x-10 text-center text-white text-xl mb-5'>
                    <span className='md:text-2xl'>
                        sarwardrwasim@gmail.com
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Page