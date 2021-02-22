import React from 'react';
import { Match } from 'src/types';

type ContextType = {
  currentMatch: Match | undefined;
  setCurrentMatch: (currentMatch: Match) => void;
};

export const GameContext = React.createContext<ContextType | undefined>(undefined);

export const useContext = () => React.useContext(GameContext);
