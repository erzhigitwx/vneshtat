const JourneyRoute = () => {
    return (
        <div className={"w-full max-h-[55vh] overflow-y-auto scroll"}>
            <div className={"flex justify-between items-center"}>
                <h3>Маршрут</h3>
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <div className={"flex flex-col gap-4"}>
                <h4 className={"text-base text-meduim"}>Направления</h4>
                <div className={"flex flex-col gap-2.5"}>
                    <input placeholder={"Откуда"} className={"bg-secondary rounded-primary text-sm py-2 px-2.5"}/>
                    <input placeholder={"Куда"} className={"bg-secondary rounded-primary text-sm py-2 px-2.5"}/>
                </div>
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <div className={"flex flex-col gap-4"}>
                <h4 className={"text-base text-meduim"}>Даты</h4>
                <div className={"flex flex-col gap-2.5"}>
                    <input placeholder={"Туда"} className={"bg-secondary rounded-primary text-sm py-2 px-2.5"} type={"date"}/>
                    <input placeholder={"Обратно"} className={"bg-secondary rounded-primary text-sm py-2 px-2.5"} type={"date"}/>
                </div>
            </div>
        </div>
    )
};

export {JourneyRoute};