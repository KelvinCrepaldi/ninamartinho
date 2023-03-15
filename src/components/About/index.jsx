import SectionContainer from "components/SectionContainer";
import SectionBox from "components/SectionBox";
import { Element } from "react-scroll";
import { AboutList, AboutText } from "./about.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <SectionContainer
      icon={<FontAwesomeIcon icon={faAddressCard} />}
      title="About"
    >
      <Element name="about" />
      <AboutText>
        My name is Nina Martinho and I am a 2D and 3D artist who loves creating
        imersive stories and fascinating characters. I'm from Brazil and I've
        studied and created video games in the Hertfordshire University, at EBAC
        international campus.
      </AboutText>
      <SectionBox title="Education">
        <AboutList>
          <li>
            <FontAwesomeIcon icon={faStar} />
            {
              "BA HONS: 3D Games Art & Design - Hertfordshire University (Ebac Campus) 2020-2023"
            }
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
            {
              "Foundation Diploma - Hertfordshire University (Ebac Campus) 2019-2020"
            }
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
            {"School Degree - E.E. Culto à Ciência"}
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
            {"Veterinary Assistant Diploma - AE Comp 2017-2018"}
          </li>
        </AboutList>
      </SectionBox>
      <SectionBox title="Tools">
        <AboutList>
          <li>
            <FontAwesomeIcon icon={faStar} />
            Traditional Media (Pencils; Watercolor; Guache; Nankin & Markers)
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
            Adobe Photoshop
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
            Adobe Premiere
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
            Adobe Substance Painter
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
            Autodesk Maya
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
            Pixelogic ZBrush
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
            Unreal Engine 4 & 5
          </li>
        </AboutList>
      </SectionBox>
    </SectionContainer>
  );
};

export default About;
