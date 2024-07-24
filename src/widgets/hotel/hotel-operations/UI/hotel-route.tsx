import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import {InputCity, InputDate} from "@/shared/UI";
import {setCity, setCityName, setDateBack, setDateTo} from "../model/hotel.store";

const HotelRoute = () => {
    const {dateTo, dateBack, cityName} = useSelector((state: RootState) => state.hotel);
    const dispatch = useDispatch();

    return (
        <div className={"w-full"}>
            <div className={"flex justify-between items-center"}>
                <h3>Маршрут</h3>
            </div>
            <hr className={"h-[1px] bg-[#E5E7EA] rounded-[1px] mt-2.5"}/>
            <div className={"py-2.5 h-[calc(100vh-420px)] overflow-y-auto scroll"}>
                <div className={"flex flex-col gap-4"}>
                    <h4 className={"text-base font-medium"}>Город</h4>
                    <InputCity
                        placeholder={"Город, страна"}
                        value={cityName}
                        setValue={(str) => dispatch(setCityName(str))}
                        callback={(city) => dispatch(setCity(city))}
                    />
                </div>
                <hr className={"h-[1px] bg-[#E5E7EA] rounded-[1px] my-2.5"}/>
                <div className={"flex flex-col gap-4"}>
                    <h4 className={"text-base font-medium"}>Даты</h4>
                    <div className={"flex flex-col gap-2.5"}>
                        <InputDate
                            setter={(value: Date) => dispatch(setDateTo(value))}
                            inputValue={dateTo}
                            placeholder={"Дата заезда"}
                        />
                        <InputDate
                            setter={(value: Date) => dispatch(setDateBack(value))}
                            inputValue={dateBack}
                            placeholder={"Дата выезда"}
                            calendarOpt={{minDate: dateTo}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

export {HotelRoute};