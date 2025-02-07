import { IDiceRoll } from "@/app/_models/IDiceRoll";
import { useState } from "react"
import Result from "../Result/Result";

export interface IPanelProps {
    history: IDiceRoll[][],
}

export default function Panel({
   history,
}: IPanelProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const togglePanel = () => {
        setIsExpanded(!isExpanded);
    };

    const rolls : IDiceRoll[][] = [[
        {die: 6, rolled: 4, modifier: 2}, 
        {die: 6, rolled: 2, modifier: 1}, 
        {die: 6, rolled: 5, modifier: 2}, 
        {die: 8, rolled: 1, modifier: 2}
    ],
    [
        {die: 6, rolled: 4, modifier: 2}, 
    ]];

    return (
        <div className={"absolute h-full right-0 top-0 bg-green text-emerald " + (isExpanded ? 'w-3/4' : 'w-[20px]') + " max-w-lg transition-all duration-500 ease-in-out transform h-fill"}>
            <aside>
                {isExpanded && (
                    <div className="px-6 py-2 overflow-y-auto h-dvh">
                        <span className="text-xl text-white">History</span>
                        
                        {rolls.map(data => {
                            return (
                                <Result rolls={data} />
                            )
                        })}
                    </div>
                )}
            </aside>
            <div>
                <button 
                    type="button" 
                    onClick={togglePanel}
                    className="fixed bottom-32 left-[-12px] flex h-6 w-6 items-center justify-center rounded-full bg-white"
                >
                {isExpanded ? '-' : '+'}
                </button>
            </div>
        </div>
    )
}
