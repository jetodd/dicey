"use client"

import { useState } from "react";
import Four from "./_components/Four/Four";
import Two from "./_components/Two/Two";
import Eight from "./_components/Eight/Eight";
import Ten from "./_components/Ten/Ten";
import Six from "./_components/Six/Six";
import Twelve from "./_components/Twelve/Twelve";
import Twenty from "./_components/Twenty/Twenty";

export default function Home() {
  const [total, setTotal] = useState<number>(0);
  const [rolls, setRolls] = useState<Map<number, number[]>>(new Map([[2, [0]], [4, [0]], [6, [0]], [8, [0]], [10, [0]], [12, [0]], [20, [0]], [100, [0]]]));

  function handleClear() {
    setTotal(0);
    setRolls(new Map([[2, []], [4, []], [6, []], [8, []], [10, []], [12, []], [20, []], [100, []]]));
  }

  function rollDie(die: number) {
    const numbers = [...Array(die + 1).keys()].slice(1);
    shuffle(numbers);

    const duration = (Math.floor(Math.random() * 4) + 1) * 1000;
    const started = new Date().getTime();
    const index = rolls.get(die)?.length ? rolls.get(die)?.length : 0;

    const animationTimer = setInterval(function() {
      if (new Date().getTime() - started > duration) {
        const final = numbers[Math.floor(Math.random() * numbers.length)];
        setTotal((prevValue) => prevValue + final);
        clearInterval(animationTimer);
      } else {
        const temp = numbers[Math.floor(Math.random() * numbers.length)];

      }
    }, 100);

  }

  function shuffle(array: number[]) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  return (
      <main>
        <div className="grid grid-cols-8 lg:grid-cols-10 text-center font-[family-name:var(--font-geist-sans)] p-4 gap-y-4 max-w-5xl mx-auto">
          <div>{ !rolls.get(2)?.length ? 0 : rolls.get(2) }</div>
          <div>{ !rolls.get(4)?.length ? 0 : rolls.get(4) }</div>
          <div>{ !rolls.get(6)?.length ? 0 : rolls.get(6) }</div>
          <div>{ !rolls.get(8)?.length ? 0 : rolls.get(8) }</div>
          <div>{ !rolls.get(10)?.length ? 0 : rolls.get(10) }</div>
          <div>{ !rolls.get(12)?.length ? 0 : rolls.get(12) }</div>
          <div>{ !rolls.get(20)?.length ? 0 : rolls.get(20) }</div>
          <div>{ !rolls.get(100)?.length ? 0 : rolls.get(100) }</div>
          <div className="lg:col-span-2">{total}</div>

          <div className="bg-emerald py-1 text-green rounded-l-2xl border-2 border-green content-center justify-center" onClick={() => rollDie(2)}><Two text="2" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => rollDie(4)}><Four text="4" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => rollDie(6)}><Six text="6" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => rollDie(8)}><Eight text="8" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => rollDie(10)}><Ten text="10" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => rollDie(12)}><Twelve text="12" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => rollDie(20)}><Twenty text="20" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green rounded-r-2xl content-center" onClick={() => rollDie(100)}><Two text="100" /></div>
          
          <div className="col-span-4 lg:col-span-1 mr-2 lg:mx-4">
            <button className="bg-green text-white py-2 px-4 rounded-full w-full">roll</button>
            </div>
          <div className="col-span-4 lg:col-span-1 ml-2 lg:mx-4">
            <button className="bg-green text-white py-2 px-4 rounded-full w-full" onClick={handleClear}>clear</button>
          </div>
        </div>
      </main>
  );
}
