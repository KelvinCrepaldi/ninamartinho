import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  margin: 10px;

  width: 30%;
  min-width: 250px;
  min-height: 250px;
  max-width: 300px;
  max-height: 300px;

  border-radius: 10px;
  box-shadow: var(--portfolio-card-shadow);

  img {
    width: 100%;
    height: 100%;
  }
  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  opacity: 0;
  background: var(--portfolio-cards-background);
  transition: 0.5s;
  color: var(--white);
  text-shadow: 0px 0px 5px black;
  font-size: var(--portfolio-card-font-size);

  &:hover {
    opacity: 1;
  }

  span {
    text-align: center;
    font-size: 100%;
  }
`;
