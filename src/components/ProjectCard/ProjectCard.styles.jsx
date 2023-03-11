import styled from "styled-components";

export const ProjectCardImg = styled.img`
  width: 250px;
  height: 250px;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ProjectCardContainer = styled.div`
  display: flex;

  position: relative;
  flex-direction: column;
  width: 250px;
  background: var(--portfolio-card-background);
  min-height: 350px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  margin: 25px auto 40px;
  border-radius: 10px;
  box-shadow: -1px -1px 5px #00000011 inset;

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
    transition: 1s;
    box-shadow: 2px 2px 10px var(--portfolio-card-hover-color);
    transform: scale(1.1);
    z-index: 3;
  }
`;
