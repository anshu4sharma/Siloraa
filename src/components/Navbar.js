import React, { useState } from "react";

import "./Navbar.css";
// import Roadmap from "./Roadmap";
// import Tokenomics from "./Tokenomics";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <NavLink to="/"  style={{textDecoration:"none"}}>
            {/* <img src={logo} alt="img" /> */}
          <h2 style={{color:"white", }} >  Siloraa</h2>
          </NavLink>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink  onClick={()=>alert("!  Page Not Found")} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink onClick={()=>alert("!  Page Not Found")}  to="/">Roadmap</NavLink>
            </li>
            <li>
              <NavLink  onClick={()=>alert("!  Page Not Found")} to="/">Tokenomics</NavLink>
            </li>
            <li>
              <NavLink  onClick={()=>alert("!  Page Not Found")} to="/">Upcoming Projects</NavLink>
            </li>
            <li>
              <NavLink onClick={()=>alert("!  Page Not Found")}  to="/">About us</NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
