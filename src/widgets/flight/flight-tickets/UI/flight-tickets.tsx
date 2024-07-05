import PassengerImg from "@/assets/icons/users.svg?react";
import RouteImg from "@/assets/icons/route.svg?react";
import BurgerImg from "@/assets/icons/burger.svg?react";
import HeartImg from "@/assets/icons/heart.svg?react";
import ChairExistsImg from "@/assets/icons/chair-exists.svg?react";
import ChairAwayImg from "@/assets/icons/chair-away.svg?react";
import CopyImg from "@/assets/icons/copy.svg?react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import {useState} from "react";
import {Tag} from "@/shared/UI/tag-filter/tag-filter.props";
import {Input, Switch, TagFilter} from "@/shared/UI";
import {formatDate, getDayOfWeek} from "@/shared/utils";

const FlightTickets = () => {
    const flightDate = useSelector((state: RootState) => state.flight.flightDate);
    const [byQueue, setByQueue] = useState(true);
    const [isChair, setIsChair] = useState(true);
    const [tags, setTags] = useState<Tag>({
        tags: ["Дешевле", "Быстрее", "Ранний вылет", "Раннее прибытие"],
        selectedTags: []
    });
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
                            placeholder={"Туда"}
                            extraClass={"py-3 px-2.5 max-h-9"}
                            value={flightDate ? `${formatDate(flightDate, true)}, ${getDayOfWeek(flightDate, true)}` : ""}
                            disabled
                        />
                        <Input
                            placeholder={"Обратно"}
                            extraClass={"py-3 px-2.5 max-h-9"}
                            value={flightDate ? `${formatDate(flightDate, true)}, ${getDayOfWeek(flightDate, true)}` : ""}
                            disabled
                        />
                    </div>
                    <div className={"flex flex-row items-center gap-2.5"}>
                        <Switch
                            firstChild={<BurgerImg className={"h-5 w-5"}/>}
                            secondChild={<HeartImg className={"h-5 w-5"}/>}
                            isSelected={byQueue}
                            setter={setByQueue}
                            extraClass={"max-h-9"}
                        />
                        <Switch
                            firstChild={<ChairExistsImg className={`${!isChair && "grey-fill"}`}/>}
                            secondChild={<ChairAwayImg className={`${isChair ? "grey-fill" : "black-fill"}`}/>}
                            isSelected={isChair}
                            setter={setIsChair}
                            extraClass={"max-h-9"}
                        />
                        <TagFilter tags={tags} setter={setTags} extraClass={"max-h-9"}/>
                    </div>
                    <div className={"flex gap-2.5"}>
                        <div
                            className={"flex flex-col gap-1 px-4 py-2 rounded-primary bg-secondary cursor-pointer h-[50px]"}>
                            <h6 className={"text-sm text-md"}>Москва — Санкт-Петербург</h6>
                            <p className={"text-[10px] text-[#9B9FAD]"}>17.01.2023 - 20.01.2023</p>
                        </div>
                        <div
                            className={"flex flex-col gap-1 px-4 py-2.5 rounded-primary bg-secondary cursor-pointer h-[50px]"}>
                            <h6 className={"text-sm text-md"}>Москва — Самара</h6>
                            <p className={"text-[10px] text-[#9B9FAD]"}>18.02.2023 - 21.02.2023</p>
                        </div>
                        <div
                            className={"flex items-center gap-2.5 px-4 py-2.5 rounded-primary bg-secondary cursor-pointer h-[50px]"}>
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

export {FlightTickets};