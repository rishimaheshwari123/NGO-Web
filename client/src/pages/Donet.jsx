import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Donet = () => {
  return (
    <>
      <Navbar />

      <br />
      <br />
      <br />
      <div className="grid lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="flex  flex-col gap-8 items-center justify-center text-2xl font-semibold shadow-lg p-6">
          <p>बैंक नाम : यूनियन बैंक ऑफ इंडिया</p>
          <p>खाता क्र. : 661701010050132</p>
          <p>IFSC कोड: UBNI0566179</p>
          <p>पेन नं. : AAGAT6029B</p>
        </div>
        <div>
          <img
            className="flex m-auto mb-12 px-5  lg:w-[30vw] lg:h-[60vh]"
            src="https://i.ibb.co/FsBHrmq/DOC-20240314-WA0021-page-0001.jpg"
            alt="not found"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <p className="text-3xl font-bold text-center my-12  uppercase">
          If you want to pay through upi
        </p>

        <div className="flex justify-center gap-5 font-bold text-xl lg:text-3xl text-green-600 ">
          <span>Phone Pay</span>
          <span>Google Pay</span>
          <span>Paytm</span>
        </div>
        <p className="text-center my-5 text-xl lg:text-3xl">9424502080</p>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Donet;
