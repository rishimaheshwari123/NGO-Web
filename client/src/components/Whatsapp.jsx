import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <div className="whatsapp">
      <a
        href="https://wa.me/919424502080"
        target="_blank"
        className="flex items-center gap-2"
      >
        <FaWhatsapp size={25} />
      </a>
    </div>
  );
}

export default Whatsapp;
