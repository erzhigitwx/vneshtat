import React, {useState, useEffect} from "react";
import ArrowTop from "@/assets/icons/arrow-top.svg?react";
import TrashImg from "@/assets/icons/trash.svg?react";
import InfoImg from "@/assets/icons/info.svg?react";
import PlusImg from "@/assets/icons/plus.svg?react";
import CrossImg from "@/assets/icons/cross.svg?react";
import CircleImg from "@/assets/icons/red-circle.svg?react";

interface Passenger {
    id: number,
    name: string,
    surname: string,
    password: string,
    internationalPw: string,
    deleteCountdown: null | number
}

const JourneyPassenger = () => {
    const [activePassenger, setActivePassenger] = useState<number | null>(null);
    const [passengers, setPassengers] = useState<Passenger[]>([
        {
            id: 1,
            name: "Иван",
            surname: "Вознесенский",
            password: "3333333 333333",
            internationalPw: "77 7777 777777777",
            deleteCountdown: null,
        },
        {
            id: 2,
            name: "Татьяна",
            surname: "Соколова",
            password: "3333333 22233242",
            internationalPw: "77 34343 7777",
            deleteCountdown: null,
        },
        {
            id: 3,
            name: "Анастасия",
            surname: "Грибоедова",
            password: "3333333 444444",
            internationalPw: "77 7777 3435353",
            deleteCountdown: null,
        },
    ]);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const updatedPassengers = passengers.map((passenger) =>
                passenger.deleteCountdown !== null && passenger.deleteCountdown > 0
                    ? {...passenger, deleteCountdown: passenger.deleteCountdown - 1}
                    : passenger
            );

            const remainingPassengers = updatedPassengers.filter((passenger) => passenger.deleteCountdown !== 0);

            setPassengers(remainingPassengers);
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, [passengers]);

    const handleDelete = (passengerId: number) => {
        const updatedPassengers = passengers.map((passenger) =>
            passenger.id === passengerId
                ? {...passenger, deleteCountdown: 5}
                : passenger
        );
        setPassengers(updatedPassengers);
    };

    const cancelDelete = (passengerId: number) => {
        const updatedPassengers = passengers.map((passenger) =>
            passenger.id === passengerId
                ? {...passenger, deleteCountdown: null}
                : passenger
        );
        setPassengers(updatedPassengers);
    };

    const circumference = 2 * Math.PI * 8;

    return (
        <div className={"w-full overflow-y-auto scroll"}>
            <div className={"flex justify-between items-center"}>
                <h3>Пассажиры</h3>
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <div className={"w-full flex flex-col gap-2.5"}>
                {passengers.map((passenger) => (
                    <React.Fragment key={passenger.id}>
                        {passenger.id === activePassenger ? (
                            <div>
                                <div
                                    onClick={() =>
                                        setActivePassenger(
                                            passenger.id === activePassenger
                                                ? null
                                                : passenger.id
                                        )
                                    }
                                    className={
                                        "w-full bg-secondary rounded-primary flex items-center justify-between gap-1 py-2 px-2.5"
                                    }
                                >
                                    <h3 className={"text-xs text-medium whitespace-nowrap"}>
                                        {passenger.surname} {passenger.name}
                                    </h3>
                                    <ArrowTop className={"min-w-5 min-h-5"}/>
                                </div>
                                <div className={"w-full bg-secondary rounded-primary py-4 px-5 mt-2.5"}>
                                    <div className={"flex justify-between items-center"}>
                                        <h3 className={"text-base text-medium"}>Документы</h3>
                                        <InfoImg className={"min-w-6 min-h-6 black-fill-hover"}/>
                                    </div>
                                    <div className={"flex flex-col gap-1.5 mt-2.5"}>
                                        <div
                                            className={"bg-primary py-2 px-2.5 gap-1 flex justify-between items-center rounded-primary"}
                                        >
                                            <h6 className={"text-xs text-medium whitespace-nowrap"}>
                                                {passenger.password}
                                            </h6>
                                            <p className={"text-xs text-[#9b9fad] whitespace-nowrap overflow-hidden text-ellipsis"}>
                                                Паспорт РФ
                                            </p>
                                        </div>
                                        <div
                                            className={"bg-primary py-2 px-2.5 gap-1 flex justify-between items-center rounded-primary"}
                                        >
                                            <h6 className={"text-xs text-medium whitespace-nowrap"}>
                                                {passenger.internationalPw}
                                            </h6>
                                            <p className={"text-xs text-[#9b9fad] whitespace-nowrap overflow-hidden text-ellipsis"}>
                                                Загранпаспорт
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={"flex items-center gap-2.5"}>
                                <div
                                    className={"w-7 h-7 py-2 px-2.5 flex justify-center items-center rounded-full bg-secondary"}
                                >
                                    <h3 className={"text-xs text-medium uppercase"}>
                                        {passenger.surname[0] + passenger.name[1]}
                                    </h3>
                                </div>
                                <div
                                    onClick={() =>
                                        passenger.deleteCountdown
                                            ? cancelDelete(passenger.id)
                                            : setActivePassenger(passenger.id)
                                    }
                                    className={
                                        "w-full h-7 bg-secondary min-w-[150px] rounded-primary flex items-center justify-between gap-1 py-2 px-2.5 cursor-pointer"
                                    }
                                >
                                    {passenger.deleteCountdown ? (
                                        <div className={"flex items-center gap-1"}>
                                            <h3
                                                className={
                                                    "text-xs text-medium whitespace-nowrap text-[#FF64A3] overflow-hidden text-ellipsis"
                                                }
                                            >
                                                Отменить удаление
                                            </h3>
                                            <CrossImg className={"red-fill"}/>
                                        </div>
                                    ) : (
                                        <>
                                            <h3
                                                className={
                                                    "text-xs text-medium whitespace-nowrap overflow-hidden text-ellipsis"
                                                }
                                            >
                                                {passenger.surname} {passenger.name}
                                            </h3>
                                            <ArrowTop className={"rotate-180"}/>
                                        </>
                                    )}
                                </div>
                                {passenger.deleteCountdown ? (
                                    <button
                                        onClick={() => cancelDelete(passenger.id)}
                                        className={
                                            "min-w-5 min-h-5 relative flex justify-center items-center"
                                        }
                                    >
                                        <p className={"text-xs text-[#FF64A3]"}>
                                            {passenger.deleteCountdown}
                                        </p>
                                        <CircleImg
                                            className={"absolute min-h-5 min-w-5"}
                                            style={{
                                                strokeDasharray: `${circumference}`,
                                                strokeDashoffset: `${circumference - (circumference * (passenger.deleteCountdown - 1)) / 4}`,
                                                transition: "stroke-dashoffset 1s linear",
                                            }}
                                        />
                                    </button>
                                ) : (
                                    <button onClick={() => handleDelete(passenger.id)} className={"min-w-5 min-h-5"}>
                                        <TrashImg className={"black-fill-hover black-stroke-hover transition"}/>
                                    </button>
                                )}
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <button
                className={"w-full border border-solid border-[#e5e7ea] rounded-[23px] flex justify-between items-center py-4 px-4"}
            >
                <p className={"text-base text-[#787b86]"}>Добавить пассажира</p>
                <PlusImg className={"min-h-5 min-w-5"}/>
            </button>
        </div>
    );
};

export {JourneyPassenger};
