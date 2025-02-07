import { IDiceRoll } from "@/app/_models/IDiceRoll";

export interface IResultProps {
    rolls: IDiceRoll[];
}

export default function Result({
    rolls,
}: IResultProps) {
    console.log(rolls);
    return (
        <div className="w-full">
            <div className="align-middle aspect-square size-16 align-middle text-center bg-emerald my-2 rounded-md items-center">
                <span className="text-xl text-white align-middle">

                    {rolls.reduce((n, { rolled, modifier }) => n + rolled + modifier, 0)}
                </span>
            </div>
        </div>
    )
}
