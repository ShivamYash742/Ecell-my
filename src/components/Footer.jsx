import React from "react";
import logo from "../public/logo.png";
import instagramLogo from "../public/instagram.png";
import linkedinLogo from "../public/linkedin.png";
import facebookLogo from "../public/facebook.png";
import { motion } from "framer-motion";
import { fadeIn } from "../varients";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white p-8 bottom-0 w-full ">
      <motion.div
        varients={fadeIn("up ", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto px-4 "
      >
        <div className="flex flex-wrap justify-around items-center pb-12 gap-5">
          <div className="">
            <img src={logo} alt="Logo" className="" width={80} height={80} />
          </div>

          <div className="flex-col">
            <h4 className="font-bold">Contact Us</h4>
            <h6>eCell MSIT, Maharaja Surajmal Institute of Technology , </h6>
            <h6> C-4 Janakpuri , New Delhi - 110059</h6>
          </div>

          <div className="">
            <h4 className="font-bold">Useful Links</h4>
            <ul>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h4 className="font-bold">Socials</h4>
            <div className="flex space-x-4 items-center justify-start">
              <a
                href="https://www.instagram.com/ecellmsit/"
                className="hover:text-gray-400"
                target="blank"
              >
                <img src={instagramLogo} alt="" width={25} height={25} />
              </a>
              <a
                href="https://in.linkedin.com/company/ecellmsit"
                className="hover:text-gray-400"
                target="blank"
              >
                <img src={linkedinLogo} alt="" width={15} height={15} />
              </a>
              <a
                href="https://www.facebook.com/ecellmsit/"
                className="hover:text-gray-400"
                target="blank"
              >
                <img src={facebookLogo} alt="" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-xl">
          <p>
            &copy; {new Date().getFullYear()} eCell MSIT. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
