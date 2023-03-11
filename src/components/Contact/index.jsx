import SectionContainer from "components/SectionContainer";
import { ContactContent } from "./Contact.styles";
import { Element } from "react-scroll";
import Social from "components/Social";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faArtstation,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <SectionContainer
      icon={<FontAwesomeIcon icon={faAddressBook} />}
      title="Contact"
    >
      <Element name="contact" />
      <ContactContent>
        <ul>
          <div>
            <li>
              <FontAwesomeIcon className="icon" icon={faAt}></FontAwesomeIcon>
              ninamartinho@hotmail.com
            </li>
            <li>
              <FontAwesomeIcon
                className="icon"
                icon={faPhone}
              ></FontAwesomeIcon>
              {"+55 (011) 97202-4404"}
            </li>
            <li>
              <a
                className="link"
                href="https://www.linkedin.com/in/nina-martinho/"
                rel="noopener"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="icon"
                  icon={faLinkedin}
                ></FontAwesomeIcon>
                <span>Linkedin</span>
              </a>
            </li>
          </div>
          <div>
            <li>
              <a
                className="link"
                href="https://ninamartinho.artstation.com"
                rel="noopener"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="icon"
                  icon={faArtstation}
                ></FontAwesomeIcon>
                <span>Artstation</span>
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://twitter.com/Fofoxyy"
                rel="noopener"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="icon"
                  icon={faTwitter}
                ></FontAwesomeIcon>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://www.instagram.com/ninahellart/?hl=en"
                rel="noopener"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="icon"
                  icon={faInstagram}
                ></FontAwesomeIcon>
                <span>Instagram</span>
              </a>
            </li>
          </div>
        </ul>
      </ContactContent>
    </SectionContainer>
  );
};

export default Contact;
