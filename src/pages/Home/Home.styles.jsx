import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 100px auto;
  padding-bottom: 30px;
  width: 100%;

  box-sizing: border-box;
  min-height: calc(100vh - 150px);

  .logo-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 70vh;
  }

  .logo-homepage {
    width: 100%;
    height: fit-content;
    max-width: 700px;
  }
`;
