import React, { useEffect, useState } from "react";
import axios from "axios";

const GetCultureByCategory = ({ categoryId }) => {
  const [culture, setCulture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCulturesByCategory = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/culture/category/${categoryId}`
      );
      if (response?.data?.success) {
        setCulture(response.data.cultures);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError("Could not fetch cultures data");
      console.error("Could not fetch cultures data from frontend", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (categoryId) {
      getCulturesByCategory();
    }
  }, [categoryId]);

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-4">{error}</p>;
  }

  if (!culture.length) {
    return <p className="text-center mt-4">No Details find!</p>;
  }

  return (
    <div className="container mx-auto p-4 my-12">
      {culture.map((cultureItem) => (
        <div
          key={cultureItem._id}
          className="culture-card flex flex-col items-center border rounded-lg shadow-lg overflow-hidden bg-white mb-8"
        >
          <div className="w-full flex flex-col lg:flex-row gap-4">
            <div className="image-container w-full lg:w-1/2 aspect-w-1 aspect-h-1">
              <img
                src={cultureItem.image}
                alt={cultureItem.title}
                className="culture-image object-cover"
              />
            </div>
            {cultureItem.image2 && (
              <div className="image-container w-full lg:w-1/2 aspect-w-1 aspect-h-1">
                <img
                  src={cultureItem.image2}
                  alt={cultureItem.title}
                  className="culture-image object-cover"
                />
              </div>
            )}
          </div>
          <div className="w-full p-6 mt-4">
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
              {cultureItem.title}
            </h2>
            <p className="text-lg text-gray-700 text-center lg:text-left">
              {cultureItem.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetCultureByCategory;
