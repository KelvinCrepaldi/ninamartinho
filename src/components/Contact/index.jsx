import SectionContainer from "components/SectionContainer";
import { Element } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <SectionContainer
      icon={<FontAwesomeIcon icon={faAddressBook} />}
      title="Contact"
    >
      <Element name="contact" />
      Contact
    </SectionContainer>
  );
};

export default Contact;
