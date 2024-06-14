import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../../../../api";
import Swal from "sweetalert2";

const CreateBloodDonation = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    bloodgroup: "",
    phone: "",
    age: "",
    address: "",
    dateOfVanue: "",
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
      const response = await axios.post(`${BASE_URL}/blood/create`, formData);

      Swal.close();

      if (response?.data?.success) {
        Swal.fire({
          title: `Online Payment is created successfully! `,
          text: `Have a nice day!`,
          icon: "success",
        });
        setFormData({
          name: "",
          fatherName: "",
          bloodgroup: "",
          phone: "",
          age: "",
          address: "",
          dateOfVanue: "",
        });
      }
    } catch (error) {
      console.error(error);
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
          Name : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="name"
          id="name"
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
          Father Name : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="fatherName"
          id="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="name"
        >
          Blood Group : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="bloodgroup"
          id="bloodgroup"
          value={formData.bloodgroup}
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
          Age : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="name"
        >
          Address : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="name"
        >
          Date Of Vanue : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="dateOfVanue"
          id="dateOfVanue"
          value={formData.dateOfVanue}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex items-center justify-between mt-5">
        <button
          className="px-8  py-4 bg-black text-white rounded-md text-sm"
          type="submit"
        >
          Create Donated Blood
        </button>
      </div>
    </form>
  );
};

export default CreateBloodDonation;
