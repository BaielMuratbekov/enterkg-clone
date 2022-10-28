import React from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Grid() {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4  container ">
      <div className="row-span-3 bg-red-700 rounded-md max-w-xs">
        <MobileMenu/>
      </div>
      <div className="col-span-2 w-full h-50 bg-yellow-500 rounded-md ">02</div>
      <div className="row-span-2 col-span-2 w-full h-60 bg-purple-700 rounded-md">03</div>
    </div>
  );
}
