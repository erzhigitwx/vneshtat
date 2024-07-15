import ChairVioletImg from "@/assets/icons/chairs/chair-violet.svg?react";
import ChairOrangeImg from "@/assets/icons/chairs/chair-orange.svg?react";
import StarImg from "@/assets/icons/stars.svg?react";
import PawImg from "@/assets/icons/paw.svg?react";
import BackCannotImg from "@/assets/icons/back-cannot.svg?react";
import InvalidImg from "@/assets/icons/invalid.svg?react";
import {Toggler} from "@/shared/UI";
import {useState} from "react";
import {Weign} from "@/shared/UI/weign/weign";

const JourneyTicketBody = () => {
    const [allWeign, setAllWeign] = useState(false);
    const [byMoving, setByMoving] = useState(false);
    const [activeWeign, setActiveWeign] = useState(0);

    return (
        <>
            <hr className={"w-full h-[1px] rounded bg-[#c0c7d1] mt-5"}/>
            <div className={"flex flex-row items-start justify-between"}>
                <div className={"flex flex-col gap-2.5"}>
                    <div className={"flex items-center gap-2.5"}>
                        <Toggler isSelected={allWeign} setter={setAllWeign}/>
                        <p className={"text-xs text-[#787b86]"}>Показать все вагоны каскадом</p>
                    </div>
                    <div className={"flex items-center gap-2.5"}>
                        <Toggler isSelected={byMoving} setter={setByMoving}/>
                        <p className={"text-xs text-[#787b86]"}>Показать места по ходу движения</p>
                    </div>
                </div>
                <div className={"flex gap-4"}>
                                <span className={"flex items-center gap-0.5"}>
                                    <ChairVioletImg/>
                                    <p className={"text-xs text-[#787b86]"}>Свободное</p>
                                </span>
                    <span className={"flex items-center gap-0.5"}>
                                    <ChairVioletImg className={"opacity-40"}/>
                                    <p className={"text-xs text-[#787b86]"}>Занятое</p>
                                </span>
                    <span className={"flex items-center gap-0.5"}>
                                    <ChairOrangeImg/>
                                    <p className={"text-xs text-[#787b86]"}>Выбранное</p>
                                </span>
                </div>
            </div>
            <div className={"flex items-center gap-1.5"}>
                {Array.from({length: 5}).map((_, i) => (
                    <button
                        className={`py-2.5 px-8 bg-[#dce0e5] rounded-primary ${activeWeign === i && "!bg-[#bfbefc]"}`}
                        onClick={() => setActiveWeign(i)}
                        key={i}>
                        {i + 1} вагон
                    </button>
                ))}
            </div>
            <div className={"flex flex-col gap-1"}>
                <p className={"text-xs text-[#787b86]"}>48 мест</p>
                <p className={"text-xs text-[#787b86]"}>Класс - ЗЭ, Перевозчик - ФПК</p>
            </div>
            <div className={"flex justify-center"}>
                <Weign/>
            </div>
            <div className={"flex justify-end gap-2.5"}>
                <button className={"p-2 w-9 h-9 flex justify-center items-center bg-primary rounded-secondary"}>
                    <StarImg/>
                </button>
                <button className={"p-2 w-9 h-9 flex justify-center items-center bg-primary rounded-secondary"}>
                    <PawImg/>
                </button>
                <button className={"p-2 w-9 h-9 flex justify-center items-center bg-primary rounded-secondary"}>
                    <BackCannotImg/>
                </button>
                <button className={"p-2 w-9 h-9 flex justify-center items-center bg-primary rounded-secondary"}>
                    <InvalidImg className={"grey-fill"}/>
                </button>
                <button className={"py-2 h-9 px-8 bg-primary rounded-secondary"}>
                    <h6 className={"text-base"}>от 988 ₽</h6>
                </button>
            </div>
        </>
    )
};

export {JourneyTicketBody};