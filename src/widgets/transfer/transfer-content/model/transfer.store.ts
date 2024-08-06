import {City} from "@/shared/types";
import {createSlice} from "@reduxjs/toolkit";

export interface TransferState {
    cityFrom: null | City,
    cityTo: null | City,
    cityFromName: string,
    cityToName: string,
    addressFrom: string;
    addressTo: string;
    time: number;
    date: null | Date
}

const initialState: TransferState = {
    cityFrom: null,
    cityTo: null,
    cityFromName: "",
    cityToName: "",
    addressFrom: "",
    addressTo: "",
    date: null,
    time: 720,
};

const transferStore = createSlice({
    name: "flight",
    initialState,
    reducers: {
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
        setTime: (state, action) => {
            state.time = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
        setAddressFrom: (state, action) => {
            state.addressFrom = action.payload;
        },
        setAddressTo: (state, action) => {
            state.addressTo = action.payload;
        },
    }
})

export const {
    setTime,
    setCityFrom,
    setCityTo,
    setDate,
    setAddressFrom,
    setAddressTo,
    setCityFromName,
    setCityToName
} = transferStore.actions
export default transferStore.reducer;