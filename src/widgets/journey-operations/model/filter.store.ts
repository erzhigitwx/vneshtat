import {createSlice} from '@reduxjs/toolkit';
import {
    carriers,
    priceRanges,
    prices,
    railwaysFrom,
    services,
    timeOnWayRanges,
    weignTypes
} from "@/widgets/journey-operations/utils";
import {CheckboxItem} from "@/shared/UI/checkbox/checkbox.props";
import {Range} from "@/shared/types"

export interface FiltersState {
    prices: CheckboxItem[];
    weignTypes: CheckboxItem[];
    carriers: CheckboxItem[];
    railwaysFrom: CheckboxItem[];
    services: CheckboxItem[];
    priceRange: Range;
    timeOnWay: Range
    timeFrom: Range;
    timeTo: Range;
    dateTo: Date | null;
    dateBack: Date | null;
}

const initialState: FiltersState = {
    prices: prices,
    weignTypes: weignTypes,
    carriers: carriers,
    railwaysFrom: railwaysFrom,
    services: services,
    priceRange: priceRanges,
    timeOnWay: timeOnWayRanges,
    timeFrom: timeOnWayRanges,
    timeTo: timeOnWayRanges,
    dateTo: null,
    dateBack: null,
};

const changeCheckbox = (items: CheckboxItem[], id: number, oneChoise: boolean) => {
    const updatedItems = items.map((item: CheckboxItem) => {
        if (oneChoise) {
            return {
                ...item,
                isSelected: item.id === id
            };
        } else {
            if (item.id === id) {
                return {
                    ...item,
                    isSelected: !item.isSelected
                };
            }
            return item;
        }
    });

    return updatedItems
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setDateTo: (state, action) => {
            state.dateTo = action.payload
        },
        setDateBack: (state, action) => {
            state.dateBack = action.payload
        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload
        },
        setTimeFrom: (state, action) => {
            state.timeFrom = action.payload
        },
        setTimeTo: (state, action) => {
            state.timeTo = action.payload
        },
        setTimeOnWay: (state, action) => {
            state.timeOnWay = action.payload
        },
        setPrices: (state, action) => {
            if (action.payload === "default") {
                state.prices = initialState.prices;
            } else {
                const {id, oneChoise} = action.payload;
                state.prices = changeCheckbox(state.prices, id, oneChoise);
            }
        },
        setWeignTypes: (state, action) => {
            if (action.payload === "default") {
                state.weignTypes = initialState.weignTypes;
            } else {
                const {id, oneChoise} = action.payload;
                state.weignTypes = changeCheckbox(state.weignTypes, id, oneChoise);
            }
        },
        setCarriers: (state, action) => {
            if (action.payload === "default") {
                state.carriers = initialState.carriers
            } else {
                const {id, oneChoise} = action.payload;
                state.carriers = changeCheckbox(state.carriers, id, oneChoise);
            }
        },
        setRailwaysFrom: (state, action) => {
            if (action.payload === "default") {
                state.railwaysFrom = initialState.railwaysFrom;
            } else {
                const {id, oneChoise} = action.payload;
                state.railwaysFrom = changeCheckbox(state.railwaysFrom, id, oneChoise);
            }
        },
        setServices: (state, action) => {
            if (action.payload === "default") {
                state.services = initialState.services
            } else {
                const {id, oneChoise} = action.payload;
                state.services = changeCheckbox(state.services, id, oneChoise);
            }
        },
    },
});

export const {
    setPrices,
    setWeignTypes,
    setCarriers,
    setRailwaysFrom,
    setServices,
    setPriceRange,
    setTimeOnWay,
    setTimeTo,
    setTimeFrom,
    setDateTo,
    setDateBack
} = filtersSlice.actions;

export default filtersSlice.reducer;
