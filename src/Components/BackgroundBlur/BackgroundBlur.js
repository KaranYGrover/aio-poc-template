import styled from 'styled-components';
import { useContext } from 'react';

import { GameContext } from 'GameContext';

const getBackgroundBlur = (imageUrl) => styled.div`
  filter: blur(8px);
  -webkit-filter: blur(8px);
  position: absolute;
  z-index: -50;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: grey url(${imageUrl}) no-repeat fixed center;
  background-size: cover;
`;

const BackgroundBlur = () => {
  const {
    currentData: { backgroundUrl },
  } = useContext(GameContext);

  const BackgroundElm = getBackgroundBlur(backgroundUrl);

  return <BackgroundElm />;
};

export { BackgroundBlur };
