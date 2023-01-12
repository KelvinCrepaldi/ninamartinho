import { useState, useEffect } from "react";
import projects from "../../database/artstationData.json";

import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import cloud from "../../assets/cloud.svg";

import {
  PortfolioSelection,
  SelectionLayers,
  GalleryLayer,
  GalleryMap,
  PortfolioHeader,
  BackButton,
  CloudButton,
  AlbumButton,
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
            <h2>Projects</h2>
          </PortfolioHeader>

          <div className="buttonsContainer">
            <CloudButton
              imgBackground={cloud}
              onClick={() => handleFirstOption("2D")}
            >
              <span className="cloud-text">2D</span>
            </CloudButton>
            <CloudButton
              imgBackground={cloud}
              onClick={() => handleFirstOption("3D")}
            >
              <span className="cloud-text">3D</span>
            </CloudButton>
          </div>
        </SelectionLayers>
      );
    }
    if (optionsLayer === "secondLayer") {
      return (
        <SelectionLayers>
          <PortfolioHeader>
            <h2>{firstOption}</h2>
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
              <FontAwesomeIcon
                className="returnButton"
                icon={faChevronCircleLeft}
              />
              Return
            </BackButton>
          </PortfolioHeader>

          <div className="buttonsContainer">
            <AlbumButton onClick={() => handleSecondLayer("Concepts")}>
              <img src={projects2dConcepts[0].small_img_url} />
              <img src={projects2dConcepts[1].small_img_url} />
              <img src={projects2dConcepts[2].small_img_url} />
              <div>
                <span>Concepts</span>
              </div>
            </AlbumButton>
            <AlbumButton onClick={() => handleSecondLayer("Illustration")}>
              <img src={projects2dIllustrations[0].small_img_url} />
              <img src={projects2dIllustrations[1].small_img_url} />
              <img src={projects2dIllustrations[2].small_img_url} />
              <div>
                <span>Illustrations</span>
              </div>
            </AlbumButton>
          </div>
        </SelectionLayers>
      );
    }
    if (optionsLayer === "gallery") {
      return (
        <GalleryLayer>
          <PortfolioHeader>
            <h2>{`${firstOption} ${secondOption}`}</h2>
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
                <FontAwesomeIcon
                  className="returnButton"
                  icon={faChevronCircleLeft}
                />
                Return
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
                <FontAwesomeIcon
                  className="returnButton"
                  icon={faChevronCircleLeft}
                />
                Return
              </BackButton>
            )}
          </PortfolioHeader>
          <GalleryMap>{renderMapProjects()}</GalleryMap>
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
              <FontAwesomeIcon
                className="returnButton"
                icon={faChevronCircleLeft}
              />
              Return
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
              <FontAwesomeIcon
                className="returnButton"
                icon={faChevronCircleLeft}
              />
              Return
            </BackButton>
          )}
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
