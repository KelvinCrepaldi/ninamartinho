import styled from "styled-components";
import { Element } from "react-scroll";

export const Container = styled(Element)`
  margin: 60vh auto;

  max-width: 1200px;
  width: 100%;
  min-height: 400px;
  border-radius: 10px;
  overflow: hidden;

  background: var(--content-color);
  color: var(--purple-light);

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
