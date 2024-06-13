import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { BASE_URL } from "../api";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 12;

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

  useEffect(() => {
    getAllEvents();
  }, []);

  // Convert 24-hour time to 12-hour time
  const convertTo12HourFormat = (time) => {
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours, 10);
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${period}`;
  };

  // Calculate the events to display based on the current page
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Determine the total number of pages
  const totalPages = Math.ceil(events.length / eventsPerPage);

  return (
    <>
      <Navbar />
      <div className="pt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-semibold text-3xl text-cyan-700 mb-12">
          Check our latest upcoming events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentEvents.map((event) => (
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
                  <p className="mb-1">
                    <strong>Time:</strong> {convertTo12HourFormat(event.time)}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-cyan-700 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
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
