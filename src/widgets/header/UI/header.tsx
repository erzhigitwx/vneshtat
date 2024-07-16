import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import PlaneImg from "@/assets/icons/plane.svg?react";
import TrainImg from "@/assets/icons/train.svg?react";
import BusImg from "@/assets/icons/bus.svg?react";
import BedImg from "@/assets/icons/bed.svg?react";
import WebImg from "@/assets/icons/web.svg?react";
import CarImg from "@/assets/icons/car.svg?react";
import YandexTaxiImg from "@/assets/icons/yandex-taxi.svg?react";
import RestaurantImg from "@/assets/icons/restaurant.svg?react";
import BurgerImg from "@/assets/icons/burger.svg?react";

const Header = () => {
    const location = useLocation().pathname;
    const [activeHover, setActiveHover] = useState<string | null>(null);

    const links = [
        { to: "/flight", img: PlaneImg, text: "Самолёт" },
        { to: "/journey", img: TrainImg, text: "Поезд" },
        { to: "/bus", img: BusImg, text: "Автобусы" },
        { to: "/hotel", img: BedImg, text: "Отели" },
        { to: "/web", img: WebImg, text: "Аэроэкспресс" },
        { to: "/car", img: CarImg, text: "Автомобили" },
        { to: "/yandex-taxi", img: YandexTaxiImg, text: "Яндекс.Такси" },
        { to: "/restaurant", img: RestaurantImg, text: "Рестораны" },
    ];

    return (
        <div className={"flex flex-row justify-between items-center py-[10px]"}>
            <div className={"flex items-center bg-primary py-2.5 px-4 rounded-primary gap-2.5 cursor-pointer"}>
                <button>
                    <BurgerImg className={"w-6 h-6"} />
                </button>
                <p className={"text-base"}>Все поездки</p>
            </div>
            <div className={"flex items-center gap-5"}>
                <div className={"flex flex-row items-center bg-primary py-2.5 px-4 rounded-primary gap-6"}>
                    {links.map(({ to, img: Img, text }) => (
                        <Link
                            key={to}
                            to={to}
                            className="flex items-center"
                            onMouseEnter={() => setActiveHover(to)}
                            onMouseLeave={() => setActiveHover(null)}
                        >
                            <div className={"bg-primary relative z-10"}>
                                <Img
                                    className={clsx(
                                        "blue-fill-hover transition",
                                        (location === to || activeHover === to) && "blue-fill"
                                    )}
                                />
                            </div>
                            {(activeHover === to) && (
                                <p className="animate-fadeIn ml-1 text-base text-blue">{text}</p>
                            )}
                        </Link>
                    ))}
                </div>
                <button className={"bg-primary border rounded-primary px-9 h-[45px] flex justify-center items-center transition"}>
                    <p className={"hover:text-blue text-base"}>Создать поездку</p>
                </button>
            </div>
        </div>
    );
};

export { Header };
