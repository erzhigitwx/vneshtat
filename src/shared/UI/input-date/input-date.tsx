import {InputDateProps} from "./input-date.props";
import CalendarImg from "@/assets/icons/calendar.svg?react";
import {useState} from "react";
import {Calendar} from "@/shared/UI";
import {formatDate, getDayOfWeek} from "@/shared/utils";

const InputDate = ({extraClass, inputValue, setter, calendarOpt, placeholder, ...rest}: InputDateProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`flex flex-col min-h-[30px] ${extraClass}`} {...rest}>
            <label className={"relative flex justify-end items-center w-full"}>
                <div className={"w-full bg-secondary rounded-primary text-sm py-2 px-2.5"}>
                    {inputValue ? (
                        <div className={"flex items-center gap-1"}>
                            <p className={"text-xs text-black"}>{formatDate(inputValue)}</p>
                            <p className={"text-xs text-[#787B86]"}>{getDayOfWeek(inputValue)}</p>
                        </div>
                    ) : (
                        <p className={"text-xs text-[#787B86]"}>{placeholder}</p>
                    )}
                </div>
                <button className={"absolute pr-1.5"} onClick={() => setIsOpen(prev => !prev)}>
                    <CalendarImg className={"w-[24px] h-[24px]"}/>
                </button>
            </label>
            {isOpen ? (
                <Calendar value={inputValue} setter={setter} {...calendarOpt} />
            ) : null}
        </div>
    )
};

export {InputDate};