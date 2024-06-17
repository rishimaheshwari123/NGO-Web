import axios from "axios";
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";

const GetEventList = () => {
  const [eventList, setEventList] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getAllEventListdData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/eventList/getAll`);
      if (response?.data?.success) {
        setEventList(response?.data?.eventLists);
      }
    } catch (error) {
      console.log("error in getting event list from frontend");
    }
  };

  useEffect(() => {
    getAllEventListdData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/eventList/delete/${id}`);
      setEventList(eventList.filter((currElem) => currElem._id !== id));
      if (res?.data?.success) {
        toast.success("Event List deleted successfully!");
      }
    } catch (error) {
      toast.error(
        "Opps! something went wrong. From delting event list in frontend"
      );
    }
  };

  const downloadExcel = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/eventList/download`);

      console.log("Response:", response);

      if (response.status !== 200) {
        throw new Error("Failed to download Excel file");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "onlinepayment.xlsx";
      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      console.log("Excel file downloaded successfully");
    } catch (err) {
      console.error("Error:", err);
      toast.error("Failed to download Excel file");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold mb-4">All Event List </p>
        <a
          href={`${BASE_URL}/eventList/download`}
          className="lg:text-xl text-sm font-bold bg-gray-300 text-black rounded-md text-center px-2 py-1 hover:text-yellow-500 hover:bg-black hover:transition-all hover:duration-500  transition-all duration-500"
        >
          Download Excel
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Year
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bhojan Prasadi
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Other
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {eventList.length > 0 ? (
              eventList.map((currElem, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{currElem.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{currElem.year}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {currElem.bhojan}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {currElem.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {currElem.other}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(currElem._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrashAlt size={23} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 whitespace-nowrap" colSpan="17">
                  <p className="text-sm text-gray-500">
                    No Case payment available
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetEventList;
