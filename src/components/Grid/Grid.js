import React from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
export default function Grid() {
  return (
    <div className=" container flex  ">
      <div className=" shadow-2xl rounded-md max-w-max mr-10">
        <MobileMenu />
      </div>
      <div>
        <header className=" shadow-2xl rounded-md w-full">
        <marquee>Тут вставляем текст бегущей строки</marquee>
        </header>
        <div className='mt-10 shadow-2xl rounded-md'>
          <div className="bg-orange-400 w-40 h-60"> </div>
        </div>
      </div>
    </div>
  );
}
