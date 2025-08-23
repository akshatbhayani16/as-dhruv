import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/your-company",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/your-company",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    // {
    //   name: 'Facebook',
    //   url: 'https://facebook.com/your-company',
    //   icon: (
    //     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    //     </svg>
    //   )
    // },
    {
      name: "Instagram",
      url: "https://instagram.com/your-company",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#162060] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">A S Dhruv & Associates</h3>
            <p className="text-[#A8C3FF]">
              Your trusted partner in financial excellence and business growth.
            </p>
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  Income Tax
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  Auditing & Assurance
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  Goods & Service Tax
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  Financing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  Accounting & Book keeping Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#A8C3FF] hover:text-white transition-colors duration-200"
                >
                  Advisory & Consultancy Services
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-[#A8C3FF]">
                <span className="mt-1 mr-3">
                  {/* Address Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0c-4 0-7 2.239-7 5v2h14v-2c0-2.761-3-5-7-5z"
                    />
                  </svg>
                </span>
                <span>
                  404, 4th floor, Sumeru Prime,
                  <br />
                  Opp. Dakshinamurti Vinay Mandir
                  <br />
                  Waghawadi road, Bhavnagar, Gujarat
                </span>
              </li>
              <li className="flex items-center text-[#A8C3FF]">
                <span className="mr-3">
                  {/* Phone Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </span>
                <span>+91 7435 049 814</span>
              </li>
              <li className="flex items-center text-[#A8C3FF]">
                <span className="mr-3">
                  {/* Email Icon */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v4a4 4 0 01-8 0v-4"
                    />
                  </svg>
                </span>
                <span>caakshat.dhruv@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#A8C3FF]/20 mt-8 pt-8 text-center">
          <p className="text-[#A8C3FF]">
            © {new Date().getFullYear()} A S Dhruv & Associates. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
