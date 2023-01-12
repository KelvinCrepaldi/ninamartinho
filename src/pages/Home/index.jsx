import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "components/About";
import Contact from "components/Contact";
import Portfolio from "components/Portfolio";
import Social from "components/Social";
import logo from "../../assets/logo.webp";
import { useState } from "react";

import { HomeContainer } from "./Home.styles";
const Home = () => {
  const [optionsLayer, setOptionsLayer] = useState("firstLayer");
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  return (
    <>
      <Header
        setOptionsLayer={setOptionsLayer}
        setFirstOption={setFirstOption}
        setSecondOption={setSecondOption}
      ></Header>
      <HomeContainer>
        <div className="logo-container">
          <img
            className="logo-homepage"
            src={logo}
            alt="Nina Martinho logo homepage"
          />
          <p className="subtitle-logo">Game, Concept and Illustrator Artist</p>
          <Social />
        </div>
        <Portfolio
          optionsLayer={optionsLayer}
          setOptionsLayer={setOptionsLayer}
          firstOption={firstOption}
          setFirstOption={setFirstOption}
          secondOption={secondOption}
          setSecondOption={setSecondOption}
        />
        <About />
        <Contact />
      </HomeContainer>
      <Footer></Footer>
    </>
  );
};

export default Home;
