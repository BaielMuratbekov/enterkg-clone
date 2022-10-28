import React from "react";
import { Link } from "react-router-dom";
import NavItem from "../NavItem/NavItem";

export default function NavSecond() {
  return (
    <div className="shadow-md mb-5">
      <div className="flex justify-between items-center  h-16 container">
        <div className="logo">
          <h1 className="text-orange-500 text-4xl font-black">
            <Link to="/">ENTER</Link>
          </h1>
        </div>
        <div>
          <input
            className="bg-slate-200 pl-3 pr-80 rounded-lg w-full h-9 border-none "
            name="q"
            value=""
            type="search"
            placeholder="Поиск по сайту"
            autocomplete="off"
          />
        </div>
        <nav>
          <ul className="list-none m-0 p-0 py-10">
            <NavItem url="/">Сравнить</NavItem>
            <NavItem url="/">Избранное</NavItem>
            <NavItem url="/">Корзина</NavItem>
            <NavItem url="/">Войти</NavItem>
          </ul>
        </nav>
      </div>
    </div>
  );
}
