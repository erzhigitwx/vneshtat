import {combineReducers, configureStore} from '@reduxjs/toolkit'
import journeyStore from "@/widgets/journey/journey-operations/model/journey.store";
import flightStore from "@/widgets/flight/flight-operations/model/flight.store";
import busStore from "@/widgets/bus/bus-operations/model/bus.store";
import promoStore from "@/widgets/promo/promo-popups/model/promo.store";
import registrationCompanyStore from "@/widgets/registration/registration-company/model/registration-company.store";
import loginStore from "@/widgets/login/login-user/model/login.store";
import hotelStore from "@/widgets/hotel/hotel-operations/model/hotel.store";
import {thunk} from "redux-thunk";
import userStore from "@/app/model/user.store";

const rootReducer = combineReducers({
    journey: journeyStore,
    flight: flightStore,
    bus: busStore,
    user: userStore,
    promo: promoStore,
    login: loginStore,
    hotel: hotelStore,
    registrationCompany: registrationCompanyStore
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch