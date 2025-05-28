import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#008080] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CA Firm</h3>
            <p className="text-[#E0FFFF]">
              Your trusted partner in financial excellence and business growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-[#E0FFFF] hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-[#E0FFFF] hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link to="/services" className="text-[#E0FFFF] hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link to="/contact" className="text-[#E0FFFF] hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-[#E0FFFF]">Tax Planning</li>
              <li className="text-[#E0FFFF]">Audit & Assurance</li>
              <li className="text-[#E0FFFF]">Business Advisory</li>
              <li className="text-[#E0FFFF]">GST Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-[#E0FFFF]">
                <i className="fas fa-map-marker-alt mr-2"></i>
                123 Business Street, City, State
              </li>
              <li className="text-[#E0FFFF]">
                <i className="fas fa-phone mr-2"></i>
                +1 234 567 8900
              </li>
              <li className="text-[#E0FFFF]">
                <i className="fas fa-envelope mr-2"></i>
                info@cafirm.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E0FFFF]/20 mt-8 pt-8 text-center">
          <p className="text-[#E0FFFF]">
            © {new Date().getFullYear()} CA Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 