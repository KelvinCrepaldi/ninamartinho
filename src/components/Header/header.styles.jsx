import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  z-index: 1;

  width: 100vw;
  height: 90px;
  padding: 0 30px;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(19, 0, 34, 0.4) 60%
  );
`;

export const LogoContainer = styled.div`
  cursor: pointer;
  .logo-text {
    position: absolute;
    top: 25px;
    left: 80px;
    font-size: 1rem;
  }

  img {
    height: 70px;

    animation: headerlogoanimation 3s infinite alternate-reverse;
  }

  @keyframes headerlogoanimation {
    from {
      -webkit-filter: drop-shadow(0px 0px 3px rgb(255, 255, 255, 0.2));
      filter: drop-shadow(0px 0px 3px rgb(255, 255, 255, 0.2));
      transform: scale(1);
    }
    to {
      -webkit-filter: drop-shadow(0px 0px 10px rgb(255, 255, 255, 0.2));
      filter: drop-shadow(0px 0px 10px rgb(255, 255, 255, 0.7));
      transform: scale(1.1);
    }
  }
`;

export const NavMenu = styled.nav`
  position: relative;
  z-index: 10;

  ul {
    width: 100%;
    display: flex;
  }

  li:hover {
    transition: 0.2s;
  }
`;

export const OptionsDisplay = styled.div`
  position: absolute;
  top: 20px;
  left: 80px;
  width: 300px;

  overflow: hidden;
  animation-name: options-in;
  animation-duration: 1s;

  .nav__portfolio-options {
    background: var(--menu-bg);
    border-radius: 10px;
    padding-bottom: 6px;
  }

  ul {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 10px 30px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: 0.5s;
    cursor: pointer;
  }
  li:hover {
    border-top: 1px solid var(--nav-color-hover);
    border-bottom: 1px solid var(--nav-color-hover);
    background: var(--nav-color-hover-transparent);
  }

  span {
    margin: 10px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.2);
    cursor: default;
  }

  @keyframes options-in {
    from {
      height: 0px;
      opacity: 0.4;
    }
    to {
      height: 400px;
      opacity: 1;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  text-shadow: 2px 2px 5px rgb(0, 0, 0, 0.4);

  font-size: var(--nav-link-fontsize);

  color: var(--nav-color);
  transition: 0.3s;

  &:hover {
    color: var(--nav-color-hover);
  }
`;
