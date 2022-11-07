import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="nav">
          <ul className="list">
            <a href="#">
              <li>ABOUT US</li>
            </a>

            <a href="#">
              <li>FOR YOU</li>
            </a>

            <a href="#">
              <li>SERVICES</li>
            </a>

            <a href="#">
              <li>BLOG</li>
            </a>

            <a href="#">
              <li>VLOG</li>
            </a>

            <a href="#">
              <li>CONTACT</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
