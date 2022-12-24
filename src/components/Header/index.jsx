import {
  HeaderContainer,
  LogoContainer,
  NavLink,
  NavMenu,
  OptionsDisplay,
} from "./header.styles";
import { useState } from "react";
import HeaderImage from "../../assets/logo.png";
const Header = () => {
  const [optionsActivate, setOptionsActivate] = useState(false);

  const handdleActivateMenu = (value) => setOptionsActivate(value);
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={HeaderImage} alt="header logo" />
      </LogoContainer>
      <NavMenu>
        <ul>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink
              onMouseEnter={() => handdleActivateMenu(true)}
              onMouseLeave={() => handdleActivateMenu(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink>Contact</NavLink>
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
