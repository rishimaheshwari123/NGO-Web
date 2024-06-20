import React from "react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Popup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-8 rounded shadow-lg max-w-sm w-full">
        <ImCross
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-red-600 cursor-pointer"
        />
        <h2 className="text-2xl font-bold text-cyan-500 text-center  mt-8 mb-3">
          सूचना पर तत्काल सेवा
        </h2>
        <h2 className="text-2xl font-bold text-cyan-500 text-center   mb-3">
          24x7 ,365 days
        </h2>
        <div className="border-b-2 border-b-yellow-500 mb-6"></div>
        <div className="flex gap-5 justify-between text-xl">
          <p className="border-r-4 border-r-cyan-500 pr-8">हेल्पलाइन नंबर</p>
          <div className="grid gap-2">
            <p className="flex gap-2 items-center hover:text-yellow-400">
              <FaPhoneAlt /> 9424502080
            </p>
            <p className="flex gap-2 items-center hover:text-yellow-400">
              <FaPhoneAlt /> 9174502080
            </p>
          </div>
        </div>
        <div className="border-b-2 border-b-yellow-500 mt-6 mb-3"></div>

        <div className="flex justify-center items-center gap-2  text-yellow-500">
          <Link to="https://www.facebook.com/teampahal.bareli1" target="_blank">
            <FaFacebook size={25} className="hover:text-red-500" />
          </Link>
          <Link
            to="https://www.instagram.com/team_pahal_bareli"
            target="_blank"
          >
            <FaInstagram size={25} className="hover:text-red-500" />
          </Link>
          <Link
            to="https://www.youtube.com/watch?v=fxdFW3w3UZA"
            target="_blank"
          >
            <FaYoutube size={25} className="hover:text-red-500" />
          </Link>
          <Link to="https://x.com/TeamPahal" target="_blank">
            <RiTwitterXFill size={25} className="hover:text-red-500" />
          </Link>
        </div>
        <button
          onClick={onClose}
          className="bg-cyan-500 text-white rounded-lg text-[18px] mt-8 flex m-auto w-full justify-center hover:bg-transparent hover:border-2 hover:border-red-700 hover:text-red-700  hover:scale-95 font-bold text-center py-2 "
        >
          <p className="text-center">Close</p>
        </button>
      </div>
    </div>
  );
};

export default Popup;
