import React from "react";

const Events = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Upcoming Events
        </h1>
        <ul className="space-y-4">
          <li className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700">
              Event Title 1
            </h2>
            <p className="text-gray-600">Date: January 1, 2024</p>
            <p className="text-gray-600">Location: Venue 1</p>
          </li>
          <li className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700">
              Event Title 2
            </h2>
            <p className="text-gray-600">Date: February 15, 2024</p>
            <p className="text-gray-600">Location: Venue 2</p>
          </li>
          <li className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-700">
              Event Title 3
            </h2>
            <p className="text-gray-600">Date: March 10, 2024</p>
            <p className="text-gray-600">Location: Venue 3</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Events;
