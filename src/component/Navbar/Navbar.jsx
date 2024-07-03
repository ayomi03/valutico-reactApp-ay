import React, { useState } from "react";
import { Buttons } from "../Buttons/Buttons";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu,IoClose } from "react-icons/io5";

function Navbar() {
  const [show, setShow] = useState(false)

  function showMenu(){
    setShow(!show)
  }

  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="iconsCtn">
        {
          show ? (
            <IoClose className="icons" onClick={showMenu}/>
          ):(
            <IoMenu className="icons" onClick={showMenu}/>
          )
        }
      </div>

      <div className={show ? 'navItems mobile' : 'navItems'}>
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
        <div className="btnCtn">
          <Buttons text="Request a Demo" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
