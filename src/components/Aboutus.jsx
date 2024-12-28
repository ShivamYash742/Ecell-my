import React, { useEffect } from "react";
import logo from "./images/logo.png";
import whoWeAreImg from "./images/who we are.jpg";
import missionImg from "./images/mission.jpg";
import achievementImg from "./images/achievement.jpg";
import eventsImg from "./images/events.jpg";
import establishmentImg from "./images/establishment.jpg";

const AboutUs = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    fadeElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="font-sans bg-white mx-4 my-8">
      {" "}
      {/* Added margin classes */}
      {/* About Sections */}
      <div className="flex flex-col items-center mt-12">
        {/* WHO ARE WE Section */}
        <div className="flex flex-wrap justify-center items-center gap-12 fade-in mt-8">
          <div className="max-w-md text-center">
            <h1 className="text-3xl underline text-green-600 mb-4">
              WHO ARE WE
            </h1>
            <p>
              At E-Cell MSIT, we believe in fostering innovation and
              entrepreneurship among our students. Our incubation program
              provides a platform for young entrepreneurs to turn their ideas
              into successful startups. We are dedicated to nurturing the
              entrepreneurial spirit by offering guidance, resources, and
              networking opportunities to help transform ideas into impactful
              businesses.
            </p>
          </div>
          <img
            src={whoWeAreImg}
            alt="Who We Are"
            className="w-96 h-64 rounded-lg border-4 border-blue-900"
          />
        </div>

        {/* OUR MISSION Section */}
        <div className="flex flex-wrap justify-center items-center gap-12 fade-in mt-8">
          <img
            src={missionImg}
            alt="Our Mission"
            className="w-96 h-64 rounded-lg object-cover border-4 border-blue-900"
          />
          <div className="max-w-md text-center">
            <h1 className="text-3xl underline text-green-600 mb-4">
              OUR MISSION
            </h1>
            <p>
              Our mission is to create a vibrant ecosystem that supports the
              growth of innovative startups. We provide resources, mentorship,
              and funding opportunities to help our startups succeed. By
              fostering collaboration between aspiring entrepreneurs, industry
              leaders, and investors, we aim to empower the next generation of
              innovators to turn their ideas into impactful businesses.
            </p>
          </div>
        </div>

        {/* OUR ACHIEVEMENTS Section */}
        <div className="flex flex-wrap justify-center items-center gap-12 fade-in mt-8">
          <div className="max-w-md text-center">
            <h1 className="text-3xl underline text-green-600 mb-4">
              OUR ACHIEVEMENTS
            </h1>
            <p>
              We are proud of our achievements and the success of our startups.
              Here are a few highlights:
              <br />- Mr. Simarneet Singh's startup, <b>Jagudau</b>, selected
              for Shark Tank 2025 <br />- Mr. Manav Solanki's startup,{" "}
              <b>Crowdfuez</b>, awarded by the President of India <br />-
              Successful organization of <b>Ideathon</b> in association with{" "}
              <b>NASSCOM</b> <br />- Over 50 startups incubated and funded in
              the last year.
            </p>
          </div>
          <img
            src={achievementImg}
            alt="Our Achievements"
            className="w-96 h-64 rounded-lg object-cover border-4 border-blue-900"
          />
        </div>

        {/* EVENTS Section */}
        <div className="flex flex-wrap justify-center items-center gap-12 fade-in mt-8">
          <img
            src={eventsImg}
            alt="Events"
            className="w-96 h-64 rounded-lg object-cover border-4 border-blue-900"
          />
          <div className="max-w-md text-center">
            <h1 className="text-3xl underline text-green-600 mb-4">EVENTS </h1>
            <p>
              We organize various events throughout the year to promote
              entrepreneurship and innovation. Some of our key events include:
              <br />
              - Annual Startup Fest <br />
              - Monthly Workshops on Business Development <br />
              - Networking Events with Industry Leaders <br />- Pitch
              Competitions for Startups
            </p>
          </div>
        </div>

        {/* ESTABLISHMENT Section */}
        <div className="flex flex-wrap justify-center items-center gap-12 fade-in mt-8">
          <div className="max-w-md text-center">
            <h1 className="text-3xl underline text-green-600 mb-4">
              ESTABLISHMENT
            </h1>
            <p>
              E-Cell MSIT was established in 2020 with the vision to create a
              supportive environment for budding entrepreneurs. Since our
              inception, we have been committed to empowering students to
              explore their entrepreneurial potential and make a difference in
              the world.
            </p>
          </div>
          <img
            src={establishmentImg}
            alt="Establishment"
            className="w-96 h-64 rounded-lg object-cover border-4 border-blue-900"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
