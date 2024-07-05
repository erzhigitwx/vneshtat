import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import {InputDate} from "@/shared/UI";
import {setFlightDate} from "../model/flight.store";

const FlightRoute = () => {
    const flightDate = useSelector((state: RootState) => state.flight.flightDate);
    const dispatch = useDispatch();

    return (
        <div className={"w-full h-full max-h-[calc(100vh-300px)] overflow-y-auto scroll"}>
            <div className={"flex justify-between items-center"}>
                <h3>Маршрут</h3>
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <div className={"flex flex-col gap-4"}>
                <h4 className={"text-base text-meduim"}>Направления</h4>
                <div className={"flex flex-col gap-2.5"}>
                    <input
                        placeholder={"Город вылета"}
                        className={"bg-secondary rounded-primary text-sm py-2 px-2.5 max-h-[30px]"}/>
                    <input
                        placeholder={"Город прибытия"}
                        className={"bg-secondary rounded-primary text-sm py-2 px-2.5 max-h-[30px]"}/>
                </div>
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <div className={"flex flex-col gap-4"}>
                <h4 className={"text-base text-meduim"}>Даты</h4>
                <div className={"flex flex-col gap-2.5"}>
                    <InputDate
                        setter={(value: Date) => dispatch(setFlightDate(value))}
                        inputValue={flightDate}
                        placeholder={"Туда"}
                    />
                </div>
            </div>
        </div>
    )
};

export {FlightRoute};