import {createSlice} from "@reduxjs/toolkit";

export interface Company {
    CompanyName: string,
    EmployeeId: number
}

interface UserStore {
    fullname: {
        name: string,
        surname: string
    }
    companies: Company[] | null
}

const initialState: UserStore = {
    fullname: {
        name: "",
        surname: ""
    },
    companies: null
}

export const userStore = createSlice({
    name: "user-slice",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.fullname = action.payload
        },
        setCompanies: (state, action) => {
            state.companies = action.payload;
        }
    }
})

export const { setUser, setCompanies } = userStore.actions;
export default userStore.reducer;