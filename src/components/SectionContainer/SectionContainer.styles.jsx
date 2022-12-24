import styled from "styled-components";
import { Element } from "react-scroll";

export const Container = styled(Element)`
  margin: 50px auto;
  padding: 30px;
  position: relative;

  box-sizing: border-box;
  max-width: 1024px;
  width: 100%;
  min-height: 400px;

  background: rgb(4, 0, 43);
  background: linear-gradient(
    16deg,
    rgba(4, 0, 43, 0.8) 0%,
    rgba(11, 5, 64, 0.8) 22%,
    rgba(20, 18, 45, 0.8) 55%,
    rgba(23, 14, 103, 0.8) 89%,
    rgba(20, 18, 45, 0.8) 100%
  );

  border-radius: 7px;
  box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.7),
    inset 1px 1px 2px rgb(100, 100, 100, 0.1),
    inset -2px -2px 2px rgb(0, 0, 0, 0.1);

  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;
