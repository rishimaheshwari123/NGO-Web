import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";
import {useSearchContext} from "../redux/SearchContext"
const Footer = () => {
  const { token } = useSelector((state) => state.auth);
  const { searchQuery, updateSearchQuery } = useSearchContext();

  const footerContent = [
    {
      title: "Team",
      items: [
        { name: "Team Pahal Bareli", link: "" },
        { name: token ? "Admin Login" : "Admin Login", link: token ? "/admin/dashboard" : "/login" },
      ],
    },
    {
      title: "Helps",
      items: [
        { name: "Free Food", link: "" },
        { name: "Provide Free Room", link: "" },
        { name: "Provide animal health care", link: "" },
        { name: "Vridh Ashram", link: "" },
      ],
    },
    {
      title: "Contact Us",
      items: [
        { name: "सूचना पर तत्काल सेवा 24x7 ,365 days", link: "#" },
        { name: "हेल्पलाइन नंबर 9424502080 ,9174502080", link: "#" },
      ],
    },
  ];

  const filteredContent = footerContent.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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
            {filteredContent.map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold uppercase text-black">
                  {section.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {section.items
                    .filter(item =>
                      item.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((item, idx) => (
                      <li className="mb-4" key={idx}>
                        <Link to={item.link} className="hover:underline">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
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
            <Link to="" className="text-gray-500 hover:text-yellow-600">
              <FaFacebook size={22} />
            </Link>
            <Link to="" className="text-gray-500 hover:text-yellow-600">
              <RiWhatsappFill size={22} />
            </Link>
            <Link to="" className="text-gray-500 hover:text-yellow-600">
              <FaYoutube size={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
