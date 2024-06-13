import React, { useState } from "react";
import CreateEmp from "./create/CreateEmp";

const CreateOrganizationData = () => {
  const [active, setActive] = useState("employee");

  const handleTabName = (tabName) => {
    setActive(tabName);
  };
  return (
    <>
      <p className="text-center text-2xl font-bold border-b-2 pb-1 mb-10 uppercase">
        Storing all the information{" "}
      </p>
      <div className="bg-black  overflow-x-scroll md:overflow-x-hidden ">
        <div className="flex gap-5">
          <button
            className={`${
              active === "employee"
                ? "bg-sky-900 text-yellow-400 px-1 py-2 font-bold text-xl"
                : "text-white text-xl"
            }`}
            onClick={() => handleTabName("employee")}
          >
            Employee
          </button>
          <button
            className={`${
              active === "donation"
                ? "bg-sky-900 text-yellow-400 px-1 py-2 font-bold text-xl"
                : "text-white text-xl"
            }`}
            onClick={() => handleTabName("donation")}
          >
            Donation
          </button>
          <button
            className={`${
              active === "people"
                ? "bg-sky-900 text-yellow-400 px-1 py-2 font-bold text-xl"
                : "text-white text-xl"
            }`}
            onClick={() => handleTabName("people")}
          >
            People
          </button>
        </div>
      </div>

      {active === "employee" && <CreateEmp />}
      {active === "donation" && "donation"}
      {active === "people" && "people"}
    </>
  );
};

export default CreateOrganizationData;
