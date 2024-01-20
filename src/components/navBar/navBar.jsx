import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav style={{ display: "flex", gap: 10, fontSize: 25 }}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/users"}>Users</NavLink>
      </nav>
    </>
  );
}
