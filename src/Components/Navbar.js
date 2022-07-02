import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">All</NavLink>
        <NavLink to="/trend">Trend</NavLink>
      </div>
    </BrowserRouter>
  );
}
