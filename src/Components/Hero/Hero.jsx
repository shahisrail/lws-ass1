/* eslint-disable no-unused-vars */
import React from "react";
import  '/src/index.css'
const Hero = () => {
  return (
    <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px] flex  flex-col-reverse md:flex-row justify-center gap-4  md:p-[180px] items-center">
      <div className="flex-1">
        <h2 className="text-2xl lg:text-[56px] font-bold leading-[1.1] text-center md:text-start mb-8 text-white">
          The Future of Learning starts with students at the center
        </h2>
        <button className="px-5  py-2.5 bg-[#038C61] rounded-[44px]  text-white">
          Learn More
        </button>
      </div>
      <div >
        <img className="animate-updown w-full" src="https://i.postimg.cc/RVM2RTDQ/hero-graphics.png" alt="Banner" />
      </div>
    </div>
  );
};

export default Hero;
