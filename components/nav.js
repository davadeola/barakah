import React from 'react'
import Link from 'next/link'



const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light" id="menu-bar">
    <div className="logo">
        <img src="static/images/logo.png" alt=""/>
    </div>
    <div className="menu-options">
        <a href="#product">Products</a>
        <a href="#">Contact</a>
    </div>
  </nav>
)

export default Nav
