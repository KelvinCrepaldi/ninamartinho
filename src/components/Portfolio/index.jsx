import { useState } from "react";

import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

import {
  PortfolioSelection,
  SelectionLayers,
  GalleryLayer,
  PortfolioHeader,
  BackButton,
} from "./portfolio.styles";
import SectionContainer from "components/SectionContainer";
import projects from "../../database/projects.json";

const Portfolio = () => {
  const [optionsLayer, setOptionsLayer] = useState("firstLayer");
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");

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

  const renderMapProjects = () =>
    projects.map((project, index) => {
      return <p key={index}> {project.title} </p>;
    });

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
            <BackButton onClick={handleeBacktoFirst}>back</BackButton>
            <h2>{firstOption}</h2>
          </PortfolioHeader>

          <div className="buttonsContainer">
            <button onClick={() => handleSecondLayer("Concepts")}>
              Concepts
            </button>
            <button onClick={() => handleSecondLayer("Ilustration")}>
              Ilustrations
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
              <BackButton onClick={handleeBacktoFirst}>back</BackButton>
            ) : (
              <BackButton onClick={handleeBacktoSecond}>back</BackButton>
            )}
            <h2>{`${firstOption} ${secondOption}`}</h2>
          </PortfolioHeader>
          <div className="GalleryMap">{renderMapProjects()}</div>
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
