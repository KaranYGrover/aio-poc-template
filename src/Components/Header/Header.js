import { useContext } from 'react';
import { GameContext } from 'GameContext';
import styled from 'styled-components';

const getStyledLinkContainer = (color) => styled.div`
  display: flex;
  & a {
    color: ${color};
    border-radius: 10px;
    padding: 0.9rem 3rem;
    font-size: 1em;
    text-decoration: none;
    display: flex;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    font-weight: 600;
    transition: 0.3s ease all;

    &:hover {
      color: black;
      background: ${color};
      transition: 0.3s ease all;
    }
  }
`;

const getStyledHeader = (color) => styled.header`
  display: flex;
  width: 100vw;
  height: 4rem;
  background: ${color};
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  const {
    currentData: { headerBackground, headerLinkColor },
  } = useContext(GameContext);

  const HeaderContainer = getStyledHeader(headerBackground);
  const LinkContainer = getStyledLinkContainer(headerLinkColor);
  return (
    <HeaderContainer>
      <LinkContainer>
        <a href="#">Home</a>
        <a href="#">Watch</a>
        <a href="#">Calendar</a>
        <a href="#">Compete</a>
      </LinkContainer>
    </HeaderContainer>
  );
};

export { Header };
