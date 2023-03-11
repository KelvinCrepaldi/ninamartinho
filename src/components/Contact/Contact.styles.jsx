import styled from "styled-components";

export const ContactContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px 0;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: var(--contact-color);
    border-left: 2px solid #ffffff47;
    border-right: 2px solid #ffffff47;
  }

  ul div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  ul li {
    display: flex;
    margin: 15px;
    font-size: var(--contact-font-size);
  }

  ul li:hover {
    transition: 0.4s;
    transform: scale(1.1);
  }

  ul li a {
    font-size: var(--contact-font-size);
    text-decoration: none;
    color: var(--contact-color);
  }

  svg {
    width: 50px;
    color: var(--contact-color);
    margin-right: 0;
  }

  .icon {
    font-size: var(--contact-icon-size);
    color: var(--contact-icon-color);
  }

  transition: 0.3s;

  .link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .link:hover {
    color: var(--contact-color-hover);

    svg {
      color: var(--contact-color-hover);
    }
  }

  @media only screen and (max-width: 900px) {
    ul {
      flex-direction: column;
    }
  }
`;
