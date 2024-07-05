import {combineReducers, configureStore} from '@reduxjs/toolkit'
import journeyStore from "@/widgets/journey/journey-operations/model/journey.store";
import flightStore from "@/widgets/flight/flight-operations/model/flight.store";
import busStore from "@/widgets/bus/bus-operations/model/bus.store";

const rootReducer = combineReducers({
    journey: journeyStore,
    flight: flightStore,
    bus: busStore
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch