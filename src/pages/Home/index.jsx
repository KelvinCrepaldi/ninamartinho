import Menu from "../../components/Menu";
import logo from "../../assets/LOGO.png";
import { HomeContainer, Imgcontainer } from "./Home.styles";
import Footer from "../../components/Footer";
import projects from "../../database/projects.json";

const Home = () => {
  return (
    <HomeContainer>
      <Menu></Menu>
      <section className="logo-container">
        <img className="logo-img" src={logo}></img>
      </section>
      <section id="projects" className="section-flex">
        <h1>Projects</h1>
        {projects.map((element) => (
          <Imgcontainer background={element.src}>a</Imgcontainer>
        ))}
      </section>
      <section id="about" className="section-flex">
        <h1>About</h1>
      </section>
      <section className="section-flex">
        <h1>Contact</h1>
      </section>
      <Footer></Footer>
    </HomeContainer>
  );
};

export default Home;
