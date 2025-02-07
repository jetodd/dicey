export interface IDiceProps {
    color?: string;
    dieNumber: number;
    displayNumber: number;
    id: string;
    removeDie?: (key: string) => void;
}
