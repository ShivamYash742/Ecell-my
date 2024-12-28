import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./Navbar.css";
import logo from "../public/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercentage(scrolled);
    };

    if (location.pathname === "/" || location.pathname === "/events") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const getBackgroundColor = () => {
    const adjustedScroll = Math.max(0, scrollPercentage - 15); // Start changing opacity from 15%
    const opacity = Math.min(adjustedScroll / 35, 1); // Adjust based on remaining 85%
    return `rgba(59, 130, 246, ${opacity}), rgba(139, 92, 246, ${opacity})`; // Blue to Purple gradient
  };

  return (
    <div
      className={`fixed p-2 shadow-md w-full z-10 top-0 ${
        (location.pathname === "/" || location.pathname === "/events") &&
        scrollPercentage < 15
          ? "bg-transparent"
          : ""
      }`}
      style={{
        background:
          location.pathname === "/" || location.pathname === "/events"
            ? `linear-gradient(to right, ${getBackgroundColor()})`
            : "linear-gradient(to right, #3b82f6, #8b5cf6)",
      }}
    >
      <div className="mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <img className="rounded-full h-14" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
          >
            About
          </Link>
          <Link
            to="/events"
            className="text-white hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
          >
            Events
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger/Cross Button for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <CSSTransition
        in={isMenuOpen}
        timeout={200}
        classNames="mobile-menu"
        unmountOnExit
      >
        <div className="md:hidden bg-white p-4 my-4 space-y-4 shadow-md rounded-lg">
          <Link
            to="/"
            className="block text-black hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-black hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/events"
            className="block text-black hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            to="/contact"
            className="block text-black hover:text-yellow-400 transition duration-300 no-underline hover:underline underline-offset-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Navbar;
