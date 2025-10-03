import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    // Always scroll to top when clicking navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Close mobile menu when clicking a nav item
    setIsMenuOpen(false);
    
    // Small delay to ensure scroll happens after route change
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className="bg-[#1F3C88] fixed top-0 left-0 right-0 z-50" 
      style={{ 
        width: '100vw', 
        maxWidth: '100vw',
        overflowX: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      <div 
        className="w-full max-w-full px-2 sm:px-4 py-4 sm:py-4 sm:container sm:mx-auto" 
        style={{ 
          boxSizing: 'border-box',
          maxWidth: '100vw',
          overflowX: 'hidden'
        }}
      >
        <div className="flex justify-between items-center min-w-0 w-full">
          <Link 
            to="/" 
            className="text-white text-xs sm:text-lg md:text-2xl font-bold min-w-0 flex-shrink truncate mr-2 sm:mr-4"
            onClick={() => handleNavClick('/')}
            style={{ maxWidth: 'calc(100vw - 80px)' }}
          >
            <span className="hidden md:inline">A S Dhruv & Associates</span>
            <span className="hidden sm:inline md:hidden">A S Dhruv & Assoc.</span>
            <span className="sm:hidden">AS Dhruv & Associates</span>
          </Link>
          
          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-8">
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

          {/* Hamburger Menu Button - Only visible on small screens */}
          <button 
            className="sm:hidden text-white hover:text-[#A8C3FF] transition-colors duration-200 flex-shrink-0 p-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            style={{ minWidth: '32px', minHeight: '32px' }}
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="sm:hidden mt-3 pb-3 w-full overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeInOut",
                opacity: { duration: 0.2 }
              }}
            >
              <motion.ul 
                className="flex flex-col space-y-2"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <Link 
                    to="/" 
                    className="block text-white hover:text-[#A8C3FF] transition-colors duration-200 py-2 px-1"
                    onClick={() => handleNavClick('/')}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                >
                  <Link 
                    to="/about" 
                    className="block text-white hover:text-[#A8C3FF] transition-colors duration-200 py-2 px-1"
                    onClick={() => handleNavClick('/about')}
                  >
                    About
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <Link 
                    to="/services" 
                    className="block text-white hover:text-[#A8C3FF] transition-colors duration-200 py-2 px-1"
                    onClick={() => handleNavClick('/services')}
                  >
                    Services
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.25 }}
                >
                  <Link 
                    to="/blog" 
                    className="block text-white hover:text-[#A8C3FF] transition-colors duration-200 py-2 px-1"
                    onClick={() => handleNavClick('/blog')}
                  >
                    Blog
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  <Link 
                    to="/contact" 
                    className="block text-white hover:text-[#A8C3FF] transition-colors duration-200 py-2 px-1"
                    onClick={() => handleNavClick('/contact')}
                  >
                    Contact
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 