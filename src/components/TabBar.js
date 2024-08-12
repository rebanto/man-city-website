import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/man-city-logo.png';

function TabBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-light_blue text-white py-4 px-8 flex items-center justify-between shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-16" />
        <span className="text-dark_blue font-bold text-2xl ml-10">Manchester City F.C.</span>
      </div>
      <div className="flex space-x-10 mr-10">
        <Link
          to="/home"
          className={`text-dark_blue font-bold text-lg hover:text-white transition duration-300 ${currentPath === '/home' ? 'underline decoration-4' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/players"
          className={`text-dark_blue font-bold text-lg hover:text-white transition duration-300 ${currentPath === '/players' ? 'underline decoration-4' : ''}`}
        >
          Players
        </Link>
        <Link
          to="/club"
          className={`text-dark_blue font-bold text-lg hover:text-white transition duration-300 ${currentPath === '/club' ? 'underline decoration-4' : ''}`}
        >
          Club
        </Link>
      </div>
    </div>
  );
}

export default TabBar;
