import { SocialContainer } from "./Social.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArtstation } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <>
      <SocialContainer>
        <li>
          <a
            href="https://www.linkedin.com/in/nina-martinho/"
            rel="noopener"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            href="https://ninamartinho.artstation.com"
            rel="noopener"
            target="_blank"
          >
            <FontAwesomeIcon icon={faArtstation}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Fofoxyy" rel="noopener" target="_blank">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/ninahellart/?hl=en"
            rel="noopener"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
        </li>
      </SocialContainer>
    </>
  );
};

export default Social;
