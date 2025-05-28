import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#008080] fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-2xl font-bold">CA Firm</Link>
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-white hover:text-[#E0FFFF] transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-[#E0FFFF] transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-[#E0FFFF] transition-colors duration-200">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-[#E0FFFF] transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 