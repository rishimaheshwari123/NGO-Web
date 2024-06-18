// src/components/Navbar.js
import React, { useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

import SearchBar from "./search/SearchBar";
const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const pathMatch = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className=" flex flex-col sm:flex-row justify-between items-center px-5 py-4 bg-pink-600">
        <div className=" flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-white">
          <div className="flex gap-2 items-center">
            <FaLocationDot size={20} color="orange" />
            Team Pahal Marg, Bareli, Madhya Pradesh 464668
          </div>
          <div className="flex gap-2 items-center">
            <FaPhoneAlt size={20} color="orange" />
            9424502080
          </div>
          <div className="flex gap-2 items-center">
            <FaRegClock size={20} color="orange" />
            24x7, 365 days
          </div>
        </div>
        <div className=" flex gap-3 mt-4 sm:mt-0 text-white">
          <Link to="https://www.facebook.com/teampahal.bareli1">
            <FaFacebook size={25} />
          </Link>
          <Link to="https://www.instagram.com/team_pahal_bareli">
            <FaInstagram size={25} />
          </Link>
          <Link to="https://www.youtube.com/watch?v=fxdFW3w3UZA">
            <FaYoutube size={25} />
          </Link>
          <Link to="https://x.com/TeamPahal">
            <RiTwitterXFill size={25} />
          </Link>
        </div>
      </div>
      <nav className="bg-white text-black  w-full z-10 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <Link
              to="/"
              className="flex items-center py-5 px-2 hover:text-gray-300 transition duration-300"
            >
              <div className=" w-[70px] h-[70px] lg:w-16 lg:h-16 ">
                <img
                  src="https://i.ibb.co/W0v3fWm/Team-LOGO-page-0001.jpg"
                  alt=""
                  className=" object-cover rounded-full"
                />
              </div>
            </Link>
          </div>

          <div>
            <SearchBar></SearchBar>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className={` py-5 px-2 ${
                pathMatch("/") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={` py-5 px-2 ${
                pathMatch("/about") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={` py-5 px-2 ${
                pathMatch("/gallery") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/services"
              className={` py-5 px-2 ${
                pathMatch("/services") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Services
            </Link>
            <Link
              to="/events"
              className={` py-5 px-2 ${
                pathMatch("/events") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className={` py-5 px-2 ${
                pathMatch("/contact") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/highlight"
              className={` py-5 px-2 ${
                pathMatch("/highlight")
                  ? "text-red-600 font-bold"
                  : "text-black"
              }`}
            >
              HighLight
            </Link>
            <Link
              to="/donate"
              className={`bg-gray-300 rounded-lg py-2 px-6 ${
                pathMatch("/donate") ? "text-red-600 font-bold" : "text-black"
              }`}
            >
              Donate
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Sidebar for mobile */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white text-black transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <div className=" w-[70px] h-[70px] lg:w-16 lg:h-16 flex m-auto mt-3 mb-8 ">
            <img
              src="https://i.ibb.co/W0v3fWm/Team-LOGO-page-0001.jpg"
              alt=""
              className=" object-cover "
            />
          </div>
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/"
              className={` px-2 ${
                pathMatch("/") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <div className="border-b-2 border-b-black"></div>
            <Link
              to="/about"
              className={`px-2 ${
                pathMatch("/about") ? "text-red-600 font-bold " : "text-black"
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <div className="border-b-2 border-b-black"></div>

            <Link
              to="/gallery"
              className={`  px-2 ${
                pathMatch("/gallery") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Gallery
            </Link>
            <div className="border-b-2 border-b-black"></div>

            <Link
              to="/services"
              className={` px-2 ${
                pathMatch("/services") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Services
            </Link>
            <div className="border-b-2 border-b-black"></div>

            <Link
              to="/events"
              className={` px-2 ${
                pathMatch("/events") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Events
            </Link>
            <div className="border-b-2 border-b-black"></div>

            <Link
              to="/contact"
              className={`  px-2 ${
                pathMatch("/contact") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="border-b-2 border-b-black"></div>

            <Link
              to="/highlight"
              className={`  px-2 ${
                pathMatch("/highlight")
                  ? "text-red-600 font-bold"
                  : "text-black"
              }`}
              onClick={toggleMenu}
            >
              HighLight
            </Link>
            <div className="border-b-2 border-b-black"></div>

            <Link
              to="/donate"
              className={` bg-gray-300 px-4 py-2 w-fit ${
                pathMatch("/donate") ? "text-red-600 font-bold" : "text-black"
              }`}
              onClick={toggleMenu}
            >
              Donate
            </Link>
            <div className="border-b-2 border-b-black"></div>
          </div>
        </div>
        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-0"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
