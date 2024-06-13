import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { BASE_URL } from "../../../../../api";
import { toast } from "react-toastify";

const GetEmp = () => {
  const [emp, setEmp] = useState([]);

  const getEmpData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/employee/getAll`);
      if (response?.data?.success) {
        setEmp(response.data.employees);
      }
    } catch (error) {
      console.log("Could not fetch emp from frontend");
    }
  };

  const handleDelete = async (id) => {
    const res = await axios.delete(`${BASE_URL}/employee/delete/${id}`);
    setEmp(emp.filter((currElem) => currElem._id !== id));
    if (res?.data?.success) {
      toast.success(res.data.message);
    }
  };
  useEffect(() => {
    getEmpData();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold mb-4">All Events</p>
        <p>Download Excel</p>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {emp.length > 0 ? (
              emp.map((event, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.role}</div>
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

export default GetEmp;
