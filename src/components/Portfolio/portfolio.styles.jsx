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

export const CloudButton = styled.button`
  background: url(${(props) => props.imgBackground}) no-repeat center;
  background-size: 100%;
  position: relative;
  border: none;
  width: 300px;
  height: 170px;
  margin: 20px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

export const AlbumButton = styled.button`
  background: none;
  border: none;
  position: relative;
  width: 300px;
  height: 300px;
  margin: 30px;

  & img {
    top: 20px;
    left: 20px;
    position: absolute;
    width: 250px;
    height: 250px;
  }

  & img:nth-child(1) {
    z-index: 3;
    transform: translateX(-20px) translateY(20px);
  }

  & img:nth-child(2) {
    z-index: 2;
  }

  & img:nth-child(3) {
    z-index: 1;
    transform: translateX(20px) translateY(-20px);
  }
  & div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 4;
  }
  & div span {
    font-family: var(--font-Macherie);
    transform: translateX(-20px) translateY(20px);
    color: var(--purple-light);
    text-shadow: var(--social-shadow);
    font-size: 2rem;
  }

  &:hover {
    & img:nth-child(1) {
      transform: translateX(-40px) translateY(40px);
    }
    & img:nth-child(2) {
    }
    & img:nth-child(3) {
      transform: translateX(40px) translateY(-40px);
    }
    & > div span {
      transform: translateX(-40px) translateY(40px);
    }
  }

  & > img:nth-child(1),
  & > img:nth-child(3),
  & > div span {
    transition: 0.5s;
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
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }

  .cloud-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);

    font-size: 2.5rem;

    color: var(--purple-light);
  }
`;

export const GalleryLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const GalleryMap = styled.div`
  width: 90%;
  height: 50vh;
  min-height: 450px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 1px 1px 5px inset rgb(0, 0, 0, 0.4);
  overflow-y: scroll;
  justify-content: center;
`;

export const PortfolioHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    margin: 20px 0;
    text-align: center;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;

  padding: 10px;
  margin: 14px 0px;

  height: 60px;
  width: 300px;
  font-size: 2.6rem;
  cursor: pointer;

  color: var(--purple-light);
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.1) 60%,
    rgba(255, 255, 255, 0) 90%
  );
  border-radius: 30px 0px 0px 30px;

  &:hover {
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.3) 60%,
      rgba(255, 255, 255, 0) 90%
    );
  }
`;
