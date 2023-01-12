import styled from "styled-components";

export const HomeContainer = styled.div`
  margin: 0 auto;
  padding-bottom: 30px;
  width: 100%;
  position: relative;

  box-sizing: border-box;

  .logo-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0 50px;
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
    transition: 0.1s;
  }

  img.logo-homepage:hover {
    transform: scale(1.04);
  }
`;

export const Star = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;

  filter: drop-shadow(0 0 0.75rem white);
  animation: starmove 2s infinite alternate;
  animation-delay: ${(props) => props.delayTime};
  @keyframes starmove {
    0% {
      transform: scale(1.1);
      filter: drop-shadow(0 0 1rem white);
    }

    20%,
    40%,
    60%,
    80%,
    90%,
    95% {
      filter: drop-shadow(0 0 0.6rem white);
    }
    23%,
    43%,
    63%,
    83%,
    93%,
    97% {
      filter: drop-shadow(0 0 0.75rem white);
    }

    100% {
      transform: scale(0.2);
      filter: drop-shadow(0 0 0.75rem white);
    }
  }

  z-index: -3;
`;

export const StarPosition = styled.div`
  position: absolute;

  top: ${(props) => props.posY};
  left: ${(props) => props.posX};

  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;
