import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" pt-28">
        <iframe
          title="Team pahal bareli"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645878.2622198893!2d77.50863546773822!3d23.19726510213207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397e8b0000000001%3A0x9c121f33183644b9!2sTeam%20Pahal%20Bareli!5e0!3m2!1sen!2sin!4v1718018540903!5m2!1sen!2sin"
          className="w-full h-[70vh]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className=" grid gap-10 max-w-7xl mx-auto px-5 lg:grid lg:grid-cols-2 my-36 items-center">
          <div className="first flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="px-4 py-3 bg-cyan-500 rounded-md text-xl">
                <FaLocationDot />
              </span>
              <span className="text-sm">
                {" "}
                Team Pahal Marg, Bareli, Madhya Pradesh 464668
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-4 py-3 bg-cyan-500 rounded-md  text-xl">
                <MdEmail />
              </span>
              <span className="text-sm">teampahal.bareli@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-4 py-3 bg-cyan-500 rounded-md  text-xl">
                <FaPhone />
              </span>
              <span className="text-sm">+91 94245 02080</span>
            </div>
          </div>
          <form className="second flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Enter your name"
                className="p-3 outline-none h-14 border border-gray-300 bg-transparent"
                name="name"
                // value={formData.name}
                // onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 outline-none h-14 border border-gray-300 bg-transparent"
                name="email"
                // value={formData.email}
                // onChange={handleChange}
              />
            </div>
            <input
              type="text"
              placeholder="Enter your phone "
              className="p-3 outline-none h-14 border border-gray-300 bg-transparent"
              name="contact"
              // value={formData.contact}
              // onChange={handleChange}
            />
            <textarea
              className="p-3 outline-none h-28 border border-gray-300 bg-transparent"
              placeholder="Message"
              name="message"
              // value={formData.message}
              // onChange={handleChange}
            ></textarea>
            <button className="px-6 py-2 rounded-md bg-orange-400 text-white text-sm cursor-pointer">
              Contact Us
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
