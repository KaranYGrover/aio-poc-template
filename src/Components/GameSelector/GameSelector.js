import { useContext } from 'react';
import PropTypes from 'prop-types';

import { GameContext } from 'GameContext';

import {
  gameSwitch,
  gameCircle,
  mainContainer,
} from './gameSelector.module.scss';

const GameSwitch = ({ title, icon, onClick }) => {
  return (
    <button className={gameSwitch} onClick={onClick}>
      {icon ? <img src={icon} alt="logo" /> : <div className={gameCircle} />}
      <span>{title}</span>
    </button>
  );
};

const GameSelector = () => {
  const { games, setCurrentData } = useContext(GameContext);
  return (
    <div className={mainContainer}>
      {games.map((gameData, idx) => (
        <GameSwitch
          key={`game-${idx}`}
          {...gameData}
          onClick={() => setCurrentData(gameData)}
        />
      ))}
    </div>
  );
};

GameSelector.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
};

export { GameSelector };
