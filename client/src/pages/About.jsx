import React from "react";
import Info from "../components/Info";
import { mission } from "../data/data";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="pt-28 ">
        <div className="max-w-7xl mx-auto px-3">
          <Info />

          <div className="mt-24">
            <p className="text-center text-cyan-500 font-semibold text-3xl uppercase mb-16">
              {t('meet_our_team')}
            </p>

            <Slider slides={slides} />
          </div>

          <br />

          <div className="my-16">
            <p className="text-center text-3xl font-bold uppercase mb-10">
              {t('some_info_about_us')}
            </p>
            <div className="grid lg:grid-cols-4 gap-10 bg-transparent">
              {info.map((currElem, index) => (
                <div className="hover:scale-95" key={index}>
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
                {t('foundation_description_1')}
              </span>
              <span>
                {t('foundation_description_2')}
              </span>
              <span>
                {t('foundation_description_3')}
              </span>
            </p>
          </div>
        </div>
        <div className="main grid lg:gap-16 gap-14">
          <br />
          <p className="text-center text-4xl font-semibold text-white ">
            {t('concern_about_our_mission')}
          </p>

          <div className="grid lg:grid-cols-3 lg:px-20 gap-8 px-5 text-white">
          {mission.map((currElem) => (
        <div key={currElem.id}>
          <p className="text-xl font-semibold">{t(currElem.titleKey)}</p>
          <p className="text-xl mt-4">{t(currElem.subTitleKey)}</p>
          <p className="text-sm mt-3 leading-7">{t(currElem.descKey)}</p>
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
