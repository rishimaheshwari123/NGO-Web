import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../../../../api";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const CreateEventList = () => {
  const [formData, setFormData] = useState({
    time: "",
    date: "",
    bhojan: "",
    phone: "",
    other: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: "Loading",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        html: '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>',
      });
      const response = await axios.post(
        `${BASE_URL}/eventList/create`,
        formData
      );

      Swal.close();

      if (response?.data?.success) {
        Swal.fire({
          title: `Event List is created successfully! `,
          text: `Have a nice day!`,
          icon: "success",
        });
        setFormData({
          time: "",
          date: "",
          bhojan: "",
          phone: "",
          other: "",
        });
      }
    } catch (error) {
      toast.error("Opps something went wrong!");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="sm:grid grid-cols-1 md:grid-cols-2 md:gap-4 md:mt-40"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="name"
        >
          Time : <span className="text-red-500">*</span>
        </label>
        <input
          type="time"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="time"
          id="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="name"
        >
          Date : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="date"
          id="date"
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
          Bhojan Prasadi : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="bhojan"
          id="bhojan"
          value={formData.bhojan}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="name"
        >
          Phone : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="name"
        >
          Other : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="other"
          id="other"
          value={formData.other}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex items-center justify-between mt-5">
        <button
          className="px-8  py-4 bg-black text-white rounded-md text-sm"
          type="submit"
        >
          Create Event List{" "}
        </button>
      </div>
    </form>
  );
};

export default CreateEventList;
