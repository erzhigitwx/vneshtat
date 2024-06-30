import HeartImg from "@/assets/icons/heart.svg?react";
import CopyImg from "@/assets/icons/copy.svg?react";
import TrainImg from "@/assets/icons/train.svg?react";
import MessageImg from "@/assets/icons/message.svg?react";
import StarImg from "@/assets/icons/star.svg?react";
import PawImg from "@/assets/icons/paw.svg?react";
import BackCannotImg from "@/assets/icons/back-cannot.svg?react";
import InvalidImg from "@/assets/icons/invalid.svg?react";
import SuitcaseImg from "@/assets/icons/suitcase.svg?react";
import {useState} from "react";
import {TicketBody} from "@/entities/ticket/UI/ticket-body";

const Ticket = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"flex flex-row items-center gap-5"}>
            <div className={"flex flex-col gap-2.5 "}>
                <button className={"rounded-secondary p-2 bg-section"}>
                    <CopyImg className={"min-h-5 min-w-5"}/>
                </button>
                <button className={"rounded-secondary p-2 bg-section"}>
                    <HeartImg className={"min-h-5 min-w-5"}/>
                </button>
                <button className={"rounded-secondary p-2 bg-section"}>
                    <MessageImg className={"min-h-5 min-w-5"}/>
                </button>
            </div>
            <div className={"w-full flex flex-col bg-section rounded-[38px] px-6 py-5 gap-5"}>
                <div className={"flex gap-7"}>
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
                                <p className={"text-base"}>{isOpen ? "Закрыть маршрут" : "Показать маршрут"}</p>
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
                    <div className={"flex flex-col gap-2.5"}>
                        <div
                            className={"py-1 pr-1 pl-2.5 bg-primary flex items-center justify-between gap-2.5 rounded-primary"}>
                            <div className={"w-full flex justify-between items-center gap-5"}>
                                <p className={"text-xs font-medium"}>Сидячие</p>
                                <p className={"text-xs font-medium text-[#787b86]"}>354</p>
                            </div>
                            <div
                                className={"rounded-secondary  min-w-[100px] py-2  flex justify-center items-center bg-black"}>
                                <p className={"text-xs font-medium text-primary"}>от 000 ₽</p>
                            </div>
                        </div>
                        <div
                            className={"py-1 pr-1 pl-2.5 bg-primary flex items-center justify-between gap-2.5 rounded-primary"}>
                            <div className={"w-full flex justify-between items-center gap-5"}>
                                <p className={"text-xs font-medium"}>Плацкарт</p>
                                <p className={"text-xs font-medium text-[#787b86]"}>25</p>
                            </div>
                            <div
                                className={"rounded-secondary  min-w-[100px] py-2  flex justify-center items-center bg-black"}>
                                <p className={"text-xs font-medium text-primary"}>от 0000 ₽</p>
                            </div>
                        </div>
                        <div
                            className={"py-1 pr-1 pl-2.5 bg-primary flex items-center justify-between gap-2.5 rounded-primary"}>
                            <div className={"w-full flex justify-between items-center gap-5"}>
                                <p className={"text-xs font-medium"}>Купе</p>
                                <p className={"text-xs font-medium text-[#787b86]"}>428</p>
                            </div>
                            <div
                                className={"rounded-secondary  min-w-[100px] py-2  flex justify-center items-center bg-black"}>
                                <p className={"text-xs font-medium text-primary"}>от 00 000 ₽</p>
                            </div>
                        </div>
                        <div
                            className={"py-1 pr-1 pl-2.5 bg-primary flex items-center justify-between gap-2.5 rounded-primary"}>
                            <div className={"w-full flex justify-between items-center gap-5"}>
                                <p className={"text-xs font-medium"}>Люкс</p>
                                <p className={"text-xs font-medium text-[#787b86]"}>14</p>
                            </div>
                            <div
                                className={"rounded-secondary min-w-[100px]  py-2 flex justify-center items-center bg-black"}>
                                <p className={"text-xs font-medium text-primary"}>от 000 000 ₽</p>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen ? <TicketBody/> : null}

            </div>
        </div>
    )
};

export {Ticket};