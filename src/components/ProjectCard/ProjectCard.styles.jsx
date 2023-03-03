import styled from "styled-components";

export const ProjectCardImg = styled.img`
  display: block;
  width: 250px;
  height: 250px;
  background-size: 250px;
  position: relative;
  z-index: -2;
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 252px;
  background: var(--portfolio-card-background);
  margin: 8px;
  min-height: 450px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  border: 1px solid transparent;

  a {
    text-decoration: none;
    color: var(--purple-light);
  }

  h3 {
    font-size: var(--portfolio-card-h1-size);
    font-weight: 900;
    font-family: var(--portfolio-card-font-family);
    text-shadow: var(--portfolio-card-textshadow);
    margin: 0;
    padding: 10px;
    color: var(--purple-light);
  }

  p {
    font-size: var(--portfolio-card-p-size);
    margin: 10px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    text-shadow: var(--portfolio-card-textshadow);
    padding: 0px 15px;
    color: var(--purple-light);
  }

  &:hover {
    box-shadow: 2px 2px 10px var(--portfolio-card-hover-color);
  }
`;
