import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/config/store";
import CrossImg from "@/assets/icons/cross.svg?react";
import PlusImg from "@/assets/icons/plus.svg?react";
import {Checkbox, Dropdown, InputDate} from "@/shared/UI";
import {addFlight, removeFlight, setClass, updateFlight} from "../model/flight.store";

const FlightRoute = () => {
    const flights = useSelector((state: RootState) => state.flight.flights);
    const classes = useSelector((state: RootState) => state.flight.class);
    const activeClass = classes.find(item => item.isSelected);
    const dispatch = useDispatch();

    const handleInputChange = (id: number, field: string, value: string | Date | null) => {
        dispatch(updateFlight({id, field, value}));
    };

    return (
        <div className={"w-full h-[calc(100vh-380px)] flex flex-col"}>
            <div className={"flex justify-between items-center"}>
                <h3>Маршрут</h3>
            </div>
            <hr className={"h-[1px] bg-[#E5E7EA] rounded-[1px] mt-2.5"}/>
            <div className={"h-[calc(100vh-380px)] overflow-y-auto scroll py-2.5"}>
                <Dropdown title={"Класс"} selectedText={activeClass && activeClass.content} extraClass={"py-2"}>
                    <Checkbox items={classes} onChange={(id: number) => dispatch(setClass({id, oneChoise: true}))}/>
                </Dropdown>
                {flights.map(flight => (
                    <div key={flight.id} className={"flex flex-col gap-2.5 mt-2.5"}>
                        {flight.id !== 1 && <hr className={"h-[1px] bg-[#E5E7EA] rounded-[1px] mt-[15px]"}/>}
                        <div className={"flex items-center justify-between"}>
                            <h4 className={"text-base text-medium"}>Перелет #{flight.id}</h4>
                            {flight.id !== 1 && (
                                <button onClick={() => dispatch(removeFlight(flight.id))}>
                                    <CrossImg className={"grey-fill min-w-7 min-h-7"}/>
                                </button>
                            )}
                        </div>
                        <div className={"flex flex-col gap-2.5 mt-[5px]"}>
                            <input
                                value={flight.departureCity}
                                placeholder={"Город вылета"}
                                className={"bg-secondary rounded-primary text-sm py-2 px-2.5 max-h-[30px]"}
                                onChange={(e) => handleInputChange(flight.id, 'departureCity', e.target.value)}
                            />
                            <input
                                value={flight.arrivalCity}
                                placeholder={"Город прибытия"}
                                className={"bg-secondary rounded-primary text-sm py-2 px-2.5 max-h-[30px]"}
                                onChange={(e) => handleInputChange(flight.id, 'arrivalCity', e.target.value)}
                            />
                            <InputDate
                                setter={(value: Date) => handleInputChange(flight.id, 'flightDate', value)}
                                inputValue={flight.flightDate}
                                placeholder={"Дата"}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <hr className={"h-[1px] bg-[#E5E7EA] rounded-[1px] mb-[15px]"}/>
            <button
                className={"w-full border border-solid border-[#e5e7ea] rounded-[23px] flex justify-between items-center py-4 px-4"}
                onClick={() => dispatch(addFlight())}
            >
                <p className={"text-base text-[#787b86]"}>Добавить перелёт</p>
                <PlusImg className={"min-h-5 min-w-5"}/>
            </button>
        </div>
    )
};

export {FlightRoute};