import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
const slides = [
  {
    image: "https://i.ibb.co/5k4jBfh/11.jpg",
  },
  {
    image:
      "https://i.ibb.co/yhcBJvy/Whats-App-Image-2024-06-17-at-12-15-45-297373d4.jpg",
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
];

const Home = () => {
  const [cultures, setCultures] = useState([]);

  const getCultureData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/culture/getAll`
      );
      if (response?.data?.success) {
        setCultures(response.data.cultures);
      }
    } catch (error) {
      console.log("Could not fetch case payments from frontend", error);
    }
  };
  useEffect(() => {
    getCultureData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="pt-[100px] w-screen">
        <Slider slides={slides} />
      </div>
      <br />

      <div className="grid">
        <p className="text-2xl uppercase text-center my-10 font-semibold lg:text-4xl lg:font-semibold">
          Know more about{" "}
          <span className="text-cyan-500">Team Pahal Bareli</span>
        </p>{" "}
        <div className="grid lg:grid-cols-2 gap-5 max-w-7xl mx-auto ">
          <iframe
            className="w-full h-full sm:w-80 md:w-96 lg:w-[560px] lg:h-[315px]"
            src="https://www.youtube.com/embed/S1lzof62iLo?si=YavVz2acCHRHkAzJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full h-full sm:w-80 md:w-96 lg:w-[560px] lg:h-[315px]"
            src="https://www.youtube.com/embed/fxdFW3w3UZA?si=9NunQb2JkStNg51D"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className=" grid  gap-16 lg:gap-16 lg:grid-cols-2 max-w-7xl mx-auto px-8 mt-10 lg:my-20 ">
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
          <p className="text-[16px] mt-2 leading-relaxed">
            We are driven by a singular mission: to extend a helping hand to
            those in need, fostering a community of care and compassion. Our
            initiatives encompass a wide range of services aimed at addressing
            various aspects of societal welfare. From providing free tiffin
            services to ensuring no one goes hungry, to supporting Wardha Ashram
            as a sanctuary for many seeking refuge, our commitment knows no
            bounds. Additionally, we organize food distribution drives, reaching
            out to the homeless and destitute with essential supplies. Moreover,
            our compassion extends to animals through our dedicated animal care
            initiatives, ensuring even the voiceless receive the love and care
            they deserve. At Team Pahal Bareli Foundation, we firmly believe in
            the power of collective effort and community support. Together, we
            strive to create a world where everyone has access to basic
            necessities and the opportunity to lead dignified lives. Join us in
            our mission to make a meaningful difference in the lives of those
            less fortunate
          </p>
        </div>
      </div>

      {/* <Causes /> */}
      <div className="max-w-7xl mx-auto px-5 my-20">
        <p className="text-cyan-500 uppercase mb-12 text-2xl font-semibold lg:text-4xl lg:font-semibold text-center">
          our culture
        </p>
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 ">
          {cultures.length > 0 ? (
            cultures.map((currElem, index) => (
              <Link to={`/product?id=${currElem._id}`} key={index}>
                <div
                  className="card p-4 border shadow-xl shadow-yellow-500 "
                  key={currElem.id}
                >
                  <img
                    src={currElem.image}
                    alt="not found"
                    className="rounded-lg hover:opacity-75"
                  />
                  <p className="text-center text-2xl lg:text-3xl font-semibold mt-5">
                    {currElem.title}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <>
              <p className="flex m-auto">No culture found</p>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
