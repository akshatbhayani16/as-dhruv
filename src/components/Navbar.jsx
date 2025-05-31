import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const handleNavClick = (path) => {
    // If we're already on the same page, just scroll to top
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    // If we're going to a different page, the ScrollToTop component will handle it
  };

  return (
    <nav className="bg-[#1F3C88] fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-white text-2xl font-bold"
            onClick={() => handleNavClick('/')}
          >
            A S Dhruv & Associates
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-[#A8C3FF] transition-colors duration-200"
                onClick={() => handleNavClick('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="text-white hover:text-[#A8C3FF] transition-colors duration-200"
                onClick={() => handleNavClick('/about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="text-white hover:text-[#A8C3FF] transition-colors duration-200"
                onClick={() => handleNavClick('/services')}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className="text-white hover:text-[#A8C3FF] transition-colors duration-200"
                onClick={() => handleNavClick('/blog')}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-white hover:text-[#A8C3FF] transition-colors duration-200"
                onClick={() => handleNavClick('/contact')}
              >
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