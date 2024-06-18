import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TbHandFinger } from "react-icons/tb";

const Donet = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const donate = [
    {
      img: "https://i.ibb.co/y5kP4N6/Whats-App-Image-2024-06-17-at-12-01-36-04f886a9.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      {donate.map((currElem, index) => (
        <div className="flex justify-center items-center my-5 px-5">
          <img src={currElem.img} alt="not found" key={index} />
        </div>
      ))}

      <div>
        <p className="text-3xl font-bold text-center my-12  uppercase">
          If you want to pay through upi
        </p>

        <div className="flex justify-center gap-5 font-bold text-xl text-green-600 ">
          <span>Phone Pay</span>
          <span>Google Pay</span>
          <span>Paytm</span>
        </div>
        <p className="text-center my-5 text-xl">9424502080</p>

        <button
          onClick={handleToggle}
          className="flex items-center mt-5 mb-14 hover:opacity-85 gap-2 m-auto px-8 py-3 bg-green-500 rounded-md text-white text-xl "
        >
          Pay Now <TbHandFinger size={22} />
        </button>
        {toggle && (
          <img
            className="flex m-auto mb-12 px-5"
            src="https://i.ibb.co/FsBHrmq/DOC-20240314-WA0021-page-0001.jpg"
            alt="not found"
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Donet;
