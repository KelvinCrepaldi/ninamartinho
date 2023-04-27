import styled from "styled-components";

export const MuscadineContent = styled.div`
  box-sizing: border-box;
  position: relative;

  width: calc(100% - 40px);
  max-width: 1300px;
  height: 50vh;
  margin: 0 auto;
  max-height: 500px;

  background: url(${(props) => props.backgroundimage}) no-repeat bottom;
  background-size: cover;

  box-shadow: 0px 0px 100px 10px black inset;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: transparent;

  div {
    width: 48%;
  }

  .border1,
  .border2 {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid var(--purple-light-transparent);
  }

  .border1 {
    right: -4px;
    top: -4px;
  }

  .border2 {
    right: 4px;
    top: 4px;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const DownloadLink = styled.a`
  box-sizing: border-box;
  display: block;
  text-align: center;
  text-decoration: none;
  color: var(--color-white);
  font-size: 1.5rem;
  width: 250px;
  padding: 5px;
  margin: 10px;
  border: 2px solid var(--color-white);
  border-radius: 5px;
  transition: 0.2s;
  text-shadow: 1px 1px 1px #210041b2;
  backdrop-filter: blur(3px);
  &:hover {
    transform: scale(1.1);
    background: #0000002f;
  }
`;

export const MuscadineBackground = styled.div`
  position: relative;
  background: red;
`;

export const MuscadineTitleContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: start;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  color: var(--color-white);
  z-index: 1;

  h1 {
    margin-top: 30px;
    font-family: var(--font-title);
    text-shadow: 2px 2px 3px black;
  }

  p {
    font-size: 1.2rem;
    max-width: 300px;
    text-shadow: 1px 1px 1px black;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    align-content: center;
    h1 {
      margin-bottom: 20px;
    }
  }
`;

export const MuscadineDownloadContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  align-content: flex-end;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  z-index: 1;
  margin-bottom: 30px;

  span {
    width: 100%;
    box-sizing: border-box;

    text-align: center;

    font-size: 1rem;
    color: var(--color-white);
  }
  span a {
    color: #a574ff;
  }

  @media screen and (min-width: 1000px) {
  }
`;

export const MuscadineInfo = styled.section``;
