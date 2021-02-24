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

type Round = 'round1' | 'round2' | 'round3';

interface Move {
  player: Player;
  card: string;
}

export interface Game {
  currentRound: Round;
  round1: {
    handsHistory: Move[];
    won: Player | undefined;
  },
  round2: {
    handsHistory: Move[];
    won: Player | undefined;
  },
  round3: {
    handsHistory: Move[];
    won: Player | undefined;
  },
  score: {
    us: number;
    they: number;
  },
}
