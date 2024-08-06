import clsx from "clsx";
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
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
    const [isJourneysHovered, setIsJourneysHovered] = useState(false)

    const links = [
        {to: "/flight", img: PlaneImg},
        {to: "/journey", img: TrainImg},
        {to: "/bus", img: BusImg},
        {to: "/hotel", img: BedImg},
        {to: "/aero", img: WebImg},
        {to: "/transfer", img: CarImg},
        {to: "/yandex-taxi", img: YandexTaxiImg},
        {to: "/restaurant", img: RestaurantImg},
    ];

    return (
        <div className="flex justify-between items-center py-[10px]">
            <div className={"flex items-center gap-5"}>
                <button className="flex items-center bg-primary py-2.5 px-4 rounded-primary gap-2.5"
                        onMouseEnter={() => setIsJourneysHovered(true)}
                        onMouseLeave={() => setIsJourneysHovered(false)}>
                    <BurgerImg className={`transition w-6 h-6 ${isJourneysHovered && "blue-fill"}`}/>
                    <p className={`transition text-base ${isJourneysHovered && "text-blue"}`}>Все поездки</p>
                </button>
                <div
                    className="flex items-center bg-primary py-2.5 px-4 gap-6 rounded-primary transition-all"
                >
                    {links.map(({to, img: Img}) => (
                        <Link
                            key={to}
                            to={to}
                            className="flex items-center"
                            onMouseEnter={() => setActiveHover(to)}
                            onMouseLeave={() => setActiveHover(null)}
                        >
                            <Img className={clsx(
                                "blue-fill-hover transition",
                                (location === to || activeHover === to) && "blue-fill"
                            )}/>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-5">
                <button
                    className="bg-primary border rounded-primary px-9 h-[45px] flex justify-center items-center transition">
                    <p className="hover:text-blue text-base">Создать поездку</p>
                </button>
            </div>
        </div>
    );
};

export {Header};
