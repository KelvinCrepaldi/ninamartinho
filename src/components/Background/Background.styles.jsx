import styled from "styled-components";

export const BackgroundContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;

  background: url(${(props) => props.bgImage}), rgb(0, 0, 0, 0.2) repeat;
  background-size: 600px;
  background-position: 0 0;
  background-size: auto 100%;

  z-index: -10;
`;
