import axios from "axios";
import React, { useState } from "react";

import Swal from "sweetalert2";
import { toast } from "react-toastify";

const CreateMonthlyMember = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    amount: "",
    jan: "",
    feb: "",
    march: "",
    april: "",
    may: "",
    june: "",
    july: "",
    aug: "",
    sep: "",
    oct: "",
    nov: "",
    dec: "",
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

    console.log(formData);
    try {
      Swal.fire({
        title: "Loading",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
      });
      const response = await axios.post(`${BASE_URL}/member/create`, formData);

      Swal.close();

      if (response?.data?.success) {
        Swal.fire({
          title: `Monthly Member created successfully! `,
          text: `Have a nice day!`,
          icon: "success",
        });
        setFormData({
          name: "",
          phone: "",
          address: "",
          amount: "",
          jan: "",
          feb: "",
          march: "",
          april: "",
          may: "",
          june: "",
          july: "",
          aug: "",
          sep: "",
          oct: "",
          nov: "",
          dec: "",
        });
      }
    } catch (error) {
      toast.error("Opps something went wrong!");
      console.log(error);
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
          htmlFor="phone"
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
          htmlFor="address"
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
          htmlFor="amount"
        >
          Amount : <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="amount"
          id="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="jan"
        >
          January : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="jan"
          id="jan"
          value={formData.jan}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="feb"
        >
          February : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="feb"
          id="feb"
          value={formData.feb}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="march"
        >
          March : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="march"
          id="march"
          value={formData.march}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="april"
        >
          April : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="april"
          id="april"
          value={formData.april}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="may"
        >
          May : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="may"
          id="may"
          value={formData.may}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="june"
        >
          June : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="june"
          id="june"
          value={formData.june}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="july"
        >
          July : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="july"
          id="july"
          value={formData.july}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="aug"
        >
          August : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="aug"
          id="aug"
          value={formData.aug}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="sep"
        >
          September : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="sep"
          id="sep"
          value={formData.sep}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="oct"
        >
          October : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="oct"
          id="oct"
          value={formData.oct}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="nov"
        >
          November : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="nov"
          id="nov"
          value={formData.nov}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-xl font-bold mb-2"
          htmlFor="dec"
        >
          December : <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl"
          name="dec"
          id="dec"
          value={formData.dec}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex items-center justify-between mt-5">
        <button
          className="px-8  py-4 bg-black text-white rounded-md text-sm"
          type="submit"
        >
          Create Monthly Member{" "}
        </button>
      </div>
    </form>
  );
};

export default CreateMonthlyMember;
