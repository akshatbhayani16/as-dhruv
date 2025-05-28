import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const serviceHighlights = [
    {
      title: "Auditing & Assurance",
      description: "Comprehensive audit services including statutory, internal, tax, and GST audits.",
      icon: "📊"
    },
    {
      title: "Income Tax",
      description: "Expert tax planning, return filing, and consultation services for individuals and businesses.",
      icon: "💰"
    },
    {
      title: "GST Services",
      description: "Complete GST solutions from registration to compliance and assessment handling.",
      icon: "📝"
    },
    {
      title: "Corporate Law",
      description: "Business incorporation, compliance, and corporate law consultation services.",
      icon: "⚖️"
    },
    {
      title: "Financing",
      description: "Professional assistance in project reports, bank financing, and venture funding.",
      icon: "💼"
    },
    {
      title: "Advanced Services",
      description: "Specialized services including IPO consultation, AIF setting up, and IND AS consultation.",
      icon: "🚀"
    }
  ];

  const features = [
    {
      title: "Expert Team",
      description: "Our team of certified professionals brings years of experience.",
      icon: "👥"
    },
    {
      title: "Personalized Service",
      description: "We provide tailored solutions for your unique needs.",
      icon: "🎯"
    },
    {
      title: "Timely Delivery",
      description: "We ensure prompt and accurate service delivery.",
      icon: "⏰"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-[#002B36] mb-6"
            >
              Your Trusted Financial Partner
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-[#002B36]/80 mb-8"
            >
              Providing comprehensive financial solutions with a personal touch. Let's build your financial success story together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Link 
                to="/contact" 
                className="inline-block bg-[#1F3C88] text-white px-8 py-3 rounded-lg hover:bg-[#4A6CF7] transition-colors duration-200 font-medium text-lg"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B36] mb-4">Our Services</h2>
            <p className="text-[#002B36]/80 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to meet your specific needs and goals
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F7F9FC] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{service.title}</h3>
                <p className="text-[#5C6B8A] mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-[#1F3C88] hover:text-[#4A6CF7] font-medium inline-flex items-center transition-colors duration-200"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B36] mb-4">Why Choose Us</h2>
            <p className="text-[#002B36]/80 max-w-2xl mx-auto">
              We combine expertise with personalized service to deliver exceptional results
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#002B36] mb-4">{feature.title}</h3>
                <p className="text-[#002B36]/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
