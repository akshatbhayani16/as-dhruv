import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Office Location",
      details: "123 Business Street, City, State",
      link: "https://maps.google.com"
    },
    {
      icon: "📞",
      title: "Phone Number",
      details: "+1 234 567 8900",
      link: "tel:+12345678900"
    },
    {
      icon: "✉️",
      title: "Email Address",
      details: "contact@cafirm.com",
      link: "mailto:contact@cafirm.com"
    }
  ];

  return (
    <div className="pt-20 bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Page Title Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#002B36] mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#002B36]/80 text-lg max-w-2xl mx-auto"
          >
            Get in touch with us for any inquiries or to schedule a consultation. We're here to help with all your financial needs.
          </motion.p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold text-[#002B36] mb-2">{info.title}</h3>
              <p className="text-[#008080]">{info.details}</p>
            </motion.a>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-[#002B36] mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#002B36] font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#008080]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-[#002B36] font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#008080]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-[#002B36] font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#008080]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-[#002B36] font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#008080]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-[#002B36] font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-[#008080]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent transition-all duration-200"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#008080] text-white py-3 px-6 rounded-lg hover:bg-[#008080]/90 transition-colors duration-200 font-medium text-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#002B36] mb-6">Business Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[#002B36]/80">Monday - Friday</span>
                  <span className="text-[#008080] font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#002B36]/80">Saturday</span>
                  <span className="text-[#008080] font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#002B36]/80">Sunday</span>
                  <span className="text-[#008080] font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#002B36] mb-6">Location</h2>
              <div className="h-64 bg-gray-200 rounded-lg">
                {/* Add your map component or iframe here */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 

