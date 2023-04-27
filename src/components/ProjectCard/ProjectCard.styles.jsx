import styled from "styled-components";

export const ProjectCardImg = styled.img`
  width: 250px;
  height: 250px;
  display: block;
  border-radius: 10px;
`;

export const ProjectCardContainer = styled.div`
  display: flex;

  position: relative;
  flex-direction: column;
  width: 250px;

  min-height: 300px;
  position: relative;
  cursor: pointer;
  transition: 0.2s;
  margin: 25px auto 40px;

  top: 0;
  left: 0;

  h3 {
    font-weight: 900;
    font-family: var(--font-text);
    text-shadow: var(--portfolio-card-textshadow);
    margin: 0;
    padding: 10px;
    color: var(--text-color);
    text-align: center;
  }
  a {
    text-decoration: none;
  }

  &:hover {
    top: 3px;
    left: -3px;
  }

  .box1,
  .box2 {
    width: 250px;
    height: 250px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
    transition: 0.2s;

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
