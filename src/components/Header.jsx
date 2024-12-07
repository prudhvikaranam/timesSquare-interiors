import logo from "../assets/images/logo.png";
import data from "../assets/data/data.json";
import { useEffect, useState } from "react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHamburgerMenu, setshowHamburgerMenu] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setshowHamburgerMenu(!isMenuOpen);
  };


  useEffect(() => {
    const navBar =  document.getElementById("home-header-container");
  window.onscroll = function () {
    if (navBar) {
      if (window.scrollY > 50) {
        navBar.classList.add("dark");
      } else {
        navBar.classList.remove("dark");
      }
    }
  };
  },[])



  return (
    <>
      <div className="home-header-container" id="home-header-container">
        <div className="header-container" id="header-container">
          <div className="header-logo" id="header-logo">
            <img src={logo} alt="times-square-logo"/>
          </div>

          <div className="header-menu-items" id="header-menu-items">
            {data?.header.navlist.map((items, i) => {
              return <span key={i}>{items}</span>;
            })}
          </div>

          <div className="header-menu-hamburger">
            <div
              className={`container ${isMenuOpen && "mobileView"}`}
              onClick={toggleMenu}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>

        <div
          className={`header-hamburger-container ${
            showHamburgerMenu ? "slideIn" : "slideOut"
          }`}
        >
          <div
            className={`header-menu-hamburger-items`}
            id="header-menu-hamburger-items"
          >
            {data?.header.navlist.map((items, i) => {
              return <span key={i}>{items}</span>;
            })}
          </div>
        </div>
      </div>
      <div className="home-body-container">
        <h1>Homes Designed For Tomorrow</h1>
        <br />
        <button className="home-button">View Our Designs</button>
      </div>
    </>
  );
};
