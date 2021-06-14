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
    if (window.scrollY > 20 && window.innerWidth > 960) {
      console.log(window.innerWidth);
      document.querySelector("nav").className = "navbar scroll";
    } else if (window.innerWidth > 960) {
      document.querySelector("nav").className = "navbar";
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
      <nav className={click ? "navbar1" : "navbar"}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={ACMnav} className="acm-logo" style={{ width: "50%" }} />
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
            <Link to="/events" className="nav-links" onClick={closeMobileMenu}>
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resources"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
              Team
            </Link>
          </li>
        </ul>
      </nav>
    </NavWrapper>
  );
};

export default Navbar;
