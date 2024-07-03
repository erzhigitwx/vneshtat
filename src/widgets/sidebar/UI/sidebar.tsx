import LogoImg from "@/assets/icons/logo.svg?react";
import HomeImg from "@/assets/icons/home.svg?react";
import SwapImg from "@/assets/icons/swap.svg?react";
import CopyImg from "@/assets/icons/copy.svg?react";
import MessageImg from "@/assets/icons/message.svg?react";
import JobImg from "@/assets/icons/job.svg?react";
import ScopeImg from "@/assets/icons/scope.svg?react";
import FilterImg from "@/assets/icons/filter.svg?react";
import RightImg from "@/assets/icons/arrow-right.svg?react";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={"flex flex-col gap-5 items-center mt-5 min-w-fit ultra:w-full w-fit max-w-[100px]"}>
            <Link to={"/"}>
                <LogoImg/>
            </Link>
            <div className={"h-full w-full flex flex-col items-center py-8 px-5 mt-3 gap-7 ultra:gap-10 bg-primary rounded-primary"}>
                <div className={"flex flex-col gap-7 ultra:gap-12"}>
                    <Link to={"/"}>
                        <HomeImg className={"blue-fill-hover transition min-w-5 min-h-5 ultra:min-w-8 ultra:min-h-8"}/>
                    </Link>
                    <Link to={"/"}>
                        <SwapImg className={"blue-fill-hover transition min-w-5 min-h-5 ultra:min-w-8 ultra:min-h-8"}/>
                    </Link>
                    <Link to={"/"}>
                        <CopyImg className={"blue-fill-hover transition min-w-5 min-h-5 ultra:min-w-8 ultra:min-h-8"}/>
                    </Link>
                </div>
                <hr className={"h-[1px] w-full bg-[#e5e7ea]"}/>
                <div className={"flex flex-col gap-7 ultra:gap-12"}>
                    <Link to={"/"}>
                        <MessageImg className={"blue-fill-hover transition ultra:min-w-8 ultra:min-h-8"}/>
                    </Link>
                    <Link to={"/"}>
                        <JobImg className={"blue-fill-hover transition ultra:min-w-8 ultra:min-h-8"}/>
                    </Link>
                </div>
                <hr className={"h-[1px] w-full bg-[#e5e7ea]"}/>
                <div className={"flex flex-col gap-7 ultra:gap-12"}>
                    <Link to={"/"}>
                        <ScopeImg className={"blue-fill-hover transition ultra:min-w-8 ultra:min-h-8"}/>
                    </Link>
                    <Link to={"/"}>
                        <FilterImg className={"blue-fill-hover transition ultra:min-w-8 ultra:min-h-8"}/>
                    </Link>
                </div>
                <hr className={"h-[1px] w-full bg-[#e5e7ea]"}/>
                <div>
                    <RightImg className={"blue-fill-hover transition ultra:min-w-8 ultra:min-h-8"}/>
                </div>
            </div>
            <div className={"w-full min-h-16 rounded-[23px] flex justify-center items-center bg-black"}>
                <div className={"bg-section mt-auto mb-auto rounded-[100%] py-1.5 px-2"}>
                    <p className={"text-lg tracking-[-0.1em]"}>ИБ</p>
                </div>
            </div>
        </div>
    )
};

export {Sidebar};