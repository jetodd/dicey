import { IDiceRoll } from "@/app/_models/IDiceRoll";
import { useState } from "react"

export interface IPanelProps {
    history: IDiceRoll[],
}

export default function Panel({
   history,
}: IPanelProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const togglePanel = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={"absolute h-full right-0 top-0 bg-green text-emerald " + (isExpanded ? 'w-3/4' : 'w-[20px]') + " max-w-lg transition-all duration-500 ease-in-out transform h-fill"}>
            <aside>
                {isExpanded && (
                    <div className="px-6 py-2 overflow-y-auto h-dvh">
                        <span className="text-xl text-white">History</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare in nisi at varius. Nunc fermentum ex non dolor eleifend tincidunt. Nulla hendrerit mauris id pellentesque congue. Maecenas id ultrices odio. Morbi in quam rutrum erat dapibus aliquam. Mauris rhoncus ullamcorper tellus lobortis rutrum. Curabitur dictum quam in molestie pretium. In id nunc eu turpis venenatis rhoncus et eu tellus.</p>
                        <p>Fusce lobortis elementum vulputate. Proin auctor odio eget massa ultrices posuere. Nam ac nisi rhoncus, gravida sem at, euismod tellus. Sed lacinia efficitur ornare. Suspendisse sit amet consequat ex, quis imperdiet lacus. Pellentesque sed porttitor justo. Aenean viverra ultricies diam, at tincidunt quam convallis tempor. Vestibulum in orci at diam tempor viverra. Vestibulum sed leo et quam faucibus semper. Nulla quis arcu ac lorem fermentum mattis nec vitae dolor. Nullam massa libero, pulvinar at auctor ut, laoreet a sem. Donec quis enim orci. Curabitur ac nulla massa.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare in nisi at varius. Nunc fermentum ex non dolor eleifend tincidunt. Nulla hendrerit mauris id pellentesque congue. Maecenas id ultrices odio. Morbi in quam rutrum erat dapibus aliquam. Mauris rhoncus ullamcorper tellus lobortis rutrum. Curabitur dictum quam in molestie pretium. In id nunc eu turpis venenatis rhoncus et eu tellus.</p>
                        <p>Fusce lobortis elementum vulputate. Proin auctor odio eget massa ultrices posuere. Nam ac nisi rhoncus, gravida sem at, euismod tellus. Sed lacinia efficitur ornare. Suspendisse sit amet consequat ex, quis imperdiet lacus. Pellentesque sed porttitor justo. Aenean viverra ultricies diam, at tincidunt quam convallis tempor. Vestibulum in orci at diam tempor viverra. Vestibulum sed leo et quam faucibus semper. Nulla quis arcu ac lorem fermentum mattis nec vitae dolor. Nullam massa libero, pulvinar at auctor ut, laoreet a sem. Donec quis enim orci. Curabitur ac nulla massa.</p>
                    </div>
                )}
            </aside>
            <div>
                <button 
                    type="button" 
                    onClick={togglePanel}
                    className="fixed bottom-32 left-[-12px] flex h-6 w-6 items-center justify-center rounded-full bg-white"
                >
                {isExpanded ? '-' : '+'}
                </button>
            </div>
        </div>
    )
}
