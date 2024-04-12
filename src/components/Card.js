import React from "react";
// hover:translate-y-[-20px] hover:bg-green-500 hover:py-10 hover:px-5
const Card = ({ price, t1, t2, t3, t4, t5, name, checked, changed }) => {
  return (
    <div className="flex flex-col hover:scale-120  hover:translate-y-[-50px] hover:bg-green-500 hover:px-5 hover:py-3 hover:rounded-[20px] hover:shadow-lg transition-all duration-600">
      <div className="flex flex-col gap-4 w-[200px] sm:w-[232px] h-[352px]">
        <div>
          <span className="font-bold text-3xl">
            ${checked ? changed : price}
          </span>
          /month
        </div>
        <div>
          <h1 className="text-2xl pb-3 font-semibold">{name}</h1>
          <ul className="flex flex-col text-white opacity-80">
            <li className="flex items-center pb-2 ">
              <span className="text-green-500 pr-2">✔</span> {t1}
            </li>
            <li className="flex items-center pb-2">
              <span className="text-green-500 pr-2">✔</span> {t2}
            </li>
            <li className="flex items-center pb-2">
              <span className="text-green-500 pr-2">✔</span> {t3}
            </li>
            <li className="flex items-center pb-2">
              <span className="text-green-500 pr-2">✔</span> {t4}
            </li>
            <li className="flex items-center pb-2">
              <span className="text-green-500 pr-2">✔</span> {t5}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button className="bg-[#36684F] rounded-[20px] text-white px-10 py-1">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

export default Card;
