import styled from "styled-components";

export const SocialContainer = styled.ul`
  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    text-align: center;
    width: 70px;
    color: var(--social-color);

    display: block;
    font-size: 3rem;
    margin: 10px;
    padding: 5px;
    transition: 0.3s;
    filter: drop-shadow(var(--social-shadow));
  }

  a:hover {
    transform: scale(1.3);
  }
`;
