import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";


const CreateOnlinePayment = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL

  const [formData, setFormData] = useState({
    reciptNumber: "",
    date: "",
    name: "",
    amount: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      Swal.fire({
        title: "Loading",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
      });
      const res = await axios.post(
        `${BASE_URL}/onlinePayment/create`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.close();

      Swal.fire({
        title: `Online Payment is created successfully! `,
        text: `Have a nice day!`,
        icon: "success",
      });

      setFormData({
        reciptNumber: "",
        date: "",
        name: "",
        amount: "",
        reason: "",
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="sm:grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mt-40"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="name"
          >
            Receipt Number: <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="reciptNumber"
            type="text"
            name="reciptNumber"
            value={formData.reciptNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="name"
          >
            Date: <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="name"
          >
            Name: <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="name"
          >
            Amount: <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="amount"
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="name"
          >
            Reason:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="reason"
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between mt-5">
          <button
            className="px-8  py-4 bg-black text-white rounded-md text-sm"
            type="submit"
          >
            Create Online Payment
          </button>
        </div>
      </form>
      <br />
      <br />
    </>
  );
};

export default CreateOnlinePayment;
