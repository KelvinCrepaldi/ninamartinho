import {
  HeaderContainer,
  LogoContainer,
  NavLink,
  NavMenu,
  OptionsDisplay,
} from "./header.styles";
import { useState } from "react";
import HeaderImage from "../../assets/icon.png";

const Header = () => {
  const [optionsActivate, setOptionsActivate] = useState(false);

  const handleScrollToTop = () => window.scroll(0, 0);

  const handdleActivateMenu = (value) => {
    setOptionsActivate(value);
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={handleScrollToTop}>
        <img src={HeaderImage} alt="header logo" />
        <span className="logo-text">Nina Martinho</span>
      </LogoContainer>
      <NavMenu>
        <ul>
          <li>
            <NavLink
              activeClass="active"
              className="about"
              to="about"
              spy={true}
              smooth={true}
              duration={0}
              offset={-200}
            >
              About
            </NavLink>
          </li>
          <li
            onMouseOut={() => handdleActivateMenu(false)}
            onMouseOver={() => handdleActivateMenu(true)}
          >
            <NavLink
              activeClass="active"
              className="portfolio"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={0}
              offset={-200}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClass="active"
              className="contact"
              to="contact"
              spy={true}
              smooth={true}
              duration={0}
              offset={-200}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {optionsActivate ? (
          <OptionsDisplay
            onMouseEnter={() => handdleActivateMenu(true)}
            onMouseLeave={() => handdleActivateMenu(false)}
          >
            <div className="nav__portfolio-options">
              <ul>
                <span>2D</span>
                <li>
                  <NavLink
                    activeClass="active"
                    className="portfolio"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={0}
                    offset={-200}
                  >
                    Concepts
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClass="active"
                    className="portfolio"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={0}
                    offset={-200}
                  >
                    Ilustrations
                  </NavLink>
                </li>
                <span>3D</span>
                <li>
                  <NavLink
                    activeClass="active"
                    className="portfolio"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={0}
                    offset={-200}
                  >
                    Projects
                  </NavLink>
                </li>
              </ul>
            </div>
          </OptionsDisplay>
        ) : null}
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
