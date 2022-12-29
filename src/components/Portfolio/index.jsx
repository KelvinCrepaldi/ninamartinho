import { useState } from "react";

import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

import SectionContainer from "components/SectionContainer";
import { PortfolioSelection, PortfolioButton } from "./portfolio.styles";
import projects from "../../database/projects.json";

const Portfolio = () => {
  const [showSelection, setShowSelectio] = useState(false);

  const handleSelection = () => setShowSelectio(!showSelection);

  return (
    <SectionContainer
      icon={<FontAwesomeIcon icon={faPaintBrush} />}
      title="Portfolio"
    >
      <Element name="portfolio" />

      <PortfolioSelection>
        {!showSelection ? (
          <div className="portfolio-type">
            <PortfolioButton onClick={handleSelection}>2D</PortfolioButton>
            <PortfolioButton onClick={handleSelection}>3D</PortfolioButton>
          </div>
        ) : (
          <div>
            <button onClick={handleSelection}> {"<<"} back </button>
            <div>
              {projects.map((project) => {
                return <span>{project.title}</span>;
              })}
            </div>
          </div>
        )}
      </PortfolioSelection>
    </SectionContainer>
  );
};

export default Portfolio;
