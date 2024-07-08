import React, {Dispatch, SetStateAction} from "react";
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
                <React.Fragment key={item.id}>
                    {item.count ? (
                        <div
                            className={`py-1 pr-1 pl-2.5 transition ${item.isSelected ? "bg-black" : "bg-primary"} flex items-center justify-between h-9 gap-2.5 rounded-primary cursor-pointer`}
                            onClick={() => item.count && selectOption(item.id)}>
                            <div className={`w-full flex justify-between items-center gap-5`}>
                                <p className={`text-xs font-medium ${item.isSelected ? "text-primary" : "text-black"}`}>{item.title}</p>
                                <p className={"text-xs font-medium text-[#787b86]"}>{item.count}</p>
                            </div>
                            <div
                                className={`rounded-secondary  min-w-[100px] h-7 py-2 flex justify-center items-center ${item.isSelected ? "bg-primary" : "bg-black"}`}>
                                <p className={`text-xs font-medium whitespace-nowrap ${item.isSelected ? "text-black" : "text-primary"}`}>от {item.fromPrice}₽</p>
                            </div>
                        </div>
                    ) : (
                        <div
                            className={`transition flex items-center justify-between h-9 gap-2.5`}>
                            <div
                                className={`w-full h-full rounded-primary flex px-2.5 justify-between items-center bg-primary`}>
                                <p className={`text-xs font-medium`}>{item.title}</p>
                                <p className={"text-xs font-medium text-[#787b86]"}>Мест нет</p>
                            </div>
                            <button
                                className={"bg-black mr-1 h-9 min-w-9 flex justify-center items-center rounded-secondary p-2"}>
                                <RadarImg className={"white-fill"}/>
                            </button>
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}

export {TicketOptions}