import { IDiceProps } from "@/app/_models/IDiceProps";

export default function Die({
    color = '#4caa89',
    dieNumber = 0,
    displayNumber = 0,
}: IDiceProps) {
    const renderDieSelection = () => {
        switch (dieNumber) {
            case 2:
            case 100:
                return <svg width="32" height="32">
                    <circle x="0" y="0" cy="16" cx="16" r="16" fill={color} />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{displayNumber !== 0 ? displayNumber : ''}</text>
                </svg>
            case 20:
                return <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 36 36">
                        <polygon points="33.6,9 33.6,27 18,36 2.4,27 2.4,9 18,0 33.6,9" fill={color} />
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{displayNumber !== 0 ? displayNumber : ''}</text>
                    </svg>;
            case 4:
                return <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 36 36">
                        <polygon points="18 3, 33 33, 0 33"  fill="#4caa89"/>
                        <text x="45%" y="65%" dominantBaseline="middle" textAnchor="middle" fill="white">{displayNumber !== 0 ? displayNumber : ''}</text>
                    </svg>;
            case 6:
                return <svg width="28" height="28">
                        <rect x="0" y="0" width="28" height="28" fill={color} />
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{displayNumber !== 0 ? displayNumber : ''}</text>
                    </svg>;
            case 8:
                return <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 36 36">
                        <polygon points="0 18,18 36,36 18,18 0" fill={color} />
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{displayNumber !== 0 ? displayNumber : ''}</text>
                    </svg>;
            case 10:
                return <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 36 36">
                        <polygon points="33,16 33,22 18,32 2,22 2,14 18,4 33,14" fill={color} />
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{displayNumber !== 0 ? displayNumber : ''}</text>
                    </svg>;
            case 12:
                return <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 36 36">
                        <polygon points="36 18,32.6 28.6,23.61 35.1,12.4 35.1,3.4 28.6,0 18,3.4 7.4,12.4 0.9,23.6 0.9,32.6 7.4" fill={color} />
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">{displayNumber !== 0 ? displayNumber : ''}</text>
                    </svg>;
            default:
                return null;
        }
    };

    return (
        <div className="content-center">
            {renderDieSelection()}
        </div>
    )
}
