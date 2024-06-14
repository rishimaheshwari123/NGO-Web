import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../api";
import { toast } from "react-toastify";
import { FaTrashAlt } from "react-icons/fa";

const GetBloodDonation = () => {
  const [blood, setBlood] = useState([]);

  const getAllBloodData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blood/getAll`);
      if (response?.data?.success) {
        setBlood(response?.data?.bloods);
      }
    } catch (error) {
      console.log("error in getting blood donation from frontend");
    }
  };

  useEffect(() => {
    getAllBloodData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/blood/delete/${id}`);
      setBlood(blood.filter((currElem) => currElem._id !== id));
      if (res?.data?.success) {
        toast.success("Blood donation deleted successfully!");
      }
    } catch (error) {
      toast.error("Opps! something went wrong. From delting blood in frontend");
    }
  };

  const downloadExcel = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/blood/download`);

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
        <p className="text-2xl font-semibold mb-4">All Donated Blood </p>
        <a
          href={`${BASE_URL}/blood/download`}
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
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Father Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Blood Group
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date Of Vanue
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {blood.length > 0 ? (
              blood.map((currElem, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{currElem.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {currElem.fatherName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {currElem.bloodgroup}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {currElem.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{currElem.age}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {currElem.address}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {currElem.dateOfVanue}
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

export default GetBloodDonation;
