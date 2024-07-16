const JourneyTicketPreload = () => {
    return (
        <div className={`flex items-center gap-5`}>
            <div className={"flex flex-col gap-2.5"}>
                <button className={"rounded-secondary w-[35px] h-[35px] bg-secondary"}>
                </button>
                <button className={"rounded-secondary w-[35px] h-[35px] bg-secondary"}>
                </button>
                <button className={"rounded-secondary w-[35px] h-[35px] bg-secondary"}>
                </button>
                <button className={"rounded-secondary w-[35px] h-[35px] bg-secondary"}>
                </button>
            </div>
            <div
                className={`w-full flex flex-col bg-secondary rounded-[38px] h-[244px] p-6`}>
                <div className={`flex gap-7`}>
                    <div className={"w-full flex flex-col gap-2.5"}>
                        <div className={"flex items-center gap-2.5"}>
                            <span className={"w-30 h-4 bg-[#DCE0E5] rounded-secondary"}></span>
                        </div>
                        <div className={"flex gap-6"}>
                            <div className={"flex flex-col"}>
                                <span className={"w-40 h-3 bg-[#DCE0E5] rounded-secondary"}></span>
                                <span className={"w-40 h-3 bg-[#DCE0E5] mt-2 rounded-secondary"}></span>
                            </div>
                            <div className={"w-full flex flex-col items-center gap-1"}>
                                <span className={"w-40 h-3 bg-[#DCE0E5] rounded-secondary"}></span>
                                <hr className={"w-full rounded-[5px] h-2 bg-[#DCE0E5]"}/>
                                <span className={"w-40 h-3 bg-[#DCE0E5] rounded-secondary"}></span>
                            </div>
                            <div className={"flex flex-col"}>
                                <span className={"w-40 h-3 bg-[#DCE0E5] rounded-secondary"}></span>
                                <span className={"w-40 h-3 bg-[#DCE0E5] mt-2 rounded-secondary"}></span>
                            </div>
                        </div>
                        <div className={"flex justify-between items-center mt-14"}>
                            <span className={"flex flex-col gap-1.5"}>
                                <span className={"w-40 h-3 bg-[#DCE0E5] rounded-secondary"}></span>
                            </span>
                            <span className={"flex flex-col gap-1.5"}>
                                <span className={"w-40 h-3 bg-[#DCE0E5] rounded-secondary"}></span>
                             </span>
                        </div>
                        <div className={"flex items-center justify-between"}>
                            <button className="py-2.5 px-6 bg-[#dce0e5] rounded-primary">
                            </button>
                            <div className={"flex gap-2.5"}>
                                <button
                                    className={"p-2 w-9 h-9 flex justify-center items-center bg-[#DCE0E5] rounded-secondary"}>
                                </button>
                                <button
                                    className={"p-2 w-9 h-9 flex justify-center items-center bg-[#DCE0E5] rounded-secondary"}>
                                </button>
                                <button
                                    className={"p-2 w-9 h-9 flex justify-center items-center bg-[#DCE0E5] rounded-secondary"}>
                                </button>
                                <button
                                    className={"p-2 w-9 h-9 flex justify-center items-center bg-[#DCE0E5] rounded-secondary"}>
                                </button>
                                <button
                                    className={"p-2 w-9 h-9 flex justify-center items-center bg-[#DCE0E5] rounded-secondary"}>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export {JourneyTicketPreload};