import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const GetExpense = () => {
  const [eventList, setEventList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const getAllEventListData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/expense/getAll`);
      if (response?.data?.success) {
        setEventList(response.data.expense);
      }
    } catch (error) {
      console.error("Error fetching event list:", error);
      toast.error("Failed to fetch event list");
    }
  };

  useEffect(() => {
    getAllEventListData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/expense/delete/${id}`);
      if (res?.data?.success) {
        setEventList(eventList.filter((currElem) => currElem._id !== id));
        toast.success("Expense deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting expense list item:", error);
      toast.error("Failed to delete expense list item");
    }
  };

  const downloadExcel = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/expense/download`, {
        responseType: "blob",
      });

      if (response.status !== 200) {
        throw new Error("Failed to download Excel file");
      }

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Expense.xlsx";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

      toast.success("Excel file downloaded successfully");
    } catch (err) {
      console.error("Error downloading Excel file:", err);
      toast.error("Failed to download Excel file");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEventList = eventList.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold mb-4">All Expense</p>
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
          <button
            onClick={downloadExcel}
            className="lg:text-xl text-sm font-bold bg-gray-300 text-black rounded-md text-center px-2 py-1 hover:text-yellow-500 hover:bg-black hover:transition-all hover:duration-500 transition-all duration-500"
          >
            Download Excel
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reason
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reference Name
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Mode
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
            {filteredEventList.length > 0 ? (
              filteredEventList.map((event, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.reason}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {event.refrence}
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.payment}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{event.other}</div>
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
                <td className="px-6 py-4 whitespace-nowrap" colSpan="8">
                  <p className="text-sm text-gray-500">No expenses found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetExpense;
