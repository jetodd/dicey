import { IDiceProps } from "@/app/_models/IDiceProps";

export default function Twelve({
    text = '',
    color = '#4caa89'
}: IDiceProps) {
    return (
        <span className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 36 36">
                <polygon points="36 18,32.6 28.6,23.61 35.1,12.4 35.1,3.4 28.6,0 18,3.4 7.4,12.4 0.9,23.6 0.9,32.6 7.4" fill={color} />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{text}</text>
            </svg>
        </span>
    )
}
