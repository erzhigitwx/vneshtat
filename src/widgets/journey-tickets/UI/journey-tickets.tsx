import PassengerImg from "@/assets/icons/users.svg?react";
import RouteImg from "@/assets/icons/route.svg?react";
import BurgerImg from "@/assets/icons/burger.svg?react";
import HeartImg from "@/assets/icons/heart.svg?react";
import ChairExistsImg from "@/assets/icons/chair-exists.svg?react";
import ChairAwayImg from "@/assets/icons/chair-away.svg?react";
import SuccessFilledImg from "@/assets/icons/success-filled.svg?react";
import SuccessImg from "@/assets/icons/success.svg?react";
import {Input, Switch, TagFilter} from "@/shared/UI";
import {Tag} from "@/shared/UI/tag-filter/tag-filter.props";
import {useState} from "react";
import {Ticket} from "@/entities/ticket";

const JourneyTickets = () => {
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
                        <div className={"flex flex-row items-center py-3 px-2.5 gap-2 rounded-primary bg-secondary"}>
                            <PassengerImg/>
                            <p className={"text-xs"}>+2</p>
                        </div>
                        <Input placeholder={"Город отправления"} extraClass={"py-3 px-2.5 rounded-primary w-full"}/>
                        <button>
                            <RouteImg className={"grey-fill blue-fill-hover min-w-5 min-h-5"}/>
                        </button>
                        <Input placeholder={"Город прибытия"} extraClass={"py-3 px-2.5 rounded-primary w-full"}/>
                        <Input placeholder={"Туда"} extraClass={"py-3 px-2.5"}/>
                        <Input placeholder={"Обратно"} extraClass={"py-3 px-2.5"}/>
                    </div>
                    <div className={"flex flex-row items-center gap-2.5"}>
                        <Switch
                            firstChild={<p className={`text-sm ${go && "text-primary"}`}>Туда</p>}
                            secondChild={<p className={`text-sm ${!go && "text-primary"}`}>Обратно</p>}
                            isSelected={go}
                            setter={setGo}
                            selectedBg={"#121212"}
                        />
                        <Switch
                            firstChild={<BurgerImg className={"h-5 w-5"}/>}
                            secondChild={<HeartImg className={"h-5 w-5"}/>}
                            isSelected={byQueue}
                            setter={setByQueue}
                        />
                        <Switch
                            firstChild={
                                <div className={"flex items-center gap-1"}>
                                    <ChairExistsImg className={"h-5 w-5"}/>
                                    <SuccessFilledImg className={"h-5 w-5"}/>
                                </div>}
                            secondChild={
                                <div className={"flex items-center gap-1"}>
                                    <ChairAwayImg className={"h-5 w-5"}/>
                                    <SuccessImg className={"h-5 w-5"}/>
                                </div>}
                            isSelected={isChair}
                            setter={setIsChair}
                        />
                        <TagFilter tags={tags} setter={setTags}/>
                    </div>
                </div>
                <hr className={"h-[1px] bg-[#e5e7ea] rounded-[1px] my-4"}/>
            </div>
            <div className={"bg-primary overflow-hidden rounded-b-[26px]"}>
                <div
                    className="flex flex-col gap-4 px-5 pb-5 overflow-y-auto scroll max-h-[calc(100vh-370px)] h-full">
                    <Ticket/>
                    <Ticket/>
                    <Ticket/>
                    <Ticket/>
                    <Ticket/>
                </div>
            </div>
        </div>
    )
};

export {JourneyTickets};