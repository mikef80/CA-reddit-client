import React from "react";
import mainLogo from "../images/mainLogo.png";

export const TitleBar = () => {
  return (
    <div
      className='text-md w-full justify-center flex rocko pb-4'
      role='heading'
      aria-level='1'>
      <div>Reddit</div>
      <div>
        <img src={mainLogo} alt='logo' className='max-w-[25px]' />
      </div>
      <div>Clone</div>
    </div>
  );
};
