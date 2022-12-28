import SectionContainer from "components/SectionContainer";
import { Element } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <SectionContainer
      icon={<FontAwesomeIcon icon={faAddressCard} />}
      title="About"
    >
      <Element name="about" />
      About
    </SectionContainer>
  );
};

export default About;
