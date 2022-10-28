import React from "react";
import NavItem from "./MenuItem/MenuItem";

export default function MobileMenu() {
  return (
    <div>
      <nav>
        <ul className="list-none m-0 p-0 py-10">
          <NavItem url="/">Сравнить</NavItem>
          <NavItem url="/">Избранное</NavItem>
          <NavItem url="/">Корзина</NavItem>
          <NavItem url="/">Войти</NavItem>
        </ul>
      </nav>
    </div>
  );
}
