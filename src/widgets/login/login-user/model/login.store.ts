import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface LoginState {
    withPhone: boolean,
    isLoginReady: boolean,
    phone: string,
    sms: string,
    login: string
}

const initialState: LoginState = {
    withPhone: true,
    isLoginReady: false,
    phone: "",
    sms: "",
    login: ""
}

const loginStore = createSlice({
    name: "login",
    initialState,
    reducers: {
        updateLoginState: <K extends keyof LoginState>(
            state,
            action: PayloadAction<{ field: K; value: LoginState[K] }>
        ) => {
            const {field, value} = action.payload;
            state[field] = value;

            const {withPhone, phone, sms, login} = state;
            state.isLoginReady = withPhone ? !!phone && !!sms : !!login && !!sms;
        }
    }
})

export const {updateLoginState} = loginStore.actions
export default loginStore.reducer