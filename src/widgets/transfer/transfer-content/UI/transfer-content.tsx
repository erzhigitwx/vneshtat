import {InputCity, InputDate, InputTime} from "@/shared/UI";
import {setCityFrom, setCityTo} from "@/widgets/flight/flight-operations/model/flight.store";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import {setCityFromName, setCityToName, setDate} from "@/widgets/transfer/transfer-content/model/transfer.store";
import {City} from "@/shared/types";
import PassengerImg from "@/assets/icons/users.svg?react";
import RouteImg from "@/assets/icons/route.svg?react";

const TransferContent = () => {
    const {date, time, cityFromName, cityToName} = useSelector((state: RootState) => state.transfer);
    const dispatch = useDispatch();

    return (
        <div className={"w-full"}>
            <div className={"bg-primary p-5 rounded-[26px]"}>
                <div className={"flex flex-row items-center gap-2.5"}>
                    <div
                        className={"flex flex-row items-center py-3 px-2.5 gap-2 max-h-9 rounded-primary bg-secondary"}>
                        <PassengerImg/>
                        <p className={"text-xs"}>+0</p>
                    </div>
                    <InputCity
                        placeholder={"Вылет"}
                        value={cityFromName}
                        setValue={(str) => dispatch(setCityFromName(str))}
                        callback={(city: City) => dispatch(setCityFrom(city))}
                    />
                    <button>
                        <RouteImg className={"grey-fill black-fill-hover transition min-w-5 min-h-5"}/>
                    </button>
                    <InputCity
                        placeholder={"Прилет"}
                        value={cityToName}
                        setValue={(str) => dispatch(setCityToName(str))}
                        callback={(city: City) => dispatch(setCityTo(city))}
                    />
                    <InputDate
                        placeholder={"Туда"}
                        extraClass={"py-3 px-2.5 h-9 min-w-[100px] max-w-[100px] rounded-primary"}
                        inputValue={date}
                        isShortDate={true}
                        withIcon={false}
                        setter={(date: Date) => {
                            dispatch(setDate(date));
                        }}
                    />
                    <InputTime time={time}/>
                </div>
            </div>
        </div>
    )
};

export {TransferContent};