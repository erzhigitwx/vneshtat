import {createSlice} from "@reduxjs/toolkit";

interface PromoStoreState {
    isCeo: boolean,
    isOpen: boolean
    info: {
        fullname: string,
        companyName: string,
        travelFrequency: string,
        phone: string,
        email: string,
    }
}

const initialState: PromoStoreState = {
    isCeo: true,
    isOpen: false,
    info: {
        fullname: "",
        companyName: "",
        travelFrequency: "",
        phone: "",
        email: "",
    }
}

const promoStore = createSlice({
    name: "promo",
    initialState,
    reducers: {
        setIsCeo: (state, action) => {
            state.isCeo = action.payload
        },
        setIsOpen: (state, action) => {
            state.isOpen = action.payload
        },
        updateInfo: (state, action) => {
            const {field, value} = action.payload
            state.info[field] = value
        }
    }
})

export const { setIsCeo, updateInfo, setIsOpen } = promoStore.actions
export default promoStore.reducer