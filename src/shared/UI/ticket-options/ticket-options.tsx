import {Dispatch, SetStateAction} from "react";
import RadarImg from "@/assets/icons/radar.svg?react";
import {TicketOption} from "@/shared/types";

interface TicketOptionsProps {
    options: TicketOption[];
    setter: Dispatch<SetStateAction<TicketOption[]>>
}

const TicketOptions = ({options, setter}: TicketOptionsProps) => {
    const selectOption = (id: number) => {
        setter(prevOptions =>
            prevOptions.map(option => ({
                ...option,
                isSelected: option.id === id && !option.isSelected
            }))
        );
    };

    return (
        <div className={"flex flex-col gap-2.5"}>
            {options.map(item => (
                <>
                    {item.count ? (
                        <div
                            className={`pr-1 pl-2.5 transition ${item.isSelected ? "bg-black" : "bg-primary"} flex items-center justify-between h-9 gap-2.5 rounded-primary cursor-pointer`}
                            onClick={() => item.count && selectOption(item.id)}
                            key={item.id}>
                            <div className={`w-full flex justify-between items-center gap-5`}>
                                <p className={`text-xs font-medium ${item.isSelected ? "text-primary" : "text-black"}`}>{item.title}</p>
                                <p className={"text-xs font-medium text-[#787b86]"}>{item.count}</p>
                            </div>
                            <div
                                className={`rounded-secondary  min-w-[100px] py-2  flex justify-center items-center ${item.isSelected ? "bg-primary" : "bg-black"}`}>
                                <p className={`text-xs font-medium ${item.isSelected ? "text-black" : "text-primary"}`}>от {item.fromPrice}₽</p>
                            </div>
                        </div>
                    ) : (
                        <div
                            className={`transition flex items-center justify-between h-9 gap-2.5`}
                            key={item.id}>
                            <div
                                className={`w-full h-full rounded-primary flex pr-1 pl-2.5 justify-between items-center gap-5 bg-primary`}>
                                <p className={`text-xs font-medium`}>{item.title}</p>
                                <p className={"text-xs font-medium text-[#787b86] mr-2.5"}>Мест нет</p>
                            </div>
                            <button
                                className={"bg-black h-9 w-9 flex justify-center items-center rounded-secondary p-2"}>
                                <RadarImg className={"white-fill"}/>
                            </button>
                        </div>
                    )}
                </>
            ))}
        </div>
    )
}

export {TicketOptions}