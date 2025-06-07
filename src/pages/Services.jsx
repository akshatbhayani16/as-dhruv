import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const serviceCategories = [
    {
      title: "Auditing & Assurance",
      services: [
        "Statutory audit",
        "Internal Audit",
        "Income Tax Audit",
        "GST Audit",
        "Internal financial controls design and verification",
        "SOP designing & implementation of Internal controls",
        "Management Audit",
        "Stock Audit"
      ]
    },
    {
      title: "Income Tax",
      services: [
        "Income Tax return filing",
        "Income Tax Planning & Consultation",
        "Certifications & Other forms",
        "TDS & TCS - consultation & return filing",
        "Advance tax computation & guidance",
        "Trust taxation & Consultations",
        "Consultation w.r.to Virtual Digital Assets",
        "Income tax assessment handling"
      ]
    },
    {
      title: "Goods & Service Tax",
      services: [
        "GST registration",
        "GST Return filing",
        "GST annual returns",
        "Consultation on various GST matters",
        "GST certifications",
        "GST refund application & processing",
        "GST assessment handling"
      ]
    },
    {
      title: "Corporate Law",
      services: [
        "Company/LLP formation & incorporation",
        "Director/Designated partners' DIN application",
        "ROC annual compliances",
        "Consultation on company law matters",
        "Business structuring",
        "Start up consultation"
      ]
    },
    {
      title: "Financing",
      services: [
        "Project report",
        "Bank financing",
        "CMA report",
        "Business report for venture funding"
      ]
    },
    {
      title: "Accounting & Book keeping Services",
      services: [
        "Accounting & Data Entry",
        "Bookkeeping",
        "Payroll Management",
        "Financial statements preparation",
        "Accounting overview and verification"
      ]
    },
    {
      title: "Advisory & Consultancy Services",
      services: [
        "IPO consultation",
        "AIF setting up",
        "IND AS consultation"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="pt-20 bg-[#F7F9FC]">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-[#1A1A1A]"
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-[#5C6B8A] mb-12 max-w-2xl mx-auto"
        >
          Comprehensive financial and business solutions tailored to your needs
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              <div className="bg-[#1F3C88] text-white p-6">
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <motion.li 
                      key={serviceIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * serviceIndex }}
                      className="flex items-start group"
                    >
                      <span className="text-[#1F3C88] mr-3 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[#1A1A1A] group-hover:text-[#4A6CF7] transition-colors duration-200">
                        {service}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
