import React from "react";

const Info = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-center gap-6 text-wrap px-5 mb-[50px]">
      <div className="w-[344px]">
        <p className="text-green-500 text-[18px]">Testimonials</p>
        <p className="font-semibold text-[40px]">
          Check what our clients are saying
        </p>
      </div>
      <div className="flex flex-col sm:w-[650px] p-5 ">
        <span className="text-green-500 text-[58px]">“</span>
        <p className="relative top-[-20px]">
          Since using this platform, our research has completely transformed. we
          would highly recommend this platform to any business looking to
          simplify their research process and drive more innovation.
        </p>
        <p>Adrian cal</p>
        <p className="opacity-80">CEO GetNextDesign</p>
      </div>
    </div>
  );
};

export default Info;
