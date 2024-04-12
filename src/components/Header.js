import React from "react";
import ok from "../images/ok.png";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div>{windowWidth > 950 ? <LaptopHeader /> : <MobileHeader />}</div>;
};

const LaptopHeader = () => {
  return (
    <div className="flex items-center justify-between px-10">
      <div>
        <img src={ok} alt="Logo" className="w-[130px] h-[125px]" />
      </div>
      <div className="flex gap-20">
        <p>Home</p>
        <p>Features</p>
        <p>About</p>
        <p>Contact</p>
        <p>Pricing</p>
      </div>
      <div className="flex gap-10 items-center ">
        <p>Login</p>
        <button className="px-5 py-2 bg-green-500 rounded">Get Started</button>
      </div>
    </div>
  );
};

const MobileHeader = () => {
  return (
    <div className="flex items-center justify-between px-10">
      <div>
        <img src={ok} alt="Logo" className="w-[130px] h-[125px]" />
      </div>

      <div className="flex gap-10 items-center ">
        {/* <p>Login</p> */}
        <MenuIcon/>
      </div>
    </div>
  );
};

export default Header;
