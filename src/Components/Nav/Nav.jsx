/* eslint-disable no-unused-vars */
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between p-10">
      <div>
        <img className="w-[120px]" src="/src/assets/lws-logo-en.svg" alt="Lws" />
      </div>
      <div>

        <button className="px-5 py-2 bg-[#172227] rounded-[44px] text-white font-bold ">
        Get Admission
        </button>
      </div>
    </div>
  );
};

export default Nav;
