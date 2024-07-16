const FlightTicketPreload = () => {
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
                className={`w-full flex flex-col bg-secondary rounded-[38px] h-[236px] gap-8 px-5 py-6`}>
                <div className={"w-full flex gap-2.5"}>
                    <div className={"flex items-center gap-2.5 mb-5"}>
                        <button className={"rounded-full w-5 h-5 bg-[#DCE0E5] rounded-secondary"}>
                        </button>
                        <button className={"rounded-full w-5 h-5 bg-[#DCE0E5] rounded-secondary"}>
                        </button>
                    </div>
                    <div className={"w-full flex gap-6"}>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"h-4 w-24 bg-[#DCE0E5] rounded-secondary"}></span>
                            <span className={"h-3 w-10 bg-[#DCE0E5] rounded-secondary"}></span>
                        </div>
                        <div className={"w-full flex flex-col gap-1"}>
                            <div className={"flex justify-center items-end gap-1"}>
                                <span className={"h-3 w-40 bg-[#DCE0E5] rounded-secondary"}></span>
                                <span className={"h-2 w-20 bg-[#DCE0E5] rounded-secondary"}></span>
                            </div>
                            <hr className={"w-full rounded-[5px] h-2 bg-[#DCE0E5]"}/>
                            <div className={"flex items-center justify-between"}>
                                <span className={"h-3 w-16 bg-[#DCE0E5] rounded-secondary"}></span>
                                <span className={"h-3 w-10 bg-[#DCE0E5] rounded-secondary"}></span>
                                <span className={"h-3 w-16 bg-[#DCE0E5] rounded-secondary"}></span>
                            </div>
                        </div>
                        <div className={"flex flex-col items-end gap-1"}>
                            <span className={"h-4 w-24 bg-[#DCE0E5] rounded-secondary"}></span>
                            <span className={"h-3 w-10 bg-[#DCE0E5] rounded-secondary"}></span>
                        </div>
                    </div>
                    <div className={"flex gap-2.5 ml-4"}>
                    </div>
                </div>
                <div className={"w-full flex gap-2.5"}>
                    <div className={"flex items-center gap-2.5 mb-5"}>
                        <button className={"rounded-full w-5 h-5 bg-[#DCE0E5]"}>
                        </button>
                        <button className={"rounded-full w-5 h-5 bg-[#DCE0E5]"}>
                        </button>
                    </div>
                    <div className={"w-full flex gap-6"}>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"h-4 w-24 bg-[#DCE0E5] rounded-secondary"}></span>
                            <span className={"h-3 w-10 bg-[#DCE0E5] rounded-secondary"}></span>
                        </div>
                        <div className={"w-full flex flex-col gap-1"}>
                            <div className={"flex justify-center items-end gap-1"}>
                                <span className={"h-3 w-40 bg-[#DCE0E5] rounded-secondary"}></span>
                                <span className={"h-2 w-20 bg-[#DCE0E5] rounded-secondary"}></span>
                            </div>
                            <hr className={"w-full rounded-[5px] h-2 bg-[#DCE0E5]"}/>
                            <div className={"flex items-center justify-between"}>
                                <span className={"h-3 w-16 bg-[#DCE0E5] rounded-secondary"}></span>
                                <span className={"h-3 w-10 bg-[#DCE0E5] rounded-secondary"}></span>
                                <span className={"h-3 w-16 bg-[#DCE0E5] rounded-secondary"}></span>
                            </div>
                        </div>
                        <div className={"flex flex-col items-end gap-1"}>
                            <span className={"h-4 w-24 bg-[#DCE0E5] rounded-secondary"}></span>
                            <span className={"h-3 w-10 bg-[#DCE0E5] rounded-secondary"}></span>
                        </div>
                    </div>
                    <div className={"flex gap-2.5 ml-4"}>
                    </div>
                </div>
                <div className={"flex items-center justify-end gap-2.5 mt-4"}>
                    <button
                        className={"p-2 w-9 h-9 flex justify-center items-center bg-[#DCE0E5] rounded-secondary"}>
                    </button>
                    <button
                        className={"p-2 w-9 h-9 flex justify-center items-center bg-[#DCE0E5] rounded-secondary"}>
                    </button>
                    <button
                        className={"w-52 h-9 py-4 px-9 flex justify-center items-center bg-[#DCE0E5] rounded-primary"}>
                    </button>
                </div>
            </div>
        </div>
    )
};

export {FlightTicketPreload};