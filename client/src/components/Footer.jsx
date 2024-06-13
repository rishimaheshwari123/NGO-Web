import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <footer className="bg-gray-100 text-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="https://flowbite.com/" className="flex items-center">
              <div className=" w-10 h-10 lg:w-16 lg:h-16 ">
                <img
                  src="https://i.ibb.co/W0v3fWm/Team-LOGO-page-0001.jpg"
                  alt="not found"
                  className="object-cover rounded-full"
                />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-black">
                Team
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">Team Pahal Bareli</li>
                {token ? (
                  <Link className="mb-4" to="/admin/dashboard">
                    Admin Login
                  </Link>
                ) : (
                  <Link className="mb-4" to="/login">
                    Admin Login
                  </Link>
                )}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-black">
                Helps
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">Free Food</li>
                <li className="mb-4">Provide Free Room</li>
                <li className="mb-4">Provide animal health care</li>
                <li className="mb-4">Vridh Ashram</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-black">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            Powered by{" "}
            <Link to="https://inextets.online" target="_blank">
              I Next Ets
            </Link>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-3">
            <Link
              to=""
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaFacebook size={22} />
            </Link>
            <Link
              to=""
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <RiWhatsappFill size={22} />
            </Link>
            <Link
              to=""
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaYoutube size={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
