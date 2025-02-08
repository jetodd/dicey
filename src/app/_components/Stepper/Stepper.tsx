export interface IStepperProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
}

export default function Stepper({
  label,
  value,
  onChange,
  min,
  max,
}: IStepperProps) {
  return (
    <div className="custom-number-input">
      <label htmlFor="custom-input-number">{label}</label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          className="bg-emerald text-green hover:text-white hover:bg-green h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={() => onChange(value - 1)}
        >
          <span className="m-auto text-2xl">−</span>
        </button>

        <input
          type="number"
          className="outline-none focus:outline-none text-center w-full bg-emerald hover:text-white focus:text-white md:text-basecursor-default flex items-center text-green"
          name="custom-input-number"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
        ></input>

        <button
          className="bg-emerald text-green hover:text-white hover:bg-green h-full w-20 rounded-r cursor-pointer"
          onClick={() => onChange(value + 1)}
        >
          <span className="m-auto text-2xl">+</span>
        </button>
      </div>
    </div>
  );
}
