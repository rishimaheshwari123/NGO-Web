import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import GetCulture from "../components/GetCulture";
import CreateCulture from "../components/CreateCulture";
import GetAllCultureAdmin from "../components/Admin/pages/GetAllCultureAdmin";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Product = () => {
  const [tabActive, setTabActive] = useState("view");
  const { token } = useSelector((state) => state.auth);
  const query = useQuery();
  const id = query.get("id");

  const handleTabChange = (tab) => {
    setTabActive(tab);
  };

  return (
    <>
      <Navbar />

      <div className=" max-w-7xl mx-auto ">
        <div className="flex  justify-center gap-3 bg-gray-500 w-fit m-auto py-1 rounded-md px-3">
          <button
            onClick={() => handleTabChange("view")}
            className={` font-bold text-xl ${
              tabActive === "view"
                ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
            }`}
          >
            View More
          </button>
          {token && (
            <button
              onClick={() => handleTabChange("more")}
              className={` font-bold text-xl ${
                tabActive === "more"
                  ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                  : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
              }`}
            >
              Add Culture More Details
            </button>
          )}
          {token && (
            <button
              onClick={() => handleTabChange("all")}
              className={` font-bold text-xl ${
                tabActive === "all"
                  ? "bg-pink-600 rounded-md px-4 py-2 text-white transition ease-in duration-500 "
                  : " bg-gray-500 text-black px-4 py-2 rounded-md  transition ease-in duration-500"
              }`}
            >
              Get All
            </button>
          )}
        </div>

        <br />
        <br />

        {tabActive === "view" && <GetCulture categoryId={id} />}
        {tabActive === "more" && <CreateCulture id={id} />}
        {tabActive === "all" && <GetAllCultureAdmin />}
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

export default Product;
