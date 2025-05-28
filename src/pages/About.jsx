import React from 'react';

const About = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-6">
            Founded in 2010, our CA firm has been providing exceptional financial services
            to businesses and individuals. With a team of experienced professionals,
            we deliver comprehensive solutions tailored to meet our clients' unique needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p>To provide exceptional financial services with integrity and professionalism,
                helping our clients achieve their financial goals.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p>To be the most trusted financial advisory firm, known for our expertise,
                innovation, and client-centric approach.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 