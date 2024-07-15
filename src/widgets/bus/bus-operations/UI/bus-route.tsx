import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import {InputDate} from "@/shared/UI";
import {setJourneyDate} from "@/widgets/bus/bus-operations/model/bus.store";

const BusRoute = () => {
    const journeyDate = useSelector((state: RootState) => state.bus.journeyDate);
    const dispatch = useDispatch();

    return (
        <div className={"w-full"}>
            <div className={"flex justify-between items-center"}>
                <h3>Маршрут</h3>
            </div>
            <hr className={"h-[1px] bg-[#E5E7EA] rounded-[1px] mt-2.5"}/>
           <div className={"h-[calc(100vh-420px)] overflow-y-auto scroll"}>
               <div className={"flex flex-col py-2.5 gap-4"}>
                   <h4 className={"text-base font-medium"}>Направления</h4>
                   <div className={"flex flex-col gap-2.5"}>
                       <input
                           placeholder={"Город отправления"}
                           className={"bg-secondary rounded-primary text-sm py-2 px-2.5 max-h-[30px]"}/>
                       <input
                           placeholder={"Город прибытия"}
                           className={"bg-secondary rounded-primary text-sm py-2 px-2.5 max-h-[30px]"}/>
                   </div>
               </div>
               <hr className={"h-[1px] bg-[#E5E7EA] rounded-[1px] my-2.5"}/>
               <div className={"flex flex-col gap-4"}>
                   <h4 className={"text-base font-medium"}>Дата</h4>
                   <div className={"flex flex-col gap-2.5"}>
                       <InputDate
                           setter={(value: Date) => dispatch(setJourneyDate(value))}
                           inputValue={journeyDate}
                           placeholder={"Туда"}
                       />
                   </div>
               </div>
           </div>
        </div>
    )
};

export {BusRoute};