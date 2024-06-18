import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import highlight1 from "../assets/h1.png";
import highlight2 from "../assets/h2.png";
const HighLight = () => {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
};

export default HighLight;
