import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 0px;
  z-index: 50;

  width: 100vw;
  height: 60px;
  padding: 0 10px;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(19, 0, 34, 0.4) 60%
  );
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
  left: 10px;
  width: 340px;

  padding-bottom: 20px;

  overflow: hidden;
  animation-name: options-in;
  animation-duration: 1s;

  .nav__portfolio-options {
    width: calc(100% - 20px);
    background-color: #6100a1;
    background-image: url("https://www.transparenttextures.com/patterns/black-lozenge.png");

    margin: 0 auto;
  }

  .border1,
  .border2 {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid var(--purple-light-transparent);
  }

  .border1 {
    right: -3px;
    top: -3px;
  }

  .border2 {
    right: 3px;
    top: 3px;
  }

  ul {
    position: relative;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    padding: 5px;
  }

  li {
    padding: 10px 30px;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: 0.5s;
    cursor: pointer;
    z-index: 3;
  }
  li:hover {
    border-left: 3px solid white;
    margin-left: 5px;
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
