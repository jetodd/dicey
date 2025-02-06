import { IDiceProps } from "@/app/_models/IDiceProps";

export default function Twenty({
    text = '',
    color = '#4caa89'
}: IDiceProps) {
    return (
        <span className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 36 36">
                <polygon points="33.6,9 33.6,27 18,36 2.4,27 2.4,9 18,0 33.6,9" fill={color} />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{text}</text>
            </svg>
        </span>
    )
}
