import PassengerImg from "@/assets/icons/users.svg?react";
import RouteImg from "@/assets/icons/route.svg?react";
import CopyImg from "@/assets/icons/copy.svg?react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import {Input} from "@/shared/UI";
import {formatDate, getDayOfWeek} from "@/shared/utils";

const BusTickets = () => {
    const journeyDate = useSelector((state: RootState) => state.bus.journeyDate);
    const tickets = 0;

    return (
        <div className={"w-full flex flex-col"}>
            <div className={"bg-primary px-5 pt-5 rounded-t-[26px]"}>
                <div className={"flex flex-col gap-4"}>
                    <div className={"flex flex-row items-center gap-2.5"}>
                        <div
                            className={"flex flex-row items-center py-3 px-2.5 gap-2 max-h-9 rounded-primary bg-secondary"}>
                            <PassengerImg/>
                            <p className={"text-xs"}>+0</p>
                        </div>
                        <Input placeholder={"Вылет"}
                               extraClass={"py-3 px-2.5 max-h-9 rounded-primary w-full"}/>
                        <button>
                            <RouteImg className={"grey-fill black-fill-hover transition min-w-5 min-h-5"}/>
                        </button>
                        <Input placeholder={"Прибытие"}
                               extraClass={"py-3 px-2.5 max-h-9 rounded-primary w-full"}/>
                        <Input
                            placeholder={"Дата поездки"}
                            extraClass={"py-3 px-2.5 max-h-9"}
                            value={journeyDate ? `${formatDate(journeyDate, true)}, ${getDayOfWeek(journeyDate, true)}` : ""}
                            disabled
                        />
                    </div>
                    <div className={"flex gap-2.5"}>
                        <div
                            className={"flex flex-col gap-1 px-4 py-2 rounded-primary bg-secondary cursor-pointer h-[50px]"}>
                            <h6 className={"text-sm text-md"}>Москва — Санкт-Петербург</h6>
                            <p className={"text-[10px] text-[#9B9FAD]"}>17.01.2023 - 20.01.2023</p>
                        </div>
                        <div
                            className={"flex flex-col gap-1 px-4 py-2 rounded-primary bg-secondary cursor-pointer h-[50px]"}>
                            <h6 className={"text-sm text-md"}>Москва — Самара</h6>
                            <p className={"text-[10px] text-[#9B9FAD]"}>18.02.2023 - 21.02.2023</p>
                        </div>
                        <div
                            className={"flex items-center gap-2.5 px-4 py-2 rounded-primary bg-secondary cursor-pointer h-[50px]"}>
                            <CopyImg/>
                            <h6 className={"text-sm text-md"}>Выбрать из шаблонов</h6>
                        </div>
                    </div>
                </div>
                <hr className={"h-[1px] bg-[#e5e7ea] rounded-[1px] mt-4"}/>
            </div>
            {tickets ? (
                <div></div>
            ) : (
                <div>

                </div>
            )}
        </div>
    )
};

export {BusTickets};