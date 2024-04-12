import React from "react";
import Card from "./Card";
import data from "../data/data";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const Middle = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center pt-[50px] gap-4">
      <div className="text-green-500 text-[18px] pb-2">PRICING</div>
      <div className="text-white font-bold text-4xl ">Our pricing plans</div>
      <div className="text-white opacity-80 w-[350px] md:w-[450px] sm:w-[600px] text-center">
        Choose the pricing plan that best meets your needs and budget, and start
        accelerating your R&D today.
      </div>
      <div className="flex flex-row gap-4">
        <div className="text-white">Bill Monthly</div>
        <Switch
          color="success"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <div className="text-white">Bill Yearly</div>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-[#2C2E36] px-10 py-6 pr-0 rounded-[15px] border-2 border-[#5B5D63] border-solid 
      mb-10 lg:w-[937px] w-[342px] "
      >
        {data.map((d, id) => {
          return <Card {...d} key={id} checked={checked} />;
        })}
      </div>
      <div
        className="bg-[#2C2E36] px-20 py-6 rounded-[15px] border-2 border-[#5B5D63] border-solid 
      mb-10 lg:w-[937px] w-[342px] flex flex-col lg:flex-row md:flex-col items-center justify-between gap-4 "
      >
        <div className="sm:w-[#559px] w-[#310]">
          <h1 className="font-bold text-3xl">Custom Plan</h1>
          <div className="text-white opacity-80 font-xl">
            Contact us today to create a custom plan that meets your specific
            needs.
          </div>
        </div>
        <div>
          <button className="px-5 py-2 bg-green-500 rounded-[20px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
// 2C2E36
export default Middle;
