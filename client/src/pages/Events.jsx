import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";


const Events = () => {
  const [events, setEvents] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL

  const getAllEvents = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/events/getAll`);

      if (response?.data?.success) {
        setEvents(response.data.events);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  const formatTime = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const period = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${period}`;
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-semibold text-3xl text-cyan-700 mb-12">
          Check our latest upcoming events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={event.image}
                alt={event.title}
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-4">{event.desc}</p>
                <div className="text-gray-700 text-sm">
                  <p className="mb-1">Time : {formatTime(event.time)}</p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Events;
