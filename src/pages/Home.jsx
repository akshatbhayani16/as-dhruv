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
  const [visibleCards, setVisibleCards] = useState(3);

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      const prevVisibleCards = visibleCards;
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
      
      // Reset current when switching between mobile and desktop
      if (prevVisibleCards !== visibleCards) {
        setCurrent(0);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, [visibleCards]);

  // Duplicate few cards for infinite loop
  const extendedServices = [...serviceHighlights, ...serviceHighlights.slice(0, visibleCards)];
  
  // Calculate total slides based on visible cards
  const totalSlides = visibleCards === 1 ? serviceHighlights.length : Math.ceil(serviceHighlights.length / visibleCards);
  
  // Reset current if it exceeds total slides
  useEffect(() => {
    if (current >= totalSlides) {
      setCurrent(0);
    }
  }, [current, totalSlides]);

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
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  // Reset when reaching duplicate slides
  useEffect(() => {
    if (current === totalSlides) {
      setTimeout(() => {
        setCurrent(0);
      }, 700);
    }
  }, [current, totalSlides]);

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

  const numberOfDots = new Array(visibleCards === 1 ? serviceHighlights.length : totalSlides).fill(0);

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
        <div className="container mx-auto px-4 sm:ml-4 sm:px-4 sm:ml-[7%]">
          <div className="text-center mb-16 sm:ml-[3%]">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B36] mb-4">
              Our Services
            </h2>
            <p className="text-[#002B36]/80 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to meet your specific needs and goals
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Mobile Carousel - One card at a time */}
            <div className="block sm:hidden">
              <div className="relative">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="px-4"
                >
                  <div
                    className="bg-[#F7F9FC] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                    style={{
                      height: "350px",
                      maxWidth: "350px",
                      margin: "0 auto"
                    }}
                  >
                    <div className="text-3xl mb-4 mt-8">{serviceHighlights[current % serviceHighlights.length].icon}</div>
                    <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3">
                      {serviceHighlights[current % serviceHighlights.length].title}
                    </h3>
                    <p className="text-sm text-[#5C6B8A] mb-4">{serviceHighlights[current % serviceHighlights.length].description}</p>
                    <Link
                      to="/services"
                      className="text-[#1F3C88] hover:text-[#4A6CF7] font-medium inline-flex items-center transition-colors duration-200 text-sm"
                    >
                      Learn More
                      <svg
                        className="w-3 h-3 ml-1"
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
                </motion.div>
              </div>
            </div>

            {/* Desktop/Tablet Carousel - Multiple cards */}
            <div className="hidden sm:block">
              <div className="overflow-hidden px-8">
                <motion.div
                  className="flex gap-6"
                  animate={{ x: `-${current * (100 / visibleCards)}%` }}
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
                        width: visibleCards === 2 ? "calc(50% - 0.75rem)" : "410px",
                        height: "400px",
                        paddingTop: "100px",
                      }}
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-base text-[#5C6B8A] mb-4">{service.description}</p>
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
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      idx === (current % (visibleCards === 1 ? serviceHighlights.length : totalSlides)) ? "bg-[#1F3C88]" : "bg-gray-300"
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
