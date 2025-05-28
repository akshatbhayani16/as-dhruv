import React from 'react';

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
      title: "Advanced Services",
      services: [
        "Accounting & Book keeping Services",
        "IND AS consultation",
        "AIF setting up",
        "IPO consultation & applications"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-slate-800 text-white p-4">
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 