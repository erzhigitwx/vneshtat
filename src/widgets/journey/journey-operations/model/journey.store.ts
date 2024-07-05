import { createSlice } from '@reduxjs/toolkit';
import {
    carriers,
    priceRanges,
    prices,
    railwaysFrom,
    services,
    timeOnWayRanges,
    weignTypes
} from "../utils";
import { CheckboxItem } from "@/shared/UI/checkbox/checkbox.props";
import { Range } from "@/shared/types";
import {changeCheckbox, checkIfChanged} from "@/shared/utils";

export interface FilterData<T> {
    data: T;
    isChanged: boolean;
}

export interface JourneyState {
    prices: FilterData<CheckboxItem[]>;
    weignTypes: FilterData<CheckboxItem[]>;
    carriers: FilterData<CheckboxItem[]>;
    railwaysFrom: FilterData<CheckboxItem[]>;
    railwaysTo: FilterData<CheckboxItem[]>;
    services: FilterData<CheckboxItem[]>;
    priceRange: FilterData<Range>;
    timeOnWay: FilterData<Range>;
    timeFrom: FilterData<Range>;
    timeTo: FilterData<Range>;
    dateTo: Date | null;
    dateBack: Date | null;
}

const initialState: JourneyState = {
    prices: { data: prices, isChanged: false },
    weignTypes: { data: weignTypes, isChanged: false },
    carriers: { data: carriers, isChanged: false },
    railwaysFrom: { data: railwaysFrom, isChanged: false },
    railwaysTo: { data: railwaysFrom, isChanged: false },
    services: { data: services, isChanged: false },
    priceRange: { data: priceRanges, isChanged: false },
    timeOnWay: { data: timeOnWayRanges, isChanged: false },
    timeFrom: { data: timeOnWayRanges, isChanged: false },
    timeTo: { data: timeOnWayRanges, isChanged: false },
    dateTo: null,
    dateBack: null,
};

const journeySlice = createSlice({
    name: 'journey',
    initialState,
    reducers: {
        setDateTo: (state, action) => {
            state.dateTo = action.payload;
        },
        setDateBack: (state, action) => {
            state.dateBack = action.payload;
        },
        setPriceRange: (state, action) => {
            state.priceRange.data = action.payload;
            state.priceRange.isChanged = checkIfChanged(initialState.priceRange.data, action.payload);
        },
        setTimeFrom: (state, action) => {
            state.timeFrom.data = action.payload;
            state.timeFrom.isChanged = checkIfChanged(initialState.timeFrom.data, action.payload);
        },
        setTimeTo: (state, action) => {
            state.timeTo.data = action.payload;
            state.timeTo.isChanged = checkIfChanged(initialState.timeTo.data, action.payload);
        },
        setTimeOnWay: (state, action) => {
            state.timeOnWay.data = action.payload;
            state.timeOnWay.isChanged = checkIfChanged(initialState.timeOnWay.data, action.payload);
        },
        setPrices: (state, action) => {
            if (action.payload === "default") {
                state.prices.data = initialState.prices.data;
                state.prices.isChanged = false;
            } else {
                const { id, oneChoise } = action.payload;
                state.prices.data = changeCheckbox(state.prices.data, id, oneChoise);
                state.prices.isChanged = checkIfChanged(initialState.prices.data, state.prices.data);
            }
        },
        setWeignTypes: (state, action) => {
            if (action.payload === "default") {
                state.weignTypes.data = initialState.weignTypes.data;
                state.weignTypes.isChanged = false;
            } else {
                const { id, oneChoise } = action.payload;
                state.weignTypes.data = changeCheckbox(state.weignTypes.data, id, oneChoise);
                state.weignTypes.isChanged = checkIfChanged(initialState.weignTypes.data, state.weignTypes.data);
            }
        },
        setCarriers: (state, action) => {
            if (action.payload === "default") {
                state.carriers.data = initialState.carriers.data;
                state.carriers.isChanged = false;
            } else {
                const { id, oneChoise } = action.payload;
                state.carriers.data = changeCheckbox(state.carriers.data, id, oneChoise);
                state.carriers.isChanged = checkIfChanged(initialState.carriers.data, state.carriers.data);
            }
        },
        setRailwaysFrom: (state, action) => {
            if (action.payload === "default") {
                state.railwaysFrom.data = initialState.railwaysFrom.data;
                state.railwaysFrom.isChanged = false;
            } else {
                const { id, oneChoise } = action.payload;
                state.railwaysFrom.data = changeCheckbox(state.railwaysFrom.data, id, oneChoise);
                state.railwaysFrom.isChanged = checkIfChanged(initialState.railwaysFrom.data, state.railwaysFrom.data);
            }
        },
        setRailwaysTo: (state, action) => {
            if (action.payload === "default") {
                state.railwaysTo.data = initialState.railwaysTo.data;
                state.railwaysTo.isChanged = false;
            } else {
                const { id, oneChoise } = action.payload;
                state.railwaysTo.data = changeCheckbox(state.railwaysTo.data, id, oneChoise);
                state.railwaysTo.isChanged = checkIfChanged(initialState.railwaysTo.data, state.railwaysTo.data);
            }
        },
        setServices: (state, action) => {
            if (action.payload === "default") {
                state.services.data = initialState.services.data;
                state.services.isChanged = false;
            } else {
                const { id, oneChoise } = action.payload;
                state.services.data = changeCheckbox(state.services.data, id, oneChoise);
                state.services.isChanged = checkIfChanged(initialState.services.data, state.services.data);
            }
        },
    },
});

export const {
    setPrices,
    setWeignTypes,
    setCarriers,
    setRailwaysFrom,
    setRailwaysTo,
    setServices,
    setPriceRange,
    setTimeOnWay,
    setTimeTo,
    setTimeFrom,
    setDateTo,
    setDateBack
} = journeySlice.actions;

export default journeySlice.reducer;
