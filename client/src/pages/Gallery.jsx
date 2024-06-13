import React from "react";
import { causes } from "../data/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-5 pt-32 mb-10">
        <div className="grid lg:grid-cols-3 gap-5">
          {causes.map((currElem, index) => (
            <img
              key={index}
              src={currElem.img}
              alt="notfound"
              className="rounded-md"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
