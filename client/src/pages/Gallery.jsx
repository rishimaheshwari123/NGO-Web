import React from "react";
import { services } from "../data/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28">
        <div class="marquee-container">
          <div class="marquee">
            सूचना पर तत्काल सेवा हेल्पलाइन नंबर 9424502080
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 mb-10">
          <div className="max-w-7xl mx-auto px-5 my-20">
            <p className="text-cyan-500 uppercase mb-12 text-2xl font-semibold lg:text-4xl lg:font-semibold text-center">
              our Gallery
            </p>
            <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 ">
              {services.map((currElem) => (
                <div
                  className="card p-4 border shadow-xl shadow-red-500 "
                  key={currElem.id}
                >
                  <img
                    src={currElem.img}
                    alt="not found"
                    className="rounded-lg hover:opacity-75"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
