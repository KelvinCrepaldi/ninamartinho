import styled from "styled-components";

export const PortfolioSelection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 70vh;

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

export const SelectionLayers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .buttonsContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttonsContainer button {
    width: 300px;
    height: 300px;
    margin: 20px;
  }
`;

export const GalleryLayer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  .GalleryMap {
    width: 100%;
    height: 100%;
  }
`;

export const PortfolioHeader = styled.div`
  width: 100%;
  h2 {
    margin: 20px 0;
    text-align: center;
  }
`;

export const BackButton = styled.button`
  position: absolute;

  width: 45px;
  height: 45px;
`;
