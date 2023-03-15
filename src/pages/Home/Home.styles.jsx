import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 30px;
  width: 100%;
  position: relative;

  box-sizing: border-box;

  .logo-container {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 100px;
  }

  .subtitle-logo {
    font-size: calc(100vw / 90 + 0.6rem);
    color: var(--color-white);
    text-shadow: 1px 1px 1px black;
    text-align: center;
    margin-bottom: 20px;
  }

  img.logo-homepage {
    width: 40%;
    height: fit-content;
    max-width: 500px;
    min-width: 350px;
    transition: 0.1s;
  }
`;

export const DownloadCVLink = styled.a`
  box-sizing: border-box;
  display: block;
  text-align: center;
  text-decoration: none;
  color: var(--download-cv-color);
  font-size: 1.5rem;
  width: 300px;
  padding: 10px;
  border: 1px solid var(--download-cv-color);
  border-radius: 5px;
  transition: 0.4s;
  text-shadow: 1px 1px 1px #210041b2;
  box-shadow: -1px 2px 2px #210041b2, inset -1px 2px 2px #210041b2;
  backdrop-filter: blur(3px);
  &:hover {
    transform: scale(1.2);
    box-shadow: -1px 2px 2px #210041b2;
    background: #0000002f;
  }
`;

export const HomeNameTitle = styled.div`
  text-align: center;

  margin: 30px;

  h1 {
    font-family: var(--font-Macherie);
    margin: 0;
    padding: 0;
    letter-spacing: 5px;
    line-height: auto;
    font-size: calc(90vw / 90 + 3rem);
  }
`;
