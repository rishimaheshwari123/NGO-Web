import React, { useState } from "react";
import GetEmp from "./get/GetEmp";
import GetOnlinePayment from "./get/GetOnlinePayment";
import GetCasePayment from "./get/GetCasePayment";
import GetBloodDonation from "./get/GetBloodDonation";
import GetEventList from "./get/GetEventList";
import GetExpense from "./get/GetExpense";
import GetMonthlyMember from "./get/GetMonthlyMember";

const GetOrganization = () => {
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

          <button
            className={`${
              active === "expense"
                ? "bg-sky-900 text-yellow-400 px-1 py-2 font-bold text-xl"
                : "text-white text-xl"
            }`}
            onClick={() => handleTabName("expense")}
          >
            EXPENSE
          </button>
          <button
            className={`${
              active === "monthlyMember"
                ? "bg-sky-900 text-yellow-400 px-1 py-2 font-bold text-xl"
                : "text-white text-xl"
            }`}
            onClick={() => handleTabName("monthlyMember")}
          >
            MONTHLY MEMBER
          </button>
        </div>
      </div>

      {active === "member" && <GetEmp />}
      {active === "online" && <GetOnlinePayment />}
      {active === "cash" && <GetCasePayment />}
      {active === "blood" && <GetBloodDonation />}
      {active === "event" && <GetEventList />}
      {active === "expense" && <GetExpense />}
      {active === "monthlyMember" && <GetMonthlyMember />}
    </>
  );
};

export default GetOrganization;
