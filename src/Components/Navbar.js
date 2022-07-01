import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/trend">Trend</Link>
      </div>
    </BrowserRouter>
  );
}
