"use client";

import { useState } from "react";
import { IDiceRoll } from "./_models/IDiceRoll";
import Stepper, { IStepperProps } from "./_components/Stepper/Stepper";
import Die from "./_components/Die/Die";
import Panel from "./_components/Panel/Panel";
import { randomKey } from "./utils/utils";

export default function Home() {
  const [history, setHistory] = useState<IDiceRoll[][]>([]);
  const [currentRoll, setCurrentRoll] = useState<IDiceRoll[]>([]);
  const [modifier, setModifier] = useState<number>(0);
  const [numberOfDice, setNumberOfDice] = useState<number>(1);

  const modifierMin = -20;
  const modifierMax = 100;
  const numberOfDiceMax = 20;
  const totalDiceMax = 20;

  const modifierOnChange = (value: number) => {
    if (value < modifierMin || value > modifierMax) {
      return;
    }

    setModifier(value);
  };

  const numberOfDiceOnChange = (value: number) => {
    if (value < 1 || value > numberOfDiceMax) {
      return;
    }

    setNumberOfDice(value);
  };

  const modifierProps: IStepperProps = {
    onChange: modifierOnChange,
    label: "Modifier",
    value: modifier,
    min: modifierMin,
    max: modifierMax,
  };

  const diceNumberProps: IStepperProps = {
    onChange: numberOfDiceOnChange,
    label: "Number",
    value: numberOfDice,
    min: 1,
    max: numberOfDiceMax,
  };

  function handleClear() {
    setCurrentRoll([]);
    setModifier(0);
    setNumberOfDice(1);
  }

  function rollDice() {
    if (currentRoll) {
      const duration = (Math.floor(Math.random() * 4) + 1) * 1000;
      const started = new Date().getTime();

      const animationTimer = setInterval(() => {
        const newCurrentRoll = [...currentRoll];
        for (let i = 0; i < currentRoll?.length; i++) {
          const numbers = shuffle(
            [...Array(currentRoll[i].die + 1).keys()].slice(1),
          );

          if (new Date().getTime() - started > duration) {
            const final = numbers[Math.floor(Math.random() * numbers.length)];
            newCurrentRoll[i].rolled = final;

            if (i === currentRoll.length - 1) {
              setHistory([...history, [...newCurrentRoll]]);
            }

            clearInterval(animationTimer);
          } else {
            const temp = numbers[Math.floor(Math.random() * numbers.length)];
            newCurrentRoll[i].rolled = temp;
          }
        }
        setCurrentRoll(newCurrentRoll);
      }, 100);
    }
  }

  function addDice(type: number) {
    if (
      currentRoll.length > totalDiceMax ||
      numberOfDice + currentRoll.length > totalDiceMax
    ) {
      alert(`Cannot add more than ${totalDiceMax} dice at once`);
      return;
    }

    const key = randomKey();
    const die = {
      key: key,
      die: type,
      rolled: 0,
      modifier: modifier,
    } as IDiceRoll;
    const diceArray = Array(numberOfDice)
      .fill(die)
      .map((die) => {
        return { ...die, key: randomKey() };
      });

    if (currentRoll) setCurrentRoll([...currentRoll, ...diceArray]);
    else setCurrentRoll([...diceArray]);
  }

  function removeDie(key: string) {
    setCurrentRoll(
      currentRoll.filter(function (die) {
        return die.key !== key;
      }),
    );
  }

  function shuffle(array: number[]) {
    let currentIndex = array.length;
    const arrayCopy = [...array];

    while (currentIndex != 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
        arrayCopy[randomIndex],
        arrayCopy[currentIndex],
      ];
    }
    return arrayCopy;
  }

  return (
    <main>
      <div className="app ml-1 mr-6">
        <div className="grid grid-cols-8 font-[family-name:var(--font-geist-sans)] p-4 gap-y-4 max-w-5xl mx-auto">
          <div
            className="bg-emerald py-1 text-green rounded-l-2xl border-2 border-green content-center justify-center"
            onClick={() => addDice(2)}
          >
            <span className="flex items-center justify-center">
              <Die dieNumber={2} displayNumber={2} id="2" />
            </span>
          </div>
          <div
            className="bg-emerald py-1 text-green border-2 border-green content-center"
            onClick={() => addDice(4)}
          >
            <span className="flex items-center justify-center">
              <Die dieNumber={4} displayNumber={4} id="4" />
            </span>
          </div>
          <div
            className="bg-emerald py-1 text-green border-2 border-green content-center"
            onClick={() => addDice(6)}
          >
            <span className="flex items-center justify-center">
              <Die dieNumber={6} displayNumber={6} id="6" />
            </span>
          </div>
          <div
            className="bg-emerald py-1 text-green border-2 border-green content-center"
            onClick={() => addDice(8)}
          >
            <span className="flex items-center justify-center">
              <Die dieNumber={8} displayNumber={8} id="8" />
            </span>
          </div>
          <div
            className="bg-emerald py-1 text-green border-2 border-green content-center"
            onClick={() => addDice(10)}
          >
            <span className="flex items-center justify-center">
              <Die dieNumber={10} displayNumber={10} id="10" />
            </span>
          </div>
          <div
            className="bg-emerald py-1 text-green border-2 border-green content-center"
            onClick={() => addDice(12)}
          >
            <span className="flex items-center justify-center">
              <Die dieNumber={12} displayNumber={12} id="12" />
            </span>
          </div>
          <div
            className="bg-emerald py-1 text-green border-2 border-green content-center"
            onClick={() => addDice(20)}
          >
            <span className="flex items-center justify-center">
              <Die dieNumber={20} displayNumber={20} id="20" />
            </span>
          </div>
          <div
            className="bg-emerald py-1 text-green border-2 border-green rounded-r-2xl content-center"
            onClick={() => addDice(100)}
          >
            <span className="flex items-center justify-center">
              <Die dieNumber={100} displayNumber={100} id="100" />
            </span>
          </div>

          <div className="col-span-4 pr-2">
            <Stepper {...modifierProps}></Stepper>
          </div>

          <div className="col-span-4 pl-2">
            <Stepper {...diceNumberProps}></Stepper>
          </div>

          <div className="col-span-4">
            <button
              className="bg-green text-white py-2 px-4 rounded-full w-full mr-2"
              onClick={rollDice}
            >
              roll
            </button>
          </div>
          <div className="col-span-4">
            <button
              className="bg-green text-white py-2 px-4 rounded-full w-full ml-2"
              onClick={handleClear}
            >
              clear
            </button>
          </div>

          <div className="col-span-8">
            <hr className="h-px my-4 bg-green border-0"></hr>
          </div>

          <div className="col-span-8">
            <h1>Current:</h1>
          </div>

          {currentRoll.map((data) => {
            return (
              <Die
                key={data.key}
                id={data.key}
                dieNumber={data.die}
                displayNumber={data.rolled}
                modifier={data.modifier}
                removeDie={() => removeDie(data.key)}
              />
            );
          })}
          <div className="col-span-8">
            <div className="text-left text-2xl bg-green text-emerald rounded-lg px-2 py-4">
              Total:{" "}
              {currentRoll.reduce(
                (n, { rolled, modifier }) => n + rolled + modifier,
                0,
              )}
            </div>
          </div>
        </div>
        <Panel history={history} />
      </div>
    </main>
  );
}
