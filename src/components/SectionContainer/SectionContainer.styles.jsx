import styled from "styled-components";
import { Element } from "react-scroll";

export const Container = styled(Element)`
  margin: 60vh auto;

  padding-bottom: 30px;

  width: calc(100%);
  min-height: calc(100vh - 400px);
  overflow: hidden;

  background-color: #a364eb;
  background-image: url("https://www.transparenttextures.com/patterns/skewed-print.png");
  //background: var(--content-BackgroundColor);
  color: var(--purple-light);

  &:last-of-type {
    margin-bottom: 30px;
  }

  .container-title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 45px 15px 35px;

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
`;
