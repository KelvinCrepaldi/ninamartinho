import SectionContainer from "components/SectionContainer";
import { Element } from "react-scroll";

const Portfolio = ({ icon, title }) => {
  return (
    <SectionContainer icon={icon} title={title}>
      <Element name="portfolio" />
    </SectionContainer>
  );
};

export default Portfolio;
