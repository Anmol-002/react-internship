import React from "react";
import images from "../data/images";
const Partners = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-20">
      <div>OUR PARTNERS</div>
      <div className="flex flex-row gap-4 pt-10 overflow-hidden">
        {images.map((image, index) => {
          return (
            <img
              src={require(`../images/hehe/${index + 1}.png`)}
              alt="temp"
              key={index}
              className="w-[105px] h-[54px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Partners;