import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../varients";

const AboutSection = () => {
  return (
    <motion.div
      varients={fadeIn("up ", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About E-Cell</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          E-Cell is the driving force behind entrepreneurship at our college. We
          aim to foster creativity, innovation, and entrepreneurial spirit among
          students by providing them with the necessary resources, guidance, and
          platform to turn their ideas into reality. From workshops to startup
          competitions, we are here to support the next generation of
          entrepreneurs.
        </p>
      </section>
    </motion.div>
  );
};

export default AboutSection;
