import {InputDate} from "@/shared/UI";
import {useDispatch, useSelector} from "react-redux";
import {setDateBack, setDateTo} from "@/widgets/journey-operations/model/filter.store";
import {RootState} from "@/app/config/store";

const JourneyRoute = () => {
    const dateTo = useSelector((state: RootState) => state.filters.dateTo);
    const dateBack = useSelector((state: RootState) => state.filters.dateBack);
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
                        placeholder={"Откуда"}
                        className={"bg-secondary rounded-primary text-sm py-2 px-2.5 max-h-[30px]"}/>
                    <input
                        placeholder={"Куда"}
                        className={"bg-secondary rounded-primary text-sm py-2 px-2.5 max-h-[30px]"}/>
                </div>
            </div>
            <hr className={"h-[1px] bg-section rounded-[1px] my-2.5"}/>
            <div className={"flex flex-col gap-4"}>
                <h4 className={"text-base text-meduim"}>Даты</h4>
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
    )
};

export {JourneyRoute};