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
    <footer className="bg-slate-800 py-8 text-slate-300">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Media Icons using React Icons */}
          <Link
            to="https://facebook.com"
            className="text-slate-300 hover:text-orange-500"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            to="https://twitter.com"
            className="text-slate-300 hover:text-orange-500"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            to="https://linkedin.com"
            className="text-slate-300 hover:text-orange-500"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            to="https://instagram.com"
            className="text-slate-300 hover:text-orange-500"
          >
            <FaInstagram size={20} />
          </Link>
        </div>
        <p className="text-slate-300">
          &copy; 2024 CodeForce. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
