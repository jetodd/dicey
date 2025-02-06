import { IDiceProps } from "@/app/_models/IDiceProps";

export default function Ten({
    text = '',
    color = '#4caa89'
}: IDiceProps) {
    return (
        <span className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 36 36">
                <polygon points="33,16 33,22 18,32 2,22 2,14 18,4 33,14" fill={color} />
                <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white">{text}</text>
            </svg>
        </span>
    )
}
