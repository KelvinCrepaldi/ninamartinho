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
  transition: 0.2s;
  margin: 25px auto 40px;
  border-radius: 10px;
  box-shadow: -1px -1px 5px #00000011 inset;
  background: linear-gradient(
    104deg,
    rgba(148, 121, 214, 1) 31%,
    rgba(160, 131, 196, 0.4920343137254902) 100%
  );
  top: 0;
  left: 0;

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

    top: 3px;
    left: -3px;
  }

  .box1,
  .box2 {
    width: 250px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
    transition: 0.2s;
    box-shadow: inset 0px 0px 2px #ffffff;
    background: var(--portfolio-card-background);
    box-shadow: none;
  }

  .box1 {
    z-index: -1;
  }

  .box2 {
    z-index: -2;
  }

  &:hover .box1 {
    top: -7px;
    left: 7px;
    box-shadow: inset 0px 0px 2px #ffffff;
  }

  &:hover .box2 {
    top: -14px;
    left: 14px;
    box-shadow: inset 0px 0px 2px #ffffff;
  }
`;
