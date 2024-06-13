import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../../../../api";

const CreateEmp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    role: "",
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
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("role", formData.role);

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
        `${BASE_URL}/employee/create`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.close();

      Swal.fire({
        title: `Employee is added successfully! `,
        text: `Have a nice day!`,
        icon: "success",
      });

      setFormData({
        name: "",
        phone: "",
        role: "",
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
        className="sm:grid grid-cols-1 md:grid-cols-2 md: gap-4  md:mt-40"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="title"
          >
            Employee Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="time"
          >
            Phone:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            id="desc"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="time"
          >
            Role:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="px-8 py-4 bg-black text-white rounded-md text-sm"
            type="submit"
          >
            Create Employee
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateEmp;
