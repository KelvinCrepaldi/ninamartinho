import styled from "styled-components";

export const ContactContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 40px 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--contact-color);
  }

  ul li {
    margin: 15px;
    font-size: var(--contact-font-size);
  }

  ul li a {
    font-size: var(--contact-font-size);
    text-decoration: none;
    color: var(--contact-color);
  }

  svg {
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
    flex-direction: column;

    justify-content: center;
  }

  .link:hover {
    color: var(--contact-color-hover);

    svg {
      color: var(--contact-color-hover);
    }
  }
`;
