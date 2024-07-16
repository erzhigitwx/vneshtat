import clsx from "clsx";
import {Link, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
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
    const [visibleHover, setVisibleHover] = useState<string | null>(null);
    const [isJourneysHovered, setIsJourneysHovered] = useState(false)

    const links = [
        {to: "/flight", img: PlaneImg, text: "Самолёт"},
        {to: "/journey", img: TrainImg, text: "Поезд"},
        {to: "/bus", img: BusImg, text: "Автобусы"},
        {to: "/hotel", img: BedImg, text: "Отели"},
        {to: "/web", img: WebImg, text: "Аэроэкспресс"},
        {to: "/car", img: CarImg, text: "Автомобили"},
        {to: "/yandex-taxi", img: YandexTaxiImg, text: "Яндекс.Такси"},
        {to: "/restaurant", img: RestaurantImg, text: "Рестораны"},
    ];

    useEffect(() => {
        if (activeHover) {
            setVisibleHover(activeHover);
        } else {
            const timer = setTimeout(() => {
                setVisibleHover(null);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [activeHover]);

    return (
        <div className="flex justify-between items-center py-[10px]">
            <div className="flex items-center bg-primary py-2.5 px-4 rounded-primary gap-2.5 cursor-pointer"
                 onMouseEnter={() => setIsJourneysHovered(true)}
                 onMouseLeave={() => setIsJourneysHovered(false)}>
                <button>
                    <BurgerImg className={`transition w-6 h-6 ${isJourneysHovered && "blue-fill"}`}/>
                </button>
                <p className={`transition text-base ${isJourneysHovered && "text-blue"}`}>Все поездки</p>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex items-center justify-between bg-primary py-2.5 px-4 rounded-primary transition-all duration-400 hover:w-[500px] w-[400px]">
                    {links.map(({to, img: Img, text}) => (
                        <Link
                            key={to}
                            to={to}
                            className="flex items-center"
                            onMouseEnter={() => setActiveHover(to)}
                            onMouseLeave={() => setActiveHover(null)}
                        >
                            <div className={"bg-primary relative z-10"}>
                                <Img className={clsx(
                                    "blue-fill-hover transition",
                                    (location === to || activeHover === to) && "blue-fill"
                                )}/>
                            </div>
                            {visibleHover === to && (
                                <p className={clsx(
                                    "ml-1 text-base text-blue transition-all",
                                    activeHover === to ? "animate-fadeIn" : "animate-fadeOut"
                                )}>
                                    {text}
                                </p>
                            )}
                        </Link>
                    ))}
                </div>
                <button
                    className="bg-primary border rounded-primary px-9 h-[45px] flex justify-center items-center transition">
                    <p className="hover:text-blue text-base">Создать поездку</p>
                </button>
            </div>
        </div>
    );
};

export {Header};
