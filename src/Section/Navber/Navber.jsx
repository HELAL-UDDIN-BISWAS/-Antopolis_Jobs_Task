
import Tastenow from "./../../../public/Taste now.png"
import Tastenow1 from "./../../../public/Taste now1.png"

import { useState } from "react";
import "./../../Section/Navber/Navber.css"
import { FiMenu } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";

const NavberPage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div>
<nav className="navbar">
      <div className="navbar-container">
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <FiMenu />
        </button>
        <div className="navbar-brand">
          <img src={Tastenow} alt="" />
        </div>
        
        <div className="item">
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <img className="brandImage" src={Tastenow1} alt="" />
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact us</a></li>
            <button className="button">sign up</button>
          </ul>
            </div>
           
            <MdOutlineShoppingCart className="h1"/>
        </div>
        
      </div>
    </nav>

        </div>
    );
};

export default NavberPage;