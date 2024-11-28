import React from "react";

const Navbar = () => {
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
      <div className="navbar-right flex space-x-4">
      <a href="#home" className="nav-link hover:underline">Home</a>
        <a href="#about" className="nav-link hover:underline">About Us</a>
        <a href="#input-form" className="nav-link hover:underline">Predict</a>
        <a href="#map" className="nav-link hover:underline">Locate</a>
        
        <a href="#faq" className="nav-link hover:underline">FAQ</a>
      </div>
    </nav>
  );
};

export default Navbar;
