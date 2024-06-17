import React, { useState } from "react";
// import Causes from "../components/Causes";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { services } from "../data/data";
import SearchBar from "../components/search/SearchBar";
import { useSearchContext } from "../redux/SearchContext";

const Home = () => {
  const { searchQuery, updateSearchQuery } = useSearchContext();

  const slides = [
    {
      image: "https://i.ibb.co/5k4jBfh/11.jpg",
    },
    {
      image: "https://i.ibb.co/qWCRzyv/13.jpg",
    },
    {
      image: "https://i.ibb.co/gzRRQbD/12.jpg",
    },
    {
      image: "https://i.ibb.co/GFmgJ95/14.jpg",
    },
    {
      image: "https://i.ibb.co/55hG8ht/16.jpg",
    },
    // {
    //   image: "https://i.ibb.co/0ywfBb2/15.jpg",
    // },
    // {
    //   image: "https://i.ibb.co/F8vXB57/17.jpg",
    // },
  ];

  const homeData = [
    "We are driven by a singular mission: to extend a helping hand to those in need, fostering a community of care and compassion. Our initiatives encompass a wide range of services aimed at addressing various aspects of societal welfare.",
    "From providing free tiffin services to ensuring no one goes hungry, to supporting Wardha Ashram as a sanctuary for many seeking refuge, our commitment knows no bounds.",
    "Additionally, we organize food distribution drives, reaching out to the homeless and destitute with essential supplies. Moreover, our compassion extends to animals through our dedicated animal care initiatives, ensuring even the voiceless receive the love and care they deserve.",
    "At Team Pahal Bareli Foundation, we firmly believe in the power of collective effort and community support. Together, we strive to create a world where everyone has access to basic necessities and the opportunity to lead dignified lives. Join us in our mission to make a meaningful difference in the lives of those less fortunate."
  ];

  const filteredHomeData = homeData.filter(paragraph =>
    paragraph.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="pt-[100px] w-screen">
        <div className="marquee-container">
          <div className="marquee">
            सूचना पर तत्काल सेवा हेल्पलाइन नंबर 9424502080
          </div>
        </div>
        <Slider slides={slides} />
      </div>
      <br />
      <div className=" grid gap-16 lg:gap-16 lg:grid-cols-2 max-w-7xl mx-auto px-5 mt-10 lg:my-20">
        <img
          src="https://i.ibb.co/tDYtm7Q/Whats-App-Image-2024-06-10-at-10-57-34-6754bbb9.jpg"
          alt="not found"
          className="rounded-lg shadow-2xl shadow-red-500 h-[60vh] object-cover -rotate-6"
        />
        <div>
          <p className="text-2xl font-semibold lg:text-4xl lg:font-semibold">
            <span className="text-cyan-500">Team Pahal Bareli</span> Foundation
            for helping poor people
          </p>

          {filteredHomeData.map((paragraph, index) => (
<p key={index} className="text-[16px] mt-2 leading-relaxed">
{paragraph}
</p>
))}
          
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 my-20">
       
        <p className="text-cyan-500 uppercase mb-12 text-2xl font-semibold lg:text-4xl lg:font-semibold text-center">
          our culture
        </p>
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 ">
          {filteredServices.map((currElem) => (
            <div
              className="card p-4 border shadow-xl shadow-yellow-500 "
              key={currElem.id}
            >
              <img
                src={currElem.img}
                alt="not found"
                className="rounded-lg hover:opacity-75"
              />
              <p className="text-center text-2xl lg:text-3xl font-semibold mt-5">
                {currElem.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer  />
    </>
  );
};

export default Home;
