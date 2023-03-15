import styled from "styled-components";

export const SocialContainer = styled.ul`
  display: flex;

  flex-wrap: nowrap;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    text-align: center;
    width: 70px;
    color: var(--social-color);

    font-size: var(--social-font-size);
    margin: 2px;
    padding: 5px;
    transition: 0.3s;
    filter: drop-shadow(var(--social-shadow));
  }

  a:hover {
    transform: scale(1.3);
    color: var(--social-hover-color);
    filter: drop-shadow(0px 0px 4px var(--social-hover-color));
  }
`;
