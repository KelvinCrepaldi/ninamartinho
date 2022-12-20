import { MenuContainer } from "./Menu.styles";
import logo from "../../assets/LOGO.png";

const Menu = () => {
  return (
    <MenuContainer>
      <nav>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </MenuContainer>
  );
};

export default Menu;
