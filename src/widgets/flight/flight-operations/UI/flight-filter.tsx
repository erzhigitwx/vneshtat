import {useDispatch, useSelector} from "react-redux";
import TrashImg from "@/assets/icons/trash.svg?react";
import {AppDispatch, RootState} from "@/app/config/store";
import {Checkbox, Dropdown, InputRange} from "@/shared/UI";
import {priceRanges, timeOnWayRanges} from "../utils";
import {Range} from "@/shared/types";
import {setAirportFrom, setAirportTo, setPriceRange, setTimeFrom, setTimeTo} from "../model/flight.store";

const FlightFilter = () => {
    const priceRange = useSelector((state: RootState) => state.flight.priceRange);
    const timeFrom = useSelector((state: RootState) => state.flight.timeFrom);
    const timeTo = useSelector((state: RootState) => state.flight.timeTo);
    const airportFrom = useSelector((state: RootState) => state.flight.airportFrom);
    const airportTo = useSelector((state: RootState) => state.flight.airportTo);
    const dispatch: AppDispatch = useDispatch();

    return (
        <div className="w-full max-h-[calc(100vh-368px)] overflow-y-auto scroll">
            <div className="flex justify-between items-center">
                <h3>Фильтры</h3>
                <TrashImg/>
            </div>
            <hr className="h-[1px] bg-[#E5E7EA] rounded-[1px] my-2.5"/>
            <div className="flex flex-col gap-2.5">
                <Dropdown
                    isChanged={priceRange.isChanged}
                    title="Стоимость"
                    onErase={() => dispatch(setPriceRange(priceRanges))}>
                    <div className="flex flex-row gap-2.5">
                        <div className="py-1.5 px-2.5 w-[50%] rounded-[23px] bg-primary flex items-end gap-1">
                            <p className="text-md text-[#9b9fad]">от</p>
                            <h6 className="text-md whitespace-nowrap">{priceRanges.min} ₽</h6>
                        </div>
                        <div className="py-1.5 px-2.5 w-[50%] rounded-[23px] bg-primary flex items-center gap-1">
                            <p className="text-md text-[#9b9fad]">до</p>
                            <h6 className="text-md whitespace-nowrap">{priceRanges.max} ₽</h6>
                        </div>
                    </div>
                    <InputRange
                        min={priceRanges.min}
                        max={priceRanges.max}
                        minVal={priceRange.data.min}
                        maxVal={priceRange.data.max}
                        onChangeValue={(values: Range) => dispatch(setPriceRange(values))}
                    />
                </Dropdown>
                <Dropdown
                    isChanged={timeFrom.isChanged}
                    title="Время отправления"
                    onErase={() => dispatch(setTimeFrom(timeOnWayRanges))}>
                    <InputRange
                        min={timeOnWayRanges.min}
                        max={timeOnWayRanges.max}
                        minVal={timeFrom.data.min}
                        maxVal={timeFrom.data.max}
                        isTime={true}
                        onChangeValue={(values: Range) => dispatch(setTimeFrom(values))}
                    />
                </Dropdown>
                <Dropdown
                    isChanged={timeTo.isChanged}
                    title="Время прибытия"
                    onErase={() => dispatch(setTimeTo(timeOnWayRanges))}>
                    <InputRange
                        min={timeOnWayRanges.min}
                        max={timeOnWayRanges.max}
                        minVal={timeTo.data.min}
                        maxVal={timeTo.data.max}
                        isTime={true}
                        onChangeValue={(values: Range) => dispatch(setTimeTo(values))}
                    />
                </Dropdown>
                <Dropdown
                    isChanged={airportFrom.isChanged}
                    title="Вокзал отправления"
                    onErase={() => dispatch(setAirportFrom("default"))}>
                    <Checkbox
                        items={airportFrom.data}
                        onChange={(id: number) => dispatch(setAirportFrom({id, oneChoise: false}))}
                    />
                </Dropdown>
                <Dropdown
                    isChanged={airportTo.isChanged}
                    title="Вокзал прибытия"
                    onErase={() => dispatch(setAirportTo("default"))}>
                    <Checkbox
                        items={airportTo.data}
                        onChange={(id: number) => dispatch(setAirportTo({id, oneChoise: false}))}
                    />
                </Dropdown>
            </div>
        </div>
    );
};

export {FlightFilter};