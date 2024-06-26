import React from "react";
import { Buttons } from "../Buttons/Buttons";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navItems">
        <ul>
          <li>
            <a href="">
              Home <IoIosArrowDown />
            </a>
          </li>
          <li>
            <a href="">
              Solutions <IoIosArrowDown />
            </a>
          </li>
          <li>
            <a href="">
              Your Work <IoIosArrowDown />
            </a>
          </li>
          <li>
            <a href="">
              Contact <IoIosArrowDown />
            </a>
          </li>
        </ul>
      </div>
      <div className="btnCtn">
        <Buttons text="Request a Demo" />
      </div>
    </nav>
  );
}

export default Navbar;
