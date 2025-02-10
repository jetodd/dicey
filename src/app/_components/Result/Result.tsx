import { IDiceRollSummary } from "@/app/_models/IDiceRoll";

export interface IResultProps {
  rolls: IDiceRollSummary[];
}

// const rolled: IDiceRollSummary[] = [
//       { diceNumber: 6, rolled: [4, 5, 2], modifier: 2 },
//       { diceNumber: 6, rolled: [2, 3], modifier: 1 },
//       { diceNumber: 6, rolled: [5], modifier: 2 },
//       { diceNumber: 8, rolled: [1], modifier: 2 },
//   ];

export default function Result({ rolls }: IResultProps) {
  console.log("sadfdsafsa", JSON.stringify(rolls));
  return (
    <div className="w-full">
      <div className="align-middle aspect-square size-16 align-middle text-center bg-emerald my-2 rounded-md items-center">
        <span className="text-xl text-white align-middle">
          <p>sdfsdafsa</p>
          {/* {rolls.reduce((n, { rolled, modifier }) => rolled.reduce((a, b) => a + b) + modifier * rolled.length, 0)} */}
        </span>
      </div>
    </div>
  );
}
