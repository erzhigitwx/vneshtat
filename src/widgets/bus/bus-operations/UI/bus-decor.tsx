import CrossImg from "@/assets/icons/cross.svg?react";

const BusDecor = () => {
    return (
        <div className={"w-full h-full max-h-[calc(100vh-380px)] overflow-y-auto scroll"}>
            <div className={"flex justify-between items-center"}>
                <h3>Маршрут</h3>
                <button>
                    <CrossImg className={"grey-fill min-w-7 min-h-7"}/>
                </button>
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <div className={"flex flex-col gap-2.5"}>

            </div>
        </div>
    )
};

export {BusDecor};