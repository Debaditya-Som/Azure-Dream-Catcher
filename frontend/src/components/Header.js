import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar p-5 bg-[#F6F2E6] text-black shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:transform hover:translate-y-[-5px] flex justify-between items-center">
      <div className="navbar-left flex items-center space-x-2">
        <img
          src="./main_logo.png"
          alt="Logo"
          className="w-20 h-18 md:w-20 md:h-18"
        />

        <h1 className="text-l sm:text-xl md:text-xl lg:text-3xl tracking-wide text-shadow animation-fadeIn italic">
          Azure Dream Catcher
        </h1>
      </div>

      <div className="navbar-right flex items-center">
        <button
          className="md:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 6.75 4.5 4.5m-4.5-4.5 4.5 4.5m-18 18L19.5 2.25"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            )}
          </svg>
        </button>

        <div
          className={`md:flex md:space-x-4 absolute md:static top-full left-0 w-full bg-[#F6F2E6] p-4 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="#home" className="nav-link hover:underline">Home</a>
          <a href="#about" className="nav-link hover:underline">About Us</a>
          <a href="#input-form" className="nav-link hover:underline">Predict</a>
          <a href="#map" className="nav-link hover:underline">Locate</a>
          <a href="#faq" className="nav-link hover:underline">FAQ</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;