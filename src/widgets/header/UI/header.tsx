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
    const [isRoutesHovered, setIsRoutesHovered] = useState(false);
    const [isJourneysHovered, setIsJourneysHovered] = useState(false)

    const links = [
        {to: "/flight", img: PlaneImg, text: "Самолёт"},
        {to: "/journey", img: TrainImg, text: "Поезд"},
        {to: "/bus", img: BusImg, text: "Автобусы"},
        {to: "/hotel", img: BedImg, text: "Отели"},
        {to: "/web", img: WebImg, text: "Аэроэкспресс"},
        {to: "/car", img: CarImg, text: "Трансфер"},
        {to: "/yandex-taxi", img: YandexTaxiImg, text: "Такси"},
        {to: "/restaurant", img: RestaurantImg, text: "Места"},
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
                   className="flex items-center justify-between bg-primary py-2.5 px-4 rounded-primary transition-all duration-400 w-[400px] hover:w-[980px]"
                   onMouseEnter={() => setIsRoutesHovered(true)}
                   onMouseLeave={() => setIsRoutesHovered(false)}
               >
                   {links.map(({to, img: Img, text}) => (
                       <Link
                           key={to}
                           to={to}
                           className="flex items-center overflow-hidden"
                           onMouseEnter={() => setActiveHover(to)}
                           onMouseLeave={() => setActiveHover(null)}
                       >
                           <div className={"bg-primary relative z-10"}>
                               <Img className={clsx(
                                   "blue-fill-hover transition",
                                   (location === to || activeHover === to) && "blue-fill"
                               )}/>
                           </div>
                           {isRoutesHovered && (
                               <p className={clsx(
                                   "ml-1 text-base transition-all whitespace-nowrap animate-fadeIn",
                                   activeHover === to || location === to ? "text-blue" : ""
                               )}>
                                   {text}
                               </p>
                           )}
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
