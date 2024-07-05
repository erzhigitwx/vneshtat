import {createSlice} from "@reduxjs/toolkit";

export interface FlightState {
    journeyDate: Date | null;
}

const initialState: FlightState = {
    journeyDate: null
};


const busStore = createSlice({
    name: "bus",
    initialState,
    reducers: {
        setJourneyDate: (state, action) => {
            state.journeyDate = action.payload
        }
    }
})

export const { setJourneyDate } = busStore.actions;
export default busStore.reducer