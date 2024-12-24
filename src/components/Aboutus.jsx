import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="relative max-w-2xl mx-auto p-10 bg-gray-100 rounded-lg shadow-lg mt-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We are a team of passionate individuals dedicated to providing the
          best services to our clients. Our mission is to deliver high-quality
          products that meet the needs of our customers.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Our Values
        </h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Teamwork</li>
        </ul>
      </div>
    </>
  );
};

export default Aboutus;
