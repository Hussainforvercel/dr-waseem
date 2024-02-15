"use client"
import React, { useState } from 'react';
import Image from 'next/image';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <nav className="bg-[#36A5B8] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/logo.png" alt="Description of Image" width={100} height={100} />
        </a>

        <div className="hidden w-full md:block md:w-auto px-20" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-gray-100 rounded-lg bg-[#36A5B8] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#36A5B8] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a
                href="#our_commitment"
                onClick={() => scrollToSection('our_commitment')}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-300 ease-in-out"
              >
                Our Commitment
              </a>
            </li>
            <li>
              <a
                href="#our_services"
                onClick={() => scrollToSection('our_services')}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-300 ease-in-out"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#our_team"
                onClick={() => scrollToSection('our_team')}
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-300 ease-in-out"
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="/appointment"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-300 ease-in-out"
              >
                Contact Details
              </a>
            </li>
          </ul>
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white md:hidden z-50">
            <div className="flex justify-between items-center p-4">
              <span className="text-2xl font-semibold dark:text-white">Menu</span>
              <button
                onClick={closeMenu}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-600 dark:focus:ring-gray-600"
              >
                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <ul className="font-medium flex flex-col p-4">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-[#36A5B8] rounded">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#our_commitment"
                  onClick={() => scrollToSection('our_commitment')}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 transition-all duration-300 ease-in-out"
                >
                  Our Commitment
                </a>
              </li>
              <li>
                <a
                  href="#our_services"
                  onClick={() => scrollToSection('our_services')}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 transition-all duration-300 ease-in-out"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#our_team"
                  onClick={() => scrollToSection('our_team')}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 transition-all duration-300 ease-in-out"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/appointment"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 transition-all duration-300 ease-in-out"
                >
                  Contact Details
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
