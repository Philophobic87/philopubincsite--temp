import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  //Smooth scroll to top

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo
              className="PhiloLogo"
              src="/images/PhiloPubLogoWhite.png"
              alt="Logo"
            ></Logo>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="wwa"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Who We Are
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="cat"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Catalouge
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="playlist"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Playlist
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="media"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Media
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign Up</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
