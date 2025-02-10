export interface IDiceProps {
  color?: string;
  dieNumber: number;
  displayNumber: number;
  id: string;
  modifier?: number;
  removeDie?: (key: string) => void;
}
