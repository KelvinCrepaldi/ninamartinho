import styled from "styled-components";

export const PortfolioSelection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
  box-sizing: border-box;

  border: 1px solid red;
  .portfolio-type {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 60vh;
  }
`;

export const PortfolioButton = styled.button`
  max-width: 350px;
  max-height: 350px;
  min-width: 150px;
  min-height: 150px;
  width: 100%;
  height: 100%;
`;
