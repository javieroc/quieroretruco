export interface Player {
  name: string;
  image: string;
  position: number;
  hand: string[];
  isBoton: boolean;
}

type Status = 'waiting' | 'playing' | 'finished';

export interface Match {
  id: string;
  players: Player[];
  status: Status;
  boton: Player;
  currentGame: Game;
  gameHistory: string[];
}

export interface Game {
  round1: {
    handsHistory: string[];
    won: Player | undefined;
  },
  round2: {
    handsHistory: string[];
    won: Player | undefined;
  },
  round3: {
    handsHistory: string[];
    won: Player | undefined;
  },
  score: {
    us: number;
    they: number;
  },
}
