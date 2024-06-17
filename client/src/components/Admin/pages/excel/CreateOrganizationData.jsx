import React, { useState } from "react";
import CreateEmp from "./create/CreateEmp";
import CreateOnlinePayment from "./create/CreateOnlinePayment";
import CreateCasePayment from "./create/CreateCasePayment";
import CreateBloodDonation from "./create/CreateBloodDonation";
import CreateEventList from "./create/CreateEventList";

const CreateOrganizationData = () => {
  const [active, setActive] = useState("member");

  const handleTabName = (tabName) => {
    setActive(tabName);
  };
  return (
    <>
      <p className="text-center text-2xl font-bold border-b-2 pb-1 mb-10 uppercase">
        Storing all the information{" "}
      </p>
      <div className="bg-black  overflow-x-scroll md:overflow-x-hidden ">
        <div className="flex gap-5 pl-2">
          <button
            className={`${
              active === "member"
                ? "bg-sky-900 text-yellow-400 px-1 py-2 font-bold text-xl"
                : "text-white text-xl"
            }`}
            onClick={() => handleTabName("member")}
          >
            MEMBER LIST
          </button>
          <button
            className={`${
              active === "online"
                ? "bg-sky-900 text-yellow-400 px-1 py-2 font-bold text-xl"
                : "text-white text-xl"
            }`}
            onClick={() => handleTabName("online")}
          >
            ONLINE DONATION
          </button>
          <button
            className={`${
              active === "cash"
                ? "bg-sky-900 text-yellow-400 px-1 py-2 font-bold text-xl"
                : "text-white text-xl"
            }`}
            onClick={() => handleTabName("cash")}
          >
            CASH DONATION
          </button>
          <button
            className={`${
              active === "blood"
                ? "bg-sky-900 text-yellow-400 px-1 py-2 font-bold text-xl"
                : "text-white text-xl"
            }`}
            onClick={() => handleTabName("blood")}
          >
            BLOOD DONATION LIST
          </button>
          <button
            className={`${
              active === "event"
                ? "bg-sky-900 text-yellow-400 px-1 py-2 font-bold text-xl"
                : "text-white text-xl"
            }`}
            onClick={() => handleTabName("event")}
          >
            BIRTHDAY
          </button>
        </div>
      </div>

      {active === "member" && <CreateEmp />}
      {active === "online" && <CreateOnlinePayment />}
      {active === "cash" && <CreateCasePayment />}
      {active === "blood" && <CreateBloodDonation />}
      {active === "event" && <CreateEventList />}
    </>
  );
};

export default CreateOrganizationData;
