import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const GetCasePayment = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [payment, setPayment] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to fetch case payment data
  const getCasePaymentData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/casePayment/getAll`);
      if (response?.data?.success) {
        setPayment(response.data.payments);
      }
    } catch (error) {
      console.log("Could not fetch case payments from frontend", error);
    }
  };

  // Function to handle case payment deletion
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/casePayment/delete/${id}`);
      if (res?.data?.success) {
        setPayment(payment.filter((currElem) => currElem._id !== id));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Error deleting case payment:", error);
      toast.error("Failed to delete case payment");
    }
  };

  // Function to download Excel file
  const downloadExcel = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/casePayment/download`);
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
      console.error("Error downloading Excel file:", err);
      toast.error("Failed to download Excel file");
    }
  };

  // Effect hook to fetch data on component mount
  useEffect(() => {
    getCasePaymentData();
  }, []);

  // Function to handle search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to filter case payments based on search term
  const filterCasePayments = (payments, searchTerm) => {
    return payments.filter((payment) =>
      Object.values(payment).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  // Filter case payments based on search term
  const filteredPayments = filterCasePayments(payment, searchTerm);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold mb-4">All Case Payments</p>
        <div className="flex justify-between items-center gap-5">
          <div className="">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
          </div>
          <a
            href={`${BASE_URL}/casePayment/download`}
            onClick={downloadExcel}
            className="lg:text-xl text-sm font-bold bg-gray-300 text-black rounded-md text-center px-2 py-1 hover:text-yellow-500 hover:bg-black hover:transition-all hover:duration-500 transition-all duration-500"
          >
            Download Excel
          </a>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Receipt Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reason
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPayments.length > 0 ? (
              filteredPayments.map((currElem, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {currElem.reciptNumber}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{currElem.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{currElem.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {currElem.amount}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {currElem.reason}
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
                <td className="px-6 py-4 whitespace-nowrap" colSpan="6">
                  <p className="text-sm text-gray-500">
                    No case payments found
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

export default GetCasePayment;
