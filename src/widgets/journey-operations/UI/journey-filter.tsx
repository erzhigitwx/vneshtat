import {JourneyDropdown} from "@/widgets/journey-operations/UI/journey-dropdown";
import TrashImg from "@/assets/icons/trash.svg?react";
import {Checkbox, InputRange} from "@/shared/UI";
import {useDispatch, useSelector} from "react-redux";
import {
    setCarriers, setPriceRange,
    setPrices,
    setRailwaysFrom,
    setServices, setTimeFrom, setTimeOnWay, setTimeTo,
    setWeignTypes
} from "@/widgets/journey-operations/model/filter.store";
import {AppDispatch, RootState} from "@/app/config/store";
import {priceRanges, timeOnWayRanges} from "@/widgets/journey-operations/utils";
import {Range} from "@/shared/types";

const JourneyFilter = () => {
    const prices = useSelector((state: RootState) => state.filters.prices);
    const weignTypes = useSelector((state: RootState) => state.filters.weignTypes);
    const carriers = useSelector((state: RootState) => state.filters.carriers);
    const railwaysFrom = useSelector((state: RootState) => state.filters.railwaysFrom);
    const services = useSelector((state: RootState) => state.filters.services);
    const priceRange = useSelector((state: RootState) => state.filters.priceRange);
    const timeOnWay = useSelector((state: RootState) => state.filters.timeOnWay);
    const timeFrom = useSelector((state: RootState) => state.filters.timeFrom);
    const timeTo = useSelector((state: RootState) => state.filters.timeTo);
    const dispatch: AppDispatch = useDispatch();

    return (
        <div className="w-full max-h-[calc(100vh-368px)] overflow-y-auto scroll">
            <div className="flex justify-between items-center">
                <h3>Фильтры</h3>
                <TrashImg/>
            </div>
            <hr className="h-[1px] bg-section rounded-[1px] my-2.5"/>
            <div className="flex flex-col gap-2.5">
                <JourneyDropdown
                    isChanged={true}
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
                        minVal={priceRange.min}
                        maxVal={priceRange.max}
                        onChangeValue={(values: Range) => dispatch(setPriceRange(values))}
                    />
                </JourneyDropdown>
                <JourneyDropdown
                    isChanged={true}
                    title="Время в пути"
                    onErase={() => dispatch(setTimeOnWay(timeOnWayRanges))}
                >
                    <InputRange
                        min={timeOnWayRanges.min}
                        max={timeOnWayRanges.max}
                        minVal={timeOnWay.min}
                        maxVal={timeOnWay.max}
                        isTime={true}
                        onChangeValue={(values: Range) => dispatch(setTimeOnWay(values))}
                    />
                </JourneyDropdown>
                <JourneyDropdown
                    isChanged={false}
                    title="Время отправления"
                    onErase={() => dispatch(setTimeFrom(timeOnWay))}>
                    <InputRange
                        min={timeOnWayRanges.min}
                        max={timeOnWayRanges.max}
                        minVal={timeFrom.min}
                        maxVal={timeFrom.max}
                        isTime={true}
                        onChangeValue={(values: Range) => dispatch(setTimeFrom(values))}
                    />
                </JourneyDropdown>
                <JourneyDropdown
                    isChanged={true}
                    title="Время прибытия"
                    onErase={() => dispatch(setTimeTo(timeOnWayRanges))}>
                    <InputRange
                        min={timeOnWayRanges.min}
                        max={timeOnWayRanges.max}
                        minVal={timeTo.min}
                        maxVal={timeTo.max}
                        isTime={true}
                        onChangeValue={(values: Range) => dispatch(setTimeTo(values))}
                    />
                </JourneyDropdown>
                <JourneyDropdown
                    isChanged={false}
                    title="Вокзал отправления"
                    onErase={() => dispatch(setRailwaysFrom("default"))}>
                    <Checkbox items={railwaysFrom}
                              onChange={(id: number) => dispatch(setRailwaysFrom({id, oneChoise: false}))}/>
                </JourneyDropdown>
                <JourneyDropdown isChanged={false} title="Вокзал прибытия"
                                 onErase={() => dispatch(setRailwaysFrom("default"))}>
                    <Checkbox items={railwaysFrom}
                              onChange={(id: number) => dispatch(setRailwaysFrom({id, oneChoise: false}))}/>
                </JourneyDropdown>
                <JourneyDropdown isChanged={true} title="Тип поезда" onErase={() => dispatch(setPrices("default"))}>
                    <Checkbox items={prices} onChange={(id: number) => dispatch(setPrices({id, oneChoise: false}))}/>
                </JourneyDropdown>
                <JourneyDropdown isChanged={true} title="Поезд" onErase={() => dispatch(setWeignTypes("default"))}>
                    <Checkbox items={weignTypes}
                              onChange={(id: number) => dispatch(setWeignTypes({id, oneChoise: false}))}/>
                </JourneyDropdown>
                <JourneyDropdown isChanged={true} title="Услуги" onErase={() => dispatch(setServices("default"))}>
                    <Checkbox items={services}
                              onChange={(id: number) => dispatch(setServices({id, oneChoise: false}))}/>
                </JourneyDropdown>
                <JourneyDropdown isChanged={true} title="Перевозчик" onErase={() => dispatch(setCarriers("default"))}>
                    <Checkbox items={carriers}
                              onChange={(id: number) => dispatch(setCarriers({id, oneChoise: false}))}/>
                </JourneyDropdown>
            </div>
        </div>
    )
};

export {JourneyFilter};