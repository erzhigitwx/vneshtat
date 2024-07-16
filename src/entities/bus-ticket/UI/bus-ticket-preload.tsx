const BusTicketPreload = () => {
    return (
        <div
            className={`w-full flex flex-col bg-secondary rounded-[23px] p-5 h-[106px]`}>
            <div className={`flex gap-7`}>
                <div className={"w-full flex flex-col gap-2.5"}>
                    <div className={"flex gap-6"}>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"h-4 w-24 bg-[#DCE0E5] rounded-secondary"}></span>
                            <span className={"h-3 w-10 bg-[#DCE0E5] rounded-secondary"}></span>
                        </div>
                        <div className={"w-full flex flex-col gap-2"}>
                            <div className={"flex items-end justify-center gap-1"}>
                                <span className={"w-24 h-3 bg-[#DCE0E5] rounded-secondary"}></span>
                                <span className={"w-32 h-2 bg-[#DCE0E5] rounded-secondary"}></span>
                            </div>
                            <hr className={"w-full rounded-[5px] h-2 bg-[#DCE0E5]"}/>
                            <div className={"flex flex-col gap-1 mt-1"}>
                                <span className={"flex items-start justify-between"}>
                                    <span className={"w-24 h-2 bg-[#DCE0E5] rounded-secondary"}></span>
                                    <span className={"w-24 h-2 bg-[#DCE0E5] rounded-secondary"}></span>
                                </span>
                                <span className={"flex items-start justify-between"}>
                                    <span className={"w-24 h-2 bg-[#DCE0E5] rounded-secondary"}></span>
                                    <span className={"w-24 h-2 bg-[#DCE0E5] rounded-secondary"}></span>
                                </span>
                            </div>
                        </div>
                        <div className={"flex flex-col items-end gap-1"}>
                            <span className={"h-4 w-24 bg-[#DCE0E5] rounded-secondary"}></span>
                            <span className={"h-3 w-10 bg-[#DCE0E5] rounded-secondary"}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export {BusTicketPreload};