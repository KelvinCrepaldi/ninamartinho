import styled from "styled-components";

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;

  max-width: 1000px;
  margin: 0 auto 90px;
  padding: 0px 40px;

  font-size: var(--content-p-size);
  text-shadow: 1px 1px 1px var(--purple-strong);
  li {
    padding: 10px;
    margin: 5px;
    width: 100%;

    background: var(--card-backgroundColor);
    border-radius: 5px;
    border-left: 3px solid white;
    transition: 0.3s;
  }

  li:hover {
    border-left: 8px solid var(--purple-strong);
  }

  p {
    text-align: center;
    margin-top: 30px;
  }

  li svg {
    margin-right: 10px;
    color: var(--purple-strong);
    transition: 0.3s;
  }

  li:hover svg {
    margin-right: 20px;
    color: var(--purple-medium);
  }

  h3 {
    text-align: center;

    padding: 20px 0 0 0;
    max-width: 1000px;
    margin: 30px auto 0;

    color: var(--content-h3-color);
    font-size: var(--content-h3-size);
    text-shadow: var(--content-h3-shadow);
  }
`;

export const AboutText = styled.p`
  max-width: 900px;
  margin: 20px auto;
  text-align: center;
`;
