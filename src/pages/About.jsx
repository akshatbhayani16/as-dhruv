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

  const storySections = [
    {
      title: "The Beginning",
      text: "A S Dhruv & Associates, one of the growing chartered accountancy firms in the entrepreneurial state of India i.e. Gujarat lead by CA Akshat S. Dhruv, who have been qualified as chartered accountant in the year 2022.",
      image: "/images/firm-establishment.jpeg",
      imageAlt: "Firm Establishment",
      icon: "🏢"
    },
    {
      title: "Academic Excellence",
      text: "CA Akshat Dhruv has achieved 2 times AIR (All India Rank) in his journey of becoming chartered accountant. Apart from that, he comes from a very strong academic background with awardee of one of the toughest scholarship programs in Gujarat – Mr. Dhirubhai Ambani scholarship program by Reliance foundation.",
      image: "/images/academic-achievements.png",
      imageAlt: "Academic Achievements",
      icon: "🎓"
    },
    {
      title: "Professional Growth",
      text: "Post his qualification, to sharpen his skills and learning, Akshat Dhruv has joined one of the big 4s chartered accountancy firm PwC in Ahmedabad in the domain of Auditing & Assurance where he worked upon various assignments of Statutory Audit, Internal Audit, Stock Audit, Group Reporting, Tax Audits, IFC implementation etc. His Articleship program has also played a very vital role in his career shaping where he got the exposure of Direct as well as Indirect taxes and corporate laws.",
      image: "/images/pwc-experience.jpeg",
      imageAlt: "PwC Experience",
      icon: "📈"
    },
    {
      title: "Industry Expertise",
      text: "CA Akshat Dhruv has catered to the needs of various clients across the industries like pharmaceutical, API manufacturing, Tyre manufacturing and distribution, logistics and Goods handling, Financing, Share and Commodities trading, Banking, Information Technology and IT enabled services, Travelling, Insurance broker, E commerce trading, Clearing and Forwarding Agent, Real Estate - Infra consultancy, NBFCs etc. in the domain of Income Tax, GST Laws, Assurance services and allied corporate laws.",
      image: "/images/industry-expertise.jpeg",
      imageAlt: "Industry Expertise",
      icon: "💼"
    },
    {
      title: "Client Commitment",
      text: "Akshat Dhruv is committed towards continuous growth and support for his clients. His objective is to help his clients to focus and achieve their business and financial goals by providing them services that is personalised and tailored in nature to meet the client's requirements which suits their businesses the best.",
      image: "/images/client-commitment.jpg",
      imageAlt: "Client Commitment",
      icon: "🤝"
    },
    // {
    //   title: "Our Vision",
    //   text: "Together, We Grow",
    //   image: "/images/vision.jpg",
    //   imageAlt: "Our Vision",
    //   isMotto: true,
    //   icon: "✨"
    // }
  ];

  return (
    <div className="pt-20 bg-[#F7F9FC] min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Page Title Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4"
          >
            About Me
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#5C6B8A] text-lg max-w-2xl mx-auto"
          >
            Your trusted financial partner for personalized accounting solutions
          </motion.p>
        </div>

        {/* Story Sections */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="space-y-32 relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1F3C88] to-[#4A6CF7] hidden md:block"></div>

            {storySections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1F3C88] rounded-full hidden md:block"></div>

                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                  {/* Text Content */}
                  <div className="flex-1 space-y-6 relative">
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-[#1F3C88]/10 hover:border-[#1F3C88]/30 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl">{section.icon}</span>
                        <h3 className={`text-2xl font-bold text-[#1A1A1A] ${section.isMotto ? 'text-center' : ''}`}>
                          {section.title}
                        </h3>
                      </div>
                      <p className={`text-[#5C6B8A]/80 leading-relaxed ${section.isMotto ? 'text-2xl font-semibold text-[#1F3C88] italic text-center' : ''}`}>
                        {section.text}
                      </p>
                    </div>
                    {/* Arrow - Fixed positioning */}
                    <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2"
                         style={{ 
                           [index % 2 === 0 ? 'right' : 'left']: '-3rem' 
                         }}>
                      <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <svg 
                          className={`w-6 h-6 text-[#1F3C88] transform ${index % 2 === 0 ? 'rotate-0' : 'rotate-180'}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Image Content */}
                  <div className="flex-1">
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Removed blue box shadow background */}
                      <div className="relative">
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                          <img 
                            src={section.image} 
                            alt={section.imageAlt}
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-20 relative overflow-hidden">
          {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F3C88] to-[#4A6CF7]"></div> */}
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-8">Professional Qualifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1F3C88]">Education</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#1F3C88] mr-2">•</span>
                  <span className="text-[#5C6B8A]">Chartered Accountant (CA)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1F3C88] mr-2">•</span>
                  <span className="text-[#5C6B8A]">Bachelor's in Commerce</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1F3C88]">Professional Memberships</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#A8C3FF] mr-2">•</span>
                  <span className="text-[#5C6B8A]/80">Member of Institute of Chartered Accountants</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Approach Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#1A1A1A] text-center mb-12">My Approach to Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1F3C88] to-[#4A6CF7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4">{service.title}</h3>
                <p className="text-[#5C6B8A]/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;