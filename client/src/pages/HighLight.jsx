import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import highlight1 from "../assets/h1.png";
import highlight2 from "../assets/h2.png";
import React, { useState } from "react";

const HighLight = () => {
  const [tabActive, setTabActive] = useState("highlight");

  const handleTabChange = (tab) => {
    setTabActive(tab);
  };

  return (
    <>
      <Navbar />

      <div className=" max-w-7xl mx-auto ">
        <div className="flex  justify-center gap-3 bg-gray-500 w-fit m-auto py-1 rounded-md px-3">
          <button
            onClick={() => handleTabChange("highlight")}
            className={` font-bold text-xl ${
              tabActive === "highlight"
                ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
            }`}
          >
            HighLight
          </button>
          <button
            onClick={() => handleTabChange("achive")}
            className={` font-bold text-xl ${
              tabActive === "achive"
                ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
            }`}
          >
            Achievements{" "}
          </button>
        </div>

        <br />
        <br />

        {tabActive === "highlight" && (
          <div className=" max-w-7xl mx-auto my-10">
            <div className="grid px-5 lg:grid-cols-2 gap-3">
              <img
                src={highlight1}
                alt="not found"
                className="rounded-lg hover:scale-95"
              />
              <img
                src={highlight2}
                alt="not found"
                className="rounded-lg hover:scale-95"
              />
            </div>
          </div>
        )}
        {tabActive === "achive" && (
          <div className=" max-w-7xl mx-auto my-10">
            <div>
              <p className="text-3xl font-bold text-center my-16  uppercase">
                Know about our achievements
              </p>

              <img
                src="https://i.ibb.co/541fqvR/Whats-App-Image-2024-06-17-at-13-22-03-a39ac4ca.jpg"
                alt="not found"
                className="flex m-auto"
              />
            </div>
          </div>
        )}

        <br />
        <br />
        <br />
        <br />
        <br />
      </div>

      <Footer />
    </>
  );
};

export default HighLight;
