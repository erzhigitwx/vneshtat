import {createSlice} from "@reduxjs/toolkit";
import {FilterData} from "@/widgets/journey/journey-operations/model/journey.store";
import {airportsFrom, priceRanges, timeOnWayRanges} from "../utils";
import {changeCheckbox, checkIfChanged} from "@/shared/utils";
import {Range} from "@/shared/types";
import {CheckboxItem} from "@/shared/UI/checkbox/checkbox.props";

export interface FlightState {
    priceRange: FilterData<Range>;
    flightDate: Date | null;
    timeFrom: FilterData<Range>;
    timeTo: FilterData<Range>;
    airportFrom: FilterData<CheckboxItem[]>;
    airportTo: FilterData<CheckboxItem[]>;
}

const initialState: FlightState = {
    priceRange: { data: priceRanges, isChanged: false },
    timeFrom: { data: timeOnWayRanges, isChanged: false },
    timeTo: { data: timeOnWayRanges, isChanged: false },
    airportFrom: { data: airportsFrom, isChanged: false },
    airportTo: { data: airportsFrom, isChanged: false },
    flightDate: null,
};

const flightStore = createSlice({
    name: "flight",
    initialState,
    reducers: {
        setFlightDate: (state, action) => {
            state.flightDate = action.payload;
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
        setAirportFrom: (state, action) => {
            if (action.payload === "default") {
                state.airportFrom.data = initialState.airportFrom.data;
                state.airportFrom.isChanged = false;
            } else {
                const { id, oneChoise } = action.payload;
                state.airportFrom.data = changeCheckbox(state.airportFrom.data, id, oneChoise);
                state.airportFrom.isChanged = checkIfChanged(initialState.airportFrom.data, state.airportFrom.data);
            }
        },
        setAirportTo: (state, action) => {
            if (action.payload === "default") {
                state.airportTo.data = initialState.airportTo.data;
                state.airportTo.isChanged = false;
            } else {
                const { id, oneChoise } = action.payload;
                state.airportTo.data = changeCheckbox(state.airportTo.data, id, oneChoise);
                state.airportTo.isChanged = checkIfChanged(initialState.airportTo.data, state.airportTo.data);
            }
        },
    }
})

export const {setFlightDate, setPriceRange, setAirportFrom, setAirportTo, setTimeFrom, setTimeTo
} = flightStore.actions
export default flightStore.reducer