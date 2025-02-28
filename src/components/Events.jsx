import React, { useState, useEffect } from "react";

// Import images
import heroVideo from "./images/hero.mp4";
import pcImage from "./images/pc1.png";
import maImage from "./images/ma1.png";
import e2Image from "./images/e2.jpg";
import eceImage from "./images/ece2.JPG";
import saImage from "./images/sa1.JPG";
import msmeImage from "./images/msme3.jpg";
import galleryImage1 from "./images/audit1.JPG";
import galleryImage2 from "./images/cl1.JPG";
import galleryImage3 from "./images/e2.jpg";
import galleryImage4 from "./images/ece1.JPG";
import galleryImage5 from "./images/msme1.JPG";
import galleryImage6 from "./images/or1.JPG";

const EventsPage = () => {
  const [currentItem, setCurrentItem] = useState(3);
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const isPastHalf = scrollTop > (docHeight - windowHeight) / 2;
      setIsVisible(isPastHalf);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const boxes = [
    {
      title: "PATENTS AND COPYRIGHT SESSION",
      description:
        "The E-Cell MSIT hosted a webinar on 21st August 2024, featuring Ms. Pooja Sood, to educate participants on patents and copyrights. The session covered the importance of protecting ideas and inventions, especially for startups, and provided practical guidance on applying for intellectual property rights. An engaging Q&A rounded off the event, leaving attendees with valuable insights to safeguard their innovations.",
      date: "21/08/2024",
      image: pcImage,
      visitors: 0,
    },
    {
      title: "MASTERS ABROAD SESSION",
      description:
        "The E-Cell MSIT organized a seminar on 30th August 2024, featuring Mr. Naveen Rai from Hello Study Global, who provided insights into pursuing a Master’s degree abroad. The session covered the benefits of studying overseas, guidance for Ivy League applications, and global career opportunities. The interactive Q&A session allowed participants to seek tailored advice and clarified doubts, making the seminar highly impactful and engaging.",
      date: "30/08/2024",
      image: maImage,
      visitors: 0,
    },
    // ... other event objects
    {
      title: "MSME",
      description:
        "The MSME Entrepreneurship Awareness Programme for SC/ST Youths, held on 28th November 2024 in Seminar Hall 206, was organized by eCell MSIT under Dr. Neeru Rathee's guidance. Featuring experts like Dr. Sunil Kumar and Dr. Rajpal Solanki, the event covered UDYAM registration, IPR, and government schemes. It emphasized fostering entrepreneurship and provided practical insights, leaving participants inspired to explore entrepreneurial opportunities.",
      date: "28/11/2024",
      image: msmeImage,
      visitors: 0,
    },
  ];

  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
  ];

  const handleLoadMore = () => {
    setCurrentItem((prev) => Math.min(prev + 3, boxes.length));
  };

  const toggleExpand = (index) => {
    setExpandedEvent(expandedEvent === index ? null : index);
  };

  const handleEventHover = (index, event) => {
    // Simulate increase in visitors on hover
    const newVisitors = Math.min(
      boxes[index].visitors + Math.floor(Math.random() * 3) + 1,
      100
    );
    boxes[index].visitors = newVisitors;
  };

  return (
    <div className="bg-white">
      <div className="relative h-screen/1.25 flex items-center justify-center bg-gray-800 text-white">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          <span className="animate-pulse">EVENTS</span>
        </h1>
      </div>
      <div className={`py-16 ${isVisible ? "fade-in" : "fade-out"}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boxes.slice(0, currentItem).map((box, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden relative transition-transform duration-300"
                onMouseEnter={() => handleEventHover(index)}
              >
                <img
                  src={box.image}
                  alt={box.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{box.title}</h3>
                  <p className="text-gray-600">
                    {box.date} | Visitors: {box.visitors}
                  </p>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-blue-500 mt-2"
                  >
                    {expandedEvent === index ? "Show Less" : "Show More"}
                  </button>
                  <div
                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                      expandedEvent === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p>{box.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Load More
            </button>
          </div>
        </div>
      </div>

      {/* New Gallery Section */}
      <div className="py-16 bg-gray-100">
        <h2 className="text-3xl text-center font-bold mb-8">
          Our Events Gallery
        </h2>
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <div className="flex overflow-x-auto space-x-4">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-40 h-24 object-cover rounded-lg"
                />
              ))}
            </div>
            <div className="flex overflow-x-auto space-x-4 flex-row-reverse">
              {galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-40 h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
