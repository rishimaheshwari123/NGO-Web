import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

function CreateGallery() {
  const [gallery, setGallery] = useState([]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [formData, setFormData] = useState({
    image: null,
  });

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    formDataToSend.append("image", formData.image);

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
        `${BASE_URL}/gallery/create`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.close();

      Swal.fire({
        title: `Your gallery is added successfully! `,
        text: `Have a nice day!`,
        icon: "success",
      });

      setFormData({
        image: null,
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getGallery = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/gallery/get`);

      if (response?.data?.success) {
        setGallery(response.data.gallerys);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/gallery/delete/${id}`);
      setGallery(gallery.filter((event) => event._id !== id));
      if (res?.data?.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Error in deleting event in front end");
    }
  };

  useEffect(() => {
    getGallery();
  }, []);
  return (
    <>
      <h1 className="text-blue-600 text-center text-3xl border border-b-2 border-blue-600 pb-2">
        Add Gallery
      </h1>
      <form
        onSubmit={handleSubmit}
        className="sm:grid grid-cols-1 md:grid-cols-2 md: gap-4  md:mt-40"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="image"
          >
            Image:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[50px] text-2xl border-none"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-8 py-4 bg-black text-white rounded-md text-sm"
            type="submit"
          >
            Create Galllery
          </button>
        </div>
      </form>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">All Events</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {gallery.length > 0 ? (
                gallery.map((event, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={event.image}
                        className="h-10 w-10 rounded-full"
                      />
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
    </>
  );
}

export default CreateGallery;
