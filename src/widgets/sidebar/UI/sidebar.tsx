import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import LogoImg from "@/assets/icons/logo.svg?react";
import HomeImg from "@/assets/icons/home.svg?react";
import SwapImg from "@/assets/icons/swap.svg?react";
import CopyImg from "@/assets/icons/copy.svg?react";
import MessageImg from "@/assets/icons/message.svg?react";
import JobImg from "@/assets/icons/job.svg?react";
import ScopeImg from "@/assets/icons/scope.svg?react";
import FilterImg from "@/assets/icons/filter.svg?react";
import RightImg from "@/assets/icons/arrow-right.svg?react";
import OptionsImg from "@/assets/icons/options.svg?react"
import {useSelector} from "react-redux";
import {RootState} from "@/app/config/store";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {fullname} = useSelector((state: RootState) => state.user);
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const location = useLocation().pathname;

    return (
        <div
            className={`flex flex-col gap-5 items-center mt-4 min-w-fit ultra:w-full w-fit max-w-[100px] ${isOpen ? "min-w-[240px]" : "min-w-[100px]"}`}>
            <Link to={"/"} className={`${isOpen && "w-full flex justify-start ml-10"}`}>
                <LogoImg/>
            </Link>
            <div
                className={`h-full w-full flex flex-col items-center mt-3 gap-2.5 py-8 px-2.5 ultra:gap-10 bg-primary rounded-primary`}>
                <div className={`w-full flex flex-col gap-2.5 ultra:gap-12`}>
                    <Link to={"/"}
                          className={`min-h-[45px] h-[45px] flex items-center justify-center p-2.5 ${isOpen ? "flex items-center justify-between w-full rounded-primary hover:bg-secondary transition group" : "rounded-primary hover:bg-secondary transition group"}`}>
                        <div className="flex gap-2.5 items-center">
                            <HomeImg
                                className={`blue-fill-hover transition min-w-5 min-h-5 ultra:min-w-8 ultra:min-h-8 ${location === "/" && "blue-fill"}`}/>
                            {isOpen && <p className={`text-sm ${location === "/" && "text-blue"}`}>Пульс</p>}
                        </div>
                        {isOpen && (
                            <div className={"h-8 w-8 bg-primary flex items-center justify-center rounded-[9px]"}>
                                <p className={"text-xs text-[#787B86]"}>27</p>
                            </div>
                        )}
                    </Link>
                    <Link to={"/swap"}
                          className={`min-h-[45px] h-[45px] flex items-center justify-center  p-2.5 ${isOpen ? "flex items-center justify-between w-full rounded-primary hover:bg-secondary transition group" : "rounded-primary hover:bg-secondary transition group"}`}>
                        <div className="flex gap-2.5 items-center">
                            <SwapImg
                                className={`blue-fill-hover transition min-w-5 min-h-5 ultra:min-w-8 ultra:min-h-8 ${location === "/swap" && "blue-fill"}`}/>
                            {isOpen && <p className={`text-sm ${location === "/swap" && "text-blue"}`}>Поездка</p>}
                        </div>
                        {isOpen && (
                            <div className={"h-8 w-8 bg-primary flex items-center justify-center rounded-[9px]"}>
                                <p className={"text-xs text-[#787B86]"}>15</p>
                            </div>
                        )}
                    </Link>
                    <Link to={"/copy"}
                          className={`min-h-[45px] h-[45px] flex items-center justify-center p-2.5 ${isOpen ? "flex items-center justify-between w-full rounded-primary hover:bg-secondary transition group" : "rounded-primary hover:bg-secondary transition group"}`}>
                        <div className="flex gap-2.5 items-center">
                            <CopyImg
                                className={`blue-fill-hover transition min-w-5 min-h-5 ultra:min-w-8 ultra:min-h-8 ${location === "/copy" && "blue-fill"}`}/>
                            {isOpen && <p className={`text-sm ${location === "/copy" && "text-blue"}`}>Шаблоны</p>}
                        </div>
                        {isOpen && (
                            <div className={"h-8 w-8 bg-primary flex items-center justify-center rounded-[9px]"}>
                                <p className={"text-xs text-[#787B86]"}>9</p>
                            </div>
                        )}
                    </Link>
                </div>
                <hr className={"h-[1px] w-full bg-[#e5e7ea]"}/>
                <div className={`w-full flex flex-col gap-2.5 ultra:gap-12`}>
                    <Link to={"/messages"}
                          className={`min-h-[45px] h-[45px] flex items-center justify-center p-2.5 ${isOpen ? "flex items-center justify-between w-full rounded-primary hover:bg-secondary transition group" : "rounded-primary hover:bg-secondary transition group"}`}>
                        <div className="flex gap-2.5 items-center">
                            <MessageImg
                                className={`blue-fill-hover transition min-w-5 min-h-5 ultra:min-w-8 ultra:min-h-8 ${location === "/messages" && "blue-fill"}`}/>
                            {isOpen &&
                                <p className={`text-sm ${location === "/messages" && "text-blue"}`}>Мессенджер</p>}
                        </div>
                        {isOpen && (
                            <div className={"h-8 w-8 bg-primary flex items-center justify-center rounded-[9px]"}>
                                <p className={"text-xs text-[#787B86]"}>3</p>
                            </div>
                        )}
                    </Link>
                    <Link to={"/jobs"}
                          className={`min-h-[45px] h-[45px] flex items-center justify-center p-2.5 ${isOpen ? "flex items-center justify-between w-full rounded-primary hover:bg-secondary transition group" : "rounded-primary hover:bg-secondary transition group"}`}>
                        <div className="flex gap-2.5 items-center">
                            <JobImg
                                className={`blue-fill-hover transition min-w-5 min-h-5 ultra:min-w-8 ultra:min-h-8 ${location === "/jobs" && "blue-fill"}`}/>
                            {isOpen && <p className={`text-sm ${location === "/jobs" && "text-blue"}`}>Компания</p>}
                        </div>
                        {isOpen && (
                            <div className={"h-8 w-8 bg-primary flex items-center justify-center rounded-[9px]"}>
                                <p className={"text-xs text-[#787B86]"}>8</p>
                            </div>
                        )}
                    </Link>
                </div>
                <hr className={"h-[1px] w-full bg-[#e5e7ea]"}/>
                <div className={`w-full flex flex-col gap-2.5 ultra:gap-12`}>
                    <Link to={"/scope"}
                          className={`min-h-[45px] h-[45px] flex items-center justify-center p-2.5 ${isOpen ? "flex items-center justify-between w-full rounded-primary hover:bg-secondary transition group" : "rounded-primary hover:bg-secondary transition group"}`}>
                        <div className="flex gap-2.5 items-center">
                            <ScopeImg
                                className={`blue-fill-hover transition min-w-5 min-h-5 ultra:min-w-8 ultra:min-h-8 ${location === "/scope" && "blue-fill"}`}/>
                            {isOpen && <p className={`text-sm ${location === "/scope" && "text-blue"}`}>Учебник</p>}
                        </div>
                        {isOpen && (
                            <div className={"h-8 w-8 bg-primary flex items-center justify-center rounded-[9px]"}>
                                <p className={"text-xs text-[#787B86]"}>12</p>
                            </div>
                        )}
                    </Link>
                    <Link to={"/filter"}
                          className={`min-h-[45px] h-[45px] flex items-center justify-center p-2.5 ${isOpen ? "flex items-center justify-between w-full rounded-primary hover:bg-secondary transition group" : "rounded-primary hover:bg-secondary transition group"}`}>
                        <div className="flex gap-2.5 items-center">
                            <FilterImg
                                className={`blue-fill-hover transition min-w-5 min-h-5 ultra:min-w-8 ultra:min-h-8 ${location === "/filter" && "blue-fill"}`}/>
                            {isOpen && <p className={`text-sm ${location === "/filter" && "text-blue"}`}>Настройки</p>}
                        </div>
                        {isOpen && (
                            <div className={"h-8 w-8 bg-primary flex items-center justify-center rounded-[9px]"}>
                                <p className={"text-xs text-[#787B86]"}>7</p>
                            </div>
                        )}
                    </Link>
                </div>
                {!isOpen && <hr className={"h-[1px] w-full bg-[#e5e7ea]"}/>}
                <button onClick={() => setIsOpen((prev) => !prev)}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                        className={`${isOpen ? "w-full pl-4 mt-5" : "mt-2.5"} flex gap-2.5 items-center`}>
                    <RightImg
                        className={`blue-fill-hover transition ultra:min-w-8 ultra:min-h-8 ${isButtonHovered && "blue-fill"} ${isOpen ? "rotate-180" : "rotate-0"}`}/>
                    {isOpen && <p className={`text-sm text-[#787B86] ${isButtonHovered && "text-blue"}`}>Свернуть</p>}
                </button>
            </div>
            {isOpen ? (
                <div
                    className={"w-full min-h-16 rounded-[23px] py-3 pl-3 pr-4 flex justify-between items-center bg-black"}>
                    <div className={"flex items-center gap-2.5"}>
                        <div className={"bg-section mt-auto mb-auto rounded-[100%] py-1.5 px-2"}>
                            <p className={"text-lg tracking-[-0.1em]"}>{fullname.name[0].toUpperCase()}{fullname.surname[0].toUpperCase()}</p>
                        </div>
                        <span className={"flex flex-col"}>
                            <h3 className={"text-base text-primary capitalize"}>{fullname.name} {fullname.surname[0].toUpperCase()}.</h3>
                            <p className={"text-[11px] text-primary"}>администратор</p>
                        </span>
                    </div>
                    <button>
                        <OptionsImg/>
                    </button>
                </div>
            ) : (
                <div className={"w-full min-h-16 rounded-[23px] flex justify-center items-center bg-black"}>
                    <div className={"bg-section mt-auto mb-auto rounded-[100%] py-1.5 px-2"}>
                        {fullname.name.length && fullname.surname.length ? (
                            <p className={"text-lg tracking-[-0.1em]"}>{fullname.name[0].toUpperCase()}{fullname.surname[0].toUpperCase()}</p>
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    );
};

export {Sidebar};
