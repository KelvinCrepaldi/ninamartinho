import styled from "styled-components";
import { Element } from "react-scroll";

export const Container = styled(Element)`
  margin: 60vh auto;

  width: calc(100% - 30px);
  min-height: calc(100vh - 400px);
  overflow: hidden;
  border-radius: 5px;

  background: var(--content-color);
  color: var(--purple-light);

  box-shadow: var(--content-shadow);

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  .container-title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 30px 15px 20px;

    background: var(--content-header-color);
  }

  .container-content {
    padding: 5px;
    width: 100%;
    min-height: 50vh;
    box-sizing: border-box;
  }

  .icon {
    font-size: 40px;
    margin-right: 15px;
  }

  &:nth-of-type(2) {
    margin-top: 0px;
  }

  p {
    padding: 20px;
    max-width: 1000px;
    margin: 30px auto;
    text-align: center;
    font-size: var(--content-p-size);
    text-shadow: 2px 2px 2px var(--purple-strong);
  }

  img {
    display: block;
    width: 40%;
    margin: 0 auto;
    box-sizing: border-box;
    border-radius: 10px;
    filter: drop-shadow(3px 3px 2px rgb(0, 0, 0, 0.5));
  }
`;
