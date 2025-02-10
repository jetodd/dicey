export interface IDiceRoll {
  die: number;
  rolled: number;
  modifier: number;
  key: string;
}

export interface IDiceRollSummary {
  diceNumber: number;
  rolled: number[];
  modifier: number;
}
