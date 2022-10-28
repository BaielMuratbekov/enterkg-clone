import React from "react";
import NavFirstItem from "../NavFirstItem/NavFirstItem";

export default function NavFirst() {
  return (
    <div className="bg-orange-600 h-9 text-white flex items-center text-sm">
      <div className="flex justify-between container">
        <div>
          <span>Москва</span>
        </div>
        <div>
          <ul >
            <NavFirstItem url="/">Магазины</NavFirstItem>
            <NavFirstItem url="/">Покупателям</NavFirstItem>
            <NavFirstItem url="/">Юридическим лицам</NavFirstItem>
            <NavFirstItem url="/">Клуб DNS</NavFirstItem>
          </ul>
        </div>
        <div>
          <ul>
            <NavFirstItem url="/">
              8-800-77-07-999 (с 03:00 до 22:00)
            </NavFirstItem>
            <NavFirstItem url="/">(с 03:00 до 22:00)</NavFirstItem>
          </ul>
        </div>
      </div>
    </div>
  );
}
