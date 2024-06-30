import {useState} from "react";
import ArrowTop from "@/assets/icons/arrow-top.svg?react";
import TrashImg from "@/assets/icons/trash.svg?react";
import InfoImg from "@/assets/icons/info.svg?react";
import PlusImg from "@/assets/icons/plus.svg?react";

const JourneyPassenger = () => {
    const [activePassenger, setActivePassenger] = useState<number | null>(null);
    const [passengers] = useState([{
        id: 1,
        name: "Иван",
        surname: "Вознесенский",
        password: "3333333 333333",
        internationalPw: "77 7777 777777777"
    },
        {
            id: 2,
            name: "Татьяна",
            surname: "Соколова",
            password: "3333333 22233242",
            internationalPw: "77 34343 7777"
        },
        {
            id: 3,
            name: "Анастасия",
            surname: "Грибоедова",
            password: "3333333 444444",
            internationalPw: "77 7777 3435353"
        }]);

    return (
        <div className={"w-full max-h-[55vh] overflow-y-auto scroll"}>
            <div className={"flex justify-between items-center"}>
                <h3>Пассажиры</h3>
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <div className={"w-full flex flex-col gap-2.5"}>
                {passengers.map((passenger) => (
                    <>
                        {passenger.id === activePassenger ? (
                            <div>
                                <div
                                    onClick={() => setActivePassenger(passenger.id === activePassenger ? null : passenger.id)}
                                    className={"w-full bg-secondary rounded-primary flex items-center justify-between gap-1 py-2 px-2.5"}>
                                    <h3 className={"text-xs text-medium whitespace-nowrap"}>{passenger.surname} {passenger.name}</h3>
                                    <ArrowTop className={"min-w-5 min-h-5"}/>
                                </div>
                                <div className={"w-full bg-secondary rounded-primary py-4 px-5 mt-2.5"}>
                                    <div className={"flex justify-between items-center"}>
                                        <h3 className={"text-base text-medium"}>Документы</h3>
                                        <InfoImg className={"min-w-6 min-h-6 black-fill-hover"}/>
                                    </div>
                                    <div className={"flex flex-col gap-1.5 mt-2.5"}>
                                        <div
                                            className={"bg-primary py-2 px-2.5 gap-1 flex justify-between items-center rounded-primary"}>
                                            <h6 className={"text-xs text-medium whitespace-nowrap"}>{passenger.password}</h6>
                                            <p className={"text-xs text-[#9b9fad] whitespace-nowrap overflow-hidden text-ellipsis"}>Паспорт
                                                РФ</p>
                                        </div>
                                        <div
                                            className={"bg-primary py-2 px-2.5 gap-1 flex justify-between items-center rounded-primary"}>
                                            <h6 className={"text-xs text-medium whitespace-nowrap"}>{passenger.internationalPw}</h6>
                                            <p className={"text-xs text-[#9b9fad] whitespace-nowrap overflow-hidden text-ellipsis"}>Загранпасорт</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={"flex items-center gap-2.5"}>
                                <div
                                    className={"w-7 h-7 py-2 px-2.5 flex justify-center items-center rounded-full bg-secondary"}>
                                    <h3 className={"text-xs text-medium uppercase"}>{passenger.surname[0] + passenger.name[1]}</h3>
                                </div>
                                <div
                                    onClick={() => setActivePassenger(passenger.id)}
                                    className={"w-full bg-secondary max-w-[150px] rounded-primary flex items-center justify-between gap-1 py-2 px-2.5"}>
                                    <h3 className={"text-xs text-medium whitespace-nowrap overflow-hidden text-ellipsis"}>{passenger.surname} {passenger.name}</h3>
                                    <ArrowTop className={"rotate-180"}/>
                                </div>
                                <button>
                                    <TrashImg/>
                                </button>
                            </div>
                        )}
                    </>
                ))}
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <button
                className={"w-full border border-solid border-[#e5e7ea] rounded-[23px] flex justify-between items-center py-4 px-4"}>
                <p className={"text-base text-[#787b86]"}>Добавить пассажира</p>
                <PlusImg className={"min-h-5 min-w-5"}/>
            </button>
        </div>
    )
};

export {JourneyPassenger};