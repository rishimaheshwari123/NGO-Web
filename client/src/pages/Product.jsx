import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Product = () => {
  const [culture, setCulture] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = useQuery();
  const id = query.get("id");

  const getCultureData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/culture/get/${id}`
      );
      if (response?.data?.success) {
        setCulture(response.data.culture);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Could not fetch culture data");
      console.error("Could not fetch culture data from frontend", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getCultureData();
    }
  }, [id]);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-4 text-red-500">{error}</p>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 my-12">
        {culture ? (
          <div className="flex flex-col items-center border rounded-lg shadow-lg overflow-hidden bg-white">
            <div className="w-full flex flex-col lg:flex-row gap-4">
              <img
                src={culture.image}
                alt={culture.title}
                className="w-full lg:w-1/2 object-cover"
              />
              {culture.image2 && (
                <img
                  src={culture.image2}
                  alt={culture.title}
                  className="w-full lg:w-1/2 object-cover"
                />
              )}
            </div>
            <div className="w-full p-6 mt-4">
              <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
                {culture.title}
              </h2>
              <p className="text-lg text-gray-700 text-center lg:text-left">
                {culture.desc}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center mt-4">No culture found</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Product;
