import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Media Icons using React Icons */}
          <Link
            to="https://facebook.com"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            to="https://twitter.com"
            className="text-gray-400 hover:text-white"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            to="https://linkedin.com"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            to="https://instagram.com"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
        <p className="text-gray-400">
          &copy; 2024 CodeForce. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
