import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const services = [
    {
      title: "Personalized Service",
      description: "As a solo practitioner, I provide direct, personalized attention to each client's needs.",
      icon: "🎯"
    },
    {
      title: "Modern Approach",
      description: "Leveraging the latest technology and digital tools to provide efficient and effective solutions.",
      icon: "💻"
    },
    {
      title: "Client-Focused",
      description: "Building long-term relationships with clients through transparent communication and dedicated service.",
      icon: "🤝"
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
            About Me
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#002B36]/80 text-lg max-w-2xl mx-auto"
          >
            Your trusted financial partner for personalized accounting solutions
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#002B36] mb-6">My Journey</h2>
            <p className="text-[#002B36]/80 mb-4">
              After gaining valuable experience in the accounting industry, I established my practice in 2023 to provide personalized financial services to businesses and individuals. My goal is to combine professional expertise with a personal touch, ensuring each client receives the attention and care they deserve.
            </p>
            <p className="text-[#002B36]/80">
              As a solo practitioner, I take pride in being directly involved in every aspect of your financial needs. This hands-on approach allows me to provide tailored solutions that truly understand and address your unique requirements.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <img 
              src="/profile-image.jpg" 
              alt="Professional Profile" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Qualifications Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-20">
          <h2 className="text-3xl font-bold text-[#002B36] text-center mb-8">Professional Qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#008080]">Education</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#AEEA00] mr-2">•</span>
                  <span className="text-[#002B36]/80">Chartered Accountant (CA)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AEEA00] mr-2">•</span>
                  <span className="text-[#002B36]/80">Bachelor's in Commerce</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#008080]">Professional Memberships</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#AEEA00] mr-2">•</span>
                  <span className="text-[#002B36]/80">Member of Institute of Chartered Accountants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#AEEA00] mr-2">•</span>
                  <span className="text-[#002B36]/80">Registered Tax Practitioner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Approach Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#002B36] text-center mb-12">My Approach to Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#002B36] mb-4">{service.title}</h3>
                <p className="text-[#002B36]/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#008080] text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">A Personal Message</h2>
          <p className="text-[#E0FFFF] max-w-3xl mx-auto">
            "I believe in building lasting relationships with my clients through trust, transparency, and dedicated service. 
            As your financial partner, I'm committed to understanding your unique needs and providing solutions that help you 
            achieve your financial goals. Let's work together to build your financial success story."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 