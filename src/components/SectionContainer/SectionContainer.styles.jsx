import styled from "styled-components";
import { Element } from "react-scroll";

export const Container = styled(Element)`
  margin: 60vh auto;

  max-width: 1024px;
  width: 100%;
  min-height: 400px;
  padding: 1px;
  background: rgb(61, 0, 73);

  border-radius: 7px;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.7),
    inset 1px 1px 2px rgb(100, 100, 100, 0.1),
    inset -2px -2px 2px rgb(0, 0, 0, 0.1);

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  .container-title {
    background: linear-gradient(
      0deg,
      rgba(4, 0, 43, 0.2) 0%,
      rgba(52, 0, 153, 0.2) 100%
    );
    height: 50px;

    box-sizing: border-box;
  }

  .container-content {
    padding: 5px;
  }

  &:nth-of-type(2) {
    margin-top: 0px;
  }
`;
