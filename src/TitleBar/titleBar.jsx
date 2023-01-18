import React from "react";
import mainLogo from "../images/mainLogo.png";

export const TitleBar = () => {
  return (
    <div
      className='text-xl w-full justify-center flex rocko py-2 md:w-1/2 m-auto border-black border-x border-t'
      role='heading'
      aria-level='1'>
      <div>Reddit</div>
      <div>
        <img src={mainLogo} alt='logo' className='max-w-[28px]' />
      </div>
      <div>Clone</div>
    </div>
  );
};
