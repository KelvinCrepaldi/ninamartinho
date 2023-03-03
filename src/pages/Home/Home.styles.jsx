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
    font-size: calc(100vw / 70 + 1vh);
    color: var(--subtitle-logo-color);
    text-shadow: 1px 1px 5px rgb(0, 0, 0, 0.4);
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
  text-shadow: 1px 1px 1px black;
  box-shadow: 1px 1px 3px black, inset 1px 1px 3px black;

  &:hover {
    transform: scale(1.1);
  }
`;
