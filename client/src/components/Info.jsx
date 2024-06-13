import React, { useEffect, useState } from "react";
import { info as initialInfo } from "../data/data";

const Info = () => {
  const [info, setInfo] = useState(
    initialInfo.map((item) => ({ ...item, count: 0 }))
  );

  useEffect(() => {
    const targetCounts = initialInfo.map((item) => parseInt(item.count));
    const interval = setInterval(() => {
      setInfo((prevInfo) =>
        prevInfo.map((item, index) => {
          if (item.count < targetCounts[index]) {
            return {
              ...item,
              count: item.count + Math.ceil(targetCounts[index] / 100),
            };
          } else {
            return {
              ...item,
              count: targetCounts[index],
            };
          }
        })
      );
    }, 1);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid lg:grid-cols-3 px-3 gap-5 mt-6">
      {info.map((curElem) => (
        <div
          className="cart bg-gray-300 rounded-lg text-center py-10"
          key={curElem.id}
        >
          <p className="text-4xl font-semibold">
            {curElem.count}
            {curElem.count === parseInt(curElem.count) ? "+" : ""}
          </p>
          <p className="text-2xl mt-3">{curElem.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;
