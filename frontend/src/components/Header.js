import React from "react";
import './Header.css'; 

const Header = () => {
  return (
    <header className="header p-5 bg-gradient-to-br from-cyan-400 to-blue-700 text-white text-center rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:transform hover:translate-y-[-5px]">
      <h1 className="header-title text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-shadow animation-fadeIn">
        Azure Dream Catcher
      </h1>
    </header>
  );
};

export default Header;
