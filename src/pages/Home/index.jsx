import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "components/About";
import Contact from "components/Contact";
import Portfolio from "components/Portfolio";
import Social from "components/Social";
import curriculum from "../../assets/NinaMartinhoCurriculum.pdf";

import { HomeContainer, DownloadCVLink, HomeNameTitle } from "./Home.styles";
const Home = () => {
  return (
    <>
      <Header></Header>
      <HomeContainer>
        <div className="logo-container">
          <HomeNameTitle>
            <h1>Nina Martinho</h1>
          </HomeNameTitle>
          <p className="subtitle-logo">Game, Concept and Illustrator Artist</p>
          <Social />
          <div>
            <DownloadCVLink href={curriculum} download>
              Download CV
            </DownloadCVLink>
          </div>
        </div>
        <Portfolio />
        <About />
        <Contact />
      </HomeContainer>
      <Footer></Footer>
    </>
  );
};

export default Home;
