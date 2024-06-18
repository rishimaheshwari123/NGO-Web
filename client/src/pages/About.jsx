import React from "react";
import Info from "../components/Info";
import { mission } from "../data/data";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
];

const info = [
  { img: "https://i.ibb.co/qLSTTr0/a1.png" },
  { img: "https://i.ibb.co/2ZBhqpr/a22.png" },
  { img: "https://i.ibb.co/YWFWcCc/a3.png" },
  { img: "https://i.ibb.co/H4D64d8/a4.png" },
  { img: "https://i.ibb.co/rcV6RjN/a5.png" },
  { img: "https://i.ibb.co/QcRBjyW/a6.png" },
  { img: "https://i.ibb.co/zQFfHny/a7.png" },
  { img: "https://i.ibb.co/KVp1R2t/a8.png" },
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="pt-28 ">
        <div className="max-w-7xl mx-auto px-3">
          <Info />

          <div className="mt-24">
            <p className="text-center text-cyan-500 font-semibold text-3xl uppercase mb-16">
              meet with our team
            </p>

            <Slider slides={slides} />
          </div>

          <br />

          <div className="my-16">
            <p className="text-center text-3xl font-bold uppercase mb-10">
              Some Information you should know about us
            </p>
            <div className="grid lg:grid-cols-4 gap-10 bg-transparent">
              {info.map((currElem, index) => (
                <div className="hover:scale-95">
                  <img
                    src={currElem.img}
                    alt="not found"
                    className="bg-transparent rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
          <br />

          <div className="grid gap-10 lg:grid-cols-2 my-20">
            <img
              src="https://vakilsearch.com/blog/wp-content/uploads/2021/05/VS_Blog-Images_3-05.png"
              alt="not found"
              className="rounded-md -rotate-3"
            />
            <p className="grid gap-3 text-sm">
              <span>
                Team Pahal Bareli Foundation, a non-government organization
                established in 2018, is dedicated to improving the well-being of
                all living beings. Our holistic approach encompasses humans,
                animals, and the environment, reflected in our innovative
                programs for the underprivileged, animal welfare, and
                environmental conservation.
              </span>
              <span>
                We provide comprehensive support to the homeless, including
                medical care and educational opportunities, while also bringing
                joy to orphanages through essential supplies and recreational
                activities. Our commitment extends to rescuing and feeding stray
                dogs and engaging in tree planting initiatives for environmental
                sustainability
              </span>
              <span>
                We provide comprehensive support to the homeless, including
                medical care and educational opportunities, while also bringing
                joy to orphanages through essential supplies and recreational
                activities. Our commitment extends to rescuing and feeding stray
                dogs and engaging in tree planting initiatives for environmental
                sustainability
              </span>
            </p>
          </div>
        </div>
        <div className="main grid lg:gap-16 gap-14">
          <br />
          <p className="text-center text-4xl font-semibold text-white ">
            Concern About Our Mission
          </p>

          <div className="grid lg:grid-cols-3 lg:px-20 gap-8 px-5 text-white">
            {mission.map((currElem) => (
              <div className="" key={currElem.id}>
                <p className="text-xl font-semibold">{currElem.titile}</p>
                <p className="text-xl mt-4">{currElem.subTitle}</p>
                <p className="text-sm mt-3 leading-7">{currElem.desc}</p>
              </div>
            ))}
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default About;
