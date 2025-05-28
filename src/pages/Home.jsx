import React from 'react';
import { Link } from 'react-router-dom';

const serviceHighlights = [
  {
    title: "Auditing & Assurance",
    description: "Comprehensive audit services including statutory, internal, tax, and GST audits."
  },
  {
    title: "Income Tax",
    description: "Expert tax planning, return filing, and consultation services for individuals and businesses."
  },
  {
    title: "GST Services",
    description: "Complete GST solutions from registration to compliance and assessment handling."
  },
  {
    title: "Corporate Law",
    description: "Business incorporation, compliance, and corporate law consultation services."
  },
  {
    title: "Financing",
    description: "Professional assistance in project reports, bank financing, and venture funding."
  },
  {
    title: "Advanced Services",
    description: "Specialized services including IPO consultation, AIF setting up, and IND AS consultation."
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('/Profile-Image.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-900 opacity-80"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Welcome to CA Firm</h1>
            <p className="text-xl mb-8">Your Trusted Partner in Financial Excellence</p>
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Expert Team"
              description="Our team of certified professionals brings years of experience."
            />
            <FeatureCard 
              title="Personalized Service"
              description="We provide tailored solutions for your unique needs."
            />
            <FeatureCard 
              title="Timely Delivery"
              description="We ensure prompt and accurate service delivery."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
