import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import icon from "./img/code-break-48-246266.png";
import linkedin from "./img/linkedin-icon.png";
import github from "./img/GitHub-Mark.png";
import pdf from "./img/pdf-outline.png";
import gmail from "./img/gmail-logo.jpg";
import cell from "./img/cell-phone2.png";

const Navbar = () => {
  return (
    <header className="container-fluid pb-3 mb-4">
      <nav className="navbar navbar-expand-lg navbar-light" id="nav-text">
        <Link to="/" className="navbar-brand" href="#">
          <img
            src={icon}
            width="28"
            height="30"
            className="d-inline-block align-top"
            alt="favicon"
          />
          Ethan Tatum
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-auto">
              <Link
                to="https://www.linkedin.com/in/ethan-tatum-19372725/"
                target="_blank"
                className="nav-link"
              >
                LinkedIn
                <img
                  src={linkedin}
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                  alt="linkedin logo"
                />
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link
                to="https://github.com/ethantatum"
                target="_blank"
                className="nav-link"
              >
                GitHub
                <img
                  src={github}
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                  alt="github logo"
                />
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link
                to="https://drive.google.com/file/d/1mmBOWP4udG14G3IdhyT9AbzpTFBnb05I/view?usp=sharing"
                target="_blank"
                className="nav-link"
              >
                Resume
                <img
                  src={pdf}
                  width="25"
                  height="24"
                  className="d-inline-block align-top"
                  alt="pdf logo"
                />
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link href="#" className="nav-link">
                ethantatum81@gmail.com
                <img
                  src={gmail}
                  width="25"
                  height="22"
                  className="d-inline-block align-top"
                  alt="gmail logo"
                />
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link to="/" className="nav-link">
                (480) 619-1521
                <img
                  src={cell}
                  width="24"
                  height="23"
                  className="d-inline-block align-top"
                  alt="cell phone logo"
                />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
