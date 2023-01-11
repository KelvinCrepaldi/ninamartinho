import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  margin: 20px;

  width: 30%;
  min-width: 300px;
  min-height: 300px;

  border-radius: 10px;
  box-shadow: var(--portfolio-cars-shadow);

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
  background-color: #6a05925f;
  transition: 0.5s;

  &:hover {
    opacity: 1;
  }

  span {
    text-align: center;
    font-size: 100%;
  }
`;
