import styled from "styled-components";
import { Link } from "react-scroll";

export const PortfolioSelection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;

  box-sizing: border-box;

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
`;

export const GalleryMap = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;

  overflow-y: scroll;
`;

export const PortfolioHeader = styled.div`
  width: 100%;
  h2 {
    margin: 20px 0;
    text-align: center;
  }
`;

export const BackButton = styled(Link)`
  width: 60px;
  height: 60px;
  border: 1px solid black;
  position: absolute;

  width: 45px;
  height: 45px;
`;
