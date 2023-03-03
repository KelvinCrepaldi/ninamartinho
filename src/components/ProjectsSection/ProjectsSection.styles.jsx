import styled from "styled-components";

export const ProjectsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: 1080px;
  margin-bottom: 100px;

  h2 {
    width: 100%;
    margin-bottom: 10px;
    padding: 0px 30px;
  }
  .line {
    width: 100%;
    height: 5px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.35) 0%,
      rgba(217, 217, 217, 0) 100%
    );
    border-left: 5px solid #ffffffb5;
    margin-bottom: 10px;
  }
`;
