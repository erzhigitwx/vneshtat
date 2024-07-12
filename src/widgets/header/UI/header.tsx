import clsx from "clsx";
import {Link, useLocation} from "react-router-dom";
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

    return (
        <div className={"flex flex-row justify-between items-center py-[10px]"}>
            <div className={"flex items-center bg-primary py-2.5 px-4 rounded-primary gap-2.5 cursor-pointer"}>
                <button>
                    <BurgerImg className={"w-6 h-6"}/>
                </button>
                <p className={"text-base"}>Все поездки</p>
            </div>
            <div className={"flex flex-row items-center bg-primary py-2.5 px-4 rounded-primary gap-6"}>
                <Link to="/flight" className="flex items-center">
                    <div className={"bg-primary relative z-10"}>
                        <PlaneImg
                            className={clsx("blue-fill-hover transition", location === "/flight" && "blue-fill")}/>
                    </div>
                    {location === "/flight" &&
                        <p className="animate-fadeIn ml-1 text-base text-blue max-w-full">Самолёт</p>}
                </Link>
                <Link to="/journey" className="flex items-center">
                    <div className={"bg-primary relative z-10"}>
                        <TrainImg
                            className={clsx("blue-fill-hover transition", location === "/journey" && "blue-fill")}/>
                    </div>
                    {location === "/journey" && <p className="animate-fadeIn ml-1 text-base text-blue">Поезд</p>}
                </Link>
                <Link to="/bus" className="flex items-center">
                    <div className={"bg-primary relative z-10"}>
                        <BusImg className={clsx("blue-fill-hover transition", location === "/bus" && "blue-fill")}/>
                    </div>
                    {location === "/bus" && <p className="animate-fadeIn ml-1 text-base text-blue">Автобусы</p>}
                </Link>
                <Link to="/bed" className="flex items-center">
                    <div className={"bg-primary relative z-10"}>
                        <BedImg className={clsx("blue-fill-hover transition", location === "/bed" && "blue-fill")}/>
                    </div>
                    {location === "/bed" && <p className="animate-fadeIn ml-1 text-base text-blue">Отели</p>}
                </Link>
                <Link to="/web" className="flex items-center">
                    <div className={"bg-primary relative z-10"}>
                        <WebImg className={clsx("blue-fill-hover transition", location === "/web" && "blue-fill")}/>
                    </div>
                    {location === "/web" && <p className="animate-fadeIn ml-1 text-base text-blue">Аэроэкспресс</p>}
                </Link>
                <Link to="/car" className="flex items-center">
                    <div className={"bg-primary relative z-10"}>
                        <CarImg className={clsx("blue-fill-hover transition", location === "/car" && "blue-fill")}/>
                    </div>
                    {location === "/car" && <p className="animate-fadeIn ml-1 text-base text-blue">Автомобили</p>}
                </Link>
                <Link to="/yandex-taxi" className="flex items-center">
                    <div className={"bg-primary relative z-10"}>
                        <YandexTaxiImg
                            className={clsx("blue-fill-hover transition", location === "/yandex-taxi" && "blue-fill")}/>
                    </div>
                    {location === "/yandex-taxi" &&
                        <p className="animate-fadeIn ml-1 text-base text-blue">Яндекс.Такси</p>}
                </Link>
                <Link to="/restaurant" className="flex items-center">
                    <div className={"bg-primary relative z-10"}>
                        <RestaurantImg
                            className={clsx("blue-fill-hover transition", location === "/restaurant" && "blue-fill")}/>
                    </div>
                    {location === "/restaurant" && <p className="animate-fadeIn ml-1 text-base text-blue">Рестораны</p>}
                </Link>
            </div>
            <button className={"bg-primary border rounded-primary px-9 h-[45px] flex justify-center items-center transition hover:bg-[#DCE0E5]"}>
                <p className={"text-blue text-base"}>Создать поездку</p>
            </button>
        </div>
    )
};

export {Header};
