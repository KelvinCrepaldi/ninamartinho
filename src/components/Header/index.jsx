import {
  HeaderContainer,
  LogoContainer,
  NavLink,
  NavMenu,
  OptionsDisplay,
} from "./header.styles";
import { useState } from "react";
import icon5 from "../../assets/icon5.png";

const Header = ({ setOptionsLayer, setFirstOption, setSecondOption }) => {
  const [optionsActivate, setOptionsActivate] = useState(false);

  const handleScrollToTop = () => window.scroll(0, 0);

  const handdleActivateMenu = (value) => {
    setOptionsActivate(value);
  };

  const handdleSetConcepts = () => {
    setOptionsLayer("gallery");
    setFirstOption("2D");
    setSecondOption("Concepts");
  };
  const handdleSetIllustrations = () => {
    setOptionsLayer("gallery");
    setFirstOption("2D");
    setSecondOption("Illustration");
  };
  const handdleSet3D = () => {
    setOptionsLayer("gallery");
    setFirstOption("3D");
    setSecondOption("");
  };

  return (
    <HeaderContainer>
      <LogoContainer onClick={handleScrollToTop}>
        <img src={icon5} alt="header logo" />
        <span className="logo-text">Nina Martinho</span>
      </LogoContainer>
      <NavMenu>
        <ul>
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
              className="showreel"
              to="showreel"
              spy={true}
              smooth={true}
              duration={0}
              offset={-200}
            >
              Showreel
            </NavLink>
          </li>
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
                    offset={-50}
                    onClick={handdleSetConcepts}
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
                    offset={-50}
                    onClick={handdleSetIllustrations}
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
                    offset={-50}
                    onClick={handdleSet3D}
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
