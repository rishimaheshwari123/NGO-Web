import React from "react";
import Causes from "../components/Causes";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { services } from "../data/data";

const Home = () => {
  const slides = [
    {
      image:
        "https://thaagamorg-eb-s3.s3.amazonaws.com/static/main/assets/images/slider/2.jpg",
      title: "Give Food and Milk ",
      desc: " Providing eggs and milk to children is not just nourishing their bodies; it's feeding their dreams and giving them a brighter, healthier future..",
      button: "Help",
    },
    {
      image:
        "https://thaagamorg-eb-s3.s3.amazonaws.com/static/main/assets/images/slider/slide-3.webp",
      title: "Help to orphan child ",
      button: "Help",
      desc: "We are providing room facility to orphan child also provide the nessary food",
    },
    {
      image:
        "https://thaagamorg-eb-s3.s3.amazonaws.com/static/main/assets/images/slider/slide01.webp",
      title: "Free aduction to needy childs",
      button: "Help",
      desc: "We are providing free stady to orphan child and provide the food as well",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pt-[100px] w-screen">
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

      <Causes />

      <div className="max-w-7xl mx-auto px-5 my-20">
        <p className="text-cyan-500 uppercase mb-12 text-2xl font-semibold lg:text-4xl lg:font-semibold text-center">
          our culture
        </p>
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 ">
          {services.map((currElem) => (
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
      <Footer />
    </>
  );
};

export default Home;
