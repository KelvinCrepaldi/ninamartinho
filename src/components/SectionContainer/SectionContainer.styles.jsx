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
  //backdrop-filter: blur(5px);
  //-webkit-backdrop-filter: blur(5px);

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
`;
