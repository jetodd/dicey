"use client"

import { useState } from "react";
import Four from "./_components/Four/Four";
import Two from "./_components/Two/Two";
import Eight from "./_components/Eight/Eight";
import Ten from "./_components/Ten/Ten";
import Six from "./_components/Six/Six";
import Twelve from "./_components/Twelve/Twelve";
import Twenty from "./_components/Twenty/Twenty";
import { IDiceRoll } from "./_models/IDiceRoll";
import Stepper, { IStepperProps } from "./_components/Stepper/Stepper";

export default function Home() {
  const [history, setHistory] = useState<IDiceRoll[]>([]);
  const [currentRoll, setCurrentRoll] = useState<IDiceRoll[]>();
  const [previousRoll, setPreviousRoll] = useState<IDiceRoll[]>();
  const [modifier, setModifier] = useState<number>(0);
  const [numberOfDice, setNumberOfDice] = useState<number>(1);

  const modifierProps: IStepperProps = {
    onStepperChange: onModifierChanged,
    label: "Modifier",
    value: modifier,
    min: -20,
    max: 20,
  }

  const diceNumberProps: IStepperProps = {
    onStepperChange: onDiceNumberChanged,
    label: "Number",
    value: numberOfDice,
    min: 1,
    max: 20,
  }

  function onModifierChanged(newValue: number) {
    setModifier(newValue);
  }

  function onDiceNumberChanged(newValue: number) {
    setNumberOfDice(newValue);
  }

  function handleClear() {
    setHistory([]);
    setCurrentRoll([]);
    setModifier(0);
    setNumberOfDice(1);
  }

  function rollDice() {
    // const numbers = [...Array(die + 1).keys()].slice(1);
    // shuffle(numbers);

    // const duration = (Math.floor(Math.random() * 4) + 1) * 1000;
    // const started = new Date().getTime();

    // const animationTimer = setInterval(function() {
    //   if (new Date().getTime() - started > duration) {
    //     const final = numbers[Math.floor(Math.random() * numbers.length)];
    //     setTotal((prevValue) => prevValue + final);
    //     clearInterval(animationTimer);
    //   } else {
    //     const temp = numbers[Math.floor(Math.random() * numbers.length)];
    //   }
    // }, 100);
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
          <div className="bg-emerald py-1 text-green rounded-l-2xl border-2 border-green content-center justify-center" onClick={() => addDice(2)}><Two text="2" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(4)}><Four text="4" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(6)}><Six text="6" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(8)}><Eight text="8" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(10)}><Ten text="10" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(12)}><Twelve text="12" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green content-center" onClick={() => addDice(20)}><Twenty text="20" /></div>
          <div className="bg-emerald py-1 text-green border-2 border-green rounded-r-2xl content-center" onClick={() => addDice(100)}><Two text="100" /></div>
          
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
            <div className="text-left text-2xl bg-green text-emerald rounded-lg px-2 py-4">Total: </div>
          </div>

          <div className="col-span-8">
            <hr className="h-px my-4 bg-green border-0"></hr>
          </div>

          <div className="col-span-8">
            <h1>Previous:</h1>
            <div className="text-left text-2xl bg-green text-emerald rounded-lg px-2 py-4">Total: </div>
          </div>

          <div className="col-span-4">mod: {modifier}</div>
          <div className="col-span-4">num: {numberOfDice}</div>
        </div>
      </main>
  );
}
