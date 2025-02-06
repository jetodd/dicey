"use client"

import { useState } from "react";
import { IDiceRoll } from "./_models/IDiceRoll";
import Stepper, { IStepperProps } from "./_components/Stepper/Stepper";
import Die from "./_components/Die/Die";

export default function Home() {
  const [history, setHistory] = useState<IDiceRoll[]>([]);
  const [currentRoll, setCurrentRoll] = useState<IDiceRoll[]>([]);
  const [previousRoll, setPreviousRoll] = useState<IDiceRoll[]>([]);
  const [modifier, setModifier] = useState<number>(0);
  const [numberOfDice, setNumberOfDice] = useState<number>(1);

  const modifierProps: IStepperProps = {
    onChange: setModifier,
    label: "Modifier",
    value: modifier,
    min: -20,
    max: 20,
  }

  const diceNumberProps: IStepperProps = {
    onChange: setNumberOfDice,
    label: "Number",
    value: numberOfDice,
    min: 1,
    max: 20,
  }

  function handleClear() {
    setCurrentRoll([]);
    setModifier(0);
    setNumberOfDice(1);
  }

  function rollDice() {
    for (let i = 0; i < currentRoll?.length; i++) {
      const numbers = [...Array(currentRoll[i].die + 1).keys()].slice(1);
      shuffle(numbers);

      const duration = (Math.floor(Math.random() * 4) + 1) * 1000;
      const started = new Date().getTime();

      const animationTimer = setInterval(function() {
        if (new Date().getTime() - started > duration) {
          const final = numbers[Math.floor(Math.random() * numbers.length)];
          clearInterval(animationTimer);
        } else {
          const temp = numbers[Math.floor(Math.random() * numbers.length)];
        }
      }, 100);
    }
  }

  function addDice(type: number) {
    const die = {die: type, rolled: 0, modifier: modifier} as IDiceRoll;
    const diceArray = Array(numberOfDice).fill(die);

    currentRoll ? setCurrentRoll([...currentRoll, ...diceArray]) : setCurrentRoll([...diceArray]);
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
        <div className="grid grid-cols-8 font-[family-name:var(--font-geist-sans)] p-4 gap-y-4 max-w-5xl mx-auto">
          <div className="bg-emerald py-1 text-green rounded-l-2xl border-2 border-green content-center justify-center" onClick={() => addDice(2)}>
            <span className="flex items-center justify-center"><Die dieNumber={2} displayNumber={2} /></span>
          </div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(4)}>
            <span className="flex items-center justify-center"><Die dieNumber={4} displayNumber={4} /></span>
          </div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(6)}>
            <span className="flex items-center justify-center"><Die dieNumber={6} displayNumber={6} /></span>
          </div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(8)}>
            <span className="flex items-center justify-center"><Die dieNumber={8} displayNumber={8} /></span>
          </div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(10)}>
            <span className="flex items-center justify-center"><Die dieNumber={10} displayNumber={10} /></span>
          </div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(12)}>
            <span className="flex items-center justify-center"><Die dieNumber={12} displayNumber={12} /></span>
          </div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(20)}>
            <span className="flex items-center justify-center"><Die dieNumber={20} displayNumber={20} /></span>
          </div>
          <div className="bg-emerald py-1 text-green border-2 border-green rounded-r-2xl content-center" onClick={() => addDice(100)}>
            <span className="flex items-center justify-center"><Die dieNumber={100} displayNumber={100} /></span>
          </div>
          
          <div className="col-span-4 pr-2">
            <Stepper {...modifierProps}></Stepper>
          </div>

          <div className="col-span-4 pl-2">
            <Stepper {...diceNumberProps}></Stepper>
          </div>

          <div className="col-span-4">
            <button className="bg-green text-white py-2 px-4 rounded-full w-full mr-2" onClick={rollDice}>roll</button>
            </div>
          <div className="col-span-4">
            <button className="bg-green text-white py-2 px-4 rounded-full w-full ml-2" onClick={handleClear}>clear</button>
          </div>

          <div className="col-span-8">
            <hr className="h-px my-4 bg-green border-0"></hr>
          </div>

          <div className="col-span-8">
            <h1>Current:</h1>
          </div>
            {currentRoll.map(function(data) {
              return (
                <Die dieNumber={data.die} displayNumber={data.rolled} />
              )
            })}
          <div className="col-span-8">
            <div className="text-left text-2xl bg-green text-emerald rounded-lg px-2 py-4">
              Total: {currentRoll.reduce((n, {rolled, modifier}) => n + rolled + modifier, 0)}
            </div>
          </div>

          <div className="col-span-8">
            <hr className="h-px my-4 bg-green border-0"></hr>
          </div>

          <div className="col-span-8">
            <h1>Previous:</h1>
            <div className="text-left text-2xl bg-green text-emerald rounded-lg px-2 py-4">
              Total:  {previousRoll.reduce((n, {rolled, modifier}) => n + rolled + modifier, 0)}
            </div>
          </div>
        </div>
      </main>
  );
}
