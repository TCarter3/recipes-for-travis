import React from "react"
import "../styles/NavBar.css";
import { Link, } from "react-router-dom";

const NavBar = () => {
  return (

<div className="nav-ul-div">
  <ul className="nav-ul">
    <li><Link to="/about"> <p className="nav_p">ABOUT</p></Link>  </li>
    <li><Link to="/portfolio"> <p className="nav_p">PORTFOLIO</p></Link>  </li>
    <li><Link to="/experience"> <p className="nav_p">EXPERIENCE</p></Link>  </li>
    <li><Link to="/contact"> <p className="nav_p">CONTACT</p></Link>  </li>
  </ul>
</div>
  );
};

export default NavBar;


