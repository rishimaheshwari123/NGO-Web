import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function HeaderWhatsapp() {
  return (
    <div className="bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full">
      <a
        rel="noreferrer"
        href="https://wa.me/919424502080"
        target="_blank"
        className="flex items-center gap-2"
      >
        <FaWhatsapp size={25} />
      </a>
    </div>
  );
}

export default HeaderWhatsapp;
