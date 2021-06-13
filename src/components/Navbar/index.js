import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavWrapper from "./styles";
import ACMnav from "../../images/ACM logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick((prevState) => !prevState);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").className = "navbar scroll";
    } else {
      document.querySelector(".navbar").className = "navbar";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <NavWrapper>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={ACMnav} style={{ width: "50%" }} />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutUs" className="nav-links" onClick={closeMobileMenu}>
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  );
};

export default Navbar;