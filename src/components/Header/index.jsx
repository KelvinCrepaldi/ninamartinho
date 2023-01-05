import {
  HeaderContainer,
  LogoContainer,
  NavLink,
  NavMenu,
  OptionsDisplay,
} from "./header.styles";
import { useState } from "react";
import HeaderImage from "../../assets/logo.png";

import { useEffect } from "react";

const Header = () => {
  const [optionsActivate, setOptionsActivate] = useState(false);

  const handleScrollToTop = () => window.scroll(0, 0);
  const handdleActivateMenu = (value) => setOptionsActivate(value);

  return (
    <HeaderContainer>
      <LogoContainer onClick={handleScrollToTop}>
        <img src={HeaderImage} alt="header logo" />
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
              offset={-130}
            >
              About
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
              offset={-130}
              onMouseLeave={() => handdleActivateMenu(false)}
              onMouseMove={() => handdleActivateMenu(true)}
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
              offset={-130}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {optionsActivate && (
          <OptionsDisplay
            onMouseEnter={() => handdleActivateMenu(true)}
            onMouseLeave={() => handdleActivateMenu(false)}
          >
            <div className="nav__portfolio-options">
              <ul>
                <span>2D</span>
                <li>Concepts</li>
                <li>Ilustrations</li>
                <span>3D</span>
                <li>Model</li>
                <li>Unreal</li>
              </ul>
            </div>
          </OptionsDisplay>
        )}
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
