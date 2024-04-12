import React from 'react'
import ok from "../images/ok.png"
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className="bg-[#21232B] flex lg:flex-row flex-col justify-between items-center align-middle py-[64px] px-[165px]">
      <div className="flex items-center flex-col pb-4">
        <img src={ok} alt="Logo" className="w-[130px] h-[125px]" />
        <p className="opacity-80 pb-2">Copyright © 2023 &nbsp Reslink.</p>
        <p className="opacity-80 pb-2">All rights reserved</p>
        <div className='flex gap-4 p-4'>
          <InstagramIcon/>
          <TwitterIcon />
          <LinkedInIcon/>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <p className="pb-8">Company</p>
        <p className="opacity-80 pb-2">About</p>
        <p className="opacity-80 pb-2">Features</p>
        <p className="opacity-80 pb-2">Contact</p>
      </div>
      <div className="flex items-center flex-col pb-4">
        <p className="pb-8">Support</p>
        <p className="opacity-80 pb-2">Terms of Service</p>
        <p className="opacity-80 pb-2">Privacy Policy</p>
      </div>
      <div className="flex items-center flex-col pt-4">
        <p>Stay up to date</p>
        <input
          type="text"
          className="mt-4 rounded px-2 py-1 bg-[#4D4F55]"
          placeholder="Enter your email address"
        ></input>
      </div>
    </div>
  );
}

export default Footer
