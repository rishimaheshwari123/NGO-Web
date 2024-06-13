import React from "react";
import { adminCardData, dashboardCard } from "../../../data/data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <p className="mt-5 mb-10 text-xl">
        Welcome {user?.name.charAt(0).toUpperCase() + user?.name.slice(1)} 👋 to
        our admin dashboard
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3 mt-5 ">
        {dashboardCard.map((currElem) => (
          <div className="hover:scale-95">
            <div className=" relative  -z-10" key={currElem.id}>
              <img
                src={currElem.img}
                alt="not found"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between p-16 text-white">
                <div className=" flex flex-col gap-5">
                  <p className="text-white text-xl">{currElem.title}</p>
                  <p className="text-white text-4xl font-bold">
                    {currElem.count}
                  </p>
                  <p className="text-white font-bold text-sm">
                    {currElem.desc}
                  </p>
                </div>
                <div className="text-5xl">{currElem.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-28">
        <p className="text-center text-3xl font-semibold mb-2 uppercase ">
          Our features
        </p>
        <p className="border-2 border-black"></p>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16  w-full">
          {adminCardData.map((currElem) => (
            <div
              key={currElem.id}
              className="card shadow-lg p-8 grid gap-2 rounded-lg bg-white hover:bg-gray-100 hover:scale-95"
            >
              <p className="text-3xl text-cyan-400">{currElem.icon}</p>
              <p className="text-2xl font-bold">{currElem.title}</p>
              <div className="flex gap-1 items-center">
                <Link className="text-cyan-400  text-sm " to={currElem.link}>
                  Click Here
                </Link>
                <p>{currElem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Dashboard;
