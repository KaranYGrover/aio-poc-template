import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import data from './mockData';

const GameContext = createContext();
function GameProvider({ children }) {
  const [currentData, setCurrentData] = useState(Object.values(data || {})[0]);
  return (
    <GameContext.Provider
      value={{
        currentData,
        setCurrentData,
        games: Object.values(data),
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
GameProvider.propTypes = {
  children: PropTypes.node,
};
export { GameContext, GameProvider };
