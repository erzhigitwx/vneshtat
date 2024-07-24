import {InputCity, InputDate} from "@/shared/UI";
import {useDispatch, useSelector} from "react-redux";
import {setCityFrom, setCityFromName, setCityTo, setCityToName, setDateBack, setDateTo} from "../model/journey.store";
import {RootState} from "@/app/config/store";

const JourneyRoute = () => {
    const {dateTo, dateBack, cityFromName, cityToName} = useSelector((state: RootState) => state.journey);
    const dispatch = useDispatch();

    return (
        <div className={"w-full h-[calc(100vh-300px)]"}>
            <div className={"flex justify-between items-center"}>
                <h3>Маршрут</h3>
            </div>
            <hr className={"h-[1px] bg-[#E5E7EA] rounded-[1px] mt-2.5"}/>
            <div className={"max-h-[calc(100vh-350px)] overflow-y-auto scroll py-2.5"}>
                <div className={"flex flex-col gap-4"}>
                    <h4 className={"text-base font-medium"}>Направления</h4>
                    <div className={"flex flex-col gap-2.5"}>
                        <InputCity
                            placeholder={"Откуда"}
                            value={cityFromName}
                            setValue={(str) => dispatch(setCityFromName(str))}
                            callback={(city) => dispatch(setCityFrom(city))}
                        />
                        <InputCity
                            placeholder={"Куда"}
                            extraClass={"max-h-9"}
                            value={cityToName}
                            setValue={(str) => dispatch(setCityToName(str))}
                            callback={(city) => dispatch(setCityTo(city))}
                        />
                    </div>
                </div>
                <hr className={"h-[1px] bg-[#E5E7EA] rounded-[1px] my-2.5"}/>
                <div className={"flex flex-col gap-4"}>
                    <h4 className={"text-base font-medium"}>Даты</h4>
                    <div className={"flex flex-col gap-2.5"}>
                        <InputDate
                            setter={(value: Date) => dispatch(setDateTo(value))}
                            inputValue={dateTo}
                            placeholder={"Туда"}
                        />
                        <InputDate
                            setter={(value: Date) => dispatch(setDateBack(value))}
                            inputValue={dateBack}
                            placeholder={"Обратно"}
                            calendarOpt={{minDate: dateTo}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export {JourneyRoute};