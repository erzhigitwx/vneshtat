import PassengerImg from "@/assets/icons/users.svg?react";
import RouteImg from "@/assets/icons/route.svg?react";
import BurgerImg from "@/assets/icons/burger.svg?react";
import HeartImg from "@/assets/icons/heart.svg?react";
import ChairExistsImg from "@/assets/icons/chair-exists.svg?react";
import ChairAwayImg from "@/assets/icons/chair-away.svg?react";
import PlaneImg from "@/assets/icons/plane.svg?react";
import ArrowImg from "@/assets/icons/arrow-right.svg?react";
import BusImg from "@/assets/icons/bus.svg?react";
import { Input, Switch, TagFilter } from "@/shared/UI";
import { Tag } from "@/shared/UI/tag-filter/tag-filter.props";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {formatDate, getDayOfWeek, handleScrollToTop} from "@/shared/utils";
import { RootState } from "@/app/config/store";
import { JourneyTicket } from "@/entities/journey-ticket";

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
                ticketContainerRef.current.scrollTop += event.deltaY;
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
        <div className={"w-full flex flex-col"} ref={scrollRef}>
            <div className={"bg-primary px-5 pt-5 rounded-t-[26px]"}>
                <div className={"flex flex-col gap-4"}>
                    <div className={"flex flex-row items-center gap-2.5"}>
                        <div className={"flex flex-row items-center py-3 px-2.5 gap-2 max-h-9 rounded-primary bg-secondary"}>
                            <PassengerImg />
                            <p className={"text-xs"}>+2</p>
                        </div>
                        <Input placeholder={"Город отправления"} extraClass={"py-3 px-2.5 max-h-9 rounded-primary w-full"} />
                        <button>
                            <RouteImg className={"grey-fill black-fill-hover transition min-w-5 min-h-5"} />
                        </button>
                        <Input placeholder={"Город прибытия"} extraClass={"py-3 px-2.5 max-h-9 rounded-primary w-full"} />
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
                            firstChild={<p className={`text-sm font-medium ${go && "text-primary"}`}>Туда</p>}
                            secondChild={<p className={`text-sm font-medium ${!go && "text-primary"}`}>Обратно</p>}
                            isSelected={go}
                            setter={setGo}
                            selectedBg={"#121212"}
                            extraClass={"max-h-9"}
                        />
                        <Switch
                            firstChild={<BurgerImg className={"h-5 w-5"} />}
                            secondChild={<HeartImg className={"h-5 w-5"} />}
                            isSelected={byQueue}
                            setter={setByQueue}
                            extraChildClass={"px-1 py-1"}
                            extraClass={"max-h-9 w-26"}
                        />
                        <div className={"flex bg-[#F5F5F5] rounded-primary"}>
                            <Switch
                                firstChild={<ChairExistsImg className={`${!isChair && "grey-fill"}`} />}
                                secondChild={<ChairAwayImg className={`${isChair ? "grey-fill" : "black-fill"}`} />}
                                isSelected={isChair}
                                setter={setIsChair}
                                extraChildClass={"py-1 px-1.5"}
                                extraClass={"max-h-9"}
                            />
                            <div className={"px-2.5 flex justify-center items-center"}>
                                <p className={"text-xs font-medium text-[#9B9FAD]"}>Найдено: 215</p>
                            </div>
                        </div>
                        <TagFilter tags={tags} setter={setTags} extraClass={"max-h-9"} />
                    </div>
                </div>
                <hr className={"h-[1px] bg-[#e5e7ea] rounded-[1px] mt-4"} />
            </div>
            <div className={"bg-primary overflow-hidden rounded-b-[26px]"}>
                {dateBack && dateTo ? (
                    <div className="flex flex-col px-5 py-5 h-[calc(100vh-330px)]">
                        <div className="flex flex-col p-7 h-full rounded-[23px] bg-secondary">
                            <h1 className={"text-2xl"}>Билетов на эти даты уже нет в продаже</h1>
                            <h3 className={"text-lg mt-4 font-normal"}>Что можно сделать?</h3>
                            <div className={"flex flex-col gap-2.5 mt-6"}>
                                <div className={"flex items-center gap-2.5"}>
                                    <div className={"p-2 bg-primary rounded-secondary h-9"}>
                                        <ChairAwayImg className={"black-fill"} />
                                    </div>
                                    <p className={"text-base max-w-[280px]"}>Посмотреть распроданные билеты и создать Автобронирование</p>
                                </div>
                                <div className={"flex items-center gap-2.5"}>
                                    <div className={"p-2 bg-primary rounded-secondary w-9 h-9 flex justify-center items-center"}>
                                        <RouteImg />
                                    </div>
                                    <p className={"text-base max-w-[280px]"}>Изменить даты</p>
                                </div>
                                <div className={"flex items-center gap-2.5"}>
                                    <div className={"p-2 bg-primary rounded-secondary w-9 h-9 flex justify-center items-center"}>
                                        <PlaneImg />
                                    </div>
                                    <div className={"p-2 bg-primary rounded-secondary w-9 h-9 flex justify-center items-center"}>
                                        <BusImg />
                                    </div>
                                    <p className={"text-base max-w-[280px]"}>Попробовать другой вид транспорта</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div ref={ticketContainerRef} className="flex flex-col gap-4 px-5 py-5 overflow-y-auto scroll max-h-[calc(100vh-330px)] relative h-full">
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
                        <JourneyTicket />
                        <JourneyTicket />
                        <JourneyTicket />
                        <JourneyTicket />
                        <JourneyTicket />
                    </div>
                )}
            </div>
        </div>
    );
};

export { JourneyTickets };
