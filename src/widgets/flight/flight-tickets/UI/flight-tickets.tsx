import PassengerImg from "@/assets/icons/users.svg?react";
import RouteImg from "@/assets/icons/route.svg?react";
import BurgerImg from "@/assets/icons/burger.svg?react";
import HeartImg from "@/assets/icons/heart.svg?react";
import ChairExistsImg from "@/assets/icons/chair-exists.svg?react";
import ChairAwayImg from "@/assets/icons/chair-away.svg?react";
import TrainImg from "@/assets/icons/train.svg?react";
import CopyImg from "@/assets/icons/copy.svg?react";
import ArrowImg from "@/assets/icons/arrow-right.svg?react";
import {useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import {useEffect, useRef, useState} from "react";
import {Tag} from "@/shared/UI/tag-filter/tag-filter.props";
import {Input, Switch, TagFilter} from "@/shared/UI";
import {formatDate, getDayOfWeek, handleScrollToTop} from "@/shared/utils";
import {FlightTicket, FlightTicketPreload} from "@/entities/flight-ticket";

const FlightTickets = () => {
    const flights = useSelector((state: RootState) => state.flight.flights);
    const [byQueue, setByQueue] = useState(true);
    const [isChair, setIsChair] = useState(true);
    const [tags, setTags] = useState<Tag>({
        tags: ["Только прямые", "Дешевле", "Быстрее", "+ Свой фильтр"],
        selectedTags: []
    });
    const firstFlight = flights[0];
    const secondFlight = flights[1];
    const tickets = 1;
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const ticketContainerRef = useRef<HTMLDivElement | null>(null);
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (
                scrollRef.current &&
                ticketContainerRef.current &&
                !ticketContainerRef.current?.contains(event.target as Node)
            ) {
                ticketContainerRef.current.scrollTop += event.deltaY
            }
        };

        const currentScrollRef = scrollRef.current;
        if (currentScrollRef) {
            currentScrollRef.addEventListener("wheel", handleScroll as unknown as EventListener);
        }

        return () => {
            if (currentScrollRef) {
                currentScrollRef.removeEventListener("wheel", handleScroll as unknown as EventListener);
            }
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (ticketContainerRef.current) {
                setShowScrollButton(ticketContainerRef.current.scrollTop > 0);
            }
        };

        const currentTicketContainerRef = ticketContainerRef.current;
        if (currentTicketContainerRef) {
            currentTicketContainerRef.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (currentTicketContainerRef) {
                currentTicketContainerRef.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div ref={scrollRef} className={"w-full flex flex-col"}>
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
                        <Input placeholder={"Прилет"}
                               extraClass={"py-3 px-2.5 max-h-9 rounded-primary w-full"}/>
                        <Input
                            placeholder={"Туда"}
                            extraClass={"py-3 px-2.5 max-h-9"}
                            value={firstFlight.flightDate ? `${formatDate(firstFlight.flightDate, true)}, ${getDayOfWeek(firstFlight.flightDate, true)}` : ""}
                            disabled
                        />
                        <Input
                            placeholder={"Обратно"}
                            extraClass={"py-3 px-2.5 max-h-9"}
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
                    </div>
                    <div className={"flex gap-2.5"}>
                        <div
                            className={"flex flex-col gap-1 px-4 py-2 rounded-primary bg-secondary cursor-pointer"}>
                            <h6 className={"text-sm text-md"}>Москва — Санкт-Петербург</h6>
                            <p className={"text-[10px] text-[#9B9FAD]"}>17.01.2023 - 20.01.2023</p>
                        </div>
                        <div
                            className={"flex flex-col gap-1 px-4 py-2.5 rounded-primary bg-secondary cursor-pointer"}>
                            <h6 className={"text-sm text-md"}>Москва — Самара</h6>
                            <p className={"text-[10px] text-[#9B9FAD]"}>18.02.2023 - 21.02.2023</p>
                        </div>
                        <div
                            className={"flex items-center gap-2.5 px-4 py-2.5 rounded-primary bg-secondary cursor-pointer"}>
                            <CopyImg/>
                            <h6 className={"text-sm text-md"}>Выбрать из шаблонов</h6>
                        </div>
                    </div>
                </div>
                <hr className={"h-[1px] bg-[#e5e7ea] rounded-[1px] mt-4"}/>
            </div>
            <div className={"bg-primary overflow-hidden rounded-b-[26px]"}>
                {tickets ? (
                    <div
                        ref={ticketContainerRef}
                        className="flex flex-col gap-4 px-5 py-5 overflow-y-auto scroll max-h-[calc(100vh-400px)] relative h-full">
                        {showScrollButton && (
                            <button
                                className="rounded-secondary w-9 min-h-9 bg-black flex justify-center items-center fixed bottom-6"
                                onClick={() => {
                                    handleScrollToTop(ticketContainerRef);
                                    setShowScrollButton(false)
                                }}
                            >
                                <ArrowImg className="-rotate-90" />
                            </button>
                        )}
                        <FlightTicketPreload />
                        <FlightTicket/>
                        <FlightTicket/>
                        <FlightTicket/>
                        <FlightTicket/>
                        <FlightTicket/>
                    </div>
                ) : (
                    <div
                        className="flex flex-col px-5 py-5 h-[calc(100vh-400px)]">
                        <div
                            className="flex flex-col p-7 h-full rounded-[23px] bg-secondary">
                            <h1 className={"text-2xl"}>Билетов по этому направлению не найдено</h1>
                            <h3 className={"text-lg mt-4 font-normal"}>Что можно сделать?</h3>
                            <div className={"flex flex-col gap-1 mt-2.5"}>
                                <p className={"text-base"}>В этот аэропорт не летают самолёты. Слишком поздние даты.</p>
                                <p className={"text-base"}>Проверьте год вылета или прилёта.</p>
                            </div>
                            <div className={"flex flex-col gap-2.5 mt-6"}>
                                <div className={"flex items-center gap-2.5"}>
                                    <div className={"p-2 bg-primary rounded-secondary h-9"}>
                                        <RouteImg/>
                                    </div>
                                    <p className={"text-base max-w-[280px]"}>Изменить даты</p>
                                </div>
                                <div className={"flex items-center gap-2.5"}>
                                    <div
                                        className={"p-2 bg-primary rounded-secondary w-9 h-9 flex justify-center items-center"}>
                                        <TrainImg/>
                                    </div>
                                    <p className={"text-base max-w-[280px]"}>Попробовать другой вид транспорта</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export {FlightTickets};