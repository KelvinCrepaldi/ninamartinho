import { MenuContainer } from "./Menu.styles";
import star from "../../Assets/ESTROLINHA.png";
import logo from "../../Assets/LOGO.png";

const Menu = () => {
  return (
    <MenuContainer>
      <div>
        <img className="logo" src={logo}></img>
        <img className="star" src={star}></img>
      </div>
      <nav>
        <a>Projects</a>
        <a>About</a>
        <a>Contact</a>
      </nav>
    </MenuContainer>
  );
};

export default Menu;
