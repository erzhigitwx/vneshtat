import {Input, InputCity, Switch, TagFilter} from "@/shared/UI";
import {setCityFrom, setCityTo, updateFlight} from "@/widgets/flight/flight-operations/model/flight.store";
import {formatDate, getDayOfWeek} from "@/shared/utils";
import {Dispatch, SetStateAction, useState} from "react";
import {Tag} from "@/shared/UI/tag-filter/tag-filter.props";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import BurgerImg from "@/assets/icons/burger.svg?react";
import HeartImg from "@/assets/icons/heart.svg?react";
import RouteImg from "@/assets/icons/route.svg?react";
import ChairExistsImg from "@/assets/icons/chair-exists.svg?react";
import ChairAwayImg from "@/assets/icons/chair-away.svg?react";
import PassengerImg from "@/assets/icons/users.svg?react";
import CopyImg from "@/assets/icons/copy.svg?react";
import ArrowTopImg from "@/assets/icons/arrow-top.svg?react";
import ArrowLeftImg from "@/assets/icons/arrow-left.svg?react";
import GraphImg from "@/assets/icons/graph.svg?react";

const FlightTicketsHeader = ({showPriceGraph, setShowPriceGraph}: {
    showPriceGraph: boolean,
    setShowPriceGraph: Dispatch<SetStateAction<boolean>>
}) => {
    const {flights, cityFrom, cityTo} = useSelector((state: RootState) => state.flight);
    const [byQueue, setByQueue] = useState(true);
    const [isChair, setIsChair] = useState(true);
    const [tags, setTags] = useState<Tag>({
        tags: ["Только прямые", "Дешевле", "Быстрее"],
        selectedTags: []
    });
    const dispatch = useDispatch();
    const firstFlight = flights[0];
    const secondFlight = flights[1];

    return (
        <div className={"bg-primary px-5 pt-5"}>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-row items-center gap-2.5"}>
                    <div
                        className={"flex flex-row items-center py-3 px-2.5 gap-2 max-h-9 rounded-primary bg-secondary"}>
                        <PassengerImg/>
                        <p className={"text-xs"}>+0</p>
                    </div>
                    <InputCity
                        placeholder={"Вылет"}
                        value={cityFrom}
                        setValue={(str) => dispatch(setCityFrom(str))}
                        callback={(city) => dispatch(updateFlight({
                            id: firstFlight.id,
                            field: "departureCity",
                            value: city
                        }))}
                    />
                    <button>
                        <RouteImg className={"grey-fill black-fill-hover transition min-w-5 min-h-5"}/>
                    </button>
                    <InputCity
                        placeholder={"Прилет"}
                        value={cityTo}
                        setValue={(str) => dispatch(setCityTo(str))}
                        callback={(city) => dispatch(updateFlight({
                            id: firstFlight.id,
                            field: "arrivalCity",
                            value: city
                        }))}
                    />
                    <Input
                        placeholder={"Туда"}
                        extraClass={"py-3 px-2.5 max-h-9 w-[100px]"}
                        value={firstFlight.flightDate ? `${formatDate(firstFlight.flightDate, true)}, ${getDayOfWeek(firstFlight.flightDate, true)}` : ""}
                        disabled
                    />
                    <Input
                        placeholder={"Обратно"}
                        extraClass={"py-3 px-2.5 max-h-9 w-[100px]"}
                        value={secondFlight && secondFlight.flightDate ? `${formatDate(secondFlight.flightDate, true)}, ${getDayOfWeek(secondFlight.flightDate, true)}` : ""}
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
                    <div className={"flex bg-[#F5F5F5] rounded-primary"}>
                        <Switch
                            firstChild={<ChairExistsImg className={`${!isChair && "grey-fill"}`}/>}
                            secondChild={<ChairAwayImg className={`${isChair ? "grey-fill" : "black-fill"}`}/>}
                            isSelected={isChair}
                            setter={setIsChair}
                            extraClass={"max-h-9"}
                        />
                        <div className={"px-2.5 flex justify-center items-center"}>
                            <p className={"text-xs font-medium text-[#9B9FAD]"}>Найдено: 215</p>
                        </div>
                    </div>
                    <TagFilter tags={tags} setter={setTags} extraClass={"max-h-9"}/>
                    <div
                        className={"px-2.5 py-2 max-h-9 flex items-center justify-between gap-4 bg-secondary rounded-primary cursor-pointer ml-auto"}
                        onClick={() => setShowPriceGraph(prev => !prev)}>
                            <span className={"flex items-center gap-1"}>
                                <GraphImg className={"min-w-5 min-h-5"}/>
                                <p className={"text-xs"}>График цен</p>
                            </span>
                        <ArrowTopImg className={`min-w-5 min-h-5 ${!showPriceGraph && "rotate-180"}`}/>
                    </div>
                </div>
                {showPriceGraph ? (
                    <div className={"flex gap-2.5"}>
                        <div className={"p-3 rounded-[18px] bg-black cursor-pointer"}>
                            <GraphImg className={"min-h-[26px] min-w-[26px] white-fill"}/>
                        </div>
                        {Array.from({length: 8}).map(() => (
                            <div
                                className={"min-w-28 rounded-[18px] bg-secondary cursor-pointer flex flex-col justify-center items-center gap-1 min-h-[50px]"}>
                                <h6 className={"text-sm font-medium leading-none"}>12 310 ₽ </h6>
                                <p className={"text-[10px] text-[#787B86] leading-none"}>1-3 фев</p>
                            </div>
                        ))}
                        <div className={"flex items-center justify-center gap-3 px-1 ml-auto"}>
                            <button>
                                <ArrowLeftImg className={"min-h-4 min-w-4 black-stroke"}/>
                            </button>
                            <button>
                                <ArrowLeftImg className={"min-h-4 min-w-4 black-stroke rotate-180"}/>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={"flex gap-2.5"}>
                        <div
                            className={"flex flex-col gap-1 px-4 py-2 rounded-primary bg-secondary cursor-pointer"}>
                            <h6 className={"text-xs font-medium"}>Москва — Санкт-Петербург</h6>
                            <p className={"text-[10px] text-[#9B9FAD]"}>17.01.2023 - 20.01.2023</p>
                        </div>
                        <div
                            className={"flex flex-col gap-1 px-4 py-2.5 rounded-primary bg-secondary cursor-pointer"}>
                            <h6 className={"text-xs font-medium"}>Москва — Самара</h6>
                            <p className={"text-[10px] text-[#9B9FAD]"}>18.02.2023 - 21.02.2023</p>
                        </div>
                        <div
                            className={"flex items-center gap-2.5 px-4 py-2.5 rounded-primary bg-secondary cursor-pointer"}>
                            <CopyImg/>
                            <h6 className={"text-xs font-medium"}>Выбрать из шаблонов</h6>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export {FlightTicketsHeader};