import {InputDateProps} from "./input-date.props";
import CalendarImg from "@/assets/icons/calendar.svg?react";
import {useEffect, useRef, useState} from "react";
import {Calendar} from "@/shared/UI";
import {formatDate, getDayOfWeek} from "@/shared/utils";
import {useClickAway} from "@/shared/hooks/use-click-away";

const InputDate = ({extraClass, extraCalendarClass, inputValue, setter, isShortDate = false, withIcon = true, calendarOpt, placeholder, ...rest}: InputDateProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    useClickAway(containerRef, () => setIsOpen(false))

    useEffect(() => {
        if(inputValue) setIsOpen(false)
    }, [inputValue])

    const renderDate = (date: Date) => {
        try {
            return isShortDate ? (
                <div className="flex items-center gap-1" key={date.toISOString()}>
                    <p className="text-sm leading-none">{formatDate(date, true)},</p>
                    <p className="text-sm leading-none">{getDayOfWeek(date, true)}</p>
                </div>
            ) : (
                <div className="flex items-center gap-1" key={date.toISOString()}>
                    <p className="text-xs leading-none">{formatDate(date)}</p>
                    <p className="text-xs leading-none text-[#787B86]">{getDayOfWeek(date)}</p>
                </div>
            )
        } catch (e) {
            return null;
        }
    };

    return (
        <div className={`flex flex-col min-h-7`} ref={containerRef} {...rest}>
            <label className="relative flex justify-end items-center w-full cursor-pointer">
                <div className={`w-full bg-secondary flex items-center rounded-primary text-sm py-2 px-2.5 ${extraClass}`} onClick={() => setIsOpen(prev => !prev)}>
                    {inputValue && Array.isArray(inputValue) && inputValue.length > 0 ? (
                        inputValue.map(renderDate)
                    ) : inputValue && !Array.isArray(inputValue) ? (
                        renderDate(inputValue)
                    ) : (
                        <p className="text-xs text-[#787B86]">{placeholder}</p>
                    )}
                </div>
                {withIcon ? (
                    <button className="absolute pr-1.5" onClick={() => setIsOpen(prev => !prev)}>
                        <CalendarImg className="w-[24px] h-[24px]" />
                    </button>
                ) : null}
            </label>
            {isOpen && (
                <div
                    className={`absolute rounded-[23px] p-5 -translate-x-[35%] top-[250px] z-50 ${extraCalendarClass}`}
                    style={{
                        background: "rgba(245, 245, 245, 0.82)",
                        boxShadow: "0px 4px 6.5px 0px rgba(0, 0, 0, 0.04)",
                        backdropFilter: "blur(4.849999904632568px)"
                    }}
                >
                    <Calendar value={inputValue} setter={setter} {...calendarOpt} />
                </div>
            )}
        </div>
    )
};

export {InputDate};