import { IDiceRoll } from "@/app/_models/IDiceRoll";
import { useState } from "react"
import Result from "../Result/Result";
import useComponentVisible from "@/app/_hooks/useComponentVisible";

export interface IPanelProps {
    history: IDiceRoll[][],
}

export default function Panel({
   history,
}: IPanelProps) {
    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(false)

    const togglePanel = () => {
        setIsComponentVisible(!isComponentVisible);
    };

    const rolls : IDiceRoll[][] = [[
        {die: 6, rolled: 4, modifier: 2, key: 'sdfdsf'}, 
        {die: 6, rolled: 2, modifier: 1, key: 'sdwerw'}, 
        {die: 6, rolled: 5, modifier: 2, key: 'uiyioo'}, 
        {die: 8, rolled: 1, modifier: 2, key: 'mnbmmb'}
    ],
    [
        {die: 6, rolled: 4, modifier: 2, key: 'zxcvcz'}, 
    ]];

    return (
        <div ref={ref} className={"absolute h-full right-0 top-0 bg-green text-emerald " + (isComponentVisible ? 'w-3/4' : 'w-[20px]') + " max-w-lg transition-all duration-500 ease-in-out transform h-fill"}>
            <aside>
                {isComponentVisible && (
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
                {isComponentVisible ? '-' : '+'}
                </button>
            </div>
        </div>
    )
}
