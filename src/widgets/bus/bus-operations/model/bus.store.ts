import {createSlice} from "@reduxjs/toolkit";
import {City} from "@/shared/types";

export interface FlightState {
    journeyDate: Date | null;
    cityTo: City | null
    cityFrom: City | null
    cityToName: string
    cityFromName: string
}

const initialState: FlightState = {
    journeyDate: null,
    cityTo: null,
    cityFrom: null,
    cityToName: "",
    cityFromName: ""
};


const busStore = createSlice({
    name: "bus",
    initialState,
    reducers: {
        setJourneyDate: (state, action) => {
            state.journeyDate = action.payload
        },
        setCityFrom: (state, action) => {
            state.cityFrom = action.payload;
        },
        setCityTo: (state, action) => {
            state.cityTo = action.payload;
        },
        setCityFromName: (state, action) => {
            state.cityFromName = action.payload;
        },
        setCityToName: (state, action) => {
            state.cityToName = action.payload;
        },
    }
})

export const { setJourneyDate, setCityToName, setCityFromName, setCityTo, setCityFrom } = busStore.actions;
export default busStore.reducer