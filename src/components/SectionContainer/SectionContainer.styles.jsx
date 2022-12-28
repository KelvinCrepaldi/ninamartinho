import styled from "styled-components";
import { Element } from "react-scroll";

export const Container = styled(Element)`
  margin: 60vh auto;

  max-width: 1024px;
  width: 100%;
  min-height: 400px;
  border-radius: 10px;
  overflow: hidden;

  border: 1px solid #8400db60;
  background: #4c41a2;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  .container-title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 30px 15px 20px;

    background: linear-gradient(
      45deg,
      rgba(66, 0, 141, 0.4) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );

    h1 {
    }
  }

  .container-content {
    padding: 5px;
    width: 100%;
    height: 400px;
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
