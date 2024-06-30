import ChairVioletImg from "@/assets/icons/chairs/chair-violet.svg?react";
import ChairBlueImg from "@/assets/icons/chairs/chair-blue.svg?react";
import ChairOrangeImg from "@/assets/icons/chairs/chair-orange.svg?react";
import ChairAlphaImg from "@/assets/icons/chairs/chair-alpha.svg?react";
import ChairCheapImg from "@/assets/icons/chairs/chair-cheap.svg?react";
import StarImg from "@/assets/icons/star.svg?react";
import PawImg from "@/assets/icons/paw.svg?react";
import BackCannotImg from "@/assets/icons/back-cannot.svg?react";
import InvalidImg from "@/assets/icons/invalid.svg?react";
import {Toggler} from "@/shared/UI";
import {useState} from "react";

const TicketBody = () => {
    const [allWeign, setAllWeign] = useState(false);
    const [isCheapest, setIsCheapest] = useState(false);
    const [activeWeign, setActiveWeign] = useState(0);

    return (
        <>
            <hr className={"w-full h-[1px] rounded bg-[#c0c7d1]"}/>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-col gap-2.5"}>
                    <div className={"flex items-center gap-2.5"}>
                        <Toggler isSelected={allWeign} setter={setAllWeign}/>
                        <p className={"text-xs text-[#787b86]"}>Показать все вагоны каскадом</p>
                    </div>
                    <div className={"flex items-center gap-2.5"}>
                        <Toggler isSelected={isCheapest} setter={setIsCheapest}/>
                        <p className={"text-xs text-[#787b86]"}>Подсветить самые дешевые места</p>
                    </div>
                </div>

                <div className={"flex flex-wrap gap-4 w-[280px]"}>
                                <span className={"flex items-center gap-0.5"}>
                                    <ChairVioletImg/>
                                    <p className={"text-xs text-[#787b86]"}>Свободное</p>
                                </span>
                    <span className={"flex items-center gap-0.5"}>
                                    <ChairAlphaImg/>
                                    <p className={"text-xs text-[#787b86]"}>Занятое</p>
                                </span>
                    <span className={"flex items-center gap-0.5"}>
                                    <ChairOrangeImg/>
                                    <p className={"text-xs text-[#787b86]"}>Выбранное</p>
                                </span>
                    <span className={"flex items-center gap-0.5"}>
                                    <ChairBlueImg/>
                                    <p className={"text-xs text-[#787b86]"}>Невозвратное</p>
                                </span>
                    <span className={"flex items-center gap-0.5"}>
                                    <ChairCheapImg/>
                                    <p className={"text-xs text-[#787b86]"}>Дешевое</p>
                                </span>
                </div>
            </div>
            <div className={"flex items-center gap-1.5"}>
                {Array.from({length: 5}).map((_, i) => (
                    <button
                        className={`py-2.5 px-8 bg-[#dce0e5] rounded-primary ${activeWeign === i && "!bg-[#bfbefc]"}`}
                        onClick={() => setActiveWeign(i)}>
                        {i + 1} вагон
                    </button>
                ))}
            </div>
            <div className={"flex flex-col gap-1"}>
                <p className={"text-xs text-[#787b86]"}>48 мест</p>
                <p className={"text-xs text-[#787b86]"}>Класс - ЗЭ, Перевозчик - ФПК</p>
            </div>
            <div className={"flex justify-end gap-2.5"}>
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
                    <InvalidImg className={"grey-fill"}/>
                </button>
                <button className={"py-2 px-8 bg-primary rounded-secondary"}>
                    <h6 className={"text-base"}>от 988 ₽</h6>
                </button>
            </div>
        </>
    )
};

export {TicketBody};