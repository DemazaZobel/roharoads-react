import React from 'react';
import { Link } from 'react-router-dom';
import cybertruckImage from './nav.JPG';

function Navbar() {
  return (
    <nav 
      className="bg-cover bg-center shadow-lg" 
      style={{ backgroundImage: `url(${cybertruckImage})` }}
    >
      <ul className="flex justify-center gap-10 md:gap-20 items-center p-4 bg-black bg-opacity-50">
        {/* Navigation Items */}
        <li className="text-white text-lg font-semibold transition-all duration-300 ease-in-out hover:text-sky-400 hover:scale-110">
          <Link to="/">Home</Link>
        </li>
        <li className="text-white text-lg font-semibold transition-all duration-300 ease-in-out hover:text-sky-400 hover:scale-110">
          <Link to="/Services">Services</Link>
        </li>
        <li className="text-white text-lg font-semibold transition-all duration-300 ease-in-out hover:text-sky-400 hover:scale-110">
          <Link to="/About">About</Link>
        </li>
        <li className="text-white text-lg font-semibold transition-all duration-300 ease-in-out hover:text-sky-400 hover:scale-110">
          <Link to="/Contact">Contact</Link>
        </li>
        <li className="text-white text-lg font-semibold transition-all duration-300 ease-in-out hover:text-sky-400 hover:scale-110">
          <Link to="/MarketAnalysis">Market Analysis</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
