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
            <div className={"flex items-center gap-2.5"}>
                <button>
                    <BurgerImg className={"w-6 h-6"}/>
                </button>
                <p className={"text-base text-"}>Все поездки</p>
            </div>
            <div className={"flex flex-row items-center gap-6"}>
                <Link to="/flight">
                    <PlaneImg className={clsx("blue-fill-hover transition", location === "/flight" && "blue-fill")}/>
                </Link>
                <Link to="/journey">
                    <TrainImg className={clsx("blue-fill-hover transition", location === "/journey" && "blue-fill")}/>
                </Link>
                <Link to="/bus">
                    <BusImg className={clsx("blue-fill-hover transition", location === "/bus" && "blue-fill")}/>
                </Link>
                <Link to="/bed">
                    <BedImg className={clsx("blue-fill-hover transition", location === "/bed" && "blue-fill")}/>
                </Link>
                <Link to="/web">
                    <WebImg className={clsx("blue-fill-hover transition", location === "/web" && "blue-fill")}/>
                </Link>
                <Link to="/car">
                    <CarImg className={clsx("blue-fill-hover transition", location === "/car" && "blue-fill")}/>
                </Link>
                <Link to="/yandex-taxi">
                    <YandexTaxiImg
                        className={clsx("blue-fill-hover transition", location === "/yandex-taxi" && "blue-fill")}/>
                </Link>
                <Link to="/restaurant">
                    <RestaurantImg
                        className={clsx("blue-fill-hover transition", location === "/restaurant" && "blue-fill")}/>
                </Link>
            </div>
            <button className={"bg-primary border rounded-primary px-9 h-[45px] flex justify-center items-center"}>
                <p className={"text-blue text-base"}>Создать поездку</p>
            </button>
        </div>
    )
};

export {Header};