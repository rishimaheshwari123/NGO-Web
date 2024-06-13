import React from "react";
import { causes } from "../data/data";

const Causes = () => {
  return (
    <div className="bg-gray-200 my-16  ">
      <br />
      <br />
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-2xl font-semibold lg:text-4xl lg:font-semibold text-center ">
          Latest Causes of{" "}
          <span className="text-cyan-500">Team Pahal Bareli </span>
        </p>

        <div className="grid gap-9 px-3 lg:grid-cols-3 mt-16">
          {causes.map((currElem) => (
            <div
              className="card p-2 bg-gray-100 hover:bg-gray-300 flex flex-col items-center gap-3"
              key={currElem.id}
            >
              <img src={currElem.img} alt="not found" className="rounded-lg" />
              <p className="text-xl font-semibold lg:text-2xl lg:font-semibold hover:text-cyan-500 text-center">
                {currElem.title}
              </p>
              <p className="text-xl font-semibold lg:text-2xl lg:font-semibold">
                {currElem.money}
              </p>
              <p className="text-sm text-center">{currElem.desc}</p>
              <button className="px-6 py-2 rounded-md bg-orange-400 text-white text-sm cursor-pointer">
                Help
              </button>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Causes;
