import React from "react";
import { Link } from "react-router-dom";
import { NavData } from "../../data/NavData";

export default function MobileMenu() {
  return (
    <div>
      {
        NavData.map((item,index)=>{
          return(
            <div key={index} className='mr-7 ml-5'>
              <ul className="flex items-center mt-5">
                <span className='text-orange-400 text-3xl mr-2 mb-3'>{item.icon}</span>
                <li className="flex flex-col mb-3"><Link className='text-base' to={item.path}>{item.title}</Link>
                <span className="text-xs">{item.subtitle}</span></li>
              </ul>
            </div>
          )
        })
      }
    </div>
  );
}
