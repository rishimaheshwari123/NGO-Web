import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaRegClock,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple-900">
      <div className="grid ml-10 lg:grid-cols-3 lg:max-w-7xl lg:mx-auto gap-6  ">
        <div className="first grid gap-9 text-white mt-8">
          <div className=" w-[70px] h-[70px] lg:w-16 lg:h-16 ">
            <img
              src="https://i.ibb.co/W0v3fWm/Team-LOGO-page-0001.jpg"
              alt=""
              className=" object-cover rounded-full"
            />
          </div>

          <p className="text-sm">
            Team Pahal Bareli Foundation for helping poor people
          </p>
          <div className=" flex gap-3 mt-4 sm:mt-0">
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

        <div className="second grid gap-2 text-white text-xl">
          <p className="text-2xl mt-8 font-bold">CONTACT US</p>

          <div className="flex gap-2  mt-10">
            <FaLocationDot size={20} color="orange" className="mt-2" />
            <span> Team Pahal Marg, Bareli, Madhya Pradesh 464668</span>
          </div>
          <div className="flex gap-2 items-center mt-4">
            <FaPhoneAlt size={20} color="orange" />
            <span>9424502080, 9174502080</span>
          </div>
          <div className="flex gap-2 items-center mt-4">
            <MdEmail size={20} color="orange" />
            <span>teampahal.bareli@gmail.com</span>
          </div>
          <div className="flex gap-2 items-center mt-4">
            <FaRegClock size={20} color="orange" />
            <span> 24x7, 365 days</span>
          </div>
        </div>
        <div className="grid text-white text-xl">
          <p className="text-2xl mt-8 font-bold">MORE ABOUT US</p>
          <Link to="/about" className="lg:-mt-2">
            About
          </Link>
          <Link to="/contact" className="lg:-mt-10">
            Contact
          </Link>
          <Link to="/login" className="lg:-mt-10">
            Admin Login
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </footer>
  );
};

export default Footer;
