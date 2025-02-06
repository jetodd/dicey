import { IDiceProps } from "@/app/_models/IDiceProps";

export default function Four({
    text = ''
}: IDiceProps) {
    return (
        <span className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 36 36">
                <polygon points="18 3, 33 33, 0 33"  fill="#4caa89"/>
                <text x="45%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="white">{text}</text>
            </svg>
        </span>
    )
}
