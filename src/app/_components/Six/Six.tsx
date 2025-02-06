import { IDiceProps } from "@/app/_models/IDiceProps";

export default function Six({
    text = '',
    color = '#4caa89'
}: IDiceProps) {
    return (
        <span className="flex items-center justify-center">
            <svg width="28" height="28">
                <rect x="0" y="0" width="28" height="28" fill={color} />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{text}</text>
            </svg>
        </span>
    )
}
