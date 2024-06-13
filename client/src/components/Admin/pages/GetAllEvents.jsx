import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { BASE_URL } from "../../../api";
import { toast } from "react-toastify";
const GetAllEvents = () => {
  const [events, setEvents] = useState([]);

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

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/events/delete/${id}`);
      setEvents(events.filter((event) => event._id !== id));
      if (res?.data?.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Error in deleting event in front end");
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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">All Events</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.length > 0 ? (
              events.map((event, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={event.image}
                      alt=""
                      className="h-10 w-10 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.desc}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatTime(event.time)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {event.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt size={23} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap" colSpan="4">
                  <p className="text-sm text-gray-500">No events available</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetAllEvents;
