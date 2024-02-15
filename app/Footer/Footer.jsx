import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-[#36A5B8]">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <img src="/wasimlogo.png" className='w-46 -mt-20'  alt="" />
      </a>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Department
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Urology & </a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Renal Transplantion</a>
          </li>
         
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
         Addresses
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800"> 1. Gambat Institute of medical Sciences, Gambat</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"> 2. Haleema Centre Near Eid Gah Sakrand Road Nawabshah, sindh, Pakistan</a>
          </li>
         
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
          Social Media
        </h2>
        <nav className="list-none mb-10 flex gap-8">
          <li>
            <a href="https://web.facebook.com/drwasimsarwar" className="text-gray-600 hover:text-gray-800"> < FaFacebook className='md:w-10 w-6 h-6 md:h-10'/></a>
          </li>
          <li>
            <a href='https://www.youtube.com/@Dr.wasimsarwarbhatti' className="text-gray-600 hover:text-gray-800"><FaYoutube className='md:w-10 w-6 h-6 md:h-10'/></a>
          </li>
          <li>
            <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fdrwasimsarwar3' className="text-gray-600 hover:text-gray-800"><FaTwitter className='md:w-10 w-6 h-6 md:h-10'/></a>
          </li>
          <li>
            <a href='https://www.instagram.com/drwasimsarwar/' className="text-gray-600 hover:text-gray-800"><FaInstagram className='md:w-10 w-6 h-6 md:h-10'/></a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800"><FaLinkedin className='md:w-10 w-6 h-6 md:h-10'/></a>
          </li>
          <li>
            <a href='https://www.tiktok.com/@dr.wasimsarwar.bh?_t=8juegRefKgk&_r=1' className="text-gray-600 hover:text-gray-800"><FaTiktok className='md:w-10 w-6 h-6 md:h-10'/></a>
          </li>
        </nav>
      </div>
    
    </div>
  </div>
 
</footer>

  )
}

export default Footer