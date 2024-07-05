import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import {InputDate} from "@/shared/UI";
import {setJourneyDate} from "@/widgets/bus/bus-operations/model/bus.store";

const BusRoute = () => {
    const journeyDate = useSelector((state: RootState) => state.bus.journeyDate);
    const dispatch = useDispatch();

    return (
        <div className={"w-full h-full max-h-[calc(100vh-380px)] overflow-y-auto scroll"}>
            <div className={"flex justify-between items-center"}>
                <h3>Маршрут</h3>
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <div className={"flex flex-col gap-4"}>
                <h4 className={"text-base text-meduim"}>Направления</h4>
                <div className={"flex flex-col gap-2.5"}>
                    <input
                        placeholder={"Город отправления"}
                        className={"bg-secondary rounded-primary text-sm py-2 px-2.5 max-h-[30px]"}/>
                    <input
                        placeholder={"Город прибытия"}
                        className={"bg-secondary rounded-primary text-sm py-2 px-2.5 max-h-[30px]"}/>
                </div>
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <div className={"flex flex-col gap-4"}>
                <h4 className={"text-base text-meduim"}>Дата</h4>
                <div className={"flex flex-col gap-2.5"}>
                    <InputDate
                        setter={(value: Date) => dispatch(setJourneyDate(value))}
                        inputValue={journeyDate}
                        placeholder={"Туда"}
                    />
                </div>
            </div>
        </div>
    )
};

export {BusRoute};