import styled from "styled-components";
import { Element } from "react-scroll";

export const Container = styled(Element)`
  margin: 60vh auto;

  padding-bottom: 30px;

  width: calc(100%);
  min-height: calc(100vh - 400px);
  overflow: hidden;

  background: var(--content-color);
  color: var(--purple-light);

  box-shadow: var(--content-shadow);

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(5px);

  &:last-of-type {
    margin-bottom: 30px;
  }

  .container-title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 45px 15px 15px;

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

  p,
  ul {
    margin: 0 auto 90px;
    max-width: 1000px;

    font-size: var(--content-p-size);
    text-shadow: 2px 2px 2px var(--purple-strong);
  }
  p {
    text-align: center;
    margin-top: 30px;
  }

  ul {
    padding: 0px 40px;
    display: flex;
    flex-direction: column;
  }

  li {
    width: 100%;
    margin-top: 15px;
  }

  li svg {
    color: var(--purple-strong);
    margin-right: 10px;
  }

  h3 {
    color: var(--content-h3-color);
    padding: 20px 0 0 0;
    max-width: 1000px;
    margin: 30px auto 0;
    text-align: center;
    font-size: var(--content-h3-size);
    text-shadow: var(--content-h3-shadow);
  }
`;
