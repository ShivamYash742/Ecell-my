import React, { useState, useEffect } from "react";
import speaker1 from "../public/Bill_Van_Heyst.png";
import linkedinLogo from "../public/linkedin.png";

const SpeakersSection = () => {
  const [currentBox, setCurrentBox] = useState(0);

  const boxes = [
    {
      image: speaker1,
      name: "Dr. Bill Van Heyst",
      role: "Dean, Faculty of Engineering, University of Windsor",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedin: "https://www.linkedin.com/in/bill-van-heyst-424735171/",
    },
    {
      image: "path/to/speaker2.jpg",
      name: "Speaker 2",
      role: "Role 2",
      info: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "https://www.linkedin.com/in/speaker2",
    },
    {
      image: "path/to/speaker3.jpg",
      name: "Speaker 3",
      role: "Role 3",
      info: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      linkedin: "https://www.linkedin.com/in/speaker3",
    },
    {
      image: "path/to/speaker4.jpg",
      name: "Speaker 4",
      role: "Role 4",
      info: "Ut enim ad minim veniamion ullamco laboris.",
      linkedin: "https://www.linkedin.com/in/speaker4",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBox((prevBox) => (prevBox + 1) % boxes.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[140vh] xl:h-[90vh] w-full bg-gradient-to-r from-[#00507fd9] to-[#57b847] overflow-hidden">
      <div className="text-center font-semibold text-5xl py-4 text-white">
        Meet Our Speakers
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col justify-center items-center transition-transform duration-700 transform ${
              index === currentBox
                ? "translate-x-0"
                : index < currentBox
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <img
              src={box.image}
              alt={box.name}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 shadow-lg border-4 border-white"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              {box.name}
            </h2>
            <h3 className="text-xl text-center md:text-2xl text-gray-600">{box.role}</h3>
            {/* <p className="text-center text-gray-700 px-4 md:px-8">{box.info}</p> */}
            <a
              href={box.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {boxes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBox(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              index === currentBox
                ? "bg-gray-800 border-2 border-white"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SpeakersSection;
