import React from "react";
import Link from "next/link";
import router from "next/router";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light" id="menu-bar">
    <div className="logo">
      <img src="static/images/logo.png" alt="" />
    </div>
    <div className="menu-options">
      <a href="index">Home</a>
      <a href="index#catalogue">Products</a>
      <a href="index#contact">Contact</a>
      <button className="btn">My cart</button>
      <button className="btn" onClick={() => router.push("/login")}>
        Login
      </button>
    </div>
  </nav>
);

export default Nav;
