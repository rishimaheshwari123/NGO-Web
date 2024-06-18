// src/Popup.js
import React from "react";

const Popup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">
          सूचना पर तत्काल सेवा 24x7 ,365 days
        </h2>
        <p className="text-xl mt-5 mb-5">
          हेल्पलाइन नंबर 9424502080 ,9174502080
        </p>
        {/* <p className="mb-4">We're glad to have you here. Enjoy your visit!</p> */}
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
