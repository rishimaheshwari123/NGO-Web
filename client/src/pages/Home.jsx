import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const slides = [
  {
    image: "https://i.ibb.co/5k4jBfh/11.jpg",
  },
  {
    image: "https://i.ibb.co/yhcBJvy/Whats-App-Image-2024-06-17-at-12-15-45-297373d4.jpg",
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
  const { t } = useTranslation();
  const [category, setCategory] = useState([]);

  const getAllCategory = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/category/getAll`);
      if (response?.data?.success) {
        setCategory(response.data.categorys);
      }
    } catch (error) {
      console.log("Could not fetch category from frontend", error);
    }
  };

  useEffect(() => {
    getAllCategory();
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
          {t('know_more')}{" "}
          <span className="text-cyan-500">{t('team_name')}</span>
        </p>
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
      <div className="grid gap-16 lg:gap-16 lg:grid-cols-2 max-w-7xl mx-auto px-8 mt-10 lg:my-20">
        <div className="w-[80vw] lg:h-[100vh] lg:w-full">
          <img
            src="https://i.ibb.co/tDYtm7Q/Whats-App-Image-2024-06-10-at-10-57-34-6754bbb9.jpg"
            alt="not found"
            className="rounded-lg shadow-2xl shadow-red-500 object-cover lg:h-[65vh]  "
            src="https://i.ibb.co/tDYtm7Q/Whats-App-Image-2024-06-10-at-10-57-25.jpg"
            className="w-full lg:w-[80%] h-auto"
            alt=""
          />
        </div>
        <div className="text-gray-700 p-4 text-justify lg:text-xl leading-7 tracking-wide font-light">
          <h2 className="text-2xl font-semibold lg:text-4xl text-center">
            {t('foundation_helping')}
          </h2>
          <p className="pt-4 text-xl font-light">{t('mission_statement')}</p>
        </div>
      </div>
      <div className="my-10 max-w-7xl mx-auto">
        <h2 className="text-center text-2xl lg:text-4xl font-semibold">
          {t('our_culture')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {category.length ? (
            category.map((cat) => (
              <Link
                key={cat._id}
                to={`/category/${cat.slug}`}
                className="block text-center text-lg"
              >
                <div className="p-4 bg-gray-200 rounded-lg shadow">
                  <h3 className="text-xl font-semibold">{cat.name}</h3>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-4 text-center text-xl">{t('no_category_found')}</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
