import {combineReducers, configureStore} from '@reduxjs/toolkit'
import filterStore from "@/widgets/journey-operations/model/filter.store";

const rootReducer = combineReducers({
    filters: filterStore
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch