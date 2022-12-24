import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "components/About";
import Contact from "components/Contact";
import Portfolio from "components/Portfolio";
import logo from "../../assets/logo.png";

import { HomeContainer } from "./Home.styles";
const Home = () => {
  return (
    <>
      <Header></Header>
      <HomeContainer>
        <div className="logo-container">
          <img
            className="logo-homepage"
            src={logo}
            alt="Nina Martinho logo homepage"
          />
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
