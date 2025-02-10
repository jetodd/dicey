import { IDiceRoll, IDiceRollSummary } from "@/app/_models/IDiceRoll";
import Result from "../Result/Result";
import useComponentVisible from "@/app/_hooks/useComponentVisible";
import { randomKey } from "@/app/utils/utils";

export interface IPanelProps {
  history: IDiceRoll[][];
}

export default function Panel({ history }: IPanelProps) {
  console.log(history);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const rollsSummary: IDiceRollSummary[][] = [];

  const togglePanel = () => {
    const newValue = !isComponentVisible;
    setIsComponentVisible(newValue);

    if (newValue) {
      loadSummary();
    }
  };

  function loadSummary() {
    // const result = rolls.map(roll => {
    //   const grouped = Object.groupBy(roll, ({ die }) => die)
    //   for (const [key, value] of Object.entries(grouped)) {
    //     const newGrouped = Object.groupBy(value!, ({ modifier }) => modifier)
    //     console.log(newGrouped)
    //   }
    //   return Object.groupBy(roll, ({ die }) => die)
    // });
  }

  // const rolls: IDiceRoll[][] = [
  //   [
  //     { die: 6, rolled: 4, modifier: 2, key: "sdfdsf" },
  //     { die: 6, rolled: 2, modifier: 1, key: "sdwerw" },
  //     { die: 6, rolled: 5, modifier: 2, key: "uiyioo" },
  //     { die: 8, rolled: 1, modifier: 2, key: "mnbmmb" },
  //   ],
  //   [{ die: 6, rolled: 4, modifier: 2, key: "zxcvcz" }],
  // ];

  return (
    <div
      ref={ref}
      className={
        "absolute h-full right-0 top-0 bg-green text-emerald " +
        (isComponentVisible ? "w-3/4" : "w-[20px]") +
        " max-w-lg transition-all duration-500 ease-in-out transform h-fill"
      }
    >
      <aside>
        {isComponentVisible && (
          <div className="px-6 py-2 overflow-y-auto h-dvh">
            <span className="text-xl text-white">History</span>

            {rollsSummary.map((data) => {
              return <Result key={randomKey()} rolls={data} />;
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
          {isComponentVisible ? "-" : "+"}
        </button>
      </div>
    </div>
  );
}
