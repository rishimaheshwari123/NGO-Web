import axios from "axios";
import React, { useState } from "react";

import Swal from "sweetalert2";
import { toast } from "react-toastify";

const CreateEventList = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({
    date: "",
    year: "",
    name: "",
    bhojan: "",
    phone: "",
    other: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.toUpperCase(),
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
          date: "",
          year: "",
          name: "",
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
          Year : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="year"
          id="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="name"
        >
          Name : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="name"
          id="name"
          value={formData.Name}
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
          Other
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="other"
          id="other"
          value={formData.other}
          onChange={handleChange}
          // required
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
