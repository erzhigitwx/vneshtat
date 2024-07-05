import PassengerImg from "@/assets/icons/users.svg?react";
import RouteImg from "@/assets/icons/route.svg?react";
import BurgerImg from "@/assets/icons/burger.svg?react";
import HeartImg from "@/assets/icons/heart.svg?react";
import ChairExistsImg from "@/assets/icons/chair-exists.svg?react";
import ChairAwayImg from "@/assets/icons/chair-away.svg?react";
import {Input, Switch, TagFilter} from "@/shared/UI";
import {Tag} from "@/shared/UI/tag-filter/tag-filter.props";
import {useState} from "react";
import {useSelector} from "react-redux";
import {formatDate, getDayOfWeek} from "@/shared/utils";
import {RootState} from "@/app/config/store";
import {JourneyTicket} from "@/entities/journey-ticket";

const JourneyTickets = () => {
    const dateTo = useSelector((state: RootState) => state.journey.dateTo);
    const dateBack = useSelector((state: RootState) => state.journey.dateBack);
    const [go, setGo] = useState(true);
    const [byQueue, setByQueue] = useState(true);
    const [isChair, setIsChair] = useState(true);
    const [tags, setTags] = useState<Tag>({
        tags: ["Дешевле", "Быстрее", "Раннее отправление", "Раннее прибытие"],
        selectedTags: []
    });

    return (
        <div className={"w-full flex flex-col"}>
            <div className={"bg-primary px-5 pt-5 rounded-t-[26px]"}>
                <div className={"flex flex-col gap-4"}>
                    <div className={"flex flex-row items-center gap-2.5"}>
                        <div
                            className={"flex flex-row items-center py-3 px-2.5 gap-2 max-h-9 rounded-primary bg-secondary"}>
                            <PassengerImg/>
                            <p className={"text-xs"}>+2</p>
                        </div>
                        <Input placeholder={"Город отправления"}
                               extraClass={"py-3 px-2.5 max-h-9 rounded-primary w-full"}/>
                        <button>
                            <RouteImg className={"grey-fill black-fill-hover transition min-w-5 min-h-5"}/>
                        </button>
                        <Input placeholder={"Город прибытия"}
                               extraClass={"py-3 px-2.5 max-h-9 rounded-primary w-full"}/>
                        <Input
                            placeholder={"Туда"}
                            extraClass={"py-3 px-2.5 max-h-9"}
                            value={dateTo ? `${formatDate(dateTo, true)}, ${getDayOfWeek(dateTo, true)}` : ""}
                            disabled
                        />
                        <Input
                            placeholder={"Обратно"}
                            extraClass={"py-3 px-2.5 max-h-9"}
                            value={dateBack ? `${formatDate(dateBack, true)}, ${getDayOfWeek(dateBack, true)}` : ""}
                            disabled
                        />
                    </div>
                    <div className={"flex flex-row items-center gap-2.5"}>
                        <Switch
                            firstChild={<p className={`text-sm ${go && "text-primary"}`}>Туда</p>}
                            secondChild={<p className={`text-sm ${!go && "text-primary"}`}>Обратно</p>}
                            isSelected={go}
                            setter={setGo}
                            selectedBg={"#121212"}
                            extraClass={"max-h-9"}
                        />
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
                </div>
                <hr className={"h-[1px] bg-[#e5e7ea] rounded-[1px] mt-4"}/>
            </div>
            <div className={"bg-primary overflow-hidden rounded-b-[26px]"}>
                <div
                    className="flex flex-col gap-4 px-5 py-5 overflow-y-auto scroll max-h-[calc(100vh-330px)] h-full">
                    <JourneyTicket />
                    <JourneyTicket />
                    <JourneyTicket />
                    <JourneyTicket />
                    <JourneyTicket />
                </div>
            </div>
        </div>
    )
};

export {JourneyTickets};