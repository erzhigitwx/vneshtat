import {ReactNode, useState} from "react";
import EraserImg from "@/assets/icons/eraser.svg?react";
import ArrowImg from "@/assets/icons/arrow-top.svg?react";

interface JourneyDropdownProps {
    isChanged: boolean,
    title: string,
    onErase: () => void,
    children: ReactNode
}

const JourneyDropdown = ({isChanged, onErase, title, children}: JourneyDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`p-3 rounded-[23px] bg-secondary flex flex-col cursor-pointer`}>
            <div className={"flex flex-row justify-between items-center"} onClick={() => setIsOpen(prev => !prev)}>
                <div className={"flex flex-row gap-1"}>
                    {isChanged && <span className={"h-[5px] w-[5px] rounded-[100%] bg-red"}/>}
                    <h6 className={"text-base font-medium whitespace-nowrap"}>{title}</h6>
                    {isChanged && (
                        <button onClick={(e) => {
                            e.stopPropagation();
                            onErase();
                        }}>
                            <EraserImg/>
                        </button>
                    )}
                </div>
                <button>
                    <ArrowImg className={`transform transition-transform duration-300 ${!isOpen ? "rotate-180" : ""}`}/>
                </button>
            </div>
            <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen mt-2.5" : "max-h-0 mt-0"}`}
            >
                {children}
            </div>
        </div>
    )
};

export {JourneyDropdown};