import React, { useState } from "react";
import Slider from "../components/Slider";
import ServiceTab from "../components/ServiceTab";
import AvailableTab from "../components/AvailableTab";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const slides = [
  {
    image: "https://i.ibb.co/GFmgJ95/14.jpg",
  },
  {
    image: "https://i.ibb.co/55hG8ht/16.jpg",
  },
  {
    image: "https://i.ibb.co/0ywfBb2/15.jpg",
  },
  {
    image: "https://i.ibb.co/F8vXB57/17.jpg",
  },
];
const Services = () => {
  const [activeTab, setActiveTab] = useState("service");
  const handleTabName = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <Navbar />
      <div className="pt-28 ">
        <div class="marquee-container">
          <div class="marquee">
            सूचना पर तत्काल सेवा हेल्पलाइन नंबर 9424502080
          </div>
        </div>
        <Slider slides={slides} />

        <div className="h-10 bg-cyan-500 text-white font-bold flex items-center mt-20 text-2xl overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            Always ready to help
          </div>
        </div>

        <div>
          <p className="text-3xl font-semibold text-cyan-500 text-center my-12">
            Some Important news about us you should learn
            <div className="grid gap-14 lg:grid-cols-2 max-w-7xl mx-auto px-5 mt-24">
              <img
                src="https://i.ibb.co/sFyQvcv/Whats-App-Image-2024-06-10-at-16-20-51-a7e73b34.jpg"
                alt="not found"
                className="rounded-lg -rotate-12 shadow-lg shadow-red-600"
              />
              <img
                src="https://i.ibb.co/R7kPVdG/Whats-App-Image-2024-06-10-at-16-20-51-e2e3c6fa.jpg"
                alt="not found"
                className="rounded-lg h-[51vh] rotate-6 shadow-2xl shadow-yellow-600"
              />
            </div>
          </p>
        </div>

        <div className="flex justify-center gap-5 mt-20 mb-4 text-2xl">
          <p
            className={`${
              activeTab === "service"
                ? "border-b-2 border-b-red-500 font-bold cursor-pointer"
                : " cursor-pointer"
            }`}
            onClick={() => handleTabName("service")}
          >
            Service
          </p>
          <p
            className={`${
              activeTab === "available"
                ? "border-b-2 border-b-red-500 font-bold cursor-pointer"
                : " cursor-pointer"
            }`}
            onClick={() => handleTabName("available")}
          >
            Available
          </p>
        </div>

        {activeTab === "service" && <ServiceTab />}
        {activeTab === "available" && <AvailableTab />}
      </div>

      <Footer />
    </>
  );
};

export default Services;
