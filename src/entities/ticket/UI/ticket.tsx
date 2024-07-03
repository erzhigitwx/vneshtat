import HeartImg from "@/assets/icons/heart.svg?react";
import CopyImg from "@/assets/icons/copy.svg?react";
import TrainImg from "@/assets/icons/train.svg?react";
import MessageImg from "@/assets/icons/message.svg?react";
import StarImg from "@/assets/icons/star.svg?react";
import PawImg from "@/assets/icons/paw.svg?react";
import BackCannotImg from "@/assets/icons/back-cannot.svg?react";
import InvalidImg from "@/assets/icons/invalid.svg?react";
import SuitcaseImg from "@/assets/icons/suitcase.svg?react";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {TicketBody} from "@/entities/ticket/UI/ticket-body";
import {ticketOptionsMock} from "@/widgets/journey-operations/utils";

interface TicketOptionsProps {
    options: TicketOption[];
    setter: Dispatch<SetStateAction<TicketOption[]>>
}

export interface TicketOption {
    id: number,
    title: string,
    count: number,
    fromPrice: string
    isSelected: boolean
}

const TicketOptions = ({options, setter}: TicketOptionsProps) => {
    const selectOption = (id: number) => {
        setter(prevOptions =>
            prevOptions.map(option =>
                option.id === id ? {...option, isSelected: !option.isSelected} : option
            )
        );
    };

    return (
        <div className={"flex flex-col gap-2.5"}>
            {options.map(item => (
                <div
                    className={`py-1 pr-1 pl-2.5 transition ${item.isSelected ? "bg-black" : "bg-primary"} flex items-center justify-between h-9 gap-2.5 rounded-primary`}
                    onClick={() => selectOption(item.id)}
                    key={item.id}>
                    <div className={"w-full flex justify-between items-center gap-5"}>
                        <p className={`text-xs font-medium ${item.isSelected ? "text-primary" : "text-black"}`}>{item.title}</p>
                        {item.count ? (
                            <p className={"text-xs font-medium text-[#787b86]"}>{item.count}</p>
                        ) : (
                            <p className={"text-xs font-medium text-[#787b86] mr-2.5"}>Мест нет</p>
                        )}
                    </div>
                    {item.count ? (
                        <div
                            className={`rounded-secondary  min-w-[100px] py-2  flex justify-center items-center ${item.isSelected ? "bg-primary" : "bg-black"}`}>
                            <p className={`text-xs font-medium ${item.isSelected ? "text-black" : "text-primary"}`}>от {item.fromPrice}₽</p>
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    )
}

const Ticket = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [delayedText, setDelayedText] = useState("Показать маршрут");
    const [ticketOptions, setTicketOptions] = useState(ticketOptionsMock)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDelayedText(isOpen ? "Скрыть маршрут" : "Показать маршрут");
        }, 200);

        return () => clearTimeout(timeoutId);
    }, [isOpen]);

    return (
        <div className={"flex flex-row gap-5"}>
            <div className={"flex flex-col gap-2.5 mt-12"}>
                <button className={"rounded-secondary p-2 flex justify-center bg-secondary"}>
                    <CopyImg className={"max-h-5 max-w-5"}/>
                </button>
                <button className={"rounded-secondary p-2 flex justify-center bg-secondary"}>
                    <HeartImg className={"max-h-5 max-w-5"}/>
                </button>
                <button className={"rounded-secondary p-2 flex justify-center bg-secondary"}>
                    <MessageImg className={"max-h-5 max-w-5"}/>
                </button>
            </div>
            <div className={`w-full flex flex-col bg-secondary rounded-[38px] px-6 ${isOpen ? "py-5" : "pt-5"} gap-5`}>
                <div className={`flex gap-7`}>
                    <div className={"w-full flex flex-col gap-2.5"}>
                        <div className={"flex items-center gap-2.5"}>
                            <button className={"p-1 bg-[#bdbfc7] rounded-[100%]"}>
                                <TrainImg className={"white-fill"}/>
                            </button>
                            <h1 className={"text-2xl"}>016А</h1>
                        </div>
                        <div className={"flex gap-6"}>
                            <div className={"flex flex-col"}>
                                <h1 className={"text-2xl"}>18:55</h1>
                                <h4 className={"text-sm"}>21.09 пн</h4>
                            </div>
                            <div className={"w-full flex flex-col gap-1"}>
                                <p className={"text-xs font-medium text-center"}>в пути 2 ч 50 мин </p>
                                <hr className={"w-full rounded-[5px] h-1.5 bg-[#c0c7d1]"}/>
                                <p className={"text-xs text-[#787b86] text-center"}>Стоянка: 20 мин</p>
                            </div>
                            <div className={"flex flex-col"}>
                                <h1 className={"text-2xl text-end"}>20:35</h1>
                                <h4 className={"text-sm text-end"}>21.09 пн</h4>
                            </div>
                        </div>
                        <div className={"flex justify-between items-center"}>
                        <span className={"flex flex-col gap-1.5"}>
                            <p className={"text-xs text-[#787b86]"}>Ленинградский вокзал</p>
                            <p className={"text-xs text-[#787b86]"}>Москва Октябрьская</p>
                        </span>
                            <span className={"flex flex-col gap-1.5"}>
                            <p className={"text-xs text-[#787b86] text-end"}>Санкт-Петербург Главный</p>
                            <p className={"text-xs text-[#787b86] text-end"}>Московский вокзал</p>
                        </span>
                        </div>
                        <div className={"flex items-center justify-between"}>
                            <button onClick={() => setIsOpen(prev => !prev)}
                                    className={"py-2.5 px-6 bg-[#dce0e5] rounded-primary"}>
                                <p className={"text-base"}>{delayedText}</p>
                            </button>
                            <div className={"flex gap-2.5"}>
                                <button className={"p-2 bg-primary rounded-secondary"}>
                                    <StarImg/>
                                </button>
                                <button className={"p-2 bg-primary rounded-secondary"}>
                                    <PawImg/>
                                </button>
                                <button className={"p-2 bg-primary rounded-secondary"}>
                                    <BackCannotImg/>
                                </button>
                                <button className={"p-2 bg-primary rounded-secondary"}>
                                    <InvalidImg/>
                                </button>
                                <button className={"p-2 bg-primary rounded-secondary"}>
                                    <SuitcaseImg/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <TicketOptions options={ticketOptions} setter={setTicketOptions}/>
                </div>
                <div
                    className={`transition-max-height flex flex-col gap-5 duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}
                >
                    <TicketBody/>
                </div>
            </div>
        </div>
    )
};

export {Ticket};