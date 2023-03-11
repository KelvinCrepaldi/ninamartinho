import {
  HeaderContainer,
  NavLink,
  NavMenu,
  OptionsDisplay,
} from "./header.styles";
import { useState } from "react";

const Header = () => {
  const [optionsActivate, setOptionsActivate] = useState(false);

  //const handleScrollToTop = () => window.scroll(0, 0);

  const handdleActivateMenu = (value) => {
    setOptionsActivate(value);
  };
  return (
    <HeaderContainer>
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
                    className="Illustrations"
                    to="Illustrations"
                    spy={true}
                    smooth={true}
                    duration={0}
                    offset={-50}
                  >
                    Ilustrations
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClass="active"
                    className="Concepts"
                    to="Concepts"
                    spy={true}
                    smooth={true}
                    duration={0}
                    offset={-50}
                  >
                    Concepts
                  </NavLink>
                </li>
                <span>3D</span>
                <li>
                  <NavLink
                    activeClass="active"
                    className="3D"
                    to="3D"
                    spy={true}
                    smooth={true}
                    duration={0}
                    offset={-50}
                  >
                    Projects
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
                    className="muscadine"
                    to="muscadine"
                    spy={true}
                    smooth={true}
                    duration={0}
                    offset={-200}
                  >
                    Muscadine Game
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
