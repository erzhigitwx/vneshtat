import {combineReducers, configureStore} from '@reduxjs/toolkit'
import journeyStore from "@/widgets/journey/journey-operations/model/journey.store";
import flightStore from "@/widgets/flight/flight-operations/model/flight.store";
import busStore from "@/widgets/bus/bus-operations/model/bus.store";
import promoStore from "@/widgets/promo/promo-popups/model/promo.store";
import registrationCompanyStore from "@/widgets/registration/registration-company/model/registration-company.store";
import loginStore from "@/widgets/login/login-user/model/login.store";

const rootReducer = combineReducers({
    journey: journeyStore,
    flight: flightStore,
    bus: busStore,
    promo: promoStore,
    login: loginStore,
    registrationCompany: registrationCompanyStore
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch