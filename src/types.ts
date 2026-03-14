export type Difficulty = 'Beginner' | 'Intermediate';

export interface CardData {
  id: number;
  iconId: number;
  color: string;
  isFlipped: boolean;
  isMatched: boolean;
  isBonus?: boolean;
}

export interface GameState {
  playerName: string;
  difficulty: Difficulty;
  gridSize: number;
  cards: CardData[];
  flippedIndices: number[];
  moves: number;
  matches: number;
  isGameOver: boolean;
  startTime: number | null;
  endTime: number | null;
}

export const DIFFICULTY_CONFIG = {
  Beginner: { size: 3, label: '초급' },
  Intermediate: { size: 5, label: '중급' },
};
