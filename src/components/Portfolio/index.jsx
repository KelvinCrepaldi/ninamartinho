import { useState, useEffect } from "react";
import projects from "../../database/artstationData.json";

import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import {
  PortfolioSelection,
  SelectionLayers,
  GalleryLayer,
  GalleryMap,
  PortfolioHeader,
  BackButton,
} from "./portfolio.styles";
import SectionContainer from "components/SectionContainer";
import ProjectCardImage from "components/ProjectCardImage";
const Portfolio = () => {
  const [optionsLayer, setOptionsLayer] = useState("firstLayer");
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const projects2dConcepts = projects.filter(
    (project) => project.album === "Concept"
  );
  const projects2dIllustrations = projects.filter(
    (project) => project.album === "Illustrations"
  );
  const projects3D = projects.filter((project) => project.album === "3D");

  console.log(projects3D);
  const handleeBacktoFirst = () => setOptionsLayer("firstLayer");

  const handleeBacktoSecond = () => setOptionsLayer("secondLayer");

  const handleFirstOption = (option) => {
    setFirstOption(option);
    if (option === "3D") {
      setOptionsLayer("gallery");
    } else {
      setOptionsLayer("secondLayer");
    }
  };

  const handleSecondLayer = (option) => {
    setSecondOption(option);
    setOptionsLayer("gallery");
  };

  const renderMapProjects = () => {
    if (firstOption === "3D") {
      return projects3D.map((project) => (
        <ProjectCardImage project={project}></ProjectCardImage>
      ));
    }
    if (firstOption === "2D" && secondOption === "Concepts") {
      return projects2dConcepts.map((project) => (
        <ProjectCardImage project={project}></ProjectCardImage>
      ));
    }
    return projects2dIllustrations.map((project) => (
      <ProjectCardImage project={project}></ProjectCardImage>
    ));
  };

  const layers = () => {
    if (optionsLayer === "firstLayer") {
      return (
        <SelectionLayers>
          <PortfolioHeader>
            <h2>Projecs</h2>
          </PortfolioHeader>

          <div className="buttonsContainer">
            <button onClick={() => handleFirstOption("2D")}>2D</button>
            <button onClick={() => handleFirstOption("3D")}>3D</button>
          </div>
        </SelectionLayers>
      );
    }
    if (optionsLayer === "secondLayer") {
      return (
        <SelectionLayers>
          <PortfolioHeader>
            <BackButton
              activeClass="active"
              className="portfolio"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={0}
              offset={-200}
              onClick={handleeBacktoFirst}
            >
              back
            </BackButton>
            <h2>{firstOption}</h2>
          </PortfolioHeader>

          <div className="buttonsContainer">
            <button onClick={() => handleSecondLayer("Concepts")}>
              Concepts
            </button>
            <button onClick={() => handleSecondLayer("Illustration")}>
              Illustrations
            </button>
          </div>
        </SelectionLayers>
      );
    }
    if (optionsLayer === "gallery") {
      return (
        <GalleryLayer>
          <PortfolioHeader>
            {firstOption === "3D" ? (
              <BackButton
                activeClass="active"
                className="portfolio"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={0}
                offset={-200}
                onClick={handleeBacktoFirst}
              >
                back
              </BackButton>
            ) : (
              <BackButton
                activeClass="active"
                className="portfolio"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={0}
                offset={-200}
                onClick={handleeBacktoSecond}
              >
                back
              </BackButton>
            )}
            <h2>{`${firstOption} ${secondOption}`}</h2>
          </PortfolioHeader>
          <GalleryMap>{renderMapProjects()}</GalleryMap>
        </GalleryLayer>
      );
    }

    return null;
  };

  return (
    <SectionContainer
      icon={<FontAwesomeIcon icon={faPaintBrush} />}
      title="Portfolio"
    >
      <Element name="portfolio" />
      <PortfolioSelection>{layers()}</PortfolioSelection>
    </SectionContainer>
  );
};

export default Portfolio;
