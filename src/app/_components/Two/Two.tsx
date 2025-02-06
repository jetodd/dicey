import { IDiceProps } from "@/app/_models/IDiceProps";

export default function Two({
  text = '',
  color = '#4caa89'
}: IDiceProps) {
  return (
    <span className="flex items-center justify-center">
      <svg width="32" height="32">
          <circle x="0" y="0" cy="16" cx="16" r="16" fill={color} />
          <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{text}</text>
      </svg>
    </span>
  )
}
