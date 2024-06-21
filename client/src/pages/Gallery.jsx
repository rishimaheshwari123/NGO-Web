import React, { useEffect, useState } from "react";
import { services } from "../data/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getGallery = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/gallery/get`);

      if (response?.data?.success) {
        setGallery(response.data.gallerys);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    getGallery();
  }, []);
  return (
    <>
      <Navbar />
      <div className="pt-28">
        <div className="max-w-7xl mx-auto px-5 mb-10">
          <div className="max-w-7xl mx-auto px-5 my-20">
            <p className="text-cyan-500 uppercase mb-12 text-2xl font-semibold lg:text-4xl lg:font-semibold text-center">
              our Gallery
            </p>
            <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 ">
              {gallery.map((currElem) => (
                <div
                  className="card p-4 border shadow-xl shadow-red-500 "
                  key={currElem._id}
                >
                  <img
                    src={currElem.image}
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
