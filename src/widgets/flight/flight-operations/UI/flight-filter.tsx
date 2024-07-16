import {useDispatch, useSelector} from "react-redux";
import TrashImg from "@/assets/icons/trash.svg?react";
import {AppDispatch, RootState} from "@/app/config/store";
import {Checkbox, Dropdown, Input, InputRange} from "@/shared/UI";
import {priceRanges, timeOnWayRanges} from "../utils";
import {Range} from "@/shared/types";
import {setAirportFrom, setAirportTo, setPriceRange, setTimeFrom, setTimeTo} from "../model/flight.store";
import {useState} from "react";

const FlightFilter = () => {
    const priceRange = useSelector((state: RootState) => state.flight.priceRange);
    const timeFrom = useSelector((state: RootState) => state.flight.timeFrom);
    const timeTo = useSelector((state: RootState) => state.flight.timeTo);
    const airportFrom = useSelector((state: RootState) => state.flight.airportFrom);
    const airportTo = useSelector((state: RootState) => state.flight.airportTo);
    const [customPriceRange, setCustomPriceRange] = useState<Range>(priceRanges);
    const dispatch: AppDispatch = useDispatch();

    const handleClearFilter = () => {
        dispatch(setPriceRange(priceRanges))
        dispatch(setTimeFrom(timeOnWayRanges))
        dispatch(setTimeTo(timeOnWayRanges))
        setCustomPriceRange(priceRanges)
        dispatch(setAirportFrom("default"));
        dispatch(setAirportTo("default"));
    }

    return (
        <div className="w-full">
            <div className="flex justify-between items-center">
                <h3>Фильтры</h3>
                <button onClick={handleClearFilter}>
                    <TrashImg className={"transition black-fill-hover black-stroke-hover"}/>
                </button>
            </div>
            <hr className="h-[1px] bg-[#E5E7EA] rounded-[1px] mt-2.5"/>
            <div className="h-[calc(100vh-410px)] overflow-y-auto scroll flex flex-col gap-2.5 py-2.5">
                <Dropdown
                    isChanged={priceRange.isChanged}
                    title="Стоимость"
                    onErase={() => {
                        setCustomPriceRange(priceRanges)
                        dispatch(setPriceRange(priceRanges));
                    }}>
                    <div className="flex flex-row gap-2.5">
                        <div className={"relative flex items-center"}>
                            <p className="text-md text-[#9b9fad] absolute ml-2.5 z-10">от</p>
                            <div className={"flex items-center flex-row-reverse justify-center w-full"}>
                                <Input
                                    className={"text-md font-medium whitespace-nowrap pl-8 pr-6 py-1.5 w-full rounded-[23px] bg-primary flex items-center gap-1 relative"}
                                    value={customPriceRange.min ? customPriceRange.min : ""}
                                    disabled
                                />
                                <p className={"text-md font-medium absolute right-2.5"}>₽</p>
                            </div>
                        </div>
                        <div className={"relative flex items-center"}>
                            <p className="text-md text-[#9b9fad] absolute ml-2.5 z-10">до</p>
                            <div className={"flex items-center flex-row-reverse justify-center w-full"}>
                                <Input
                                    className={"text-md font-medium whitespace-nowrap pl-8 pr-6 py-1.5 w-full rounded-[23px] bg-primary flex items-center gap-1 relative"}
                                    value={customPriceRange.max ? customPriceRange.max : ""}
                                    onChange={e => {
                                        const value = e.target.value.replace(/\D/g, '');
                                        setCustomPriceRange(prev => ({
                                            ...prev,
                                            max: Number(value) > prev.min ? Number(value) : prev.max
                                        }));
                                    }}
                                />
                                <p className={"text-md font-medium absolute right-2.5"}>₽</p>
                            </div>
                        </div>
                    </div>
                    <InputRange
                        min={customPriceRange.min}
                        max={customPriceRange.max}
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