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
      <p>
        My name is Nina Martinho and I am a 2D and 3D artist who loves creating
        imersive stories and fascinating characters. I'm from Brazil and I've
        studied and created video games in the Hertfordshire University, at EBAC
        international campus.
      </p>
    </SectionContainer>
  );
};

export default About;
