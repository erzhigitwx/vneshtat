import TrashImg from "@/assets/icons/trash.svg?react";
import {Checkbox, Dropdown, InputRange} from "@/shared/UI";
import {useDispatch, useSelector} from "react-redux";
import {
    setCarriers, setPriceRange,
    setPrices,
    setRailwaysFrom, setRailwaysTo,
    setServices, setTimeFrom, setTimeOnWay, setTimeTo,
    setWeignTypes
} from "../model/journey.store";
import {AppDispatch, RootState} from "@/app/config/store";
import {priceRanges, timeOnWayRanges} from "../utils";
import {Range} from "@/shared/types";

const JourneyFilter = () => {
    const prices = useSelector((state: RootState) => state.journey.prices);
    const weignTypes = useSelector((state: RootState) => state.journey.weignTypes);
    const carriers = useSelector((state: RootState) => state.journey.carriers);
    const railwaysFrom = useSelector((state: RootState) => state.journey.railwaysFrom);
    const railwaysTo = useSelector((state: RootState) => state.journey.railwaysTo);
    const services = useSelector((state: RootState) => state.journey.services);
    const priceRange = useSelector((state: RootState) => state.journey.priceRange);
    const timeOnWay = useSelector((state: RootState) => state.journey.timeOnWay);
    const timeFrom = useSelector((state: RootState) => state.journey.timeFrom);
    const timeTo = useSelector((state: RootState) => state.journey.timeTo);
    const dispatch: AppDispatch = useDispatch();

    const handleClearFilter = () => {
        dispatch(setPriceRange(priceRanges))
        dispatch(setTimeOnWay(timeOnWayRanges))
        dispatch(setTimeFrom(timeOnWayRanges))
        dispatch(setTimeTo(timeOnWayRanges))
        dispatch(setRailwaysFrom("default"))
        dispatch(setRailwaysTo("default"))
        dispatch(setPrices("default"))
        dispatch(setWeignTypes("default"))
        dispatch(setServices("default"))
        dispatch(setCarriers("default"))
    }

    return (
        <div className="w-full max-h-[calc(100vh-368px)] overflow-y-auto scroll">
            <div className="flex justify-between items-center">
                <h3>Фильтры</h3>
                <button onClick={handleClearFilter}>
                    <TrashImg className={"transition black-stroke-hover black-fill-hover"}/>
                </button>
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
                    isChanged={timeOnWay.isChanged}
                    title="Время в пути"
                    onErase={() => dispatch(setTimeOnWay(timeOnWayRanges))}>
                    <InputRange
                        min={timeOnWayRanges.min}
                        max={timeOnWayRanges.max}
                        minVal={timeOnWay.data.min}
                        maxVal={timeOnWay.data.max}
                        isTime={true}
                        onChangeValue={(values: Range) => dispatch(setTimeOnWay(values))}
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
                    isChanged={railwaysFrom.isChanged}
                    title="Вокзал отправления"
                    onErase={() => dispatch(setRailwaysFrom("default"))}>
                    <Checkbox
                        items={railwaysFrom.data}
                        onChange={(id: number) => dispatch(setRailwaysFrom({id, oneChoise: false}))}
                    />
                </Dropdown>
                <Dropdown
                    isChanged={railwaysTo.isChanged}
                    title="Вокзал прибытия"
                    onErase={() => dispatch(setRailwaysFrom("default"))}>
                    <Checkbox
                        items={railwaysTo.data}
                        onChange={(id: number) => dispatch(setRailwaysTo({id, oneChoise: false}))}
                    />
                </Dropdown>
                <Dropdown
                    isChanged={prices.isChanged}
                    title="Тип поезда"
                    onErase={() => dispatch(setPrices("default"))}>
                    <Checkbox
                        items={prices.data}
                        onChange={(id: number) => dispatch(setPrices({id, oneChoise: false}))}
                    />
                </Dropdown>
                <Dropdown
                    isChanged={weignTypes.isChanged}
                    title="Поезд"
                    onErase={() => dispatch(setWeignTypes("default"))}>
                    <Checkbox
                        items={weignTypes.data}
                        onChange={(id: number) => dispatch(setWeignTypes({id, oneChoise: false}))}
                    />
                </Dropdown>
                <Dropdown
                    isChanged={services.isChanged}
                    title="Услуги"
                    onErase={() => dispatch(setServices("default"))}>
                    <Checkbox
                        items={services.data}
                        onChange={(id: number) => dispatch(setServices({id, oneChoise: false}))}
                    />
                </Dropdown>
                <Dropdown
                    isChanged={carriers.isChanged}
                    title="Перевозчик"
                    onErase={() => dispatch(setCarriers("default"))}>
                    <Checkbox
                        items={carriers.data}
                        onChange={(id: number) => dispatch(setCarriers({id, oneChoise: false}))}
                    />
                </Dropdown>
            </div>
        </div>
    );
};

export {JourneyFilter};