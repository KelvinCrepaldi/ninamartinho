import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;

  width: 100%;
  height: 150px;

  background-color: var(--purple-light-transparent);

  h1 {
    text-align: center;
  }
  nav {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  nav a {
    text-align: center;
    margin: 0px 40px 15px;
    padding: 10px;
    font-size: 2rem;

    color: var(--purple-strong);
    text-shadow: 0px 0px 2px var(--black);
  }

  nav a:hover {
    color: var(--purple-light);
    transition: 0.2s;
    text-shadow: 3px 3px 10px var(--purple-strong);

    cursor: pointer;
  }
`;
