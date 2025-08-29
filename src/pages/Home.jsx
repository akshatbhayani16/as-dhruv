import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const serviceHighlights = [
    {
      title: "Auditing & Assurance",
      description:
        "Comprehensive audit services including statutory, internal, tax, and GST audits.",
      icon: "📊",
    },
    {
      title: "Income Tax",
      description:
        "Expert tax planning, return filing, and consultation services for individuals and businesses.",
      icon: "💰",
    },
    {
      title: "GST Services",
      description:
        "Complete GST solutions from registration to compliance and assessment handling.",
      icon: "📝",
    },
    {
      title: "Corporate Law",
      description:
        "Business incorporation, compliance, and corporate law consultation services.",
      icon: "⚖️",
    },
    {
      title: "Financing",
      description:
        "Professional assistance in project reports, bank financing, and venture funding.",
      icon: "💼",
    },
    {
      title: "Advanced Services",
      description:
        "Specialized services including IPO consultation, AIF setting up, and IND AS consultation.",
      icon: "🚀",
    },
  ];

  const [current, setCurrent] = useState(0);
  const visibleCards = 3;

  // Duplicate few cards for infinite loop
  const extendedServices = [...serviceHighlights, ...serviceHighlights.slice(0, visibleCards)];
  if(current >= serviceHighlights.length-3) {
    setCurrent(0);
  }

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? serviceHighlights.length - 1 : prev - 1
    );
  };

  // Reset when reaching duplicate slides
  useEffect(() => {
    if (current === serviceHighlights.length) {
      setTimeout(() => {
        setCurrent(0);
      }, 700);
    }
  }, [current, serviceHighlights.length]);

  const features = [
    {
      title: "Expert Team",
      description: "Our team of certified professionals brings years of experience.",
      icon: "👥",
    },
    {
      title: "Personalized Service",
      description: "We provide tailored solutions for your unique needs.",
      icon: "🎯",
    },
    {
      title: "Timely Delivery",
      description: "We ensure prompt and accurate service delivery.",
      icon: "⏰",
    },
    {
      title: "Client Commitment",
      description: "We prioritize your satisfaction and long-term success in every engagement.",
      icon: "🤝",
    },
  ];

  const numberOfDots = new Array(serviceHighlights.length-3>=0?serviceHighlights.length-3:1).fill(0);

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
              Your Trusted Advisor and Guide
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-[#002B36]/80 mb-8"
            >
              Providing comprehensive financial solutions with a personal touch.
              Let's build your financial success story together.
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

      {/* Services Carousel */}
      <section className="py-20 bg-white">
        <div className="container ml-4 px-4" style = {{marginLeft: "7%"}}>
          <div className="text-center mb-16" style = {{marginLeft: "3%"}}>
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B36] mb-4">
              Our Services
            </h2>
            <p className="text-[#002B36]/80 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to meet your specific needs and goals
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden px-8">
              <motion.div
                className="flex gap-6"
                animate={{ x: `-${current * (100 / visibleCards) * 0.7}%` }} // Reduced translate
                transition={{ duration: 0.7, ease: "easeInOut" }}
                style={{
                  width: `${(extendedServices.length / visibleCards) * 100}%`,
                  minWidth: "100%",
                }}
              >
                {extendedServices.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F7F9FC] p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
                    style={{
                      width: "410px",
                      height: "400px",
                      paddingTop: "100px",
                    }}
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#5C6B8A] mb-4">{service.description}</p>
                    <Link
                      to="/services"
                      className="text-[#1F3C88] hover:text-[#4A6CF7] font-medium inline-flex items-center transition-colors duration-200"
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Dots & Arrows Below Carousel */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              <button
                onClick={prevSlide}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex space-x-2">
                {numberOfDots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full ${
                      idx === (current % serviceHighlights.length) ? "bg-[#1F3C88]" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B36] mb-4">
              Why Choose Us
            </h2>
            <p className="text-[#002B36]/80 max-w-2xl mx-auto">
              We combine expertise with personalized service to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#002B36] mb-4">
                  {feature.title}
                </h3>
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
