import {useState} from "react";
import {TicketOptions} from "@/shared/UI";
import {TicketOption} from "@/shared/types";

const BusTicket = () => {
    const [ticketOptions, setTicketOptions] = useState<TicketOption[]>([{
        id: 1,
        title: "Осталось",
        isSelected: false,
        count: 15,
        fromPrice: "1200"
    }])

    return (
        <div
            className={`w-full flex flex-col bg-secondary rounded-[23px] p-5`}>
            <div className={`flex gap-7`}>
                <div className={"w-full flex flex-col gap-2.5"}>
                    <div className={"flex gap-6"}>
                        <div className={"flex flex-col"}>
                            <h1 className={"text-2xl"}>18:55</h1>
                            <h4 className={"text-sm"}>21.09 пн</h4>
                        </div>
                        <div className={"w-full flex flex-col gap-1"}>
                            <div className={"flex items-center justify-center gap-1"}>
                                <p className={"text-xs font-medium"}>в пути 10 ч</p>
                                <p className={"text-xs font-medium text-[#787B86]"}>ООО “Беркут”</p>
                            </div>
                            <hr className={"w-full rounded-[5px] h-1.5 bg-[#c0c7d1]"}/>
                            <div className={"flex flex-col gap-1"}>
                                <span className={"flex items-start justify-between"}>
                                    <p className={"text-xs text-[#787b86]"}>Санкт-Петербург</p>
                                    <p className={"text-xs text-[#787b86]"}>Москва</p>
                                </span>
                                <span className={"flex items-start justify-between"}>
                                    <p className={"text-xs text-[#787b86]"}>Автовокзал "Обводный"</p>
                                    <p className={"text-xs text-[#787b86]"}>Международный автовокзал "Северные Ворота"</p>
                                </span>
                            </div>
                        </div>
                        <div className={"flex flex-col"}>
                            <h1 className={"text-2xl text-end"}>20:35</h1>
                            <h4 className={"text-sm text-end"}>21.09 пн</h4>
                        </div>
                    </div>
                </div>
                <TicketOptions options={ticketOptions} setter={setTicketOptions}/>
            </div>
        </div>
    )
};

export {BusTicket};