import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
 
import { FaBars, FaTimes } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { Button } from "./Button";
import { IconContext } from "react-icons/lib";
import "./Navbar.css";



function Navbar() {
  window.onload = function () {
    var pageTitle = document.title;
    var attentionMessage = "*Come Back!";
    var blinkEvent = null;

    document.addEventListener("visibilitychange", function (e) {
      var isPageActive = !document.hidden;

      if (!isPageActive) {
        blink();
      } else {
        document.title = pageTitle;
        clearInterval(blinkEvent);
      }
    });

    function blink() {
      blinkEvent = setInterval(function () {
        if (document.title === attentionMessage) {
          document.title = pageTitle;
        } else {
          document.title = attentionMessage;
        }
      }, 100);
    }
  };
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const downloadFile = () => {
    window.location.href = "./files/Resume.pdf"
  }

  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
   
  

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
      
          <div className="navbar-container container ">
            <HashLink to="/" className="navbar-logo link" onClick={closeMobileMenu}>
            <HiUserCircle className="navbar-icon" />
              Waqar Ahmad
            </HashLink>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul  className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <HashLink smooth to="/#Home" className="nav-links"  style={{ color: '#FFF',textDecorationLine:"none"}}  onClick={handleClick}>
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink 
                  smooth
                  to="/#Education"
                  className="nav-links" style={{ color: '#FFF',textDecorationLine:"none"}} 
                  onClick={handleClick}
                >
                  Education
                </HashLink>
              </li>
              <li className="  nav-item">
                <HashLink
                  smooth
                  to="/#Skills"
                  className="nav-links"  style={{ color: '#FFF',textDecorationLine:"none"}}
                  onClick={handleClick}
                >
                  Skills & Abilities
                </HashLink >
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  to="/#Experience"
                  className="nav-links"  style={{ color: '#FFF',textDecorationLine:"none"}}
                  onClick={handleClick}
                >
                  Experiences
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  smooth
                  to="/#Experience"
                  className="nav-links"  style={{ color: '#FFF',textDecorationLine:"none"}}
                  onClick={handleClick}
                >
                  Portfolio
                </HashLink>
              </li>
              <li className="nav-btn">
                {button ? (
                  <HashLink to="/" className="btn-link">
                    <Button buttonStyle="btn--outline" onClick={downloadFile}> Download </Button>
                  </HashLink>
                ) : (
                  <HashLink to="/"  className="btn-link" onClick={downloadFile}>
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Download
                    </Button>
                  </HashLink>
                )}
              </li>
              
            </ul>
           
          </div>
     
    
    </div>
       
      </IconContext.Provider>
     
    </>
  );
}

export default Navbar;
