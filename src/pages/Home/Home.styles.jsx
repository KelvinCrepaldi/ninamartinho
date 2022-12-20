import styled from "styled-components";

export const HomeContainer = styled.div`
  .logo-container {
    display: flex;
    justify-content: center;
    height: calc(100vh - 150px);
  }
  .logo-img {
    width: 50%;
    min-width: 300px;
    max-width: 600px;
    height: fit-content;
    margin-top: 50px;
  }

  .section-flex {
    display: flex;

    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;

    width: 100%;
    min-height: 90vh;
    margin-bottom: 100vh;

    background-color: var(--purple-light);
    transition: all 0.5s linear;
  }

  .section-flex:last-of-type {
    margin-bottom: 30px;
  }

  .section-flex h1 {
    margin: 80px 0 40px;
    color: var(--purple-strong);
    width: 100%;
    text-align: center;
    display: block;
  }
`;

export const Imgcontainer = styled.div`
  display: inline-block;
  width: 25vw;
  height: calc(25vw / 1.5);
  min-width: 300px;
  min-height: 200px;

  background: ${(props) => `url(${props.background}) no-repeat top center`};
  background-size: cover;
  border: 1px solid black;
  margin: 20px;
`;
