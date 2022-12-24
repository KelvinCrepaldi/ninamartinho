import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 100px auto 0px;
  padding-bottom: 30px;
  width: 100%;
  max-width: 1100px;
  box-sizing: border-box;
  min-height: calc(100vh - 150px);

  background: rgb(4, 0, 43);
  background: linear-gradient(
    16deg,
    rgba(4, 0, 43, 0.8) 0%,
    rgba(11, 5, 64, 0.8) 22%,
    rgba(20, 18, 45, 0.8) 55%,
    rgba(23, 14, 103, 0.8) 89%,
    rgba(20, 18, 45, 0.8) 100%
  );

  .logo-container {
    display: flex;
    justify-content: center;
  }

  .logo-homepage {
    width: 100%;
    max-width: 700px;
  }
`;
