import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the drawer toggle
import { motion } from "framer-motion";
import servicesData from "../../data/services";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false); // State to control services dropdown

  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if current path is the home page
  const isHomePage = location.pathname === "/";
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 py-4 ${
        isHomePage && scrollPosition > 50
          ? "bg-slate-800 shadow-2xl"
          : !isHomePage
          ? "bg-slate-800 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wider text-slate-50"
        >
          Code<span className="text-orange-500">Force</span>
        </Link>

        {/* Drawer toggle button, visible only on small screens */}
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="flex items-center">
            <FaBars size={24} color="rgb(248 250 252)" />
          </button>
        </div>

        {/* Links for large screens */}
        <ul className="hidden md:flex items-center space-x-6 text-white text-xl relative">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "text-orange-500 font-bold" : ""
              } hover:text-orange-500`}
            >
              Home
            </Link>
          </li>
          <li onMouseEnter={() => setShowServicesDropdown(true)}>
            <Link
              to="/services"
              className={`${
                location.pathname === "/services"
                  ? "text-orange-500 font-bold"
                  : ""
              } hover:text-orange-500`}
            >
              Services{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`${
                location.pathname === "/projects"
                  ? "text-orange-500 font-bold"
                  : ""
              } hover:text-orange-500`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                location.pathname === "/about"
                  ? "text-orange-500 font-bold"
                  : ""
              } hover:text-orange-500`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact"
                  ? "text-orange-500 font-bold"
                  : ""
              } hover:text-orange-500`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Services dropdown */}
      {showServicesDropdown && (
        <motion.div
          className="absolute left-0 top-0 bg-blue-500 pt-4 pb-6 text-slate-50 z-0 w-full"
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          onMouseLeave={() => setShowServicesDropdown(false)}
        >
          <div className="container mx-auto flex justify-between items-center px-4">
            <Link
              to="/"
              className="text-2xl font-bold tracking-wider text-slate-50"
              onClick={() => setShowServicesDropdown(false)}
            >
              Code<span className="text-orange-500">Force</span>
            </Link>

            {/* Drawer toggle button, visible only on small screens */}
            <div className="md:hidden">
              <button onClick={toggleDrawer} className="flex items-center">
                <FaBars size={24} color="rgb(248 250 252)" />
              </button>
            </div>

            {/* Links for large screens */}
            <ul className="hidden md:flex space-x-6 text-xl text-slate-50 relative">
              <li>
                <Link
                  to="/"
                  onClick={() => setShowServicesDropdown(false)}
                  className={`${
                    location.pathname === "/"
                      ? "text-orange-500 font-bold"
                      : ""
                  } hover:text-orange-500`}
                >
                  Home
                </Link>
              </li>
              <li onMouseEnter={() => setShowServicesDropdown(true)}>
                <Link
                  to="/services"
                  onClick={() => setShowServicesDropdown(false)}
                  className={` ${
                    location.pathname === "/services"
                      ? "text-orange-500 font-bold"
                      : ""
                  } hover:text-orange-500`}
                >
                  Services{" "}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => setShowServicesDropdown(false)}
                  className={`${
                    location.pathname === "/projects"
                      ? "text-orange-500 font-bold"
                      : ""
                  } hover:text-orange-500`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setShowServicesDropdown(false)}
                  className={`${
                    location.pathname === "/about"
                      ? "text-orange-500 font-bold"
                      : ""
                  } hover:text-orange-500`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setShowServicesDropdown(false)}
                  className={`${
                    location.pathname === "/contact"
                      ? "text-orange-500 font-bold"
                      : ""
                  } hover:text-orange-500`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="container mx-auto flex flex-col items-center pt-6 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {servicesData.map((service) => (
                <Link
                  key={service.id}
                  to={service.link}
                  onClick={() => setShowServicesDropdown(false)}
                  className="bg-slate-700 hover:bg-orange-500 p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Drawer menu for small screens */}
      <div
        className={`bg-slate-700 fixed top-0 right-0 h-screen w-3/4 shadow-md transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleDrawer}>
            <FaTimes size={24} color="rgb(248 250 252)" />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 py-6 text-slate-50 text-3xl">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "text-orange-500 font-bold" : ""
              } hover:text-orange-500`}
              onClick={toggleDrawer}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`${
                location.pathname === "/services"
                  ? "text-orange-500 font-bold"
                  : ""
              } hover:text-orange-500`}
              onClick={toggleDrawer}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`${
                location.pathname === "/projects"
                  ? "text-orange-500 font-bold"
                  : ""
              } hover:text-orange-500`}
              onClick={toggleDrawer}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                location.pathname === "/about"
                  ? "text-orange-500 font-bold"
                  : ""
              } hover:text-orange-500`}
              onClick={toggleDrawer}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact"
                  ? "text-orange-500 font-bold"
                  : ""
              } hover:text-orange-500`}
              onClick={toggleDrawer}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
