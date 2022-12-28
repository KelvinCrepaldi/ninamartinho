import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

import SectionContainer from "components/SectionContainer";
import { PortfolioSelection } from "./portfolio.styles";

const Portfolio = () => {
  return (
    <SectionContainer
      icon={<FontAwesomeIcon icon={faPaintBrush} />}
      title="Portfolio"
    >
      <Element name="portfolio" />

      <PortfolioSelection>asadsad</PortfolioSelection>
    </SectionContainer>
  );
};

export default Portfolio;
