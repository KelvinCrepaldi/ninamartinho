import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "components/About";
import Contact from "components/Contact";
import Portfolio from "components/Portfolio";
import Social from "components/Social";
import logo from "../../assets/logo.webp";
import start from "../../assets/star.png";
import icon from "../../assets/icon.png";
import { Star, StarPosition } from "./Home.styles";
import { useState, useEffect } from "react";

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

          <p className="subtitle-logo">Game, Concept and Illustrator Artist</p>
          <Social />
          <StarPosition posX="80%" posY="80%" size="100px">
            <Star src={start} delayTime="1s" />
          </StarPosition>
          <StarPosition posX="10%" posY="10%" size="100px">
            <Star src={start} delayTime="-0.3s" />
          </StarPosition>
          <StarPosition posX="13%" posY="13%" size="50px">
            <Star src={start} delayTime="-1s" />
          </StarPosition>
          <StarPosition posX="80%" posY="0" size="100px">
            <Star src={start} delayTime="-0.3s" />
          </StarPosition>
          <StarPosition posX="0" posY="80%" size="100px">
            <Star src={start} delayTime="-0.6s" />
          </StarPosition>
          <StarPosition posX="-4%" posY="-10%" size="100px">
            <Star src={start} delayTime="-0.8s" />
          </StarPosition>
          <StarPosition posX="95%" posY="0%" size="50px">
            <Star src={start} delayTime="-0.8s" />
          </StarPosition>
          <StarPosition posX="100%" posY="30%" size="50px">
            <Star src={start} delayTime="-0.2s" />
          </StarPosition>
          <StarPosition posX="50%" posY="-20%" size="50px">
            <Star src={start} delayTime="-0.8s" />
          </StarPosition>
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
